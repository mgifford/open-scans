# Accessibility Insights for Web: reuse review and attribution

**Status:** Phase 0 review complete for licence and rule configuration. No upstream code
has been copied into Open Scans. This document is the reuse manifest required before any
adaptation, and it records what was inspected, what was decided, and what remains
unreviewed.

Upstream is MIT-licensed. Any future adaptation must keep Microsoft's copyright notice
and the MIT licence text, and must add an entry to the manifest table in section 5.

---

## 1. Upstream snapshot reviewed

| Field | Value |
| :--- | :--- |
| Repository | https://github.com/microsoft/accessibility-insights-web |
| Default branch | `main` |
| Commit reviewed | `97ad835b33c8c15553c238da28aa3f614f12f287` |
| Commit date | 2026-11-03 |
| Commit subject | `chore: Upgrade fast-uri package (#7822)` |
| Licence | MIT — `Copyright (c) Microsoft Corporation. All rights reserved.` (`LICENSE` verified) |
| Review date | 2026-11-26 |
| Reviewer | AI agent (see `docs/AI-USAGE-HISTORY.md`); not yet human-reviewed |

Open Scans does not depend on the upstream package at runtime and does not import the
browser extension, React, React DOM, Fluent UI, Grunt, extension messaging, telemetry or
its reporting framework.

---

## 2. What was inspected

| Path | What it establishes | Used for |
| :--- | :--- | :--- |
| `LICENSE` | MIT, Microsoft copyright | attribution requirement |
| `packages/axe-config/README.md` | the package supplies **axe core run options used by default in FastPass scans** | scope of any configuration comparison |
| `packages/axe-config/index.js` | re-exports a build-generated `axe-config.json` | the config is generated, not hand-edited |
| `packages/axe-config/package.json` | package boundary | confirms it is a run-options package, not an assessment framework |
| `src/scanner/custom-rule-configurations.ts` | the 23 custom rule modules and their registration order | custom-rule audit list |

### What this establishes, and what it does not

`@accessibility-insights/axe-config` provides **FastPass axe run options**. It does not
contain the manual or assisted assessment framework, and matching its axe options would
not make Open Scans equivalent to the Accessibility Insights FastPass workflow. Any
documentation or UI text that implies otherwise is wrong.

### Not yet inspected

These were named in the brief and remain unreviewed. No conclusion about them is drawn
here:

- `src/assessments/` (`assessments.ts`, `types/requirement.ts`, `assessment-builder.tsx`);
- `src/content/test/`;
- `src/scanner/get-rule-inclusions.ts`, `scan-parameter-generator.ts`,
  `axe-configurator.ts`;
- `src/scanner/custom-rules/*` (individually);
- `src/injected/*` (tabbable elements, tab-stop listeners, focus trackers, analyzers);
- `src/reports/assessment-json-export-*.ts`, `src/reports/assessment-report-model.ts`;
- `src/issue-filing/*`.

The brief's paths were verified to exist where checked, but their behaviour has not been
reviewed. Do not describe those behaviours as understood.

### Verifying the axe configuration

The brief asked whether omitting `wcag22aa` from Open Scans' explicit axe tag list causes
unintended gaps. That has **not** been verified yet, because the upstream generated
`axe-config.json` is not committed and Open Scans' own tag list has not been compared
against the axe-core rule metadata in this phase. This is an outstanding task, and no
rule selection has been changed.

Do not silently change rule selection. Any change must be its own reviewed change with a
before/after configuration fingerprint and a documented reason.

---

## 3. Custom rule audit (names only)

`src/scanner/custom-rule-configurations.ts` registers these 23 modules, in this order:

| # | Module | Phase 1 classification |
| --: | :--- | :--- |
| 1 | `heading-rule` | evidence collector + heuristic (Phase 3 candidate) |
| 2 | `color-rule` | deterministic check + visual helper |
| 3 | `unique-landmark` | deterministic check |
| 4 | `image-rule` | evidence collector (Phase 3 candidate) |
| 5 | `text-alternative` | evidence collector + heuristic |
| 6 | `text-contrast` | deterministic check |
| 7 | `link-purpose` | evidence collector + heuristic (Phase 3 candidate) |
| 8 | `link-function` | evidence collector |
| 9 | `label-in-name` | deterministic check (accessible-name computation) |
| 10 | `frame-title` | deterministic check |
| 11 | `page-title` | deterministic check + heuristic |
| 12 | `widget-function` | heuristic requiring human review |
| 13 | `native-widgets-default` | evidence collector |
| 14 | `cues` | heuristic (colour/visual cue dependencies) |
| 15 | `custom-widget` | evidence collector + heuristic |
| 16 | `css-positioning` | visual helper / heuristic |
| 17 | `css-content` | heuristic |
| 18 | `autocomplete` | deterministic check |
| 19 | `header-rule` | evidence collector |
| 20 | `text-spacing` | deterministic check (text-spacing override) |
| 21 | `headers-attribute-rule` | deterministic check |
| 22 | `display-accessible-names` | visual helper |
| 23 | `label-in-name` (duplicate registration) | same module as #9; note when adapting |

These classifications are from the module names and the brief's description only. They
are **provisional** and must be confirmed by reading each module before any port.

The audit categories required before reuse:

1. deterministic accessibility rule;
2. evidence collector;
3. heuristic requiring human review;
4. visual helper;
5. interaction preparation;
6. unsupported or unsuitable for reuse.

No module has been read closely enough to be reclassified out of "provisional".

---

## 4. Decisions for Phase 1

1. **No upstream code is imported.** Phase 1 needs no browser collectors, so nothing is
   adapted.
2. **No upstream identifiers are used yet.** If a module is adapted, its rule ids will be
   namespaced, for example `aiw:collect-headings`, and its provenance will record the
   full repository name `accessibility-insights-web`. Such ids must never be presented as
   axe-core or ACT rule ids.
3. **Custom configurations stay isolated.** If a Microsoft-compatible axe configuration
   is added later, it must be an *optional comparison profile*, not a change to the
   existing scan configuration, and it must not contaminate global axe state.
4. **No React, no Fluent UI, no extension messaging, no telemetry.** The report interface
   uses semantic HTML, the existing report CSS and progressively enhanced vanilla
   JavaScript.
5. **Accessible-name computation is not reimplemented.** If an element collector needs an
   accessible name, it must reuse axe-core's or the browser's computation, never an
   `aria-label || textContent` fallback.

---

## 5. Reuse manifest

No adapted files yet. The required columns are defined here so future entries are
complete:

| Upstream repository | Upstream file | Commit SHA | Version | Licence | Copyright | Local file | Adaptation | Validation tests | Last review |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| _none yet_ | | | | | | | | | |

---

## 6. Attribution text to use with any adaptation

> Portions adapted from Accessibility Insights for Web
> (https://github.com/microsoft/accessibility-insights-web), commit `<sha>`,
> Copyright (c) Microsoft Corporation, licensed under the MIT License.
> Adapted for Open Scans by `<change>`; see `docs/ACCESSIBILITY-INSIGHTS-ATTRIBUTION.md`.

The repository `LICENSE` must retain the MIT terms. If upstream files carry per-file
headers, preserve them in the adapted file even when the port is substantial.

---

## 7. Data and standards attribution

- WCAG success criteria, ACT rule lists, ARRM tasks, Trusted Tester step labels and
  functional performance criteria are vendored from WCAG Spine:
  https://github.com/mgifford/wcag-spine (snapshot 2026-11-26, hash in
  `scanner/data/wcag-spine/PROVENANCE.json`).
- WCAG and Understanding documents: W3C, https://www.w3.org/TR/WCAG22/.
- ACT Rules Format and rule list: W3C, https://www.w3.org/TR/act-rules-format/.
- ARRM: W3C WAI, https://www.w3.org/WAI/planning/arrm/.
- Trusted Tester step labels are referenced as catalogue data. Open Scans does not
  implement Trusted Tester and must not present its own procedures as official DHS
  procedures.
- Equal Entry's article on what automated testing misses is referenced in
  `docs/MANUAL-ASSESSMENT.md` as motivation. No article text is reproduced.

---

## 8. Outstanding upstream review tasks

1. Confirm each of the 23 custom rule modules' category (section 3).
2. Compare Open Scans' axe tags against the generated upstream config and axe-core rule
   metadata; document differences and whether `wcag22aa` is a real gap.
3. Read the assessment definitions and decide whether a deterministic build-time
   extraction is viable, or whether reviewed manual adaptation is required.
4. Read the assessment JSON export model and establish supported versions from real
   sample files (Phase 2).
5. Read the tab-stop and focus tracking implementations before any keyboard work
   (Phase 5), and independently validate any assumption that focus staying on an element
   after Tab is evidence of a trap.
6. Have a human review this document and the adaptation plan before code is copied.
