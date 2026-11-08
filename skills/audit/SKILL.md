---
name: audit
description: Stage 2 of the workflow. Research prior art, compare stack and tool options on merit, surface risks; scan existing code if any. Back-and-forth until Krish decides.
disable-model-invocation: true
---

# /audit

Base every option on evidence. Prerequisite: `/scope` is signed off (check `.dev/DECISIONS.md` and `.dev/PROJECT.md` Scope). If it isn't, stop and say so.

## 1. Existing code (skip for greenfield)
Map the existing code: structure, entry points, dependencies, test coverage, build/run status, tech debt, and anything that conflicts with the scope. Report it before recommending anything.

## 2. Prior art
Search for existing tools, libraries, papers and repos that solve all or part of the problem.
- For each one: what to reuse, what to learn from, and why not just use it.
- Name anything that makes the project redundant. Say it plainly.

## 3. Stack options
For each component that needs a decision (language, framework, DB, model/approach, infra, hosting):
- Compare 2–3 real options in a table: fit to scope, maturity, performance, learning value, cost, Windows/dev-env friction.
- Judge on merit. Don't default to what past projects used. New or unfamiliar tools are fine if they're genuinely better.
- Recommend one option and give the reason.

## 4. Risks
List unknowns, hard parts, and assumptions most likely to be wrong. For each, propose a mitigation or a small spike to run before or during Phase 01.

## 5. Decide together
Krish decides each open choice. Iterate until he signs off on the full stack and risk plan.

## 6. Record
- `PROJECT.md`: Stack table (with why), and any new constraints added to Scope.
- `DECISIONS.md`: one entry per stack/approach decision, with options considered.
- `MEMORY.md` Current state: Stage `architect`, with next step `/architect`.

Next: `/architect`.
