/**
 * Accessibility engine version check.
 *
 * Compares the installed version of each accessibility scanning engine
 * dependency against the latest version published to npm, so stale engines
 * (and the manually curated rule metadata that describes them) can be caught
 * before they drift too far out of date.
 *
 * Design principles:
 * - stdout: JSON output only (follows project convention)
 * - stderr: all progress and diagnostic messages
 * - Uses `npm view <pkg> version` (spawnSync with an argument array) rather
 *   than shelling out with a template string, per project security guidance
 *
 * Usage (CLI):
 *   node scanner/check-engine-versions.mjs
 *
 * Stdout:
 *   JSON object:
 *   {
 *     checkedAt: string,     // ISO timestamp
 *     outdated: [{ name, installed, latest }],
 *     upToDate: [{ name, installed, latest }],
 *     errors: [{ name, error }]
 *   }
 */

import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const PACKAGE_JSON_PATH = fileURLToPath(new URL("../package.json", import.meta.url));

// The npm package names for each accessibility scanning engine this project uses.
export const ENGINE_PACKAGES = [
  "@siteimprove/alfa-cli",
  "@siteimprove/alfa-formatter-earl",
  "@siteimprove/alfa-formatter-json",
  "@axe-core/playwright",
  "accessibility-checker",
  "@accesslint/core",
  "@qualweb/core",
  "@qualweb/act-rules",
  "@qualweb/qw-page"
];

/**
 * Read the declared (package.json) version range for a dependency.
 * @param {string} name
 * @returns {string | null}
 */
export function getDeclaredRange(name) {
  const pkg = JSON.parse(readFileSync(PACKAGE_JSON_PATH, "utf8"));
  return pkg.dependencies?.[name] ?? pkg.devDependencies?.[name] ?? null;
}

/**
 * Fetch the latest published version of an npm package.
 * @param {string} name
 * @returns {string} the latest version string
 */
export function fetchLatestVersion(name) {
  const result = spawnSync("npm", ["view", name, "version"], {
    encoding: "utf8",
    timeout: 30_000
  });
  if (result.status !== 0) {
    throw new Error(result.stderr?.trim() || `npm view failed for ${name}`);
  }
  return result.stdout.trim();
}

/**
 * Compare two dotted version strings.
 * @param {string} a
 * @param {string} b
 * @returns {number} negative if a<b, positive if a>b, 0 if equal
 */
export function compareVersions(a, b) {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const diff = (pa[i] || 0) - (pb[i] || 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

async function main() {
  const outdated = [];
  const upToDate = [];
  const errors = [];

  for (const name of ENGINE_PACKAGES) {
    const declaredRange = getDeclaredRange(name);
    if (!declaredRange) {
      errors.push({ name, error: "not found in package.json" });
      continue;
    }
    const installed = declaredRange.replace(/^[\^~]/, "");

    try {
      process.stderr.write(`Checking ${name}...\n`);
      const latest = fetchLatestVersion(name);
      if (compareVersions(installed, latest) < 0) {
        outdated.push({ name, installed, latest });
      } else {
        upToDate.push({ name, installed, latest });
      }
    } catch (err) {
      errors.push({ name, error: err.message });
    }
  }

  const result = {
    checkedAt: new Date().toISOString(),
    outdated,
    upToDate,
    errors
  };

  process.stdout.write(JSON.stringify(result, null, 2) + "\n");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
