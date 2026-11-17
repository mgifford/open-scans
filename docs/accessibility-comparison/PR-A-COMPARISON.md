# PR A — Baseline-to-comparison accessibility reports

**Status:** implemented
**Schema:** `accessibility-comparison/1`
**Entry point:** `scanner/compare-scans.mjs`

---

## 1. What changed

- Added a pure comparison engine that reads two stored `report.json` files.
- Added explicit same-URL pairing and reviewed `--page-map` pairing.
- Added canonical/legacy/derived finding identity with provenance.
- Added new, persistent, details-changed, not-observed and not-evaluated classifications.
- Added testing-condition and engine-selection checks.
- Added coverage gaps for unpaired, failed and HTTP-error pages.
- Added JSON schema, Markdown, CSV and accessible static HTML exports.
- Added recursive output redaction.
- Added fixture reports and source pages demonstrating a performance optimization that removes a navigation label and introduces an icon-only button regression.
- Added a no-detected-regression fixture that still states the limits of automated testing.

No scanner, workflow or historical report format changed.

## 2. Reused capabilities

- Existing `report.json` result, engine and scan-context shape.
- Legacy fingerprint/pattern IDs and canonical `a11y/*` fingerprints when present.
- Existing WCAG tags, ACT/rule metadata, locators and evidence.
- Existing `redactStringsDeep` sanitizer.
- Node built-in test runner and existing report conventions.

## 3. Tests

```text
node --test tests/unit/compare-scans.test.mjs
# 19 tests, 19 pass

npm test
# 676 tests, 671 pass, 1 pre-existing timezone failure, 4 skipped

npm run lint
# exit 0

npm run test:bdd
# 4 scenarios, 1 passed, 3 skipped (browser-dependent steps skipped)

npm run test:playwright
# 4 tests, 0 pass, 0 fail, 4 skipped because the Playwright browser was not installed in this environment
```

The BDD step previously hard-coded `/home/runner/work/open-scans/open-scans`; it now uses
`GITHUB_WORKSPACE || process.cwd()` so the workflow scenario can run outside GitHub Actions.

Coverage includes equivalent pages, explicit staging mappings, new findings, persistent findings, changed details, no-longer-observed findings, failed pages, engine changes, viewport changes, missing fingerprints, sensitive-data redaction, historical QualWeb/reflow/Semantica11y reports, `equalaccess` spelling, and accessible exports.

## 4. Manual verification on historical reports

A comparison of two real `issue-66` reports (2026-08-02 and 2026-08-09) read 50 paired production pages, 1,014 baseline findings and 300 comparison findings. The scans used different non-axe engines (`equalAccess` vs `accesslint`), so 714 findings were correctly classified **not evaluated**, not new or fixed. The comparison also recorded 100 HTTP-error-page caveats and 28 baseline-only pages. Conditions and coverage were visible, and `confirmedRemediations` remained `0`.

## 5. Deliberate omissions

- No new scanning in the comparison path.
- No claim that absence proves a fix.
- No combined accessibility/performance/sustainability score.
- No component-ownership inference (Phase C).
- No Firefox Energy Scanner import or live API (Phase D).
- No new crawler, engine or dependency.
- No automatic workflow trigger.

## 6. Known limitations

- Comparison matches should be reviewed when a locator or page structure changes substantially; the engine/rule fallback is intentionally low confidence.
- CSV/HTML are generated artifacts, not published automatically by the scanner.
- Report artifacts must be supplied by the user; the CLI does not discover issues.
- A page returning HTTP 4xx/5xx may be compared if engines ran, but findings can describe the error response.
- Manual testing is still required for visual, keyboard, screen-reader and assistive-technology behaviour.

## 7. Next step

Phase B: an opt-in optimization investigation report over an existing comparison, mapping common optimization scenarios to relevant accessibility evidence and manual checks without adding another scanner.
