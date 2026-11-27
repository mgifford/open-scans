# Assessment resource budget and measured overhead

**Status:** Phase 1 measurements taken 2026-11-26 on one machine. These are engineering
measurements, not guarantees, and they do not cover Phases 2–7.

---

## 1. The budget

Automated-only scanning must stay cheap. Phase 1 added:

- no extra browser launch;
- no extra navigation or interaction;
- no extra screenshots;
- no extra LLM calls;
- no extra network request during scan or report use;
- one extra JSON artifact and two extra report sections.

Target: **under 2% additional scan and report-generation time** for the automated-only
profile. Measured: **≈0.013% of total scan time** on the reference scan.

---

## 2. Method

- Reference summary: `reports/issues/issue-398/2026-11-23T21-03-45-397Z/report.json`
  (6 scanned pages, 1,484 observations, 5 engines).
- `generateInteractiveHtml(summary)` called 3 times to warm up, then 10 times; median
  reported.
- Before/after measured with the same fixture on the same machine.
- Component timings measured separately with the same warm-up.
- Compression measured with `zlib.gzipSync` at default level.

**Caveats**

- Local Node is v22.20.0; `package.json` requires ≥24. Absolute times will differ in CI.
- One fixture, one machine. The 6-page fixture is smaller than a typical 49-page scan,
  so the fixed assessment cost is a larger share here than it would be in production.
- `node --test` parallel load affects wall-clock timings; medians are used to reduce it.

---

## 3. Report generation time

| Measurement | Before | After | Delta |
| :--- | ---: | ---: | ---: |
| `generateInteractiveHtml` median | 23.88 ms | 29.79 ms | +5.91 ms |
| `generateInteractiveHtml` min | 17.17 ms | 22.02 ms | +4.85 ms |

Breakdown of the added work:

| Step | Median |
| :--- | ---: |
| Load and hash-check the catalogue (cold, once per process) | < 1 ms |
| `buildAssessmentCoverage()` | 2.40 ms |
| Render coverage section | 1.58 ms |
| Render workspace | 0.83 ms |
| Build inline runtime bundle (cached after first call) | ~0 ms |
| **Total added per report** | **≈5 ms** |

Against the reference scan's 233,572 ms total elapsed time, 5 ms is **0.002%**. Even if
report generation were repeated ten times per scan it would remain far below the 2%
target.

---

## 4. Report size

| Measurement | Bytes | Gzip |
| :--- | ---: | ---: |
| Report HTML before | 805,911 | — |
| Report HTML after | 1,064,498 | — |
| Added coverage section | 97,896 | 9,089 |
| Added workspace (20 procedures + forms) | 73,651 | 15,011 |
| Added CSS | 8,317 | 1,785 |
| Added inline runtime | 80,738 | 19,478 |
| **Assessment additions** | **260,602** | **45,363** |
| Already-published `report.html` (reference) | 842,413 | 51,662 |

So the fixed assessment cost is about **+260 KB raw, +45 KB gzip** per report. The
uncompressed growth is large because the guidance must be readable offline; the
compressed growth is about 45 KB, which is smaller than the existing report's own
compressed payload.

### Decisions taken to keep it bounded

- The runtime reads criteria and procedure text from the rendered HTML instead of a
  duplicated JSON catalogue.
- The embedded JSON is identity only (report, catalogue version, hash, pages).
- One shared procedure form instead of one form per procedure (saved ≈66 KB).
- Scan-level engine limitations are stated once, not repeated in every criterion row.
- Coverage rows are rendered for the declared conformance target (A/AA); AAA criteria
  are counted and listed in a collapsed block rather than rendered as rows.
- No images, screenshots or fonts are added.

### Known size risk

A clean, one-page scan has a small report, so a fixed +260 KB is proportionally large.
If this becomes a problem, the next step is to gate procedure guidance behind a
collapsed `<details>` per procedure (no byte saving) or to ship the guidance as an
optional companion file (breaks single-file offline use). Neither has been done.

---

## 5. Scan cost

`scanner/run-scan.mjs` adds one call after the existing artifacts are built:

```js
summary.assessmentCoverage = buildAssessmentCoverage({ summary, catalogue, actCoverage, generatedAt });
```

- Reads from memory only.
- Writes one extra JSON file (`assessment-coverage.json`), 60–90 KB for the reference
  scan, uncompressed.
- Appends a short coverage summary to `report.md`; the added Markdown is under 2 KB.
- No browser, network or filesystem work beyond that write.

Observed side effects on the reference run: none. The scan's engine configuration,
rule selection and output artifacts are unchanged.

---

## 6. Memory

- Catalogue: 86 criteria plus ACT implementation index, loaded once per process
  (~1–2 MB parsed).
- Coverage model: one object per criterion, a few hundred bytes each.
- Runtime bundle: ~80 KB string, cached after first generation.

Peak memory was not profiled. This is an outstanding measurement.

---

## 7. Browser runtime cost

- One inline script, executed after the report's existing script.
- No network access, no timers except a 2-second object-URL revoke after download, and
  a 15-second disarm timer for the reset confirmation.
- DOM work is bounded by the number of procedure cards (20) and records (validated to a
  maximum of 2,000).
- Saving serialises only the assessment document (records), not the scan evidence.

Not measured: runtime performance on low-end devices, and behaviour with 2,000 records.
Both are outstanding.

---

## 8. Budgets to enforce in later phases

| Phase | Budget | Enforcement |
| :--- | :--- | :--- |
| 3 — collectors | per-page instance cap, byte cap, wall-clock cap; one DOM traversal per collector group | must be configurable and reported when truncated |
| 5 — keyboard | max Tab presses, max focus events, max wall-clock; stop on repeated focus sequence | hard stop, never an unbounded loop |
| 6 — journeys | manual only; no automatic transaction, no submission of real data | documented per journey |
| 7 — VITAL | assessment documents remain portable; no continuous monitoring here | contract-level |

Any future AI assistance must be explicitly enabled, separately budgeted, and labelled
unverified. Nothing in this phase uses a model at runtime.

---

## 9. Phase 3b assisted inventory (measured 2026-11-26)

Method: `runAssistedCapture` against the six pages of the reference scan, same browser,
viewport, colour scheme and 2-second settle delay the design requires. This is the
standalone collector pass (no engines), so it measures the **added** wall-clock, not the
total scan time.

| Measure | Target | Measured | Result |
| :--- | :--- | :--- | :--- |
| Added wall-clock, 6 pages | ≤ 5% of the reference scan | 13,544 ms = 5.8% of 233,572 ms; remeasured 14.3–18.1 s | **Accepted** as an absolute 13.5 s budget (2026-11-27) |
| `assessment-collectors.json` | ≤ 4 MB at 25 pages / 3,000 items | 1.85 MB at 6 pages / 1,253 items | Met for this fixture; 25 pages unmeasured |
| Added report HTML | ≤ 2 MB raw | 1,532,263 bytes (1,081,055 → 2,613,318) | Met |
| Browser processes | 1 at a time | 1 | Met |

Per-page item counts ranged from 12 to 421 (headings, images and links combined).
**One cap was hit:** `activity.html` reached the 300-link per-kind cap, so its link
table is truncated. The report and the artifact both say so. An earlier version of this
section said nothing was truncated; that was wrong and is corrected here.

### Decision (2026-11-27)

The maintainer accepted **13.5 seconds as the budget for the six-page reference scan**.
The 5% figure was the design's initial target; the accepted budget is absolute. This is
recorded as a deliberate decision, not a quiet adjustment of the threshold.

Because the measured range at the default 2-second settle was 14.3–18.1 s, treat 13.5 s
as the nominal budget and 14–18 s as the observed range; the difference is network
variance, not collector work. The decision unblocks Phase 3c.

### Settle-delay remeasurement (2026-11-27)

Same six pages, same browser and viewport, two runs per setting. `runAssistedCapture`
launches a fresh browser per run, so these figures include launch cost.

| Settle delay | Runs (ms) | Median | Items | Signals | Artifact bytes |
| :--- | :--- | ---: | ---: | ---: | ---: |
| 2,000 ms (default) | 18,136 / 14,261 | 18,136 | 1,253 | 742 | 1,853,813 |
| 1,000 ms | 13,920 / 15,357 | 15,357 | 1,253 | 742 | 1,853,813 |
| 500 ms | 14,300 / 14,422 | 14,422 | 1,253 | 742 | 1,853,813 |

The inventory was **identical at every setting**: same item count, same signal count,
same bytes. On these static pages the settle delay changes only how long the pass waits.

Shortening it is not recommended now:

- it saves about 1–3 s, not the 9 s a simple delay subtraction would suggest;
- navigation is the floor at roughly 14 s for these six pages, so the original 5% target
  is unreachable even at a 500 ms settle;
- the design deliberately uses the engine's settle delay so the captured DOM is the DOM
  the engines saw. Giving that up for a small gain needs evidence from JS-heavy pages
  first.

Re-measure on a JS-heavy fixture before changing the default. The 2-second delay stays.

### Why the 5% target was missed

The cost is dominated by one navigation plus the 2-second settle per page: roughly 12 of
the 13.5 seconds. The design deliberately uses the same settle delay as the engines so the
captured DOM is the DOM the engines saw. Shortening it would change what the inventory is,
not just how long it takes.

The design's prescribed action for a missed target is to reduce the default page cap. That
does not help a 6-page run where every page is already inside the cap.

### Options not taken

1. **Shorten the assisted settle delay.** Measured: no inventory change on this fixture,
   about 1–3 s saved. Not taken; re-measure on JS-heavy pages first.
2. **Capture an explicit subset of pages.** No guidance was given and no subset selection
   is implemented. It remains an option for 25-page runs, not a current behaviour.

### What this does not measure

- A 25-page run, where the 4 MB artifact target and the 15% wall-clock target apply.
- JS-heavy pages where the settle delay matters more (or less).
- Peak memory, and Chromium or Firefox.
- The second report render: `report.html` is rewritten after collection so the inventory
  is included. The render itself is about 30 ms at this size and is not in the 13.5 s.

---

## 10. What was not measured

- Peak memory during scan and report generation.
- Cold-start report generation in CI (Node 24, GitHub runner).
- `file://` report behaviour across Chromium, Firefox and WebKit.
- Runtime performance with large record counts.
- Collector cost (Phase 3a capture exists; not measured yet — it is the Phase 3b gate,
  REQ-03 in [ASSESSMENT-ARCHITECTURE.md](ASSESSMENT-ARCHITECTURE.md) §11).

These are listed again in the Phase 1 handoff.
