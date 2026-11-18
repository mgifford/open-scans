# Same-viewport protocol: pairing Open Scans accessibility evidence with Firefox Energy Scanner

**Status:** defined, not yet executed against a real site
**Date:** 2026-11-18
**Contracts:** `a11y-accessibility-context/1` → `fes-accessibility-join/1`

---

## 1. Why this protocol exists

Page matching survives a different run and a different viewport: both tools
normalise the same page URLs. **Component association does not.** A responsive
layout can move, hide or re-parent an element at another width, so the same CSS
selector may resolve to a different element, to several elements, or to none.

The real issue #391 pair used 1,024×768 for the Open Scans scan and 1,440×900
for the FES crawl. With the opt-in DOM pass, 4,838 of 5,486 observations were
associated with a nearest recorded ancestor, every one at
`confidence: low`. That count is an association, not attribution, and it
cannot become a component-level claim without a same-viewport pair.

This protocol produces the pair. It does not produce a score, a conformance
claim, or energy evidence.

---

## 2. What a same-viewport pair can and cannot show

| A same-viewport pair can show | It still cannot show |
| :--- | :--- |
| Which measured pages the Open Scans scan and the FES run share | That a component caused a finding |
| Which observations resolve to one element at that width | That a component used more or less energy |
| Which component element most tightly contains that element | That a selector-derived container is component ownership |
| Whether an association is exact-text or DOM-validated | Whether the page meets WCAG |
| Where the two scans still differ (viewport, browser, run) | Whole-site prevalence from a sample of pages |

Keep these boundaries in the report text and in any handoff.

---

## 3. Choose one viewport for both sides

Use a size that is a named preset on both sides. The simplest pair is
**Tablet landscape (1024×768)**.

| Open Scans preset | Size | Notes |
| :--- | :--- | :--- |
| Desktop | 1280×800 | Open Scans default |
| Tablet landscape | 1024×768 | **Recommended:** named preset on both sides |
| Tablet portrait | 768×1024 | Tall narrow layout |
| Mobile portrait | 390×844 | Narrow layout, more reflow |
| Mobile landscape | 844×390 | Short layout |
| Custom | `WIDTHxHEIGHT` | Edit the issue body to `Viewport: WIDTHxHEIGHT` |

FES defaults to **1440×900**, which is not an Open Scans preset. Either pass
`--viewport 1024x768` to FES or request the custom `1440x900` in Open Scans.
Do not leave one side on its default and assume they match.

Also match what you reasonably can:

- **Browser.** FES crawls with Firefox. In the Open Scans scan form choose
  **Firefox** so the same engine lays out the page. Chromium is the Open Scans
  default, so this is an easy mismatch to make.
- **Color scheme.** FES measures one rendering. Choose **Light only** in Open
  Scans, or record that both schemes were scanned and which one the context
  describes.
- **URL list.** Use exactly the same URLs, as described in steps 4 and 5.

The context records the viewport and browser it used in `scan.scanContext`. The
FES result records its viewport in `environment.viewport`. The report shows both.

---

## 4. Produce the Open Scans context

1. Open a new issue with the **Scan Request** template. The title must start
   with `SCAN:`, for example `SCAN: same-viewport pair for example.org`.
2. Paste the URL list, one URL per line.
3. Set **Viewport** to `Tablet landscape (1024×768)` (or a custom size).
4. Set **Browser** to `Firefox`.
5. Set **Color scheme** to `Light only`.
6. Save the issue and wait for the `Scan Request` workflow.

Record these facts before continuing:

| Fact to record | Where to find it |
| :--- | :--- |
| Issue number | The issue URL |
| Scan timestamp | The report directory name, `reports/issues/issue-<n>/<timestamp>/` |
| Report URL | `scan.reportUrl` in the context, or the issue comment |
| Context file | `accessibility-context.json` in the same report directory |
| Viewport actually used | `scan.scanContext.viewport` inside the context |

Check before continuing:

- `summary.observations` is greater than 0;
- `scan.scanContext.viewport` is the size you chose;
- the context was produced after the explicit `selectorType` change, so records
  carry `selectorType` rather than relying on inference.

---

## 5. Produce the FES result for the same URLs

Use the FES build from `main`:

```bash
npm ci
npm run build
```

For exact URL parity, measure the same list in one result:

```bash
node dist/cli/index.js measure \
  "https://example.org/" "https://example.org/about" \
  --no-energy --viewport 1024x768 --runs 1 --warmups 0 \
  --out results/same-viewport
```

`--no-energy` and one run make this a **structure-only** run. Do not present it
as energy evidence. A `crawl` of the same site is acceptable when its page set
already matches the Open Scans URL list; check `summary.unmatched` in step 6 and
fix the URL list if it does not.

Record the result file, the browser version, the run date and the exact
`--viewport` value.

---

## 6. Join the pair

```bash
node dist/cli/index.js report results/same-viewport/<result>.json \
  --accessibility-context accessibility-context.json \
  --validate-dom --dom-semantic-only
```

- FES refuses DOM ancestor matching when the two viewports differ, unless
  `--dom-allow-different-viewport` is passed. That flag is for the explicitly
  low-confidence broad association only; it is not a fix for a mismatched pair.
- `--dom-semantic-only` excludes structural class heuristics, which are not
  component identity. Use it for any claim stronger than "associated".
- The ordinary join (without `--validate-dom`) stays browser-free and
  page-level; it is unaffected by this protocol.

---

## 7. Acceptance checks

| Check | Pass condition | Where to look |
| :--- | :--- | :--- |
| Viewports match | Source and FES sizes are identical | `summary` text and `match.reason` |
| No silent skip | No `dom-*skipped*` limitation | `limitations` |
| Pages paired | `summary.unmatched` is 0, or every miss is explained | Unmatched table |
| Exact matches kept | Exact CSS matches still have `basis: exact-selector` | `summary.byBasis` |
| Ancestor matches are honest | `basis: ancestor-selector`, `domValidated: true`, `confidence: medium` at most | `summary.byBasis`, match cells |
| Page-level reasons kept | Failures, ambiguity and the cap stay visible | `match.reason` |
| No ownership claim | No "owned by", "caused by", or "attributed to" wording | Report text |
| No combined score | No accessibility/performance/energy score | Report text |
| HTML-only and XPath preserved | They remain visible, not dropped | Tables |

Anything that fails is a finding about the pair, not a reason to relax the
boundaries.

---

## 8. Record the pair

Add to the FES report or the cross-project handoff:

- Open Scans issue number, scan timestamp and report URL;
- FES result file and run date;
- both viewports, both browsers;
- `summary.observations`, `pageMatched`, `unmatched`, `byBasis`;
- the exact command lines used;
- the sidecar size and SHA-256 if you publish it;
- one sentence on what the pair supports and what it does not.

---

## 9. Known limits

- There is no shared component id yet. Even a same-viewport DOM-validated
  ancestor is an association; see
  [component-attribution-policy.md](component-attribution-policy.md).
- Same browser engine and viewport reduce, but do not remove, rendering
  differences from operating-system fonts and scrollbars.
- A structure-only FES run has no energy evidence and must not be presented as
  if it did.
- Multi-megabyte sidecars remain a usability problem; use the per-page summary
  and filter before opening the full table.
