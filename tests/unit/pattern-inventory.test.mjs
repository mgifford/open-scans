import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  PATTERN_INVENTORY_SCHEMA_VERSION,
  buildPatternInventory,
  patternInventoryToCsv
} from "../../scanner/pattern-inventory.mjs";

function makeResult(url, failures = [], extra = {}) {
  return {
    submittedUrl: url,
    finalUrl: url,
    ok: true,
    axe: {
      executed: true,
      failures
    },
    alfa: { executed: true, failures: [] },
    equalAccess: { executed: true, failures: [] },
    accesslint: { executed: true, failures: [] },
    ...extra
  };
}

function failure(overrides = {}) {
  return {
    rule: "link-name",
    description: "Links must have discernible text",
    wcagSc: ["wcag2a", "wcag244", "wcag412"],
    xpath: "nav a.icon",
    html: "<a class=\"icon\"></a>",
    message: "Links must have discernible text",
    isDuplicate: false,
    fingerprint: "aaaaaaaaaaaa",
    patternId: "A11Y-aaaaaaaa",
    firstSeenAt: "2026-11-01T00:00:00Z",
    ...overrides
  };
}

function inventory(results) {
  return buildPatternInventory(results, { generatedAt: "2026-11-17T12:00:00.000Z" });
}

test("the same navigation pattern on two pages becomes one pattern with a navigation container", () => {
  const value = inventory([
    makeResult("https://example.gov/", [failure()]),
    makeResult("https://example.gov/services", [failure({ fingerprint: "bbbbbbbbbbbb" })])
  ]);
  assert.equal(value.schema, PATTERN_INVENTORY_SCHEMA_VERSION);
  assert.equal(value.summary.uniquePatterns, 1);
  assert.equal(value.patterns[0].occurrenceCount, 2);
  assert.equal(value.patterns[0].pageCount, 2);
  assert.equal(value.patterns[0].category, "navigation");
  assert.equal(value.patterns[0].container.element, "navigation");
  assert.equal(value.patterns[0].container.basis, "selector-token");
  assert.equal(value.patterns[0].container.confidence, "low");
  assert.equal(value.patterns[0].container.ownershipEstablished, false);
  assert.equal(value.summary.byCategory.navigation.patterns, 1);
  assert.equal(value.summary.byCategory.navigation.occurrences, 2);
  assert.equal(value.summary.byCategory.navigation.pages, 2);
  assert.equal(value.summary.patternsWithSelector, 1);
  assert.equal(value.summary.htmlOnlyPatterns, 0);
  assert.equal(value.patterns[0].locatorCoverage, "selector");
  assert.equal(value.patterns[0].hasSelector, true);
  assert.ok(value.patterns[0].actRuleIds.includes("c487ae"));
});

test("form, form-control, header, footer, table and unassigned containers are counted separately", () => {
  const value = inventory([
    makeResult("https://example.gov/form", [
      failure({ rule: "label", xpath: "form#search input", patternId: "A11Y-form", fingerprint: "111111111111", html: "<input>" }),
      failure({ rule: "select-name", xpath: "input#email", patternId: "A11Y-control", fingerprint: "222222222222", html: "<input>" }),
      failure({ rule: "region", xpath: "header.site-header", patternId: "A11Y-header", fingerprint: "333333333333", html: "<header>" }),
      failure({ rule: "landmark", xpath: "footer", patternId: "A11Y-footer", fingerprint: "444444444444", html: "<footer>" }),
      failure({ rule: "td-headers-attr", xpath: "table.results td", patternId: "A11Y-table", fingerprint: "555555555555", html: "<td>" }),
      failure({ rule: "aria-allowed-attr", xpath: ".widget", patternId: "A11Y-unknown", fingerprint: "666666666666", html: "<div>" })
    ])
  ]);
  assert.equal(value.summary.uniquePatterns, 6);
  assert.equal(value.summary.byCategory.form.patterns, 1);
  assert.equal(value.summary.byCategory["form-control"].patterns, 1);
  assert.equal(value.summary.byCategory.banner.patterns, 1);
  assert.equal(value.summary.byCategory.contentinfo.patterns, 1);
  assert.equal(value.summary.byCategory.table.patterns, 1);
  assert.equal(value.summary.byCategory.unknown.patterns, 1);
  assert.equal(value.summary.unassignedPatterns, 1);
});

test("patterns without selectors are reported as HTML-only instead of inventing a locator", () => {
  const value = inventory([
    makeResult("https://example.gov/", [failure({ xpath: null, html: "<input id=\"email\">", patternId: "A11Y-html", fingerprint: "999999999999" })])
  ]);
  assert.equal(value.summary.htmlOnlyPatterns, 1);
  assert.equal(value.patterns[0].locatorCoverage, "html-only");
  assert.equal(value.patterns[0].hasSelector, false);
  assert.equal(value.patterns[0].category, "form-control");
});

test("different rules on the same container remain different patterns", () => {
  const value = inventory([
    makeResult("https://example.gov/", [
      failure({ rule: "link-name", patternId: "A11Y-a", fingerprint: "aaaaaaaaaaaa" }),
      failure({ rule: "color-contrast", patternId: "A11Y-b", fingerprint: "bbbbbbbbbbbb" })
    ])
  ]);
  assert.equal(value.summary.uniquePatterns, 2);
  assert.equal(value.patterns.filter((pattern) => pattern.category === "navigation").length, 2);
});

test("duplicate findings are excluded and canonical pattern identity is preserved", () => {
  const canonical = failure({
    patternId: undefined,
    a11yPatternFingerprint: "f".repeat(64),
    a11yPatternDisplayId: "A11Y-PAT-FFFFFFFFFFFF",
    fingerprint: "aaaaaaaaaaaa"
  });
  const duplicate = failure({ isDuplicate: true, patternId: "A11Y-dupe" });
  const value = inventory([makeResult("https://example.gov/", [canonical, duplicate])]);
  assert.equal(value.summary.uniquePatterns, 1);
  assert.equal(value.patterns[0].identitySource, "canonical");
  assert.equal(value.patterns[0].displayId, "A11Y-PAT-FFFFFFFFFFFF");
  assert.equal(value.patterns[0].canonicalPatternFingerprint, "f".repeat(64));
});

test("reflow and Semantica11y findings are included as page-level patterns", () => {
  const result = makeResult("https://example.gov/", [], {
    reflowRisk: {
      executed: true,
      result: "failed",
      description: "Horizontal overflow detected",
      fingerprint: "777777777777",
      patternId: "A11Y-reflow"
    },
    semantica11y: {
      executed: true,
      issues: [{
        severity: "warning",
        rule: "aria-landmarks",
        element: "<div role=\"main\">",
        message: "Element appears to be used for main content",
        fingerprint: "888888888888",
        patternId: "A11Y-sem"
      }]
    }
  });
  const value = inventory([result]);
  assert.equal(value.summary.uniquePatterns, 2);
  assert.ok(value.patterns.some((pattern) => pattern.rule === "reflow-risk"));
  assert.ok(value.patterns.some((pattern) => pattern.engine === "semantica11y"));
});

test("the inventory states that categories are candidates, not ownership", () => {
  const value = inventory([makeResult("https://example.gov/", [failure()])]);
  assert.equal(value.summary.ownershipEstablished, false);
  assert.match(value.summary.note, /not component ownership/i);
  assert.match(value.patterns[0].container.uncertainty[0], /not a claim/i);
});

test("pattern inventory CSV has the expected identifiers and container columns", () => {
  const value = inventory([makeResult("https://example.gov/", [failure()])]);
  const csv = patternInventoryToCsv(value);
  assert.match(csv, /"category"/);
  assert.match(csv, /"container_element"/);
  assert.match(csv, /"pattern_id"/);
  assert.match(csv, /"locator_coverage"/);
  assert.match(csv, /"A11Y-aaaaaaaa"/);
  assert.match(csv, /"c487ae"/);
  assert.match(csv, /"navigation"/);
});


test("the pattern inventory schema is versioned and states no ownership", () => {
  const schema = JSON.parse(readFileSync(new URL("../../scanner/schemas/a11y-pattern-inventory.schema.json", import.meta.url), "utf8"));
  assert.equal(schema.properties.schema.const, PATTERN_INVENTORY_SCHEMA_VERSION);
  assert.equal(schema.additionalProperties, false);
  assert.equal(schema.properties.summary.properties.ownershipEstablished.const, false);
  assert.equal(schema.$defs.container.properties.ownershipEstablished.const, false);
  assert.ok(schema.properties.summary.required.includes("patternsWithSelector"));
  assert.ok(schema.required.includes("patterns"));
});
