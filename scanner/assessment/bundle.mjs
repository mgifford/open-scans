/**
 * Build the self-contained browser bundle for the assessment workspace.
 *
 * The bundle is `records.mjs` + `runtime.mjs` concatenated, with the ES module
 * `export` keyword removed, wrapped in an IIFE. One source of truth, one
 * documented transformation. The transform is tested: the bundle must parse and
 * expose its API when executed with no document.
 *
 * @module assessment/bundle
 */
import { readFileSync } from "node:fs";

const RECORDS_PATH = new URL("./records.mjs", import.meta.url);
const RUNTIME_PATH = new URL("./runtime.mjs", import.meta.url);

/**
 * Remove ES module export syntax from source that will be concatenated into one
 * function scope. Throws on code that cannot be inlined safely.
 *
 * @param {string} source
 * @param {string} label used in error messages
 * @returns {string}
 */
export function toInlineScript(source, label = "module") {
  if (/^\s*import\s+/m.test(source)) {
    throw new Error(`${label} uses an import statement and cannot be inlined`);
  }
  if (/(^|\n)\s*export\s+default\b/.test(source)) {
    throw new Error(`${label} uses export default and cannot be inlined`);
  }
  const stripped = source.replace(/^export\s+(?=(const|let|var|function|class|async)\b)/gm, "");
  if (/^\s*export\s/m.test(stripped)) {
    throw new Error(`${label} has export syntax that the inliner does not support`);
  }
  return stripped;
}

/**
 * Concatenate module sources into one callable script body.
 *
 * @param {{records: string, runtime: string}} sources
 * @returns {string} script body (no <script> tags)
 */
export function composeBundle({ records, runtime }) {
  const body = [
    "/* Open Scans assessment runtime — generated bundle. Do not edit. */",
    "(function () {",
    "'use strict';",
    toInlineScript(records, "records.mjs"),
    toInlineScript(runtime, "runtime.mjs"),
    "})();"
  ].join("\n");

  for (const forbidden of ["</script", "<!--", "<script"]) {
    if (body.toLowerCase().includes(forbidden)) {
      throw new Error(`Assessment bundle contains ${forbidden}, which cannot be inlined in HTML`);
    }
  }
  return body;
}

let cachedBundle = null;
let cachedScript = null;

/** Read the module sources from disk and compose the bundle. */
export function buildAssessmentRuntimeBundle(options = {}) {
  if (!options.records && !options.runtime && !options.recordsPath && !options.runtimePath && cachedBundle) {
    return cachedBundle;
  }
  const records = options.records ?? readFileSync(options.recordsPath ?? RECORDS_PATH, "utf8");
  const runtime = options.runtime ?? readFileSync(options.runtimePath ?? RUNTIME_PATH, "utf8");
  const bundle = composeBundle({ records, runtime });
  if (!options.records && !options.runtime && !options.recordsPath && !options.runtimePath) cachedBundle = bundle;
  return bundle;
}

/** Wrap the bundle in a `<script>` element for the report. */
export function renderAssessmentRuntimeScript(options = {}) {
  if (!Object.keys(options).length && cachedScript) return cachedScript;
  const script = `<script>\n${buildAssessmentRuntimeBundle(options)}\n  </script>`;
  if (!Object.keys(options).length) cachedScript = script;
  return script;
}

/** Reset the bundle caches. Intended for tests. */
export function resetBundleCache() {
  cachedBundle = null;
  cachedScript = null;
}
