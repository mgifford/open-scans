/**
 * Historical comparison of two correlation artifacts.
 *
 * A correlated issue id embeds the document hash, so it is deliberately not
 * stable across page revisions. That is correct: the same finding on a page
 * that changed is not the same evidence. Historical comparison therefore uses
 * two identities:
 *
 * - `correlatedIssueId`: exact evidence identity (document version included).
 * - continuity key `(url, failure family, DOM path)`: the same problem on the
 *   same element, independent of the document version.
 *
 * Changes are attributed to a cause before anything is called new or gone:
 * correlation logic, test conditions, engine versions, mapping data, or the
 * source page itself. A finding that a run no longer reports is `not-observed`,
 * never "fixed" — an engine can stop reporting for reasons that say nothing
 * about the page.
 *
 * @module history-compare
 */
import { createHash } from "node:crypto";

export const HISTORY_COMPARISON_VERSION = "history-comparison/1";

const ATTRIBUTIONS = Object.freeze({
  correlationLogic: "correlation-logic-change",
  executionConditions: "execution-condition-change",
  engineVersion: "engine-version-change",
  mappingData: "mapping-data-change",
  sourcePage: "source-page-change",
  engineReporting: "engine-reporting-change",
  unknown: "unknown"
});

function correlationDigest(value) {
  return createHash("sha256").update(value).digest("hex");
}

function pathOfTargetId(targetId) {
  const parts = String(targetId ?? "").split(":");
  return parts.length >= 4 ? parts.slice(3).join(":") : null;
}

function documentHashOfTargetId(targetId) {
  const parts = String(targetId ?? "").split(":");
  return parts.length >= 3 ? parts[2] : null;
}

export function continuityKey(issue) {
  const path = pathOfTargetId(issue?.targetId);
  if (!path) return null;
  return JSON.stringify([issue.url, issue.family, path]);
}

function compareMetadata(previous, current) {
  const differences = [];
  const previousAlgorithm = previous?.algorithm ?? {};
  const currentAlgorithm = current?.algorithm ?? {};

  if (previousAlgorithm.correlationVersion !== currentAlgorithm.correlationVersion) {
    differences.push({
      kind: ATTRIBUTIONS.correlationLogic,
      detail: `correlation ${previousAlgorithm.correlationVersion} -> ${currentAlgorithm.correlationVersion}`
    });
  }
  if (previousAlgorithm.semanticsVersion !== currentAlgorithm.semanticsVersion) {
    differences.push({
      kind: ATTRIBUTIONS.mappingData,
      detail: `rule semantics ${previousAlgorithm.semanticsVersion} -> ${currentAlgorithm.semanticsVersion}`
    });
  }
  if (
    previousAlgorithm.mappingRegistryVersion &&
    currentAlgorithm.mappingRegistryVersion &&
    previousAlgorithm.mappingRegistryVersion !== currentAlgorithm.mappingRegistryVersion
  ) {
    differences.push({
      kind: ATTRIBUTIONS.mappingData,
      detail: `ACT registry ${previousAlgorithm.mappingRegistryVersion} -> ${currentAlgorithm.mappingRegistryVersion}`
    });
  }

  const previousEngines = previous?.scan?.engineVersions ?? null;
  const currentEngines = current?.scan?.engineVersions ?? null;
  if (previousEngines && currentEngines) {
    for (const engine of new Set([...Object.keys(previousEngines), ...Object.keys(currentEngines)])) {
      if (previousEngines[engine] !== currentEngines[engine]) {
        differences.push({
          kind: ATTRIBUTIONS.engineVersion,
          detail: `${engine} ${previousEngines[engine] ?? "absent"} -> ${currentEngines[engine] ?? "absent"}`
        });
      }
    }
  }

  const previousContext = JSON.stringify(previous?.scan?.scanContext ?? null);
  const currentContext = JSON.stringify(current?.scan?.scanContext ?? null);
  if (previousContext !== currentContext) {
    differences.push({
      kind: ATTRIBUTIONS.executionConditions,
      detail: "scan context differs"
    });
  }

  return differences;
}

function attributionFor(issue, metadataDifferences, previousIssue) {
  const reasons = [];

  const previousDocument = previousIssue ? documentHashOfTargetId(previousIssue.targetId) : null;
  const currentDocument = documentHashOfTargetId(issue.targetId);
  if (previousIssue && previousDocument && currentDocument && previousDocument !== currentDocument) {
    reasons.push({ kind: ATTRIBUTIONS.sourcePage, detail: "document hash changed" });
  }

  for (const difference of metadataDifferences) {
    if (difference.kind === ATTRIBUTIONS.sourcePage) continue;
    reasons.push(difference);
  }

  return reasons.length > 0 ? reasons : [{ kind: ATTRIBUTIONS.unknown, detail: "no cause identified" }];
}

/**
 * Compare two correlation artifacts.
 *
 * @param {{previous: object|null, current: object}} input
 * @returns {object} history-comparison/1 artifact
 */
export function compareRuns({ previous = null, current }) {
  if (!previous) {
    return {
      schemaVersion: HISTORY_COMPARISON_VERSION,
      generatedAt: new Date().toISOString(),
      previous: null,
      current: summarize(current),
      comparable: false,
      reason: "no previous correlation artifact",
      counts: null,
      changes: { persisting: [], changed: [], new: [], notObserved: [] },
      attribution: [],
      reconciliation: null
    };
  }

  const metadataDifferences = compareMetadata(previous, current);
  const previousIssues = previous.issues ?? [];
  const currentIssues = current.issues ?? [];

  const previousById = new Map(previousIssues.map((issue) => [issue.correlatedIssueId, issue]));
  const previousByContinuity = new Map();
  for (const issue of previousIssues) {
    const key = continuityKey(issue);
    if (key) previousByContinuity.set(key, issue);
  }

  const persisting = [];
  const changed = [];
  const considered = [];
  const matchedPreviousIds = new Set();

  for (const issue of currentIssues) {
    const exact = previousById.get(issue.correlatedIssueId);
    if (exact) {
      persisting.push({ issue, previousIssue: exact });
      matchedPreviousIds.add(exact.correlatedIssueId);
      considered.push(issue.correlatedIssueId);
      continue;
    }

    const key = continuityKey(issue);
    const continuityMatch = key ? previousByContinuity.get(key) : null;
    if (continuityMatch) {
      changed.push({
        issue,
        previousIssue: continuityMatch,
        attribution: attributionFor(issue, metadataDifferences, continuityMatch),
        continuityKey: key
      });
      matchedPreviousIds.add(continuityMatch.correlatedIssueId);
      considered.push(issue.correlatedIssueId);
      continue;
    }

    // No exact or continuity match: this finding is new in this run.
  }

  const consideredSet = new Set(considered);
  const newIssues = currentIssues.filter((issue) => !consideredSet.has(issue.correlatedIssueId));
  const notObserved = previousIssues
    .filter((issue) => !matchedPreviousIds.has(issue.correlatedIssueId))
    .map((issue) => ({
      issue,
      attribution: attributionFor(issue, metadataDifferences, issue),
      note: "Not observed in this run. This is not evidence that the problem was fixed."
    }));

  return {
    schemaVersion: HISTORY_COMPARISON_VERSION,
    generatedAt: new Date().toISOString(),
    previous: summarize(previous),
    current: summarize(current),
    comparable: true,
    comparisonId: correlationDigest(
      JSON.stringify([
        HISTORY_COMPARISON_VERSION,
        previous.generatedAt ?? null,
        current.generatedAt ?? null
      ])
    ),
    metadataDifferences,
    counts: {
      previousIssues: previousIssues.length,
      currentIssues: currentIssues.length,
      persisting: persisting.length,
      changed: changed.length,
      new: newIssues.length,
      notObserved: notObserved.length
    },
    reconciliation: {
      currentAccountedFor: persisting.length + changed.length + newIssues.length,
      currentIssues: currentIssues.length,
      previousAccountedFor: persisting.length + changed.length + notObserved.length,
      previousIssues: previousIssues.length,
      complete:
        persisting.length + changed.length + newIssues.length === currentIssues.length &&
        persisting.length + changed.length + notObserved.length === previousIssues.length
    },
    changes: {
      persisting: persisting.map((entry) => ({
        correlatedIssueId: entry.issue.correlatedIssueId,
        url: entry.issue.url,
        family: entry.issue.family,
        targetId: entry.issue.targetId
      })),
      changed: changed.map((entry) => ({
        correlatedIssueId: entry.issue.correlatedIssueId,
        previousIssueId: entry.previousIssue.correlatedIssueId,
        url: entry.issue.url,
        family: entry.issue.family,
        previousTargetId: entry.previousIssue.targetId,
        targetId: entry.issue.targetId,
        attribution: entry.attribution
      })),
      new: newIssues.map((issue) => ({
        correlatedIssueId: issue.correlatedIssueId,
        url: issue.url,
        family: issue.family,
        targetId: issue.targetId
      })),
      notObserved: notObserved.map((entry) => ({
        correlatedIssueId: entry.issue.correlatedIssueId,
        url: entry.issue.url,
        family: entry.issue.family,
        targetId: entry.issue.targetId,
        note: entry.note
      }))
    },
    attribution: metadataDifferences
  };
}

function summarize(artifact) {
  if (!artifact) return null;
  return {
    generatedAt: artifact.generatedAt ?? null,
    issueNumber: artifact.issueNumber ?? null,
    scanTitle: artifact.scanTitle ?? null,
    algorithm: artifact.algorithm ?? null,
    scan: artifact.scan
      ? { engineVersions: artifact.scan.engineVersions ?? null, scanContext: artifact.scan.scanContext ?? null }
      : null,
    counts: artifact.counts ?? null
  };
}

/** Markdown fragment for a history comparison. */
export function renderHistoryMarkdown(comparison) {
  if (!comparison) return "";
  const lines = [];
  lines.push("## 🕓 Changes since the previous comparable run");
  lines.push("");

  if (!comparison.comparable) {
    lines.push(`No comparison was made: ${comparison.reason}.`);
    lines.push("");
    return lines.join("\n");
  }

  const { counts } = comparison;
  lines.push(`- Previous correlated issues: ${counts.previousIssues}`);
  lines.push(`- Current correlated issues: ${counts.currentIssues}`);
  lines.push(`- Persisting: ${counts.persisting}`);
  lines.push(`- Changed evidence (same page element, document changed): ${counts.changed}`);
  lines.push(`- Newly observed: ${counts.new}`);
  lines.push(`- Not observed in this run: ${counts.notObserved} (this is not the same as fixed)`);
  lines.push("");

  if (comparison.metadataDifferences.length > 0) {
    lines.push("### Comparison conditions that changed");
    lines.push("");
    for (const difference of comparison.metadataDifferences) {
      lines.push(`- ${difference.kind}: ${difference.detail}`);
    }
    lines.push("");
  }

  if (comparison.changes.notObserved.length > 0) {
    lines.push("### Not observed in this run");
    lines.push("");
    lines.push("These findings were correlated previously and are absent now. Absence can come from a page change, an engine change, a mapping change or an execution-condition change; it does not by itself mean the problem was fixed.");
    lines.push("");
    for (const entry of comparison.changes.notObserved) {
      lines.push(`- ${entry.family} — ${entry.url} (\`${entry.targetId}\`)`);
    }
    lines.push("");
  }

  if (comparison.changes.changed.length > 0) {
    lines.push("### Same element, changed evidence");
    lines.push("");
    for (const entry of comparison.changes.changed) {
      lines.push(
        `- ${entry.family} — ${entry.url}: ${entry.attribution.map((reason) => reason.kind).join(", ")}`
      );
    }
    lines.push("");
  }

  return lines.join("\n");
}
