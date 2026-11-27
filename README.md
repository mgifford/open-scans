# Open Scans

Open-source accessibility testing and performance investigation, with transparent evidence and comparisons across multiple testing tools.

[Open Scans](https://mgifford.github.io/open-scans/) makes it easier to investigate website accessibility without installing software or setting up testing infrastructure.

Submit publicly accessible URLs, run multiple accessibility testing engines, compare their findings, and explore results through published reports.

The project helps people understand not only **what accessibility problems tools identify, but also where they agree, disagree, or fail to provide enough evidence**.

Open Scans was inspired by [Oobee](https://github.com/GovTechSG/oobee), an open-source accessibility testing project from [GovTech Singapore](https://www.tech.gov.sg/).

## Try Open Scans

You can use Open Scans directly through GitHub Pages. A GitHub account is needed to submit a scan request, but no local installation is required.

- **[Submit an accessibility scan](https://mgifford.github.io/open-scans/)**: Request a scan of one or more publicly accessible web pages.
- **[Explore published reports](https://mgifford.github.io/open-scans/reports.html)**: Examine accessibility findings and compare results from different testing engines.
- **[Explore historical trends](https://mgifford.github.io/open-scans/trends.html)**: Investigate how reported accessibility problems change over time.

Scan requests use GitHub Issues, testing runs through GitHub Actions, and reports are published through GitHub Pages.

## What can you investigate?

### Accessibility across multiple testing engines

Open Scans supports several open-source accessibility testing engines:

- [axe-core](https://github.com/dequelabs/axe-core)
- [Siteimprove ALFA](https://github.com/Siteimprove/alfa)
- [IBM Equal Access](https://github.com/IBMa/equal-access)
- [AccessLint](https://github.com/marketplace/actions/accesslint)
- [Sa11y](https://sa11y.netlify.app/) — the checking technology shared with [Editoria11y](https://editoria11y.com/)

Sa11y is run as a headless content-focused checker on the same public pages as the
other engines. It does not require Drupal, a CMS, or Editoria11y's reporting layer.

Different engines implement different rules, interpret standards differently, and identify different problems.

Open Scans preserves their individual observations while supporting comparisons across engines.

### False positives, false negatives, and uncertain results

Automated accessibility testing is valuable, but results are not always straightforward.

Open Scans helps investigate:

- **True positives:** Genuine failures identified correctly.
- **False positives:** Reported failures that do not violate the applicable requirement.
- **False negatives:** Genuine failures that a tool does not detect.
- **Overlapping findings:** Multiple tools reporting the same underlying problem.
- **Different interpretations:** Tools evaluating related requirements or identifying different problems on the same element.
- **Uncertain findings:** Cases requiring additional evidence or human judgment.

A missing finding does not establish a pass. Multiple findings do not necessarily represent multiple distinct accessibility barriers.

### ACT rules and reproducible test cases

Open Scans uses [W3C Accessibility Conformance Testing (ACT) Rules](https://www.w3.org/WAI/standards-guidelines/act/rules/) to help compare testing results where appropriate mappings exist.

It also works with [Record a Goose Sighting](https://github.com/mgifford/record-a-goose-sighting), a deliberately inaccessible training playground containing known defects, test fixtures, and manual review evidence.

The projects have separate responsibilities:

- **Record a Goose Sighting** maintains test cases, expected outcomes, and manual testing evidence.
- **Open Scans** executes testing engines, maps rules, resolves targets, compares findings, and tracks results.

This separation supports reproducible research without assuming that any particular testing engine is authoritative.

See the [ACT laboratory documentation](act-lab/README.md).

### Changes over time

Open Scans supports historical comparisons, including identifying findings that are newly observed, repeatedly observed, or no longer observed.

A finding that disappears from a scan is not automatically considered fixed. Changes in page content, testing conditions, tool versions, or coverage can affect results.

Reports preserve supporting evidence and testing context to help explain these differences.

### Performance and sustainability investigations

Open Scans also supports optional performance investigations using existing evidence, Lighthouse, and targeted Sitespeed.io testing.

These investigations can help identify expensive resources, repeated performance problems, and opportunities for further investigation.

Performance and environmental evidence remain distinct from accessibility findings.

Estimated carbon emissions are not measured energy consumption. Open Scans does not produce a combined accessibility, performance, and sustainability score.

See the [performance investigation documentation](docs/performance/performance-execution.md).

## Understanding the results

**Automated accessibility findings are evidence, not proof of WCAG conformance.**

Open Scans aims to make testing results more transparent by preserving:

- Testing engine and version.
- Tested URL, viewport, and other relevant conditions.
- Rule identifiers and WCAG or ACT mappings.
- Element locations and supporting observations.
- Relationships between findings.
- Historical changes and uncertainty.
- Human review evidence, where available.

Findings may represent WCAG failures, best-practice concerns, usability problems, or situations requiring further investigation.

Human evaluation remains essential, particularly for issues involving meaning, context, interaction, and assistive technology behaviour.

See the [multi-engine evidence documentation](docs/multi-engine-evidence.md).

### Accessibility assessment coverage and manual testing

Every report now includes an **Accessibility Assessment Coverage** section and a local
**Manual assessment** workspace. Both are available in automated-only reports.

- Coverage shows, per WCAG success criterion, which automated rules were mapped, which
  produced a result, which reported a violation, and what automation cannot establish.
- A prominent notice says when no manual assessment has been recorded. It is not a
  substitute for manual testing performed elsewhere.
- Guided manual procedures (essential and comprehensive) can be used directly in a
  downloaded report, and professional or lived-experience observations can be recorded.
- Assessment records are stored in your browser or exported as JSON. Nothing is uploaded,
  and the automated evidence is never modified.
- Manual barriers that no scanner found can be recorded and turned into developer issue
  reports (copy or Markdown download).

Automated-only scanning remains the default and costs no additional browser work. The
report still works offline; see
[assessment architecture](docs/ASSESSMENT-ARCHITECTURE.md) and
[manual assessment](docs/MANUAL-ASSESSMENT.md).

## Related projects

Open Scans is part of a broader collection of complementary open-source tools.

- **[Record a Goose Sighting](https://github.com/mgifford/record-a-goose-sighting):** A playground for human and automated accessibility testing, including false positives and false negatives.
- **[Vital Core](https://github.com/mgifford/vital-core):** Continuous monitoring and historical quality reporting for established website inventories.
- **[Firefox Energy Scanner](https://github.com/mgifford/firefox-energy-scanner):** Browser activity, component investigations, and energy measurement.
- **[Top Task Finder](https://github.com/mgifford/top-task-finder):** Identifying important user tasks and helping prioritize testing.

Each project has a distinct purpose. They may exchange evidence without requiring one another to operate.

See the [product direction](docs/PRODUCT-DIRECTION.md) for more information.

## Get involved

**Contributions are welcome from developers, accessibility specialists, researchers, designers, content authors, and anyone interested in more reliable accessibility testing.**

You can help by:

- Submitting websites for testing and examining their results.
- Investigating suspected false positives or false negatives.
- Comparing findings across different accessibility testing engines.
- Providing manual testing evidence.
- Improving ACT mappings and identifying discrepancies between tools.
- Reporting problems with scan results or their presentation.
- Improving the accessibility and usability of the reporting interface.
- Contributing tests, documentation, or code.
- Suggesting improvements to performance and sustainability investigations.

[Report an issue or suggest an improvement](https://github.com/mgifford/open-scans/issues)

[Explore the source code](https://github.com/mgifford/open-scans)

Contributions should preserve original observations, document uncertainty, and avoid making unsupported accessibility or performance claims.

## Getting started locally

**You do not need to install Open Scans to submit scans or explore published results.**

Local development is intended for people who want to modify the application, develop additional testing capabilities, experiment with different configurations, or contribute code.

The project requires Node.js 24 or newer and npm.

```bash
git clone https://github.com/mgifford/open-scans.git
cd open-scans
npm ci
npm test
npm run lint
```

For scanner implementation and command-line guidance, see [scanner/README.md](scanner/README.md).

Additional development instructions are available in [.github/copilot-instructions.md](.github/copilot-instructions.md).

## Project status and limitations

Open Scans is actively developed, with capabilities and reporting formats evolving over time.

The project supports multi-engine accessibility testing, historical comparisons, ACT-based investigations, and optional performance evidence collection.

Important limitations include:

- Automated testing cannot establish complete accessibility conformance.
- Rule coverage varies between engines.
- Correlating findings across tools requires sufficient evidence about rules and targets.
- Some findings require manual verification.
- Assessment coverage is not accessibility coverage: a mapped rule has not evaluated a
  criterion, and missing findings are not evidence of conformance.
- Rule-level execution is unknown for engines that only record failing rule identifiers.
- Manual assessment recording is not yet available for keyboard interaction sequences or
  user journeys. Assisted inventory rows can prefill a record; the reviewer still
  chooses the outcome and writes the note.
- Changes in testing conditions can affect historical comparisons.
- Performance estimates and sustainability models have different limitations from direct measurements.

The project prioritizes reproducibility, transparency, and evidence quality over simplified scores or unsupported claims.

## AI use

Generative AI is used to assist with the creation and ongoing maintenance of Open Scans, including code, documentation, testing, and development activities.

Some optional features also use AI to generate explanations and remediation suggestions. Standard accessibility scans do not require generative AI.

AI-generated material may contain errors. Maintainers remain responsible for accepting changes, and AI-generated conclusions are not substitutes for independently verified evidence.

Human review, corrections, and contributions are encouraged.

See the [AI Usage History](docs/AI-USAGE-HISTORY.md) for historical details and [AGENTS.md](AGENTS.md) for AI-assisted development requirements.

## Documentation

Detailed information is maintained separately to keep this README focused.

- [Scanner documentation](scanner/README.md)
- [Multi-engine evidence and comparisons](docs/multi-engine-evidence.md)
- [Assessment architecture](docs/ASSESSMENT-ARCHITECTURE.md)
- [Manual assessment](docs/MANUAL-ASSESSMENT.md)
- [Assessment data schema](docs/ASSESSMENT-DATA-SCHEMA.md)
- [Assessment resource budget](docs/ASSESSMENT-RESOURCE-BUDGET.md)
- [Accessibility Insights attribution](docs/ACCESSIBILITY-INSIGHTS-ATTRIBUTION.md)
- [VITAL integration handoff](docs/VITAL-INTEGRATION-HANDOFF.md)
- [ACT laboratory](act-lab/README.md)
- [Pattern and container inventory](docs/pattern-inventory.md)
- [Accessibility evidence for Firefox Energy Scanner](docs/accessibility-context.md)
- [Performance investigations](docs/performance/performance-execution.md)
- [Product direction](docs/PRODUCT-DIRECTION.md)
- [Accessibility policy](ACCESSIBILITY.md)
- [Security policy](SECURITY.md)
- [Sustainability policy](SUSTAINABILITY.md)
- [AI Usage History](docs/AI-USAGE-HISTORY.md)

## License

Open Scans is free and open-source software licensed under the [GNU Affero General Public License v3.0](LICENSE).

Contributions, independent review, and reuse are encouraged.
