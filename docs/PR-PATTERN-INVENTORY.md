# Accessibility pattern and container inventory

**Status:** implemented
**Schema:** `a11y-pattern-inventory/1`
**Artifacts:** `report.json`, `report.md`, `report.html`, `patterns.csv`

---

## 1. What changed

- Added a per-scan pattern inventory grouped by existing legacy/canonical pattern IDs.
- Added semantic-container candidates: navigation, form, form-control, header, footer, main, table, list, dialog, etc.
- Added category counts, unique-pattern counts, occurrence/page counts and first/last seen.
- Added a CSV artifact (`patterns.csv`) and JSON/Markdown/HTML sections.
- Added HTML-tag fallback when the locator is missing.
- Added explicit “not component ownership” and “not a component graph” boundaries.

No finding IDs, fingerprints or existing report formats were changed.

## 2. Tests

```text
node --test tests/unit/pattern-inventory.test.mjs
8 tests, 8 pass

node --test tests/unit/component-association.test.mjs
6 tests, 6 pass

node --test tests/unit/interactive-report.test.mjs
109 tests, 109 pass

node --test tests/unit/run-scan-output.test.mjs
2 tests, 2 pass
```

Full suite:

```text
PUPPETEER_CACHE_DIR=.tmp/puppeteer npm test
# 725 tests, 720 pass, 1 pre-existing timezone failure, 4 skipped
```

`npm run lint` passes. `npm run test:bdd` reports 1 passed and 3 browser-dependent skipped scenarios.

## 3. Boundaries

- Container categories are selector/HTML-derived candidates, not ownership.
- No FES component graph or MCP data is imported.
- No performance/energy attribution.
- No label-based identity.
- No combined score.
- No cross-scan pattern store yet; each scan writes its own inventory with stable IDs/first-last seen.

## 4. Next

If pattern trends become a requirement, add an aggregate pattern history keyed by the existing pattern IDs rather than creating a new identity system.
