/**
 * Target resolution: decide whether a native locator identifies exactly one
 * element in a given document snapshot.
 *
 * Resolution is evidence quality, not a claim about the page. The caller gets
 * back how many elements matched, which method was used and — only when a
 * single element matched — a canonical target id that ties the locator to a
 * document hash. Two different locators that resolve to the same id really do
 * identify the same node in that snapshot; a locator matching several nodes
 * never produces a target id.
 *
 * @module target-resolution
 */
import { queryCss, queryHtmlSnippet, queryXPath } from "./dom-index.mjs";

export const TARGET_RESOLUTION_SCHEMA_VERSION = "target-resolution/1";

const MAX_CANDIDATES = 5;

function targetIdFor(index, node) {
  return `dom:v1:${index.documentHash}:${node.path}`;
}

function looksLikeShadowPath(locator) {
  return /(>>>|\/shadow-root\/|::shadow)/.test(String(locator ?? ""));
}

/**
 * Resolve one locator against one document index.
 *
 * @param {object|null} index - result of buildDomIndex
 * @param {{locator?: string|null, locatorType?: "css"|"xpath"|"html"|"none"}} locator
 * @returns {object} resolution
 */
export function resolveTarget(index, { locator = null, locatorType = "none" } = {}) {
  const base = {
    schemaVersion: TARGET_RESOLUTION_SCHEMA_VERSION,
    resolution: "unresolved",
    method: "none",
    matchedElements: 0,
    resolvedTargetId: null,
    candidates: [],
    confidence: "none",
    note: null
  };

  if (!index || !index.available) {
    return {
      ...base,
      note: "no document snapshot available for this scan",
      documentHash: null
    };
  }

  if (!locator || locatorType === "none") {
    return {
      ...base,
      note: "the engine supplied no locator; a missing locator identifies nothing",
      documentHash: index.documentHash
    };
  }

  if (looksLikeShadowPath(locator)) {
    return {
      ...base,
      resolution: "unsupported",
      method: "shadow-root",
      note: "shadow-root paths cannot be resolved from a static HTML snapshot",
      documentHash: index.documentHash
    };
  }

  let matches = [];
  let method = "none";

  if (locatorType === "css") {
    matches = queryCss(index, locator);
    method = "css";
  } else if (locatorType === "xpath") {
    const result = queryXPath(index, locator);
    matches = result.nodes;
    method = result.method;
  } else if (locatorType === "html") {
    matches = queryHtmlSnippet(index, locator);
    method = "html-snippet";
  }

  if (matches.length === 0) {
    return {
      ...base,
      method,
      note: "the locator matched no element in this snapshot",
      documentHash: index.documentHash
    };
  }

  if (matches.length > 1) {
    return {
      ...base,
      resolution: "ambiguous",
      method,
      matchedElements: matches.length,
      candidates: matches.slice(0, MAX_CANDIDATES).map((node) => targetIdFor(index, node)),
      confidence: "low",
      note: `the locator matched ${matches.length} elements; it does not identify one target`,
      documentHash: index.documentHash
    };
  }

  return {
    ...base,
    resolution: "resolved",
    method,
    matchedElements: 1,
    resolvedTargetId: targetIdFor(index, matches[0]),
    candidates: [targetIdFor(index, matches[0])],
    confidence: method === "html-snippet" ? "low" : method === "xpath-descendant-search" ? "medium" : "high",
    note: null,
    documentHash: index.documentHash
  };
}
