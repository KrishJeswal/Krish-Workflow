---
name: check
description: Phase gate checks. "/check verify" proves every acceptance criterion with evidence; "/check review" runs an independent fresh-context review, then closes the phase on Krish's approval.
disable-model-invocation: true
argument-hint: verify | review
---

# /check $ARGUMENTS

Mode comes from the argument:
- `verify`: follow `references/verify.md`. The active phase must be `verifying`.
- `review`: follow `references/review.md`. The active phase must be `reviewing`.
- No argument or anything else: ask which mode to run.

If the phase status doesn't match the mode, stop and report the current stage.
