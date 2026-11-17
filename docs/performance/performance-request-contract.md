# `performance-request/1` contract

**Status:** PR 1 implementation
**Schema:** [`scanner/schemas/performance-request.schema.json`](../../scanner/schemas/performance-request.schema.json)
**Parser:** [`scanner/parse-performance-issue.mjs`](../../scanner/parse-performance-issue.mjs)

---

## 1. Purpose

`PERF:` is a separate Open Scans request type for performance investigation. It exists so a user can start from existing evidence, identify recurring page/component/resource problems, and later export a falsifiable experiment — without turning every request into an untargeted crawl.

PR 1 defines and validates the request. It does not collect evidence, launch a browser or publish a performance report.

## 2. Non-goals and hard boundaries

- A `PERF:` request is not a `SCAN:` request. The performance parser rejects a non-`PERF:` title.
- A performance request does not create an accessibility engine selection. The only `engines` field is `accessibility.engines`, and it is valid only in `combined` mode.
- `combined` mode requires an explicit engine list. There is no random default.
- An accessibility request (`SCAN:`) never triggers Lighthouse or Sitespeed through this contract.
- `reuse` mode performs no browser measurement. Its Lighthouse and Sitespeed budgets are forced to zero.
- The parser has no network access, no process execution and no browser automation import.
- The request cannot carry shell commands, executable code, arbitrary MCP tool instructions or a user-supplied MCP endpoint. Unsupported source types are rejected.

## 3. Issue format

Title:

```text
PERF: <short description>
```

Body: Markdown sections rendered by the **Performance Request** issue template, or written by hand. Section names are matched case-insensitively. A value may also be supplied as a `Label: value` line.

| Section | Required | Meaning |
| :--- | :--- | :--- |
| `Performance mode` | No | `reuse`, `light`, `deep` or `combined`. Defaults to `reuse` when a valid evidence source is present, otherwise `light`. |
| `Domain` | One of Domain/URLs | Public site domain or origin. A path is treated as an exact URL with a warning. Query strings and fragments are rejected. |
| `URLs` | One of Domain/URLs | Exact public page URLs, one per line or comma-separated. Maximum 500. |
| `Evidence sources` | No | One source per line: `<type>: <location>`. |
| `Priority URLs` | No | Optional user-nominated pages. Maximum 50; must be on the site. |
| `Top task URLs` | No | Optional Top Task Finder URLs. Maximum 50; must be on the site. |
| `Limits` | No | `Max pages to inspect: N`, `Max Lighthouse audits: N`, `Max Sitespeed pages: N`. |
| `Browser` | No | `chromium` or `firefox`. Lighthouse requires Chromium. Default `chromium`. |
| `Profile` | No | `mobile` or `desktop`. Default `desktop` unless the viewport preset is mobile. |
| `Viewport` | No | A preset name or `WxH` such as `1280x800`. Default depends on profile. |
| `Consent state` | No | `not-configured`, `not-needed`, `accepted` or `rejected`. Default `not-configured`. |
| `Reuse source reports` | No | `yes`/`no`. Default `yes`; must be yes in `reuse` mode. |
| `Max evidence age (days)` | No | 1–3650. Default 30. |
| `Accessibility engines` | Only `combined` | Comma/space list of `axe`, `alfa`, `accesslint`, `equalaccess`, `all`. `none` means no accessibility engine. |

Unknown sections are ignored and cannot become request fields. The parser never copies the full issue body into the request; only a SHA-256 digest of title + normalized body is retained.

## 4. Modes and default budgets

| Mode | `maxPagesToInspect` | `maxLighthouseAudits` | `maxSitespeedPages` | Browser work | Accessibility engines |
| :--- | ---: | ---: | ---: | :--- | :--- |
| `reuse` | 20 | 0 | 0 | none | forbidden |
| `light` | 20 | 5 | 0 | Lighthouse only | forbidden |
| `deep` | 20 | 5 | 3 | Lighthouse + selected Sitespeed pages | forbidden |
| `combined` | 20 | 5 | 3 | Lighthouse + selected Sitespeed pages | required, explicit |

These are proposed defaults, not permanent policy. Explicit budgets are validated:

- `maxPagesToInspect`: 1–500.
- `maxLighthouseAudits`: 0–50 and not greater than `maxPagesToInspect`.
- `maxSitespeedPages`: 0–10 and not greater than `maxPagesToInspect`.
- `reuse`: both browser budgets must be 0.
- `light`: Sitespeed must be 0.
- `deep`/`combined`: Sitespeed must be at least 1.
- `combined`: at least one of the two browser budgets must be greater than 0.
- `firefox`: Lighthouse audits must be 0.

A budget is a ceiling, not a target. Later providers must record excluded and unmeasured pages rather than silently filling the budget.

## 5. Evidence sources

Supported canonical types:

| Type | Location |
| :--- | :--- |
| `open-scans-report` | Public `https://` URL, or a repository path matching `reports/**/*.json` |
| `firefox-energy-scanner` | Public `https://` URL |
| `vital-core` | Public `https://` URL |
| `open-site-review` | Public `https://` URL |

Aliases accepted by the parser include `vital`, `fes`, `open-scans`, `site-review`. The stored value always uses the canonical type.

Rejected:

- `http://`, `file://`, `data:`, `javascript:` and other schemes;
- usernames/passwords in the URL;
- private, loopback, link-local or `.local` hosts;
- credential-like query parameters (`token`, `api_key`, `secret`, `signature`, `session`, …);
- paths outside `reports/` or paths containing `..`;
- more than 10 sources;
- MCP server descriptors or unsupported source types.

Duplicate `(type, location)` pairs are ignored with a warning.

## 6. Page URL rules

Page, priority and top-task URLs reuse `scanner/validate-targets.mjs`:

- only `http:`/`https:`;
- no localhost, private IPv4/IPv6, link-local or `.local`;
- no non-web documents (PDF, images, JSON, archives, …);
- fragments removed;
- credential-like query parameters rejected.

Additionally, every page must be on the requested site. `example.gov` accepts `www.example.gov` and `apply.example.gov`, but not `example.gov.evil.test` or a sibling domain. Cross-site pages require a separate request.

## 7. Deterministic identity and provenance

Every request carries:

- `schemaVersion`: `performance-request/1`;
- `requestId`: `<issueNumber>-perf-<12 hex>` derived from the issue number and the title/body digest;
- `provenance.inputDigest`: `sha256:<64 hex>` of the normalized title and body;
- `provenance.modeSource`: `body` or `default`;
- `provenance.defaultedFields`: which fields were defaulted;
- parser name and version, contract version, and request origin.

Re-parsing the same issue revision produces the same `requestId` and digest. Editing the title or body changes them. The full body is not stored.

## 8. Successful request shape

```json
{
  "schemaVersion": "performance-request/1",
  "requestId": "501-perf-8c14c73777ec",
  "issueNumber": 501,
  "issueUrl": "https://github.com/mgifford/open-scans/issues/501",
  "submittedBy": "octocat",
  "submittedAt": "2026-11-16T14:00:00Z",
  "issueTitle": "PERF: example.gov performance investigation",
  "requestLabel": "performance-request",
  "mode": "reuse",
  "site": {
    "origin": "https://example.gov",
    "host": "example.gov",
    "urls": ["https://example.gov/", "https://www.example.gov/services"]
  },
  "evidenceSources": [
    {
      "type": "vital-core",
      "location": "https://vital.example.gov/api/v1/example.gov/snapshot.json",
      "locationKind": "https"
    }
  ],
  "limits": {
    "maxPagesToInspect": 12,
    "maxLighthouseAudits": 0,
    "maxSitespeedPages": 0
  },
  "measurement": {
    "browser": "chromium",
    "profile": "desktop",
    "viewport": { "width": 1280, "height": 800 },
    "viewportPreset": "desktop"
  },
  "consent": { "state": "not-needed" },
  "reuseSourceReports": true,
  "maxEvidenceAgeDays": 14,
  "priorityUrls": [],
  "topTaskUrls": [],
  "provenance": {
    "requestOrigin": "github-issue",
    "parser": "scanner/parse-performance-issue.mjs",
    "parserVersion": "1.0.0",
    "contractVersion": "performance-request/1",
    "inputDigest": "sha256:…",
    "modeSource": "body",
    "defaultedFields": ["browser"]
  }
}
```

`accessibility` appears only when `mode` is `combined`:

```json
"accessibility": { "engines": ["axe", "alfa"] }
```

## 9. Validation and tooling

```bash
# Parse and print the result (exit 1 when invalid)
node scanner/parse-performance-issue.mjs tests/fixtures/performance-issue-reuse.json

# Write the request and a step-summary-friendly report
node scanner/parse-performance-issue.mjs .tmp/issue-event.json \
  --out .tmp/performance-request.json \
  --summary .tmp/performance-summary.md

# Inspect invalid input without a non-zero exit
node scanner/parse-performance-issue.mjs .tmp/issue-event.json --allow-invalid
```

The GitHub workflow `.github/workflows/performance-request.yml`:

- triggers only on `PERF:` issues;
- has `contents: read` and no issue-write permission;
- runs with a 5-minute timeout;
- uploads the request and summary as a 14-day artifact;
- never commits, never installs browsers and never runs an accessibility engine.

## 10. Versioning

- The schema `$id` is stable: `https://mgifford.github.io/open-scans/scanner/schemas/performance-request.schema.json`.
- A breaking change to required fields, mode semantics or security constraints requires a new `performance-request/N` version and a migration note.
- Additive optional fields may stay in version 1 when old consumers can ignore them.
- Provider-specific evidence must not be added to this request schema; it belongs in `performance-evidence/1` (PR 2).
- Do not reuse this contract for `SCAN:` or for Firefox experiment specs; those have their own versions.
