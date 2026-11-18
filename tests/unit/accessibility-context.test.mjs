import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  ACCESSIBILITY_CONTEXT_SCHEMA_VERSION,
  accessibilityContextToCsv,
  buildAccessibilityContext
} from "../../scanner/accessibility-context.mjs";

function makeResult(url, failures = []) {
  return {
    submittedUrl: url,
    finalUrl: url,
    ok: true,
    axe: { executed: true, failures },
    alfa: { executed: true, failures: [] },
    equalAccess: { executed: true, failures: [] },
    accesslint: { executed: true, failures: [] }
  };
}

function failure(overrides = {}) {
  return {
    rule: "link-name",
    xpath: "nav a.icon",
    html: "<a class=\"icon\"></a>",
    wcagSc: ["wcag2a", "wcag244"],
    isDuplicate: false,
    fingerprint: "aaaaaaaaaaaa",
    patternId: "A11Y-aaaaaaaa",
    ...overrides
  };
}

test("occurrence-level context exposes page, selector, pattern and container for a graph join", () => {
  const value = buildAccessibilityContext([
    makeResult("https://example.gov/", [failure()]),
    makeResult("https://example.gov/services", [failure({ fingerprint: "bbbbbbbbbbbb" })])
  ], {
    generatedAt: "2026-11-17T12:00:00.000Z",
    scan: { issueNumber: 42, scanTitle: "Example", scannedAt: "2026-11-17T11:00:00.000Z", engines: ["axe"] }
  });
  assert.equal(value.schema, ACCESSIBILITY_CONTEXT_SCHEMA_VERSION);
  assert.equal(value.observations.length, 2);
  assert.equal(value.summary.observations, 2);
  assert.equal(value.summary.pages, 2);
  assert.equal(value.summary.patterns, 1);
  assert.equal(value.summary.withSelector, 2);
  assert.equal(value.observations[0].pageUrl, "https://example.gov/");
  assert.equal(value.observations[0].selector, "nav a.icon");
  assert.equal(value.observations[0].selectorType, "css");
  assert.equal(value.summary.bySelectorType.css, 2);
  assert.equal(value.observations[0].container.category, "navigation");
  assert.equal(value.observations[0].container.ownershipEstablished, false);
  assert.equal(value.observations[0].patternDisplayId, "A11Y-aaaaaaaa");
  assert.match(value.observations[0].sourceRef, /results\[0\]\.axe\.failures\[0\]/);
  assert.equal(value.summary.ownershipEstablished, false);
});

test("HTML-only and page-level occurrences remain explicit in the handoff", () => {
  const value = buildAccessibilityContext([
    makeResult("https://example.gov/", [
      failure({ xpath: null, html: "<input>", patternId: "A11Y-html", fingerprint: "cccccccccccc" }),
      failure({ rule: "reflow-risk", xpath: null, selector: "(page-level)", html: null, patternId: "A11Y-page", fingerprint: "dddddddddddd" })
    ])
  ], { generatedAt: "2026-11-17T12:00:00.000Z" });
  assert.equal(value.summary.htmlOnly, 1);
  assert.equal(value.summary.withoutLocator, 1);
  assert.equal(value.summary.bySelectorType.html, 1);
  assert.equal(value.summary.bySelectorType.none, 1);
  assert.equal(value.observations.find((observation) => observation.rule === "reflow-risk").selector, null);
  assert.equal(value.observations.find((observation) => observation.rule === "reflow-risk").locatorSource, "none");
});

test("context CSV is one row per occurrence and includes the join fields", () => {
  const value = buildAccessibilityContext([makeResult("https://example.gov/", [failure()])], { generatedAt: "2026-11-17T12:00:00.000Z" });
  const csv = accessibilityContextToCsv(value);
  assert.match(csv, /"page_url"/);
  assert.match(csv, /"selector"/);
  assert.match(csv, /"selector_type"/);
  assert.match(csv, /"css"/);
  assert.match(csv, /"container_element"/);
  assert.match(csv, /"pattern_id"/);
  assert.match(csv, /"A11Y-aaaaaaaa"/);
  assert.match(csv, /"navigation"/);
});

test("the context schema pins version, fields and no ownership", () => {
  const schema = JSON.parse(readFileSync(new URL("../../scanner/schemas/a11y-accessibility-context.schema.json", import.meta.url), "utf8"));
  assert.equal(schema.properties.schema.const, ACCESSIBILITY_CONTEXT_SCHEMA_VERSION);
  assert.equal(schema.additionalProperties, false);
  assert.ok(schema.required.includes("observations"));
  assert.equal(schema.properties.summary.properties.ownershipEstablished.const, false);
  assert.ok(schema.properties.observations.items.required.includes("selector"));
});


test("the context artifact is schema-versioned and explicitly non-owning", () => {
  const schema = JSON.parse(readFileSync(new URL("../../scanner/schemas/a11y-accessibility-context.schema.json", import.meta.url), "utf8"));
  assert.equal(schema.properties.schema.const, ACCESSIBILITY_CONTEXT_SCHEMA_VERSION);
  assert.equal(schema.additionalProperties, false);
  assert.equal(schema.properties.summary.properties.ownershipEstablished.const, false);
  assert.ok(schema.required.includes("observations"));
  assert.deepEqual(
    schema.properties.observations.items.properties.selectorType.enum,
    ["css", "xpath", "html", "none", "unknown"]
  );
  assert.ok(!schema.properties.observations.items.required.includes("selectorType"), "selectorType stays additive for legacy artifacts");
});
