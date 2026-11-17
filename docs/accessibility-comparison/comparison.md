# Baseline-to-comparison accessibility reports

**Schema:** [`scanner/schemas/accessibility-comparison.schema.json`](../../scanner/schemas/accessibility-comparison.schema.json)
**Module:** [`scanner/compare-scans.mjs`](../../scanner/compare-scans.mjs)
**CLI:** `npm run compare:scans`

---

## 1. What it does

Compares two stored Open Scans `report.json` files without running a browser, a scanner or an LLM. It reuses the reports' existing rule ids, locators, WCAG mappings and finding identifiers.

It produces:

- a JSON comparison (`accessibility-comparison/1`);
- a Markdown summary;
- a CSV table;
- a self-contained, accessible HTML report with no client-side JavaScript.

## 2. Usage

```bash
node scanner/compare-scans.mjs \
  reports/issues/issue-123/2026-11-01T.../report.json \
  reports/issues/issue-123/2026-11-15T.../report.json \
  --baseline-release v1.0.0 \
  --comparison-release v1.1.0 \
  --out comparison.json \
  --summary comparison.md \
  --csv comparison.csv \
  --html comparison.html
```

With an explicit page mapping (required when URLs differ):

```bash
node scanner/compare-scans.mjs baseline.json staging.json \
  --page-map "https://example.gov/=https://staging.example.gov/" \
  --page-map "https://example.gov/services=https://staging.example.gov/services" \
  --html comparison.html
```

`--page-map` is repeatable. A mapping must name a page present in both reports; missing pages are errors, not silent skips. The same baseline or comparison URL cannot be mapped twice.

## 3. Inputs and compatibility

- Both inputs must be Open Scans report JSON objects with a `results` array.
- Historical reports remain readable. Missing newer fields are treated as missing, not as zero.
- QualWeb fields in historical reports remain readable, although QualWeb is not a selectable engine.
- Per-page engine execution and errors are read from the report. If an engine did not run or failed, its findings are **not evaluated**, not new or absent.
- A non-2xx page response can still have real engine results. It is marked with an HTTP-error coverage gap and the limitation is stated; it is not silently treated as a clean page.

## 4. Page pairing

By default, only the same normalized URL (fragment removed) is paired. Different baseline and comparison URLs are **not** assumed to be the same content.

An explicit mapping is required for staging, preview or redesigned URLs. The comparison records `mapping: "explicit"` or `mapping: "url"` for every pair, and unpaired pages become coverage gaps.

## 5. Finding identity

Matching uses, in order:

1. exact comparison identity based on engine, rule, normalized locator and logical page;
2. the same pattern (engine + rule + locator) with changed occurrence details;
3. a unique engine + rule match on the same logical page (low confidence).

Each finding preserves:

- the original occurrence id (canonical `a11yOccurrenceFingerprint`, legacy `fingerprint`, or a derived id);
- the original pattern id;
- the identity source: `canonical`, `legacy` or `derived`;
- the report location (`results[...]` and engine) as an evidence reference;
- the original title, message, locator, HTML, WCAG mapping, impact, colour scheme and first-seen date.

Derived identities are used only when no stored fingerprint exists and are counted in `summary.identityFallbackCount`. They are deterministic but are **not** presented as canonical fingerprints.

## 6. Classification

| Status | Meaning |
| :--- | :--- |
| `new` | Present in the comparison and not matched in the baseline, on a page and engine evaluated in both |
| `persistent` | Same identity and same details in both |
| `details-changed` | Same logical finding, but title/message/locator/HTML/WCAG/impact/colour scheme changed |
| `not-observed` | Baseline finding absent from the comparison while page and engine were evaluated in both |
| `not-evaluated` | Page, engine or test evidence was missing/failed on one side, or the page was unpaired |

`not-observed` always has `confirmedRemediation: false` and a qualification. `summary.confirmedRemediations` is always `0`: absence from one scan is not proof of remediation.

## 7. Testing conditions

The comparison records:

- scan id, issue, title, timestamp, optional release identifier and source path;
- browser, viewport, colour scheme, page-load delay;
- selected/executed engines;
- per-page engine execution and errors;
- coverage counts.

Report-level and per-page condition differences are listed. If they differ, findings remain visible but confidence is low and a limitation states that differences are not confirmed regressions or fixes.

## 8. Output

`comparison.json`:

```text
schema: accessibility-comparison/1
baseline / comparison: scan metadata, conditions, coverage
pageMappings: logical page, baseline URL, comparison URL, mapping, counts
conditions: compatible, differences
engines: baseline, comparison, common, onlyBaseline, onlyComparison
summary: counts, confirmedRemediations: 0
findings: new, persistent, details-changed, not-observed, not-evaluated
coverageGaps: unpaired pages, failed pages, HTTP error pages
limitations
```

`comparison.csv` has one row per finding with the original Phase A columns preserved and appended scan/source/condition, component/region, ACT/WCAG, external-investigation and coverage metadata. See [`exports.md`](./exports.md).

`comparison.html` is semantic, keyboard-usable without JavaScript, with a skip link, section navigation, headings, captioned tables, evidence disclosures and visible qualifications. It supports light/dark colour schemes, forced colours, reduced motion and print. It has no combined accessibility/performance score. See [`interface.md`](./interface.md).

## 9. Boundaries

- This is a comparison of automated findings, not a WCAG conformance claim.
- A no-new-findings comparison does **not** prove functional equivalence.
- Visual, keyboard, screen-reader and assistive-technology behaviour still require manual testing.
- Component attribution is not inferred here; Phase C will add evidence-backed component/region association.
- External investigation references are optional Phase D metadata; see [`external-investigations.md`](./external-investigations.md).
- Comparison output is sanitized with the existing recursive secret redaction before it is written.

## 10. Fixtures

[`tests/fixtures/comparison/`](../../tests/fixtures/comparison/) contains:

- a baseline report with a shared navigation `link-name` finding, an image finding and an ALFA title finding;
- an optimized report that introduces an icon-only `button-name` regression and changes image details;
- a no-detected-regression report;
- source HTML pages for the baseline, regression and no-regression navigation variants.

The optimized fixture also removes the ALFA title finding. It is classified **not observed**, never **fixed**.
