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

  assert.equal(rules.length, 53);
  assert.equal(registry.coverage.withTitle, 9, "metadata is curated, not invented");
  assert.equal(registry.coverage.withTitle < rules.length, true);
  assert.deepEqual(registry.coverage.enginesWithMappings, ["accesslint", "alfa", "axe", "equalAccess"]);
  assert.equal(registry.coverage.candidateMappings, 7);
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

test("candidate mappings are comparable but never verified ACT support", () => {
  const equalAccess = getMappingEvidence("equalAccess", "img_alt_valid");
  assert.equal(equalAccess.status, "candidate");
  assert.deepEqual(equalAccess.candidateActRuleIds, ["23a2a8"]);
  assert.deepEqual(equalAccess.verifiedActRuleIds, []);
  assert.equal(equalAccess.versionAligned, null);

  const accesslint = getMappingEvidence("accesslint", "text-alternatives/img-alt");
  assert.equal(accesslint.status, "candidate");
  assert.equal(getMappingStatus("accesslint", "text-alternatives/img-alt"), "candidate");
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
  assert.equal(byEngine.equalAccess.mapping.verified, false);
  assert.equal(byEngine.equalAccess.mapping.evidence, "candidate");
});

test("correlation never claims ACT verification across a version mismatch", () => {
  const correlation = correlateObservations(imageArtifact());
  const [issue] = correlation.issues;

  assert.equal(issue.engines.length, 4);
  assert.equal(issue.actVerified, false);
  assert.equal(issue.mappingStatus, "inferred-semantics", "two candidate mappings take part");
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

test("candidate mappings extend comparison without claiming ACT support", () => {
  const alfaContrast = getMappingEvidence("alfa", "sia-r66");
  assert.equal(alfaContrast.status, "candidate");
  assert.deepEqual(alfaContrast.verifiedActRuleIds, []);
  assert.deepEqual(alfaContrast.candidateActRuleIds, ["09o5cg"]);

  assert.deepEqual(getMappingEvidence("alfa", "sia-r69").candidateActRuleIds, ["afw4f7"]);
  assert.deepEqual(getMappingEvidence("equalAccess", "text_contrast_sufficient").candidateActRuleIds, ["afw4f7"]);
  assert.deepEqual(getMappingEvidence("equalAccess", "page_title_exists").candidateActRuleIds, ["2779a5"]);
  assert.deepEqual(getMappingEvidence("accesslint", "distinguishable/color-contrast").candidateActRuleIds, ["afw4f7"]);
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

test("observations carry candidate ACT ids so coverage can compare engines", () => {
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
  assert.ok(observation.actRuleIds.includes("09o5cg"));
  assert.equal(artifact.observations.some((entry) => entry.actRuleIds.includes("23a2a8")), true);
});
