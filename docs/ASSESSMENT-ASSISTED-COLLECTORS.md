# Assisted collectors (Phase 3 design)

**Status:** Phase 3a is implemented and merged (opt-in capture pass, artifact,
validator and tests; PR #438). Phase 3b is implemented and merged (report inventory,
record prefill and `collectorItemId` link; PR #441). On 2026-11-27 the maintainer accepted
**13.5 s for the six-page reference scan** as the assisted budget (14–18 s observed at the
default settle); this supersedes the original 5% target and unblocks the workflow opt-in
(3c), which is still not implemented. The 25-page targets are unmeasured. Phase 1 is
merged as `6d8fbdc9` (PR #437). Unmet requirements are tracked in
[`ASSESSMENT-ARCHITECTURE.md`](ASSESSMENT-ARCHITECTURE.md) §11.

This note specifies the collector layer so it can be built without changing the default
scan.

**Applies to:** `scanner/assessment/`, `scanner/run-scan.mjs`, the report renderer and
the assessment record schema.

**Read first:** [`ASSESSMENT-ARCHITECTURE.md`](ASSESSMENT-ARCHITECTURE.md),
[`MANUAL-ASSESSMENT.md`](MANUAL-ASSESSMENT.md),
[`ASSESSMENT-DATA-SCHEMA.md`](ASSESSMENT-DATA-SCHEMA.md).

---

## 1. The problem a collector solves

A guided procedure says "review heading structure" or "judge whether the alternative
text conveys the right meaning". A reviewer then has to find every heading, image and
link on every page by hand, and write down what they saw.

A collector removes that search. It walks the rendered page once and records **what is
there**: each heading with its level and position, each image with its text
alternative and where that alternative came from, each link with its text and whether
the text is generic. The reviewer still decides whether any of it is a barrier.

### What a collector is not

| A collector is | A collector is not |
| :--- | :--- |
| An inventory of rendered elements | An evaluation of a success criterion |
| A record of attributes as found | A verdict that an element fails |
| Input to a human record | A substitute for a human record |
| Deterministic, repeatable, testable | Judgement, severity or prioritisation |
| Additive evidence beside `report.json` | New findings in `report.json` |

Three rules follow, and they are not negotiable in review:

1. **No criterion is marked covered because a collector captured an element.** The
   coverage table does not change its counts when collectors run.
2. **No signal is a finding.** Signals describe markup. A row shows what was observed
   and what it does not mean; the reviewer records the outcome.
3. **No record is created from a signal.** A human must write it, and it carries the
   reviewer's method and scope like any other record.

---

## 2. Cost model and why a separate pass

Collectors need a rendered DOM. `report.json` does not contain one, and the existing
artifacts keep findings, not elements. So the choice is where the DOM work happens.

| Option | What it costs | Main risk |
| :--- | :--- | :--- |
| A. Piggyback on an engine's existing page load | No extra navigation | Couples collectors to an engine's lifecycle and page state; a failed engine would silently remove the inventory |
| B. Use a saved HTML snapshot | No navigation if one exists | The scan does not save page HTML; a snapshot is pre-JavaScript or post-load depending on the engine, so it is not reliably the rendered DOM |
| C. Separate opt-in pass | One browser launch and one navigation per page | Adds wall-clock and a second page load per URL |

**Decision: C, behind an explicit profile, with a seam for A later.**

C is the only option whose evidence is easy to describe: a real browser, the same
viewport, the same navigation mode, one page at a time. A is plausible later, but only
after the contract in section 5 is fixed and the engine that would host the capture is
shown to be reliable.

The cost is real but less than it sounds. Axe and Sa11y already launch a browser and
navigate once per scanned URL (`runAxeAudit` and `runSa11yAudit` in
`scanner/run-scan.mjs`), so a scan of N pages already pays for several browser
launches. Section 10 sets the measurement plan and the cap that has to hold before
this runs in CI.

### Default scan stays untouched

The default path keeps every property listed in
[`ASSESSMENT-ARCHITECTURE.md`](ASSESSMENT-ARCHITECTURE.md) section 3: no additional
browser launch, navigation, screenshot, network request or model call. Collectors run
only when the operator asks for them:

```
node scanner/run-scan.mjs <issue-event.json> <output-dir> --assisted
OPEN_SCANS_ASSISTED=1 node scanner/run-scan.mjs <issue-event.json> <output-dir>
```

- `--assisted` wins over the environment variable.
- Both are opt-in; a workflow must pass one explicitly, and section 12 defers that
  workflow change until the budget is measured.
- `run-scan.mjs` currently reads only `argv[2]` and `argv[3]`, so the flag parser must
  leave those positions intact and ignore unknown flags with a warning rather than
  silently reordering inputs.

Without the flag the collector module must not launch a browser, navigate or write an
artifact. A regression test asserts exactly that (section 11).

---

## 3. Scope of Phase 3

| Collector | Captures | Deliberately not captured |
| :--- | :--- | :--- |
| Headings | level, text, DOM path, outline parent, outline position | whether the heading text is useful |
| Images | `src` (as written), alt text and its source, `srcset`, dimensions as rendered, decorative hints | whether the alternative conveys meaning, image content, background images |
| Links | text, computed text alternative and its source, `href`, target, `rel`, image-only links | whether the destination is appropriate or the purpose is clear in context |

Page-level fields: URL, final URL after redirects, HTTP status, document title, an
`iframes` count, and the capture outcome.

**Out of scope for Phase 3:** form controls and errors, tables, widgets, media, iframes
(recorded as a count and skipped), keyboard and focus sequences (Phase 5), screenshots
and recordings, AI-assisted import (Phase 2), and any new automated rule (Phase 4).

Iframes are skipped because traversing them needs a per-frame pipeline and a stable
frame identity, which is the same limitation that keeps frame-scoped axe findings at
the frame element. The artifact says how many frames were skipped per page; it never
implies their contents were reviewed.

---

## 4. Capture behaviour

One browser, one context, one page, sequential navigation. Concurrency 1 keeps memory
and lazy-loading behaviour predictable and makes the artifact reproducible.

- Browser, viewport, colour scheme and executable resolution come from the same
  scan context the engines use, so `PUPPETEER_EXECUTABLE_PATH` handling and
  `PLAYWRIGHT_EXECUTABLE_PATH` overrides are not re-implemented at a new call site.
- Navigation uses the same wait mode and timeout as the automated engines, and the
  same page-load delay, so the DOM captured is the DOM the engines saw.
- No clicking, scrolling, typing, hovering or resizing. Content that only appears
  after interaction or further scrolling is **not** captured, and the report says so.
- No screenshots, no response-body interception, no credential handling, no request
  to any URL that the scan would not already visit.
- Navigation failures are recorded per page with the first line of the error, bounded
  to 200 characters. There are no automatic retries in Phase 3: a retry changes what
  the evidence is and doubles the cost.
- Traversal is limited to the top document. iframes and shadow hosts are counted and
  skipped: an open shadow root cannot be reached by a document-level CSS path, and a
  closed root cannot be detected at all. The counts say what was skipped, not what was
  reviewed.

### Caps

| Cap | Default | Hard maximum | On exceeding |
| :--- | ---: | ---: | :--- |
| Pages captured | 25 | 100 | remaining pages recorded as `not-captured`, run marked `partial` |
| Items per kind per page | 300 | 500 | `truncated.<kind> = true`, captured count recorded |
| Items total | 3,000 | 5,000 | run marked `partial`, per-page flags set |
| HTML snippet | 300 characters | 500 | truncated on a code-point boundary |
| Text and name | 200 characters | 400 | truncated; `length` keeps the original length |

Caps are recorded in the artifact under `capture.caps`, so a reader can tell a short
page from a truncated one. Truncation is never silent and never summarised as "all
elements".

---

## 5. Artifact contract: `a11y-assisted-collectors/1`

Written next to the Phase 1 artifacts as `assessment-collectors.json`. It is additive
and immutable per scan, and it never contains human records. `report.json` is not
modified.

```json
{
  "schema": "a11y-assisted-collectors/1",
  "schemaVersion": 1,
  "generatedAt": "2026-11-26T21:40:00.000Z",
  "reportAssociation": {
    "reportId": "open-scans/issue-398/2026-11-23T21-03-45-397Z",
    "issueNumber": 398,
    "scannedAt": "2026-11-23T21:03:45.397Z"
  },
  "catalogue": {
    "catalogueVersion": "wcag-spine-2.2-2026-11-26",
    "contentSha256": "0fa9693e…"
  },
  "capture": {
    "mode": "assisted",
    "status": "complete",
    "browser": "webkit",
    "browserVersion": "26.0",
    "viewport": { "width": 1280, "height": 720 },
    "colorScheme": "light",
    "startedAt": "2026-11-26T21:38:00.000Z",
    "finishedAt": "2026-11-26T21:40:00.000Z",
    "durationMs": 120000,
    "navigationCount": 6,
    "pagesRequested": 6,
    "pagesCaptured": 6,
    "pagesFailed": 0,
    "caps": { "maxPages": 25, "maxItemsPerKindPerPage": 300, "maxItemsTotal": 3000 },
    "reason": null
  },
  "signalCatalogue": [
    {
      "id": "image-alt-missing",
      "title": "Image has no alt attribute",
      "definition": "An img element has no alt attribute, no role of presentation or none, and is not aria-hidden.",
      "doesNotMean": "That the image lacks a text alternative: a background image, an inline SVG or an ancestor label may provide one, and none of those is captured."
    },
    {
      "id": "image-alt-filename-like",
      "title": "Image alternative looks like a file name",
      "definition": "A non-empty alt attribute matches a file-extension pattern.",
      "doesNotMean": "That the author intended a file name, or that the alternative is useless in context."
    }
  ],
  "pages": [
    {
      "url": "https://example.com/",
      "finalUrl": "https://example.com/",
      "status": "captured",
      "httpStatus": 200,
      "title": "Example",
      "capturedAt": "2026-11-26T21:38:10.000Z",
      "iframesSkipped": 2,
      "shadowRootsSkipped": 0,
      "counts": { "headings": 1, "images": 2, "links": 3, "signals": 1 },
      "truncated": { "headings": false, "images": false, "links": false },
      "error": null,
      "headings": [],
      "images": [],
      "links": []
    }
  ]
}
```

### Item shape

```json
{
  "itemId": "col_6ec2a1f0b3d44e21",
  "kind": "image",
  "ordinal": 4,
  "locator": "main > figure:nth-of-type(2) > img",
  "locatorType": "css",
  "htmlSnippet": "<img src=\"/rates.png\" alt=\"rates.png\">",
  "text": { "raw": "", "normalised": "", "length": 0 },
  "accessibleName": {
    "value": "rates.png",
    "source": "img-alt",
    "branches": ["img-alt"],
    "empty": false
  },
  "attributes": {
    "role": null,
    "ariaHidden": false,
    "ariaLabel": null,
    "displayNone": false,
    "visibilityHidden": false,
    "tabIndex": null
  },
  "signals": [
    { "id": "image-alt-filename-like", "detail": "alt looks like a file name: rates.png" }
  ]
}
```

Heading items add `heading: { "level": 2, "parentItemId": "col_…", "outlineIndex": 3 }`.
Link items add `link: { "href": "…", "target": null, "rel": null, "imageOnly": false }`.

### Invariants

- `pages` is in scan order; items are in DOM order; `ordinal` is the 0-based position
  of the item among items of its kind on that page.
- `signalCatalogue` defines every id that can appear in `signals`. An id used in
  `signals` but absent from the catalogue is a validation error.
- `counts` mirrors the item arrays and the signal total; the validator rejects a
  mismatch.
- `iframesSkipped` and `shadowRootsSkipped` count top-document iframes and open shadow
  hosts that were not traversed. Closed shadow roots cannot be detected, so
  `shadowRootsSkipped` is a lower bound, never a complete count.
- `signals` contains only observed conditions. Absence means "not detected", never
  "passed".
- `itemId` is a 16-hex-character hash of `reportId`, page URL, kind, ordinal, locator
  and normalised name. It is stable for an unchanged page and never reused for a
  different element.
- No field carries `outcome`, `severity`, `verdict`, `wcag`, `conformance` or a
  percentage.
- Every string is HTML-escaped before rendering and control-character stripped at
  capture time, using the same helper the scan already applies to report strings.

---

## 6. Accessible name: a documented subset

Names are computed in the page, at capture time, with a fixed precedence. This is a
subset of AccName 1.2, not an implementation of it.

| Step | Source | Recorded as |
| :--- | :--- | :--- |
| 1 | `aria-labelledby`, ids resolved in the top document, recursion depth ≤ 5, cycle-safe | `aria-labelledby` |
| 2 | `aria-label` with non-empty trimmed value | `aria-label` |
| 3 | Native: image `alt`; heading text content; link text content, or the `alt` of a sole image child when the link has no text | `img-alt`, `text-content`, `img-alt-descendant` |
| 4 | `title` attribute | `title` |
| 5 | Nothing | `none`, with `empty: true` |

Recorded limitations, repeated in the artifact and the report:

- CSS generated content (`::before` / `::after`) is not included.
- `aria-owns`, `aria-describedby` and `aria-details` are not followed for naming.
- Closed shadow roots and cross-origin frames are invisible to the collector.
- The name is computed from the DOM, not from the browser's accessibility tree.
  Browser-specific name computation, role presentation and hidden-node pruning may
  differ.
- A name is recorded as found. It is not judged for usefulness or for matching the
  visible label; the visible-text mismatch case is a separate signal.

If a finding depends on the exact accessible name, the reviewer confirms it in the
browser's accessibility inspector. The report says so next to the names, not only in
this document.

---

## 7. Signals: definitions, not verdicts

A signal is a deterministic observation about markup, defined once, with an explicit
statement of what it does not mean. Phase 3a ships this starter set; additions require
a definition, a false-positive note and a test.

| Signal id | Observed condition | Does not mean |
| :--- | :--- | :--- |
| `image-alt-missing` | `img` has no `alt`, no `role="presentation"`/`"none"`, not `aria-hidden` | That the image lacks a text alternative |
| `image-alt-empty` | `alt=""` | That the image is decorative, or that it is not |
| `image-alt-filename-like` | non-empty `alt` matches a file-extension pattern | That the author intended a file name, or that the name is useless |
| `image-alt-repeats-caption` | `alt` equals the adjacent `figcaption` text | That the repetition is wrong |
| `link-name-empty` | Computed name is empty | That the link has no purpose, e.g. an icon with a CSS label |
| `link-text-generic` | Normalised text is in a fixed list: "click here", "here", "read more", "learn more", "more", "details", "link" | That the purpose is unclear in context; 2.4.4 is judged in context |
| `link-image-only` | The link's only element child is an `img` or `svg` | That the name is missing; the image alternative may contribute it |
| `link-new-window-unannounced` | `target="_blank"` and the name does not mention a new window or tab | That the behaviour must be announced |
| `heading-empty` | Heading has no non-whitespace text and no computed name | That the heading was intended to be empty |
| `heading-level-skip` | Level jumps by more than one from the previous heading in DOM order | That the outline is broken; visual structure may not follow the outline |
| `aria-label-overrides-visible-text` | `aria-label` exists, visible text is non-empty, and the label does not contain the visible text case-insensitively | That the label is wrong; it is a candidate for a 2.5.3 review |

The report shows a signal as a neutral chip with its title, and a tooltip or inline
detail with the definition and the "does not mean" line. No colour implies severity.

---

## 8. Report surface (Phase 3b)

Inside the existing **Manual assessment** section, after the procedure list and before
the recorded-assessments table:

- **Element inventory** — one collapsed `<details>` per page, opened by the reviewer.
  Three tables: headings (level, text, name source, signals), images (rendered size,
  alt and source, signals), links (text, destination, signals).
- A **"Record observation about this element"** button per row, `.js-only`, which
  opens the shared procedure or finding form with `testedUrl`, `elementIdentity`
  (`locator`, `locatorType: "css"`, `accessibleName`, `htmlSnippet`,
  `collectorItemId`) and suggested procedures for the element kind pre-filled. The
  reviewer still chooses outcome and method and writes the note.
- A short limitations block: top document only, no interaction, no scrolling, caps,
  names computed from the DOM.
- With JavaScript disabled the tables, names, signals and limitations are still
  readable; only the record buttons are absent.
- If collection did not run, the section is replaced by one sentence naming the
  reason and does not appear as an empty table.

The coverage section is unchanged. Its rows never link to collector counts as
evidence, and the missing-evidence notice keeps its wording even when an inventory
exists.

`report.md` gains one line under the coverage summary:
`Assisted inventory: <n> of <m> pages captured; see assessment-collectors.json.`
No counts that imply coverage.

### Self-containment

The published `report.html` remains self-contained: the inventory is embedded in the
rendered tables, and the per-item data a record needs (locator, kind, page, accessible
name, snippet, item id) travels in data attributes on each row. It is **not** duplicated
into a second JSON copy inside the report: the rendered table is the single embedded
form, and `assessment-collectors.json` remains the machine-readable artifact. This keeps
the report smaller and avoids two representations drifting apart. If measurement shows
the embedded inventory pushing the report past roughly 5 MB, the fallback is to embed
only the first 50 items per kind per page with an explicit "inventory truncated in this
report; see the sidecar" notice — never a silent difference between the artifact and the
rendered tables. Measured on the 6-page reference scan: +1.53 MB, 1,254 items.

Regenerating a report from `report.json` alone cannot reproduce an inventory it does not
have. `generateInteractiveHtml()` gains an optional collector argument; without it the
section states that no inventory was captured in this scan. It must not invent one and
must not fall back to a different scan's inventory.

---

## 9. Records link

Phase 3b adds one optional field, additively, on top of the merged Phase 1 schema:

```json
{
  "elementIdentity": {
    "locator": "main > figure:nth-of-type(2) > img",
    "locatorType": "css",
    "accessibleName": "rates.png",
    "htmlSnippet": "<img …>",
    "collectorItemId": "col_6ec2a1f0b3d44e21"
  }
}
```

- `collectorItemId` is validated as `/^col_[a-f0-9]{16}$/` or `null`.
- It does not bump `schemaVersion`: it is optional, and a reader that does not know it
  drops it during normalisation, as the schema already specifies.
- Import across scans keeps the id and sets the existing `staleSource` and
  `requiresRevalidation` flags; the UI adds "the element reference is from another
  scan and may no longer exist".
- Merge and conflict rules are unchanged. Two records may reference one item; nothing
  is deduplicated across kinds.
- The field is never written into `report.json` or the collector artifact.

---

## 10. Budget and the CI gate

No number here is a measurement. They are the budget the implementation must meet.

Known costs: one browser launch, one navigation and one page-load delay per captured
page, one DOM traversal, one serialisation. The reference scan for measurement is the
6-page scan used in [`ASSESSMENT-RESOURCE-BUDGET.md`](ASSESSMENT-RESOURCE-BUDGET.md)
(1,484 observations, 233,572 ms), run with the same URLs, browser, viewport and page
cap.

| Measure | Target | Action if missed |
| :--- | :--- | :--- |
| Added wall-clock, 6 pages | ≤ 5% of the reference scan | reduce the default page cap; do not raise the threshold quietly |
| Added wall-clock, 25 pages | ≤ 15% | require an explicit page list for `--assisted` |
| `assessment-collectors.json` | ≤ 4 MB at 25 pages / 3,000 items | lower caps; state the truncation |
| Added report HTML | ≤ 2 MB raw | embed a bounded subset with an explicit notice |
| Browser processes | 1 at a time | sequential capture only |

Exit behaviour: the scan exit code stays `0` when collectors fail, because the
automated evidence is still valid. The failure is loud instead: stderr prints
`⚠️ assisted collectors did not run: <reason>`, `capture.status` is `not-run` or
`partial`, and the report states it. The standalone validation script exits non-zero
on the same condition, so local verification cannot pass silently.

The reason for that split: a failed collector must not unpublish a valid automated
scan, and a green local check must not hide a missing inventory.

**Budget decision, 2026-11-27.** The six-page 5% target was not met. The maintainer
accepted 13.5 s as the absolute six-page budget instead. The settle-delay remeasurement
and the reasoning are in
[`ASSESSMENT-RESOURCE-BUDGET.md`](ASSESSMENT-RESOURCE-BUDGET.md) §9. The 25-page targets
are unchanged and unmeasured.

---

## 11. Tests and verification

| Layer | What it proves | Where |
| :--- | :--- | :--- |
| Pure name computation over a node model | precedence, cycle safety, depth cap, empty results, truncation | `tests/unit/assessment-collectors.test.mjs` |
| Signals | each definition fires exactly on its fixture and not on its control | same file |
| Item ids | stability across runs, change on DOM change, no reuse | same file |
| Caps | truncation flags, counts, hard maximum | same file |
| Gate | default scan launches no collector browser, writes no artifact, and leaves `report.json` byte-identical with collectors enabled | same file, against the exported gate |
| Artifact validation | unknown signal id, missing catalogue, bad item id, malformed page all rejected | same file |
| Browser fixture run (optional, needs a browser) | real DOM capture over local fixture pages: headings, images, links, empty names, aria-labelledby recursion, shadow root, iframe count | `npm run validate:assisted-collectors <fixture-dir> --browser=webkit` |
| Report surface (Phase 3b) | no-JS tables readable, record prefill, no coverage-count change | `assessment-report.test.mjs` plus the browser check |

The fixture run follows `npm run validate:assessment-report`: it is a development tool,
needs an installed Playwright browser, and is not part of `npm test`. The first four
layers and the fixture run exist in 3a; the report-surface checks land with 3b.

Testing the browser-side extractor needs a real browser; a Node-only test of a
serialised function would prove nothing. Pure logic therefore lives in a module the
unit suite imports, and the extractor is covered by the fixture run. Do not move
judgement-bearing logic into the extractor where only the fixture run can see it.

---

## 12. Rollout

| Step | Scope | Status |
| :--- | :--- | :--- |
| 3a | collector module, `a11y-assisted-collectors/1`, `--assisted`/`OPEN_SCANS_ASSISTED` gate, standalone validation script, unit and fixture tests | **Implemented** in PR #438. Artifact validates; the default scan is proven not to call the capture; caps, truncation, names, signals and item-id stability are tested. The fixture run passed in WebKit on 2026-11-26. |
| 3b | report inventory section, record prefill, optional `collectorItemId`, `report.md` line, no-JS checks | **Implemented and merged** (PR #441). The six-page budget was accepted at 13.5 s nominal (14–18 s observed) on 2026-11-27; the 25-page targets are unmeasured. |
| 3c | workflow opt-in: issue-template field or `ASSISTED:` trigger, workflow input, cost note in the issue template | Not implemented. Done after a human review of the measured overhead and of 3b's rendered text; explicit opt-in only. |

3c is deliberately last. A workflow change is a cost and privacy decision, not a code
decision, and it must not make the assisted pass look like part of the default scan.

Do not switch the default scan to assisted. Do not enable 3c before 3b's rendered text
has been reviewed against a real published report.

---

## 13. Non-goals

- No screenshot, video or PDF evidence. Screenshots are deferred with a privacy
  requirement attached.
- No keyboard, focus or interaction capture (Phase 5).
- No user journeys (Phase 6).
- No AI-generated explanations, issue text or record drafts. A model may not read the
  inventory in the runtime path.
- No severity, priority, score or percentage anywhere in the artifact or the report.
- No per-page or per-component coverage filters; coverage stays scan-level.
- No comparison, trend or history metric computed from collector counts.
- No record mutation and no automatic record creation.
- No new automated accessibility rule (Phase 4) and no change to engine selection.

---

## 14. Open questions

1. **Piggyback later?** Option A (capture during an engine's existing page load) would
   remove the second navigation. Decide only after 3a exists, using the seam in
   section 2 and a comparison of captured DOMs. Until then, a second pass is the
   defensible unit of evidence.
2. **Lazy content.** A large real page may load more content on scroll. Phase 3 states
   the limitation and captures the top document as loaded. If reviewers find this
   misleading in practice, add an explicit, bounded "scroll to bottom once" step — but
   that changes the captured DOM and must be recorded as its own mode.
3. **Embedded vs sidecar inventory.** Section 8 sets a size threshold and a bounded
   fallback. The fallback must be chosen before 3b ships, not after a report is
   unusable.
4. **Generic-link list.** The fixed list is English-only and will date. Decide whether
   to make it a catalogue-style data file with provenance, or to drop the signal and
   show only computed names.
5. **Visible-text mismatch.** `aria-label-overrides-visible-text` is closely tied to
   SC 2.5.3 and is easy to over-read. Keep it as a review candidate or drop it until a
   human can state the rule for a reviewer without a WCAG claim.
6. **Catalogue coupling.** The artifact records the catalogue version but does not map
   items to criteria. If reviewers need criterion-linked inventories, that mapping is
   a display-time join with the same "mapped is not evaluated" rule, not a new field on
   each item.

---

## 15. Status

| Capability | Status | Verification |
| :--- | :--- | :--- |
| This design note | Written, unreviewed | PR #438 |
| `a11y-assisted-collectors/1` artifact | Implemented (3a) | `tests/unit/assessment-collectors.test.mjs`; `npm run validate:assisted-collectors <artifact.json>` |
| Headings / images / links capture | Implemented (3a, opt-in) | fixture run over `tests/fixtures/assessment-collectors` in WebKit |
| Accessible-name subset | Implemented (3a) | unit tests for precedence, cycle safety, depth cap and empty names; fixture names |
| Signal catalogue | Implemented (3a) | one unit case per signal; fixture signals |
| `--assisted` gate | Implemented (3a) | gate tests plus the no-capture test for the default scan |
| Report inventory section | Implemented (3b) | `tests/unit/assessment-inventory.test.mjs`; `npm run validate:assessment-inventory -- --browser=webkit` (prefill, save and axe) |
| `collectorItemId` record link | Implemented (3b) | unit tests for valid, malformed and absent ids; saved record inspected in WebKit |
| Workflow opt-in | Not implemented (3c) | — |
| Measured overhead | Measured and accepted (3b) | 6 pages: 13.5 s nominal (14–18 s observed); artifact 1.85 MB; report +1.53 MB. One page truncated at the 300-link cap |
