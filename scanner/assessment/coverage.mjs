/**
 * Assessment coverage and rule execution manifest.
 *
 * This module answers a narrow question with the evidence a scan already has:
 * for each WCAG success criterion, which automated rules were mapped, which were
 * observed to run, which reported a violation, and what remains unevaluated.
 *
 * It deliberately does not turn rule mappings into conclusions. A rule that is
 * mapped to a criterion has not evaluated the criterion; a rule that ran and
 * reported nothing has not established conformance; a rule that never appeared
 * may have been inapplicable, unimplemented or missed.
 *
 * Everything here is derived from artifacts that already exist in the report, so
 * automated-only scans pay no additional browser or network cost.
 *
 * @module assessment/coverage
 */
import { compareCriterionIds } from "./catalogue.mjs";
import { listProcedures, listRoles } from "./procedures.mjs";

export const COVERAGE_SCHEMA = "a11y-assessment-coverage/1";
export const MANIFEST_SCHEMA = "rule-execution-manifest/1";

const ENGINE_ORDER = ["axe", "alfa", "equalAccess", "accesslint", "sa11y"];
const ENGINE_LABELS = Object.freeze({
  axe: "axe",
  alfa: "ALFA",
  equalAccess: "Equal Access",
  accesslint: "AccessLint",
  sa11y: "Sa11y"
});

/**
 * Engine-level detail that the report must state rather than smooth over.
 * `ruleGranularity` records whether a rule can be shown to have run.
 */
const ENGINE_RULE_GRANULARITY = Object.freeze({
  axe: "rule-outcomes",
  alfa: "rule-outcomes",
  equalAccess: "failure-only",
  accesslint: "failure-only",
  sa11y: "failure-only"
});

const ENGINE_LIMITATIONS = Object.freeze({
  axe: [],
  alfa: [],
  equalAccess: [
    "Equal Access records rule identifiers for failures; the rules that passed are only available as a count, so a rule's execution is unknown unless it failed."
  ],
  accesslint: [
    "AccessLint records rule identifiers for failures; the rules that passed are only available as a count, so a rule's execution is unknown unless it failed."
  ],
  sa11y: [
    "Sa11y records rule identifiers for failures; its warnings are counted but not normalised into rule outcomes."
  ]
});

/**
 * Normalise an engine rule identifier so catalogue rules and observed rules can
 * be compared without guessing. Engine namespaces are preserved.
 *
 * @param {string} engine
 * @param {string} ruleId
 * @returns {string}
 */
export function normalizeRuleId(engine, ruleId) {
  const raw = String(ruleId ?? "").trim();
  if (!raw) return "";
  if (engine === "alfa") {
    const match = raw.match(/\/rules\/([^/?#]+)\/?$/i);
    return (match ? match[1] : raw).toLowerCase();
  }
  return raw.toLowerCase();
}

function engineLabel(engine) {
  return ENGINE_LABELS[engine] ?? engine;
}

function asNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

/**
 * Build a compact manifest of what each engine actually did.
 *
 * Only aggregates and rule identifiers are kept: no raw result objects, no
 * per-node HTML. A report that runs this function grows by a few kilobytes.
 *
 * @param {object} summary a scan summary (report.json shape)
 * @returns {object} rule-execution-manifest/1
 */
export function buildRuleExecutionManifest(summary) {
  const results = Array.isArray(summary?.results) ? summary.results : [];
  const requested = Array.isArray(summary?.engines) && summary.engines.includes("all")
    ? ENGINE_ORDER
    : (summary?.engines ?? []).map((engine) => String(engine)).filter((engine) => ENGINE_ORDER.includes(engine));

  const engines = {};
  const observedRuleIds = { axe: new Set(), alfa: new Set(), equalAccess: new Set(), accesslint: new Set(), sa11y: new Set() };
  const failedRuleIds = { axe: new Set(), alfa: new Set(), equalAccess: new Set(), accesslint: new Set(), sa11y: new Set() };

  for (const engine of requested) {
    const runs = results.map((result) => result?.[engine]).filter((run) => run && typeof run === "object");
    const executedRuns = runs.filter((run) => run.executed !== false && !run.error);
    const failedRuns = runs.filter((run) => run.executed === false || run.error);

    const counts = { passed: 0, failed: 0, cantTell: 0, inapplicable: 0 };
    for (const run of executedRuns) {
      counts.passed += asNumber(run.counts?.passed);
      counts.failed += asNumber(run.counts?.failed);
      counts.cantTell += asNumber(run.counts?.cantTell);
      counts.inapplicable += asNumber(run.counts?.inapplicable);
      for (const rule of run.passedRules ?? []) observedRuleIds[engine].add(normalizeRuleId(engine, rule));
      for (const rule of run.failedRules ?? []) {
        observedRuleIds[engine].add(normalizeRuleId(engine, rule));
        failedRuleIds[engine].add(normalizeRuleId(engine, rule));
      }
    }

    engines[engine] = {
      engine,
      label: engineLabel(engine),
      status: runs.length === 0
        ? "not-run"
        : executedRuns.length === 0
          ? "failed"
          : failedRuns.length > 0 ? "partial" : "executed",
      pagesExecuted: executedRuns.length,
      pagesFailed: failedRuns.length,
      firstError: failedRuns.find((run) => run.error)?.error
        ? String(failedRuns.find((run) => run.error).error).split("\n")[0].slice(0, 300)
        : null,
      ruleGranularity: ENGINE_RULE_GRANULARITY[engine] ?? "failure-only",
      observedRules: [...observedRuleIds[engine]].sort(),
      rulesWithFailures: [...failedRuleIds[engine]].sort(),
      outcomeCounts: counts,
      limitations: [...(ENGINE_LIMITATIONS[engine] ?? [])]
    };
  }

  return {
    schema: MANIFEST_SCHEMA,
    engines,
    requestedEngines: requested,
    // Anything not in `observedRules` has unknown execution. It is not evidence
    // that a rule was inapplicable.
    executionUnknownNote:
      "Rules that do not appear in an engine's observed rules were not shown to have produced a result. That is not evidence that they were inapplicable.",
    frames: {
      note:
        "Frame and shadow-root coverage is bounded by each engine's own traversal. Findings inside frames may be attributed to the frame element in the top document.",
      limitation: results.some((result) => (result?.axe?.failures ?? []).some((failure) => failure?.framePath))
        ? "At least one axe finding carries a frame path."
        : "No frame-scoped finding was recorded in this scan. Absence of frame findings is not evidence of accessible frames."
    },
    resources: {
      skippedDueToTimeout: asNumber(summary?.skippedDueToTimeout),
      skippedDueToErrAborted: asNumber(summary?.skippedDueToErrAborted),
      note:
        asNumber(summary?.skippedDueToTimeout) + asNumber(summary?.skippedDueToErrAborted) > 0
          ? "Some requested pages were not scanned. Their criteria have no evidence in this report."
          : "Every accepted page was scanned."
    }
  };
}

/**
 * Build reverse maps from engine rule ids to ACT rule ids, using the catalogue's
 * own implementation metadata. When the catalogue has no mapping, no mapping is
 * invented.
 */
function buildActReverseMaps(catalogue) {
  const axe = new Map();
  const alfa = new Map();
  const implementations = catalogue?.implementationIndex ?? {};
  for (const [actRuleId, impl] of Object.entries(implementations)) {
    for (const rule of impl?.axe ?? []) addTo(axe, normalizeRuleId("axe", rule), actRuleId);
    for (const rule of impl?.alfa ?? []) addTo(alfa, normalizeRuleId("alfa", rule), actRuleId);
  }
  return { axe, alfa };
}

function addTo(map, key, value) {
  if (!map.has(key)) map.set(key, new Set());
  map.get(key).add(value);
}

function intersectObserved(mappedRules, observedSet) {
  const observed = [];
  for (const candidate of mappedRules) {
    if (observedSet.has(normalizeRuleId(candidate.engine, candidate.ruleId))) observed.push(candidate);
  }
  return observed;
}

/**
 * Build the per-criterion coverage model.
 *
 * @param {object} options
 * @param {object} options.summary scan summary
 * @param {object} options.catalogue loaded catalogue (`loadCatalogue()`)
 * @param {object|null} [options.actCoverage] `act-coverage/1` artifact
 * @param {string} [options.generatedAt] ISO timestamp
 * @returns {object} a11y-assessment-coverage/1
 */
export function buildAssessmentCoverage({ summary, catalogue, actCoverage = null, generatedAt = null }) {
  if (!catalogue?.criteria) throw new Error("buildAssessmentCoverage requires a loaded catalogue");

  const manifest = buildRuleExecutionManifest(summary);
  const actReverse = buildActReverseMaps(catalogue);
  const actReportingByRule = new Map();
  for (const rule of actCoverage?.rules ?? []) {
    actReportingByRule.set(rule.actRuleId, {
      enginesReporting: [...(rule.enginesReporting ?? [])],
      enginesMapped: [...(rule.enginesMapped ?? [])],
      coverage: rule.coverage ?? null,
      findings: asNumber(rule.findings)
    });
  }

  const engineObserved = new Map(
    Object.entries(manifest.engines).map(([engine, info]) => [engine, new Set(info.observedRules)])
  );

  const criteria = [];
  for (const criterion of catalogue.criteria.values()) {
    const potential = {
      act: [...criterion.automation.act],
      axe: [...criterion.automation.axe],
      alfa: [...criterion.automation.alfa]
    };
    const observed = { axe: [], alfa: [], act: [...new Set((criterion.automation.act ?? []).filter((id) => {
      const reporting = actReportingByRule.get(id);
      return reporting ? reporting.enginesReporting.length > 0 : false;
    }))] };

    const mappedAxe = potential.axe.map((ruleId) => ({ engine: "axe", ruleId }));
    const mappedAlfa = potential.alfa.map((ruleId) => ({ engine: "alfa", ruleId }));
    for (const entry of intersectObserved(mappedAxe, engineObserved.get("axe") ?? new Set())) {
      observed.axe.push(normalizeRuleId("axe", entry.ruleId));
    }
    for (const entry of intersectObserved(mappedAlfa, engineObserved.get("alfa") ?? new Set())) {
      observed.alfa.push(normalizeRuleId("alfa", entry.ruleId));
    }

    // ACT rules can also be observed through an engine rule the catalogue maps
    // to them, even when the criterion's own act list is incomplete. "Observed"
    // means the mapped implementation produced a result; it does not mean the
    // ACT rule was applied as an ACT rule or that it passed.
    for (const engine of ["axe", "alfa"]) {
      for (const ruleId of observed[engine]) {
        for (const actRuleId of actReverse[engine].get(normalizeRuleId(engine, ruleId)) ?? []) {
          observed.act.push(actRuleId);
        }
      }
    }
    observed.act = [...new Set(observed.act)].sort();

    const failedRules = [];
    for (const engine of ["axe", "alfa"]) {
      const failures = new Set(manifest.engines[engine]?.rulesWithFailures ?? []);
      for (const ruleId of observed[engine]) if (failures.has(normalizeRuleId(engine, ruleId))) failedRules.push({ engine, ruleId });
    }
    for (const actRuleId of observed.act) {
      if ((actReportingByRule.get(actRuleId)?.findings ?? 0) > 0) failedRules.push({ engine: "act", ruleId: actRuleId });
    }

    const enginesObserved = [...new Set([
      ...observed.axe.map(() => "axe"),
      ...observed.alfa.map(() => "alfa")
    ])];

    const potentialCount = potential.act.length + potential.axe.length + potential.alfa.length;
    const observedCount = observed.axe.length + observed.alfa.length + observed.act.length;
    const state = potentialCount === 0
      ? "no-automated-rules"
      : observedCount === 0 ? "not-observed" : "observed";

    const procedures = listProcedures({ criterion: criterion.id });
    const gaps = describeGaps({ criterion, state, potential, observed, failedRules, manifest });

    criteria.push({
      id: criterion.id,
      title: criterion.title,
      level: criterion.level,
      principle: criterion.principle,
      url: criterion.url,
      automated: {
        potential,
        observed,
        failed: failedRules,
        engines: enginesObserved,
        state
      },
      manual: {
        procedures: procedures.map((procedure) => procedure.id),
        roles: [...new Set(procedures.flatMap((procedure) => procedure.roles))],
        catalogueRoles: [...criterion.manual.roles],
        arrmTaskIds: criterion.manual.arrmTasks.map((task) => task.id).filter(Boolean),
        ttSteps: [...criterion.manual.ttSteps]
      },
      functionalPerformance: [...criterion.functionalPerformance],
      gaps
    });
  }

  criteria.sort((a, b) => compareCriterionIds(a.id, b.id));

  const counts = summariseCoverage(criteria);

  return {
    schema: COVERAGE_SCHEMA,
    generatedAt: generatedAt ?? summary?.scannedAt ?? null,
    catalogue: { ...catalogue.identity },
    report: buildReportIdentity(summary),
    conformanceTarget: buildConformanceTarget(summary),
    manifest,
    counts,
    automationLimitations: describeAutomationLimitations(manifest),
    limitations: [
      "No count in this section is a percentage of accessibility. A mapped rule is not an evaluated criterion.",
      "A criterion without automated findings has not been shown to conform.",
      "Rules that never produced a result may have been inapplicable, unimplemented or missed; only a human can tell those apart.",
      "Human assessment records are stored in the report reader's browser or imported JSON, not in this scan."
    ],
    criteria
  };
}

function describeGaps({ criterion, state, potential, failedRules }) {
  const gaps = [];
  if (state === "no-automated-rules") {
    gaps.push("No ACT, axe or ALFA rule in the catalogue is mapped to this criterion, so automated scanning does not exercise it.");
  } else if (state === "not-observed") {
    const mapped = potential.act.length + potential.axe.length + potential.alfa.length;
    gaps.push(
      `${mapped} mapped rule${mapped === 1 ? "" : "s"} produced no applicable result in this scan. ` +
        "That is not evidence that the criterion is met, and it is not evidence that the rules were inapplicable."
    );
  } else {
    gaps.push("Only the specific conditions of the rules that ran were tested, not the whole criterion.");
  }
  if (failedRules.length > 0) {
    gaps.push("At least one mapped rule reported a violation within its own scope.");
  }
  if (criterion.manual.ttSteps.length > 0) {
    gaps.push(`Related manual steps in the catalogue: ${criterion.manual.ttSteps.join(", ")}.`);
  }
  return gaps;
}

/**
 * Scan-level limitations that apply to every criterion. Kept out of the per-row
 * text so the report does not repeat the same paragraph 86 times.
 */
function describeAutomationLimitations(manifest) {
  const limitations = [];
  for (const engine of ENGINE_ORDER) {
    const info = manifest.engines[engine];
    if (!info) continue;
    if (info.status === "failed") {
      limitations.push(`${engineLabel(engine)} did not run in this scan: ${info.firstError ?? "no error detail recorded"}. Its mapped checks have no evidence here.`);
    } else if (info.status === "partial") {
      limitations.push(`${engineLabel(engine)} failed on ${info.pagesFailed} page(s); its results are partial.`);
    } else if (info.status === "not-run") {
      limitations.push(`${engineLabel(engine)} was not requested for this scan.`);
    } else if (info.ruleGranularity === "failure-only") {
      limitations.push(`${engineLabel(engine)} records rule identifiers only for failures, so a rule's execution is unknown unless it failed.`);
    }
  }
  limitations.push(manifest.frames.note);
  limitations.push(manifest.resources.note);
  return limitations;
}

function summariseCoverage(criteria) {
  const byLevel = (level) => criteria.filter((criterion) => criterion.level === level);
  const count = (predicate) => criteria.filter(predicate).length;
  return {
    criteriaTotal: criteria.length,
    criteriaByLevel: {
      A: byLevel("A").length,
      AA: byLevel("AA").length,
      AAA: byLevel("AAA").length
    },
    withAutomatedRuleMapped: count((criterion) => {
      const potential = criterion.automated.potential;
      return potential.act.length + potential.axe.length + potential.alfa.length > 0;
    }),
    withAutomatedRuleObserved: count((criterion) => criterion.automated.state === "observed"),
    observedWithoutViolation: count(
      (criterion) => criterion.automated.state === "observed" && criterion.automated.failed.length === 0
    ),
    observedWithViolation: count((criterion) => criterion.automated.failed.length > 0),
    noAutomatedRuleMapped: count((criterion) => criterion.automated.state === "no-automated-rules"),
    withManualProcedure: count((criterion) => criterion.manual.procedures.length > 0),
    withRecordedHumanReview: 0,
    humanReviewNote:
      "This scan cannot contain human assessment records. Records created in a downloaded report are stored locally in that reader's browser or imported from JSON, and are not uploaded."
  };
}

/** Stable identity for a scan report, independent of file name or hosting URL. */
export function buildReportIdentity(summary) {
  const issueNumber = summary?.issueNumber ?? "unknown";
  const scannedAt = summary?.scannedAt ?? "unknown";
  const reportId = `open-scans/issue-${issueNumber}/${scannedAt}`;
  return {
    reportId,
    issueNumber: summary?.issueNumber ?? null,
    issueUrl: summary?.issueUrl ?? null,
    scanTitle: summary?.scanTitle ?? summary?.issueTitle ?? null,
    scannedAt,
    engines: Array.isArray(summary?.engines) ? [...summary.engines] : [],
    pageCount: Array.isArray(summary?.results) ? summary.results.length : 0,
    submittedBy: summary?.submittedBy ?? null
  };
}

/** The conformance target a coverage view is framed against. */
export function buildConformanceTarget(summary) {
  const context = summary?.scanContext ?? {};
  const level = ["A", "AA", "AAA"].includes(context.conformanceLevel) ? context.conformanceLevel : "AA";
  const wcagVersion = typeof context.wcagVersion === "string" ? context.wcagVersion : "2.2";
  return {
    wcagVersion,
    level,
    source: context.conformanceLevel || context.wcagVersion ? "scan-context" : "default",
    note:
      "The conformance target frames which criteria are shown first. It is not a conformance claim: this report does not establish conformance at any level."
    };
}

/** Assessment categories and roles used to populate report filters. */
export function listAssessmentFacets() {
  return {
    categories: [...new Set(listProcedures().map((procedure) => procedure.category))].sort(),
    roles: listRoles()
  };
}

/**
 * Compact Markdown coverage summary for `report.md`.
 *
 * Markdown cannot host the assessment workspace, so it states what automation did
 * and did not evaluate and points at the interactive report. It never claims a
 * percentage or conformance.
 *
 * @param {object} summary scan summary with `assessmentCoverage`
 * @returns {string} Markdown, or an empty string when coverage is unavailable
 */
export function formatAssessmentCoverageMarkdown(summary) {
  const coverage = summary?.assessmentCoverage;
  if (!coverage?.counts || !Array.isArray(coverage.criteria)) return "";
  const counts = coverage.counts;
  const lines = [];
  lines.push("## Accessibility assessment coverage");
  lines.push("");
  lines.push(
    "**Automated accessibility findings are evidence, not proof of conformance.** Automated rules " +
      "evaluate specific conditions and do not establish that a WCAG success criterion is met."
  );
  lines.push("");
  lines.push(`- Catalogue: \`${coverage.catalogue?.catalogueVersion ?? "unknown"}\``);
  lines.push(`- Conformance target: WCAG ${coverage.conformanceTarget?.wcagVersion ?? "2.2"}, Level ${coverage.conformanceTarget?.level ?? "AA"}`);
  lines.push(`- Criteria with a mapped automated rule: ${counts.withAutomatedRuleMapped} of ${counts.criteriaTotal}`);
  lines.push(`- Criteria where a rule produced a result: ${counts.withAutomatedRuleObserved} of ${counts.criteriaTotal}`);
  lines.push(`- Criteria with no mapped automated rule: ${counts.noAutomatedRuleMapped} of ${counts.criteriaTotal}`);
  lines.push(`- Criteria with a manual procedure: ${counts.withManualProcedure} of ${counts.criteriaTotal}`);
  lines.push("- Criteria with a recorded human assessment: 0 in this report");
  lines.push("");
  lines.push(
    "No human assessment records are stored in the scan artifacts. The downloadable HTML report " +
      "contains guided manual procedures and an assessment workspace that stores records in your browser " +
      "or in a JSON file you export. Manual testing may also have been performed elsewhere and is not " +
      "recorded here."
  );
  const limitations = [...(coverage.automationLimitations ?? [])].slice(0, 6);
  if (limitations.length > 0) {
    lines.push("");
    lines.push("Limitations of this scan's automation:");
    lines.push("");
    for (const limitation of limitations) lines.push(`- ${limitation}`);
  }
  lines.push("");
  lines.push("See the HTML report for the per-criterion coverage table and the manual assessment workspace.");
  return `${lines.join("\n")}\n`;
}
