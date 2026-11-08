---
name: test
description: Phase-level testing for the active phase — integration, end-to-end, edge cases and, for ML projects, the full evaluation protocol. Runs after /develop finishes a phase.
disable-model-invocation: true
---

# /test

## Gate
The active phase must have status `testing`. Otherwise stop and say which stage it's at.

## Do
1. **Coverage check**: map every acceptance criterion to at least one test. Write tests for any criterion that has none.
2. **Integration / e2e**: test the phase's components working together through real interfaces, not mocks of the code under test.
3. **Edge cases and failure paths**: bad input, empty data, timeouts, missing config, permission errors.
4. **Full suite**: run everything, including earlier phases' tests, to catch regressions.
5. **ML projects**: run the evaluation protocol in `references/ml-eval.md`.

## Failures
Fix them through the `/develop` task loop: write a failing test, fix, then commit via `/sync`. Never weaken or delete a test to make it pass unless Krish agrees that the test was wrong.

## Record
- The phase file's `Test results` section: what ran, pass/fail counts, the commands used, and notable findings.
- New tests are committed via `/sync`.

## Exit
When everything passes:
- Set the phase status to `verifying`.
- Update `MEMORY.md` Current state with next step `/check verify`.
