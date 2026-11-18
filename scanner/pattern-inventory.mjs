/**
 * Accessibility pattern/container inventory.
 *
 * Groups existing accessibility findings by their stable pattern identity and
 * a conservative semantic-container candidate derived from the selector.
 * It does not build a component graph or claim component ownership.
 */

import { createHash } from "node:crypto";
import { associateFinding } from "./component-association.mjs";
import { getActRuleIds } from "./act-mapping.mjs";

export const PATTERN_INVENTORY_SCHEMA_VERSION = "a11y-pattern-inventory/1";

const ENGINES = ["axe", "alfa", "equalAccess", "accesslint", "qualweb"];

export const CATEGORY_LABELS = Object.freeze({
  navigation: "Navigation",
  banner: "Header/banner",
  contentinfo: "Footer",
  main: "Main content",
  complementary: "Complementary content",
  search: "Search",
  form: "Forms",
  "form-control": "Form controls",
  table: "Tables",
  list: "Lists",
  heading: "Headings",
  link: "Links",
  button: "Buttons",
  image: "Images",
  frame: "Frames and embeds",
  dialog: "Dialogs",
  "live-region": "Live regions",
  document: "Document/page-level",
  unknown: "Unassigned"
});

function text(value) {
  return String(value ?? "").trim();
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function hash(value, length = 12) {
  return createHash("sha256").update(String(value)).digest("hex").slice(0, length);
}

function normalizeWcag(failure) {
  const tags = Array.isArray(failure?.wcagSc) ? failure.wcagSc : [];
  return unique(tags
    .map((tag) => String(tag).toLowerCase())
    .filter((tag) => /^wcag\d+$/.test(tag))
    .map((tag) => tag.replace(/^wcag/, "")));
}

function engineLabel(engine) {
  return {
    axe: "axe-core",
    alfa: "Siteimprove ALFA",
    equalAccess: "IBM Equal Access",
    accesslint: "AccessLint",
    qualweb: "QualWeb (historical)",
    reflowRisk: "Reflow risk indicator",
    semantica11y: "Semantica11y"
  }[engine] ?? engine;
}

function pageUrlFor(result) {
  return result.finalUrl || result.submittedUrl || null;
}

function extractFindings(results) {
  const findings = [];
  for (const [resultIndex, result] of (results ?? []).entries()) {
    const pageUrl = pageUrlFor(result);
    if (!pageUrl) continue;
    for (const engine of ENGINES) {
      const engineResult = result[engine];
      if (!engineResult || !Array.isArray(engineResult.failures)) continue;
      for (const [failureIndex, failure] of engineResult.failures.entries()) {
        if (!failure || failure.isDuplicate) continue;
        findings.push({
          result,
          pageUrl,
          engine,
          failure,
          sourceRef: `results[${resultIndex}].${engine}.failures[${failureIndex}]`
        });
      }
    }
    if (result.reflowRisk?.executed && result.reflowRisk.result === "failed") {
      findings.push({
        result,
        pageUrl,
        engine: "reflowRisk",
        sourceRef: `results[${resultIndex}].reflowRisk`,
        failure: {
          ...result.reflowRisk,
          rule: "reflow-risk",
          description: result.reflowRisk.description,
          message: result.reflowRisk.description,
          impact: "serious",
          wcagSc: ["wcag1410"],
          selector: "(page-level)"
        }
      });
    }
    if (result.semantica11y?.executed && Array.isArray(result.semantica11y.issues)) {
      for (const issue of result.semantica11y.issues) {
        findings.push({
          result,
          pageUrl,
          engine: "semantica11y",
          sourceRef: `results[${resultIndex}].semantica11y.issues[${result.semantica11y.issues.indexOf(issue)}]`,
          failure: {
            ...issue,
            rule: issue.rule ?? "semantica11y",
            description: issue.message,
            impact: issue.severity,
            html: issue.element ?? null,
            selector: issue.element ? null : "(page-level)"
          }
        });
      }
    }
  }
  return findings;
}

function selectorFromHtml(html) {
  const match = String(html ?? "").match(/\bid\s*=\s*["']([^"']+)["']/i);
  if (!match) return null;
  const id = match[1].trim();
  if (!id || /[\s"'<>]/.test(id)) return null;
  return `#${id}`;
}


const XPATH_ENGINES = new Set(["equalaccess", "alfa"]);
const CSS_ENGINES = new Set(["axe", "accesslint"]);

/**
 * Classify the locator language instead of leaving consumers to infer it from
 * the engine. A CSS selector and an XPath expression must never be compared
 * as text. `failure.selector` is the explicit CSS field; `failure.xpath` is
 * engine-dependent.
 *
 * @param {string} engine
 * @param {object} failure
 * @param {string} selector
 * @returns {"css"|"xpath"|"html"|"none"|"unknown"}
 */
function selectorTypeFor(engine, failure, selector) {
  if (!selector) return failure.html ? "html" : "none";
  if (failure.selector) return "css";
  const normalizedEngine = String(engine).toLowerCase();
  if (failure.xpath) {
    if (XPATH_ENGINES.has(normalizedEngine)) return "xpath";
    if (CSS_ENGINES.has(normalizedEngine)) return "css";
    return "unknown";
  }
  // The only remaining selector source is a recovered HTML id, which is CSS.
  return "css";
}

function makePatternFinding({ result, pageUrl, engine, failure, sourceRef }) {
  const explicitSelector = text(failure.selector || failure.xpath || "");
  const selector = explicitSelector && explicitSelector !== "(page-level)"
    ? explicitSelector
    : selectorFromHtml(failure.html) ?? "";
  const locator = selector || text(failure.html || failure.message || "(page-level)");
  const locatorSource = selector ? "selector" : failure.html ? "html" : "none";
  const selectorType = selectorTypeFor(engine, failure, selector);
  const rule = text(failure.rule ?? failure.ruleId ?? "unknown-rule");
  const canonicalPattern = failure.a11yPatternFingerprint ?? null;
  const legacyPattern = failure.patternId ?? null;
  const patternKey = canonicalPattern ?? legacyPattern ?? `derived-${hash(`${engine}\u0000${rule}\u0000${locator}`)}`;
  const identitySource = canonicalPattern ? "canonical" : legacyPattern ? "legacy" : "derived";
  const displayId = failure.a11yPatternDisplayId
    ?? legacyPattern
    ?? `A11Y-${hash(`${engine}\u0000${rule}\u0000${locator}`, 8).toUpperCase()}`;
  const container = associateFinding({
    locator,
    html: failure.html ?? null,
    componentId: failure.componentId ?? null,
    componentTypeId: failure.componentTypeId ?? null,
    componentLabel: failure.componentLabel ?? null
  });
  const category = container.semanticRegion ?? "unknown";
  return {
    patternKey,
    identitySource,
    displayId,
    legacyPattern,
    canonicalPattern,
    engine,
    rule,
    wcagSc: normalizeWcag(failure),
    actRuleIds: getActRuleIds(engine, rule),
    impact: failure.impact ?? failure.severity ?? null,
    pageUrl,
    selector: selector || null,
    selectorType,
    locator,
    locatorSource,
    sourceRef: sourceRef ?? null,
    html: failure.html ?? failure.element ?? null,
    firstSeenAt: failure.firstSeenAt ?? null,
    container: {
      category,
      label: CATEGORY_LABELS[category] ?? CATEGORY_LABELS.unknown,
      element: container.semanticRegion,
      componentId: container.componentId,
      componentTypeId: container.componentTypeId,
      componentLabel: container.componentLabel,
      basis: container.basis,
      confidence: container.confidence,
      ownershipEstablished: false,
      uncertainty: container.uncertainty
    }
  };
}

/**
 * Return one normalized record per non-duplicate finding occurrence.
 * @param {object[]} results
 * @returns {object[]}
 */
export function collectPatternOccurrences(results) {
  return extractFindings(results).map(makePatternFinding);
}

/**
 * Build a pattern/container inventory for a scan report.
 *
 * @param {object[]} results - scan result objects
 * @param {{generatedAt?: string}} [options]
 * @returns {object} a11y-pattern-inventory/1
 */
export function buildPatternInventory(results, { generatedAt = new Date().toISOString() } = {}) {
  const findings = collectPatternOccurrences(results);
  const patterns = new Map();
  for (const finding of findings) {
    const existing = patterns.get(finding.patternKey) ?? {
      patternKey: finding.patternKey,
      displayId: finding.displayId,
      identitySource: finding.identitySource,
      legacyPattern: finding.legacyPattern,
      canonicalPattern: finding.canonicalPattern,
      engine: finding.engine,
      engineLabel: engineLabel(finding.engine),
      rule: finding.rule,
      wcagSc: [],
      actRuleIds: [],
      impact: finding.impact,
      occurrenceCount: 0,
      selectorOccurrences: 0,
      htmlOccurrences: 0,
      selectorTypes: new Set(),
      pages: new Set(),
      firstSeenAt: null,
      lastSeenAt: null,
      examples: [],
      container: finding.container
    };
    existing.occurrenceCount += 1;
    if (finding.selectorType && finding.selectorType !== "none") existing.selectorTypes.add(finding.selectorType);
    if (finding.locatorSource === "selector") existing.selectorOccurrences += 1;
    else if (finding.locatorSource === "html") existing.htmlOccurrences += 1;
    existing.pages.add(finding.pageUrl);
    existing.wcagSc = unique([...existing.wcagSc, ...finding.wcagSc]);
    existing.actRuleIds = unique([...existing.actRuleIds, ...finding.actRuleIds]);
    if (finding.firstSeenAt) {
      if (!existing.firstSeenAt || finding.firstSeenAt < existing.firstSeenAt) existing.firstSeenAt = finding.firstSeenAt;
      if (!existing.lastSeenAt || finding.firstSeenAt > existing.lastSeenAt) existing.lastSeenAt = finding.firstSeenAt;
    }
    if (existing.container.category !== finding.container.category) {
      existing.container.uncertainty = unique([
        ...existing.container.uncertainty,
        "Different occurrences of this pattern map to different semantic regions; review the examples before acting."
      ]);
    }
    if (existing.examples.length < 3) {
      existing.examples.push({
        pageUrl: finding.pageUrl,
        locator: finding.locator,
        html: finding.html
      });
    }
    patterns.set(finding.patternKey, existing);
  }

  const serialized = [...patterns.values()].map((pattern) => ({
    patternId: pattern.patternKey,
    displayId: pattern.displayId,
    identitySource: pattern.identitySource,
    legacyPatternId: pattern.legacyPattern,
    canonicalPatternFingerprint: pattern.canonicalPattern,
    engine: pattern.engine,
    engineLabel: pattern.engineLabel,
    rule: pattern.rule,
    wcagSc: pattern.wcagSc,
    actRuleIds: pattern.actRuleIds,
    impact: pattern.impact,
    category: pattern.container.category,
    selectorType: pattern.selectorTypes.size === 0
      ? "none"
      : pattern.selectorTypes.size === 1 ? [...pattern.selectorTypes][0] : "mixed",
    locatorCoverage: pattern.selectorOccurrences === pattern.occurrenceCount
      ? "selector"
      : pattern.selectorOccurrences > 0
        ? "mixed"
        : pattern.htmlOccurrences > 0 ? "html-only" : "none",
    hasSelector: pattern.selectorOccurrences > 0,
    container: pattern.container,
    occurrenceCount: pattern.occurrenceCount,
    pageCount: pattern.pages.size,
    pages: [...pattern.pages].sort(),
    firstSeenAt: pattern.firstSeenAt,
    lastSeenAt: pattern.lastSeenAt,
    examples: pattern.examples
  })).sort((a, b) => (
    b.occurrenceCount - a.occurrenceCount
    || b.pageCount - a.pageCount
    || a.displayId.localeCompare(b.displayId)
  ));

  const byCategory = {};
  const byContainerElement = {};
  const byComponentId = {};
  const add = (index, key, pattern) => {
    if (!key) return;
    const entry = index[key] ?? { patterns: 0, occurrences: 0, pages: 0, patternIds: [], pageSet: new Set() };
    entry.patterns += 1;
    entry.occurrences += pattern.occurrenceCount;
    for (const page of pattern.pages) entry.pageSet.add(page);
    entry.pages = entry.pageSet.size;
    entry.patternIds.push(pattern.patternId);
    index[key] = entry;
  };
  for (const pattern of serialized) {
    add(byCategory, pattern.category, pattern);
    add(byContainerElement, pattern.container.element ?? "unknown", pattern);
    if (pattern.container.componentId) add(byComponentId, pattern.container.componentId, pattern);
  }

  for (const index of [byCategory, byContainerElement, byComponentId]) {
    for (const entry of Object.values(index)) delete entry.pageSet;
  }

  return {
    schema: PATTERN_INVENTORY_SCHEMA_VERSION,
    generatedAt,
    summary: {
      uniquePatterns: serialized.length,
      occurrences: serialized.reduce((total, pattern) => total + pattern.occurrenceCount, 0),
      pages: new Set(serialized.flatMap((pattern) => pattern.pages)).size,
      categories: Object.keys(byCategory).length,
      patternsWithSelector: serialized.filter((pattern) => pattern.locatorCoverage === "selector").length,
      patternsWithMixedLocators: serialized.filter((pattern) => pattern.locatorCoverage === "mixed").length,
      htmlOnlyPatterns: serialized.filter((pattern) => pattern.locatorCoverage === "html-only").length,
      patternsWithoutLocator: serialized.filter((pattern) => pattern.locatorCoverage === "none").length,
      byCategory,
      byContainerElement,
      byComponentId,
      unassignedPatterns: serialized.filter((pattern) => pattern.category === "unknown").length,
      ownershipEstablished: false,
      note: "Container categories are selector-derived candidates, not component ownership. Labels are not used as identity."
    },
    categoryLabels: { ...CATEGORY_LABELS },
    patterns: serialized
  };
}

/**
 * CSV export for the pattern inventory.
 * @param {object} inventory
 * @returns {string}
 */
export function patternInventoryToCsv(inventory) {
  if (!inventory || inventory.schema !== PATTERN_INVENTORY_SCHEMA_VERSION) return "";
  const header = [
    "category", "category_label", "container_element", "container_basis", "container_confidence",
    "component_id", "component_label", "pattern_id", "display_id", "identity_source",
    "rule", "engine", "wcag_sc", "act_rule_ids", "occurrences", "page_count",
    "locator_coverage", "selector_type", "has_selector", "first_seen_at", "last_seen_at", "example_page", "example_locator"
  ];
  const cell = (value) => {
    let out = String(value ?? "");
    if (/^[\s]*[=+\-@]/.test(out)) out = `'${out}`;
    return `"${out.replace(/"/g, '""')}"`;
  };
  const rows = [header];
  for (const pattern of inventory.patterns ?? []) {
    rows.push([
      pattern.category,
      pattern.container?.label ?? "",
      pattern.container?.element ?? "",
      pattern.container?.basis ?? "",
      pattern.container?.confidence ?? "",
      pattern.container?.componentId ?? "",
      pattern.container?.componentLabel ?? "",
      pattern.patternId,
      pattern.displayId,
      pattern.identitySource,
      pattern.rule,
      pattern.engine,
      (pattern.wcagSc ?? []).join(";"),
      (pattern.actRuleIds ?? []).join(";"),
      pattern.occurrenceCount,
      pattern.pageCount,
      pattern.locatorCoverage,
      pattern.selectorType ?? "none",
      String(pattern.hasSelector),
      pattern.firstSeenAt ?? "",
      pattern.lastSeenAt ?? "",
      pattern.examples?.[0]?.pageUrl ?? "",
      pattern.examples?.[0]?.locator ?? ""
    ]);
  }
  return rows.map((row) => row.map(cell).join(",")).join("\n") + "\n";
}
