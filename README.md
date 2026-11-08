# workflow

Krish's phased development workflow for Claude Code, packaged as a plugin.

```
idea → /scope ⇄ → /audit ⇄ → /architect ⇄          (⇄ = back-and-forth until sign-off)
for each .dev/phases/phase-NN.md:
  /develop (test-first task loop, /sync per commit)
  → /test → /check verify → /check review → approval → next phase
any time: /debug · /document · /resume · /architect amend
```

## Phase status flow
`planned → active → testing → verifying → reviewing → done`
Only one phase is ever open. `/develop` refuses to run if an earlier phase isn't `done`.

## Layout
```
.claude-plugin/   plugin.json, marketplace.json
hooks/            session-start.mjs (loads MEMORY "Current state" + active phase)
                  guard-git.mjs     (blocks push, AI attribution, commits without .dev/ updates)
agents/           reviewer.md       (fresh-context reviewer for /check review)
templates/        MEMORY, PROJECT, DECISIONS, phases/phase-NN
skills/           scope audit architect develop test check sync document debug resume
```

## Per-project state (gitignored)
```
.dev/
├── PROJECT.md     knowledge base
├── MEMORY.md      Current state + per-commit log
├── DECISIONS.md   decision records
├── phases/        phase-01.md, phase-02.md, …
└── experiments/   ML runs
```

## Install
```
/plugin marketplace add <path-to-this-repo>
/plugin install workflow@krish
```
Restart Claude Code after installing. Depending on your Claude Code version, plugin skills may show up namespaced as `/workflow:scope` and so on.

Keep `git commit` off your permission allowlist. The permission prompt is the moment you review each commit.

Requires Node on PATH (the hooks are Node, so they run the same on Windows and Unix).
