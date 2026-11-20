import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { pathToFileURL } from "node:url";
import { redactStringsDeep } from "./redact-secrets.mjs";
import { associateFinding, buildComponentAssociations } from "./component-association.mjs";
import { attachExternalInvestigations } from "./external-investigations.mjs";
import { getActRuleIds } from "./act-mapping.mjs";

export const ACCESSIBILITY_COMPARISON_SCHEMA_VERSION = "accessibility-comparison/1";

const ENGINE_ORDER = ["axe", "alfa", "equalAccess", "accesslint", "sa11y", "qualweb", "reflowRisk", "semantica11y"];
const ENGINE_LABEL = {
  axe: "axe-core",
  alfa: "Siteimprove ALFA",
  equalAccess: "IBM Equal Access",
  accesslint: "AccessLint",
  sa11y: "Sa11y",
  qualweb: "QualWeb (historical)",
  reflowRisk: "Reflow risk indicator",
  semantica11y: "Semantica11y"
};

function text(value) {
  return String(value ?? "").trim();
}

function normalizeUrl(rawUrl) {
  try {
    const url = new URL(String(rawUrl));
    url.hash = "";
    url.hostname = url.hostname.toLowerCase();
    if ((url.protocol === "http:" && url.port === "80") || (url.protocol === "https:" && url.port === "443")) {
      url.port = "";
    }
    return url.toString();
  } catch {
    return text(rawUrl);
  }
}

function hash(value, length = 12) {
  return createHash("sha256").update(String(value)).digest("hex").slice(0, length);
}

function normalizeLocator(value) {
  return text(value).replace(/\s+/g, " ").slice(0, 500);
}

function normalizeLocatorValue(failure) {
  return normalizeLocator(
    failure?.selector
    ?? failure?.xpath
    ?? failure?.element
    ?? failure?.html
    ?? failure?.message
    ?? "(page-level)"
  );
}

function normalizeWcag(failure) {
  const tags = Array.isArray(failure?.wcagSc) ? failure.wcagSc : [];
  const scs = [...new Set(tags
    .map((tag) => String(tag).toLowerCase())
    .filter((tag) => /^wcag\d+$/.test(tag))
    .map((tag) => tag.replace(/^wcag/, "")))].sort();
  const levelTag = tags.map((tag) => String(tag).toLowerCase()).find((tag) => /wcag2[0-9]?a{1,3}$/.test(tag)) ?? null;
  return { scs, level: levelTag };
}

function engineExecuted(engineResult) {
  if (!engineResult || typeof engineResult !== "object") return false;
  if (engineResult.executed === true) return true;
  if (engineResult.executed === false) return false;
  return Boolean(engineResult.counts || Array.isArray(engineResult.failures) || Array.isArray(engineResult.issues));
}

function engineError(engineResult) {
  return text(engineResult?.error) || null;
}

function findingDetails(finding) {
  return {
    title: finding.title ?? null,
    message: finding.message ?? null,
    locator: finding.locator ?? null,
    html: finding.html ?? null,
    wcagSc: finding.wcagSc ?? [],
    impact: finding.impact ?? null,
    colorScheme: finding.colorScheme ?? null,
    ruleUrl: finding.ruleUrl ?? null
  };
}

function detailsDifferences(a, b) {
  const fields = ["title", "message", "locator", "html", "impact", "colorScheme", "ruleUrl"];
  const differences = [];
  for (const field of fields) {
    const baseline = a[field] ?? null;
    const comparison = b[field] ?? null;
    if (JSON.stringify(baseline) !== JSON.stringify(comparison)) {
      differences.push({ field, baseline, comparison });
    }
  }
  if (JSON.stringify(a.wcagSc ?? []) !== JSON.stringify(b.wcagSc ?? [])) {
    differences.push({ field: "wcagSc", baseline: a.wcagSc ?? [], comparison: b.wcagSc ?? [] });
  }
  return differences;
}

function makeFinding({
  report,
  result,
  engine,
  failure,
  page,
  index,
  ordinal
}) {
  const locator = normalizeLocatorValue(failure);
  const ruleId = text(failure.rule ?? failure.ruleId ?? failure.id ?? "unknown-rule");
  const engineKey = engine.toLowerCase();
  const title = text(failure.description ?? failure.ruleTitle ?? failure.message ?? ruleId);
  const actRuleIds = getActRuleIds(engine, ruleId);
  const message = text(failure.message ?? failure.description ?? failure.suggestion ?? "");
  const html = failure.html ?? failure.element ?? null;
  const canonicalOccurrence = failure.a11yOccurrenceFingerprint ?? null;
  const canonicalPattern = failure.a11yPatternFingerprint ?? null;
  const legacyFingerprint = failure.fingerprint ?? null;
  const legacyPattern = failure.patternId ?? null;
  const comparisonKey = hash([
    page.logicalPageId ?? page.normalizedUrl,
    engineKey,
    ruleId.toLowerCase(),
    locator,
    String(ordinal)
  ].join("\u0000"));
  const patternKey = hash([engineKey, ruleId.toLowerCase(), locator].join("\u0000"));
  const occurrenceId = canonicalOccurrence ?? legacyFingerprint ?? `derived-occ-${comparisonKey}`;
  const patternId = canonicalPattern ?? legacyPattern ?? `derived-pat-${patternKey}`;
  const identitySource = canonicalOccurrence || canonicalPattern
    ? "canonical"
    : legacyFingerprint || legacyPattern ? "legacy" : "derived";
  return {
    occurrenceId,
    patternId,
    comparisonKey,
    patternKey,
    ordinal,
    identitySource,
    legacyFingerprint,
    legacyPattern,
    canonicalOccurrence,
    canonicalPattern,
    displayId: failure.a11yOccurrenceDisplayId
      ?? (legacyFingerprint ? `A11Y-${String(legacyFingerprint).slice(0, 8)}` : `derived-${comparisonKey.slice(0, 8)}`),
    engine,
    engineLabel: ENGINE_LABEL[engine] ?? engine,
    ruleId,
    title,
    message,
    description: failure.description ?? null,
    suggestion: failure.suggestion ?? null,
    locator,
    html,
    wcagSc: normalizeWcag(failure).scs,
    wcagLevel: normalizeWcag(failure).level,
    actRuleIds,
    impact: failure.impact ?? failure.severity ?? null,
    colorScheme: failure.colorScheme ?? null,
    ruleUrl: failure.ruleUrl ?? null,
    relatedPaths: failure.relatedPaths ?? null,
    firstSeenAt: failure.firstSeenAt ?? null,
    sourceRef: `${report.sourcePath ?? "report.json"}#results[${index}].${engine}.failures[${ordinal}]`,
    pageUrl: page.url,
    normalizedPageUrl: page.normalizedUrl,
    logicalPageId: page.logicalPageId ?? null,
    componentId: failure.componentId ?? failure.component?.id ?? null,
    componentTypeId: failure.componentTypeId ?? failure.component?.typeId ?? null,
    componentLabel: failure.componentLabel ?? failure.component?.label ?? null,
    semanticRegion: failure.semanticRegion ?? failure.component?.semanticRegion ?? null
  };
}

function recomputeComparisonKeys(finding, logicalPageId) {
  finding.logicalPageId = logicalPageId;
  finding.comparisonKey = hash([
    logicalPageId,
    finding.engine.toLowerCase(),
    finding.ruleId.toLowerCase(),
    finding.locator,
    String(finding.ordinal)
  ].join("\u0000"));
}

function addPageEngineStatus(page, engine, result) {
  page.engineStatus[engine] = {
    executed: engineExecuted(result),
    error: engineError(result),
    counts: result?.counts ?? null
  };
}

export function normalizeReportForComparison(report, { sourcePath = null, logicalPageUrl = null } = {}) {
  if (!report || typeof report !== "object" || !Array.isArray(report.results)) {
    throw new Error("Report must be a JSON object with a results array.");
  }
  const pages = new Map();
  const findings = [];
  for (const [index, result] of report.results.entries()) {
    const url = result.finalUrl || result.submittedUrl;
    if (!url) continue;
    const normalizedUrl = normalizeUrl(url);
    const page = pages.get(normalizedUrl) ?? {
      url,
      normalizedUrl,
      submittedUrl: result.submittedUrl ?? null,
      logicalPageId: logicalPageUrl ? normalizeUrl(logicalPageUrl) : null,
      ok: result.ok !== false,
      statusCode: result.statusCode ?? null,
      error: result.error ?? null,
      scanContext: result.scanContext ?? report.scanContext ?? null,
      engineStatus: {},
      findings: [],
      resultIndex: index
    };
    pages.set(normalizedUrl, page);
    page.ok = page.ok && result.ok !== false;
    page.error = page.error ?? result.error ?? null;
    for (const engine of ENGINE_ORDER.filter((name) => name !== "reflowRisk" && name !== "semantica11y")) {
      if (!result[engine]) continue;
      addPageEngineStatus(page, engine, result[engine]);
      const failures = Array.isArray(result[engine].failures) ? result[engine].failures : [];
      const ordinals = new Map();
      for (const failure of failures) {
        if (!failure || failure.isDuplicate) continue;
        const locator = normalizeLocatorValue(failure);
        const rule = text(failure.rule ?? "unknown-rule").toLowerCase();
        const ordinalKey = `${engine}:${rule}:${locator}`;
        const ordinal = ordinals.get(ordinalKey) ?? 0;
        ordinals.set(ordinalKey, ordinal + 1);
        const finding = makeFinding({ report, result, engine, failure, page, index, ordinal });
        finding.logicalPageId = page.logicalPageId;
        page.findings.push(finding);
        findings.push(finding);
      }
    }

    if (result.reflowRisk?.executed) {
      addPageEngineStatus(page, "reflowRisk", result.reflowRisk);
      if (result.reflowRisk.result === "failed") {
        const failure = {
          ...result.reflowRisk,
          rule: "reflow-risk",
          description: result.reflowRisk.description,
          message: result.reflowRisk.description,
          impact: "serious",
          wcagSc: ["wcag1410"],
          selector: "(page-level)"
        };
        const finding = makeFinding({ report, result, engine: "reflowRisk", failure, page, index, ordinal: 0 });
        finding.logicalPageId = page.logicalPageId;
        page.findings.push(finding);
        findings.push(finding);
      }
    }

    if (result.semantica11y?.executed && Array.isArray(result.semantica11y.issues)) {
      addPageEngineStatus(page, "semantica11y", result.semantica11y);
      const ordinals = new Map();
      for (const issue of result.semantica11y.issues) {
        const failure = {
          ...issue,
          rule: issue.rule ?? "semantica11y",
          description: issue.message,
          impact: issue.severity,
          html: issue.element ?? null,
          selector: issue.element ? null : "(page-level)"
        };
        const locator = normalizeLocatorValue(failure);
        const rule = text(failure.rule).toLowerCase();
        const ordinalKey = `semantica11y:${rule}:${locator}`;
        const ordinal = ordinals.get(ordinalKey) ?? 0;
        ordinals.set(ordinalKey, ordinal + 1);
        const finding = makeFinding({ report, result, engine: "semantica11y", failure, page, index, ordinal });
        finding.logicalPageId = page.logicalPageId;
        page.findings.push(finding);
        findings.push(finding);
      }
    }
  }

  const pageList = [...pages.values()];
  const selectedEngines = Array.isArray(report.engines)
    ? [...new Set(report.engines.map((engine) => engine === "equalaccess" ? "equalAccess" : engine))]
    : [];
  const executedEngines = [...new Set(pageList.flatMap((page) => Object.entries(page.engineStatus)
    .filter(([, status]) => status.executed)
    .map(([engine]) => engine)))];
  const engines = [...new Set([...selectedEngines, ...executedEngines])];
  return {
    report,
    sourcePath,
    scanId: `${report.issueNumber ?? "unknown"}@${report.scannedAt ?? sourcePath ?? "unknown"}`,
    issueNumber: report.issueNumber ?? null,
    issueUrl: report.issueUrl ?? null,
    scanTitle: report.scanTitle ?? report.issueTitle ?? null,
    scannedAt: report.scannedAt ?? null,
    engines,
    selectedEngines,
    executedEngines,
    scanContext: report.scanContext ?? null,
    pages: pageList,
    findings,
    coverage: {
      submitted: report.totalSubmitted ?? null,
      accepted: report.acceptedCount ?? null,
      scanned: report.scannedCount ?? pageList.length,
      skippedDueToTimeout: report.skippedDueToTimeout ?? null,
      skippedDueToErrAborted: report.skippedDueToErrAborted ?? null,
      rejected: report.rejectedCount ?? null
    }
  };
}

function parsePageMappings(rawMappings) {
  return (rawMappings ?? []).map((mapping, index) => {
    if (typeof mapping === "string") {
      const separator = mapping.indexOf("=");
      if (separator <= 0) throw new Error(`Page mapping ${index + 1} must be '<baseline-url>=<comparison-url>'.`);
      return { baselineUrl: mapping.slice(0, separator), comparisonUrl: mapping.slice(separator + 1) };
    }
    if (!mapping || typeof mapping !== "object" || !mapping.baselineUrl || !mapping.comparisonUrl) {
      throw new Error(`Page mapping ${index + 1} must contain baselineUrl and comparisonUrl.`);
    }
    return { baselineUrl: String(mapping.baselineUrl), comparisonUrl: String(mapping.comparisonUrl) };
  });
}

function buildPagePairs(baseline, comparison, rawMappings) {
  const mappings = parsePageMappings(rawMappings);
  const baselineByUrl = new Map(baseline.pages.map((page) => [page.normalizedUrl, page]));
  const comparisonByUrl = new Map(comparison.pages.map((page) => [page.normalizedUrl, page]));
  const pairs = [];
  const usedBaseline = new Set();
  const usedComparison = new Set();
  const errors = [];

  for (const [index, mapping] of mappings.entries()) {
    const baselineUrl = normalizeUrl(mapping.baselineUrl);
    const comparisonUrl = normalizeUrl(mapping.comparisonUrl);
    const baselinePage = baselineByUrl.get(baselineUrl);
    const comparisonPage = comparisonByUrl.get(comparisonUrl);
    if (!baselinePage) errors.push(`Mapped baseline page '${mapping.baselineUrl}' was not found in the baseline report.`);
    if (!comparisonPage) errors.push(`Mapped comparison page '${mapping.comparisonUrl}' was not found in the comparison report.`);
    if (!baselinePage || !comparisonPage) continue;
    if (usedBaseline.has(baselineUrl)) errors.push(`Baseline page '${mapping.baselineUrl}' is mapped more than once.`);
    if (usedComparison.has(comparisonUrl)) errors.push(`Comparison page '${mapping.comparisonUrl}' is mapped more than once.`);
    if (usedBaseline.has(baselineUrl) || usedComparison.has(comparisonUrl)) continue;
    usedBaseline.add(baselineUrl);
    usedComparison.add(comparisonUrl);
    const logicalPageId = `page-${hash(`${baselineUrl}\u0000${comparisonUrl}\u0000${index}`, 10)}`;
    baselinePage.logicalPageId = logicalPageId;
    comparisonPage.logicalPageId = logicalPageId;
    for (const finding of [...baselinePage.findings, ...comparisonPage.findings]) recomputeComparisonKeys(finding, logicalPageId);
    pairs.push({
      logicalPageId,
      baselinePage,
      comparisonPage,
      source: "explicit",
      baselineUrl: baselinePage.normalizedUrl,
      comparisonUrl: comparisonPage.normalizedUrl
    });
  }

  for (const page of baseline.pages) {
    if (usedBaseline.has(page.normalizedUrl)) continue;
    const comparisonPage = comparisonByUrl.get(page.normalizedUrl);
    if (!comparisonPage) continue;
    if (usedComparison.has(comparisonPage.normalizedUrl)) continue;
    const logicalPageId = `page-${hash(page.normalizedUrl, 10)}`;
    page.logicalPageId = logicalPageId;
    comparisonPage.logicalPageId = logicalPageId;
    for (const finding of [...page.findings, ...comparisonPage.findings]) recomputeComparisonKeys(finding, logicalPageId);
    usedBaseline.add(page.normalizedUrl);
    usedComparison.add(comparisonPage.normalizedUrl);
    pairs.push({
      logicalPageId,
      baselinePage: page,
      comparisonPage,
      source: "url",
      baselineUrl: page.normalizedUrl,
      comparisonUrl: comparisonPage.normalizedUrl
    });
  }

  return {
    pairs,
    baselineOnly: baseline.pages.filter((page) => !usedBaseline.has(page.normalizedUrl)),
    comparisonOnly: comparison.pages.filter((page) => !usedComparison.has(page.normalizedUrl)),
    errors
  };
}

function conditionDifferences(baselineContext, comparisonContext) {
  const fields = [
    ["browser", (context) => context?.browser ?? null],
    ["viewport", (context) => context?.viewport ? `${context.viewport.width}x${context.viewport.height}` : null],
    ["colorScheme", (context) => context?.colorScheme ?? null],
    ["pageLoadDelay", (context) => context?.pageLoadDelay ?? null]
  ];
  const differences = [];
  for (const [field, read] of fields) {
    const baseline = read(baselineContext);
    const comparison = read(comparisonContext);
    if (JSON.stringify(baseline) !== JSON.stringify(comparison)) {
      differences.push({ field, baseline, comparison });
    }
  }
  return differences;
}

function engineEvaluated(page, engine) {
  return Boolean(pageEvaluated(page) && page?.engineStatus?.[engine]?.executed && !page?.engineStatus?.[engine]?.error);
}

function pageHasEngineExecution(page) {
  return Object.values(page?.engineStatus ?? {}).some((status) => status.executed);
}

function pageEvaluated(page) {
  // A non-2xx response can still produce real engine results (for example a
  // 403 error page). Engines running is the evaluation signal; HTTP status is
  // preserved separately as a coverage caveat.
  return Boolean(page && !page.error && (page.ok || pageHasEngineExecution(page)));
}

function sourceFinding(finding) {
  if (!finding) return null;
  return {
    occurrenceId: finding.occurrenceId,
    displayId: finding.displayId,
    patternId: finding.patternId,
    identitySource: finding.identitySource,
    legacyFingerprint: finding.legacyFingerprint,
    legacyPattern: finding.legacyPattern,
    canonicalOccurrenceFingerprint: finding.canonicalOccurrence,
    canonicalPatternFingerprint: finding.canonicalPattern,
    title: finding.title,
    message: finding.message,
    html: finding.html,
    locator: finding.locator,
    wcagSc: finding.wcagSc,
    wcagLevel: finding.wcagLevel,
    actRuleIds: finding.actRuleIds ?? [],
    impact: finding.impact,
    firstSeenAt: finding.firstSeenAt,
    componentId: finding.componentId ?? null,
    componentTypeId: finding.componentTypeId ?? null,
    componentLabel: finding.componentLabel ?? null,
    semanticRegion: finding.semanticRegion ?? null,
    evidenceRef: finding.sourceRef
  };
}

function comparisonFinding({ baselineFinding, comparisonFinding: comparisonFindingValue, pagePair, classification, matchBasis, differences, conditionsCompatible, pageEvaluatedBoth, engineEvaluatedBoth }) {
  const representative = comparisonFindingValue ?? baselineFinding;
  const componentContext = associateFinding({
    ...representative,
    componentId: comparisonFindingValue?.componentId ?? baselineFinding?.componentId ?? null,
    componentTypeId: comparisonFindingValue?.componentTypeId ?? baselineFinding?.componentTypeId ?? null,
    componentLabel: comparisonFindingValue?.componentLabel ?? baselineFinding?.componentLabel ?? null
  });
  if (baselineFinding?.componentId && comparisonFindingValue?.componentId
    && baselineFinding.componentId !== comparisonFindingValue.componentId) {
    componentContext.uncertainty.push("Baseline and comparison component identifiers differ; neither is treated as authoritative.");
  }
  return {
    comparisonId: `${pagePair.logicalPageId}:${representative.engine}:${representative.ruleId}:${representative.comparisonKey}`,
    classification,
    engine: representative.engine,
    engineLabel: representative.engineLabel,
    ruleId: representative.ruleId,
    title: representative.title,
    message: representative.message,
    wcagSc: representative.wcagSc,
    wcagLevel: representative.wcagLevel,
    actRuleIds: representative.actRuleIds ?? [],
    impact: representative.impact,
    page: {
      logicalPageId: pagePair.logicalPageId,
      baselineUrl: pagePair.baselineUrl,
      comparisonUrl: pagePair.comparisonUrl,
      mapping: pagePair.source
    },
    componentContext,
    matchBasis,
    confidence: conditionsCompatible && pageEvaluatedBoth && engineEvaluatedBoth
      ? (["exact", "absent-from-baseline", "absent-from-comparison"].includes(matchBasis) ? "high" : matchBasis === "pattern" ? "medium" : "low")
      : "low",
    conditionsCompatible,
    pageEvaluatedInBoth: pageEvaluatedBoth,
    engineEvaluatedInBoth: engineEvaluatedBoth,
    confirmedRemediation: false,
    qualification: classification === "not-observed"
      ? "Absence from the comparison scan is not proof of remediation. It may reflect changed content, an engine difference, a failed or skipped page, or a different test condition."
      : classification === "new"
        ? "An observed difference between the two scans; not proof that the change caused a regression without reviewing the code and testing conditions."
        : null,
    detailsChanged: differences,
    baseline: sourceFinding(baselineFinding),
    comparison: sourceFinding(comparisonFindingValue)
  };
}

function matchPageFindings({ pagePair, conditionsCompatible }) {
  const baselineFindings = [...pagePair.baselinePage.findings];
  const comparisonFindings = [...pagePair.comparisonPage.findings];
  const usedBaseline = new Set();
  const usedComparison = new Set();
  const results = [];

  const pageEvaluatedBoth = pageEvaluated(pagePair.baselinePage) && pageEvaluated(pagePair.comparisonPage);
  const engineEvaluatedBoth = (engine) => engineEvaluated(pagePair.baselinePage, engine) && engineEvaluated(pagePair.comparisonPage, engine);

  if (!pageEvaluatedBoth) {
    return [
      ...baselineFindings.map((baselineFinding) => comparisonFinding({
        baselineFinding,
        comparisonFinding: null,
        pagePair,
        classification: "not-evaluated",
        matchBasis: "page-not-evaluated-in-both",
        differences: [],
        conditionsCompatible,
        pageEvaluatedBoth: false,
        engineEvaluatedBoth: false
      })),
      ...comparisonFindings.map((comparisonFindingValue) => comparisonFinding({
        baselineFinding: null,
        comparisonFinding: comparisonFindingValue,
        pagePair,
        classification: "not-evaluated",
        matchBasis: "page-not-evaluated-in-both",
        differences: [],
        conditionsCompatible,
        pageEvaluatedBoth: false,
        engineEvaluatedBoth: false
      }))
    ];
  }

  // Exact comparison identity.
  const comparisonByKey = new Map();
  for (const finding of comparisonFindings) {
    const key = `${finding.engine}\u0000${finding.comparisonKey}`;
    const list = comparisonByKey.get(key) ?? [];
    list.push(finding);
    comparisonByKey.set(key, list);
  }
  for (const baselineFinding of baselineFindings) {
    if (!engineEvaluatedBoth(baselineFinding.engine)) continue;
    const key = `${baselineFinding.engine}\u0000${baselineFinding.comparisonKey}`;
    const list = comparisonByKey.get(key) ?? [];
    const match = list.find((finding) => !usedComparison.has(finding));
    if (!match) continue;
    usedBaseline.add(baselineFinding);
    usedComparison.add(match);
    const differences = detailsDifferences(findingDetails(baselineFinding), findingDetails(match));
    results.push(comparisonFinding({
      baselineFinding,
      comparisonFinding: match,
      pagePair,
      classification: differences.length > 0 ? "details-changed" : "persistent",
      matchBasis: "exact",
      differences,
      conditionsCompatible,
      pageEvaluatedBoth,
      engineEvaluatedBoth: engineEvaluatedBoth(baselineFinding.engine)
    }));
  }

  // Same pattern, changed occurrence details (e.g. a locator or HTML edit).
  const comparisonByPattern = new Map();
  for (const finding of comparisonFindings) {
    if (usedComparison.has(finding)) continue;
    const key = `${finding.engine}\u0000${finding.patternKey}`;
    const list = comparisonByPattern.get(key) ?? [];
    list.push(finding);
    comparisonByPattern.set(key, list);
  }
  for (const baselineFinding of baselineFindings) {
    if (usedBaseline.has(baselineFinding)) continue;
    if (!engineEvaluatedBoth(baselineFinding.engine)) continue;
    const key = `${baselineFinding.engine}\u0000${baselineFinding.patternKey}`;
    const list = comparisonByPattern.get(key) ?? [];
    const match = list.find((finding) => !usedComparison.has(finding));
    if (!match) continue;
    usedBaseline.add(baselineFinding);
    usedComparison.add(match);
    const differences = detailsDifferences(findingDetails(baselineFinding), findingDetails(match));
    results.push(comparisonFinding({
      baselineFinding,
      comparisonFinding: match,
      pagePair,
      classification: "details-changed",
      matchBasis: "pattern",
      differences,
      conditionsCompatible,
      pageEvaluatedBoth,
      engineEvaluatedBoth: engineEvaluatedBoth(baselineFinding.engine)
    }));
  }

  // Engine/rule unique fallback: a locator changed but the same rule is still
  // present on the same page. Keep this low-confidence and explicit.
  const baselineByEngineRule = new Map();
  const comparisonByEngineRule = new Map();
  for (const finding of baselineFindings) {
    if (usedBaseline.has(finding)) continue;
    if (!engineEvaluatedBoth(finding.engine)) continue;
    const key = `${finding.engine}\u0000${finding.ruleId}`;
    const list = baselineByEngineRule.get(key) ?? [];
    list.push(finding);
    baselineByEngineRule.set(key, list);
  }
  for (const finding of comparisonFindings) {
    if (usedComparison.has(finding)) continue;
    if (!engineEvaluatedBoth(finding.engine)) continue;
    const key = `${finding.engine}\u0000${finding.ruleId}`;
    const list = comparisonByEngineRule.get(key) ?? [];
    list.push(finding);
    comparisonByEngineRule.set(key, list);
  }
  for (const [key, baselineList] of baselineByEngineRule.entries()) {
    const comparisonList = comparisonByEngineRule.get(key) ?? [];
    if (baselineList.length !== 1 || comparisonList.length !== 1) continue;
    const baselineFinding = baselineList[0];
    const match = comparisonList[0];
    usedBaseline.add(baselineFinding);
    usedComparison.add(match);
    const differences = detailsDifferences(findingDetails(baselineFinding), findingDetails(match));
    results.push(comparisonFinding({
      baselineFinding,
      comparisonFinding: match,
      pagePair,
      classification: "details-changed",
      matchBasis: "engine-rule-unique",
      differences,
      conditionsCompatible,
      pageEvaluatedBoth,
      engineEvaluatedBoth: engineEvaluatedBoth(baselineFinding.engine)
    }));
  }

  for (const baselineFinding of baselineFindings) {
    if (usedBaseline.has(baselineFinding)) continue;
    const engineBoth = engineEvaluatedBoth(baselineFinding.engine);
    results.push(comparisonFinding({
      baselineFinding,
      comparisonFinding: null,
      pagePair,
      classification: pageEvaluatedBoth && engineBoth ? "not-observed" : "not-evaluated",
      matchBasis: pageEvaluatedBoth && engineBoth ? "absent-from-comparison" : "coverage-or-engine-gap",
      differences: [],
      conditionsCompatible,
      pageEvaluatedBoth,
      engineEvaluatedBoth: engineBoth
    }));
  }

  for (const comparisonFindingValue of comparisonFindings) {
    if (usedComparison.has(comparisonFindingValue)) continue;
    const engineBoth = engineEvaluatedBoth(comparisonFindingValue.engine);
    results.push(comparisonFinding({
      baselineFinding: null,
      comparisonFinding: comparisonFindingValue,
      pagePair,
      classification: pageEvaluatedBoth && engineBoth ? "new" : "not-evaluated",
      matchBasis: pageEvaluatedBoth && engineBoth ? "absent-from-baseline" : "coverage-or-engine-gap",
      differences: [],
      conditionsCompatible,
      pageEvaluatedBoth,
      engineEvaluatedBoth: engineBoth
    }));
  }

  return results;
}

function buildManualVerification(comparison) {
  const tasks = [];
  const add = (id, task, reason) => tasks.push({ id, task, reason });
  add(
    "keyboard-and-at",
    "Test the changed pages with keyboard only and at least one screen reader, including the components implicated by new or changed findings.",
    "Automated engines cannot establish keyboard operation, focus management or screen-reader announcements."
  );
  if (comparison.summary.newCount > 0) {
    add(
      "review-new-findings",
      "Review every new finding against the optimization change before treating it as a regression.",
      "A new automated finding is an observed difference; it does not by itself prove the optimization caused it."
    );
  }
  if (comparison.summary.detailsChangedCount > 0) {
    add(
      "review-changed-details",
      "Compare the before/after locator, HTML, message and WCAG mapping for findings whose details changed.",
      "A detail change may reflect different content, a different page or a different engine version."
    );
  }
  if (comparison.summary.notObservedCount > 0) {
    add(
      "verify-not-observed",
      "For each no-longer-observed finding, confirm the remediation in the live page or source; do not mark it fixed from absence alone.",
      "Absence from one comparison is not proof of remediation."
    );
  }
  if (comparison.summary.notEvaluatedCount > 0 || comparison.coverageGaps.length > 0) {
    add(
      "review-coverage-gaps",
      "Review every unpaired, failed, HTTP-error or engine-gap page before drawing conclusions.",
      "Missing coverage is not evidence of improvement."
    );
  }
  if (!comparison.conditions.compatible) {
    add(
      "rerun-comparable-conditions",
      "Re-run the comparison with the same browser, viewport, colour scheme and page-load delay.",
      "Different testing conditions reduce confidence and can change findings."
    );
  }
  if (comparison.summary.enginesChanged) {
    add(
      "rerun-common-engines",
      "Re-run with the same engine selection, or confirm that findings from engines absent on one side are not treated as new or absent.",
      "The scans did not run the same engine set."
    );
  }
  add(
    "zoom-forced-colours-motion",
    "Check the changed pages at 320px, 200%/400% zoom, in forced-colours mode and with reduced motion enabled.",
    "These user conditions are not fully covered by automated rule findings."
  );
  return tasks;
}

export function compareScanReports(baselineReport, comparisonReport, options = {}) {
  let baseline;
  let comparison;
  try {
    baseline = normalizeReportForComparison(baselineReport, { sourcePath: options.baselinePath, logicalPageUrl: options.baselineLogicalUrl });
    comparison = normalizeReportForComparison(comparisonReport, { sourcePath: options.comparisonPath, logicalPageUrl: options.comparisonLogicalUrl });
  } catch (error) {
    return { ok: false, errors: [error.message], warnings: [], value: null };
  }

  const pageResult = buildPagePairs(baseline, comparison, options.pageMappings ?? []);
  if (pageResult.errors.length > 0) {
    return { ok: false, errors: pageResult.errors, warnings: [], value: null };
  }

  const conditionsDifferences = conditionDifferences(baseline.scanContext, comparison.scanContext);
  const conditionsCompatible = conditionsDifferences.length === 0;
  const findings = {
    new: [],
    persistent: [],
    "details-changed": [],
    "not-observed": [],
    "not-evaluated": []
  };
  const pageComparisons = [];
  const coverageGaps = [];

  for (const pagePair of pageResult.pairs) {
    const pageConditions = conditionDifferences(pagePair.baselinePage.scanContext, pagePair.comparisonPage.scanContext);
    const pageCompatible = conditionsCompatible && pageConditions.length === 0;
    const results = matchPageFindings({ pagePair, conditionsCompatible: pageCompatible });
    for (const result of results) findings[result.classification].push(result);
    pageComparisons.push({
      logicalPageId: pagePair.logicalPageId,
      mapping: pagePair.source,
      baselineUrl: pagePair.baselineUrl,
      comparisonUrl: pagePair.comparisonUrl,
      baselineEvaluated: pageEvaluated(pagePair.baselinePage),
      comparisonEvaluated: pageEvaluated(pagePair.comparisonPage),
      baselineStatusCode: pagePair.baselinePage.statusCode,
      comparisonStatusCode: pagePair.comparisonPage.statusCode,
      baselineError: pagePair.baselinePage.error,
      comparisonError: pagePair.comparisonPage.error,
      conditionsDifferences: pageConditions,
      conditionsCompatible: pageCompatible,
      counts: {
        baselineFindings: pagePair.baselinePage.findings.length,
        comparisonFindings: pagePair.comparisonPage.findings.length,
        new: results.filter((item) => item.classification === "new").length,
        persistent: results.filter((item) => item.classification === "persistent").length,
        detailsChanged: results.filter((item) => item.classification === "details-changed").length,
        notObserved: results.filter((item) => item.classification === "not-observed").length,
        notEvaluated: results.filter((item) => item.classification === "not-evaluated").length
      }
    });
    if (!pageEvaluated(pagePair.baselinePage) || !pageEvaluated(pagePair.comparisonPage)) {
      coverageGaps.push({
        logicalPageId: pagePair.logicalPageId,
        kind: "page-not-evaluated",
        baselineUrl: pagePair.baselineUrl,
        comparisonUrl: pagePair.comparisonUrl,
        baselineError: pagePair.baselinePage.error,
        comparisonError: pagePair.comparisonPage.error
      });
    }
    for (const [side, page] of [["baseline", pagePair.baselinePage], ["comparison", pagePair.comparisonPage]]) {
      if (typeof page.statusCode === "number" && page.statusCode >= 400) {
        coverageGaps.push({
          logicalPageId: pagePair.logicalPageId,
          kind: "http-error-page",
          side,
          url: page.normalizedUrl,
          statusCode: page.statusCode,
          reason: "Engines ran, but findings may describe the error response rather than the intended page."
        });
      }
    }
  }

  for (const page of pageResult.baselineOnly) {
    coverageGaps.push({ kind: "baseline-only-page", url: page.normalizedUrl, reason: "Page is not present in the comparison scan and has no explicit mapping." });
    for (const finding of page.findings) {
      findings["not-evaluated"].push(comparisonFinding({
        baselineFinding: finding,
        comparisonFinding: null,
        pagePair: {
          logicalPageId: `page-${hash(page.normalizedUrl, 10)}`,
          source: "unpaired",
          baselineUrl: page.normalizedUrl,
          comparisonUrl: null
        },
        classification: "not-evaluated",
        matchBasis: "page-not-paired",
        differences: [],
        conditionsCompatible: false,
        pageEvaluatedBoth: false,
        engineEvaluatedBoth: false
      }));
    }
  }
  for (const page of pageResult.comparisonOnly) {
    coverageGaps.push({ kind: "comparison-only-page", url: page.normalizedUrl, reason: "Page is not present in the baseline scan and has no explicit mapping." });
    for (const finding of page.findings) {
      findings["not-evaluated"].push(comparisonFinding({
        baselineFinding: null,
        comparisonFinding: finding,
        pagePair: {
          logicalPageId: `page-${hash(page.normalizedUrl, 10)}`,
          source: "unpaired",
          baselineUrl: null,
          comparisonUrl: page.normalizedUrl
        },
        classification: "not-evaluated",
        matchBasis: "page-not-paired",
        differences: [],
        conditionsCompatible: false,
        pageEvaluatedBoth: false,
        engineEvaluatedBoth: false
      }));
    }
  }

  const baselineEngines = new Set(baseline.engines);
  const comparisonEngines = new Set(comparison.engines);
  const commonEngines = [...baselineEngines].filter((engine) => comparisonEngines.has(engine)).sort();
  const onlyBaselineEngines = [...baselineEngines].filter((engine) => !comparisonEngines.has(engine)).sort();
  const onlyComparisonEngines = [...comparisonEngines].filter((engine) => !baselineEngines.has(engine)).sort();
  const limitations = [
    "Absence of a finding from the comparison scan is not proof of remediation; review page coverage, engine execution and test conditions.",
    "Automated accessibility checks cannot establish WCAG conformance, functional equivalence or the absence of regressions.",
    "Only explicitly mapped or identical normalized URLs are compared; unpaired pages are coverage gaps.",
    "Testing-condition differences reduce confidence and are shown separately."
  ];
  if (conditionsDifferences.length > 0) {
    limitations.push("The report-level browser, viewport, colour scheme or page-load delay differs between scans; findings are observed differences, not confirmed regressions or fixes.");
  }
  if (onlyBaselineEngines.length || onlyComparisonEngines.length) {
    limitations.push("The scans did not run the same engine set; findings from engines absent on one side are not treated as new or absent.");
  }
  if (pageResult.baselineOnly.length || pageResult.comparisonOnly.length) {
    limitations.push("Some pages were not present in both scans; their findings are classified as not evaluated, not as fixes.");
  }
  if (pageComparisons.some((page) => (page.baselineStatusCode ?? 0) >= 400 || (page.comparisonStatusCode ?? 0) >= 400)) {
    limitations.push("One or more compared pages returned an HTTP error status; findings may describe the error response rather than the intended content.");
  }

  const value = {
    schema: ACCESSIBILITY_COMPARISON_SCHEMA_VERSION,
    generatedAt: options.generatedAt ?? new Date().toISOString(),
    baseline: {
      scanId: baseline.scanId,
      issueNumber: baseline.issueNumber,
      issueUrl: baseline.issueUrl,
      scanTitle: baseline.scanTitle,
      scannedAt: baseline.scannedAt,
      release: options.baselineRelease ?? null,
      sourcePath: baseline.sourcePath,
      engines: baseline.engines,
      scanContext: baseline.scanContext,
      coverage: baseline.coverage
    },
    comparison: {
      scanId: comparison.scanId,
      issueNumber: comparison.issueNumber,
      issueUrl: comparison.issueUrl,
      scanTitle: comparison.scanTitle,
      scannedAt: comparison.scannedAt,
      release: options.comparisonRelease ?? null,
      sourcePath: comparison.sourcePath,
      engines: comparison.engines,
      scanContext: comparison.scanContext,
      coverage: comparison.coverage
    },
    pageMappings: pageComparisons,
    conditions: {
      compatible: conditionsCompatible,
      baseline: baseline.scanContext,
      comparison: comparison.scanContext,
      differences: conditionsDifferences
    },
    engines: {
      baseline: baseline.engines,
      comparison: comparison.engines,
      common: commonEngines,
      onlyBaseline: onlyBaselineEngines,
      onlyComparison: onlyComparisonEngines,
      labels: Object.fromEntries([...new Set([...baselineEngines, ...comparisonEngines])].map((engine) => [engine, ENGINE_LABEL[engine] ?? engine]))
    },
    summary: {
      pagesCompared: pageComparisons.length,
      pagesBaselineOnly: pageResult.baselineOnly.length,
      pagesComparisonOnly: pageResult.comparisonOnly.length,
      baselineFindings: baseline.findings.length,
      comparisonFindings: comparison.findings.length,
      newCount: findings.new.length,
      persistentCount: findings.persistent.length,
      detailsChangedCount: findings["details-changed"].length,
      notObservedCount: findings["not-observed"].length,
      notEvaluatedCount: findings["not-evaluated"].length,
      confirmedRemediations: 0,
      conditionsCompatible,
      enginesChanged: onlyBaselineEngines.length > 0 || onlyComparisonEngines.length > 0,
      identityFallbackCount: [...baseline.findings, ...comparison.findings].filter((finding) => finding.identitySource === "derived").length
    },
    findings,
    componentAssociations: buildComponentAssociations(Object.values(findings).flat()),
    coverageGaps,
    manualVerification: buildManualVerification({
      summary: {
        newCount: findings.new.length,
        persistentCount: findings.persistent.length,
        detailsChangedCount: findings["details-changed"].length,
        notObservedCount: findings["not-observed"].length,
        notEvaluatedCount: findings["not-evaluated"].length,
        enginesChanged: onlyBaselineEngines.length > 0 || onlyComparisonEngines.length > 0
      },
      conditions: { compatible: conditionsCompatible },
      coverageGaps
    }),
    limitations
  };

  const redaction = { changed: 0 };
  redactStringsDeep(value, redaction);
  if (redaction.changed > 0) value.limitations.push(`Redacted ${redaction.changed} credential-shaped string(s) from the comparison output.`);
  return { ok: true, errors: [], warnings: [], value };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeMarkdown(value) {
  return String(value ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function findingRows(findings, limit = 100) {
  return findings.slice(0, limit).map((finding) => ({
    page: finding.page.comparisonUrl ?? finding.page.baselineUrl ?? finding.page.logicalPageId,
    engine: finding.engineLabel,
    rule: finding.ruleId,
    title: finding.title,
    confidence: finding.confidence,
    confirmed: finding.confirmedRemediation,
    qualification: finding.qualification ?? ""
  }));
}

export function formatComparisonMarkdown(comparisonInput) {
  const comparison = comparisonInput?.schema === ACCESSIBILITY_COMPARISON_SCHEMA_VERSION
    ? comparisonInput
    : comparisonInput?.value;
  if (!comparison) return "# Accessibility comparison\n\n_No comparison data._\n";
  const lines = [
    "# Accessibility comparison",
    "",
    "## Comparison summary",
    "",
    `- Baseline: ${comparison.baseline.scanTitle ?? "untitled"} (${comparison.baseline.scannedAt ?? "date not recorded"})`,
    `- Comparison: ${comparison.comparison.scanTitle ?? "untitled"} (${comparison.comparison.scannedAt ?? "date not recorded"})`,
    `- Pages compared: ${comparison.summary.pagesCompared}`,
    `- New findings: ${comparison.summary.newCount}`,
    `- Persistent findings: ${comparison.summary.persistentCount}`,
    `- Details changed: ${comparison.summary.detailsChangedCount}`,
    `- No longer observed: ${comparison.summary.notObservedCount}`,
    `- Not evaluated: ${comparison.summary.notEvaluatedCount}`,
    `- Confirmed remediations: ${comparison.summary.confirmedRemediations}`,
    `- Testing conditions compatible: ${comparison.conditions.compatible ? "yes" : "no"}`,
    "",
    "**No longer observed does not mean fixed.** Absence from one comparison is not proof of remediation.",
    "",
    "## Testing conditions",
    "",
    "| Field | Baseline | Comparison |",
    "| :--- | :--- | :--- |",
    `| Scan | ${escapeMarkdown(comparison.baseline.scanId)} | ${escapeMarkdown(comparison.comparison.scanId)} |`,
    `| Release | ${escapeMarkdown(comparison.baseline.release ?? "not supplied")} | ${escapeMarkdown(comparison.comparison.release ?? "not supplied")} |`,
    `| Browser | ${escapeMarkdown(comparison.conditions.baseline?.browser ?? "unknown")} | ${escapeMarkdown(comparison.conditions.comparison?.browser ?? "unknown")} |`,
    `| Viewport | ${escapeMarkdown(comparison.conditions.baseline?.viewport ? `${comparison.conditions.baseline.viewport.width}x${comparison.conditions.baseline.viewport.height}` : "unknown")} | ${escapeMarkdown(comparison.conditions.comparison?.viewport ? `${comparison.conditions.comparison.viewport.width}x${comparison.conditions.comparison.viewport.height}` : "unknown")} |`,
    `| Colour scheme | ${escapeMarkdown(comparison.conditions.baseline?.colorScheme ?? "unknown")} | ${escapeMarkdown(comparison.conditions.comparison?.colorScheme ?? "unknown")} |`,
    `| Engines | ${escapeMarkdown(comparison.engines.baseline.join(", "))} | ${escapeMarkdown(comparison.engines.comparison.join(", "))} |`,
    "",
    "## Page coverage",
    "",
    "| Logical page | Baseline URL | Comparison URL | Mapping | Baseline evaluated | Comparison evaluated |",
    "| :--- | :--- | :--- | :--- | :--- | :--- |"
  ];
  for (const page of comparison.pageMappings) {
    lines.push(`| ${escapeMarkdown(page.logicalPageId)} | ${escapeMarkdown(page.baselineUrl)} | ${escapeMarkdown(page.comparisonUrl)} | ${page.mapping} | ${page.baselineEvaluated ? "yes" : "no"} | ${page.comparisonEvaluated ? "yes" : "no"} |`);
  }
  const allFindings = Object.values(comparison.findings).flat();
  const findingsById = new Map(allFindings.map((finding) => [finding.comparisonId, finding]));
  if (comparison.componentAssociations) {
    lines.push("", "## Component and semantic-region evidence", "");
    lines.push("_Regions are selector-derived candidates unless an explicit component identifier is present. This is not a component-ownership claim._", "");
    const regions = Object.entries(comparison.componentAssociations.bySemanticRegion ?? {});
    if (regions.length === 0) {
      lines.push("_No semantic-region associations were available._");
    } else {
      lines.push("| Region | Findings | Pages | Basis | Confidence |", "| :--- | :--- | :--- | :--- | :--- |");
      for (const [region, ids] of regions.sort(([a], [b]) => a.localeCompare(b))) {
        const associated = ids.map((id) => findingsById.get(id)).filter(Boolean);
        const pages = new Set(associated.map((finding) => finding.page.logicalPageId));
        const explicit = associated.filter((finding) => finding.componentContext?.basis === "explicit-component").length;
        lines.push(`| ${escapeMarkdown(region)} | ${ids.length} | ${pages.size} | ${explicit === associated.length ? "explicit-component" : "selector-token"} | ${explicit === associated.length ? "high" : "low"} |`);
      }
    }
    if (Object.keys(comparison.componentAssociations.byComponentId ?? {}).length > 0) {
      lines.push("", "### Explicit component identifiers", "");
      lines.push("| Component ID | Findings |", "| :--- | :--- |");
      for (const [componentId, ids] of Object.entries(comparison.componentAssociations.byComponentId).sort(([a], [b]) => a.localeCompare(b))) {
        lines.push(`| ${escapeMarkdown(componentId)} | ${ids.length} |`);
      }
    }
    lines.push("", `- Findings with a semantic region: ${comparison.componentAssociations.summary.withSemanticRegion}`);
    lines.push(`- Findings with an explicit component identifier: ${comparison.componentAssociations.summary.withComponentId}`);
    lines.push(`- Findings with no association: ${comparison.componentAssociations.summary.unassociated}`);
  }
  if (comparison.externalInvestigations?.length) {
    lines.push("", "## Related performance and energy investigations", "");
    lines.push("_Linked metadata only. An external investigation is not an accessibility failure; no external URL was fetched._", "");
    lines.push("| Source | Investigation | Related page | Component | Date | Link | Linkage |", "| :--- | :--- | :--- | :--- | :--- | :--- | :--- |");
    for (const reference of comparison.externalInvestigations) {
      const component = reference.relatedComponent
        ? reference.relatedComponent.componentId ?? reference.relatedComponent.componentTypeId ?? reference.relatedComponent.componentLabel ?? "not recorded"
        : "not recorded";
      const link = `[Open ${escapeMarkdown(reference.investigationId)}](<${reference.sourceResultUrl}>)`;
      lines.push(`| ${escapeMarkdown(reference.sourceProject)} | ${escapeMarkdown(reference.investigationId)} | ${escapeMarkdown(reference.relatedPageUrl ?? "not recorded")} | ${escapeMarkdown(component)} | ${escapeMarkdown(reference.referencedAt)} | ${link} | ${reference.linkage.confidence} |`);
    }
    lines.push("", `> ${comparison.externalInvestigations[0].boundary}`);
  }
  const sections = [
    ["new", "New accessibility findings"],
    ["persistent", "Persistent findings"],
    ["details-changed", "Findings whose details changed"],
    ["not-observed", "No longer observed"],
    ["not-evaluated", "Not evaluated"]
  ];
  for (const [key, heading] of sections) {
    lines.push("", `## ${heading}`, "");
    const rows = findingRows(comparison.findings[key] ?? []);
    if (rows.length === 0) {
      lines.push("_None._");
      continue;
    }
    lines.push("| Page | Engine | Rule | Finding | Confidence | Confirmed remediation | Qualification |", "| :--- | :--- | :--- | :--- | :--- | :--- | :--- |");
    for (const row of rows) {
      lines.push(`| ${escapeMarkdown(row.page)} | ${escapeMarkdown(row.engine)} | ${escapeMarkdown(row.rule)} | ${escapeMarkdown(row.title)} | ${row.confidence} | ${row.confirmed} | ${escapeMarkdown(row.qualification || "None")} |`);
    }
    if ((comparison.findings[key] ?? []).length > rows.length) {
      lines.push("", `_Showing the first ${rows.length} of ${(comparison.findings[key] ?? []).length} findings; see the JSON or CSV export for all rows._`);
    }
  }
  lines.push("", "## Manual verification", "");
  const manualTasks = comparison.manualVerification ?? [];
  if (manualTasks.length === 0) {
    lines.push("_Review keyboard, screen-reader, zoom, forced-colours and reduced-motion behaviour manually._");
  } else {
    for (const task of manualTasks) lines.push(`- **${task.task}** ${task.reason}`);
  }
  lines.push("", "## Coverage gaps", "");
  if (comparison.coverageGaps.length === 0) lines.push("_None recorded._");
  for (const gap of comparison.coverageGaps) {
    lines.push(`- ${escapeMarkdown(gap.kind)}: ${escapeMarkdown(gap.url ?? gap.logicalPageId ?? "")} ${escapeMarkdown(gap.reason ?? gap.baselineError ?? gap.comparisonError ?? "")}`);
  }
  lines.push("", "## Limitations", "");
  for (const limitation of comparison.limitations) lines.push(`- ${limitation}`);
  return `${lines.join("\n")}\n`;
}

export function comparisonToCsv(comparisonInput) {
  const comparison = comparisonInput?.schema === ACCESSIBILITY_COMPARISON_SCHEMA_VERSION
    ? comparisonInput
    : comparisonInput?.value;
  if (!comparison) return "";
  const header = [
    "logical_page_id", "baseline_url", "comparison_url", "classification", "engine", "rule_id",
    "title", "confidence", "confirmed_remediation", "qualification", "baseline_occurrence_id", "comparison_occurrence_id",
    "semantic_region", "component_id", "association_basis", "association_confidence", "act_rule_ids",
    "wcag_sc", "wcag_level", "impact", "match_basis", "page_mapping",
    "baseline_scan_id", "comparison_scan_id", "baseline_issue_url", "comparison_issue_url",
    "baseline_release", "comparison_release", "baseline_source_report", "comparison_source_report",
    "baseline_browser", "comparison_browser", "baseline_viewport", "comparison_viewport",
    "baseline_colour_scheme", "comparison_colour_scheme",
    "external_investigation_ids", "coverage_gap_kinds", "limitations",
    "baseline_pattern_id", "comparison_pattern_id", "display_id", "identity_source",
    "baseline_evidence_ref", "comparison_evidence_ref", "component_label"
  ];
  const sourcePath = (scan) => scan?.sourcePath ?? "";
  const viewport = (context) => context?.viewport ? `${context.viewport.width}x${context.viewport.height}` : "";
  const externalIds = (comparison.externalInvestigations ?? []).map((reference) => reference.investigationId).join(";");
  const gapKinds = [...new Set((comparison.coverageGaps ?? []).map((gap) => gap.kind).filter(Boolean))].join(";");
  const limitations = (comparison.limitations ?? []).join(" | ");
  const csvCell = (value) => {
    let cell = String(value ?? "");
    if (/^[\s]*[=+\-@]/.test(cell)) cell = `'${cell}`;
    return `"${cell.replace(/"/g, '""')}"`;
  };
  const rows = [header];
  for (const [classification, list] of Object.entries(comparison.findings)) {
    for (const finding of list) {
      rows.push([
        finding.page.logicalPageId,
        finding.page.baselineUrl ?? "",
        finding.page.comparisonUrl ?? "",
        classification,
        finding.engine,
        finding.ruleId,
        finding.title,
        finding.confidence,
        String(finding.confirmedRemediation),
        finding.qualification ?? "",
        finding.baseline?.occurrenceId ?? "",
        finding.comparison?.occurrenceId ?? "",
        finding.componentContext?.semanticRegion ?? "",
        finding.componentContext?.componentId ?? "",
        finding.componentContext?.basis ?? "none",
        finding.componentContext?.confidence ?? "unknown",
        (finding.actRuleIds ?? []).join(";"),
        (finding.wcagSc ?? []).join(";"),
        finding.wcagLevel ?? "",
        finding.impact ?? "",
        finding.matchBasis ?? "",
        finding.page.mapping ?? "",
        comparison.baseline.scanId ?? "",
        comparison.comparison.scanId ?? "",
        comparison.baseline.issueUrl ?? "",
        comparison.comparison.issueUrl ?? "",
        comparison.baseline.release ?? "",
        comparison.comparison.release ?? "",
        sourcePath(comparison.baseline),
        sourcePath(comparison.comparison),
        comparison.conditions.baseline?.browser ?? "",
        comparison.conditions.comparison?.browser ?? "",
        viewport(comparison.conditions.baseline),
        viewport(comparison.conditions.comparison),
        comparison.conditions.baseline?.colorScheme ?? "",
        comparison.conditions.comparison?.colorScheme ?? "",
        externalIds,
        gapKinds,
        limitations,
        finding.baseline?.patternId ?? "",
        finding.comparison?.patternId ?? "",
        finding.baseline?.displayId ?? finding.comparison?.displayId ?? "",
        finding.baseline?.identitySource ?? finding.comparison?.identitySource ?? "",
        finding.baseline?.evidenceRef ?? "",
        finding.comparison?.evidenceRef ?? "",
        finding.componentContext?.componentLabel ?? ""
      ]);
    }
  }
  return rows.map((row) => row.map(csvCell).join(",")).join("\n") + "\n";
}


export function formatComparisonHtml(comparisonInput) {
  const comparison = comparisonInput?.schema === ACCESSIBILITY_COMPARISON_SCHEMA_VERSION
    ? comparisonInput
    : comparisonInput?.value;
  if (!comparison) return "<!doctype html><html lang=\"en\"><title>Accessibility comparison</title><body><p>No comparison data.</p></body></html>";
  const sections = [
    ["new", "New accessibility findings"],
    ["persistent", "Persistent findings"],
    ["details-changed", "Findings whose details changed"],
    ["not-observed", "No longer observed"],
    ["not-evaluated", "Not evaluated"]
  ];
  const rowsFor = (findings) => findings.map((finding) => {
    const source = finding.comparison ?? finding.baseline;
    const evidence = [
      ["Occurrence", source?.occurrenceId ?? "not recorded"],
      ["Pattern", source?.patternId ?? "not recorded"],
      ["Locator", source?.locator ?? "not recorded"],
      ["WCAG", (finding.wcagSc ?? []).join(", ") || "not recorded"],
      ["ACT", (finding.actRuleIds ?? []).join(", ") || "not recorded"],
      ["Evidence", source?.evidenceRef ?? "not recorded"]
    ];
    const evidenceHtml = `<details><summary>Evidence for ${escapeHtml(finding.ruleId)}</summary><dl>${evidence.map(([term, value]) => `<dt>${escapeHtml(term)}</dt><dd>${escapeHtml(String(value).slice(0, 500))}</dd>`).join("")}</dl></details>`;
    return `<tr><th scope="row">${escapeHtml(finding.page.comparisonUrl ?? finding.page.baselineUrl)}</th><td>${escapeHtml(finding.engineLabel)}</td><td>${escapeHtml(finding.ruleId)}</td><td>${escapeHtml(finding.title)}</td><td>${escapeHtml(finding.confidence)}</td><td>${finding.confirmedRemediation ? "yes" : "no"}</td><td>${escapeHtml(finding.qualification ?? "None")}</td><td>${evidenceHtml}</td></tr>`;
  }).join("");
  const allHtmlFindings = Object.values(comparison.findings).flat();
  const htmlFindingsById = new Map(allHtmlFindings.map((finding) => [finding.comparisonId, finding]));
  const componentSectionHtml = comparison.componentAssociations ? (() => {
    const regionEntries = Object.entries(comparison.componentAssociations.bySemanticRegion ?? {}).sort(([a], [b]) => a.localeCompare(b));
    const regionTable = regionEntries.length === 0
      ? "<p>No semantic-region associations were available.</p>"
      : `<table><caption>Component and semantic-region evidence</caption><thead><tr><th scope="col">Region</th><th scope="col">Findings</th><th scope="col">Pages</th><th scope="col">Basis</th><th scope="col">Confidence</th></tr></thead><tbody>${regionEntries.map(([region, ids]) => {
        const associated = ids.map((id) => htmlFindingsById.get(id)).filter(Boolean);
        const pages = new Set(associated.map((finding) => finding.page.logicalPageId));
        const explicit = associated.filter((finding) => finding.componentContext?.basis === "explicit-component").length;
        return `<tr><th scope="row">${escapeHtml(region)}</th><td>${ids.length}</td><td>${pages.size}</td><td>${explicit === associated.length ? "explicit-component" : "selector-token"}</td><td>${explicit === associated.length ? "high" : "low"}</td></tr>`;
      }).join("")}</tbody></table>`;
    const componentIdEntries = Object.entries(comparison.componentAssociations.byComponentId ?? {}).sort(([a], [b]) => a.localeCompare(b));
    const componentIdTable = componentIdEntries.length === 0 ? "" : `<h3>Explicit component identifiers</h3><table><caption>Findings linked to explicit component identifiers</caption><thead><tr><th scope="col">Component ID</th><th scope="col">Findings</th></tr></thead><tbody>${componentIdEntries.map(([componentId, ids]) => `<tr><th scope="row">${escapeHtml(componentId)}</th><td>${ids.length}</td></tr>`).join("")}</tbody></table>`;
    return `<section aria-labelledby="components-heading"><h2 id="components-heading">Component and semantic-region evidence</h2><p><strong>Regions are selector-derived candidates unless an explicit component identifier is present. This is not a component-ownership claim.</strong></p>${regionTable}${componentIdTable}<p>Findings with a semantic region: ${comparison.componentAssociations.summary.withSemanticRegion}. Findings with an explicit component identifier: ${comparison.componentAssociations.summary.withComponentId}. Findings with no association: ${comparison.componentAssociations.summary.unassociated}.</p></section>`;
  })() : "";
  const externalSectionHtml = comparison.externalInvestigations?.length ? (() => {
    const rows = comparison.externalInvestigations.map((reference) => {
      const component = reference.relatedComponent
        ? reference.relatedComponent.componentId ?? reference.relatedComponent.componentTypeId ?? reference.relatedComponent.componentLabel ?? "not recorded"
        : "not recorded";
      return `<tr><th scope="row">${escapeHtml(reference.investigationId)}</th><td>${escapeHtml(reference.sourceProject)}</td><td>${escapeHtml(reference.relatedPageUrl ?? "not recorded")}</td><td>${escapeHtml(component)}</td><td>${escapeHtml(reference.referencedAt)}</td><td><a href="${escapeHtml(reference.sourceResultUrl)}" target="_blank" rel="noopener noreferrer">Open ${escapeHtml(reference.investigationId)}</a></td><td>${escapeHtml(reference.linkage.confidence)}</td></tr>`;
    }).join("");
    return `<section aria-labelledby="external-heading"><h2 id="external-heading">Related performance and energy investigations</h2><p><strong>Linked metadata only.</strong> An external investigation is not an accessibility failure; no external URL was fetched.</p><table><caption>External investigations linked to this comparison</caption><thead><tr><th scope="col">Investigation</th><th scope="col">Source</th><th scope="col">Related page</th><th scope="col">Component</th><th scope="col">Date</th><th scope="col">Link</th><th scope="col">Linkage</th></tr></thead><tbody>${rows}</tbody></table><p>${escapeHtml(comparison.externalInvestigations[0].boundary)}</p></section>`;
  })() : "";
  const manualTasks = comparison.manualVerification ?? [];
  const manualSectionHtml = `<section aria-labelledby="manual-heading"><h2 id="manual-heading">Manual verification</h2><p>These tasks remain necessary after automated comparison; passing automated checks does not establish conformance or functional equivalence.</p>${manualTasks.length ? `<ul>${manualTasks.map((task) => `<li><strong>${escapeHtml(task.task)}</strong><br><span>${escapeHtml(task.reason)}</span></li>`).join("")}</ul>` : "<p>Review keyboard, screen-reader, zoom, forced-colours and reduced-motion behaviour manually.</p>"}</section>`;
  const tocItems = [
    ["summary-heading", "What changed"],
    ["conditions-heading", "Testing conditions"],
    ["pages-heading", "Page coverage"],
    ...(comparison.componentAssociations ? [["components-heading", "Component and region evidence"]] : []),
    ...(comparison.externalInvestigations?.length ? [["external-heading", "Related investigations"]] : []),
    ["section-new", "New findings"],
    ["section-persistent", "Persistent findings"],
    ["section-details-changed", "Changed details"],
    ["section-not-observed", "No longer observed"],
    ["section-not-evaluated", "Not evaluated"],
    ["manual-heading", "Manual verification"],
    ["coverage-heading", "Coverage gaps"],
    ["limitations-heading", "Limitations"]
  ];
  const tocHtml = `<nav aria-labelledby="toc-heading"><h2 id="toc-heading">On this page</h2><ul>${tocItems.map(([id, label]) => `<li><a href="#${id}">${escapeHtml(label)}</a></li>`).join("")}</ul></nav>`;
  const sectionHtml = sections.map(([key, heading]) => `<section aria-labelledby="section-${key}"><h2 id="section-${key}">${heading}</h2>${(comparison.findings[key] ?? []).length === 0 ? "<p>None.</p>" : `<table><caption>${heading}</caption><thead><tr><th scope="col">Page</th><th scope="col">Engine</th><th scope="col">Rule</th><th scope="col">Finding</th><th scope="col">Confidence</th><th scope="col">Confirmed remediation</th><th scope="col">Qualification</th><th scope="col">Evidence</th></tr></thead><tbody>${rowsFor(comparison.findings[key] ?? [])}</tbody></table>`}</section>`).join("");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<title>Accessibility comparison</title>
<style>
:root{color-scheme:light dark;--bg:#fff;--fg:#1f2328;--muted:#57606a;--border:#d0d7de;--accent:#0969da;--surface:#f6f8fa}
@media (prefers-color-scheme:dark){:root{--bg:#0d1117;--fg:#e6edf3;--muted:#8b949e;--border:#30363d;--accent:#58a6ff;--surface:#161b22}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:16px/1.5 system-ui,sans-serif}
.skip-link{position:absolute;left:-999px;top:0;background:var(--surface);color:var(--fg);padding:.75rem;z-index:10}.skip-link:focus{left:0}
header,main{max-width:70rem;margin:0 auto;padding:1rem}header{border-bottom:1px solid var(--border)}h1,h2{line-height:1.2}
table{width:100%;border-collapse:collapse;margin:1rem 0}caption{text-align:left;font-weight:700;margin-bottom:.5rem}
th,td{border:1px solid var(--border);padding:.5rem;text-align:left;vertical-align:top;overflow-wrap:anywhere}th{background:var(--surface)}
.notice{border-left:4px solid var(--accent);padding:.75rem 1rem;background:var(--surface)}a{color:var(--accent)}
h3{line-height:1.2}.summary-list{display:flex;flex-wrap:wrap;gap:.5rem 1.5rem;list-style:none;padding:0}
.status-legend{display:grid;grid-template-columns:max-content 1fr;gap:.25rem 1rem}.status-legend dt{font-weight:700}
details{margin:.25rem 0}summary{cursor:pointer}summary:focus-visible{outline:3px solid currentColor;outline-offset:3px}
dl{margin:.5rem 0}dt{font-weight:700}dd{margin:0 0 .25rem 1rem;overflow-wrap:anywhere}
@media (max-width:48rem){th,td{font-size:.85rem;padding:.35rem}h1{font-size:1.6rem}}
@media print{thead{display:table-header-group}tr{break-inside:avoid}}
@media (forced-colors:active){th,td{border:1px solid CanvasText}.notice{border:2px solid CanvasText}}
@media (prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;transition:none!important;animation:none!important}}
</style>
</head>
<body>
<a class="skip-link" href="#main-content">Skip to main content</a>
<header><h1>Accessibility comparison</h1><p class="notice"><strong>No longer observed does not mean fixed.</strong> Absence from one comparison is not proof of remediation. Automated checks cannot establish WCAG conformance or functional equivalence.</p></header>
<main id="main-content">
${tocHtml}
<section aria-labelledby="summary-heading"><h2 id="summary-heading">What changed</h2>
<p>Baseline: ${escapeHtml(comparison.baseline.scanTitle ?? "untitled")} (${escapeHtml(comparison.baseline.scannedAt ?? "date not recorded")}; release: ${escapeHtml(comparison.baseline.release ?? "not supplied")}). Comparison: ${escapeHtml(comparison.comparison.scanTitle ?? "untitled")} (${escapeHtml(comparison.comparison.scannedAt ?? "date not recorded")}; release: ${escapeHtml(comparison.comparison.release ?? "not supplied")}).</p>
<ul class="summary-list">
<li><strong>${comparison.summary.newCount}</strong> new finding${comparison.summary.newCount === 1 ? "" : "s"}</li>
<li><strong>${comparison.summary.persistentCount}</strong> persistent finding${comparison.summary.persistentCount === 1 ? "" : "s"}</li>
<li><strong>${comparison.summary.detailsChangedCount}</strong> finding${comparison.summary.detailsChangedCount === 1 ? "" : "s"} with changed details</li>
<li><strong>${comparison.summary.notObservedCount}</strong> no longer observed — not proof of remediation</li>
<li><strong>${comparison.summary.notEvaluatedCount}</strong> not evaluated — coverage gap</li>
<li><strong>${comparison.summary.pagesCompared}</strong> page${comparison.summary.pagesCompared === 1 ? "" : "s"} compared; <strong>${comparison.summary.confirmedRemediations}</strong> confirmed remediation${comparison.summary.confirmedRemediations === 1 ? "" : "s"}</li>
<li>Testing conditions compatible: <strong>${comparison.conditions.compatible ? "yes" : "no"}</strong></li>
</ul>
<p class="notice"><strong>No longer observed does not mean fixed.</strong> Absence from this comparison is not proof of remediation.</p>
<h3>Status terms</h3>
<dl class="status-legend">
<dt>New</dt><dd>A finding present in the comparison and not matched in the baseline, on a page and engine evaluated in both scans.</dd>
<dt>Persistent</dt><dd>The same finding identity and details appear in both scans.</dd>
<dt>Changed details</dt><dd>The finding identity persists, but its locator, message, HTML, WCAG mapping or other detail changed.</dd>
<dt>No longer observed</dt><dd>The baseline finding is absent, but absence is not proof of remediation.</dd>
<dt>Not evaluated</dt><dd>A page, engine or evidence source was missing or failed; this is not a clean result.</dd>
</dl>
</section>
<section aria-labelledby="conditions-heading"><h2 id="conditions-heading">Testing conditions</h2>
<table><caption>Browser, viewport, colour scheme and engines used by each scan</caption>
<thead><tr><th scope="col">Field</th><th scope="col">Baseline</th><th scope="col">Comparison</th></tr></thead>
<tbody>
<tr><th scope="row">Scan</th><td>${escapeHtml(comparison.baseline.scanId)}</td><td>${escapeHtml(comparison.comparison.scanId)}</td></tr>
<tr><th scope="row">Release</th><td>${escapeHtml(comparison.baseline.release ?? "not supplied")}</td><td>${escapeHtml(comparison.comparison.release ?? "not supplied")}</td></tr>
<tr><th scope="row">Browser</th><td>${escapeHtml(comparison.conditions.baseline?.browser ?? "unknown")}</td><td>${escapeHtml(comparison.conditions.comparison?.browser ?? "unknown")}</td></tr>
<tr><th scope="row">Viewport</th><td>${escapeHtml(comparison.conditions.baseline?.viewport ? `${comparison.conditions.baseline.viewport.width}x${comparison.conditions.baseline.viewport.height}` : "unknown")}</td><td>${escapeHtml(comparison.conditions.comparison?.viewport ? `${comparison.conditions.comparison.viewport.width}x${comparison.conditions.comparison.viewport.height}` : "unknown")}</td></tr>
<tr><th scope="row">Colour scheme</th><td>${escapeHtml(comparison.conditions.baseline?.colorScheme ?? "unknown")}</td><td>${escapeHtml(comparison.conditions.comparison?.colorScheme ?? "unknown")}</td></tr>
<tr><th scope="row">Engines</th><td>${escapeHtml(comparison.engines.baseline.join(", "))}</td><td>${escapeHtml(comparison.engines.comparison.join(", "))}</td></tr>
</tbody></table>
${comparison.conditions.differences.length ? `<p><strong>Condition differences:</strong></p><ul>${comparison.conditions.differences.map((difference) => `<li>${escapeHtml(difference.field)}: baseline ${escapeHtml(JSON.stringify(difference.baseline))}; comparison ${escapeHtml(JSON.stringify(difference.comparison))}</li>`).join("")}</ul>` : "<p>No report-level testing-condition differences were recorded.</p>"}
</section>
<section aria-labelledby="pages-heading"><h2 id="pages-heading">Page coverage</h2>
${comparison.pageMappings.length === 0 ? "<p>No pages were paired. Different URLs require an explicit page mapping.</p>" : `<table><caption>Pages paired between the baseline and comparison scans</caption><thead><tr><th scope="col">Logical page</th><th scope="col">Baseline URL</th><th scope="col">Comparison URL</th><th scope="col">Mapping</th><th scope="col">Baseline evaluated</th><th scope="col">Comparison evaluated</th></tr></thead><tbody>${comparison.pageMappings.map((page) => `<tr><th scope="row">${escapeHtml(page.logicalPageId)}</th><td>${escapeHtml(page.baselineUrl)}</td><td>${escapeHtml(page.comparisonUrl)}</td><td>${escapeHtml(page.mapping)}</td><td>${page.baselineEvaluated ? "yes" : "no"}</td><td>${page.comparisonEvaluated ? "yes" : "no"}</td></tr>`).join("")}</tbody></table>`}
</section>
${componentSectionHtml}
${externalSectionHtml}
${sectionHtml}
${manualSectionHtml}
<section aria-labelledby="coverage-heading"><h2 id="coverage-heading">Coverage gaps</h2>${comparison.coverageGaps.length === 0 ? "<p>None recorded.</p>" : `<ul>${comparison.coverageGaps.map((gap) => `<li>${escapeHtml(gap.kind)}: ${escapeHtml(gap.url ?? gap.logicalPageId ?? "")} ${escapeHtml(gap.reason ?? gap.baselineError ?? gap.comparisonError ?? "")}</li>`).join("")}</ul>`}</section>
<section aria-labelledby="limitations-heading"><h2 id="limitations-heading">Limitations</h2><ul>${comparison.limitations.map((limitation) => `<li>${escapeHtml(limitation)}</li>`).join("")}</ul></section>
</main>
</body>
</html>
`;
}


function parseArgs(argv) {
  const options = { pageMappings: [] };
  const positional = [];
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (["--page-map", "--baseline-release", "--comparison-release", "--external-references", "--out", "--summary", "--csv", "--html", "--now"].includes(arg)) {
      const value = argv[index + 1];
      if (!value) throw new Error(`${arg} requires a value.`);
      index += 1;
      if (arg === "--page-map") options.pageMappings.push(value);
      else options[arg.slice(2).replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = value;
      continue;
    }
    if (arg.startsWith("--")) throw new Error(`Unknown option '${arg}'.`);
    positional.push(arg);
  }
  if (positional.length !== 2) throw new Error("Usage: node scanner/compare-scans.mjs <baseline-report.json> <comparison-report.json> [options]");
  options.baselinePath = positional[0];
  options.comparisonPath = positional[1];
  return options;
}

function writeOutput(path, content) {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, "utf8");
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    process.exitCode = 2;
    return;
  }
  let baseline;
  let comparison;
  try {
    baseline = JSON.parse(readFileSync(args.baselinePath, "utf8"));
    comparison = JSON.parse(readFileSync(args.comparisonPath, "utf8"));
  } catch (error) {
    console.error(`Could not read report JSON: ${error.message}`);
    process.exitCode = 2;
    return;
  }
  const result = compareScanReports(baseline, comparison, {
    baselinePath: args.baselinePath,
    comparisonPath: args.comparisonPath,
    baselineRelease: args.baselineRelease ?? null,
    comparisonRelease: args.comparisonRelease ?? null,
    pageMappings: args.pageMappings,
    generatedAt: args.now ?? new Date().toISOString()
  });
  if (!result.ok) {
    for (const error of result.errors) console.error(`Error: ${error}`);
    process.exitCode = 1;
    return;
  }
  let value = result.value;
  if (args.externalReferences) {
    let references;
    try {
      references = JSON.parse(readFileSync(args.externalReferences, "utf8"));
    } catch (error) {
      console.error(`Could not read external references: ${error.message}`);
      process.exitCode = 2;
      return;
    }
    const attached = attachExternalInvestigations(value, references);
    if (!attached.ok) {
      for (const error of attached.errors) console.error(`Error: ${error}`);
      process.exitCode = 1;
      return;
    }
    for (const warning of attached.warnings) console.error(`Warning: ${warning}`);
    value = attached.value;
  }
  if (args.out) writeOutput(args.out, `${JSON.stringify(value, null, 2)}\n`);
  else process.stdout.write(`${JSON.stringify(value, null, 2)}\n`);
  if (args.summary) writeOutput(args.summary, formatComparisonMarkdown(value));
  if (args.csv) writeOutput(args.csv, comparisonToCsv(value));
  if (args.html) writeOutput(args.html, formatComparisonHtml(value));
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  main();
}
