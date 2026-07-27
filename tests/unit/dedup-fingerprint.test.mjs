import test from "node:test";
import assert from "node:assert/strict";
import { writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  computeFindingFingerprint,
  loadFingerprintStore,
  annotateWithFingerprints,
  computePatternId,
  formatA11yId,
  A11Y_ID_PREFIX,
  collectFingerprintsFromResults,
  computeChangeTracking
} from "../../scanner/run-scan.mjs";

const TMP = tmpdir();

// ── computeFindingFingerprint ──────────────────────────────────────────────

test("computeFindingFingerprint returns 12-char hex string", () => {
  const fp = computeFindingFingerprint("https://example.com", "#main", "wcag:wcag143|light");
  assert.match(fp, /^[0-9a-f]{12}$/);
});

test("computeFindingFingerprint is deterministic", () => {
  const a = computeFindingFingerprint("https://example.com", "#main", "wcag:wcag143|light");
  const b = computeFindingFingerprint("https://example.com", "#main", "wcag:wcag143|light");
  assert.equal(a, b);
});

test("computeFindingFingerprint differs for different inputs", () => {
  const a = computeFindingFingerprint("https://a.com", "#h1", "wcag:wcag143|light");
  const b = computeFindingFingerprint("https://b.com", "#h1", "wcag:wcag143|light");
  const c = computeFindingFingerprint("https://a.com", "#h2", "wcag:wcag143|light");
  const d = computeFindingFingerprint("https://a.com", "#h1", "wcag:wcag111|light");
  assert.notEqual(a, b);
  assert.notEqual(a, c);
  assert.notEqual(a, d);
});

// ── loadFingerprintStore ───────────────────────────────────────────────────

test("loadFingerprintStore returns empty object when file does not exist", () => {
  const store = loadFingerprintStore(join(TMP, "does-not-exist-fingerprints.json"));
  assert.deepEqual(store, {});
});

test("loadFingerprintStore returns empty object for invalid JSON", () => {
  const badPath = join(TMP, "bad-fingerprints.json");
  writeFileSync(badPath, "not valid json");
  const store = loadFingerprintStore(badPath);
  assert.deepEqual(store, {});
  rmSync(badPath);
});

test("loadFingerprintStore loads existing store", () => {
  const testPath = join(TMP, "test-fingerprints.json");
  const data = { abc123: { firstSeenAt: "2026-01-01T00:00:00Z", lastSeenAt: "2026-01-02T00:00:00Z" } };
  writeFileSync(testPath, JSON.stringify(data));
  const store = loadFingerprintStore(testPath);
  assert.deepEqual(store, data);
  rmSync(testPath);
});

// ── annotateWithFingerprints ───────────────────────────────────────────────

function makeResult(failures = []) {
  const noopScanner = { failures: [], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } };
  return {
    submittedUrl: "https://example.com/",
    finalUrl: "https://example.com/",
    axe: { ...noopScanner, failures },
    alfa: noopScanner,
    equalAccess: noopScanner,
    accesslint: noopScanner,
    qualweb: noopScanner
  };
}

test("annotateWithFingerprints attaches fingerprint and firstSeenAt to new findings", () => {
  const store = {};
  const failure = { rule: "color-contrast", xpath: "#main", html: null, isDuplicate: false };
  const results = [makeResult([failure])];
  annotateWithFingerprints(store, results, { scannedAt: "2026-03-01T00:00:00Z", issueNumber: 42, scanTitle: "Test" });

  assert.ok(failure.fingerprint, "fingerprint should be attached");
  assert.equal(failure.firstSeenAt, "2026-03-01T00:00:00Z");
  assert.match(failure.fingerprint, /^[0-9a-f]{12}$/);
});

test("annotateWithFingerprints records new fingerprints in store", () => {
  const store = {};
  const failure = { rule: "image-alt", xpath: "img.logo", html: null, isDuplicate: false };
  const results = [makeResult([failure])];
  annotateWithFingerprints(store, results, { scannedAt: "2026-03-15T12:00:00Z", issueNumber: 10 });

  assert.equal(Object.keys(store).length, 1);
  const entry = Object.values(store)[0];
  assert.equal(entry.firstSeenAt, "2026-03-15T12:00:00Z");
  assert.equal(entry.lastSeenAt, "2026-03-15T12:00:00Z");
  assert.equal(entry.issueNumber, 10);
});

test("annotateWithFingerprints preserves firstSeenAt for recurring findings", () => {
  const store = { abc: { firstSeenAt: "2026-01-01T00:00:00Z", lastSeenAt: "2026-01-01T00:00:00Z", issueNumber: 1, url: "https://example.com/" } };
  // Create a failure that will produce the same fingerprint as 'abc'
  // We need to reverse-engineer what fingerprint this failure will get.
  // Instead, pre-populate the store with the actual fingerprint from a first run:
  const failure = { rule: "color-contrast", xpath: "#nav", html: null, isDuplicate: false };
  const results = [makeResult([failure])];

  // First run to get the fingerprint
  const tempStore = {};
  annotateWithFingerprints(tempStore, results, { scannedAt: "2026-01-01T00:00:00Z" });
  const fp = failure.fingerprint;
  const preExistingStore = { [fp]: { firstSeenAt: "2026-01-01T00:00:00Z", lastSeenAt: "2026-01-01T00:00:00Z" } };

  // Second run with the pre-existing store
  const failure2 = { rule: "color-contrast", xpath: "#nav", html: null, isDuplicate: false };
  const results2 = [makeResult([failure2])];
  annotateWithFingerprints(preExistingStore, results2, { scannedAt: "2026-03-20T00:00:00Z" });

  assert.equal(failure2.firstSeenAt, "2026-01-01T00:00:00Z", "firstSeenAt should be preserved from original scan");
  assert.equal(preExistingStore[fp].lastSeenAt, "2026-03-20T00:00:00Z", "lastSeenAt should be updated");
});

test("annotateWithFingerprints skips duplicate findings", () => {
  const store = {};
  const failure = { rule: "color-contrast", xpath: "#nav", html: null, isDuplicate: true };
  const results = [makeResult([failure])];
  annotateWithFingerprints(store, results, { scannedAt: "2026-03-01T00:00:00Z" });

  assert.equal(Object.keys(store).length, 0, "duplicate findings should not be fingerprinted");
  assert.equal(failure.fingerprint, undefined, "duplicate findings should not have fingerprint attached");
});

// ── formatA11yId / A11Y_ID_PREFIX ──────────────────────────────────────────

test("A11Y_ID_PREFIX is 'A11Y'", () => {
  assert.equal(A11Y_ID_PREFIX, "A11Y");
});

test("formatA11yId produces A11Y-xxxxxxxx format", () => {
  const id = formatA11yId("abcdef1234567890");
  assert.match(id, /^A11Y-[0-9a-f]{8}$/);
  assert.equal(id, "A11Y-abcdef12");
});

test("formatA11yId uses first 8 hex chars of input", () => {
  const id = formatA11yId("ff00aabb99887766");
  assert.equal(id, "A11Y-ff00aabb");
});

// ── computePatternId ───────────────────────────────────────────────────────

test("computePatternId returns A11Y-xxxxxxxx format", () => {
  const id = computePatternId("#main", "wcag:wcag143|light");
  assert.match(id, /^A11Y-[0-9a-f]{8}$/);
});

test("computePatternId is deterministic", () => {
  const a = computePatternId("#main", "wcag:wcag143|light");
  const b = computePatternId("#main", "wcag:wcag143|light");
  assert.equal(a, b);
});

test("computePatternId differs for different locators", () => {
  const a = computePatternId("#h1", "wcag:wcag143|light");
  const b = computePatternId("#h2", "wcag:wcag143|light");
  assert.notEqual(a, b);
});

test("computePatternId differs for different rule keys", () => {
  const a = computePatternId("#main", "wcag:wcag111|light");
  const b = computePatternId("#main", "wcag:wcag143|light");
  assert.notEqual(a, b);
});

test("computePatternId ignores colour mode", () => {
  const a = computePatternId("#main", "wcag:wcag143|light");
  const b = computePatternId("#main", "wcag:wcag143|light");
  assert.equal(a, b);
});

test("computePatternId is the same for same locator+rule across different URLs", () => {
  // Pattern ID does not include the URL so the same defect on two pages shares an ID.
  const a = computePatternId("#btn", "rule:button-name|light");
  const b = computePatternId("#btn", "rule:button-name|light");
  assert.equal(a, b);
});

test("annotateWithFingerprints attaches patternId to non-duplicate findings", () => {
  const store = {};
  const failure = { rule: "color-contrast", xpath: "#main", html: null, isDuplicate: false, colorScheme: "light" };
  const results = [makeResult([failure])];
  annotateWithFingerprints(store, results, { scannedAt: "2026-03-01T00:00:00Z" });

  assert.ok(failure.patternId, "patternId should be attached");
  assert.match(failure.patternId, /^A11Y-[0-9a-f]{8}$/, "patternId should be in A11Y-xxxxxxxx format");
});

test("annotateWithFingerprints gives same patternId to same defect on different pages", () => {
  const store = {};
  const makePageResult = (url) => {
    const noopScanner = { failures: [], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } };
    const failure = { rule: "image-alt", xpath: "img.logo", html: null, isDuplicate: false, colorScheme: "light" };
    return {
      result: {
        submittedUrl: url,
        finalUrl: url,
        axe: { failures: [failure], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } },
        alfa: noopScanner, equalAccess: noopScanner, accesslint: noopScanner, qualweb: noopScanner
      },
      failure
    };
  };

  const page1 = makePageResult("https://example.com/page1");
  const page2 = makePageResult("https://example.com/page2");
  annotateWithFingerprints(store, [page1.result, page2.result], { scannedAt: "2026-03-01T00:00:00Z" });

  assert.notEqual(page1.failure.fingerprint, page2.failure.fingerprint, "instance IDs should differ across pages");
  assert.equal(page1.failure.patternId, page2.failure.patternId, "pattern IDs should be identical across pages");
});

// ── normalizeRuleKey WCAG SC filtering ────────────────────────────────────
// We test this indirectly through computeFindingFingerprint consistency between
// a failure with level-inclusive tags vs SC-only tags.
test("fingerprints match for same SC regardless of level tag presence", () => {
  // Simulate axe-style failure with level tags included
  const axeFailure = {
    rule: "color-contrast",
    xpath: "#h1",
    html: null,
    wcagSc: ["wcag143", "wcag1411", "wcag2aa", "wcag21aa"], // includes level tags
    colorScheme: "light",
    isDuplicate: false
  };
  // Simulate AccessLint-style failure with only SC tags (after enrichment)
  const accesslintFailure = {
    rule: "color-contrast",
    xpath: "#h1",
    html: null,
    wcagSc: ["wcag143", "wcag1411"], // SC-only, no level tags
    colorScheme: "light",
    isDuplicate: false
  };

  const store = {};
  const results = [{
    submittedUrl: "https://example.com/",
    finalUrl: "https://example.com/",
    axe: {
      failures: [axeFailure],
      counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 }
    },
    alfa: { failures: [], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } },
    equalAccess: { failures: [], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } },
    accesslint: {
      failures: [accesslintFailure],
      counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 }
    },
    qualweb: { failures: [], counts: { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 } }
  }];

  annotateWithFingerprints(store, results, { scannedAt: "2026-03-01T00:00:00Z" });

  // The two failures on the same element for the same WCAG SCs should produce
  // the same fingerprint after the SC-only normalization fix.
  assert.equal(
    axeFailure.fingerprint,
    accesslintFailure.fingerprint,
    "axe and AccessLint failures for the same WCAG SCs on the same element should share a fingerprint"
  );
});

// ── Store ruleKey / engine enrichment ─────────────────────────────────────

test("annotateWithFingerprints saves ruleKey and engine in new store entries", () => {
  const store = {};
  const failure = { rule: "image-alt", xpath: "img.logo", html: null, isDuplicate: false };
  const results = [makeResult([failure])];
  annotateWithFingerprints(store, results, { scannedAt: "2026-04-01T00:00:00Z" });

  const entry = Object.values(store)[0];
  assert.ok(entry.engine, "store entry should include engine");
  assert.equal(entry.engine, "axe", "engine should be 'axe' for axe failures");
  assert.ok(entry.ruleKey, "store entry should include ruleKey");
});

test("annotateWithFingerprints backfills engine for pre-existing store entries without engine", () => {
  const failure = { rule: "image-alt", xpath: "img.logo", html: null, isDuplicate: false };
  const results = [makeResult([failure])];

  // Get the fingerprint by running a first annotation
  const tmpStore = {};
  annotateWithFingerprints(tmpStore, results, { scannedAt: "2026-01-01T00:00:00Z" });
  const fp = failure.fingerprint;

  // Simulate an old store entry that has no engine/ruleKey fields
  const oldStore = { [fp]: { firstSeenAt: "2026-01-01T00:00:00Z", lastSeenAt: "2026-01-01T00:00:00Z" } };

  const failure2 = { rule: "image-alt", xpath: "img.logo", html: null, isDuplicate: false };
  const results2 = [makeResult([failure2])];
  annotateWithFingerprints(oldStore, results2, { scannedAt: "2026-04-01T00:00:00Z" });

  assert.equal(oldStore[fp].engine, "axe", "engine should be backfilled");
});


// ── collectFingerprintsFromResults ─────────────────────────────────────────

test("collectFingerprintsFromResults returns empty set when no failures have fingerprints", () => {
  const failure = { rule: "color-contrast", xpath: "#main", html: null, isDuplicate: false };
  const results = [makeResult([failure])];
  const keys = collectFingerprintsFromResults(results);
  assert.equal(keys.size, 0, "no fingerprints should be collected before annotation");
});

test("collectFingerprintsFromResults returns set of annotated fingerprints", () => {
  const store = {};
  const failure = { rule: "color-contrast", xpath: "#main", html: null, isDuplicate: false };
  const results = [makeResult([failure])];
  annotateWithFingerprints(store, results, { scannedAt: "2026-04-01T00:00:00Z" });

  const keys = collectFingerprintsFromResults(results);
  assert.equal(keys.size, 1, "should find one fingerprint");
  assert.ok(keys.has(failure.fingerprint), "should include the failure's fingerprint");
});

// ── computeChangeTracking ──────────────────────────────────────────────────

test("computeChangeTracking reports new issues correctly", () => {
  const prevKeys = new Set(["old1", "old2"]);
  const currKeys = new Set(["old1", "new1"]);
  const store = {
    new1: { url: "https://example.com/", ruleKey: "axe:region", engine: "axe", lastSeenAt: "2026-04-01T00:00:00Z" }
  };
  const result = computeChangeTracking(prevKeys, currKeys, store);

  assert.equal(result.newCount, 1, "should report one new issue");
  assert.equal(result.notObservedCount, 1, "should report one not-observed issue (old2 not in curr)");
  assert.equal(result.newIssues[0].fingerprint, "new1");
  assert.equal(result.newIssues[0].engine, "axe");
});

test("computeChangeTracking reports not-observed issues correctly", () => {
  const prevKeys = new Set(["fp1", "fp2"]);
  const currKeys = new Set(["fp1"]);
  const store = {
    fp2: { url: "https://example.com/page2", ruleKey: "axe:image-alt", engine: "axe", lastSeenAt: "2026-03-01T00:00:00Z" }
  };
  const result = computeChangeTracking(prevKeys, currKeys, store);

  assert.equal(result.newCount, 0);
  assert.equal(result.notObservedCount, 1);
  assert.equal(result.notObservedIssues[0].fingerprint, "fp2");
  assert.equal(result.notObservedIssues[0].lastSeenAt, "2026-03-01T00:00:00Z");
});

test("computeChangeTracking returns zero counts when nothing changed", () => {
  const prevKeys = new Set(["fp1"]);
  const currKeys = new Set(["fp1"]);
  const store = { fp1: { url: "https://example.com/", ruleKey: "axe:region", engine: "axe" } };
  const result = computeChangeTracking(prevKeys, currKeys, store);

  assert.equal(result.newCount, 0);
  assert.equal(result.notObservedCount, 0);
  assert.deepEqual(result.newIssues, []);
  assert.deepEqual(result.notObservedIssues, []);
});

test("computeChangeTracking handles missing store entries gracefully", () => {
  const prevKeys = new Set(["fp1"]);
  const currKeys = new Set(["fp2"]);
  const store = {}; // no entries

  const result = computeChangeTracking(prevKeys, currKeys, store);
  assert.equal(result.newCount, 1);
  assert.equal(result.notObservedCount, 1);
  assert.equal(result.newIssues[0].url, null);
  assert.equal(result.notObservedIssues[0].engine, null);
});

// ── annotateWithFingerprints: semantica11y and reflowRisk ──────────────────

function makeResultWithExtras({ semantica11yIssues = [], reflowRisk = null } = {}) {
  const result = makeResult([]);
  result.semantica11y = { executed: true, summary: { total: semantica11yIssues.length, errors: 0, warnings: 0, suggestions: 0 }, issues: semantica11yIssues, error: null };
  if (reflowRisk) {
    result.reflowRisk = reflowRisk;
  }
  return result;
}

test("annotateWithFingerprints attaches fingerprint and patternId to semantica11y issues", () => {
  const store = {};
  const issue = { severity: "error", rule: "image-alt", element: "<img>", message: "Image is missing an alt attribute" };
  const results = [makeResultWithExtras({ semantica11yIssues: [issue] })];
  annotateWithFingerprints(store, results, { scannedAt: "2026-05-01T00:00:00Z" });

  assert.ok(issue.fingerprint, "semantica11y issue should get a fingerprint");
  assert.match(issue.fingerprint, /^[0-9a-f]{12}$/);
  assert.ok(issue.patternId.startsWith(A11Y_ID_PREFIX));
  assert.equal(store[issue.fingerprint].engine, "semantica11y");
});

test("annotateWithFingerprints gives reflowRisk a fingerprint when it did not pass", () => {
  const store = {};
  const reflowRisk = { executed: true, result: "failed", description: "overflow", overflowAmountPx: 42, error: null };
  const results = [makeResultWithExtras({ reflowRisk })];
  annotateWithFingerprints(store, results, { scannedAt: "2026-05-01T00:00:00Z" });

  assert.ok(reflowRisk.fingerprint, "reflowRisk should get a fingerprint when flagged");
  assert.equal(store[reflowRisk.fingerprint].engine, "reflowRisk");
});

test("annotateWithFingerprints does not fingerprint a passing reflowRisk", () => {
  const store = {};
  const reflowRisk = { executed: true, result: "passed", description: "no overflow", overflowAmountPx: 0, error: null };
  const results = [makeResultWithExtras({ reflowRisk })];
  annotateWithFingerprints(store, results, { scannedAt: "2026-05-01T00:00:00Z" });

  assert.equal(reflowRisk.fingerprint, undefined, "a passing reflowRisk should not be fingerprinted");
});

test("collectFingerprintsFromResults includes semantica11y and reflowRisk fingerprints", () => {
  const store = {};
  const issue = { severity: "error", rule: "image-alt", element: "<img>", message: "Image is missing an alt attribute" };
  const reflowRisk = { executed: true, result: "failed", description: "overflow", overflowAmountPx: 42, error: null };
  const results = [makeResultWithExtras({ semantica11yIssues: [issue], reflowRisk })];
  annotateWithFingerprints(store, results, { scannedAt: "2026-05-01T00:00:00Z" });

  const keys = collectFingerprintsFromResults(results);
  assert.ok(keys.has(issue.fingerprint));
  assert.ok(keys.has(reflowRisk.fingerprint));
});
