---
name: develop
description: Execute the active phase from .dev/phases/, task by task, test-first, committing each task via /sync. Refuses to touch any other phase.
disable-model-invocation: true
---

# /develop

## Gate
1. Read `.dev/phases/`. Exactly one phase must have a status other than `planned` or `done`. That is the active phase.
2. Every earlier phase must be `done`. If not, stop and report which one is open.
3. If no phase is active, stop. Either the phases aren't planned yet (`/architect`) or the next phase hasn't been opened (`/check review` does that on approval).
4. If status is `testing`, `verifying` or `reviewing`, `/develop` is being called to fix findings. Work only on those fixes.

## Task loop
Do one unchecked task at a time, in order:
1. Restate the task and how it serves the phase's acceptance criteria.
2. **Test first** for code that needs tests: write the test, run it, and confirm it fails for the right reason.
3. Implement the minimum that makes it pass. Then refactor with the tests green.
4. Run the full test suite, not just the new test.
5. Follow `/sync` to explain and commit. One task is one commit (or a few, if the task naturally splits).
6. Tick the task in the phase file. Move to the next task.

## Rules
- **Stay inside the phase.** If you find needed work that's outside it, add it to the phase file's `Discovered` section and ask Krish. Don't do it silently.
- **Stop and consult** before any important decision: new dependency, schema change, interface change, deviation from DECISIONS.md, or anything hard to reverse.
- If a task can't be done well within the current design, stop and propose `/architect amend`. Don't drift from the design silently.
- If something breaks unexpectedly, switch to `/debug`. Don't guess-patch.
- Comments only where genuinely necessary.

## Exit
When every task is ticked:
- Set the phase status to `testing`.
- Update `MEMORY.md` Current state with next step `/test`.

Next: `/test`.
