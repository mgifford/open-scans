/**
 * Compact occurrence-level accessibility handoff for external consumers.
 *
 * This is intentionally smaller than report.json: one record per finding
 * occurrence with page URL, selector, pattern identity and container candidate.
 * It is evidence for a join, not a component graph or an ownership claim.
 */

import { createHash } from "node:crypto";
import { collectPatternOccurrences, CATEGORY_LABELS } from "./pattern-inventory.mjs";

export const ACCESSIBILITY_CONTEXT_SCHEMA_VERSION = "a11y-accessibility-context/1";

function hash(value, length = 12) {
  return createHash("sha256").update(String(value)).digest("hex").slice(0, length);
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function originOf(pageUrl) {
  try {
    const url = new URL(pageUrl);
    return { origin: url.origin, host: url.hostname };
  } catch {
    return { origin: null, host: null };
  }
}

/**
 * Build an occurrence-level accessibility context.
 *
 * @param {object[]} results - scan results
 * @param {{generatedAt?: string, scan?: object}} [options]
 * @returns {object} a11y-accessibility-context/1
 */
export function buildAccessibilityContext(results, { generatedAt = new Date().toISOString(), scan = {} } = {}) {
  const occurrences = collectPatternOccurrences(results);
  const observations = occurrences.map((occurrence, index) => ({
    observationId: `a11y-obs-${hash(`${occurrence.engine}\u0000${occurrence.rule}\u0000${occurrence.pageUrl}\u0000${occurrence.selector ?? occurrence.locator}\u0000${index}`)}`,
    patternId: occurrence.patternKey,
    patternDisplayId: occurrence.displayId,
    identitySource: occurrence.identitySource,
    rule: occurrence.rule,
    engine: occurrence.engine,
    wcagSc: occurrence.wcagSc,
    actRuleIds: occurrence.actRuleIds,
    impact: occurrence.impact,
    pageUrl: occurrence.pageUrl,
    selector: occurrence.selector,
    locator: occurrence.locator,
    locatorSource: occurrence.locatorSource,
    container: occurrence.container,
    sourceRef: occurrence.sourceRef
  }));
  const site = observations.length ? originOf(observations[0].pageUrl) : { origin: null, host: null };
  return {
    schema: ACCESSIBILITY_CONTEXT_SCHEMA_VERSION,
    generatedAt,
    site,
    scan: {
      issueNumber: scan.issueNumber ?? null,
      issueUrl: scan.issueUrl ?? null,
      scanTitle: scan.scanTitle ?? null,
      scannedAt: scan.scannedAt ?? null,
      engines: Array.isArray(scan.engines) ? scan.engines : [],
      scanContext: scan.scanContext ?? null
    },
    summary: {
      observations: observations.length,
      pages: unique(observations.map((observation) => observation.pageUrl)).length,
      patterns: unique(observations.map((observation) => observation.patternId)).length,
      withSelector: observations.filter((observation) => observation.locatorSource === "selector").length,
      htmlOnly: observations.filter((observation) => observation.locatorSource === "html").length,
      withoutLocator: observations.filter((observation) => observation.locatorSource === "none").length,
      byCategory: observations.reduce((counts, observation) => {
        const category = observation.container?.category ?? "unknown";
        counts[category] = (counts[category] ?? 0) + 1;
        return counts;
      }, {}),
      ownershipEstablished: false,
      note: "Container categories are selector/HTML-derived candidates, not component ownership. This handoff is accessibility evidence only."
    },
    categoryLabels: { ...CATEGORY_LABELS },
    observations,
    limitations: [
      "This artifact is accessibility evidence, not a performance or energy measurement.",
      "Container categories are candidates, not component ownership.",
      "A selector match does not prove that a component caused the finding.",
      "Unmatched or HTML-only observations must remain visible when joined to another graph.",
      "No component graph is recreated here."
    ]
  };
}

/**
 * CSV export for the occurrence-level context.
 * @param {object} context
 * @returns {string}
 */
export function accessibilityContextToCsv(context) {
  if (!context || context.schema !== ACCESSIBILITY_CONTEXT_SCHEMA_VERSION) return "";
  const header = [
    "page_url", "selector", "locator", "locator_source", "category", "container_element",
    "container_basis", "container_confidence", "component_id", "pattern_id", "pattern_display_id",
    "identity_source", "rule", "engine", "wcag_sc", "act_rule_ids", "impact", "source_ref"
  ];
  const cell = (value) => {
    let out = String(value ?? "");
    if (/^[\s]*[=+\-@]/.test(out)) out = `'${out}`;
    return `"${out.replace(/"/g, '""')}"`;
  };
  const rows = [header];
  for (const observation of context.observations ?? []) {
    rows.push([
      observation.pageUrl,
      observation.selector ?? "",
      observation.locator,
      observation.locatorSource,
      observation.container?.category ?? "unknown",
      observation.container?.element ?? "",
      observation.container?.basis ?? "none",
      observation.container?.confidence ?? "unknown",
      observation.container?.componentId ?? "",
      observation.patternId,
      observation.patternDisplayId,
      observation.identitySource,
      observation.rule,
      observation.engine,
      (observation.wcagSc ?? []).join(";"),
      (observation.actRuleIds ?? []).join(";"),
      observation.impact ?? "",
      observation.sourceRef ?? ""
    ]);
  }
  return rows.map((row) => row.map(cell).join(",")).join("\n") + "\n";
}
