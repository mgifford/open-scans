# PR F — Complete comparison exports

**Status:** implemented
**JSON:** `accessibility-comparison/1`
**CSV:** one row per finding, original columns preserved, metadata columns appended

---

## 1. What changed

- Added baseline/comparison scan ids, issue URLs, releases and source report paths to CSV.
- Added browser, viewport and colour-scheme columns.
- Added page mapping, match basis, WCAG, impact and component/region columns.
- Added external investigation ids and coverage-gap kinds.
- Added comparison limitations to each CSV row.
- Added CSV formula-injection protection.
- Documented the complete column contract and compatibility rules.
- Added tests for metadata completeness, injection protection and older JSON compatibility.

No existing column was renamed or reordered, and no JSON field was removed.

## 2. Compatibility

- The original Phase A CSV columns remain first in their original order.
- New columns are appended.
- Older comparison JSON without Phase C/D/E fields still exports.
- No report URL or historical report file changed.

## 3. Tests

```text
node --test tests/unit/compare-scans.test.mjs
# 30 tests, 30 pass
```

Added coverage for:

- scan/source/condition metadata;
- external investigation ids and coverage-gap kinds;
- formula-shaped cell sanitization;
- full JSON evidence fields;
- older comparison JSON without newer optional fields.

## 4. Full-suite result

```text
PUPPETEER_CACHE_DIR=.tmp/puppeteer npm test
# 715 tests, 710 pass, 1 pre-existing timezone failure, 4 skipped
```

`npm run lint` passes. `npm run test:bdd` reports 1 passed and 3 browser-dependent skipped scenarios.

## 5. Next

Phase F completes the planned export surface. Remaining work is review-driven: merge the stacked PRs, verify the generated comparison report with real data, and address any follow-up accessibility or data-contract findings.
