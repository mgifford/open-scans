# Accessibility pattern and container inventory

**Schema:** [`a11y-pattern-inventory/1`](../scanner/schemas/a11y-pattern-inventory.schema.json)
**Module:** [`scanner/pattern-inventory.mjs`](../scanner/pattern-inventory.mjs)
**Report fields:** `report.json` → `patternInventory`; `report.md`; `report.html`; `patterns.csv`

---

## 1. What is already tracked

Open Scans already records, for each finding:

- a page-specific **instance fingerprint**;
- a cross-page legacy **Pattern ID** (`A11Y-xxxxxxxx`);
- a versioned canonical **`a11y/pattern/v1`** fingerprint in newer scans;
- engine, rule, WCAG tags, locator/XPath, HTML evidence and first-seen time.

It also groups consolidated findings by engine and rule for the HTML report. That is **rule/pattern awareness**, but it does not answer:

- how many unique patterns exist in total;
- which patterns sit in navigation, forms, headers, footers, tables, dialogs, etc.;
- which container element is the candidate source of a pattern;
- how many pages/occurrences a container category represents.

## 2. What the inventory adds

`patternInventory` groups findings by their **existing stable pattern identity** and attaches a conservative semantic-container candidate:

```json
{
  "patternId": "A11Y-aaaaaaaa",
  "displayId": "A11Y-aaaaaaaa",
  "identitySource": "legacy",
  "engine": "axe",
  "rule": "link-name",
  "category": "navigation",
  "container": {
    "category": "navigation",
    "label": "Navigation",
    "element": "navigation",
    "basis": "selector-token",
    "confidence": "low",
    "ownershipEstablished": false
  },
  "occurrenceCount": 2,
  "pageCount": 2,
  "pages": ["https://example.gov/", "https://example.gov/services"]
}
```

The summary answers the “how many unique patterns?” question overall and by container:

```json
{
  "uniquePatterns": 12,
  "occurrences": 48,
  "pages": 9,
  "byCategory": {
    "navigation": { "patterns": 3, "occurrences": 14, "pages": 9 },
    "form": { "patterns": 2, "occurrences": 6, "pages": 4 },
    "form-control": { "patterns": 4, "occurrences": 20, "pages": 7 }
  },
  "unassignedPatterns": 1,
  "ownershipEstablished": false
}
```

## 3. Container categories

`navigation`, `banner` (header), `contentinfo` (footer), `main`, `complementary`, `search`, `form`, `form-control`, `table`, `list`, `heading`, `link`, `button`, `image`, `frame`, `dialog`, `live-region`, `document`, `unknown`.

Inference order prefers a semantic ancestor in the selector/XPath:

- `nav a.icon` → `navigation`;
- `form#search input` → `form`;
- `input#email` → `form-control`;
- `header.site-header` → `banner`;
- `footer` → `contentinfo`;
- `table.results td` → `table`;
- `.widget` with no semantic evidence → `unknown`.

If the locator is missing, the first tag in the recorded HTML is used as a fallback. A `<meta>` or page-level finding maps to `document`.

## 4. What it is not

- **Not component ownership.** A container is a candidate derived from a selector or explicit component id; it is not proof that the container causes the defect.
- **Not the Firefox Energy Scanner component graph.** No component graph is copied or imported.
- **Not Playwright MCP data.** Open Scans does not receive MCP data in its scan runtime.
- **Not a performance or energy attribution.** A navigation finding does not mean navigation consumes excessive energy.
- **Not a merged category by label.** Two components/regions with the same label remain separate; labels are not identity.
- **Not a score.** Counts and categories only.

## 5. Outputs

- `report.json` — full `patternInventory` with every pattern, pages, first/last seen, examples, container and category indexes.
- `report.md` — pattern counts by category, locator coverage, and the first 20 patterns by container.
- `report.html` — accessible “Pattern and container inventory” section with category and pattern tables and a `patterns.csv` link.
- `patterns.csv` — one row per pattern with category, container element/basis/confidence, component id/label, pattern/display id, identity source, rule, engine, WCAG/ACT, occurrences, pages, locator coverage, first/last seen and example page/locator.

`patterns.csv` is generated next to the other report artifacts.

## 6. Cross-scan awareness

Each scan writes its own inventory. Pattern identities are stable across scans, and `firstSeenAt`/`lastSeenAt` are retained, so future trend analysis can compare pattern counts without changing finding IDs. The current inventory is per-scan; it does not yet add a new cross-scan pattern store.

## 7. Tests

- `tests/unit/pattern-inventory.test.mjs` — grouping, navigation/form/form-control/header/footer/table/unknown, canonical identity, duplicates, reflow/Semantica11y and CSV.
- `tests/unit/component-association.test.mjs` — selector and HTML tag container inference.
- `tests/unit/run-scan-output.test.mjs` — `patternInventory` in JSON and `patterns.csv` generated.
- `tests/unit/interactive-report.test.mjs` — accessible inventory section.
