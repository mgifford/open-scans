import test from "node:test";
import assert from "node:assert/strict";
import { computeCrossEngineWcagOverlap } from "../../scanner/run-scan.mjs";

function makeResult(overrides = {}) {
  const noopScanner = { failures: [] };
  return {
    finalUrl: "https://example.com/",
    axe: { ...noopScanner },
    alfa: { ...noopScanner },
    equalAccess: { ...noopScanner },
    accesslint: { ...noopScanner },
    qualweb: { ...noopScanner },
    ...overrides
  };
}

test("computeCrossEngineWcagOverlap counts a non-axe failure sharing a WCAG SC with axe", () => {
  const axeFailure = { wcagSc: ["wcag143"], isDuplicate: false };
  const alfaFailure = { wcagSc: ["wcag143"], isDuplicate: false };
  const result = makeResult({
    axe: { failures: [axeFailure] },
    alfa: { failures: [alfaFailure] }
  });

  computeCrossEngineWcagOverlap(result);

  assert.equal(result.alfa.crossEngineOverlapCount, 1);
});

test("computeCrossEngineWcagOverlap does not count a failure with no shared WCAG SC", () => {
  const axeFailure = { wcagSc: ["wcag143"], isDuplicate: false };
  const alfaFailure = { wcagSc: ["wcag111"], isDuplicate: false };
  const result = makeResult({
    axe: { failures: [axeFailure] },
    alfa: { failures: [alfaFailure] }
  });

  computeCrossEngineWcagOverlap(result);

  assert.equal(result.alfa.crossEngineOverlapCount, 0);
});

test("computeCrossEngineWcagOverlap sets crossEngineOverlapCount to 0 when there are no failures", () => {
  const result = makeResult();
  computeCrossEngineWcagOverlap(result);

  assert.equal(result.alfa.crossEngineOverlapCount, 0);
  assert.equal(result.equalAccess.crossEngineOverlapCount, 0);
  assert.equal(result.accesslint.crossEngineOverlapCount, 0);
  assert.equal(result.qualweb.crossEngineOverlapCount, 0);
});

test("computeCrossEngineWcagOverlap ignores duplicate failures on the non-axe engine", () => {
  const axeFailure = { wcagSc: ["wcag143"], isDuplicate: false };
  const dupFailure = { wcagSc: ["wcag143"], isDuplicate: true };
  const result = makeResult({
    axe: { failures: [axeFailure] },
    alfa: { failures: [dupFailure] }
  });

  computeCrossEngineWcagOverlap(result);

  assert.equal(result.alfa.crossEngineOverlapCount, 0, "duplicate failures should not count toward overlap");
});

test("computeCrossEngineWcagOverlap ignores duplicate axe failures when building the SC set", () => {
  const dupAxeFailure = { wcagSc: ["wcag143"], isDuplicate: true };
  const alfaFailure = { wcagSc: ["wcag143"], isDuplicate: false };
  const result = makeResult({
    axe: { failures: [dupAxeFailure] },
    alfa: { failures: [alfaFailure] }
  });

  computeCrossEngineWcagOverlap(result);

  assert.equal(result.alfa.crossEngineOverlapCount, 0, "a duplicate axe failure should not contribute its WCAG SC");
});

test("computeCrossEngineWcagOverlap ignores non-SC-number tags like level tags", () => {
  const axeFailure = { wcagSc: ["wcag2aa", "wcag143"], isDuplicate: false };
  const alfaFailure = { wcagSc: ["wcag2aa"], isDuplicate: false };
  const result = makeResult({
    axe: { failures: [axeFailure] },
    alfa: { failures: [alfaFailure] }
  });

  computeCrossEngineWcagOverlap(result);

  assert.equal(result.alfa.crossEngineOverlapCount, 0, "level tags like wcag2aa should not count as a shared SC");
});

test("computeCrossEngineWcagOverlap matches lowercase WCAG SC tags on both sides (tags are expected lowercase, e.g. from axe-core)", () => {
  const axeFailure = { wcagSc: ["wcag143"], isDuplicate: false };
  const alfaFailure = { wcagSc: ["wcag143"], isDuplicate: false };
  const result = makeResult({
    axe: { failures: [axeFailure] },
    alfa: { failures: [alfaFailure] }
  });

  computeCrossEngineWcagOverlap(result);

  assert.equal(result.alfa.crossEngineOverlapCount, 1);
});

// NOTE: WCAG_SC_TAG_RE (/^wcag\d{3,}$/) is tested against the raw tag before
// lowercasing, so an uppercase tag like "WCAG143" fails the regex and is
// silently dropped from the axe SC set. Not exercised here because axe-core
// always emits lowercase tags in practice — flagging as a latent gap, not
// fixing as part of this test-coverage pass.

test("computeCrossEngineWcagOverlap counts once per failure even with multiple overlapping SCs", () => {
  const axeFailure = { wcagSc: ["wcag143", "wcag1411"], isDuplicate: false };
  const alfaFailure = { wcagSc: ["wcag143", "wcag1411"], isDuplicate: false };
  const result = makeResult({
    axe: { failures: [axeFailure] },
    alfa: { failures: [alfaFailure] }
  });

  computeCrossEngineWcagOverlap(result);

  assert.equal(result.alfa.crossEngineOverlapCount, 1, "should count the failure once, not once per matching tag");
});

test("computeCrossEngineWcagOverlap computes overlap independently for each non-axe engine", () => {
  const axeFailure = { wcagSc: ["wcag143"], isDuplicate: false };
  const alfaFailure = { wcagSc: ["wcag143"], isDuplicate: false };
  const equalAccessFailure = { wcagSc: ["wcag111"], isDuplicate: false };
  const result = makeResult({
    axe: { failures: [axeFailure] },
    alfa: { failures: [alfaFailure] },
    equalAccess: { failures: [equalAccessFailure] }
  });

  computeCrossEngineWcagOverlap(result);

  assert.equal(result.alfa.crossEngineOverlapCount, 1);
  assert.equal(result.equalAccess.crossEngineOverlapCount, 0);
});

test("computeCrossEngineWcagOverlap handles a failure with no wcagSc field", () => {
  const axeFailure = { wcagSc: ["wcag143"], isDuplicate: false };
  const alfaFailure = { isDuplicate: false };
  const result = makeResult({
    axe: { failures: [axeFailure] },
    alfa: { failures: [alfaFailure] }
  });

  assert.doesNotThrow(() => computeCrossEngineWcagOverlap(result));
  assert.equal(result.alfa.crossEngineOverlapCount, 0);
});

test("computeCrossEngineWcagOverlap handles a missing engine result gracefully", () => {
  const result = makeResult({ qualweb: undefined });
  assert.doesNotThrow(() => computeCrossEngineWcagOverlap(result));
});
