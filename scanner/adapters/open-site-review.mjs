import {
  createMetric,
  createSourceRef,
  normalizeUrl,
  stableId
} from "../performance-evidence.mjs";
import { EvidenceAdapterError } from "./errors.mjs";

export const OPEN_SITE_REVIEW_ADAPTER_VERSION = "1.0.0";

function isUrl(value) {
  return typeof value === "string" && /^https?:\/\//i.test(value);
}

function pageFor(url, pages, pagesByUrl, sourceId) {
  let normalizedUrl;
  try {
    normalizedUrl = normalizeUrl(url);
  } catch {
    return null;
  }
  const existing = pagesByUrl.get(normalizedUrl);
  if (existing) return existing;
  const page = {
    id: stableId("osr-pg", normalizedUrl),
    url,
    normalizedUrl,
    familyId: null,
    sourceIds: [sourceId],
    contexts: [{
      browser: null,
      viewport: null,
      profile: null,
      method: "static-url-analysis",
      sourceId
    }],
    metrics: [],
    sourceRefs: [createSourceRef(sourceId, "report.findings")],
    limitations: ["Static analysis of a URL, not a browser performance measurement."]
  };
  pages.push(page);
  pagesByUrl.set(normalizedUrl, page);
  return page;
}

/**
 * Adapter D: import Open Site Review (including Project Wallace CSS quality).
 *
 * These are candidate explanations. A CSS quality warning or compatibility
 * finding has no demonstrated runtime cost and is never written as one.
 *
 * @param {{data: unknown, source: object}} input
 * @returns {object} Adapter fragment
 */
export function adaptOpenSiteReview({ data, source }) {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new EvidenceAdapterError("Open Site Review evidence must be a JSON object.", "invalid-payload");
  }
  const report = data.report ?? data;
  if (!report || typeof report !== "object" || !Array.isArray(report.findings)) {
    throw new EvidenceAdapterError(
      "Open Site Review payload has no report.findings array. Use the JSON output of `open-site-review --format json`.",
      "missing-findings"
    );
  }

  const pages = [];
  const pagesByUrl = new Map();
  const findings = [];
  const limitations = [];

  const targetFor = (file, { asPage = true } = {}) => {
    if (asPage && isUrl(file)) {
      const page = pageFor(file, pages, pagesByUrl, source.id);
      if (page) return { target: { type: "page", id: page.id }, page };
    }
    return { target: { type: "site", id: stableId("site", "open-site-review", 12) }, page: null };
  };

  for (const [index, finding] of report.findings.entries()) {
    const { target } = targetFor(finding.file);
    const unsupported = typeof finding.unsupportedPercent === "number"
      ? finding.unsupportedPercent
      : finding.weightedUnsupportedPercent;
    const metric = typeof unsupported === "number"
      ? createMetric({
        name: "unsupported-browser-share",
        value: unsupported,
        unit: "percent",
        scope: target.type === "page" ? "page" : "site",
        sourceId: source.id,
        measurementSourceId: null,
        tool: "open-site-review",
        toolVersion: null,
        browser: null,
        method: `Browserslist support check (${finding.supportSource ?? "configured targets"})`,
        boundary: "static compatibility analysis",
        evidenceRef: `report.findings[${index}].unsupportedPercent`,
        confidence: "medium",
        limitations: [
          "A static compatibility estimate; it is not a runtime performance cost."
        ]
      })
      : null;
    findings.push({
      id: stableId("osr-fnd", `${finding.id}:${finding.file}:${finding.line ?? "no-line"}`),
      sourceId: source.id,
      sourceFindingId: finding.id ?? null,
      kind: "compatibility-candidate",
      title: finding.title ?? finding.id ?? "Open Site Review finding",
      target,
      metric,
      evidenceClass: "candidate-explanation",
      confidence: finding.severity === "high" ? "medium" : "low",
      evidenceRef: `report.findings[${index}]`,
      limitations: [
        finding.message ?? "Static code/compatibility finding.",
        "Candidate explanation only: no runtime cost or performance ownership is demonstrated.",
        ...(finding.supportError ? [`Support data error: ${finding.supportError}`] : [])
      ]
    });
  }

  for (const [index, entry] of (report.cssAnalysis ?? []).entries()) {
    const { target } = targetFor(entry.file, { asPage: false });
    if (entry.error) {
      findings.push({
        id: stableId("osr-css-error", `${entry.file}:${index}`),
        sourceId: source.id,
        sourceFindingId: null,
        kind: "css-analysis-error",
        title: "CSS quality analysis failed",
        target,
        metric: null,
        evidenceClass: "candidate-explanation",
        confidence: "low",
        evidenceRef: `report.cssAnalysis[${index}].error`,
        limitations: [entry.error]
      });
      continue;
    }

    const quality = entry.quality;
    if (quality) {
      for (const [name, value] of [
        ["css-performance-score", quality.performance],
        ["css-maintainability-score", quality.maintainability],
        ["css-complexity-score", quality.complexity]
      ]) {
        if (typeof value !== "number") continue;
        findings.push({
          id: stableId("osr-css-score", `${entry.file}:${name}`),
          sourceId: source.id,
          sourceFindingId: null,
          kind: "css-quality",
          title: name,
          target,
          metric: createMetric({
            name,
            value,
            unit: "score",
            scope: target.type === "page" ? "page" : "site",
            sourceId: source.id,
            measurementSourceId: null,
            tool: "project-wallace",
            toolVersion: null,
            browser: null,
            method: "Project Wallace CSS code quality, imported through Open Site Review",
            boundary: "static analysis",
            evidenceRef: `report.cssAnalysis[${index}].quality`,
            confidence: "medium",
            limitations: [
              "A CSS quality score, not a measured runtime cost.",
              "No causal link to page performance is established."
            ]
          }),
          evidenceClass: "candidate-explanation",
          confidence: "medium",
          evidenceRef: `report.cssAnalysis[${index}].quality`,
          limitations: ["Candidate explanation only; verify with runtime evidence before proposing an experiment."]
        });
      }
      for (const [violationIndex, violation] of (quality.violations ?? []).entries()) {
        findings.push({
          id: stableId("osr-css-violation", `${entry.file}:${violation.id}:${violationIndex}`),
          sourceId: source.id,
          sourceFindingId: violation.id ?? null,
          kind: "css-quality-violation",
          title: violation.id ?? "CSS quality violation",
          target,
          metric: typeof violation.score === "number"
            ? createMetric({
              name: "css-quality-score-impact",
              value: violation.score,
              unit: "score",
              scope: target.type === "page" ? "page" : "site",
              sourceId: source.id,
              measurementSourceId: null,
              tool: "project-wallace",
              toolVersion: null,
              browser: null,
              method: "Project Wallace CSS code quality violation",
              boundary: "static analysis",
              evidenceRef: `report.cssAnalysis[${index}].quality.violations[${violationIndex}]`,
              confidence: "medium",
              limitations: ["A static quality score impact, not a runtime performance cost."]
            })
            : null,
          evidenceClass: "candidate-explanation",
          confidence: "medium",
          evidenceRef: `report.cssAnalysis[${index}].quality.violations[${violationIndex}]`,
          limitations: ["Candidate explanation only; no demonstrated runtime cost."]
        });
      }
    }
  }

  if (Array.isArray(report.sourceErrors) && report.sourceErrors.length > 0) {
    limitations.push(`Open Site Review reported ${report.sourceErrors.length} source fetch error(s).`);
  }
  limitations.push(
    "Open Site Review analyses code and compatibility; it does not measure page performance, energy or component ownership."
  );

  return {
    sourceMeta: {
      tool: "open-site-review",
      toolVersion: null,
      collectedAt: null,
      schemaVersion: null,
      limitations
    },
    pages,
    pageFamilies: [],
    componentTypes: [],
    componentInstances: [],
    resources: [],
    findings,
    experiments: [],
    investigation: [],
    measurementSources: [],
    coverage: {
      discoveredPages: pages.length > 0 ? pages.length : null,
      inspectedPages: pages.length > 0 ? pages.length : null,
      basis: "Open Site Review scanned files/URLs",
      limitations: [
        `Source scanned ${report.scannedFiles ?? "an unstated number of"} file(s); this is not a site page inventory.`
      ]
    },
    limitations
  };
}
