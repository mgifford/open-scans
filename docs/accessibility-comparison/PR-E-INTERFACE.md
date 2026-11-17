# PR E — Comparison report interface

**Status:** implemented
**Generator:** `formatComparisonHtml()` and `formatComparisonMarkdown()`

---

## 1. What changed

- Added an **On this page** navigation to the static comparison report.
- Replaced the bare count list with a plain-language **What changed** section.
- Added a status-terms definition list.
- Added expandable **Evidence** details for every finding: occurrence/pattern ids, locator, WCAG, ACT and evidence reference.
- Added a **Manual verification** section driven by comparison conditions, coverage, engines, no-longer-observed findings and external references.
- Added mobile, print, forced-colours and reduced-motion styling.
- Added manual-verification tasks to the JSON comparison and Markdown export.
- Preserved all existing comparison tables, coverage and limitations.

No scan report, finding id, comparison classification or external reference was changed.

## 2. Design decisions

- **Static first.** The report has no JavaScript at all; `<details>` provides evidence disclosure.
- **No score.** The summary is counts and statuses, never a combined grade.
- **No false certainty.** The interface repeats that no-longer-observed is not fixed and that automated checks cannot establish conformance.
- **Evidence in context.** Every finding row carries its original identifiers and locator in a native disclosure.
- **Manual work is explicit.** The report lists what still needs keyboard, screen-reader, zoom, forced-colours, reduced-motion and source review.
- **No new dependency.** Only semantic HTML and CSS.

## 3. Tests

```text
node --test tests/unit/compare-scans.test.mjs
# 26 tests, 26 pass
```

New coverage includes:

- manual tasks for new, no-longer-observed and coverage-gap findings;
- condition and engine rerun tasks;
- section navigation;
- plain-language summary and status terms;
- evidence details;
- manual section in HTML and Markdown;
- backward compatibility when old comparison JSON has no manual tasks.

## 4. Full-suite result

```text
PUPPETEER_CACHE_DIR=.tmp/puppeteer npm test
# 711 tests, 706 pass, 1 pre-existing timezone failure, 4 skipped
```

`npm run lint` passes. `npm run test:bdd` reports 1 passed and 3 browser-dependent skipped scenarios.

## 5. Next step

Phase F: extend comparison JSON and CSV exports with the complete comparison evidence, including external references and coverage limitations, while preserving existing report formats.
