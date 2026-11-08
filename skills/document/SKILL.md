---
name: document
description: Write or update public documentation (README, API docs, usage) from .dev/PROJECT.md, for a release or after the final phase.
disable-model-invocation: true
---

# /document

Public docs are for strangers: a recruiter, a user, a contributor. `.dev/` is private and must never leak into them.

## README.md (repo root)
- What it is and why it exists, in one paragraph.
- A demo: screenshot, GIF or example output, if one exists.
- Features and current status.
- Quick start: prerequisites, install, run. Every command must have been tested on a clean checkout.
- Usage examples.
- An architecture summary, with a diagram if it helps.
- **ML projects**: dataset, approach, results table with baselines and variance, and limitations.
- Tech stack and the key decisions behind it, in one line each.
- Roadmap or known limitations.
- License.

## Other
- API reference, if the project exposes one: generate it from the code where possible.
- `CONTRIBUTING` or extra docs only if the project actually needs them.

## Rules
- Derive the content from `PROJECT.md`, but rewrite it for an outside reader. No internal notes, no TODO dumps.
- Show the outline to Krish first, then write it.
- Commit via `/sync`.
