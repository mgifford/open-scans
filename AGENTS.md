# AI Agent Instructions for alfa-scan

This repository welcomes multiple AI coding agents and tools. This document provides universal guidance for all AI assistants working in this codebase.

## Quick Start for AI Agents

- **Project Type**: Node.js accessibility scanning tool using GitHub Pages and Actions
- **Primary Language**: JavaScript (ES Modules)
- **Key Commands**: `npm test`, `npm run lint`, `npm run run:scan`
- **Architecture**: Frontend (GitHub Pages) + Backend (GitHub Actions) + Scanner (Alfa CLI)

## Project-Specific Guidelines

### Code Conventions

1. **Module Structure**: Use ES modules with `type: "module"` in package.json
2. **Testing**: Export functions from modules; use import guard to prevent main() execution:
   ```javascript
   if (import.meta.url === `file://${process.argv[1]}`) {
     main();
   }
   ```
3. **Security**: Use `spawnSync` with argument arrays, never `execSync` with template strings
4. **Node Version**: >= 20 (see package.json engines)
5. **Stdout/Stderr**: Scanner modules MUST output structured data (JSON) to stdout and progress/diagnostic messages to stderr. Workflows parse stdout as JSON - any non-JSON output breaks parsing. See `.github/copilot-instructions.md` for detailed examples.

### Accessibility Assessment Boundaries

Reports include an assessment coverage section and a local manual assessment workspace.
When changing anything in `scanner/assessment/`, `scanner/data/wcag-spine/` or the report
sections that render them:

1. **Evidence is not a conclusion.** A mapped rule has not evaluated a WCAG criterion.
   Never derive a pass from the absence of findings, and never add a percentage,
   conformance claim or score.
2. **Automated-only scanning stays cheap.** Do not add a browser launch, navigation,
   screenshot, network request or model call to the default scan for assessment features.
   Coverage must remain derived from artifacts the scan already produced.
3. **Human records are separate from scan evidence.** Do not write assessment records into
   `report.json` or mutate automated findings when a reviewer records an outcome.
4. **State failures honestly.** If local storage, a save, an import or clipboard access
   fails, say so. Never report data as saved when it is only in memory.
5. **Preserve contradictions.** When the same record id arrives with different content,
   keep both and link them; do not overwrite.
6. **The catalogue is versioned and hashed.** Regenerate the WCAG Spine snapshot with
   `npm run build:assessment-catalogue` and verify it with
   `npm run check:assessment-catalogue`; do not hand-edit the snapshot.
7. **Upstream reuse needs a manifest entry.** Any Accessibility Insights adaptation needs
   a row in `docs/ACCESSIBILITY-INSIGHTS-ATTRIBUTION.md` with commit, licence, local path
   and tests before it is merged.

Run `npm run validate:assessment-report <report.json> --browser=webkit` to check a
generated report in a real browser from `file://`. It needs an installed Playwright
browser; it is not part of `npm test`.

See [docs/ASSESSMENT-ARCHITECTURE.md](docs/ASSESSMENT-ARCHITECTURE.md) and
[docs/MANUAL-ASSESSMENT.md](docs/MANUAL-ASSESSMENT.md).

### Security Best Practices (Public Data)

Even though this project scans public URLs and publishes public reports, treat all code and workflow changes with security hygiene:

1. **Least privilege in workflows**: Keep GitHub Actions permissions minimal and job-scoped.
2. **Dependency accountability**: Keep dependency versions and licenses reviewed in [`SBOM.md`](./SBOM.md); update it when software changes.
3. **Input validation first**: Preserve strict URL validation (localhost/private ranges blocked) for both client and scanner paths.
4. **No secret leakage**: Never log tokens or environment secrets; avoid committing sensitive runtime artifacts.
5. **Safe process execution**: Continue using argument-array process spawning patterns to reduce injection risk.

### Testing & Quality

```bash
# Run all unit tests
npm test

# Lint code
npm run lint

# Run individual scanner modules
npm run run:parse
npm run run:validate
npm run run:scan
```

### File Organization

- **Scanner modules**: `/scanner/*.mjs`
- **Tests**: `/tests/unit/*.test.mjs`
- **Workflows**: `.github/workflows/`
- **Reports**: Published to `/reports/` for GitHub Pages
- **Spec Kitty specs**: `kitty-specs/` (for project management)

### Never Commit

- `node_modules/` (in .gitignore)
- Secrets or credentials
- Agent-specific directories (`.claude/`, `.cursor/`, `.gemini/`, etc.)

### AI Transparency and Accountability

Generative AI is used to assist with the development and maintenance of this repository. AI-assisted changes must meet the same quality, security, accessibility, and review requirements as human-authored changes.

#### Disclosure requirements

1. Disclose substantive AI assistance in the pull request description, including the tool or model used, its purpose, and any relevant limitations.
2. Keep the `README.md` AI disclosure concise. Do not add individual AI sessions, model versions, or development tasks to the README.
3. Preserve the existing AI development history in `docs/AI-USAGE-HISTORY.md`. Update it when documenting significant AI-assisted development or a material change in how AI is used.
4. Do not invent model names, versions, review activities, test results, or verification evidence.
5. Human maintainers remain responsible for reviewing and accepting contributions.

#### Verification requirements

- Verify generated code against the repository's actual APIs, dependencies, schemas, and tests.
- Run relevant tests and report results accurately.
- Do not claim WCAG conformance based solely on automated testing or AI analysis.
- Do not classify accessibility findings as verified failures or false positives without appropriate evidence.
- Preserve original scanner results, provenance, and uncertainty when generating summaries.
- Never modify expected test outcomes simply to make tests pass.

#### Runtime AI

Distinguish AI used to develop the repository from AI used during its operation.

Normal accessibility scanning must not silently invoke an LLM. Optional AI-powered features must remain explicitly activated and documented.

AI-generated explanations and remediation suggestions must be distinguishable from scanner observations and independently reviewed conclusions.

See `README.md` for the public AI disclosure and `docs/AI-USAGE-HISTORY.md` for the development history.

## Prompt Files for Common Tasks

The `.github/prompts/` directory contains task-specific prompt files that give AI agents deep accessibility context for the most common development tasks in this project. Reference the appropriate file when starting a new task:

| Prompt file | When to use |
|---|---|
| [`new-scanner-rule.prompt.md`](.github/prompts/new-scanner-rule.prompt.md) | Adding a new rule entry to `rule-metadata.mjs` for any of the four supported engines |
| [`report-template.prompt.md`](.github/prompts/report-template.prompt.md) | Creating or modifying HTML report templates in `interactive-report.mjs` or `generate-reports-html.mjs` |
| [`fix-accessibility-violation.prompt.md`](.github/prompts/fix-accessibility-violation.prompt.md) | Fixing a specific WCAG violation found in a scan report |
| [`write-scan-test.prompt.md`](.github/prompts/write-scan-test.prompt.md) | Writing unit tests for scanner modules in `tests/unit/` |

These prompt files encode accessibility expertise — WCAG criteria, ARIA patterns, colour contrast rules, and project-specific conventions — so that AI agents generate correct, accessible output on the first attempt.

## Session wrap-up

When a session is ending — an agreed checkpoint time arrives, the user says
"wrap up", context is nearly exhausted, or a meaningful unit of work is
finished — follow [`docs/SESSION-WRAP-UP.md`](./docs/SESSION-WRAP-UP.md).

At a minimum: run `npm run wrap-up`, record the real test result, commit and
push on a branch, open or update a pull request, update
[`docs/AI-SESSION-HANDOFF.md`](./docs/AI-SESSION-HANDOFF.md) with verified and
unverified work plus the next safe step, and leave the working tree clean.

Do not invent test results, do not auto-merge, and do not force-push `main`.

## Session handoff and institutional memory

Before starting a new AI session, read [`docs/AI-SESSION-HANDOFF.md`](./docs/AI-SESSION-HANDOFF.md). It records the current cross-repository state, contract versions, workflow distinctions, test baseline and known pitfalls.

In particular:

- a merged performance runner is not running until a `PERF:` issue triggers `performance-scan.yml`;
- `SCAN:` and `PERF:` are separate paths;
- accessibility, performance and energy evidence must not be combined into a score;
- explicit `selectorType` must be preferred over engine-based CSS/XPath inference;
- the pre-existing `generate-reports-html` timezone test failure is not a regression.

## Tool-Specific Instructions

### GitHub Copilot

Comprehensive GitHub Copilot instructions: [`.github/copilot-instructions.md`](.github/copilot-instructions.md)

### Spec Kitty

Spec Kitty agent rules (project management): **[`.kittify/AGENTS.md`](https://github.com/mgifford/alfa-scan/blob/main/.kittify/AGENTS.md)**

These rules are CRITICAL for agents working with Spec Kitty commands and include:
- Path reference requirements
- UTF-8 encoding rules
- Context management
- Work quality standards
- Git discipline and best practices

### Cursor, Claude, Gemini, Codex, etc.

Follow the general guidelines above. Refer to these comprehensive resources:
- [`.github/copilot-instructions.md`](.github/copilot-instructions.md) - Detailed architecture and patterns
- [`ACCESSIBILITY.md`](./ACCESSIBILITY.md) - Accessibility requirements and best practices
- [`.kittify/AGENTS.md`](https://github.com/mgifford/alfa-scan/blob/main/.kittify/AGENTS.md) - Spec Kitty project management rules

## Key Dependencies

- `@siteimprove/alfa-cli`: Core accessibility testing
- `@siteimprove/alfa-formatter-earl`: EARL report formatting
- `@siteimprove/alfa-formatter-json`: JSON report formatting

## Getting Help

- **Project Structure**: See `.github/copilot-instructions.md`
- **Accessibility Standards**: See `ACCESSIBILITY.md`
- **Testing Patterns**: See `tests/unit/*.test.mjs` examples
- **Scanner Implementation**: See `scanner/*.mjs` modules
- **Spec Kitty Workflows**: See [`.kittify/AGENTS.md`](https://github.com/mgifford/alfa-scan/blob/main/.kittify/AGENTS.md)
