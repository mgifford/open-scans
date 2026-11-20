# Scanner Module

This module contains issue parsing, URL safety checks, and scan execution/report generation.

## Files

- `parse-issue.mjs` - Parses issue bodies into normalized `ScanRequest` data.
- `parse-performance-issue.mjs` - Parses `PERF:` issue bodies into a validated `performance-request/1` object. Performs no browser work and no network access.
- `performance-evidence.mjs` - Assembles, merges and validates the common `performance-evidence/1` format.
- `performance-source-loader.mjs` - Loads repo/local/https evidence with DNS-aware and redirect-aware checks.
- `run-performance-reuse.mjs` - Reuse-only investigation runner; no browser launches.
- `performance-page-selection.mjs` - Bounded candidate selection, family coverage and Lighthouse reuse planning.
- `performance-lighthouse.mjs` - Pinned Lighthouse runner, raw JSON retention and evidence normalization.
- `run-performance-light.mjs` - Bounded light investigation runner with cost reporting.
- `performance-sitespeed.mjs` - Pinned Sitespeed Docker provider and analysisstorer/sustainable parser.
- `run-performance-deep.mjs` - Targeted Sitespeed deep-investigation runner.
- `run-performance-issue.mjs` - Dispatches a validated `PERF:` request to the reuse, Lighthouse or Sitespeed runner.
- `performance-investigation.mjs` - Cross-page component/resource grouping, deduplication and ranking.
- `run-performance-investigation.mjs` - Offline investigation package builder (no browser/network).
- `adapters/` - Adapters for Open Scans reports, Firefox Energy Scanner, Vital Core and Open Site Review.
- `validate-targets.mjs` - Validates URL syntax and blocks private/internal targets.
- `run-scan.mjs` - Fetches accepted URLs, runs the scan engines below, and generates reports.
- `reflow-risk.mjs` - WCAG 1.4.10 reflow check (always runs; page-level indicator, not a rule engine).
- `semantica11y-audit.mjs` - Semantic HTML/ARIA suggestions via `semantica11y` (always runs; reuses axe's rendered HTML, no extra browser launch).
- `resolve-browser.mjs` - Resolves which Playwright browser (chromium/firefox/webkit) a scan issue requested.
- `crawl-urls.mjs` - Discovers additional same-site URLs to scan when requested.
- `compare-scans.mjs` - Compares two stored `report.json` files without rescanning; writes JSON, Markdown, CSV and accessible HTML. CSV preserves original columns and appends scan/source/condition, component/region, external-investigation and coverage metadata.
- `component-association.mjs` - Preserves explicit component ids and derives low-confidence semantic-region candidates from stable selectors.
- `external-investigations.mjs` - Validates and attaches optional FES/Vital Core investigation metadata; never fetches external URLs.
- `pattern-inventory.mjs` - Groups stable accessibility pattern IDs into semantic-container categories and writes `patterns.csv`.
- `accessibility-context.mjs` - Writes occurrence-level page/selector/pattern/container evidence for FES joins (`accessibility-context.json`/`.csv`).
- `optimization-investigation.mjs` - Maps comparison findings to optimization scenarios and accessibility concerns (no scanner).
- `run-optimization-investigation.mjs` - CLI for the opt-in optimization review; writes JSON, Markdown and accessible HTML.
- `schemas/scan-request.schema.json` - Canonical payload structure and constraints.
- `schemas/performance-request.schema.json` - Versioned `performance-request/1` contract for `PERF:` issues.
- `schemas/performance-evidence.schema.json` - Versioned `performance-evidence/1` common evidence contract.

## Scan engines

Every scan runs `axe`, `alfa` (ALFA), `equalAccess`, and `accesslint` as
rule-based engines (each with pass/fail/cantTell/inapplicable counts and its own
Playwright/CLI process), plus two always-on page-level indicators that are kept
separate from WCAG violation counts: `reflowRisk` and `semantica11y`. QualWeb is
retired and is not selectable; legacy report fields remain readable.

### Sa11y

`sa11y` is an additional rule-based engine (display name **Sa11y**), selectable
through the issue form (`ALL` or an explicit `Engine: axe, sa11y` line) or the
`engines` request array. It is the shared checking technology behind Sa11y and
Editoria11y; Open Scans runs the published browser bundle headlessly on public
pages and does not need Drupal, a CMS, or Editoria11y's sync layer.

- Adapter: `scanner/sa11y.mjs`, pinned to the `sa11y` npm package (5.1.0).
- Findings: native test keys (`MISSING_ALT`, `HEADING_EMPTY`, …), native
  `error`/`warning`/`good` classification, absolute XPath and HTML evidence.
- Configuration: `{headless: true, checkRoot: "body", developerChecksOnByDefault: true}`.
  Developer checks are enabled because Sa11y 5.1.0 hides several ACT-mapped
  checks (for example `BTN_EMPTY`) behind that option; the upstream conformance
  suite does the same. `formLabelsPlugin` is **not** enabled, so form-label
  checks that need it do not run.
- ACT mappings: taken from Sa11y's published conformance mapping file and
  stored in the existing registry with `source` and version provenance. They are
  mapping evidence, not an Open Scans conformance claim.
- Default rollout: `ALL` and explicit engine lists include Sa11y; scans with no
  engine information keep the historical four-engine default until the
  integration has been validated in production.

A successful empty result (`executed: true`, zero findings) is different from an
engine error or timeout (`executed: false`, `error` set). Warnings are retained
in the raw result and counted, but are not treated as WCAG failures.

## Usage

- `npm run run:parse`
- `npm run run:validate`
- `npm run run:scan -- <issue-event-json-file> <output-dir>`
- `npm run compare:scans -- <baseline-report.json> <comparison-report.json> [--page-map <baseline-url>=<comparison-url>] [--external-references <file>] [--out <file>] [--summary <file>] [--csv <file>] [--html <file>]`
- `npm run investigate:optimization -- <comparison.json> [--scenario <kind>] [--request <request.json>] [--out <file>] [--summary <file>] [--html <file>]`
- `npm run run:parse-performance -- <issue-event-json-file>`
- `npm run run:performance-reuse -- <performance-request.json> --source <type>=<location> --allow-local --out <file>`
- `npm run run:performance-light -- <performance-request.json> [--out <file>] [--run-report <file>] [--artifacts-dir <dir>] [--chrome-path <file>]`
- `npm run run:performance-deep -- <performance-request.json> [--out <file>] [--run-report <file>] [--artifacts-dir <dir>]`
- `npm run run:performance-investigation -- <performance-evidence.json> [--out <file>] [--summary <file>]`

`parse-performance-issue.mjs` accepts `--out <file>`, `--summary <file>` and
`--allow-invalid`. It exits non-zero on an invalid request. `reuse` requests are
validated with zero Lighthouse and zero Sitespeed budget; no browser module is
imported.

`run-scan.mjs` generates:

- `report.json` - Full structured report including all engines' rule outcomes.
- `report.md` - Human-readable report summary.
- `report.html` - Self-contained accessible interactive report.
- `report.csv` - URL-level flat report export.
- `patterns.csv` - Unique accessibility patterns by semantic container.
- `accessibility-context.json` and `.csv` - Compact occurrence-level accessibility evidence for Firefox Energy Scanner joins, including explicit `selectorType`.
- `report-overlap.json` and `.md` - Cross-engine overlap evidence.

Scans with more than `LARGE_SCAN_URL_WARNING_THRESHOLD` accepted URLs (default 150)
get a soft warning in the log and report suggesting the URL list be split across
multiple issues; nothing is rejected or truncated by this warning alone.