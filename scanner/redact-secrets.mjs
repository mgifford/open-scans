/**
 * Secret redaction for scan report artifacts.
 *
 * Scanned pages sometimes embed credentials in their HTML (for example a
 * Mapbox access token inside a tile URL, or a Google API key in a script
 * tag). The scanner copies page fragments into report fields (failure
 * `html`/`source` snippets) and GitHub secret-scanning push protection will
 * reject any commit that contains a detected secret, blocking the report
 * from ever being published.
 *
 * This module masks well-known secret formats before the report artifacts
 * (JSON, Markdown, HTML, CSV, overlap, trends) are written to disk so that
 * reports can be committed and pushed without tripping push protection.
 *
 * Design principles:
 * - Conservative regexes tuned for high-signal formats to avoid corrupting
 *   ordinary report text (e.g. image filenames like "sk.tmb-xs.png").
 * - Redaction is idempotent: running a second time never changes anything.
 * - Applies recursively so no nested string field (html/snippet/source,
 *   messages, discovered URLs, rejected-URL lists, AI suggestions) can
 *   carry a secret into the committed report.
 */

const REDACTED = (label) => `[REDACTED:${label}]`;

const SECRET_PATTERNS = [
  {
    // PEM/OpenSSH private key blocks (multi-line, content is dropped entirely)
    re: /-----BEGIN [A-Z0-9 ]*PRIVATE KEY-----[\s\S]*?-----END [A-Z0-9 ]*PRIVATE KEY-----/gi,
    label: "private-key"
  },
  {
    // GitHub fine-grained personal access tokens (github_pat_ + ~50 chars)
    re: /\bgithub_pat_[A-Za-z0-9_]{20,}\b/g,
    label: "github-token"
  },
  {
    // GitHub classic tokens (ghp_/gho_/ghu_/ghs_/ghr_ + 36 chars)
    re: /\bgh[psou]_[A-Za-z0-9]{36}\b/g,
    label: "github-token"
  },
  {
    // Mapbox public/secret access tokens (pk.eyJ… / sk.eyJ…)
    re: /\b(?:pk|sk)\.eyJ[A-Za-z0-9_.\-]{20,}\b/g,
    label: "mapbox-token"
  },
  {
    // AWS access key IDs
    re: /\bAKIA[0-9A-Z]{16}\b/g,
    label: "aws-access-key"
  },
  {
    // Google API keys
    re: /\bAIza[0-9A-Za-z\-_]{35}\b/g,
    label: "google-api-key"
  },
  {
    // Stripe live/test keys (public or secret)
    re: /\b(?:sk|pk)_(?:live|test)_[0-9a-zA-Z]{16,}\b/g,
    label: "stripe-key"
  },
  {
    // OpenAI API keys
    re: /\bsk-[A-Za-z0-9]{20,}\b/g,
    label: "openai-key"
  },
  {
    // Slack tokens
    re: /\bxox[baprs]-[0-9A-Za-z\-]{10,}\b/g,
    label: "slack-token"
  },
  {
    // Bearer authorization tokens
    re: /(\bBearer\s+)[A-Za-z0-9\-_.~+/]{20,}=*/gi,
    label: "bearer-token"
  },
  {
    // Secret-bearing query parameters (?token=… &api_key=… etc.)
    re: /([?&]\s*(?:access_token|api_key|apikey|auth_token|secret|token)=)[^&\s"']+/gi,
    label: "query-token"
  }
];

/**
 * Replace known secret patterns in a string with redaction markers.
 * Idempotent: applying this twice to the same input yields the same output.
 *
 * @param {string} text - Raw string that may contain secrets.
 * @returns {string} Same string with any detected secrets masked.
 */
export function redactSecrets(text) {
  if (typeof text !== "string" || text.length === 0) {
    return text;
  }

  let out = text;
  for (const { re, label } of SECRET_PATTERNS) {
    out = out.replace(re, (match, ...groups) => {
      // Never re-redact a marker produced by an earlier pattern (e.g. the
      // query-parameter rule matching "token=[REDACTED:mapbox-token]").
      if (match.includes("[REDACTED:")) {
        return match;
      }
      // Preserve the "Bearer " / query-param prefix so the surrounding
      // structure stays readable, and redact only the sensitive value.
      if (typeof groups[0] === "string") {
        return groups[0] + REDACTED(label);
      }
      return REDACTED(label);
    });
  }
  return out;
}

/**
 * Recursively redact every string value nested inside a report data
 * structure (objects and arrays), mutating the structure in place.
 *
 * @param {unknown} value - Report value to sanitize (mutated in place).
 * @param {{ changed?: number }} [stats] - Optional counter object; the
 *   `changed` property is incremented for each string that was modified.
 * @returns {unknown} The same (now sanitized) value.
 */
export function redactStringsDeep(value, stats) {
  if (typeof value === "string") {
    const redacted = redactSecrets(value);
    if (redacted !== value && stats) {
      stats.changed = (stats.changed ?? 0) + 1;
    }
    return redacted;
  }

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) {
      value[i] = redactStringsDeep(value[i], stats);
    }
    return value;
  }

  if (value && typeof value === "object") {
    for (const key of Object.keys(value)) {
      value[key] = redactStringsDeep(value[key], stats);
    }
  }

  return value;
}