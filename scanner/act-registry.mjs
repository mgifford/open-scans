/**
 * ACT registry access.
 *
 * The registry records, per W3C ACT rule, the rule metadata we have actually
 * verified and every engine rule mapped to it — with the evidence level of
 * each mapping:
 *
 * - `verified`: listed by a published implementation report (axe, ALFA) or an
 *   ACT implementation report.
 * - `candidate`: plausible semantic alignment with no published implementation
 *   report. Comparable, never counted as ACT support.
 *
 * Missing metadata stays null. A missing registry entry never means an engine
 * lacks ACT support; it means the registry has not verified a mapping.
 *
 * @module act-registry
 */
import { readFileSync } from "node:fs";

const REGISTRY_PATH = new URL("./data/act-registry.json", import.meta.url);

let cached = null;
let cachedEngineIndex = null;

export function loadActRegistry() {
  if (!cached) {
    cached = JSON.parse(readFileSync(REGISTRY_PATH, "utf8"));
  }
  return cached;
}

/**
 * Canonical form of an engine rule id.
 *
 * ALFA reports either `sia-r1` or the full rule URL; the registry stores the
 * short form, so both must resolve.
 */
export function normalizeEngineRuleId(engine, ruleId) {
  const raw = String(ruleId ?? "").trim();
  if (engine === "alfa") {
    const match = raw.match(/sia-r\d+/i);
    if (match) return match[0].toLowerCase();
  }
  return raw.toLowerCase();
}

function buildEngineIndex(registry) {
  const index = new Map();
  for (const rule of Object.values(registry.rules ?? {})) {
    for (const mapping of rule.mappings ?? []) {
      const key = `${mapping.engine}:${normalizeEngineRuleId(mapping.engine, mapping.ruleId)}`;
      if (!index.has(key)) index.set(key, []);
      index.get(key).push({ ...mapping, actRuleId: rule.actRuleId, actRuleTitle: rule.title });
    }
  }
  return index;
}

/** All mappings for one engine rule, in any evidence state. */
export function getMappingsFor(engine, ruleId) {
  const registry = loadActRegistry();
  cachedEngineIndex = cachedEngineIndex ?? buildEngineIndex(registry);
  return cachedEngineIndex.get(`${engine}:${normalizeEngineRuleId(engine, ruleId)}`) ?? [];
}

/** ACT rule metadata, or null when the rule is not in the registry. */
export function getActRule(actRuleId) {
  return loadActRegistry().rules?.[actRuleId] ?? null;
}

/**
 * Engine rules mapped to one ACT rule, optionally filtered by engine.
 * Includes candidate mappings, because "is this rule mapped at all?" differs
 * from "is the mapping verified?".
 */
export function getMappingsForActRule(actRuleId, engine = null) {
  const rule = loadActRegistry().rules?.[actRuleId];
  if (!rule) return [];
  return (rule.mappings ?? []).filter((mapping) => !engine || mapping.engine === engine);
}

/** Only mappings backed by a published implementation report. */
export function getVerifiedActRuleIds(engine, ruleId) {
  return getMappingsFor(engine, ruleId)
    .filter((mapping) => mapping.status === "verified")
    .map((mapping) => mapping.actRuleId)
    .sort();
}

/**
 * Evidence level for one engine rule.
 *
 * @returns {{status: "verified"|"candidate"|"unmapped", actRuleIds: string[], verifiedActRuleIds: string[], candidateActRuleIds: string[]}}
 */
export function getMappingEvidence(engine, ruleId) {
  const mappings = getMappingsFor(engine, ruleId);
  const verifiedActRuleIds = [...new Set(mappings.filter((m) => m.status === "verified").map((m) => m.actRuleId))].sort();
  const candidateActRuleIds = [...new Set(mappings.filter((m) => m.status === "candidate").map((m) => m.actRuleId))].sort();

  const verifiedEntries = mappings.filter((m) => m.status === "verified");
  const versionAligned = verifiedEntries.length === 0
    ? null
    : verifiedEntries.every((m) => m.versionAligned === true);

  return {
    status: verifiedActRuleIds.length > 0 ? "verified" : candidateActRuleIds.length > 0 ? "candidate" : "unmapped",
    actRuleIds: [...new Set([...verifiedActRuleIds, ...candidateActRuleIds])].sort(),
    verifiedActRuleIds,
    candidateActRuleIds,
    versionAligned
  };
}

/**
 * Structural checks on the registry itself.
 *
 * @returns {{ok: boolean, issues: string[], coverage: object}}
 */
export function validateRegistry() {
  const registry = loadActRegistry();
  const issues = [];

  for (const [actRuleId, rule] of Object.entries(registry.rules ?? {})) {
    if (rule.actRuleId !== actRuleId) {
      issues.push(`${actRuleId}: actRuleId mismatch (${rule.actRuleId})`);
    }
    if (!/^[a-z0-9]{6,8}$/.test(actRuleId)) {
      issues.push(`${actRuleId}: unexpected ACT rule id shape`);
    }
    for (const mapping of rule.mappings ?? []) {
      if (!["verified", "candidate"].includes(mapping.status)) {
        issues.push(`${actRuleId}/${mapping.engine}:${mapping.ruleId}: unknown status ${mapping.status}`);
      }
      if (mapping.status === "verified" && !mapping.source) {
        issues.push(`${actRuleId}/${mapping.engine}:${mapping.ruleId}: verified mapping without a source`);
      }
      if (rule.ruleType && !["atomic", "composite"].includes(rule.ruleType)) {
        issues.push(`${actRuleId}: unknown ruleType ${rule.ruleType}`);
      }
    }
  }

  return {
    ok: issues.length === 0,
    issues,
    coverage: registry.coverage ?? null
  };
}
