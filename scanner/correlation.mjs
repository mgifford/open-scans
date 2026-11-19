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

  // Pass 2 — bucket by page, failure mechanism and resolved target.
  const groups = new Map();
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

    if (!semantics.family) {
      setDisposition(observation.observationId, {
        kind: "insufficient-evidence",
        reason: "unmapped-rule-semantics"
      });
      continue;
    }

    const key = [observation.url, semantics.family, observation.target.resolvedTargetId].join("|");
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(entry);
  }

  const issues = [];
  const singles = [];
  const notComparable = [];

  for (const entries of groups.values()) {
    const contexts = new Set(
      entries.map((entry) => entry.observation.testContext?.contextKey ?? "unknown-context")
    );

    if (contexts.size > 1) {
      for (const entry of entries) {
        setDisposition(entry.observation.observationId, {
          kind: "not-comparable",
          reason: "different-test-conditions"
        });
      }
      notComparable.push({
        url: entries[0].observation.url,
        targetId: entries[0].observation.target.resolvedTargetId,
        contexts: [...contexts].sort(),
        observationIds: entries.map((entry) => entry.observation.observationId)
      });
      continue;
    }

    const engines = [...new Set(entries.map((entry) => entry.observation.engine.name))].sort();
    const actMapped = entries.every((entry) => entry.semantics.actMapped);
    const versionAligned = entries.every((entry) => entry.semantics.versionAligned === true);
    const actVerified = actMapped && versionAligned;
    const actRuleIds = [...new Set(entries.flatMap((entry) => entry.semantics.actRuleIds ?? []))].sort();
    const wcagSc = [...new Set(entries.flatMap((entry) => entry.semantics.wcagSc ?? []))].sort();

    const base = {
      url: entries[0].observation.url,
      family: entries[0].semantics.family,
      familyLabel: entries[0].semantics.label,
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

    if (engines.length >= 2) {
      issues.push({
        ...base,
        correlatedIssueId: correlatedIssueId({
          url: base.url,
          family: base.family,
          targetId: base.targetId
        }),
        classification: "agreement-fail",
        confidence: actVerified ? "high" : "medium",
        rationale:
          "Two or more engines reported the same failure mechanism on the same resolved DOM target " +
          "under the same test conditions." +
          (actVerified
            ? " Every participating engine rule has a version-aligned ACT mapping."
            : actMapped
              ? " Every participating engine rule has an ACT mapping, but at least one was published for a different engine version."
              : " At least one engine rule is compared by inferred semantics, not by an ACT mapping."),
        note: "No engine owns the issue; the correlated identity does not depend on scan order."
      });
      for (const entry of entries) {
        setDisposition(entry.observation.observationId, { kind: "correlated", issueId: base.targetId });
      }
      continue;
    }

    const [entry] = entries;
    const otherEnginesRan = Boolean(artifact?.scan?.engineExecution) &&
      Object.entries(artifact.scan.engineExecution)
        .filter(([engine]) => engine !== entry.observation.engine.name)
        .some(([, info]) => info?.status === "executed");

    singles.push({
      ...base,
      classification: otherEnginesRan ? "detection-asymmetry" : "single-engine",
      confidence: entry.semantics.provenance === "act-verified" ? "medium" : "low",
      rationale: otherEnginesRan
        ? "Only one engine reported this failure on this target. Other engines produced no target-level outcome for this rule; silence is not a pass."
        : "Only one engine reported this failure and no other engine executed for comparison."
    });
    setDisposition(entry.observation.observationId, { kind: "single-engine" });
  }

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
    const { observation, semantics } = entry;
    const disposition = dispositions.get(observation.observationId);
    if (!semantics.family) continue;
    if (!disposition || disposition.kind === "not-comparable") continue;
    if (!observation.target?.resolvedTargetId) continue;
    const key = `${observation.url}|${semantics.family}`;
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
      semanticsVersion: RULE_SEMANTICS_VERSION
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
