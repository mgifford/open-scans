/**
 * Rule semantics for cross-engine comparison.
 *
 * Engines do not share rule identifiers, and most do not publish an ACT
 * mapping for every check. Comparing two observations therefore needs an
 * explicit statement of *what failure mechanism* an engine rule expresses.
 *
 * Two levels of evidence are possible, and they are never conflated:
 *
 * - `act-verified`: the engine rule maps to a W3C ACT rule in
 *   `scanner/data/act-mapping.json`. This is the only evidence that may be
 *   called ACT support.
 * - `inferred-semantics`: the rule is placed in a semantic family by
 *   inspection of the engine's published rule description. It makes the rule
 *   comparable, but it does NOT create an ACT mapping and must be reported as
 *   inferred.
 *
 * Anything not covered here can still be related by resolved target, but two
 * observations are never declared equivalent on WCAG criteria alone.
 *
 * @module rule-semantics
 */
import { getActRuleIds } from "./act-mapping.mjs";
import { getMappingEvidence } from "./act-registry.mjs";

export const RULE_SEMANTICS_VERSION = "rule-semantics/1";

/**
 * Explicit semantic families.
 *
 * Each family names a failure mechanism, not a WCAG criterion: two rules in
 * one family make the same claim about the same target. `provenance` on each
 * engine rule records whether an ACT mapping backs it.
 */
export const SEMANTIC_FAMILIES = Object.freeze({
  "text-alternative": {
    label: "Non-text content lacks a text alternative",
    wcagSc: ["1.1.1"],
    rules: {
      axe: { ruleId: "image-alt", provenance: "act-verified" },
      alfa: {
        ruleId: "https://alfa.siteimprove.com/rules/sia-r2",
        provenance: "act-verified"
      },
      equalAccess: { ruleId: "img_alt_valid", provenance: "inferred-semantics" },
      accesslint: {
        ruleId: "text-alternatives/img-alt",
        provenance: "inferred-semantics"
      }
    }
  }
});

const RULE_INDEX = (() => {
  const index = new Map();
  for (const [family, definition] of Object.entries(SEMANTIC_FAMILIES)) {
    for (const [engine, entry] of Object.entries(definition.rules)) {
      index.set(`${engine}:${entry.ruleId}`, {
        family,
        label: definition.label,
        wcagSc: definition.wcagSc,
        provenance: entry.provenance,
        actMapped: entry.provenance === "act-verified"
      });
    }
  }
  return index;
})();

/**
 * Describe what an engine rule means, and how that was established.
 *
 * @param {string} engine
 * @param {string} ruleId
 * @returns {object} semantics
 */
export function getRuleSemantics(engine, ruleId) {
  const key = `${engine}:${ruleId}`;
  const explicit = RULE_INDEX.get(key);
  const evidence = getMappingEvidence(engine, ruleId);
  const actRuleIds = getActRuleIds(engine, ruleId);
  const actMapped = evidence.status === "verified";

  if (explicit) {
    return {
      family: explicit.family,
      label: explicit.label,
      wcagSc: explicit.wcagSc,
      // Explicit family membership is semantics, not ACT mapping. The
      // provenance records the weaker of the two evidence levels.
      provenance: explicit.provenance === "act-verified" && !actMapped ? "inferred-semantics" : explicit.provenance,
      actMapped,
      actRuleIds,
      mappingEvidence: evidence.status,
      versionAligned: evidence.versionAligned,
      semanticsVersion: RULE_SEMANTICS_VERSION
    };
  }

  if (actMapped) {
    // ACT rules are the comparison unit, but an engine rule may implement
    // several. Correlation therefore builds one candidate per actRuleId
    // instead of using a union family here, which no other engine could share.
    return {
      family: null,
      label: null,
      wcagSc: [],
      provenance: "act-verified",
      actMapped: true,
      actRuleIds,
      mappingEvidence: evidence.status,
      versionAligned: evidence.versionAligned,
      semanticsVersion: RULE_SEMANTICS_VERSION
    };
  }

  return {
    family: null,
    label: null,
    wcagSc: [],
    provenance: "unmapped",
    actMapped: false,
    actRuleIds,
    mappingEvidence: evidence.status,
    versionAligned: evidence.versionAligned,
    semanticsVersion: RULE_SEMANTICS_VERSION
  };
}
