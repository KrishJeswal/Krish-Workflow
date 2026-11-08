# /check review

An independent review, then the phase sign-off.

## 1. Independent review
Spawn the `reviewer` subagent. Don't review your own work in this context. Give it:
- the path of the active phase file;
- the diff range `<start_commit>..HEAD` from the phase frontmatter (if `start_commit` is `root`, the whole history);
- the path `.dev/DECISIONS.md`.

## 2. Triage
For each finding:
- **Agree**: add a fix task to the phase file. If the fix needs a design change, propose `/architect amend` instead.
- **Disagree**: explain why, with evidence. Don't accept a finding just because the reviewer raised it.

Present the triaged list to Krish. He makes the final call on every disputed item.

## 3. Fix loop
If there are fixes:
1. Set the status to `active` and fix them via `/develop`.
2. Go back through `/test` and `/check verify`.
3. Re-run `/check review`. The reviewer gets a fresh run each time.

## 4. Close the phase
Once the verdict is pass, or every remaining finding is accepted by Krish:
1. Write the findings and their resolutions into the phase file's `Review findings` section.
2. Ask Krish for explicit phase approval.

On approval:
- Current phase: status `done`, with the date and his approval recorded in `Sign-off`.
- Next phase file: status `active`, with `start_commit` set to the current HEAD.
- `MEMORY.md` Current state: the new active phase, with next step `/develop`.
- `PROJECT.md`: update any section the phase changed.

If this was the last phase, say so and suggest `/document`.
