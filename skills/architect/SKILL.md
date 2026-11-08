---
name: architect
description: Stage 3 of the workflow. Design the system with Krish (components, data model, interfaces, repo layout, test/eval strategy), then split the work into phase files in .dev/phases/. "/architect amend" changes the design or phase plan mid-project.
disable-model-invocation: true
argument-hint: "[amend <what changed>]"
---

# /architect $ARGUMENTS

If the argument starts with `amend`, skip to **Amend mode** below. Otherwise this is the initial design.

Prerequisite: `/audit` is signed off. This stage has two sign-offs, the design and then the phase plan. Don't write production code here.

## Part A — Design
Cover each of these, proposing options with tradeoffs wherever a real choice exists:
- **Components** and their responsibilities and boundaries, plus the data flow between them.
- **Data model**: entities, schemas, storage.
- **Interfaces**: APIs, module contracts, CLI surface.
- **Repo layout**: monorepo by default, with packages or apps named.
- **Error handling, config, secrets, logging.**
- **Testing strategy**: what gets unit, integration or e2e tests, and which tools.
- **ML (if applicable)**: data pipeline, splits, baselines, metrics tied to the success criteria, eval protocol, experiment tracking.

Push back on over-engineering and on anything that doesn't serve the scope.

Iterate until Krish signs off on the design. Record it in:
- `PROJECT.md`: Architecture, Data model, Interfaces, Repo layout, Testing, ML.
- `DECISIONS.md`: one entry per design decision.

## Part B — Phases
Split the work into phases. Each phase must:
- end in a working, testable state, never half-built;
- be small enough to finish and review in one sitting or a few;
- depend only on earlier phases.

Put foundations first (repo setup, tooling, CI, the skeleton running end to end), then vertical slices. Front-load risky spikes.

For each phase, create `.dev/phases/phase-NN.md` (01, 02, …) from `templates/phases/phase-NN.md` and fill in:
- Goal and Scope (in/out)
- Tasks, each one roughly a commit-sized step
- Acceptance criteria. Each must be objectively verifiable and name its check (a command, test or measurable result); "works well" is not a criterion.
- Test plan, including the ML eval plan if relevant.

Present the full phase breakdown and iterate until Krish signs off on it.

## Record
- `PROJECT.md` Roadmap table.
- Phase files: `phase-01` gets `status: active` and `start_commit` set to the current HEAD (or `root` if there are no commits). All other phases get `status: planned`.
- `MEMORY.md` Current state: Stage `develop`, active phase 01, next step `/develop`.

Next: `/develop`.

---

## Amend mode
Use this for a design or plan change after the initial sign-off. It can be raised by Krish, by `/develop` when a task can't be done within the current design, or by a review finding that needs a design change.

### 1. Frame the change
- What is changing, and why now?
- What does it supersede (cite the DECISIONS entries)?
- Push back if it's scope creep dressed up as a design fix. Name what it would cost: phases added, rework, delay.

### 2. Impact map
Classify everything the change touches into one of three groups:
- **Done phases**: these are immutable. Never edit a done phase file. If built code must change, that becomes a new rework phase or a set of tasks in a planned phase, with its own acceptance criteria.
- **Active phase**: three options, and Krish picks one:
  - (a) finish the phase as planned and apply the change in a later phase;
  - (b) absorb the change into the active phase, if it fits that phase's goal. Update its tasks and acceptance criteria and note the amendment in the file;
  - (c) stop the phase at the nearest stable point. Its remaining tasks move to a new planned phase, and the trimmed phase goes on through `/test` and `/check`.
- **Planned phases**: these are free to edit, split, merge, reorder or delete.

Show the impact map before editing anything.

### 3. Renumbering
- Done and active phase numbers never change, because commits, logs and `start_commit` reference them.
- Planned phases may be renumbered to insert or remove phases. Keep the file numbering contiguous after the active phase.
- Delete a dropped planned phase's file rather than leaving it in place, and record why in DECISIONS.

### 4. Sign-off, then record
Iterate until Krish signs off. Then update:
- `DECISIONS.md`: a new entry marked `Supersedes D-NNN`. Old entries stay as history.
- `PROJECT.md`: affected design sections and the Roadmap table.
- Phase files, as agreed in step 2.
- `MEMORY.md`: Current state, plus a log line recording the amendment.

Resume where the workflow left off. Usually that's `/develop` on the active phase.
