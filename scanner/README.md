# Scanner Module

This module contains issue parsing, URL safety checks, and scan execution/report generation.

## Files

- `parse-issue.mjs` - Parses issue bodies into normalized `ScanRequest` data.
- `validate-targets.mjs` - Validates URL syntax and blocks private/internal targets.
- `run-scan.mjs` - Fetches accepted URLs, runs the scan engines below, and generates reports.
- `reflow-risk.mjs` - WCAG 1.4.10 reflow check (always runs; page-level indicator, not a rule engine).
- `semantica11y-audit.mjs` - Semantic HTML/ARIA suggestions via `semantica11y` (always runs; reuses axe's rendered HTML, no extra browser launch).
- `resolve-browser.mjs` - Resolves which Playwright browser (chromium/firefox/webkit) a scan issue requested.
- `crawl-urls.mjs` - Discovers additional same-site URLs to scan when requested.
- `schemas/scan-request.schema.json` - Canonical payload structure and constraints.

## Scan engines

Every scan runs `axe`, `alfa` (ALFA), `equalAccess`, `accesslint`, and `qualweb` as
rule-based engines (each with pass/fail/cantTell/inapplicable counts and its own
Playwright/CLI process), plus two always-on page-level indicators that are kept
separate from WCAG violation counts: `reflowRisk` and `semantica11y`.

## Usage

- `npm run run:parse`
- `npm run run:validate`
- `npm run run:scan -- <issue-event-json-file> <output-dir>`

`run-scan.mjs` generates:

- `report.json` - Full structured report including all engines' rule outcomes.
- `report.md` - Human-readable report summary.
- `report.csv` - URL-level flat report export.

Scans with more than `LARGE_SCAN_URL_WARNING_THRESHOLD` accepted URLs (default 150)
get a soft warning in the log and report suggesting the URL list be split across
multiple issues; nothing is rejected or truncated by this warning alone.