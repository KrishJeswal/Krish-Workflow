import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { readStdin, phases, section } from "./lib.mjs";

const input = readStdin();
const dev = join(input.cwd || process.cwd(), ".dev");
if (!existsSync(dev)) process.exit(0);

const parts = ["[workflow] Project state loaded from .dev/ — run /resume for a full reload."];

const memPath = join(dev, "MEMORY.md");
if (existsSync(memPath)) {
  const state = section(readFileSync(memPath, "utf8"), "Current state");
  if (state) parts.push(state);
}

const all = phases(dev);
const active = all.find((p) => p.status && p.status !== "done" && p.status !== "planned");
if (active) {
  parts.push(`Active phase: ${active.file} — ${active.title || ""} (status: ${active.status})`);
} else if (all.length) {
  const next = all.find((p) => p.status === "planned");
  parts.push(next ? `No active phase. Next planned: ${next.file}.` : "All phases done.");
}

process.stdout.write(
  JSON.stringify({
    hookSpecificOutput: { hookEventName: "SessionStart", additionalContext: parts.join("\n\n") },
  })
);
