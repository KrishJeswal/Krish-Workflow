---
name: resume
description: Full reload of project state after a cleared chat or a long break — reads all of .dev/ plus recent git history and reports where things stand.
disable-model-invocation: true
---

# /resume

1. Read all of `.dev/MEMORY.md`, `.dev/PROJECT.md` and `.dev/DECISIONS.md`.
2. Read the active phase file in full, plus the frontmatter of every phase file.
3. Run `git log --oneline -15` and `git status`.
4. Check for drift: uncommitted changes, ticked tasks with no matching commit, or a MEMORY state that disagrees with the phase files. Report every mismatch.
5. Report in 10 lines or fewer:
   - stage and active phase
   - tasks done and remaining
   - last commit
   - next step
   - open questions and blockers
6. Ask whether to continue from the next step.
