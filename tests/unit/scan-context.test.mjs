import test from "node:test";
import assert from "node:assert/strict";
import {
  buildScanContext,
  DEFAULT_BROWSER,
  DEFAULT_COLOR_SCHEME,
  DEFAULT_VIEWPORT_PRESET,
  formatViewportToken,
  getViewportPresetName,
  parseViewportSpec
} from "../../scan-context.js";

test("parseViewportSpec resolves named viewport presets", () => {
  const viewport = parseViewportSpec("mobile");
  assert.deepEqual(viewport, {
    width: 390,
    height: 844,
    preset: "mobile-portrait"
  });
});

test("parseViewportSpec resolves custom viewport sizes", () => {
  const viewport = parseViewportSpec("1024x768");
  assert.deepEqual(viewport, {
    width: 1024,
    height: 768,
    preset: "tablet-landscape"
  });
});

test("getViewportPresetName returns null for non-preset sizes", () => {
  assert.equal(getViewportPresetName({ width: 1111, height: 777 }), null);
});

test("buildScanContext fills in default scan context", () => {
  const scanContext = buildScanContext();
  assert.equal(scanContext.viewportPreset, DEFAULT_VIEWPORT_PRESET);
  assert.equal(scanContext.colorScheme, DEFAULT_COLOR_SCHEME);
  assert.equal(scanContext.browser, DEFAULT_BROWSER);
});

test("buildScanContext resolves a random browser choice", () => {
  const originalRandom = Math.random;
  Math.random = () => 0.9;

  try {
    const scanContext = buildScanContext({ browser: "random" });
    assert.equal(scanContext.browser, "webkit");
  } finally {
    Math.random = originalRandom;
  }
});

test("formatViewportToken returns a custom size token when no preset matches", () => {
  const token = formatViewportToken({
    viewport: { width: 1111, height: 777 },
    viewportPreset: "custom"
  });
  assert.equal(token, "1111x777");
});
