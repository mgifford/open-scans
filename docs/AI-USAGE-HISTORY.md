# AI Usage History

This document records how generative AI tools have contributed to the development and maintenance of [Open Scans](https://github.com/mgifford/open-scans).

Open Scans uses AI-assisted development while maintaining a distinction between AI-generated suggestions, automated scanner observations, independently reviewed evidence, and decisions made by project maintainers.

This history was consolidated from the project's original README AI disclosure on November 20, 2026.

## Purpose

AI transparency is part of the project's commitment to openness, accountability, accessibility, and digital sustainability.

This document provides a historical record of significant AI-assisted development, including the tools used, their contributions, and the periods in which they were used.

It is not an independent audit of every contribution. Records reflect previously documented AI involvement. Git history, pull requests, tests, and review evidence remain the authoritative sources for individual changes.

The [README](../README.md) provides a concise public disclosure. This document contains the more detailed history.

## How AI has been used

Generative AI has assisted with:

- Developing and maintaining accessibility scanning modules.
- Implementing multi-engine testing, ACT mappings, and cross-engine comparisons.
- Creating and improving accessibility reports and visualizations.
- Developing performance investigation and evidence-reuse capabilities.
- Writing tests, debugging failures, and reviewing changes.
- Drafting and improving documentation.
- Developing GitHub Actions workflows and automation.
- Reviewing dependencies, security practices, and accessibility requirements.
- Investigating integrations with related open-source projects.

AI assistance does not imply that generated code or documentation has been independently verified.

## AI used during operation

Open Scans distinguishes AI-assisted development from AI used while the software is running.

### Standard accessibility scanning

Normal accessibility scans use established accessibility testing engines, including:

- axe-core
- Siteimprove ALFA
- IBM Equal Access Checker
- AccessLint

The standard scanning pipeline does not require a generative AI model.

Scanner findings must retain their source, rule identifiers, testing context, and supporting evidence.

### Optional AI-assisted analysis

The project has documented optional AI functionality, including:

- The `REMEDIATE` keyword in scan requests.
- The on-demand AI Accessibility Review workflow.

These features have used the GitHub Models API with `gpt-4o-mini` to generate natural-language findings and remediation suggestions.

They are designed to be explicitly activated rather than automatically invoked during ordinary scanning.

Model choices and operational capabilities may change. The current implementation and workflow configuration should be consulted before making claims about which models are deployed.

AI-generated explanations are not equivalent to independently verified accessibility findings.

### Browser-based AI

The project has not enabled built-in browser AI features such as the Chrome AI APIs as part of its standard operation.

Future runtime AI features should require explicit activation and follow the project's [sustainability policy](../SUSTAINABILITY.md).

## Historical development records

The following records are retained from the original README AI disclosure. They describe previously reported contributions, including work involving tools, dependencies, or features that may subsequently have changed.

These records preserve the original model/tool names, reported activities, and development periods.

| Model / tool | Contribution | When used |
|---|---|---|
| GitHub Copilot Coding Agent (GPT-5.4 mini) | Report taxonomy updates, ACT alignment dedupe, interactive report rendering, and unit test adjustments | June 2026 |
| GitHub Copilot (GPT-4-class via OpenAI Codex) | Code generation, CI workflow authoring, documentation drafting | Throughout development |
| GitHub Copilot Chat (GPT-4-class) | Code review, debugging, policy drafting, iterative PR feedback | Throughout development |
| GitHub Copilot Coding Agent (Claude Sonnet 4.5) | Automated PR implementation; AI disclosure instructions in `AGENTS.md` and the original README | March 2026 |
| GitHub Copilot Coding Agent (claude-sonnet-4.5) | Cross-engine deduplication, WCAG overlap display, issue fingerprinting for historical tracking | March 2026 |
| OpenAI API assistant | Documentation drafting and editing for the scan report Definition of Done in `FEATURES.md` | May 2026 |
| GitHub Copilot Coding Agent (Claude Sonnet 5) | Accessibility engine dependency upgrades involving axe-core, accessibility-checker, AccessLint, and QualWeb packages | August 2026 |
| GitHub Copilot Coding Agent (claude-sonnet-4.6) | Accessibility-first Copilot prompt files and `AGENTS.md` documentation | March 2026 |
| GitHub Copilot Coding Agent (claude-sonnet-4.6) | Visible Bug ID display in HTML reports | April 2026 |
| GitHub Copilot Coding Agent (claude-sonnet-4.6) | README improvements, badges, Mermaid diagram, table of contents, engine table, development section, and URL limit fix | April 2026 |
| GitHub Copilot Coding Agent (claude-sonnet-4.6) | Related Projects section and o-hat-scanner feature comparison | April 2026 |
| GitHub Copilot Coding Agent (claude-sonnet-4.6) | Accessibility tools navigation connecting Top Task Finder, Open Scans, and Alt Text Scan | April 2026 |
| GitHub Copilot Coding Agent (claude-sonnet-4.6) | AI Accessibility Review workflow and `scanner/review-source.mjs`, inspired by GitHubNext daily-accessibility-review | April 2026 |
| GitHub Copilot Task Agent (GPT-5-class) | Dark-mode report link contrast improvements and unit tests | May 2026 |
| GitHub Copilot Coding Agent (GPT-5-class) | Generic Playwright accessibility tests using `@axe-core/playwright` | May 2026 |
| GitHub Copilot Task Agent (GPT-5-class) | Dedicated Playwright testing command and workflow integration | May 2026 |
| GitHub Copilot Task Agent (GPT-5-class) | Reproducible scan context supporting viewport, colour scheme, and browser selection | May 2026 |
| GitHub Copilot Task Agent (GPT-5-class) | Workflow trend persistence and generated `trends.json` files | May 2026 |
| GitHub Copilot Task Agent (GPT-5-class) | BDD acceptance tests using Gherkin, Cucumber, Playwright, and CI quality gates | May 2026 |
| GitHub Copilot Coding Agent (GPT-5.4 mini) | Playwright upgrade to address browser installation problems | June 2026 |
| GitHub Copilot Coding Agent (GPT-5.4 mini) | QualWeb runtime module resolution and dependency correction | June 2026 |
| GitHub Copilot Coding Agent (GPT-5-class) | Additional QualWeb dependency resolution and regression tests | July 2026 |
| Claude Code (claude-sonnet-5) | ALFA rule metadata verification and correction against installed packages and published rule descriptions; dependency upgrades and engine-version monitoring | July 2026 |
| Claude Code (claude-sonnet-5) | Duplicate page title analysis, scan summaries, Markdown reporting, and unit tests | July 2026 |
| Claude Code (claude-sonnet-5) | Versioned cross-project accessibility fingerprints and replacement of misleading resolved-issue terminology with `notObserved` semantics | July 2026 |
| big-pickle (opencode) | Secret redaction in scan artifacts, regression tests, and GitHub push-protection safeguards | September 2026 |

### November 2026: Accessibility comparison and reporting

The following development was attributed to DeepSeek Harness (`deepseek-flash`).

| Work | Contribution |
|---|---|
| Phase A | Baseline-to-comparison accessibility reports, identity matching, page mapping, coverage classifications, exports, fixtures, tests, and documentation |
| Phase B | Optimization accessibility investigation, scenarios, concern mapping, manual verification, schemas, and conformance boundaries |
| Phase C | Component and semantic-region evidence, explicit identifier preservation, selector-derived region candidates, ACT rule IDs, indexes, and exports |
| Phase D | Optional external investigation references, validation, linkage, metadata boundaries, schemas, and tests |
| Phase E | Accessible comparison report interface, section navigation, summaries, evidence disclosures, and manual verification |
| Phase F | Complete comparison exports, CSV metadata, compatibility, formula-injection protection, tests, and documentation |
| Pattern inventory | Unique accessibility pattern grouping, semantic container candidates, and JSON, Markdown, HTML, and CSV exports |
| Locator coverage | Equal Access DOM locator retention, coverage metrics, tests, and documentation |
| Accessibility context | Occurrence-level evidence for Firefox Energy Scanner integration |
| Selector types | Explicit selector types, engine-aware classification, and tests |
| Performance execution | Issue-driven dispatcher, GitHub Actions workflow, local validation, and documentation |
| Session handoff | Cross-project development context and lessons for future AI work |

### November 2026: Performance investigation

The following development was attributed to DeepSeek Harness (`deepseek-flash`).

| Work | Contribution |
|---|---|
| Phase 0 | Repository/provider assessment, architecture decision record, `PERF:` request contract, deterministic parser, schema, issue template, validation workflow, and tests |
| PR 2 | `performance-evidence/1` schema, evidence merging and validation, provider adapters, safe evidence loader, reuse-only runner, fixtures, tests, and documentation |
| PR 3 | Pinned Lighthouse provider, bounded page selection, family coverage, evidence reuse, DNS/redirect preflight, artifact retention, and cost reporting |
| PR 4 | Targeted Sitespeed Docker provider, sustainable parsing, bounded investigations, CO2 provenance, safety limits, tests, and documentation |
| PR 5 | Cross-page investigation schema and engine, observation deduplication, phase classification, candidate ranking, bidirectional indexes, tests, and documentation |

### November 2026: Cross-project integration

The following work was attributed to DeepSeek Harness (`deepseek-flash`).

- Reviewed and merged Firefox Energy Scanner PRs #63 and #64.
- Accepted PR #62 as an opt-in preview.
- Documented the same-viewport protocol and component-attribution policy.
- Investigated a Playwright dependency installation failure on Ubuntu 26.04 runners.
- Recorded the runner-image pin and CI troubleshooting guidance.
- Later removed the temporary Ubuntu 24.04 pin after verifying browser installation and launch on Ubuntu 26.04.

### November 2026: Multi-engine evidence

The following development was attributed to DeepSeek Harness (`deepseek-flash`).

| Phase | Contribution |
|---|---|
| P0 | Normalized `a11y-observation/1` model, conservative repeat detection, Equal Access and AccessLint observations, evidence reprocessing, schema, and tests |
| P1 | Deterministic DOM index, target resolution, CSS/XPath/HTML locator handling, ambiguity reporting, and document hashing |
| P2 | Rule-semantics registry, provenance-aware ACT mapping, cross-engine correlation, disagreement classifications, and stable issue identity |
| P3 | ACT registry, verified versus candidate mappings, engine-version alignment, metadata provenance, ACT 1.1 rule types, and correlation-derived consensus |
| P4 | Accessible Markdown and HTML evidence reports, engine matrices, disclosures, filtering, explicit empty states, and injection-safe rendering |
| P5 | Historical comparison, change attribution, `not-observed` semantics, and ACT laboratory cohort tracking |
| P6 | Version-controlled manual review format, validation, CLI application, unmatched-decision reporting, schema, and tests |
| P7 | ACT laboratory per-target outcomes, declared-target resolution, reviewed/unreviewed distinctions, browser-context limitations, and tests |
| P8 | ACT rule coverage reports, W3C rule links, engine mappings, missing observations, review flags, and `act-coverage.json` |
| P9 | ALFA EARL parsing for absolute XPath targets, text-node resolution, engine messages, and tests against the actual ALFA CLI |
| P10 | Retired QualWeb from reports, added an accessible on-this-page navigation, and reordered the evidence sections after the summary |
| P11 | Verified ACT mappings from the W3C implementation reports for Alfa, AccessLint, and Equal Access, registered report-only ACT rules, and removed candidate mappings contradicted by those reports |
| P12 | Sa11y engine integration: pinned headless adapter, native rule and classification preservation, engine selection, report and ACT-mapping integration, tests and limitations documentation |
| P13 | Evidence reporting for silence and scope: mapped-but-silent engines, single-engine findings, unmapped native rules, preserved axe frame paths, and the frame-scope caveat |
| P14 | Committed, reproducible extraction of W3C report-derived ACT mappings: fail-closed refresh, deterministic sorted overlays, added/removed diff summary, offline HTML fixtures, and refresh documentation |
| P15 | Browser-executable scoping: Chromium's Puppeteer path no longer leaks into WebKit/Firefox Playwright launches, restoring axe-core and Sa11y for random-browser scans |

### November 2026: Assessment coverage and manual assessment (Phase 1)

The following development was attributed to DeepSeek Harness (`deepseek-flash`).

| Work | Contribution |
|---|---|
| Phase 0 | Audit of the existing scanner and report pipeline, engine evidence, ACT registry and baseline performance; upstream Accessibility Insights licence and rule-configuration review at commit `97ad835`; reuse manifest and outstanding-review list |
| Catalogue | Vendored, versioned and content-hashed WCAG Spine snapshot, strict validation, fail-closed refresh script, provenance record, catalogue projection |
| Rule execution manifest | Per-engine execution status, outcome counts, observed and failing rule identifiers, rule-granularity limits, frame and resource limitations, built from existing artifacts only |
| Coverage | Per-criterion coverage model, automation limitations, explicit-denominator counts, report section with filters and target-level rows |
| Manual assessment | 20 independently authored procedures across three pathways, manual barrier recording, professional and experiential evaluation records |
| Portability | `a11y-assessment-document/1` schema and validator, local storage adapter with honest failure states, JSON export, validated import, merge with conflict preservation, per-report reset |
| Issue reporting | Record-to-Markdown and JSON issue reports with explicit placeholders, snippet redaction, clipboard and fallback actions |
| Report integrity | One `<main>` landmark fix, escaped scan title in both HTML and inline JSON, `<`-escaped embedded JSON |
| Verification | 1092 unit tests, 1 pre-existing ISO-week failure; real `file://` WebKit validation with axe (0 violations after the landmark fix), save/restore, and no-JavaScript contract |
| Documentation | Architecture, data schema, manual assessment, resource budget, attribution and VITAL handoff documents |

Limitations recorded in this work:

- No Accessibility Insights code was imported, and the assessment definitions and
  injected keyboard modules were not inspected.
- Assisted collectors, keyboard/focus assessment and user journey UI are not
  implemented.
- The axe-tag comparison (`wcag22aa`) has not been performed.
- The report's own axe scan still returns two *incomplete* checks that were not manually
  verified: `aria-prohibited-attr` on `.stat-inline`, and `color-contrast` on short count
  text.
- Chromium and Firefox were not validated for the assessment workspace; only WebKit was
  exercised from `file://`.

#### Assisted collectors (Phase 3a)

Design and implementation in PR #438 on `docs/assessment-phase-3-design`. The work is
opt-in and does not change the default scan.

| Work | Contribution |
|---|---|
| Design | `docs/ASSESSMENT-ASSISTED-COLLECTORS.md`: why capture is a separate pass, the `a11y-assisted-collectors/1` contract, the AccName 1.2 subset, a signal catalogue with "does not mean" lines, caps, budget targets, failure and exit-code rules, and the 3a/3b/3c rollout |
| Capture | Browser extractor for headings, images, links and the `aria-labelledby` graph; sequential capture; duplicate-final-URL handling; `assessment-collectors.json` written beside the Phase 1 artifacts |
| Gate | `--assisted` / `OPEN_SCANS_ASSISTED` opt-in with positional arguments preserved; no browser, navigation or artifact without it |
| Validation | Contract validator that rejects verdict fields, unknown signal ids, malformed or duplicate ids and false completion; fixture runner asserting names, signals, caps and id stability |
| Verification | 15 unit tests; two-page WebKit fixture run (7 headings, 6 images, 7 links, 13 signals); full suite 1109 tests with the known ISO-week failure unchanged |
| Boundaries | No report surface (3b), no workflow opt-in (3c), no overhead measurement, WebKit only |

### November 2026: Assessment quality gate

The following development was attributed to DeepSeek Harness (`deepseek-flash`).

| Work | Contribution |
|---|---|
| Weekly trend correctness | ISO week grouping now uses the UTC calendar date of the `scannedAt` instant instead of local calendar fields; the bucket label is formatted in UTC, so the weekly view no longer shifts west of UTC |
| Regression test | A child-process test runs the same reports under `TZ=UTC` and `TZ=America/Toronto` and requires identical buckets, week keys and labels |
| CI gate | `.github/workflows/unit-tests.yml` runs `npm run lint` and `npm test` on every pull request and on `main`, with read-only permissions and run cancellation; browser-dependent tests skip by design and the skip count stays visible |

Verified in CI on 2026-11-26: workflow run `45923187615` passed in 2m53s, including
the Chromium install and the full suite. Limitations recorded: the opt-in browser
validators are not part of the gate; the full suite still scans the repository's
committed report artifacts (about 3.7 GB), which is slow but bounded by the job timeout.

### November 2026: Assisted element inventory (Phase 3b)

The following development was attributed to DeepSeek Harness (`deepseek-flash`).

| Work | Contribution |
|---|---|
| Inventory | Per-page headings, images and links rendered inside the manual assessment section, with accessible names, deterministic signals and stated limits; readable without JavaScript |
| Record link | Per-row prefill of page, locator, name, snippet, collector item id and suggested procedure; `elementIdentity.collectorItemId` added as an optional validated field |
| Report integration | Atomic post-collection re-render of `report.html`, one `report.md` line, redaction of the artifact before it is written, honest no-capture state |
| Verification | 9 unit tests, a committed WebKit validator (`validate:assessment-inventory`), a full-suite run and a measured overhead |
| Measurement | 6 pages: 13.5 s added (5.8% of the reference scan against a 5% target), 1,254 items, 1.85 MB artifact, +1.53 MB report |

Limitations recorded: the 5% wall-clock target is missed and the budget decision is left
to the maintainer; 25-page runs, Chromium/Firefox and memory are unmeasured.

### November 2026: Collector name-graph fix

| Work | Contribution |
|---|---|
| Defect | A 200-node name-graph cap blanked every name after the 200th item on a page; 393 of 742 signals on the measured six-page artifact were false `link-name-empty` signals |
| Name capture | Every collected item now gets a name node; only nodes first reached through `aria-labelledby` are capped. Missing names are `captured: false` / `not-captured`, not empty |
| Accessible names | `aria-labelledby` reads an image's `alt` and concatenates all references; text and name truncation is recorded |
| Capture state | A total-item-cap trim is `partial`; duplicate and cap shortfalls are reported separately |
| Report | Single colour scheme and name-graph caps are stated; `report.md` only claims an inventory when the HTML re-render succeeded |
| Publish path | All three scan workflows copy `assessment-coverage.json` and `assessment-collectors.json` when present |
| Verification | 1124 tests, 1123 pass, 0 fail, 1 skipped; WebKit inventory and collector validators pass; a 250-link fixture page and a synthetic 252-link page resolve every name |
| Measurement | 6 pages: 1,253 items, 349 signals, 1.95 MB artifact, 14.5–16.7 s at the default settle |

Limitations recorded: the 25-page targets, JS-heavy pages, Chromium/Firefox collector
runs and peak memory remain unmeasured.

## Accountability and verification

AI-generated content must be treated as proposed work rather than authoritative evidence.

### Accessibility

- AI must not independently declare WCAG conformance.
- Automated scanner findings must retain their original provenance.
- Suspected false positives and false negatives require supporting evidence.
- ACT rule mappings must distinguish verified mappings from inferred or candidate mappings.
- Missing scanner findings must not be interpreted as passing results.
- Human review records must identify the method, observation, and limitations.
- Test expectations must not be modified simply to make automated tests pass.

### Performance and sustainability

- Distinguish measured energy from modelled emissions and transfer estimates.
- Preserve measurement environments, tool versions, and collection conditions.
- Avoid unsupported claims about energy savings or environmental benefits.
- Reuse existing evidence where appropriate rather than repeating expensive measurements.
- Do not combine accessibility, performance, and environmental evidence into an unsupported aggregate score.

### Security and privacy

- Do not include credentials, tokens, or other secrets in prompts, generated code, logs, or public reports.
- Treat scanned websites and third-party content as untrusted inputs.
- Review generated code for unsafe execution patterns, dependency risks, and data disclosure.
- Apply the same review and testing expectations to AI-assisted and human-authored contributions.

See [SECURITY.md](../SECURITY.md), [ACCESSIBILITY.md](../ACCESSIBILITY.md), and [SUSTAINABILITY.md](../SUSTAINABILITY.md).

## Maintaining this history

This document is intended to provide transparency without becoming a transcript of every AI interaction.

### When to update it

Update this file when:

1. A new AI tool or model materially contributes to a significant capability.
2. A substantial AI-assisted development milestone is completed.
3. Runtime AI capabilities, providers, or activation requirements materially change.
4. A previously published disclosure is found to be incorrect.
5. Significant new governance or verification practices are introduced.

Routine AI-assisted edits do not require a separate historical entry when their use is already adequately disclosed in the relevant pull request.

### What to record

For new historical records, include:

- **Tool or model:** Name and version when known.
- **Date or period:** When the contribution occurred.
- **Contribution:** What changed and why.
- **References:** Relevant pull requests, commits, or documentation when available.
- **Verification:** Tests or review evidence, where applicable.

Do not invent unavailable details.

### Corrections

Do not silently rewrite historical records to imply that earlier work used newer tools, models, or methods.

If a record is inaccurate, correct it transparently and reference the relevant evidence.

Historical entries may refer to features or dependencies that are no longer active. Their inclusion does not establish current operational support.

### Responsibility

AI agents and contributors should disclose substantive AI assistance in pull requests, following [AGENTS.md](../AGENTS.md).

Maintainers decide when the project history needs updating.

The README should remain concise and should link here rather than duplicate this historical record.

## Related documentation

- [README](../README.md): Public project introduction and AI disclosure.
- [AGENTS.md](../AGENTS.md): Instructions for AI-assisted contributions.
- [AI Session Handoff](AI-SESSION-HANDOFF.md): Current technical context and development handoff.
- [Multi-engine Evidence](multi-engine-evidence.md): Evidence integrity, scanner comparisons, and uncertainty.
- [Product Direction](PRODUCT-DIRECTION.md): Responsibilities and boundaries between related projects.
- [Sustainability Policy](../SUSTAINABILITY.md): Environmental and computational considerations.
- [Accessibility Policy](../ACCESSIBILITY.md): Accessibility requirements and development expectations.

## License

Open Scans is licensed under the [GNU Affero General Public License v3.0](../LICENSE).
