# Scanner Module

This module contains issue parsing, URL safety checks, and scan execution/report generation.

## Files

- `parse-issue.mjs` - Parses issue bodies into normalized `ScanRequest` data.
- `validate-targets.mjs` - Validates URL syntax and blocks private/internal targets.
- `run-scan.mjs` - Fetches accepted URLs, runs ALFA audits, and generates reports.
- `schemas/scan-request.schema.json` - Canonical payload structure and constraints.

## Usage

- `npm run run:parse`
- `npm run run:validate`
- `npm run run:scan -- <issue-event-json-file> <output-dir>`

`run-scan.mjs` generates:

- `report.json` - Full structured report including ALFA rule outcomes.
- `report.md` - Human-readable report summary.
- `report.csv` - URL-level flat report export.