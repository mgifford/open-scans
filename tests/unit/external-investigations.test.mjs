import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import { compareScanReports, formatComparisonMarkdown, formatComparisonHtml, comparisonToCsv } from "../../scanner/compare-scans.mjs";
import {
  EXTERNAL_INVESTIGATION_BOUNDARY,
  EXTERNAL_REFERENCES_SCHEMA_VERSION,
  attachExternalInvestigations,
  validateExternalReferences
} from "../../scanner/external-investigations.mjs";

const fixture = (name) => JSON.parse(readFileSync(new URL(`../fixtures/comparison/${name}`, import.meta.url), "utf8"));
const references = JSON.parse(readFileSync(new URL("../fixtures/external-investigations/references.json", import.meta.url), "utf8"));
const baseline = fixture("baseline-report.json");
const optimized = fixture("optimized-report.json");

function comparison() {
  const result = compareScanReports(baseline, optimized, { generatedAt: "2026-11-16T12:00:00.000Z" });
  assert.equal(result.ok, true, result.errors.join("\n"));
  return result.value;
}

function attach(input = references, comparisonValue = comparison()) {
  const result = attachExternalInvestigations(comparisonValue, input);
  assert.equal(result.ok, true, result.errors.join("\n"));
  return result.value;
}

test("valid external references attach as metadata-only links without changing finding counts", () => {
  const before = comparison();
  const after = attach(references, before);
  assert.equal(after.externalInvestigations.length, 2);
  assert.equal(after.externalInvestigations[0].metadataOnly, true);
  assert.equal(after.externalInvestigations[0].sourceFetched, false);
  assert.equal(after.externalInvestigations[0].evidenceType, "performance-investigation");
  assert.equal(after.externalInvestigations[1].evidenceType, "sustainability-investigation");
  assert.equal(after.summary.baselineFindings, before.summary.baselineFindings);
  assert.equal(after.summary.comparisonFindings, before.summary.comparisonFindings);
  assert.ok(after.externalInvestigations[0].linkage.pageIds.length > 0);
  assert.ok(after.externalInvestigations[0].linkage.accessibilityFindingIds.length > 0);
  assert.equal(after.externalInvestigations[0].linkage.ownershipEstablished, false);
  assert.match(after.externalInvestigations[0].boundary, /not an accessibility failure/i);
  assert.ok(after.limitations.includes(EXTERNAL_INVESTIGATION_BOUNDARY));
  assert.ok(after.manualVerification.some((task) => task.id === "review-external-investigations"));
  const csv = comparisonToCsv(after);
  assert.match(csv, /"external_investigation_ids"/);
  assert.match(csv, /fes-nav-2026-11-01;vc-example-2026-11/);
});

test("explicit component ids provide component linkage but labels alone do not", () => {
  const withComponentIds = structuredClone(comparison());
  for (const finding of Object.values(withComponentIds.findings).flat()) {
    if (finding.ruleId === "link-name") {
      finding.componentContext.componentId = "cmp-primary-nav";
      finding.componentContext.componentTypeId = "type-primary-nav";
      finding.componentContext.componentLabel = "Primary navigation";
    }
  }
  const input = {
    schema: EXTERNAL_REFERENCES_SCHEMA_VERSION,
    references: [
      {
        sourceProject: "firefox-energy-scanner",
        sourceResultUrl: "https://mgifford.github.io/firefox-energy-scanner/",
        investigationId: "fes-nav-component",
        relatedPageUrl: "https://example.gov/",
        relatedComponent: { componentId: "cmp-primary-nav" },
        description: "Navigation component investigation.",
        referencedAt: "2026-11-17T12:00:00Z"
      }
    ]
  };
  const linked = attach(input, withComponentIds);
  assert.ok(linked.externalInvestigations[0].linkage.componentFindingIds.length >= 1);
  assert.equal(linked.externalInvestigations[0].linkage.confidence, "high");

  const labelOnly = structuredClone(input);
  labelOnly.references[0].relatedComponent = { componentLabel: "Primary navigation" };
  const result = attachExternalInvestigations(withComponentIds, labelOnly);
  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.equal(result.value.externalInvestigations[0].linkage.componentFindingIds.length, 0);
  assert.ok(result.warnings.some((warning) => /labels are not used as identity/i.test(warning)));
});

test("external references reject private URLs, missing identifiers and unknown fields", () => {
  const privateUrl = structuredClone(references);
  privateUrl.references[0].sourceResultUrl = "http://127.0.0.1:3000/result";
  const privateResult = attachExternalInvestigations(comparison(), privateUrl);
  assert.equal(privateResult.ok, false);
  assert.match(privateResult.errors.join(" "), /public URL|private\/internal/i);

  const missingId = structuredClone(references);
  delete missingId.references[0].investigationId;
  assert.equal(validateExternalReferences(missingId).ok, false);

  const unknown = structuredClone(references);
  unknown.references[0].rawFindingIds = ["x"];
  assert.equal(validateExternalReferences(unknown).ok, false);

  const noRelation = structuredClone(references);
  delete noRelation.references[0].relatedPageUrl;
  delete noRelation.references[0].relatedAccessibilityFindingIds;
  assert.equal(validateExternalReferences(noRelation).ok, false);
});

test("a reference with no matching page or finding is kept with low-confidence linkage", () => {
  const input = {
    schema: EXTERNAL_REFERENCES_SCHEMA_VERSION,
    references: [{
      sourceProject: "vital-core",
      sourceResultUrl: "https://mgifford.github.io/vital-core/",
      investigationId: "vc-unmatched",
      relatedPageUrl: "https://not-in-comparison.example/",
      description: "Unmatched investigation.",
      referencedAt: "2026-11-17T12:00:00Z"
    }]
  };
  const value = attach(input);
  assert.equal(value.externalInvestigations[0].linkage.pageIds.length, 0);
  assert.equal(value.externalInvestigations[0].linkage.confidence, "low");
  assert.equal(value.externalInvestigations[0].metadataOnly, true);
});

test("external references are redacted and do not become accessibility findings", () => {
  const secret = "ghp_0123456789abcdefghijklmnopqrstuvwxyz";
  const input = structuredClone(references);
  input.references[0].description = `Investigation token=${secret}`;
  const value = attach(input);
  assert.equal(JSON.stringify(value).includes(secret), false);
  assert.ok(JSON.stringify(value).includes("[REDACTED:"));
  assert.equal(value.findings.new.length, 1);
  assert.equal(value.findings.new.some((finding) => finding.ruleId.includes("fes")), false);
});

test("comparison Markdown and HTML expose linked investigations and their boundary", () => {
  const value = attach();
  const markdown = formatComparisonMarkdown(value);
  assert.match(markdown, /## Related performance and energy investigations/);
  assert.match(markdown, /fes-nav-2026-11-01/);
  assert.match(markdown, /not an accessibility failure/i);
  const html = formatComparisonHtml(value);
  assert.match(html, /id="external-heading"/);
  assert.match(html, /<caption>External investigations linked to this comparison<\/caption>/);
  assert.match(html, /rel="noopener noreferrer"/);
  assert.match(html, /not an accessibility failure/i);
});

test("the comparison CLI attaches a validated external reference file", () => {
  const dir = mkdtempSync(join(tmpdir(), "open-scans-external-"));
  const baselinePath = join(dir, "baseline.json");
  const optimizedPath = join(dir, "optimized.json");
  const refsPath = join(dir, "refs.json");
  const out = join(dir, "comparison.json");
  writeFileSync(baselinePath, JSON.stringify(baseline), "utf8");
  writeFileSync(optimizedPath, JSON.stringify(optimized), "utf8");
  writeFileSync(refsPath, JSON.stringify(references), "utf8");
  const run = spawnSync(process.execPath, [
    "scanner/compare-scans.mjs", baselinePath, optimizedPath,
    "--external-references", refsPath,
    "--out", out,
    "--now", "2026-11-16T12:00:00.000Z"
  ], { cwd: process.cwd(), encoding: "utf8" });
  assert.equal(run.status, 0, run.stderr);
  const value = JSON.parse(readFileSync(out, "utf8"));
  assert.equal(value.externalInvestigations.length, 2);
  assert.equal(value.externalInvestigations[0].sourceFetched, false);
});

test("the external references schema is versioned and metadata-only", () => {
  const schema = JSON.parse(readFileSync(new URL("../../scanner/schemas/external-investigation-references.schema.json", import.meta.url), "utf8"));
  assert.equal(schema.properties.schema.const, EXTERNAL_REFERENCES_SCHEMA_VERSION);
  assert.equal(schema.additionalProperties, false);
  assert.ok(schema.properties.references.items.required.includes("sourceResultUrl"));
  assert.ok(schema.properties.references.items.required.includes("investigationId"));
});
