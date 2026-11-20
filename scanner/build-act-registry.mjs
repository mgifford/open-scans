#!/usr/bin/env node
/**
 * Build scanner/data/act-registry.json from the generated ACT mapping plus the
 * curated metadata overlays.
 *
 * The registry keeps every entry honest about how it was established:
 * - `verified`: an engine rule listed against an ACT rule by the engine's own
 *   published implementation report (or an ACT implementation report).
 * - `candidate`: a plausible semantic match with no published implementation
 *   report. It is comparable but never counted as ACT support.
 *
 * Unknown metadata stays `null`. This script never invents titles, rule types
 * or WCAG criteria.
 *
 * Usage: node scanner/build-act-registry.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";

const MAPPING_PATH = new URL("./data/act-mapping.json", import.meta.url);
const OVERLAY_PATH = new URL("./data/act-registry-overlays.json", import.meta.url);
const OUTPUT_PATH = new URL("./data/act-registry.json", import.meta.url);

const mapping = JSON.parse(readFileSync(MAPPING_PATH, "utf8"));
const overlay = JSON.parse(readFileSync(OVERLAY_PATH, "utf8"));

const ENGINES = ["axe", "alfa", "equalAccess", "accesslint", "qualweb"];

function engineMappings(actRuleId, overlayRule) {
  const fromMapping = mapping.byActRuleId?.[actRuleId] ?? {};
  const candidates = overlay?.candidateMappings?.[actRuleId] ?? {};
  const entries = [];

  for (const engine of ENGINES) {
    const versionInfo = mapping.engineVersions?.[engine] ?? null;
    for (const ruleId of fromMapping[engine] ?? []) {
      entries.push({
        engine,
        ruleId,
        status: "verified",
        source: mapping.sourceUrls?.[engine] ?? null,
        verifiedAt: mapping.generatedAt ? mapping.generatedAt.slice(0, 10) : null,
        engineVersion: versionInfo?.scannedVersion ?? null,
        reportedEngineVersion: versionInfo?.publishedW3CVersion ?? null,
        // A published report for a different engine version is still
        // evidence, but it is not a verified match for the version we run.
        versionAligned: versionInfo?.versionMatch ?? null,
        notes: versionInfo && versionInfo.versionMatch === false
          ? "Implementation report covers a different engine version; mapping is not version-verified."
          : null
      });
    }

    for (const verified of (overlay?.verifiedMappings?.[actRuleId]?.[engine] ?? [])) {
      entries.push({
        engine,
        ruleId: verified.ruleId,
        status: "verified",
        source: verified.source ?? null,
        verifiedAt: verified.verifiedAt ?? null,
        engineVersion: verified.engineVersion ?? versionInfo?.scannedVersion ?? null,
        reportedEngineVersion: verified.reportedEngineVersion ?? null,
        versionAligned: verified.versionAligned ?? null,
        notes: verified.notes ?? null
      });
    }

    for (const candidate of candidates[engine] ?? []) {
      entries.push({
        engine,
        ruleId: candidate.ruleId,
        status: "candidate",
        source: candidate.source ?? null,
        verifiedAt: candidate.verifiedAt ?? null,
        engineVersion: candidate.engineVersion ?? null,
        reportedEngineVersion: null,
        versionAligned: null,
        notes: candidate.notes ?? null
      });
    }
  }

  // De-duplicate by engine+rule, preferring a verified entry.
  const byKey = new Map();
  for (const entry of entries) {
    const key = `${entry.engine}:${entry.ruleId}`;
    const existing = byKey.get(key);
    if (!existing || (existing.status === "candidate" && entry.status === "verified")) {
      byKey.set(key, entry);
    }
  }
  return [...byKey.values()].sort((a, b) => `${a.engine}:${a.ruleId}`.localeCompare(`${b.engine}:${b.ruleId}`));
}

// ACT rules can be known from the mapping file, from curated candidate
// mappings, or from a published implementation report (verified mappings).
const actRuleIds = [...new Set([
  ...Object.keys(mapping.byActRuleId ?? {}),
  ...Object.keys(overlay.candidateMappings ?? {}),
  ...Object.keys(overlay.verifiedMappings ?? {}),
  ...Object.keys(overlay.rules ?? {})
])].sort();

const rules = {};
for (const actRuleId of actRuleIds) {
  const meta = overlay.rules?.[actRuleId] ?? {};
  rules[actRuleId] = {
    actRuleId,
    title: meta.title ?? null,
    url: meta.url ?? `https://www.w3.org/WAI/standards-guidelines/act/rules/${actRuleId}/`,
    ruleType: meta.ruleType ?? null,
    wcag: meta.wcag ?? [],
    status: meta.status ?? null,
    revision: meta.revision ?? null,
    metadataSource: meta.source ?? null,
    metadataVerifiedAt: meta.verifiedAt ?? null,
    mappings: engineMappings(actRuleId, overlay)
  };
}

const registry = {
  schemaVersion: "act-registry/1",
  generatedAt: new Date().toISOString(),
  sources: {
    actRulesIndex: "https://www.w3.org/WAI/standards-guidelines/act/rules/",
    engineMapping: mapping.sourceUrls ?? {}
  },
  coverage: {
    actRules: Object.keys(rules).length,
    withTitle: Object.values(rules).filter((rule) => rule.title).length,
    withRuleType: Object.values(rules).filter((rule) => rule.ruleType).length,
    verifiedMappings: Object.values(rules).reduce(
      (count, rule) => count + rule.mappings.filter((entry) => entry.status === "verified").length,
      0
    ),
    candidateMappings: Object.values(rules).reduce(
      (count, rule) => count + rule.mappings.filter((entry) => entry.status === "candidate").length,
      0
    ),
    enginesWithMappings: [...new Set(
      Object.values(rules).flatMap((rule) => rule.mappings.map((entry) => entry.engine))
    )].sort()
  },
  rules
};

writeFileSync(OUTPUT_PATH, JSON.stringify(registry, null, 2) + "\n", "utf8");
console.log(`Wrote ${OUTPUT_PATH.pathname}`);
console.log(JSON.stringify(registry.coverage, null, 1));
