import test from "node:test";
import assert from "node:assert/strict";

import { compareRuns, continuityKey, renderHistoryMarkdown } from "../../scanner/history-compare.mjs";

const PATH = "/html[1]/body[1]/main[1]/img[1]";

function issue({ id, url = "https://example.org/", family = "text-alternative", hash = "aaa" } = {}) {
  return {
    correlatedIssueId: id ?? `issue-${family}-${hash}`,
    url,
    family,
    targetId: `dom:v1:${hash}:${PATH}`
  };
}

function artifact({ issues = [], algorithm = {}, engineVersions = { axe: "4.12.1" }, scanContext = { browser: "chromium" } } = {}) {
  return {
    generatedAt: "2026-11-19T00:00:00.000Z",
    algorithm: {
      correlationVersion: "correlation/1",
      semanticsVersion: "rule-semantics/1",
      mappingRegistryVersion: "2026-11-19T00:00:00.000Z",
      ...algorithm
    },
    scan: { engineVersions, scanContext },
    issues
  };
}

test("no previous artifact means no comparison, stated explicitly", () => {
  const comparison = compareRuns({ previous: null, current: artifact({ issues: [issue()] }) });
  assert.equal(comparison.comparable, false);
  assert.match(comparison.reason, /no previous correlation artifact/);
});

test("identical runs persist and reconcile", () => {
  const current = artifact({ issues: [issue({ id: "same" })] });
  const comparison = compareRuns({ previous: current, current });

  assert.equal(comparison.comparable, true);
  assert.equal(comparison.counts.persisting, 1);
  assert.equal(comparison.counts.new, 0);
  assert.equal(comparison.counts.notObserved, 0);
  assert.equal(comparison.reconciliation.complete, true);
});

test("a changed document is the same element with changed evidence", () => {
  const previous = artifact({ issues: [issue({ id: "old", hash: "aaa" })] });
  const current = artifact({ issues: [issue({ id: "new", hash: "bbb" })] });

  const comparison = compareRuns({ previous, current });
  assert.equal(comparison.counts.changed, 1);
  assert.equal(comparison.counts.new, 0);
  assert.equal(comparison.counts.notObserved, 0);
  assert.equal(comparison.changes.changed[0].previousTargetId, `dom:v1:aaa:${PATH}`);
  assert.equal(comparison.changes.changed[0].targetId, `dom:v1:bbb:${PATH}`);
  assert.ok(comparison.changes.changed[0].attribution.some((reason) => reason.kind === "source-page-change"));
});

test("absence is not observed, never fixed", () => {
  const previous = artifact({ issues: [issue({ id: "gone" })] });
  const current = artifact({ issues: [] });

  const comparison = compareRuns({ previous, current });
  assert.equal(comparison.counts.notObserved, 1);
  assert.match(comparison.changes.notObserved[0].note, /not evidence that the problem was fixed/i);

  const markdown = renderHistoryMarkdown(comparison);
  assert.match(markdown, /not the same as fixed/);
  assert.match(markdown, /does not by itself mean the problem was fixed/);
});

test("engine version change is attributed", () => {
  const previous = artifact({ issues: [], engineVersions: { axe: "4.11.0" } });
  const current = artifact({ issues: [], engineVersions: { axe: "4.12.1" } });

  const comparison = compareRuns({ previous, current });
  const kinds = comparison.metadataDifferences.map((difference) => difference.kind);
  assert.ok(kinds.includes("engine-version-change"));
  assert.match(comparison.metadataDifferences.find((d) => d.kind === "engine-version-change").detail, /4\.11\.0 -> 4\.12\.1/);
});

test("correlation logic, semantics, registry and conditions changes are attributed", () => {
  const previous = artifact({
    issues: [],
    algorithm: { correlationVersion: "correlation/0", semanticsVersion: "rule-semantics/0", mappingRegistryVersion: "a" },
    scanContext: { browser: "chromium" }
  });
  const current = artifact({
    issues: [],
    algorithm: { correlationVersion: "correlation/1", semanticsVersion: "rule-semantics/1", mappingRegistryVersion: "b" },
    scanContext: { browser: "firefox" }
  });

  const kinds = compareRuns({ previous, current }).metadataDifferences.map((difference) => difference.kind);
  assert.ok(kinds.includes("correlation-logic-change"));
  assert.ok(kinds.includes("mapping-data-change"));
  assert.ok(kinds.includes("execution-condition-change"));
});

test("continuity keys ignore the document hash but keep the page and path", () => {
  const a = issue({ id: "a", hash: "aaa" });
  const b = issue({ id: "b", hash: "bbb" });
  assert.equal(continuityKey(a), continuityKey(b));
  assert.notEqual(continuityKey(a), continuityKey(issue({ id: "c", hash: "aaa", url: "https://example.org/other" })));
  assert.notEqual(continuityKey(a), continuityKey(issue({ id: "d", hash: "aaa", family: "color-contrast" })));
});

test("new findings are counted without inventing continuity", () => {
  const previous = artifact({ issues: [issue({ id: "keep" })] });
  const current = artifact({
    issues: [issue({ id: "keep" }), issue({ id: "brand-new", family: "color-contrast" })]
  });

  const comparison = compareRuns({ previous, current });
  assert.equal(comparison.counts.persisting, 1);
  assert.equal(comparison.counts.new, 1);
  assert.equal(comparison.reconciliation.currentAccountedFor, 2);
});

test("comparison is deterministic for identical inputs", () => {
  const previous = artifact({ issues: [issue({ id: "old", hash: "aaa" })] });
  const current = artifact({ issues: [issue({ id: "new", hash: "bbb" })] });
  const first = compareRuns({ previous, current });
  const second = compareRuns({ previous, current });
  assert.equal(first.comparisonId, second.comparisonId);
  assert.deepEqual(first.counts, second.counts);
});

test("previous correlation is found in the report tree, not beside the output dir", async () => {
  const { mkdtempSync, mkdirSync, writeFileSync } = await import("node:fs");
  const { tmpdir } = await import("node:os");
  const { join } = await import("node:path");
  const { findPreviousCorrelationPath } = await import("../../scanner/history-compare.mjs");

  const root = mkdtempSync(join(tmpdir(), "history-lookup-"));
  const issueDir = join(root, "reports", "issues", "issue-7");
  mkdirSync(join(issueDir, "2026-11-19T10-00-00-000Z"), { recursive: true });
  mkdirSync(join(issueDir, "2026-11-19T12-00-00-000Z"), { recursive: true });
  mkdirSync(join(issueDir, "2026-11-19T13-00-00-000Z"), { recursive: true });
  writeFileSync(join(issueDir, "2026-11-19T10-00-00-000Z", "correlation.json"), "{}");
  writeFileSync(join(issueDir, "2026-11-19T12-00-00-000Z", "correlation.json"), "{}");
  // newest has no correlation yet: it is the run being written now
  const outputDir = join(root, ".scan-output");

  const found = findPreviousCorrelationPath({ issueNumber: 7, outputDir, cwd: root });
  assert.equal(found, join(issueDir, "2026-11-19T12-00-00-000Z", "correlation.json"));

  const none = findPreviousCorrelationPath({ issueNumber: 999, outputDir, cwd: root });
  assert.equal(none, null);
});

test("the run being written is excluded even when it sits in the report tree", async () => {
  const { mkdtempSync, mkdirSync, writeFileSync } = await import("node:fs");
  const { tmpdir } = await import("node:os");
  const { join } = await import("node:path");
  const { findPreviousCorrelationPath } = await import("../../scanner/history-compare.mjs");

  const root = mkdtempSync(join(tmpdir(), "history-lookup-"));
  const issueDir = join(root, "reports", "issues", "issue-7");
  const older = join(issueDir, "2026-11-19T10-00-00-000Z");
  const current = join(issueDir, "2026-11-19T12-00-00-000Z");
  mkdirSync(older, { recursive: true });
  mkdirSync(current, { recursive: true });
  writeFileSync(join(older, "correlation.json"), "{}");
  writeFileSync(join(current, "correlation.json"), "{}");

  const found = findPreviousCorrelationPath({ issueNumber: 7, outputDir: current, cwd: root });
  assert.equal(found, join(older, "correlation.json"));
});

test("a family rename keeps continuity when the ACT rule is unchanged", () => {
  const before = issue({ id: "before", family: "text-alternative" });
  before.actRuleIds = ["23a2a8"];
  const after = issue({ id: "after", family: "act:23a2a8" });
  after.actRuleIds = ["23a2a8"];

  assert.equal(continuityKey(before), continuityKey(after), "ACT rule identity outranks the family label");

  const comparison = compareRuns({
    previous: artifact({ issues: [before] }),
    current: artifact({ issues: [after] })
  });
  assert.equal(comparison.counts.new, 0, "a renamed family must not look like a new issue");
  assert.equal(comparison.counts.notObserved, 0, "a renamed family must not look resolved");
  assert.equal(comparison.counts.changed, 1);
});
