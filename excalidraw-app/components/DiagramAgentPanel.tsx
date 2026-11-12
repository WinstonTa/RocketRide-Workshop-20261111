import "./DiagramAgentPanel.scss";

import { convertToExcalidrawElements } from "@excalidraw/excalidraw";
import { useApp, useExcalidrawSetAppState } from "@excalidraw/excalidraw/components/App";
import { ChatInterface } from "@excalidraw/excalidraw/components/TTDDialog/Chat";
import { MERMAID_TO_EXCALIDRAW_CONFIG } from "@excalidraw/excalidraw/mermaid";
import { newElementWith } from "@excalidraw/element";

import { atom, useAtom } from "../app-jotai";

import { askDiagramAgent } from "./diagramAgent";

import type {
  LLMMessage,
  TChat,
  TTTDDialog,
} from "@excalidraw/excalidraw/components/TTDDialog/types";

const diagramMessagesAtom = atom<TChat.ChatMessage[]>([]);
const diagramPromptAtom = atom("");
const diagramGeneratingAtom = atom(false);
const diagramElementIdsAtom = atom<string[]>([]);

const newMessage = (
  type: "user" | "assistant",
  content = "",
): TChat.ChatMessage => ({
  id: crypto.randomUUID(),
  type,
  content,
  timestamp: new Date(),
});

const toLLMMessages = (chat: TChat.ChatMessage[]): LLMMessage[] =>
  chat.flatMap((message) => {
    if (
      (message.type !== "user" && message.type !== "assistant") ||
      !message.content ||
      (message.type === "assistant" &&
        message.errorType &&
        message.errorType !== "parse")
    ) {
      return [];
    }
    return [{ role: message.type, content: message.content }];
  });

export const DiagramAgentPanel = () => {
  const app = useApp();
  const setAppState = useExcalidrawSetAppState();
  const [messages, setMessages] = useAtom(diagramMessagesAtom);
  const [currentPrompt, setCurrentPrompt] = useAtom(diagramPromptAtom);
  const [isGenerating, setIsGenerating] = useAtom(diagramGeneratingAtom);
  const [diagramElementIds, setDiagramElementIds] = useAtom(
    diagramElementIdsAtom,
  );

  const drawDiagram = async (mermaid: string, replaceLast: boolean) => {
    // Parse before modifying the canvas, so syntax failures preserve the
    // previous agent diagram and all unrelated user-created elements.
    const { parseMermaidToExcalidraw } = await import(
      "@excalidraw/mermaid-to-excalidraw"
    );
    const { elements: skeleton, files = {} } =
      await parseMermaidToExcalidraw(
        mermaid,
        MERMAID_TO_EXCALIDRAW_CONFIG,
      );
    const elements = convertToExcalidrawElements(skeleton, {
      regenerateIds: true,
      renderEnvironment: app.renderEnvironment,
    });
    if (!elements.length) {
      throw new Error("The Mermaid diagram did not contain drawable elements.");
    }

    const originalElements = app.scene.getElementsIncludingDeleted();
    const lastIds = new Set(diagramElementIds);
    const beforeIds = new Set(originalElements.map((element) => element.id));
    const openSidebar = app.state.openSidebar;

    try {
      if (replaceLast && lastIds.size > 0) {
        app.scene.replaceAllElements(
          originalElements.map((element) =>
            lastIds.has(element.id) && !element.isDeleted
              ? newElementWith(element, { isDeleted: true })
              : element,
          ),
        );
      }

      app.addElementsFromPasteOrLibrary({
        elements,
        files,
        position: "center",
        fit: "scale-down",
      });

      // Paste regenerates element IDs. Track the actual scene difference,
      // never the skeleton's IDs or pre-paste converted IDs.
      const insertedIds = app.scene
        .getElementsIncludingDeleted()
        .filter((element) => !beforeIds.has(element.id) && !element.isDeleted)
        .map((element) => element.id);

      if (!insertedIds.length) {
        throw new Error("Excalidraw did not insert any diagram elements.");
      }
      if (replaceLast) {
        setDiagramElementIds(insertedIds);
      }
    } catch (error) {
      // Roll back the deletion if the insert fails.
      app.scene.replaceAllElements(originalElements);
      throw error;
    } finally {
      // Excalidraw's paste command may close the sidebar. Keep the chat open.
      setAppState((state) => ({ ...state, openSidebar }));
    }
  };

  const generatePrompt = async (
    prompt: string,
    previousMessages: TChat.ChatMessage[],
  ) => {
    if (isGenerating || !prompt.trim()) {
      return;
    }

    const userMessage = newMessage("user", prompt);
    const assistantMessage: TChat.ChatMessage = {
      ...newMessage("assistant"),
      isGenerating: true,
    };

    setIsGenerating(true);
    setMessages([...previousMessages, userMessage, assistantMessage]);

    let completed: TChat.ChatMessage;
    try {
      const response = await askDiagramAgent(
        toLLMMessages([...previousMessages, userMessage]),
      );
      if (response.error) {
        completed = {
          ...assistantMessage,
          isGenerating: false,
          error: response.error.message,
          errorType: "network",
          lastAttemptAt: Date.now(),
        };
      } else {
        try {
          await drawDiagram(response.generatedResponse, true);
          completed = {
            ...assistantMessage,
            isGenerating: false,
            content: response.generatedResponse,
          };
        } catch (parseError: unknown) {
          completed = {
            ...assistantMessage,
            isGenerating: false,
            content: response.generatedResponse,
            error:
              parseError instanceof Error
                ? parseError.message
                : String(parseError),
            errorType: "parse",
          };
        }
      }
    } catch (error: unknown) {
      completed = {
        ...assistantMessage,
        isGenerating: false,
        error: error instanceof Error ? error.message : String(error),
        errorType: "network",
        lastAttemptAt: Date.now(),
      };
    } finally {
      setIsGenerating(false);
    }

    setMessages((current) =>
      current.map((message) =>
        message.id === assistantMessage.id ? completed : message,
      ),
    );
  };

  const onGenerate: TTTDDialog.OnGenerate = async ({ prompt }) => {
    await generatePrompt(prompt, messages);
  };

  const onRetry = (failedAnswer: TChat.ChatMessage) => {
    if (isGenerating) {
      return;
    }
    const failedIndex = messages.findIndex(
      (message) => message.id === failedAnswer.id,
    );
    const question = messages[failedIndex - 1];
    if (
      failedIndex < 1 ||
      question?.type !== "user" ||
      !question.content
    ) {
      return;
    }

    // Retry in place: replace the failed assistant answer and its question,
    // then immediately issue a new request with the same prompt.
    const earlierMessages = messages.filter(
      (_, index) => index !== failedIndex && index !== failedIndex - 1,
    );
    void generatePrompt(question.content, earlierMessages);
  };

  const onInsertMessage = (message: TChat.ChatMessage) => {
    if (!message.content || isGenerating) {
      return;
    }
    // An explicit Insert is a duplicate, not the new replaceable diagram.
    void drawDiagram(message.content, false).catch((error: unknown) => {
      setMessages((current) =>
        current.map((item) =>
          item.id === message.id
            ? {
                ...item,
                error: error instanceof Error ? error.message : String(error),
                errorType: "parse",
              }
            : item,
        ),
      );
    });
  };

  const onDeleteMessage = (messageId: string) => {
    setMessages((current) => {
      const assistantIndex = current.findIndex(
        (message) => message.id === messageId,
      );
      if (assistantIndex < 0) {
        return current;
      }
      return current.filter(
        (_, index) =>
          index !== assistantIndex &&
          !(
            index === assistantIndex - 1 &&
            current[index].type === "user"
          ),
      );
    });
  };

  const onAiRepairClick = () => {
    if (!isGenerating) {
      void generatePrompt(
        "That diagram has a syntax error, fix it.",
        messages,
      );
    }
  };

  return (
    <ChatInterface
      chatId="diagram-agent"
      messages={messages}
      currentPrompt={currentPrompt}
      onPromptChange={setCurrentPrompt}
      onGenerate={onGenerate}
      isGenerating={isGenerating}
      onRetry={onRetry}
      onInsertMessage={onInsertMessage}
      onDeleteMessage={onDeleteMessage}
      onAiRepairClick={onAiRepairClick}
      renderWelcomeScreen={() => (
        <div className="chat-interface__welcome-screen__welcome-message">
          <h3>Diagram agent</h3>
          <p>
            Describe a diagram, or enter a public GitHub repository URL to
            visualize its documented structure.
          </p>
          <p>
            The agent draws directly on the canvas. Follow-up prompts replace
            only the previous agent-generated diagram.
          </p>
        </div>
      )}
    />
  );
};
