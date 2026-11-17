import test from "node:test";
import assert from "node:assert/strict";
import {
  COMPONENT_ASSOCIATION_SCHEMA_VERSION,
  associateFinding,
  buildComponentAssociations
} from "../../scanner/component-association.mjs";

test("semantic elements produce low-confidence region candidates without ownership", () => {
  const navigation = associateFinding({ locator: "nav a.icon", html: null });
  assert.equal(navigation.semanticRegion, "navigation");
  assert.equal(navigation.basis, "selector-token");
  assert.equal(navigation.confidence, "low");
  assert.equal(navigation.ownershipEstablished, false);
  assert.match(navigation.uncertainty[0], /not a claim/i);

  assert.equal(associateFinding({ locator: "header.site-header" }).semanticRegion, "banner");
  assert.equal(associateFinding({ locator: "main#content" }).semanticRegion, "main");
  assert.equal(associateFinding({ locator: "footer" }).semanticRegion, "contentinfo");
  assert.equal(associateFinding({ locator: "button.menu" }).semanticRegion, "button");
  assert.equal(associateFinding({ locator: "img.hero" }).semanticRegion, "image");
  assert.equal(associateFinding({ locator: "h3" }).semanticRegion, "heading");
  assert.equal(associateFinding({ locator: "html" }).semanticRegion, "document");
});

test("class-name lookalikes are not treated as semantic regions", () => {
  const finding = associateFinding({ locator: "article .nav-link", html: null });
  assert.equal(finding.semanticRegion, null);
  assert.equal(associateFinding({ locator: ".h1" }).semanticRegion, null);
  assert.equal(finding.basis, "none");
  assert.equal(finding.confidence, "unknown");
  assert.match(finding.uncertainty[0], /No explicit component identifier/i);
});

test("explicit component identifiers are preserved at high confidence but ownership stays false", () => {
  const finding = associateFinding({
    locator: "nav a.icon",
    componentId: "cmp-primary-nav",
    componentTypeId: "type-primary-nav",
    componentLabel: "Primary navigation"
  });
  assert.equal(finding.componentId, "cmp-primary-nav");
  assert.equal(finding.componentTypeId, "type-primary-nav");
  assert.equal(finding.componentLabel, "Primary navigation");
  assert.equal(finding.basis, "explicit-component");
  assert.equal(finding.confidence, "high");
  assert.equal(finding.ownershipEstablished, false);
  assert.match(finding.uncertainty[0], /does not independently verify component ownership/i);
});

test("component ids are indexed separately and labels are never identity", () => {
  const findings = [
    { comparisonId: "a", locator: "nav a", page: { logicalPageId: "page-1" }, componentContext: associateFinding({ locator: "nav a", componentId: "cmp-a", componentLabel: "Navigation" }) },
    { comparisonId: "b", locator: "nav b", page: { logicalPageId: "page-1" }, componentContext: associateFinding({ locator: "nav b", componentId: "cmp-b", componentLabel: "Navigation" }) },
    { comparisonId: "c", locator: "img", page: { logicalPageId: "page-2" }, componentContext: associateFinding({ locator: "img" }) }
  ];
  const associations = buildComponentAssociations(findings);
  assert.equal(associations.schema, COMPONENT_ASSOCIATION_SCHEMA_VERSION);
  assert.deepEqual(Object.keys(associations.byComponentId).sort(), ["cmp-a", "cmp-b"]);
  assert.equal(associations.bySemanticRegion.navigation.length, 2);
  assert.equal(associations.byPage["page-1"].length, 2);
  assert.equal(associations.summary.ownershipEstablished, false);
  assert.equal(associations.byComponentId.Navigation, undefined);
});

test("unassociated findings are counted, not dropped", () => {
  const associations = buildComponentAssociations([
    { comparisonId: "a", locator: "(page-level)", page: { logicalPageId: "page-1" } }
  ]);
  assert.equal(associations.summary.findings, 1);
  assert.equal(associations.summary.withSemanticRegion, 0);
  assert.equal(associations.summary.unassociated, 1);
  assert.deepEqual(associations.bySemanticRegion, {});
});
