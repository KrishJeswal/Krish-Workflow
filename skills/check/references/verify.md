# /check verify

Prove that the phase is done with evidence. "Should work" doesn't count.

1. Run the full test suite, plus lint, type check and build, whichever the project has. Record the exact commands and the result of each.
2. For **each** acceptance criterion in the phase file:
   - run its named check (a command, test or measurement);
   - capture the actual output, trimmed to what proves the point;
   - mark it pass or fail.
3. Look beyond the tests: does the thing actually run the way a user would run it? Start it and exercise the main path once.
4. Write everything into the phase file's `Verify evidence` section.

## Outcome
- **Any failure**: set the status back to `active` and add a fix task to the phase file. Fix it via `/develop`, then go through `/test` and `/check verify` again.
- **All pass**: set the status to `reviewing` and update `MEMORY.md` Current state with next step `/check review`.

Commit the evidence and status update via `/sync` if any tracked files changed. Otherwise, just update `.dev/`.
