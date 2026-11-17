# Optimization accessibility investigation

**Request schema:** [`optimization-investigation-request/1`](../../scanner/schemas/optimization-investigation-request.schema.json)
**Result schema:** [`optimization-investigation/1`](../../scanner/schemas/optimization-investigation.schema.json)
**Engine:** [`scanner/optimization-investigation.mjs`](../../scanner/optimization-investigation.mjs)
**CLI:** `npm run investigate:optimization`

---

## 1. Purpose

This is an **opt-in review layer** over an existing `accessibility-comparison/1` report. It helps a developer ask:

> Does this performance or energy optimization introduce an accessibility regression, remove functionality, or require manual verification?

It does **not** run a scanner. It reuses the findings and evidence already produced by Open Scans and classifies them against common optimization concerns.

## 2. Workflow

```bash
# 1. Compare the stored baseline and optimized reports.
npm run compare:scans -- baseline.json optimized.json --out comparison.json

# 2. Investigate one or more optimization scenarios.
npm run investigate:optimization -- comparison.json \
  --scenario replacing-navigation \
  --scenario reducing-or-removing-animation \
  --out optimization.json \
  --summary optimization.md \
  --html optimization.html
```

Or use a request file:

```json
{
  "schema": "optimization-investigation-request/1",
  "scenarios": [
    {
      "kind": "replacing-navigation",
      "description": "Replaced the primary navigation with an icon-only menu.",
      "components": ["primary-navigation"],
      "pages": ["https://example.gov/"]
    },
    {
      "kind": "reducing-or-removing-animation"
    }
  ]
}
```

```bash
npm run investigate:optimization -- comparison.json \
  --request request.json --html optimization.html
```

`--scenario` is repeatable. A request file can be combined with `--scenario`. Short aliases such as `navigation-replacement` and `css-removal` resolve to the canonical scenario ids.

## 3. Supported scenarios

| Scenario | Typical optimization | Primary concerns |
| :--- | :--- | :--- |
| `removing-unused-javascript` | Delete unused scripts | Names, keyboard, focus, dynamic content, status, headings, landmarks, content |
| `deferring-script-execution` | Defer or split scripts | Names, keyboard, focus, dynamic content, status, form labels, content |
| `replacing-navigation` | Lighter navigation/menu | Names, keyboard, focus, headings, landmarks, ARIA states, content, consistency |
| `lazy-loading-images-or-embeds` | Lazy images/iframes | Image and frame names, dynamic content, content, form labels, reflow |
| `reducing-or-removing-animation` | Remove/reduce motion | Reduced motion, focus, dynamic content, status, content |
| `replacing-third-party-widgets` | Replace an embed | Names, keyboard, focus, landmarks, status, ARIA, dynamic content, content |
| `simplifying-dom` | Remove wrappers/lists/tables | Headings, landmarks, forms, reading order, content, names, keyboard |
| `removing-unnecessary-css` | Strip CSS | Contrast/forced colours, focus, reflow, reduced motion, reading order, content |
| `changing-progressive-enhancement` | Move work later | Keyboard, dynamic content, status, forms, content, names |
| `replacing-component-with-lighter-alternative` | Replace a widget | Names, keyboard, focus, headings, landmarks, ARIA, content, consistency |

## 4. Concerns and statuses

Each concern records:

- WCAG success criteria;
- whether automated evidence exists;
- relevant comparison findings;
- a status;
- page coverage;
- manual checks;
- a qualification where absence could be misread.

| Status | Meaning |
| :--- | :--- |
| `new-finding` | A new automated finding is potentially related to the optimization |
| `persistent-finding` | The finding exists in both scans |
| `details-changed` | The finding identity persists but details changed |
| `not-observed` | The baseline finding is absent from the comparison; **not a fix** |
| `not-evaluated` | Page, engine or evidence was missing; coverage gap |
| `no-matching-automated-finding` | No matching automated evidence; **not a pass** |
| `manual-only` | Existing automated rules do not cover this concern |

Every scenario has `humanReviewRequired: true`, `conformanceClaim: false` and `functionalEquivalenceClaim: false`. The report-level summary repeats those constraints.

## 5. What is automated and what is not

Automated evidence is **reused** from axe, ALFA, IBM Equal Access, AccessLint, reflow-risk and Semantica11y findings already in the comparison. No new scanner or rule engine is introduced.

The following always require human verification:

- keyboard operation and focus trapping;
- screen-reader announcements and live-region timing;
- visual focus indicators;
- `prefers-reduced-motion` and forced-colours behaviour;
- whether removed content was essential;
- whether a lighter component is functionally equivalent;
- whether a status or error remains understandable.

No automated result in this report establishes WCAG conformance or functional equivalence.

## 6. Scenario scoping

- If `pages` are supplied, only findings on those baseline/comparison pages are used.
- `components` are recorded as context but are **not** used to infer ownership from a selector, class or label.
- Scenario-specific rule filters prevent unrelated findings from being presented as caused by the optimization. For example, a navigation replacement does not attribute an unrelated image-alt finding to the navigation.
- Missing pages/engines remain visible through the comparison coverage gaps.

## 7. Output

`optimization-investigation/1` contains:

```text
comparison: baseline/comparison metadata, conditions, engines, summary, limitations
request: scenario descriptions, components, pages, reviewer, notes
scenarios: concern-level findings, statuses, coverage, manual checks
summary: counts, manual task count, no conformance/equivalence claims
manualVerification: deduplicated scenario/concern/task list
limitations
```

Markdown and HTML exports include the same boundaries. The HTML is self-contained, has no JavaScript, uses semantic headings and captioned tables, and supports light/dark, forced colours and reduced motion.

## 8. Boundaries

- This is not an energy measurement, performance score or carbon report.
- No energy, carbon or performance saving is claimed.
- No component graph is reproduced.
- External investigation links may be carried in from the comparison as metadata; no FES/Vital Core data is imported.
- No automatic scan or experiment is triggered.
- No overall accessibility/performance score is produced.
- Human review and assistive-technology testing remain required.
