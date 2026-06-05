import test from "node:test";
import assert from "node:assert/strict";
import { computeAdaptivePageLoadDelayMs } from "../../scanner/run-scan.mjs";

test("computeAdaptivePageLoadDelayMs uses the fallback when there is no history", () => {
  assert.equal(computeAdaptivePageLoadDelayMs([], 2000), 2000);
});

test("computeAdaptivePageLoadDelayMs averages the last 10 timings and adds 1000ms", () => {
  const timings = [1000, 2000, 3000];
  assert.equal(computeAdaptivePageLoadDelayMs(timings, 2000), 3000);
});

test("computeAdaptivePageLoadDelayMs caps the adaptive delay", () => {
  const timings = [12000, 13000, 14000];
  assert.equal(computeAdaptivePageLoadDelayMs(timings, 2000), 10000);
});
