---
name: debug
description: Systematic debugging — reproduce, isolate, hypothesise, fix the root cause, add a regression test. Use whenever a test fails unexpectedly, a bug is reported, or behaviour is wrong.
---

# /debug

Don't guess-patch.

1. **Reproduce.** Get a reliable reproduction, ideally as a failing test, otherwise as a minimal script. If you can't reproduce it, gather more information (logs, inputs, environment) before changing any code.
2. **Isolate.** Narrow it down to the smallest failing unit. Use `git bisect` if it worked before, targeted logging, and swapping real inputs for minimal ones.
3. **Hypothesise.** State one hypothesis and the evidence that would confirm or refute it. Test it. Then the next one. Write down each hypothesis you eliminate.
4. **Fix the root cause**, not the symptom. If the right fix changes the design or an interface, stop and consult Krish.
5. **Regression test.** The reproduction becomes a permanent test. Confirm it fails without the fix and passes with it.
6. **Full suite**: run everything.
7. **Commit** via `/sync`. The MEMORY log entry records the symptom, the root cause and the fix.

If you're three hypotheses in with no progress, stop. Summarise what's been ruled out and discuss the next step with Krish.
