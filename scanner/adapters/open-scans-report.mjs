import {
  createSourceRef,
  normalizeUrl,
  stableId
} from "../performance-evidence.mjs";
import { EvidenceAdapterError } from "./errors.mjs";

export const OPEN_SCANS_ADAPTER_VERSION = "1.0.0";

function pageContext(result, report, sourceId) {
  const context = result.scanContext ?? report.scanContext ?? null;
  const width = Number(context?.viewport?.width);
  const height = Number(context?.viewport?.height);
  return {
    browser: context?.browser ?? null,
    viewport: Number.isInteger(width) && Number.isInteger(height) ? { width, height } : null,
    profile: width > 0 ? (width < 600 ? "mobile" : "desktop") : null,
    method: "accessibility-scan",
    sourceId
  };
}

/**
 * Adapter A: reuse an existing Open Scans report.
 *
 * The report supplies page URLs, redirect state, titles and the recorded
 * browser/viewport context. It supplies no performance metric. Accessibility
 * findings are retained as context-only records; an accessibility failure is
 * not evidence of a performance defect.
 *
 * @param {{data: unknown, source: object}} input
 * @returns {object} Adapter fragment
 */
export function adaptOpenScansReport({ data, source }) {
  if (!data || typeof data !== "object" || Array.isArray(data)) {
    throw new EvidenceAdapterError("Open Scans report must be a JSON object.", "invalid-report");
  }
  if (!Array.isArray(data.results)) {
    throw new EvidenceAdapterError(
      "Open Scans report has no results array; this does not look like a committed report.json.",
      "missing-results"
    );
  }

  const pages = [];
  const findings = [];
  let inspected = 0;

  for (const [index, result] of data.results.entries()) {
    const url = result.finalUrl || result.submittedUrl;
    if (!url) {
      throw new EvidenceAdapterError(`Open Scans result ${index} has no finalUrl or submittedUrl.`, "missing-url");
    }
    const normalizedUrl = normalizeUrl(url);
    const pageId = stableId("os-pg", normalizedUrl);
    const page = {
      id: pageId,
      url,
      normalizedUrl,
      familyId: null,
      sourceIds: [source.id],
      contexts: [pageContext(result, data, source.id)],
      metrics: [],
      sourceRefs: [createSourceRef(source.id, `results[${index}]`)],
      limitations: [
        "Open Scans records an accessibility scan, not a performance measurement.",
        "The result's elapsedMs is not imported as a page performance metric because it includes audit time."
      ]
    };
    if (result.ok) inspected += 1;
    pages.push(page);

    findings.push({
      id: stableId("os-a11y", `${pageId}:${index}`),
      sourceId: source.id,
      sourceFindingId: null,
      kind: "accessibility-context",
      title: "Accessibility scan context retained for this page",
      target: { type: "page", id: pageId },
      metric: null,
      evidenceClass: "context-only",
      confidence: "high",
      evidenceRef: `results[${index}]`,
      limitations: [
        "Accessibility results are contextual only. They do not imply a performance defect and are not converted into a performance metric."
      ]
    });
  }

  const reportLimitations = [
    "Open Scans reports have no Lighthouse, resource-waterfall, trace or energy evidence.",
    "A page missing a performance measurement remains unmeasured; it is not treated as zero."
  ];

  return {
    sourceMeta: {
      tool: "open-scans",
      toolVersion: null,
      collectedAt: data.scannedAt ?? null,
      schemaVersion: null,
      limitations: reportLimitations
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
      discoveredPages: data.results.length,
      inspectedPages: inspected,
      basis: "Open Scans report results",
      limitations: [
        `Report accepted ${Number.isInteger(data.acceptedCount) ? data.acceptedCount : "an unknown number of"} URLs.`,
        "Pages excluded from the original scan are not represented."
      ]
    },
    limitations: reportLimitations
  };
}
