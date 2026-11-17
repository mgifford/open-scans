# PR — Accessibility context handoff for FES

**Status:** implemented
**Schema:** `a11y-accessibility-context/1`
**Artifacts:** `accessibility-context.json`, `accessibility-context.csv`

---

## 1. What changed

- Added occurrence-level accessibility context with page URL, selector, locator source, pattern/display ids, rule, engine, WCAG/ACT, semantic container and source reference.
- Added a compact JSON and CSV artifact next to the full scan report.
- Added `accessibilityContext.summary` to `report.json`.
- Added schema validation and tests.
- Persisted the new artifacts in all three scan workflows.
- Added links to the artifacts in scan comments.
- Added FES handoff and product-direction documentation.

## 2. Why occurrence-level

`patterns.csv` is one row per unique pattern. FES needs to join a **specific page and selector** to a component instance, so the handoff is one record per finding occurrence, with unmatched/HTML-only evidence preserved.

## 3. Join boundaries

- FES owns component attribution.
- Open Scans container categories are candidates, not ownership.
- FES must keep unmatched and page-level observations.
- No label matching.
- No energy/performance attribution.
- No combined score.
- No live API or MCP dependency.

## 4. Tests

```text
node --test tests/unit/accessibility-context.test.mjs
5 tests, 5 pass

node --test tests/unit/run-scan-output.test.mjs
2 tests, 2 pass (with PUPPETEER_CACHE_DIR)

PUPPETEER_CACHE_DIR=.tmp/puppeteer npm test
843 tests, 838 pass, 1 pre-existing timezone failure, 4 skipped

npm run lint
pass

npm run test:bdd
4 scenarios, 1 passed, 3 browser-dependent skipped
```

The one unit failure is the pre-existing `generate-reports-html` timezone failure.

## 5. Next

Open a separate, optional FES PR that:

1. loads/validates `a11y-accessibility-context/1`;
2. joins page URL and selector to `component-graph/1`;
3. shows a “Related accessibility evidence” section;
4. keeps unmatched findings visible;
5. does not add accessibility engines to FES or a combined score.
