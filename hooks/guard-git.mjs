import { statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { readStdin } from "./lib.mjs";

const input = readStdin();
const cmd = input?.tool_input?.command || "";
const cwd = input.cwd || process.cwd();

const block = (reason) => {
  process.stderr.write(`[workflow guard] ${reason}\n`);
  process.exit(2);
};

const git = (...args) =>
  execFileSync("git", args, { cwd, stdio: ["ignore", "pipe", "ignore"] }).toString().trim();

if (/\bgit\s+(?:-\S+\s+)*push\b/.test(cmd)) {
  block("Pushing is Krish's job. Never push.");
}

if (/\bgit\s+(?:-\S+\s+)*commit\b/.test(cmd)) {
  if (/co-authored-by/i.test(cmd)) block("Remove the Co-Authored-By line. No AI attribution in commits.");

  const dev = join(cwd, ".dev");
  if (!existsSync(dev)) process.exit(0);

  try {
    git("check-ignore", "-q", ".dev");
  } catch {
    block(".dev/ is not gitignored. Add it to .gitignore before committing.");
  }

  let last = 0;
  try {
    last = Number(git("log", "-1", "--format=%ct")) * 1000;
  } catch {
    process.exit(0);
  }

  const stale = ["MEMORY.md", "PROJECT.md"].filter((f) => {
    const p = join(dev, f);
    return !existsSync(p) || statSync(p).mtimeMs <= last;
  });
  if (stale.length) {
    block(`Update .dev/${stale.join(" and .dev/")} for this commit first (run /sync).`);
  }
}

process.exit(0);
