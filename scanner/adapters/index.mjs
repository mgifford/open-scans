import { adaptFirefoxEnergyScanner } from "./firefox-energy-scanner.mjs";
import { adaptOpenScansReport } from "./open-scans-report.mjs";
import { adaptOpenSiteReview } from "./open-site-review.mjs";
import { adaptVitalCore } from "./vital-core.mjs";
import { EvidenceAdapterError } from "./errors.mjs";

export const ADAPTER_VERSIONS = Object.freeze({
  "open-scans-report": "1.0.0",
  "firefox-energy-scanner": "1.0.0",
  "vital-core": "1.0.0",
  "open-site-review": "1.0.0"
});

/**
 * Select the adapter for a supported source type. There is no heuristic,
 * fallback or remote MCP discovery: an unsupported source is an error.
 * @param {string} type
 * @returns {(input: {data: unknown, source: object}) => object}
 */
export function adapterForType(type) {
  switch (type) {
    case "open-scans-report":
      return adaptOpenScansReport;
    case "firefox-energy-scanner":
      return adaptFirefoxEnergyScanner;
    case "vital-core":
      return adaptVitalCore;
    case "open-site-review":
      return adaptOpenSiteReview;
    default:
      throw new EvidenceAdapterError(
        `Unsupported evidence source type '${type}'. Supported: ${Object.keys(ADAPTER_VERSIONS).join(", ")}.`,
        "unsupported-source-type"
      );
  }
}

/**
 * Adapt one loaded source. Adapter errors are returned as actionable errors,
 * never swallowed into an empty investigation.
 * @param {{type: string, data: unknown, source: object}} input
 * @returns {{ok: boolean, errors: string[], fragment: object|null}}
 */
export function adaptSource({ type, data, source }) {
  try {
    const adapter = adapterForType(type);
    return { ok: true, errors: [], fragment: adapter({ data, source }) };
  } catch (error) {
    if (error instanceof EvidenceAdapterError) {
      return { ok: false, errors: [error.message], fragment: null };
    }
    return {
      ok: false,
      errors: [`Adapter for '${type}' failed: ${error.message}`],
      fragment: null
    };
  }
}
