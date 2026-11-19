/**
 * Target-specific ACT laboratory outcomes.
 *
 * A fixture declares one target (selector, targetId, frame or shadow host).
 * Page-level findings must not be attributed to that target: a rule can fail
 * on a different element on the same page, and an engine that reports nothing
 * has not shown that the target passes.
 *
 * This module resolves the declared target against the captured rendered HTML
 * and decides, per observation, whether it is on that target. Browser-context
 * targets (iframes, shadow roots) cannot be resolved from the top-level
 * static snapshot; they are reported as unsupported rather than guessed.
 *
 * @module act-lab/target-outcomes
 */
import { buildDomIndex, queryCss } from "../dom-index.mjs";
import { resolveTarget } from "../target-resolution.mjs";
import { classifyLocator } from "../observations.mjs";

export const TARGET_OUTCOME_VERSION = "act-lab-target-outcome/1";

/**
 * Resolve a fixture's declared target against one scan result.
 *
 * @param {object} caseEntry
 * @param {object|null} result - a run-scan result (contains axe.renderedHtml)
 * @returns {object} resolution
 */
export function resolveCaseTarget(caseEntry, result) {
  const base = {
    version: TARGET_OUTCOME_VERSION,
    status: "unresolved",
    targetId: null,
    method: "none",
    matchedElements: 0,
    documentHash: null,
    reason: null
  };

  const target = caseEntry?.target ?? {};

  if (caseEntry?.execution === "unsupported" || target.scope === "closed-shadow") {
    return {
      ...base,
      status: "unsupported",
      reason: "a closed shadow root is not inspectable through engine public APIs"
    };
  }
  if (target.scope === "open-shadow") {
    return {
      ...base,
      status: "unsupported",
      reason: "shadow-root targets cannot be resolved from the top-level static snapshot"
    };
  }
  if (Array.isArray(target.frame) && target.frame.length > 0) {
    return {
      ...base,
      status: "unsupported",
      reason: "iframe targets cannot be resolved from the top-level static snapshot"
    };
  }
  if (!target.selector) {
    return { ...base, status: "unresolved", reason: "the fixture declares no target selector" };
  }
  if (!result) {
    return { ...base, status: "unresolved", reason: "no scan result for this fixture URL" };
  }

  const index = buildDomIndex(result.axe?.renderedHtml ?? null, { url: result.finalUrl ?? caseEntry.url });
  if (!index.available) {
    return { ...base, status: "unresolved", reason: "the scan captured no rendered HTML for this page" };
  }

  const nodes = queryCss(index, target.selector);
  if (nodes.length === 0) {
    return {
      ...base,
      status: "unresolved",
      method: "css",
      documentHash: index.documentHash,
      reason: "the declared selector matched no element"
    };
  }
  if (nodes.length > 1) {
    return {
      ...base,
      status: "ambiguous",
      method: "css",
      matchedElements: nodes.length,
      documentHash: index.documentHash,
      reason: `the declared selector matched ${nodes.length} elements`
    };
  }

  return {
    ...base,
    status: "resolved",
    targetId: `dom:v1:${index.documentHash}:${nodes[0].path}`,
    method: "css",
    matchedElements: 1,
    documentHash: index.documentHash,
    path: nodes[0].path
  };
}

/**
 * Decide whether one engine failure is on the fixture target.
 *
 * @returns {"on-target"|"off-target"|"unknown-target"}
 */
export function classifyFailureOnTarget(result, failure, caseResolution) {
  if (caseResolution.status !== "resolved") return "unknown-target";

  const index = buildDomIndex(result.axe?.renderedHtml ?? null, { url: result.finalUrl });
  if (!index.available) return "unknown-target";

  const { nativeLocator, locatorType } = classifyLocator(failure);
  const resolution = resolveTarget(index, { locator: nativeLocator, locatorType });

  if (resolution.resolution !== "resolved") return "unknown-target";
  return resolution.resolvedTargetId === caseResolution.targetId ? "on-target" : "off-target";
}

/**
 * Compare the observed target-level failures with the fixture's expectation.
 *
 * A passing expectation can never be confirmed here: none of the engines
 * publishes explicit per-target pass evidence, so silence stays silence.
 *
 * @param {{expected: string|null, review: string, failedEngines: string[], engineCount: number}} input
 * @returns {object}
 */
export function compareExpectation({ expected, review, failedEngines = [], engineCount = 0 }) {
  const authoritative = review === "reviewed";
  const base = {
    version: TARGET_OUTCOME_VERSION,
    expected: expected ?? null,
    review: review ?? "unreviewed",
    authoritative,
    failedEngines: [...failedEngines].sort(),
    engineCount
  };

  if (expected === null || expected === undefined) {
    return {
      ...base,
      status: "no-expectation",
      note: "This fixture declares no expected outcome."
    };
  }

  if (expected === "failed") {
    if (failedEngines.length > 0) {
      return {
        ...base,
        status: authoritative ? "matches-expected" : "provisional-match",
        note: authoritative
          ? "At least one engine reported the failure on the declared target."
          : "At least one engine reported the failure on the declared target, but the expectation is unreviewed and therefore a hypothesis."
      };
    }
    return {
      ...base,
      status: authoritative ? "no-failure-observed" : "provisional-no-failure",
      note: "No engine reported a failure on the declared target. Silence is not a pass, and an unreviewed expectation is not ground truth."
    };
  }

  if (expected === "passed") {
    if (failedEngines.length > 0) {
      return {
        ...base,
        status: authoritative ? "unexpected-failure" : "provisional-unexpected-failure",
        note: "An engine reported a failure on the declared target although the fixture expects a pass."
      };
    }
    return {
      ...base,
      status: "cannot-confirm-pass",
      note: "No engine reported a failure on the target, but no engine supplied explicit target-level pass evidence. This does not confirm the expectation."
    };
  }

  return {
    ...base,
    status: "unsupported-expectation",
    note: `Expected outcome '${expected}' is not compared here.`
  };
}
