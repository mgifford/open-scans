#!/usr/bin/env node
/**
 * Session wrap-up state collector.
 *
 * This does not commit, push, or edit documentation. It gathers the facts a
 * session needs to finish cleanly and prints a checklist plus a handoff
 * skeleton, so the human or agent can make an informed decision.
 *
 * Usage:
 *   node scripts/session-wrap-up.mjs            # human-readable
 *   node scripts/session-wrap-up.mjs --json     # machine-readable
 */
import { execFileSync } from "node:child_process";

function run(command, args = []) {
  try {
    return execFileSync(command, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  } catch (error) {
    return error?.stdout?.trim?.() ?? "";
  }
}

function hasCommand(command) {
  try {
    execFileSync("command", ["-v", command], { shell: true, stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function git(args) {
  return run("git", args);
}

export function collectWrapUpState({ now = new Date() } = {}) {
  const branch = git(["branch", "--show-current"]) || "(detached)";
  const status = git(["status", "--porcelain"]);
  const uncommitted = status ? status.split("\n").filter(Boolean) : [];

  const aheadBehind = git(["rev-list", "--left-right", "--count", "origin/main...HEAD"]).split(/\s+/);
  const behind = Number(aheadBehind[0] ?? 0);
  const ahead = Number(aheadBehind[1] ?? 0);

  const stashes = git(["stash", "list"])
    .split("\n")
    .filter(Boolean);

  const lastCommit = git(["log", "-1", "--pretty=%h %s"]) || null;

  let openPrs = [];
  if (hasCommand("gh")) {
    const prJson = run("gh", ["pr", "list", "--state", "open", "--json", "number,title,headRefName", "--limit", "20"]);
    if (prJson.startsWith("[")) {
      try {
        openPrs = JSON.parse(prJson).map((pr) => ({ number: pr.number, title: pr.title, branch: pr.headRefName }));
      } catch {
        openPrs = [];
      }
    }
  }

  return {
    generatedAt: now.toISOString(),
    branch,
    lastCommit,
    uncommittedFiles: uncommitted,
    commitsAheadOfMain: ahead,
    commitsBehindMain: behind,
    stashes,
    openPullRequests: openPrs,
    clean: uncommitted.length === 0
  };
}

export function formatWrapUp(state) {
  const lines = [];
  lines.push(`# Session wrap-up — ${state.generatedAt}`);
  lines.push("");
  lines.push(`- Branch: ${state.branch}`);
  lines.push(`- Last commit: ${state.lastCommit ?? "(none)"}`);
  lines.push(`- Ahead of origin/main: ${state.commitsAheadOfMain}; behind: ${state.commitsBehindMain}`);
  lines.push(`- Uncommitted changes: ${state.uncommittedFiles.length}`);
  for (const file of state.uncommittedFiles.slice(0, 40)) lines.push(`  - ${file}`);
  if (state.uncommittedFiles.length > 40) lines.push(`  - … ${state.uncommittedFiles.length - 40} more`);
  lines.push(`- Stashes: ${state.stashes.length}`);
  lines.push(`- Open pull requests: ${state.openPullRequests.length}`);
  for (const pr of state.openPullRequests) lines.push(`  - #${pr.number} ${pr.title} (${pr.branch})`);
  lines.push("");
  lines.push("## Finish checklist");
  lines.push("");
  for (const item of [
    "Stop starting new work; finish the current small step.",
    "Run npm run lint and the relevant tests; record the exact result.",
    "Commit in small, logically separate commits with descriptive messages.",
    "Push the branch and open or update a pull request; never force-push main.",
    "Update docs/AI-SESSION-HANDOFF.md with state, verified/unverified work and next steps.",
    "Update docs/AI-USAGE-HISTORY.md only for substantive milestones, not per-session notes.",
    "Leave the working tree clean; report branch, PR and CI links."
  ]) {
    lines.push(`- [ ] ${item}`);
  }
  lines.push("");
  lines.push("## Handoff skeleton");
  lines.push("");
  lines.push("```markdown");
  lines.push(`**Last updated:** ${state.generatedAt.slice(0, 10)}`);
  lines.push(`**Checkpoint:** ${state.lastCommit ?? "(no commit yet)"}`);
  lines.push("");
  lines.push("### What changed");
  lines.push("- …");
  lines.push("");
  lines.push("### Verified");
  lines.push("- … (tests/commands actually run, with results)");
  lines.push("");
  lines.push("### Unverified or known gaps");
  lines.push("- …");
  lines.push("");
  lines.push("### Next safe step");
  lines.push("- …");
  lines.push("```");
  lines.push("");
  lines.push("See docs/SESSION-WRAP-UP.md for the portable protocol.");
  return lines.join("\n");
}

const isMain = import.meta.url === `file://${process.argv[1]}`;
if (isMain) {
  const state = collectWrapUpState();
  if (process.argv.includes("--json")) {
    process.stdout.write(JSON.stringify(state, null, 2) + "\n");
  } else {
    process.stdout.write(formatWrapUp(state) + "\n");
  }
}
