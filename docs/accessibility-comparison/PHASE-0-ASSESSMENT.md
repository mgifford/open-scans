# Phase 0 — Accessibility comparison capability assessment

**Date:** 2026-11-16
**Repository:** `mgifford/open-scans`
**Base revision:** `b07851a` (`origin/main`)
**Scope:** Phase A — explicit before/after accessibility comparisons from stored reports.

---

## 1. What already exists

### 1.1 Issue intake and execution

- `SCAN:` issues, timed issue prefixes, the GitHub Pages form and the issue queue workflows are established.
- `scanner/parse-issue.mjs` extracts URLs, engines, viewport, colour scheme, browser, crawl count and optional keywords.
- `scanner/run-scan.mjs` runs the selected accessibility engines and writes JSON, Markdown, HTML and CSV.
- Reports are committed under `reports/issues/issue-<n>/<timestamp>/` and published through GitHub Pages.
- Scan context (browser, viewport, colour scheme, page-load delay) is recorded in `report.json` and per result.

### 1.2 Actual selectable engines

The operational list is `axe`, `alfa`, `equalaccess` and `accesslint`; `all` expands to those four. The default is axe plus one randomly selected non-axe engine.

QualWeb is disabled. `parse-issue.mjs` ignores `QUALWEB`, and `package.json` has no QualWeb dependencies. Historical reports may still contain QualWeb data. A separate focused documentation change corrects the README, FEATURES, scanner README, UI copy, schema enum and SBOM; this comparison work does not re-enable it.

### 1.3 Finding identity

Open Scans has three related identity layers:

1. **Legacy instance fingerprint** — 12 hex chars, SHA-256 of `url|locator|ruleKey`.
2. **Legacy pattern ID** — `A11Y-xxxxxxxx`, SHA-256 of `locator|ruleKey`, no URL.
3. **Canonical fingerprints** — `a11y/pattern/v1` and `a11y/occurrence/v1` from `scanner/fingerprint-core.mjs`, dual-written by newer scans as `a11yPatternFingerprint` / `a11yOccurrenceFingerprint`.

Older reports may have only the legacy `fingerprint`/`patternId`, or none. A comparison must use the best available identity, preserve the original IDs, and record when it had to derive a fallback.

### 1.4 Existing comparison-adjacent features

- `computeChangeTracking()` compares the previous per-issue fingerprint store with the current scan and reports `newCount` / `notObservedCount`. It labels absence as **not observed**, not fixed, which is the correct foundation.
- `scanner/interactive-report.mjs` renders a compact “Changes Since Last Scan” section, but only has new/not-observed buckets and only when an existing fingerprint store is present.
- `scanner/analyse-trends.mjs` compares aggregate totals between recent scans. It is a trend report, not a finding-level comparison.
- Cross-engine duplicate metadata and corroboration already preserve original findings while identifying overlapping observations.
- ACT Rules mapping and WCAG metadata are available through `scanner/act-mapping.mjs` and rule metadata modules.
- Redaction is applied recursively to report data before artifacts are written.

### 1.5 Report data available for comparison

`report.json` provides:

- issue/scan identity and `scannedAt`;
- `engines` and `scanContext`;
- per-URL `submittedUrl`, `finalUrl`, `ok`, `statusCode`, `error` and per-engine execution/error/counts;
- per-engine failures with rule, WCAG data, locator, HTML, message, duplicate metadata and fingerprints (when available);
- `enhanced` consolidated findings and examples;
- `changeTracking` for the previous per-issue scan;
- coverage counters (`acceptedCount`, `scannedCount`, skipped/rejected counts).

Older reports may omit newer fields. The comparison loader must treat missing measurements and missing engine executions as missing, not as zero or as a remediation.

---

## 2. Gaps Phase A must close

| Gap | Consequence today |
| :--- | :--- |
| No explicit report-to-report comparison | Users can only see change tracking against a per-issue fingerprint store, not arbitrary baseline/comparison reports |
| No page-pair mapping | Staging/preview URLs cannot be compared to production without pretending the URLs are identical |
| No testing-condition compatibility check | Different browser/viewport/colour-scheme runs can be presented as if comparable |
| No engine-selection compatibility check | An engine absent from one scan can make findings look newly absent |
| Only new/not-observed buckets | No persistent or details-changed classification |
| No coverage-gap classification | Findings on pages absent from one scan are not distinguished from absent findings on evaluated pages |
| No comparison JSON/CSV contract | No reproducible machine-readable comparison artifact |
| No dedicated comparison report | Existing change section is small and not suitable for optimization review |
| No external investigation references | A comparison cannot be linked to Firefox Energy Scanner evidence |

---

## 3. Design constraints for the implementation

- Read stored `report.json` files only; do not run a scan.
- Preserve original finding IDs and evidence; do not rewrite fingerprints.
- Match findings in this order:
  1. canonical occurrence fingerprint (`a11yOccurrenceFingerprint`);
  2. legacy instance `fingerprint`;
  3. pattern identity within the same logical page (for details-changed detection);
  4. deterministic fallback identity using engine/rule/locator/page, explicitly marked as derived.
- Skip `isDuplicate` findings as comparison units, but record the duplicate count as context.
- Pair pages only by the same normalized URL by default. Different URLs require an explicit mapping.
- Classify a baseline-only finding as **not observed**, never “fixed”. Set `confirmedRemediation: false` and include the qualification.
- If a page or engine was not evaluated in both scans, classify the finding as **not evaluated**, not not-observed.
- If testing conditions differ, keep the observed differences but mark them as not confirmed/comparable.
- Never combine accessibility findings into a performance, energy or sustainability score.
- Sanitize the comparison output with the existing redaction layer.

---

## 4. Reusable code

- `scanner/fingerprint-core.mjs` for canonical IDs.
- `scanner/run-scan.mjs` legacy fingerprint conventions and report shape.
- `scanner/redact-secrets.mjs` for output sanitization.
- `scanner/parse-issue.mjs` URL helpers where useful (not for scanning).
- Existing report fixtures and Node test conventions.
- Existing Markdown/CSV style and accessibility requirements.

---

## 5. Backward-compatibility risks

| Risk | Mitigation |
| :--- | :--- |
| Older reports lack canonical fingerprints | Fall back to legacy IDs or derived identity, record the identity source |
| Older reports lack engine execution detail | Treat as unknown/not evaluated, never as zero |
| Reports from different engines/conditions look comparable | Explicit compatibility check and visible differences |
| “Not observed” read as “fixed” | Use “not observed”, `confirmedRemediation: false`, and a qualification in JSON/Markdown/HTML |
| Comparison output changes existing reports | New files only; do not modify historical report JSON |
| Public report data leaks secrets | Redact comparison output before writing |
| Large reports make comparison slow | Pure in-memory parsing of two JSON files; bounded output |

---

## 6. Baseline test result

```text
npm test
# tests 657
# pass 652
# fail 1
# skipped 4
```

The single failure is the pre-existing `computeWeeklyStats` timezone failure in `generate-reports-html.mjs` (documented previously; unrelated to this work).

```text
npm run lint
# exit 0
```

---

## 7. Phase A acceptance mapping

- Compare two existing reports: new `compare-scans` module/CLI.
- Historical reports readable: no historical file changes.
- Consistent finding identities: canonical → legacy → derived fallback with provenance.
- Visible condition changes: browser/viewport/colour-scheme/engine diff.
- Missing evidence not remediation: coverage-gap/not-evaluated classifications and qualification.
- Observed differences vs confirmed improvements: `confirmedRemediation: false` for all absences.
- Fixture with an optimization regression and a no-regression fixture with automated-testing limitations.
- JSON, CSV and accessible static HTML exports, versioned.


---

## 8. Update after Phase B

Phase B adds `optimization-investigation/1` and an opt-in CLI that maps a completed comparison to ten optimization scenarios and fifteen accessibility concerns. It reuses existing findings, adds scenario-specific filters, page scoping and manual-verification tasks, and explicitly disclaims conformance, functional equivalence and savings. See [`optimization-investigation.md`](./optimization-investigation.md).


---

## 9. Update after Phase C

Phase C adds explicit component-id preservation and low-confidence semantic-region candidates to comparison findings, plus region/component/page indexes and ACT Rule ids. It deliberately does not copy or import the Firefox Energy Scanner component graph. See [`component-association.md`](./component-association.md).


---

## 10. Update after Phase D

Phase D adds optional, validated external investigation references to comparisons and optimization reports. The integration is metadata-only: URLs are validated but not fetched, no FES/Vital Core schema is copied, and an external performance/energy investigation is explicitly not an accessibility finding or conformance claim. See [`external-investigations.md`](./external-investigations.md).


---

## 11. Update after Phase E

Phase E adds a static report interface with section navigation, plain-language change summary, status definitions, per-finding evidence disclosures, manual-verification tasks, and mobile/print/forced-colours/reduced-motion styling. The report remains JavaScript-free. See [`interface.md`](./interface.md).


---

## 12. Update after Phase F

Phase F completes the comparison export surface. CSV keeps every original column in order and appends scan/source/condition, component/region, ACT/WCAG, external-investigation and coverage metadata, with formula-injection protection. JSON retains the complete evidence and remains additive/backward-compatible. See [`exports.md`](./exports.md).
