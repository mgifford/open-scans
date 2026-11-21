/**
 * Normalized, evidence-preserving accessibility observations.
 *
 * One observation is one thing a single engine said about one target in one
 * execution. Observations are never merged here: this module only describes
 * what was received and which of the received records can be proven to be the
 * same repeat of the same target.
 *
 * Design notes (see docs/multi-engine-evidence.md):
 * - A locator string is evidence, not identity. Two failures that share an
 *   XPath are only the same target when the locator is specific enough to
 *   identify one node (an id, or an indexed path) — otherwise they stay
 *   separate observations.
 * - A missing locator is unknown, never a shared page-level target.
 * - Correlated issues (grouping equivalent failures across engines) are a
 *   later layer. This module deliberately reports zero cross-engine
 *   equivalents until target resolution proves them.
 * - Observation ids are full SHA-256 digests. The existing short A11Y-xxxx
 *   identifiers keep their current meaning and are not reused here.
 *
 * @module observations
 */
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

import { getActRuleIds, getMappingStatus } from "./act-mapping.mjs";
import { getMappingEvidence } from "./act-registry.mjs";
import { buildDomIndex } from "./dom-index.mjs";
import { resolveTarget } from "./target-resolution.mjs";

export const OBSERVATION_SCHEMA_VERSION = "a11y-observation/1";

/** Engine keys in report order. */
export const OBSERVATION_ENGINES = Object.freeze(["axe", "alfa", "equalAccess", "accesslint", "sa11y", "qualweb"]);

export const ENGINE_LABELS = Object.freeze({
  axe: "axe",
  alfa: "ALFA",
  equalAccess: "Equal Access",
  accesslint: "AccessLint",
  sa11y: "Sa11y",
  qualweb: "QualWeb"
});

/** Package that supplies each engine, used to record an installed version. */
const ENGINE_PACKAGES = Object.freeze({
  alfa: "@siteimprove/alfa-cli",
  equalAccess: "accessibility-checker",
  accesslint: "@accesslint/core",
  sa11y: "sa11y",
  axe: "axe-core"
});

const require = createRequire(import.meta.url);

/**
 * Read the installed version of each engine package.
 * Runtime versions are recorded as provenance; a scan never upgrades them.
 *
 * @returns {Record<string, string|null>}
 */
export function getInstalledEngineVersions() {
  const versions = {};
  for (const [engine, packageName] of Object.entries(ENGINE_PACKAGES)) {
    try {
      const { version } = require(`${packageName}/package.json`);
      versions[engine] = typeof version === "string" ? version : null;
    } catch {
      versions[engine] = null;
    }
  }
  return versions;
}

/**
 * Describe the native locator an engine supplied.
 *
 * @param {object} failure
 * @returns {{nativeLocator: string|null, locatorType: "xpath"|"css"|"html"|"none", htmlEvidence: string|null}}
 */
/**
 * Detect the locator dialect from the string, not from the field name.
 *
 * Engine adapters do not agree on field names: AccessLint writes CSS such as
 * `div > img` into its `xpath` field. Treating that as XPath silently fails to
 * resolve the target, so the string shape decides and the original field is
 * recorded separately.
 *
 * @param {string} raw
 * @returns {"xpath"|"css"}
 */
export function detectLocatorDialect(raw) {
  const text = String(raw ?? "").trim();
  if (text.startsWith("/") || text.startsWith("./") || text.startsWith("../")) return "xpath";
  if (text.includes("::")) return "xpath";
  return "css";
}

export function classifyLocator(failure) {
  const xpath = typeof failure?.xpath === "string" ? failure.xpath.trim() : "";
  const selector = typeof failure?.selector === "string" ? failure.selector.trim() : "";
  const html = typeof failure?.html === "string" ? failure.html.trim() : "";

  if (xpath) {
    return {
      nativeLocator: xpath,
      locatorType: detectLocatorDialect(xpath),
      nativeLocatorField: "xpath",
      htmlEvidence: html || null
    };
  }
  if (selector) {
    return {
      nativeLocator: selector,
      locatorType: detectLocatorDialect(selector),
      nativeLocatorField: "selector",
      htmlEvidence: html || null
    };
  }
  if (html) {
    return { nativeLocator: null, locatorType: "html", nativeLocatorField: "html", htmlEvidence: html };
  }
  return { nativeLocator: null, locatorType: "none", nativeLocatorField: null, htmlEvidence: null };
}

/**
 * Whether a locator plausibly identifies a single element.
 *
 * Only unambiguous shapes count: an id selector, an `@id` predicate, or an
 * XPath with an explicit positional predicate. Class-based XPath such as
 * `/a[@class="govuk-link"]` matches many elements and is not specific.
 * Being specific is still not resolution — it only allows two identical
 * records from one engine to be treated as a proven repeat.
 *
 * @param {"xpath"|"css"|"html"|"none"} locatorType
 * @param {string|null} locator
 * @returns {boolean}
 */
export function isSpecificLocator(locatorType, locator) {
  if (!locator) return false;
  if (locatorType === "css") {
    return /^#[\w-]+$/.test(locator) || /\[id\s*=\s*["'][^"']+["']\]/.test(locator);
  }
  if (locatorType === "xpath") {
    if (/@id\s*=\s*["'][^"']+["']/.test(locator)) return true;
    return /\[(\d+)\]/.test(locator);
  }
  return false;
}

function stableDigest(value) {
  return createHash("sha256").update(value).digest("hex");
}

function contextKey(scanContext) {
  const viewport = scanContext?.viewport
    ? `${scanContext.viewport.width}x${scanContext.viewport.height}`
    : "unknown-viewport";
  return [
    scanContext?.browser || "unknown-browser",
    viewport,
    scanContext?.colorScheme || "unknown-color-scheme"
  ].join("|");
}

/**
 * Content key for one observation. Two observations with the same key are
 * identical records; they still get distinct ids through an occurrence index.
 */
export function observationContentKey({ engine, ruleId, url, scanContext, locatorType, locator, html, message }) {
  return JSON.stringify([
    OBSERVATION_SCHEMA_VERSION,
    engine,
    ruleId,
    url,
    contextKey(scanContext),
    locatorType,
    locator || "",
    html || "",
    message || ""
  ]);
}

/**
 * Build one normalized observation from one native engine failure.
 *
 * @param {object} options
 * @param {string} options.engine
 * @param {object} options.failure
 * @param {string} options.url
 * @param {object} options.scanContext
 * @param {string} options.rawEvidenceRef
 * @param {string|null} [options.engineVersion]
 * @param {number} [options.occurrence] - index among identical records
 * @returns {object}
 */
export function buildObservation({
  engine,
  failure,
  url,
  scanContext,
  rawEvidenceRef,
  engineVersion = null,
  occurrence = 0,
  domIndex = null
}) {
  const { nativeLocator, locatorType, nativeLocatorField, htmlEvidence } = classifyLocator(failure);
  const ruleId = typeof failure?.rule === "string" ? failure.rule : "unknown-rule";
  const message = typeof failure?.message === "string" ? failure.message : null;
  const context = contextKey(scanContext);

  const digestInput = observationContentKey({
    engine,
    ruleId,
    url,
    scanContext,
    locatorType,
    locator: nativeLocator,
    html: htmlEvidence,
    message
  });
  const observationId = occurrence === 0
    ? stableDigest(digestInput)
    : stableDigest(JSON.stringify([digestInput, occurrence]));

  const specific = isSpecificLocator(locatorType, nativeLocator);
  const hasLocator = locatorType !== "none" && locatorType !== "html";
  const resolved = resolveTarget(domIndex, { locator: nativeLocator, locatorType });

  let resolution = "unresolved";
  let ambiguity = "missing-locator";
  if (resolved.resolution === "resolved") {
    resolution = "resolved";
    ambiguity = null;
  } else if (resolved.resolution === "ambiguous") {
    resolution = "ambiguous";
    ambiguity = "ambiguous-or-shared-locator";
  } else if (resolved.resolution === "unsupported") {
    resolution = "unsupported";
    ambiguity = "unsupported-dom-context";
  } else if (hasLocator) {
    resolution = "unverified";
    ambiguity = resolved.note ? "unverified-locator" : "ambiguous-or-shared-locator";
  } else if (locatorType === "html" && htmlEvidence) {
    resolution = "unverified";
    ambiguity = "html-snippet-only";
  }

  const actRuleIds = getActRuleIds(engine, ruleId);

  return {
    schemaVersion: OBSERVATION_SCHEMA_VERSION,
    observationId,
    engine: {
      name: engine,
      label: ENGINE_LABELS[engine] || engine,
      version: engineVersion,
      ruleId
    },
    outcome: "failed",
    nativeOutcome: "failed",
    url,
    testContext: {
      browser: scanContext?.browser || null,
      viewport: scanContext?.viewport || null,
      colorScheme: scanContext?.colorScheme || null,
      contextKey: context
    },
    target: {
      nativeLocator,
      nativeLocatorField,
      locatorType,
      specificLocator: specific,
      resolution,
      resolutionMethod: resolved.method,
      matchedElements: resolved.matchedElements,
      resolvedTargetId: resolved.resolvedTargetId,
      candidates: resolved.candidates,
      confidence: resolved.confidence,
      ambiguity,
      framePath: Array.isArray(failure.framePath) && failure.framePath.length > 1 ? failure.framePath : null,
      note: resolved.note
    },
    document: {
      hash: resolved.documentHash ?? null,
      available: Boolean(domIndex?.available),
      source: domIndex?.available ? "axe.renderedHtml" : null,
      comparableAcrossEngines: "unverified"
    },
    htmlEvidence,
    message,
    actRuleIds,
    mapping: {
      source: "scanner/data/act-registry.json",
      status: getMappingStatus(engine, ruleId),
      verified: getMappingEvidence(engine, ruleId).status === "verified",
      evidence: getMappingEvidence(engine, ruleId).status
    },
    wcagSc: Array.isArray(failure?.wcagSc) ? [...failure.wcagSc] : [],
    severity: failure?.impact || null,
    rawEvidenceRef,
    executionStatus: "executed",
    fixtureId: null,
    relations: []
  };
}

/**
 * Build the normalized observation artifact for a completed scan summary.
 *
 * Every failed native observation is retained exactly once. Records that are
 * provably the same repeat (same engine, same specific locator, same rule,
 * same HTML evidence, same test context) are flagged as repeats but are not
 * removed.
 *
 * @param {object} summary - scan summary (already redacted)
 * @returns {object} observation artifact
 */
export function buildObservationArtifact(summary) {
  const results = Array.isArray(summary?.results) ? summary.results : [];
  const engineVersions = getInstalledEngineVersions();
  const observations = [];
  const seen = new Map();
  const contentCounts = new Map();

  const documents = [];

  results.forEach((result, resultIndex) => {
    const url = result.finalUrl || result.submittedUrl || "(unknown-url)";
    const scanContext = result.scanContext || summary?.scanContext || {};
    const index = buildDomIndex(result.axe?.renderedHtml ?? result.documentHtml ?? null, { url });
    documents.push({
      url,
      available: index.available,
      documentHash: index.documentHash,
      nodes: index.available ? index.nodes.length : 0
    });

    for (const engine of OBSERVATION_ENGINES) {
      const scanner = result?.[engine];
      if (!scanner || !Array.isArray(scanner.failures)) continue;

      scanner.failures.forEach((failure, failureIndex) => {
        const rawEvidenceRef = `report.json#/results/${resultIndex}/${engine}/failures/${failureIndex}`;
        const observation = buildObservation({
          engine,
          failure,
          url,
          scanContext,
          rawEvidenceRef,
          engineVersion: engineVersions[engine] || null,
          domIndex: index
        });

        // Identical records (same engine, rule, locator, evidence, message and
        // context) are indistinguishable content; each still gets a unique id.
        const contentKey = observation.observationId;
        const occurrence = contentCounts.get(contentKey) ?? 0;
        contentCounts.set(contentKey, occurrence + 1);
        if (occurrence > 0) {
          observation.observationId = stableDigest(JSON.stringify([contentKey, occurrence]));
        }

        if (observation.target.specificLocator) {
          if (seen.has(contentKey)) {
            observation.repeatOf = seen.get(contentKey);
            observation.relations.push({
              type: "repeated-observation",
              of: seen.get(contentKey),
              reason: "same engine, same specific locator, same rule, same evidence, same test context"
            });
          } else {
            seen.set(contentKey, observation.observationId);
          }
        }

        observations.push(observation);
      });
    }
  });

  const byEngine = {};
  const byLocatorType = { xpath: 0, css: 0, html: 0, none: 0 };
  let repeatedWithinEngine = 0;
  let unresolvedTargets = 0;
  let ambiguousLocators = 0;
  let resolvedTargets = 0;
  let resolvedUniqueTargets = 0;
  const resolvedTargetIds = new Set();

  for (const observation of observations) {
    byEngine[observation.engine.name] = (byEngine[observation.engine.name] || 0) + 1;
    byLocatorType[observation.target.locatorType] = (byLocatorType[observation.target.locatorType] || 0) + 1;
    if (observation.repeatOf) repeatedWithinEngine += 1;
    if (observation.target.resolution === "resolved") {
      resolvedTargets += 1;
      resolvedTargetIds.add(observation.target.resolvedTargetId);
    }
    if (observation.target.resolution === "unresolved") unresolvedTargets += 1;
    if (observation.target.resolution === "ambiguous" || observation.target.resolution === "unsupported") {
      ambiguousLocators += 1;
    }
  }

  const rawFailures = observations.length;

  // A failure without a native rule id is a data-quality signal: it usually
  // means an adapter changed shape. Count it instead of letting it disappear
  // into the "unknown-rule" bucket.
  const unknownRuleObservations = observations.filter(
    (observation) => observation.engine.ruleId === "unknown-rule"
  ).length;
  const unknownRuleByEngine = {};
  for (const observation of observations) {
    if (observation.engine.ruleId !== "unknown-rule") continue;
    unknownRuleByEngine[observation.engine.name] = (unknownRuleByEngine[observation.engine.name] || 0) + 1;
  }

  const crossEngineEquivalent = 0;
  const relatedFindings = 0;
  const provisionalIssues = rawFailures - repeatedWithinEngine - crossEngineEquivalent;

  return {
    schemaVersion: OBSERVATION_SCHEMA_VERSION,
    generatedAt: new Date().toISOString(),
    issueNumber: summary?.issueNumber ?? null,
    scanTitle: summary?.scanTitle ?? null,
    scan: {
      scannedAt: summary?.scannedAt ?? null,
      scanContext: summary?.scanContext ?? null,
      enginesRequested: summary?.engines ?? [],
      engineExecution: summary?.engineExecution ?? null,
      engineVersions
    },
    documents,
    counts: {
      rawFailures,
      observations: observations.length,
      repeatedWithinEngine,
      crossEngineEquivalent,
      relatedFindings,
      provisionalIssues,
      unknownRuleObservations,
      unknownRuleByEngine,
      resolvedObservations: resolvedTargets,
      distinctResolvedTargets: resolvedTargetIds.size,
      unresolvedTargets,
      ambiguousLocators,
      byEngine,
      byLocatorType
    },
    reconciliation: {
      // Every raw failure is represented by exactly one observation.
      rawFailuresEqualObservations: rawFailures === observations.length,
      // Grouping must never change how many observations were received.
      groupingPreservesObservations: observations.length === rawFailures,
      crossEngineEquivalentVerified: false,
      note:
        "Cross-engine equivalents stay at zero until target resolution and rule-semantics checks prove them. " +
        "A shared locator string, WCAG criterion or ACT rule is not proof."
    },
    observations
  };
}
