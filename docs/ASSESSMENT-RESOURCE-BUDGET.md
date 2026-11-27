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

## 9. What was not measured

- Peak memory during scan and report generation.
- Cold-start report generation in CI (Node 24, GitHub runner).
- `file://` report behaviour across Chromium, Firefox and WebKit.
- Runtime performance with large record counts.
- Collector cost (Phase 3a capture exists; not measured yet — it is the Phase 3b gate,
  REQ-03 in [ASSESSMENT-ARCHITECTURE.md](ASSESSMENT-ARCHITECTURE.md) §11).

These are listed again in the Phase 1 handoff.
