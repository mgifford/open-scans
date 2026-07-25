import test from "node:test";
import assert from "node:assert/strict";
import {
  compareVersions,
  getDeclaredRange,
  ENGINE_PACKAGES
} from "../../scanner/check-engine-versions.mjs";

test("compareVersions detects an older version", () => {
  assert.ok(compareVersions("0.81.3", "0.84.2") < 0);
});

test("compareVersions detects a newer version", () => {
  assert.ok(compareVersions("1.2.0", "1.1.9") > 0);
});

test("compareVersions treats equal versions as equal", () => {
  assert.strictEqual(compareVersions("4.0.26", "4.0.26"), 0);
});

test("compareVersions handles differing segment counts", () => {
  assert.ok(compareVersions("1.0", "1.0.1") < 0);
  assert.ok(compareVersions("1.0.0", "1.0") === 0);
});

test("getDeclaredRange strips caret/tilde prefixes are preserved as-is", () => {
  const range = getDeclaredRange("@siteimprove/alfa-cli");
  assert.ok(range.startsWith("^"), "Should return the raw declared range");
});

test("getDeclaredRange returns null for a package not in package.json", () => {
  assert.strictEqual(getDeclaredRange("not-a-real-package-xyz"), null);
});

test("ENGINE_PACKAGES lists all accessibility scanning engines used by run-scan.mjs", () => {
  assert.ok(ENGINE_PACKAGES.includes("@siteimprove/alfa-cli"));
  assert.ok(ENGINE_PACKAGES.includes("@axe-core/playwright"));
  assert.ok(ENGINE_PACKAGES.includes("accessibility-checker"));
  assert.ok(ENGINE_PACKAGES.includes("@accesslint/core"));
  assert.ok(ENGINE_PACKAGES.includes("@qualweb/core"));
});

test("package.json declares @qualweb/util required by @qualweb/core at runtime", () => {
  const range = getDeclaredRange("@qualweb/util");
  assert.ok(range, "Expected @qualweb/util in package.json dependencies");
});
