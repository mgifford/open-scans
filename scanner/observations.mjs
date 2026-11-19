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

export const OBSERVATION_SCHEMA_VERSION = "a11y-observation/1";

/** Engine keys in report order. */
export const OBSERVATION_ENGINES = Object.freeze(["axe", "alfa", "equalAccess", "accesslint", "qualweb"]);

export const ENGINE_LABELS = Object.freeze({
  axe: "axe",
  alfa: "ALFA",
  equalAccess: "Equal Access",
  accesslint: "AccessLint",
  qualweb: "QualWeb"
});

/** Package that supplies each engine, used to record an installed version. */
const ENGINE_PACKAGES = Object.freeze({
  alfa: "@siteimprove/alfa-cli",
  equalAccess: "accessibility-checker",
  accesslint: "@accesslint/core",
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
export function classifyLocator(failure) {
  const xpath = typeof failure?.xpath === "string" ? failure.xpath.trim() : "";
  const selector = typeof failure?.selector === "string" ? failure.selector.trim() : "";
  const html = typeof failure?.html === "string" ? failure.html.trim() : "";

  if (xpath) {
    return { nativeLocator: xpath, locatorType: "xpath", htmlEvidence: html || null };
  }
  if (selector) {
    return { nativeLocator: selector, locatorType: "css", htmlEvidence: html || null };
  }
  if (html) {
    return { nativeLocator: null, locatorType: "html", htmlEvidence: html };
  }
  return { nativeLocator: null, locatorType: "none", htmlEvidence: null };
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

function canonicalObservationKey({ engine, ruleId, url, context, locatorType, locator, html, message }) {
  return JSON.stringify([
    OBSERVATION_SCHEMA_VERSION,
    engine,
    ruleId,
    url,
    context,
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
  occurrence = 0
}) {
  const { nativeLocator, locatorType, htmlEvidence } = classifyLocator(failure);
  const ruleId = typeof failure?.rule === "string" ? failure.rule : "unknown-rule";
  const message = typeof failure?.message === "string" ? failure.message : null;
  const context = contextKey(scanContext);

  const digestInput = canonicalObservationKey({
    engine,
    ruleId,
    url,
    context,
    locatorType,
    locator: nativeLocator,
    html: htmlEvidence,
    message
  });
  const observationId = occurrence === 0 ? stableDigest(digestInput) : stableDigest(`${digestInput}#${occurrence}`);

  const specific = isSpecificLocator(locatorType, nativeLocator);
  const hasLocator = locatorType !== "none" && locatorType !== "html";

  let resolution = "unresolved";
  let ambiguity = "missing-locator";
  if (hasLocator && specific) {
    resolution = "unverified";
    ambiguity = null;
  } else if (hasLocator) {
    resolution = "unverified";
    ambiguity = "ambiguous-or-shared-locator";
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
      locatorType,
      specificLocator: specific,
      resolution,
      resolutionMethod: hasLocator ? "native-locator-only" : "none",
      matchedElements: null,
      resolvedTargetId: null,
      ambiguity
    },
    htmlEvidence,
    message,
    actRuleIds,
    mapping: {
      source: "scanner/data/act-mapping.json",
      status: getMappingStatus(engine, ruleId),
      verified: false
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

  results.forEach((result, resultIndex) => {
    const url = result.finalUrl || result.submittedUrl || "(unknown-url)";
    const scanContext = result.scanContext || summary?.scanContext || {};

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
          engineVersion: engineVersions[engine] || null
        });

        if (observation.target.specificLocator) {
          const repeatKey = observation.observationId;
          if (seen.has(repeatKey)) {
            observation.repeatOf = seen.get(repeatKey);
            observation.relations.push({
              type: "repeated-observation",
              of: seen.get(repeatKey),
              reason: "same engine, same specific locator, same rule, same evidence, same test context"
            });
          } else {
            seen.set(repeatKey, observation.observationId);
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

  for (const observation of observations) {
    byEngine[observation.engine.name] = (byEngine[observation.engine.name] || 0) + 1;
    byLocatorType[observation.target.locatorType] = (byLocatorType[observation.target.locatorType] || 0) + 1;
    if (observation.repeatOf) repeatedWithinEngine += 1;
    if (observation.target.resolution === "unresolved") unresolvedTargets += 1;
    if (observation.target.ambiguity) ambiguousLocators += 1;
  }

  const rawFailures = observations.length;
  const crossEngineEquivalent = 0;
  const relatedFindings = 0;
  const correlatedIssues = rawFailures - repeatedWithinEngine - crossEngineEquivalent;

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
    counts: {
      rawFailures,
      observations: observations.length,
      repeatedWithinEngine,
      crossEngineEquivalent,
      relatedFindings,
      correlatedIssues,
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
