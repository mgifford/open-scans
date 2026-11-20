# Session wrap-up

A session ends well when the repository is clean, the evidence is recorded, and
the next session can start without re-deriving context. This protocol is
tool-agnostic on purpose: it lives in the repository, so DeepSeek Harness,
Claude, Copilot, Codex and any future agent all follow the same steps.

## When to wrap up

Trigger a wrap-up when any of these is true:

- the agreed time arrives (a calendar or scheduled checkpoint);
- the user says "wrap up", "stop for today", or similar;
- the session is close to its context limit;
- a meaningful unit of work is finished and the next step is a new session's job.

Do not start new work after a wrap-up trigger. Finish the current small step,
or revert it and say so.

## The protocol

1. **Stop and assess.** Run:
   ```bash
   npm run wrap-up          # human-readable state + checklist + handoff skeleton
   npm run wrap-up -- --json
   ```
2. **Know the test state.** Run `npm run lint` and the tests relevant to the
   change. Do not leave a red tree without saying exactly what is red and why.
3. **Commit in small, meaningful commits.** Each commit should say what changed
   and why. Do not commit secrets, `node_modules`, or generated output that the
   repository does not track.
4. **Push and open or update a pull request.** Push the branch. Never
   force-push `main`. If the work belongs to an existing PR, update it.
5. **Record the handoff.** Update [`AI-SESSION-HANDOFF.md`](AI-SESSION-HANDOFF.md)
   with:
   - the checkpoint commit;
   - what changed;
   - what is verified (commands and results actually observed);
   - what is unverified or known to be broken;
   - the next safe step.
6. **Record durable history when warranted.** Add to
   [`AI-USAGE-HISTORY.md`](AI-USAGE-HISTORY.md) only for substantive
   AI-assisted milestones — not per session. Keep `README.md` concise.
7. **Leave the tree clean.** `git status` must be empty, or every remaining file
   must be explained in the handoff.
8. **Report accurately.** Branch, commits, PR link, tests run and results,
   anything not verified.

## Handoff template

```markdown
**Last updated:** YYYY-MM-DD
**Checkpoint:** <commit>

### What changed
- …

### Verified
- `<command>` — result

### Unverified or known gaps
- …

### Next safe step
- …
```

## Using this across tools

The protocol and the script are the portable part; the trigger is whatever each
tool offers.

| Tool | How the wrap-up is triggered | What it should do |
|---|---|---|
| DeepSeek Harness | `schedule_create` at the chosen time, delivering a wrap-up prompt | Run `npm run wrap-up`, follow this file, commit/push, open or update a PR |
| Claude Code / Desktop | A calendar reminder, or a custom slash command whose text is this file | Same steps; Claude can run the script directly |
| GitHub Copilot / Codex | Same calendar reminder; `AGENTS.md` already asks them to read the handoff | Same steps |
| Any tool without scheduling | The user's end-of-day habit, or a shell alias | Same steps |

Two rules keep it portable:

- **Put the instructions in the repository.** `AGENTS.md` is read by most agents,
  so a short section pointing here is more durable than any vendor-specific
  configuration.
- **Keep the trigger outside the instructions.** A time-based reminder is a
  calendar or scheduler concern; the checklist is a repository concern.

## What update should look like

A good wrap-up session leaves:

- a clean working tree and a pushed branch;
- a PR with a description of what changed, what was preserved, tests run, what
  is unverified, and an AI disclosure;
- a handoff entry that the next session can trust without re-reading the diff;
- no invented test results and no claims stronger than the evidence.

A wrap-up is a checkpoint, not a summary of everything the session did.

## Safety

- Never auto-merge; a human reviews.
- Never force-push `main` or a shared branch.
- Do not commit secrets, credentials, or runtime artifacts.
- If tests fail, say so and stop rather than committing a broken tree.
- If work is half-finished, commit it on a branch with a `WIP:` prefix and say
  exactly what remains.
