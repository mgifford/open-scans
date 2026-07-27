/**
 * a11y/pattern/v1 and a11y/occurrence/v1 fingerprint computation.
 *
 * This is a dual-write alongside this project's existing legacy
 * identifiers (computeFindingFingerprint / computePatternId / formatA11yId
 * in run-scan.mjs). Nothing here changes those; see
 * https://mgifford.github.io/ACCESSIBILITY.md/examples/fingerprints/README.html
 * for the frozen, versioned profiles this module implements, and
 * https://mgifford.github.io/ACCESSIBILITY.md/examples/migrations/ACCESSIBILITY_MIGRATION_PROFILES.html
 * for the documented differences between open-scans' legacy identifiers and
 * these new fingerprints (in particular: legacy pattern IDs have no target
 * scope and fold colour scheme into rule identity; the new a11y/pattern/v1
 * fingerprint corrects both).
 *
 * Stability: a11y/pattern/v1 and a11y/occurrence/v1 are stable, versioned
 * profiles. Do not change canonicalizeForFingerprint(), computeFingerprint(),
 * or the display-ID format here in a way that could change an
 * already-emitted fingerprint — see the stability requirements in the
 * canonical fingerprints README before editing this file's generation
 * logic (as opposed to call sites in run-scan.mjs, which may evolve).
 */

import { createHash } from "node:crypto";

/**
 * Minimal RFC 8785 (JSON Canonicalization Scheme) implementation for the
 * plain, finite, string/number/boolean/null/array/object values this module
 * ever passes to it. Mirrors the `canonicalize` npm package used by the
 * canonical ACCESSIBILITY.md checker: object keys sorted with the default
 * string sort, primitives serialized with JSON.stringify, no inserted
 * whitespace.
 */
function canonicalizeForFingerprint(value) {
  if (typeof value === "number" && !Number.isFinite(value)) {
    throw new Error("fingerprint-core: NaN/Infinity is not a valid fingerprint input value");
  }

  if (value === null || typeof value !== "object") {
    return JSON.stringify(value);
  }

  if (Array.isArray(value)) {
    const items = value.map((item) => canonicalizeForFingerprint(item === undefined ? null : item));
    return `[${items.join(",")}]`;
  }

  const parts = [];
  for (const key of Object.keys(value).sort()) {
    if (value[key] === undefined) continue;
    parts.push(`${JSON.stringify(key)}:${canonicalizeForFingerprint(value[key])}`);
  }
  return `{${parts.join(",")}}`;
}

function sha256Hex(utf8String) {
  return createHash("sha256").update(utf8String, "utf8").digest("hex");
}

/**
 * Computes the full authoritative fingerprint for a given profile name and
 * input object: lowercase-hex(SHA-256(UTF-8(JCS-canonicalize(input-with-profile-field)))).
 *
 * @param {string} profileName - e.g. "a11y/pattern/v1" or "a11y/occurrence/v1"
 * @param {object} input - the profile's input contract fields (without `profile`)
 * @returns {string} 64-character lowercase hex digest
 */
export function computeFingerprint(profileName, input) {
  const withProfile = { ...input, profile: profileName };
  return sha256Hex(canonicalizeForFingerprint(withProfile));
}

/**
 * Derives a short, non-authoritative display ID from a full fingerprint.
 *
 * @param {"A11Y-PAT"|"A11Y-OCC"} prefix
 * @param {string} fullDigestHex - 64-character lowercase hex digest
 * @returns {string} e.g. "A11Y-PAT-57869BAE817F"
 */
export function displayId(prefix, fullDigestHex) {
  return `${prefix}-${fullDigestHex.slice(0, 12).toUpperCase()}`;
}

/**
 * Computes the a11y/pattern/v1 fingerprint and display ID for an open-scans
 * pattern candidate.
 *
 * Unlike this project's legacy computePatternId (locator + ruleKey, where
 * ruleKey already has colour scheme baked in), this fingerprint's target is
 * the scanned site's own origin, not the open-scans repository — two
 * unrelated scanned sites that happen to share a coincidental
 * locator+rule combination will never collide, which the legacy pattern ID
 * cannot guarantee. See ACCESSIBILITY_MIGRATION_PROFILES.md.
 *
 * @param {string} siteOrigin - e.g. "https://example.gov", the scanned site's origin
 * @param {string} engineNamespace - e.g. "axe-core", "alfa", "equal-access", "accesslint", "qualweb", "semantica11y"
 * @param {string} ruleId - the engine's own rule identifier (not a WCAG SC)
 * @param {string} normalizedLocator - normalized XPath/CSS selector/HTML snippet
 * @param {string|null} [stateKey] - an intrinsic product state that is part of
 *   this pattern's identity, or null. Use null for a plain rule/locator
 *   pattern; colour scheme is deliberately NOT included here by default
 *   (see excluded_fields in the canonical fingerprint profile) — a caller
 *   that wants colour scheme to be part of identity, matching the legacy
 *   ruleKey behaviour, must pass it explicitly as stateKey.
 * @returns {{ fingerprint: string, displayId: string, input: object }}
 */
export function computeA11yPatternFingerprint(siteOrigin, engineNamespace, ruleId, normalizedLocator, stateKey) {
  const input = {
    target: { scope_type: "site-origin", scope_id: siteOrigin },
    rule: { namespace: engineNamespace, id: ruleId },
    locator: {
      type: "unknown",
      normalization_profile: "a11y/css-locator/v1",
      value: normalizedLocator,
    },
    state_key: stateKey === undefined ? null : stateKey,
  };
  const fingerprint = computeFingerprint("a11y/pattern/v1", input);
  return { fingerprint, displayId: displayId("A11Y-PAT", fingerprint), input };
}

/**
 * Computes the a11y/occurrence/v1 fingerprint and display ID for one
 * observed location of a pattern.
 *
 * open-scans scans exact, concrete URLs rather than generalized route
 * patterns, so location.scope is "exact-resource", not "route-pattern".
 *
 * @param {string} patternFingerprint - full 64-hex a11y/pattern/v1 value
 * @param {string} finalUrl - the scanned page's resolved URL
 * @param {string|null} [testProfile] - explicit named test profile, or null
 * @returns {{ fingerprint: string, displayId: string, input: object }}
 */
export function computeA11yOccurrenceFingerprint(patternFingerprint, finalUrl, testProfile) {
  const input = {
    pattern_fingerprint: {
      profile: "a11y/pattern/v1",
      algorithm: "sha-256",
      value: patternFingerprint,
    },
    location: {
      scope: "exact-resource",
      normalization_profile: "a11y/exact-resource/v1",
      key: finalUrl,
    },
    test_profile: testProfile === undefined ? null : testProfile,
  };
  const fingerprint = computeFingerprint("a11y/occurrence/v1", input);
  return { fingerprint, displayId: displayId("A11Y-OCC", fingerprint), input };
}
