import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

export function readStdin() {
  try {
    return JSON.parse(readFileSync(0, "utf8") || "{}");
  } catch {
    return {};
  }
}

export function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const out = {};
  if (!m) return out;
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i > 0) out[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return out;
}

export function phases(devDir) {
  const dir = join(devDir, "phases");
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => /^phase-\d+\.md$/.test(f))
    .sort()
    .map((f) => {
      const text = readFileSync(join(dir, f), "utf8");
      return { file: f, text, ...frontmatter(text) };
    });
}

export function section(text, heading) {
  const lines = text.split(/\r?\n/);
  const start = lines.findIndex((l) => l.trim().toLowerCase() === `## ${heading}`.toLowerCase());
  if (start < 0) return "";
  let end = lines.findIndex((l, i) => i > start && /^## /.test(l));
  if (end < 0) end = lines.length;
  return lines.slice(start, end).join("\n").trim();
}
