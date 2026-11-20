import test from "node:test";
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";

import {
  getActRule,
  getMappingEvidence,
  getMappingsFor,
  loadActRegistry,
  normalizeEngineRuleId,
  validateRegistry
} from "../../scanner/act-registry.mjs";
import { collectActConsensusOverlaps, getMappingStatus } from "../../scanner/act-mapping.mjs";
import { buildObservationArtifact } from "../../scanner/observations.mjs";
import { correlateObservations } from "../../scanner/correlation.mjs";

const IMAGE_ALT_PAGE = `<html><body><main><img id="goose-photo" src="goose.jpg"></main></body></html>`;

function imageArtifact() {
  return buildObservationArtifact({
    results: [
      {
        finalUrl: "https://example.org/",
        scanContext: { browser: "chromium", viewport: { width: 1280, height: 800 }, colorScheme: "light" },
        axe: {
          failures: [{ rule: "image-alt", selector: "#goose-photo", html: "<img id=\"goose-photo\">", message: "alt" }],
          renderedHtml: IMAGE_ALT_PAGE
        },
        alfa: {
          failures: [
            {
              rule: "https://alfa.siteimprove.com/rules/sia-r2",
              selector: "#goose-photo",
              html: "<img id=\"goose-photo\">",
              message: "alt"
            }
          ]
        },
        equalAccess: {
          failures: [{ rule: "img_alt_valid", selector: "#goose-photo", html: "<img id=\"goose-photo\">", message: "alt" }]
        },
        accesslint: {
          failures: [
            {
              rule: "text-alternatives/img-alt",
              selector: "#goose-photo",
              html: "<img id=\"goose-photo\">",
              message: "alt"
            }
          ]
        },
        qualweb: { failures: [] }
      }
    ]
  });
}

test("registry covers all mapped ACT rules and records metadata gaps", () => {
  const registry = loadActRegistry();
  const rules = Object.keys(registry.rules);

  assert.equal(rules.length, 58, "includes ACT rules known only from implementation reports");
  assert.equal(registry.coverage.withTitle, 14, "metadata is curated, not invented");
  assert.equal(registry.coverage.withTitle < rules.length, true);
  assert.deepEqual(registry.coverage.enginesWithMappings, ["accesslint", "alfa", "axe", "equalAccess"]);
  assert.equal(registry.coverage.candidateMappings, 0, "every mapping now comes from a published report");
});

test("verified mappings carry source, date and version evidence", () => {
  const evidence = getMappingEvidence("axe", "image-alt");
  assert.equal(evidence.status, "verified");
  assert.deepEqual(evidence.verifiedActRuleIds, ["23a2a8"]);
  assert.equal(evidence.versionAligned, false, "the implementation report covers another axe version");

  const [mapping] = getMappingsFor("axe", "image-alt");
  assert.match(mapping.source, /act-reports-axe/);
  assert.equal(mapping.verifiedAt, "2026-06-01");
  assert.equal(mapping.reportedEngineVersion, "4.10.2");
  assert.match(mapping.notes, /different engine version/);
});

test("ALFA rule ids resolve in both short and URL form", () => {
  assert.equal(normalizeEngineRuleId("alfa", "https://alfa.siteimprove.com/rules/sia-r2"), "sia-r2");
  const fromUrl = getMappingEvidence("alfa", "https://alfa.siteimprove.com/rules/sia-r2");
  const fromShort = getMappingEvidence("alfa", "sia-r2");
  assert.deepEqual(fromUrl, fromShort);
  assert.deepEqual(fromUrl.verifiedActRuleIds, ["23a2a8"]);
});

test("Equal Access and AccessLint mappings are verified from W3C reports", () => {
  const equalAccess = getMappingEvidence("equalAccess", "img_alt_valid");
  assert.equal(equalAccess.status, "verified");
  assert.deepEqual(equalAccess.verifiedActRuleIds, ["23a2a8"]);
  assert.equal(equalAccess.versionAligned, false, "the report covers a different engine version");

  const accesslint = getMappingEvidence("accesslint", "text-alternatives/img-alt");
  assert.equal(accesslint.status, "verified");
  assert.deepEqual(accesslint.verifiedActRuleIds, ["23a2a8"]);

  const rule = getActRule("23a2a8");
  const sources = rule.mappings.map((mapping) => mapping.source);
  assert.ok(sources.some((source) => /implementations\/accesslint-core/.test(source)));
  assert.ok(sources.some((source) => /implementations\/equal-access/.test(source)));
});

test("unmapped rules stay unmapped rather than being assumed unsupported", () => {
  const evidence = getMappingEvidence("axe", "not-a-real-rule");
  assert.equal(evidence.status, "unmapped");
  assert.deepEqual(evidence.actRuleIds, []);
  assert.equal(getMappingStatus("axe", "not-a-real-rule"), "unmapped");
});

test("many-to-many mappings are preserved", () => {
  const buttonName = getMappingEvidence("axe", "button-name");
  assert.deepEqual(buttonName.verifiedActRuleIds, ["97a4e1", "m6b1q3"]);

  const rule = getActRule("23a2a8");
  const axeRules = rule.mappings.filter((mapping) => mapping.engine === "axe").map((mapping) => mapping.ruleId).sort();
  assert.deepEqual(axeRules, ["image-alt", "role-img-alt"]);
  assert.equal(rule.ruleType, "atomic");
});

test("registry validation reports no structural problems", () => {
  const result = validateRegistry();
  assert.equal(result.ok, true);
  assert.deepEqual(result.issues, []);
});

test("observations record mapping evidence per rule", () => {
  const artifact = imageArtifact();
  const byEngine = Object.fromEntries(artifact.observations.map((entry) => [entry.engine.name, entry]));

  assert.equal(byEngine.axe.mapping.verified, true);
  assert.equal(byEngine.axe.mapping.evidence, "verified");
  assert.equal(byEngine.equalAccess.mapping.verified, true);
  assert.equal(byEngine.equalAccess.mapping.evidence, "verified");
});

test("correlation never claims ACT verification across a version mismatch", () => {
  const correlation = correlateObservations(imageArtifact());
  const [issue] = correlation.issues;

  assert.equal(issue.engines.length, 4);
  assert.equal(issue.actVerified, false);
  assert.equal(issue.mappingStatus, "act-verified-different-version", "all four mappings are verified but not version-aligned");
  assert.equal(correlation.counts.verifiedEquivalentFindings, 0);
});

test("ACT consensus comes from correlation and excludes candidates", () => {
  const correlation = correlateObservations(imageArtifact());

  const fromCorrelation = collectActConsensusOverlaps([], { correlation });
  assert.equal(fromCorrelation.overlapEntryCount, 0, "candidate mappings cannot create ACT consensus");

  const synthetic = {
    issues: [
      {
        correlatedIssueId: "a".repeat(64),
        url: "https://example.org/",
        targetId: "dom:v1:hash:/img[1]",
        actRuleIds: ["23a2a8"],
        actVerified: true,
        engines: ["axe", "alfa"],
        observationIds: ["o1", "o2"],
        observations: [
          { engine: "axe", ruleId: "image-alt", nativeLocator: "img" },
          { engine: "alfa", ruleId: "sia-r2", nativeLocator: "/img" }
        ]
      }
    ]
  };

  const consensus = collectActConsensusOverlaps([], { correlation: synthetic });
  assert.equal(consensus.overlapEntryCount, 1);
  assert.equal(consensus.overlapEntries[0].actRuleId, "23a2a8");
  assert.deepEqual(consensus.overlapEntries[0].scanners, ["axe", "alfa"]);
});

test("implementation reports cover contrast and title rules, Alfa contrast stays unmapped", () => {
  assert.deepEqual(getMappingEvidence("equalAccess", "text_contrast_sufficient").verifiedActRuleIds, ["afw4f7"]);
  assert.deepEqual(getMappingEvidence("equalAccess", "page_title_exists").verifiedActRuleIds, ["2779a5"]);
  assert.deepEqual(getMappingEvidence("accesslint", "distinguishable/color-contrast").verifiedActRuleIds, ["afw4f7"]);

  // Alfa's contrast procedures are not listed in its W3C report.
  assert.equal(getMappingEvidence("alfa", "sia-r66").status, "unmapped");
  assert.equal(getMappingEvidence("alfa", "sia-r69").status, "unmapped");
});

test("rules with no ACT counterpart are recorded with reasons, not mapped", () => {
  const overlays = JSON.parse(
    readFileSync(new URL("../../scanner/data/act-registry-overlays.json", import.meta.url), "utf8")
  );
  const keys = overlays.noActCounterpart.map((entry) => `${entry.engine}:${entry.ruleId}`);

  assert.ok(keys.includes("alfa:sia-r73"));
  assert.ok(keys.includes("alfa:sia-r111"));
  for (const entry of overlays.noActCounterpart) {
    assert.ok(entry.reason.length > 20, `${entry.ruleId} needs a reason`);
  }

  // The unmapped rules must not have acquired a mapping.
  assert.deepEqual(getMappingsFor("alfa", "sia-r73"), []);
  assert.deepEqual(getMappingsFor("alfa", "sia-r111"), []);
});

test("observations carry report-derived ACT ids so coverage can compare engines", () => {
  const artifact = imageArtifact();
  const alfaContrast = {
    engine: "alfa",
    rule: "https://alfa.siteimprove.com/rules/sia-r66",
    selector: "#missing-alt-a",
    html: "<img id=\"missing-alt-a\">",
    message: "contrast"
  };
  const withContrast = buildObservationArtifact({
    results: [
      {
        finalUrl: "https://example.org/",
        scanContext: {},
        axe: { failures: [], renderedHtml: IMAGE_ALT_PAGE },
        alfa: { failures: [alfaContrast] },
        equalAccess: { failures: [] },
        accesslint: { failures: [] }
      }
    ]
  });
  const observation = withContrast.observations.find((entry) => entry.engine.name === "alfa");
  assert.deepEqual(observation.actRuleIds, [], "Alfa contrast has no ACT mapping");
  assert.equal(artifact.observations.some((entry) => entry.actRuleIds.includes("23a2a8")), true);
});

test("rule titles and WCAG mappings come from the W3C rule pages", () => {
  assert.equal(getActRule("97a4e1").title, "Button has non-empty accessible name");
  assert.deepEqual(getActRule("97a4e1").wcag, ["4.1.2"]);
  assert.equal(getActRule("2779a5").title, "HTML page has non-empty title");
  assert.deepEqual(getActRule("2779a5").wcag, ["2.4.2"]);
  assert.equal(getActRule("m6b1q3").title, "Menuitem has non-empty accessible name");
  assert.equal(getActRule("e086e5").title, "Form field has non-empty accessible name");
  assert.equal(getActRule("674b10").title, "Role attribute has valid value");
  assert.deepEqual(getActRule("674b10").wcag, [], "674b10 is an ARIA rule with no WCAG criterion");
});

test("verified mappings come from the W3C Alfa implementation report", () => {
  const m6b1q3 = getMappingEvidence("alfa", "sia-r94");
  assert.equal(m6b1q3.status, "verified");
  assert.deepEqual(m6b1q3.verifiedActRuleIds, ["m6b1q3"]);

  const rule = getActRule("m6b1q3");
  assert.equal(rule.mappings.some((mapping) => mapping.engine === "alfa" && mapping.ruleId === "sia-r94" && mapping.status === "verified"), true);
  assert.match(
    rule.mappings.find((mapping) => mapping.engine === "alfa").source,
    /implementations\/alfa/
  );

  // The Alfa report does not list the contrast rules, so they stay unmapped.
  assert.equal(getMappingEvidence("alfa", "sia-r66").status, "unmapped");
  assert.equal(getMappingEvidence("alfa", "sia-r69").status, "unmapped");
});

test("ACT rules known only from a report are registered without invented metadata", () => {
  const rule = getActRule("2t702h");
  assert.ok(rule, "rule from the Alfa report should exist in the registry");
  assert.equal(rule.title, null, "no title is invented");
  assert.equal(rule.mappings.some((mapping) => mapping.engine === "alfa" && mapping.status === "verified"), true);
});
