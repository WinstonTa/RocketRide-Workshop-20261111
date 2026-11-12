// Secure, manual RocketRide Cloud deployment via the verified v1.6.0 SDK.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { RocketRideClient } from "rocketride";

const PROJECT_ID = "dafb1567-0f6e-4b87-a00e-74ce8bef1db7";
const SOURCE_ID = "webhook_1";
const teamId = process.env.ROCKETRIDE_TEAM_ID;
const secret = process.env.ROCKETRIDE_APIKEY;

const fail = (message) => { throw new Error(message); };
const stripFence = (answer) => {
  const fence = String.fromCharCode(96).repeat(3);
  const value = answer.trim();
  if (!value.startsWith(fence)) return value;
  const newline = value.indexOf("\n");
  const body = newline < 0 ? value : value.slice(newline + 1).trim();
  return body.endsWith(fence) ? body.slice(0, -fence.length).trim() : body;
};

async function deploy() {
  if (!secret || !teamId) fail("Cloud secret and explicit team ID are required.");
  const pipeline = JSON.parse(readFileSync("pipelines/diagram-agent.pipe", "utf8"));
  if (pipeline.project_id !== PROJECT_ID || pipeline.source !== SOURCE_ID) {
    fail("The pipeline project/source differs from the workshop contract.");
  }
  const client = new RocketRideClient({
    uri: "https://api.rocketride.ai",
    auth: secret,
  });
  try {
    const account = await client.connect();
    // The Excalidraw frontend resolves this exact dev team at runtime.
    if (account.devTeam && account.devTeam !== teamId) {
      fail("Target Cloud team differs from the authenticated account devTeam.");
    }
    const published = await client.deploy.add({
      kind: "pipe",
      pipeline,
      comment: "Diagram agent workshop " + (process.env.GITHUB_SHA || "manual"),
    });
    const version = published.artifact?.version;
    if (!Number.isInteger(version) || version <= 0) {
      fail("Cloud did not return a positive artifact version.");
    }
    await client.deploy.deploy(PROJECT_ID, version, teamId);
    const deployment = await client.deploy.get(PROJECT_ID, teamId);
    if (deployment.version !== version || deployment.state !== "enabled") {
      fail("The target team's Cloud deployment is not enabled at the new version.");
    }
    const started = await client.deploy.run(PROJECT_ID, SOURCE_ID, teamId);
    const token = started.token || await client.getTaskToken({
      projectId: PROJECT_ID, source: SOURCE_ID, teamId,
    });
    if (!token) fail("Deployed webhook run has no task token.");
    const status = await client.getTaskStatus(token);
    if (status.completed) fail("Deployed webhook run is already completed.");

    const response = await client.send(
      token, "Draw a login request flow", {}, "text/plain",
    );
    const answers = response?.answers;
    const result = Array.isArray(answers) ? answers[answers.length - 1] : null;
    if (typeof result !== "string" || !result.trim()) {
      fail("Deployed Cloud agent returned no Mermaid response.");
    }
    const mermaid = stripFence(result);
    if (!/^(flowchart\s+(LR|TD)\b|sequenceDiagram\b)/.test(mermaid)) {
      fail("Deployed Cloud agent returned invalid Mermaid header.");
    }
    mkdirSync("docs", { recursive: true });
    writeFileSync("docs/DIAGRAM_AGENT_CLOUD_DEPLOYMENT.md", [
      "# RocketRide diagram agent — verified Cloud deployment",
      "",
      "GitHub Actions run: https://github.com/" + process.env.GITHUB_REPOSITORY +
        "/actions/runs/" + process.env.GITHUB_RUN_ID,
      "Source commit: " + process.env.GITHUB_SHA,
      "Project: " + PROJECT_ID,
      "Webhook: " + SOURCE_ID,
      "Team: " + teamId,
      "Published version: " + version,
      "Deployment state: enabled",
      "Task token: verified, value deliberately omitted",
      "Task status: running (completed=false)",
      "Smoke prompt: Draw a login request flow",
      "Mermaid header: " + mermaid.split("\n")[0].trim(),
      "Smoke result: PASS",
      "",
      "No API keys, task tokens or full model answers are stored.",
      "Canvas and browser tests must be verified separately.",
      "",
    ].join("\n"));
    console.log("Cloud artifact, deployed run and Mermaid smoke test verified.");
  } finally {
    await client.disconnect().catch(() => {});
  }
}

deploy().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error("Cloud deploy failed: " +
    (secret ? message.replaceAll(secret, "[REDACTED]") : message));
  process.exitCode = 1;
});
