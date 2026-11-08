---
name: sync
description: The commit procedure — explain every change, update .dev/ (PROJECT, MEMORY, phase file, DECISIONS), get Krish's approval, then commit. Used for every commit in every stage.
---

# /sync

Use this for every commit. Never commit any other way.

## 1. Stage deliberately
- Run `git status` and `git diff`.
- Stage specific files only. Never `git add -A` or `git add .` without checking what's included.
- Check the staged files for secrets, `.env` files, large binaries and stray debug code.

## 2. Explain
Give Krish a per-file account of the staged changes:
- **Added**: what and why.
- **Changed**: what was there before, what's there now, and why.
- **Deleted**: what and why.

Nothing staged goes unexplained.

## 3. Update `.dev/`
Do this before committing; the guard hook blocks the commit otherwise.
- `PROJECT.md`: update every affected section, especially the Code guide for new or changed modules.
- `MEMORY.md`:
  - update Current state;
  - add a Log entry at the top: date, the commit subject, and the Added/Changed/Deleted/Why explanation from step 2, plus notes for the next session.
- The phase file: tick completed tasks.
- `DECISIONS.md`: add an entry if a decision was made.

## 4. Message
- Use Conventional Commits style: `type(scope): summary`, with a body if the change needs one.
- No `Co-Authored-By` line and no AI attribution of any kind.

## 5. Approve, then commit
Show the message and wait for Krish's approval, then run `git commit`.

## Never
- `git push`. Only Krish pushes.
- `--amend`, rebase, force or reset without explicit permission.
