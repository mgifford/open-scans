/**
 * Cross-engine correlation.
 *
 * Correlation runs after observations are normalized and targets are resolved,
 * and it never deletes evidence. Each observation ends up in exactly one
 * disposition:
 *
 * - `repeated-observation`: a proven repeat from the same engine.
 * - `correlated`: an equivalent failure reported by two or more engines on the
 *   same resolved target with compatible rule semantics.
 * - `single-engine`: a failure only one engine reported on that target. Other
 *   engines staying silent is recorded as detection asymmetry, never as a pass.
 * - `insufficient-evidence`: unresolved or ambiguous target, or an unmapped
 *   rule whose semantics cannot be compared.
 * - `not-comparable`: engines reported the same target but under different test
 *   conditions (browser, viewport, colour scheme).
 *
 * Two findings are never merged because they share a WCAG criterion, an ACT
 * rule id, a locator string or an engine message. Equivalence needs the same
 * resolved target *and* a compatible failure mechanism.
 *
 * @module correlation
 */
import { createHash } from "node:crypto";

import { getRuleSemantics, RULE_SEMANTICS_VERSION } from "./rule-semantics.mjs";
import { loadActRegistry } from "./act-registry.mjs";

export const CORRELATION_VERSION = "correlation/1";

const ENGINE_LABELS = Object.freeze({
  axe: "axe",
  alfa: "ALFA",
  equalAccess: "Equal Access",
  accesslint: "AccessLint",
  qualweb: "QualWeb"
});

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

function correlatedIssueId({ url, family, targetId }) {
  return digest(JSON.stringify([CORRELATION_VERSION, url, family, targetId]));
}

function dispositionBucket(dispositions, kind) {
  return [...dispositions.values()].filter((entry) => entry.kind === kind).length;
}

/**
 * Enrich an observation with rule semantics (family + provenance).
 *
 * @param {object} observation
 * @returns {object}
 */
function withSemantics(observation) {
  const semantics = getRuleSemantics(observation.engine.name, observation.engine.ruleId);
  return { observation, semantics };
}

/**
 * Correlate normalized observations into issues, related findings and
 * disagreements.
 *
 * @param {object} artifact - a11y-observation/1 artifact
 * @returns {object} a11y-correlation/1 artifact
 */
export function correlateObservations(artifact) {
  const observations = Array.isArray(artifact?.observations) ? artifact.observations : [];
  const dispositions = new Map();

  const setDisposition = (observationId, entry) => {
    if (!dispositions.has(observationId)) dispositions.set(observationId, entry);
  };

  const enriched = observations
    .map((observation) => withSemantics(observation))
    .sort((a, b) => a.observation.observationId.localeCompare(b.observation.observationId));

  // Pass 1 — repeated observations keep their evidence but take no part in
  // cross-engine grouping.
  const candidates = [];
  for (const entry of enriched) {
    const { observation } = entry;
    if (observation.repeatOf) {
      setDisposition(observation.observationId, {
        kind: "repeated-observation",
        of: observation.repeatOf
      });
      continue;
    }
    candidates.push(entry);
  }

  // Pass 2 — every observation can support more than one comparison key:
  // an explicit semantic family (a failure mechanism curated across engines)
  // and one key per verified ACT rule it maps to. Grouping by the union of all
  // ACT ids would create keys no other engine can share, so each ACT rule is
  // its own candidate.
  const groups = new Map();
  const observationGroups = new Map();

  const groupFor = (groupKey, family, kind, actRuleId) => {
    if (!groups.has(groupKey)) {
      groups.set(groupKey, { key: groupKey, family, kind, actRuleId, entries: [], contexts: new Set() });
    }
    return groups.get(groupKey);
  };

  for (const entry of candidates) {
    const { observation, semantics } = entry;

    if (observation.target?.resolution !== "resolved" || !observation.target?.resolvedTargetId) {
      setDisposition(observation.observationId, {
        kind: "insufficient-evidence",
        reason: observation.target?.resolution === "ambiguous"
          ? "ambiguous-target"
          : "unresolved-target"
      });
      continue;
    }

    const verifiedActRuleIds = semantics.mappingEvidence === "verified"
      ? [...new Set(semantics.actRuleIds ?? [])].sort()
      : [];
    const explicitFamily = semantics.family && !semantics.family.startsWith("act:")
      ? semantics.family
      : null;

    const keys = [
      ...verifiedActRuleIds.map((id) => ({ key: `act:${id}`, kind: "act", actRuleId: id })),
      ...(explicitFamily ? [{ key: explicitFamily, kind: "semantic", actRuleId: null }] : [])
    ];

    if (keys.length === 0) {
      setDisposition(observation.observationId, {
        kind: "insufficient-evidence",
        reason: "unmapped-rule-semantics"
      });
      continue;
    }

    const groupKeys = [];
    for (const candidate of keys) {
      const groupKey = [observation.url, candidate.key, observation.target.resolvedTargetId].join("|");
      const group = groupFor(groupKey, candidate.key, candidate.kind, candidate.actRuleId);
      group.entries.push(entry);
      group.contexts.add(observation.testContext?.contextKey ?? "unknown-context");
      groupKeys.push(groupKey);
    }
    observationGroups.set(observation.observationId, groupKeys);
  }

  const enginesOf = (entries) => [...new Set(entries.map((entry) => entry.observation.engine.name))].sort();

  const eligible = [...groups.values()]
    .map((group) => ({ ...group, engines: enginesOf(group.entries) }))
    .filter((group) => group.engines.length >= 2 && group.contexts.size === 1)
    .sort((a, b) => {
      const byEngines = b.engines.length - a.engines.length;
      if (byEngines !== 0) return byEngines;
      // Prefer a curated semantic family over a single ACT rule when both
      // describe the same evidence; it encodes the mechanism across rules.
      const kindRank = (group) => (group.kind === "semantic" ? 0 : 1);
      const byKind = kindRank(a) - kindRank(b);
      if (byKind !== 0) return byKind;
      return a.key.localeCompare(b.key);
    });

  const issues = [];
  const singles = [];
  const notComparableByTarget = new Map();
  const assigned = new Set();
  const chosenFamily = new Map();

  const buildIssue = (entries, group) => {
    const engines = enginesOf(entries);
    const actMapped = entries.every((entry) => entry.semantics.actMapped);
    const versionAligned = entries.every((entry) => entry.semantics.versionAligned === true);
    const actVerified = actMapped && versionAligned;
    const actRuleIds = group.kind === "act"
      ? [group.actRuleId]
      : [...new Set(entries.flatMap((entry) => entry.semantics.actRuleIds ?? []))].sort();
    const wcagSc = [...new Set(entries.flatMap((entry) => entry.semantics.wcagSc ?? []))].sort();

    return {
      url: entries[0].observation.url,
      family: group.family,
      familyLabel: group.kind === "semantic" ? (entries[0].semantics.label ?? null) : `ACT ${group.actRuleId}`,
      targetId: entries[0].observation.target.resolvedTargetId,
      engines,
      actRuleIds,
      wcagSc,
      actVerified,
      versionAligned,
      mappingStatus: actMapped
        ? (versionAligned ? "act-verified" : "act-verified-different-version")
        : "inferred-semantics",
      observationIds: entries.map((entry) => entry.observation.observationId).sort(),
      observations: entries
        .map((entry) => ({
          observationId: entry.observation.observationId,
          engine: entry.observation.engine.name,
          engineLabel: ENGINE_LABELS[entry.observation.engine.name] || entry.observation.engine.name,
          ruleId: entry.observation.engine.ruleId,
          nativeLocator: entry.observation.target?.nativeLocator ?? null,
          locatorType: entry.observation.target?.locatorType ?? "none",
          resolutionMethod: entry.observation.target?.resolutionMethod ?? "none",
          semanticsProvenance: entry.semantics.provenance,
          rawEvidenceRef: entry.observation.rawEvidenceRef
        }))
        .sort((a, b) => a.observationId.localeCompare(b.observationId))
    };
  };

  for (const group of eligible) {
    const entries = group.entries.filter((entry) => !assigned.has(entry.observation.observationId));
    const engines = enginesOf(entries);
    if (engines.length < 2) continue;

    const base = buildIssue(entries, group);
    issues.push({
      ...base,
      correlatedIssueId: correlatedIssueId({
        url: base.url,
        family: base.family,
        targetId: base.targetId
      }),
      classification: "agreement-fail",
      confidence: base.actVerified ? "high" : "medium",
      rationale:
        "Two or more engines reported the same failure mechanism on the same resolved DOM target " +
        "under the same test conditions." +
        (base.actVerified
          ? " Every participating engine rule has a version-aligned ACT mapping."
          : base.mappingStatus === "act-verified-different-version"
            ? " Every participating engine rule has an ACT mapping, but at least one was published for a different engine version."
            : " At least one engine rule is compared by inferred semantics, not by an ACT mapping."),
      note: "No engine owns the issue; the correlated identity does not depend on scan order."
    });

    for (const entry of entries) {
      assigned.add(entry.observation.observationId);
      chosenFamily.set(entry.observation.observationId, group);
      setDisposition(entry.observation.observationId, { kind: "correlated", issueId: base.targetId });
    }
  }

  // Anything left over: a comparison existed but only one engine reported, or
  // all comparable groups disagreed about test conditions.
  for (const entry of candidates) {
    const { observation } = entry;
    if (assigned.has(observation.observationId)) continue;
    if (dispositions.has(observation.observationId)) continue; // already insufficient

    const ownGroupKeys = observationGroups.get(observation.observationId) ?? [];
    const ownGroups = ownGroupKeys
      .map((groupKey) => groups.get(groupKey))
      .filter(Boolean)
      .map((group) => ({ ...group, engines: enginesOf(group.entries) }));

    const conflicting = ownGroups.filter((group) => group.contexts.size > 1 && group.engines.length >= 2);
    if (conflicting.length > 0 && conflicting.length === ownGroups.length) {
      setDisposition(observation.observationId, {
        kind: "not-comparable",
        reason: "different-test-conditions"
      });
      const targetKey = `${observation.url}|${observation.target.resolvedTargetId}`;
      const existing = notComparableByTarget.get(targetKey) ?? {
        url: observation.url,
        targetId: observation.target.resolvedTargetId,
        contexts: new Set(),
        observationIds: new Set()
      };
      for (const context of conflicting.flatMap((group) => [...group.contexts])) existing.contexts.add(context);
      existing.observationIds.add(observation.observationId);
      notComparableByTarget.set(targetKey, existing);
      continue;
    }

    const best = ownGroups
      .filter((group) => group.contexts.size === 1)
      .sort((a, b) => {
        const byEngines = b.engines.length - a.engines.length;
        if (byEngines !== 0) return byEngines;
        const kindRank = (group) => (group.kind === "semantic" ? 0 : 1);
        const byKind = kindRank(a) - kindRank(b);
        if (byKind !== 0) return byKind;
        return a.key.localeCompare(b.key);
      })[0];

    if (!best) {
      setDisposition(observation.observationId, {
        kind: "insufficient-evidence",
        reason: "unmapped-rule-semantics"
      });
      continue;
    }

    const base = buildIssue([entry], best);
    const [single] = [base];
    const otherEnginesRan = Boolean(artifact?.scan?.engineExecution) &&
      Object.entries(artifact.scan.engineExecution)
        .filter(([engine]) => engine !== observation.engine.name)
        .some(([, info]) => info?.status === "executed");

    singles.push({
      ...single,
      classification: otherEnginesRan ? "detection-asymmetry" : "single-engine",
      confidence: entry.semantics.provenance === "act-verified" ? "medium" : "low",
      rationale: otherEnginesRan
        ? "Only one engine reported this failure on this target. Other engines produced no target-level outcome for this rule; silence is not a pass."
        : "Only one engine reported this failure and no other engine executed for comparison."
    });
    chosenFamily.set(observation.observationId, best);
    setDisposition(observation.observationId, { kind: "single-engine" });
  }

  // A group-level context conflict is recorded once, only for groups where the
  // engines genuinely disagree about test conditions.
  for (const group of groups.values()) {
    if (group.contexts.size <= 1) continue;
    if (enginesOf(group.entries).length < 2) continue;
    if (group.entries.some((entry) => assigned.has(entry.observation.observationId))) continue;
    if (group.entries.every((entry) => dispositions.get(entry.observation.observationId)?.kind === "not-comparable")) {
      continue;
    }
    const targetKey = `${group.entries[0].observation.url}|${group.entries[0].observation.target.resolvedTargetId}`;
    if (notComparableByTarget.has(targetKey)) continue;
    notComparableByTarget.set(targetKey, {
      url: group.entries[0].observation.url,
      targetId: group.entries[0].observation.target.resolvedTargetId,
      contexts: new Set(group.contexts),
      observationIds: new Set(group.entries.map((entry) => entry.observation.observationId))
    });
  }

  const notComparable = [...notComparableByTarget.values()]
    .map((entry) => ({
      url: entry.url,
      targetId: entry.targetId,
      contexts: [...entry.contexts].sort(),
      observationIds: [...entry.observationIds].sort()
    }))
    .sort((a, b) => `${a.url}|${a.targetId}`.localeCompare(`${b.url}|${b.targetId}`));

  // Related findings: same target, different failure mechanisms.
  const byTarget = new Map();
  for (const issue of issues) {
    if (!byTarget.has(`${issue.url}|${issue.targetId}`)) byTarget.set(`${issue.url}|${issue.targetId}`, []);
    byTarget.get(`${issue.url}|${issue.targetId}`).push(issue);
  }
  const related = [];
  for (const [key, entries] of byTarget) {
    if (entries.length < 2) continue;
    const [url, targetId] = key.split("|");
    related.push({
      url,
      targetId,
      families: entries.map((entry) => entry.family).sort(),
      correlatedIssueIds: entries.map((entry) => entry.correlatedIssueId).sort(),
      note: "Distinct failure mechanisms on one target. Shown as related, never merged."
    });
  }

  // Target disagreement: several engines tested this failure mechanism on this
  // page but resolved different elements.
  const byFamilyPage = new Map();
  for (const entry of candidates) {
    const { observation } = entry;
    const disposition = dispositions.get(observation.observationId);
    const chosen = chosenFamily.get(observation.observationId);
    if (!chosen) continue;
    if (!disposition || disposition.kind === "not-comparable") continue;
    if (!observation.target?.resolvedTargetId) continue;
    const key = `${observation.url}|${chosen.family}`;
    if (!byFamilyPage.has(key)) byFamilyPage.set(key, new Map());
    byFamilyPage.get(key).set(
      observation.target.resolvedTargetId,
      (byFamilyPage.get(key).get(observation.target.resolvedTargetId) ?? []).concat(observation.observationId)
    );
  }

  const disagreements = [];
  for (const [key, targets] of byFamilyPage) {
    if (targets.size < 2) continue;
    const [url, family] = key.split("|");
    disagreements.push({
      classification: "target-disagreement",
      url,
      family,
      targets: [...targets.entries()]
        .map(([targetId, observationIds]) => ({ targetId, observationIds: observationIds.sort() }))
        .sort((a, b) => a.targetId.localeCompare(b.targetId)),
      note: "Engines reported the same failure mechanism on different elements; equivalence is not claimed."
    });
  }

  const counts = {
    rawObservations: observations.length,
    repeatedObservations: dispositionBucket(dispositions, "repeated-observation"),
    correlatedObservations: dispositionBucket(dispositions, "correlated"),
    singleEngineObservations: dispositionBucket(dispositions, "single-engine"),
    insufficientEvidenceObservations: dispositionBucket(dispositions, "insufficient-evidence"),
    notComparableObservations: dispositionBucket(dispositions, "not-comparable"),
    correlatedIssues: issues.length,
    verifiedEquivalentFindings: issues.filter((issue) => issue.actVerified).length,
    versionMismatchedFindings: issues.filter(
      (issue) => issue.mappingStatus === "act-verified-different-version"
    ).length,
    inferredEquivalentFindings: issues.filter((issue) => issue.mappingStatus === "inferred-semantics").length,
    singleEngineFindings: singles.length,
    relatedFindings: related.length,
    targetDisagreements: disagreements.length
  };

  const accountedFor =
    counts.repeatedObservations +
    counts.correlatedObservations +
    counts.singleEngineObservations +
    counts.insufficientEvidenceObservations +
    counts.notComparableObservations;

  return {
    schemaVersion: "a11y-correlation/1",
    generatedAt: new Date().toISOString(),
    issueNumber: artifact?.issueNumber ?? null,
    scanTitle: artifact?.scanTitle ?? null,
    algorithm: {
      correlationVersion: CORRELATION_VERSION,
      semanticsVersion: RULE_SEMANTICS_VERSION,
      // Registry generation time identifies the mapping data used, so a later
      // comparison can tell a mapping change from a page or engine change.
      mappingRegistryVersion: loadActRegistry().generatedAt ?? null
    },
    counts,
    reconciliation: {
      observationsAccountedFor: accountedFor,
      rawObservations: counts.rawObservations,
      complete: accountedFor === counts.rawObservations,
      note:
        "Each observation has exactly one disposition. Correlation never removes evidence, " +
        "and explicit pass evidence is not inferred from engine silence."
    },
    issues,
    singles,
    related,
    disagreements,
    notComparable
  };
}
