# Comparison report interface

**Generator:** [`formatComparisonHtml()`](../../scanner/compare-scans.mjs)
**Format:** self-contained static HTML, no client-side JavaScript
**Related:** Phase A comparison, Phase C component/region evidence, Phase D external references.

---

## 1. Structure

The generated report uses this order:

1. **On this page** — section navigation.
2. **What changed** — plain-language counts for new, persistent, changed, no longer observed and not evaluated findings.
3. **Status terms** — definitions shown next to the counts.
4. **Testing conditions** — browser, viewport, colour scheme, engines and release data.
5. **Page coverage** — paired, unpaired and failed pages.
6. **Component and semantic-region evidence** — conservative region candidates and explicit component ids.
7. **Related performance and energy investigations** — metadata-only external links.
8. **New findings**.
9. **Persistent findings**.
10. **Changed details**.
11. **No longer observed**.
12. **Not evaluated**.
13. **Manual verification**.
14. **Coverage gaps**.
15. **Limitations**.

Each finding table includes page, engine, rule, finding, confidence, confirmed-remediation flag, qualification and an expandable **Evidence** cell with original occurrence/pattern ids, locator, WCAG mapping, ACT Rule ids and evidence reference.

## 2. Plain-language summary

The summary says, in text:

- how many findings are new, persistent, changed, no longer observed and not evaluated;
- how many pages were compared;
- that confirmed remediations are zero by construction;
- whether testing conditions are compatible;
- that **no longer observed does not mean fixed**.

This is a count summary, not a score.

## 3. Status terms

The interface defines each status in a `<dl>`:

- new;
- persistent;
- changed details;
- no longer observed;
- not evaluated.

Status is always written as text; colour alone is never used.

## 4. Evidence details

Each finding has a native `<details>/<summary>` disclosure containing:

- original occurrence id;
- pattern id;
- locator;
- WCAG criteria;
- ACT Rule ids;
- evidence reference.

No JavaScript is needed to open or close the evidence. The complete machine-readable comparison remains the JSON export.

## 5. Manual verification

The report generates tasks based on what the comparison actually contains:

- keyboard and assistive-technology testing for changed components;
- review of every new finding;
- review of changed details;
- verification that no-longer-observed findings are actually remediated;
- review of coverage gaps;
- re-run under comparable conditions when they differ;
- re-run with a common engine set when engines differ;
- external investigation review when references are attached;
- zoom, forced-colours and reduced-motion checks.

These tasks are part of the report, not a claim that automated testing is sufficient.

## 6. Accessibility of the interface

- Semantic `<header>`, `<nav>`, `<main>`, headings and lists.
- Skip link to main content.
- Section navigation with descriptive link text.
- Tables use `<caption>`, `<thead>`, `<th scope="col">` and row headers.
- Status is not conveyed by colour alone.
- Native `<details>` disclosures are keyboard-operable and require no JavaScript.
- Light and dark colour schemes.
- Forced-colours support.
- `prefers-reduced-motion` disables transitions/animations.
- Long table content wraps; data tables may still scroll at narrow widths under the WCAG table exception.
- Print styles preserve table headers and avoid splitting rows.

## 7. Boundaries

- No combined accessibility/performance/sustainability score.
- No claim that a clean comparison proves conformance or functional equivalence.
- External investigation references are metadata-only.
- Component/region evidence is not component ownership.
- The report remains understandable without JavaScript; there is no script in the file.
