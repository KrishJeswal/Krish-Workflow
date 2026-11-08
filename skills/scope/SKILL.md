---
name: scope
description: Stage 1 of the workflow. Turn Krish's idea into an agreed scope (problem, users, MVP, later, non-goals, success criteria) through back-and-forth. Bootstraps .dev/ for new projects.
disable-model-invocation: true
---

# /scope

Turn the idea into a scope Krish signs off on. No stack choices (that's /audit) and no design (that's /architect).

## 0. Bootstrap (only if `.dev/` is missing)
1. If this isn't a git repo, ask before running `git init`.
2. Copy `MEMORY.md`, `PROJECT.md` and `DECISIONS.md` from this plugin's `templates/` folder (`../../templates/` relative to this skill) into `.dev/`. Create an empty `.dev/phases/`.
3. Add `.dev/` to `.gitignore`.

## 1. Understand
- Restate the idea in one paragraph, then list your assumptions explicitly.
- Ask questions in rounds of at most 5, most decision-relevant first. Cover:
  - the problem and who has it
  - what success looks like, measurably
  - constraints: time, hardware, budget, deadlines
  - what's must-have vs nice-to-have
  - why this project and why now: portfolio, learning, real users

## 2. Propose
- Propose an MVP / Later / Non-goals cut, with reasoning for each line.
- Push back on:
  - scope that won't fit the constraints
  - features with unclear value
  - vague success criteria
  
  Say so directly and offer a better cut.
- Give at most 2–3 alternative framings when the idea could reasonably go different ways.

## 3. Iterate
Loop on steps 1–2 until Krish explicitly signs off ("approved", "signed off", "go"). Silence or "ok" partway through a discussion is not sign-off.

## 4. Record
- `PROJECT.md`: fill in Overview and Scope.
- `DECISIONS.md`: one entry per real scope decision, including what was rejected.
- `MEMORY.md` Current state: Stage `audit`, with next step `/audit`.

Next: `/audit`.
