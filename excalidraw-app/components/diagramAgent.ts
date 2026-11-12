/// <reference types="vite/client" />

import { RocketRideClient } from "rocketride";
import { RequestError } from "@excalidraw/excalidraw/errors";

import type {
  LLMMessage,
  TTTDDialog,
} from "@excalidraw/excalidraw/components/TTDDialog/types";

const PROJECT_ID = "dafb1567-0f6e-4b87-a00e-74ce8bef1db7";
const SOURCE_ID = "webhook_1";

const NOT_RUNNING_MESSAGE =
  "The diagram agent isn't running on RocketRide Cloud. Run the deploy command in Step 6.";

const client = new RocketRideClient({
  uri: import.meta.env.VITE_APP_ROCKETRIDE_URI || "https://api.rocketride.ai",
  auth: import.meta.env.VITE_APP_ROCKETRIDE_APIKEY,
});

// Share in-progress authentication between simultaneous sidebar requests.
let connecting: Promise<void> | null = null;

const requestError = (message: string, status = 500) => ({
  error: new RequestError({ message, status }),
});

const notRunning = () => requestError(NOT_RUNNING_MESSAGE, 503);

const stripMermaidFence = (answer: string): string => {
  const trimmed = answer.trim();
  const fence = String.fromCharCode(96).repeat(3);
  if (!trimmed.startsWith(fence)) {
    return trimmed;
  }

  // The agent should return raw Mermaid; tolerate a fenced reply.
  const firstNewline = trimmed.indexOf("\n");
  if (firstNewline === -1) {
    return trimmed;
  }
  const withoutOpening = trimmed.slice(firstNewline + 1).trim();
  return withoutOpening.endsWith(fence)
    ? withoutOpening.slice(0, -fence.length).trim()
    : withoutOpening;
};

const ensureConnected = async () => {
  if (client.getConnectionInfo().connected && client.getAccountInfo()) {
    return;
  }

  if (!connecting) {
    connecting = client.connect().then(() => undefined);
    void connecting.then(
      () => {
        connecting = null;
      },
      () => {
        connecting = null;
      },
    );
  }
  await connecting;
};

/**
 * Send contentful chat turns in chronological order to an existing
 * RocketRide Cloud deployment. Never creates or terminates that task.
 */
export async function askDiagramAgent(
  messages: LLMMessage[],
): Promise<TTTDDialog.OnTextSubmitRetValue> {
  try {
    if (!messages.length || !messages.some((message) => message.content.trim())) {
      return requestError("RocketRide error: Enter a diagram request.", 400);
    }

    if (!import.meta.env.VITE_APP_ROCKETRIDE_APIKEY) {
      return requestError(
        "RocketRide error: VITE_APP_ROCKETRIDE_APIKEY is not configured.",
      );
    }

    await ensureConnected();

    const teamId = client.getAccountInfo()?.devTeam;
    const token = await client.getTaskToken({
      projectId: PROJECT_ID,
      source: SOURCE_ID,
      teamId,
    });

    if (!token) {
      return notRunning();
    }

    const status = await client.getTaskStatus(token);
    if (status.completed) {
      return notRunning();
    }

    const contentfulMessages = messages.filter((message) => message.content.trim());
    const prompt =
      contentfulMessages.length === 1
        ? contentfulMessages[0].content
        : [
            ...contentfulMessages.map(
              (message) => message.role + ": " + message.content,
            ),
            "Answer the last user message.",
          ].join("\n");

    const result = await client.send(token, prompt, {}, "text/plain");
    const answers: unknown = result?.answers;

    if (!Array.isArray(answers) || answers.length === 0) {
      return requestError("RocketRide error: The diagram agent returned no answer.", 502);
    }

    const lastAnswer: unknown = answers[answers.length - 1];
    if (typeof lastAnswer !== "string") {
      return requestError("RocketRide error: The diagram agent returned an invalid answer.", 502);
    }

    const generatedResponse = stripMermaidFence(lastAnswer);
    if (!generatedResponse) {
      return requestError("RocketRide error: The diagram agent returned an empty diagram.", 502);
    }

    if (/^\**LLM error\b/i.test(generatedResponse)) {
      return requestError("RocketRide error: " + generatedResponse, 502);
    }

    return { generatedResponse, error: null };
  } catch (error: unknown) {
    const details = error instanceof Error ? error.message : String(error);
    if (details.toLowerCase().includes("not running")) {
      return notRunning();
    }
    return requestError("RocketRide error: " + details);
  }
}
