# workflow cheatsheet

## Setup (once)
- Unzip the plugin into its own git repo.
- In Claude Code: `/plugin marketplace add <path>` → `/plugin install workflow@krish` → restart.
- Put `CLAUDE.md` in `%USERPROFILE%\.claude\`.
- Keep `git commit` off your auto-approve list.

## The flow
```
idea → /scope → /audit → /architect
     → [ /develop → /test → /check verify → /check review → approve ] × each phase
     → /document → push
```

## Ideation (back-and-forth; nothing moves on until you say "approved")
| Command | You bring | You get |
|---|---|---|
| `/scope` | the idea | MVP / later / non-goals, measurable success criteria, `.dev/` created |
| `/audit` | constraints | prior art, stack picks with reasons, risks and spikes |
| `/architect` | decisions | the design, then phase files with tasks and acceptance criteria |

## Phase loop (one phase at a time)
| Command | Does | Status after |
|---|---|---|
| `/develop` | per task: test first → code → `/sync` commit | `testing` |
| `/test` | integration, edge cases, full suite (+ ML eval) | `verifying` |
| `/check verify` | runs every acceptance criterion, records the actual output as evidence | `reviewing` |
| `/check review` | fresh reviewer → triage → your approval | `done`, next phase `active` |

Any failure sends the phase back to `active` with a fix task added.

### How phases activate
- Approving the phase plan at the end of `/architect` sets `phase-01` to `active`, with the current commit recorded as its `start_commit`.
- Approving a phase at the end of `/check review` marks it `done` and sets the next phase `active`.
- Nothing runs automatically. Each skill tells you the next command, and you type it.

## Any time
- `/debug`: reproduce → isolate → test hypotheses → fix the root cause → regression test.
- `/resume`: full reload after `/clear` or a gap. It flags drift between git and `.dev/`.
- `/architect amend`: design or plan change.
  - Done phases are never edited.
  - For the active phase you choose: finish it, absorb the change, or stop and split it.
  - Planned phases can be changed freely.
- `/document`: public README and docs at release.

## Your three jobs
1. **Decide.** Answer the pushback honestly. Sign off only when you'd defend the choice.
2. **Review commits.** Read each `/sync` explanation before approving. This is your code review.
3. **Push.** Only you push; the guard blocks Claude from pushing.

## Habits
- **`/clear` between phases.** `.dev/` carries everything forward.
- **Keep phases small.** More than about 8 tasks means split it.
- **Write acceptance criteria as checks** ("command X outputs Y"), never "works well".
- **Never let work drift.** Out-of-scope work goes in *Discovered*; a design change goes through `amend`.
- **ML: no "better" without evidence** — a baseline comparison and the variance across seeds.

## Where things live
| What | Where |
|---|---|
| Plugin source | its own repo, e.g. `dev/workflow` |
| Global rules | `~/.claude/CLAUDE.md` |
| Project state | `<project>/.dev/`: PROJECT, MEMORY, DECISIONS, `phases/`, `experiments/` |

Phase status: `planned → active → testing → verifying → reviewing → done`
