# GitHub Copilot Instructions for open-scans

## Primary References

Before making any changes, read these documents in the repository root:

- **[AGENTS.md](../AGENTS.md)** - AI agent instructions, coding standards, and project conventions. This is the primary guide for all coding agents.
- **[ACCESSIBILITY.md](../ACCESSIBILITY.md)** - WCAG 2.2 AA requirements, accessible development best practices, and quality gates.
- **[SUSTAINABILITY.md](../SUSTAINABILITY.md)** - Digital sustainability policy: minimize compute waste, assess third-party dependencies, and disclose AI usage in PRs.

For Spec Kitty project management rules (work packages, path references, encoding), see **[.kittify/AGENTS.md](../.kittify/AGENTS.md)**.

---

## Project Overview

`open-scans` is an issue-driven accessibility scanning tool hosted on GitHub Pages and GitHub Actions. It accepts URL batches via a form, creates GitHub issues, runs multi-engine accessibility scans in CI, and publishes comparison-ready reports to GitHub Pages.

- **Live site**: <https://mgifford.github.io/open-scans/>
- **Reports**: <https://mgifford.github.io/open-scans/reports.html>
- **Repository**: <https://github.com/mgifford/open-scans>

### Architecture

- **Frontend** (`index.html`, `reports.html`, `submit.js`): GitHub Pages form for submitting URL batches and viewing results
- **Scanner** (`scanner/*.mjs`): Node.js ES modules that parse issues, validate URLs, run scans, and generate reports
- **Workflows** (`.github/workflows/`): GitHub Actions workflows triggered by issues or schedules
- **Reports** (`reports/`): Generated scan output published to GitHub Pages

### Scanning Engines

Five accessibility engines are supported (run individually or in combination via the issue title or body):

1. **axe-core** (`@axe-core/playwright`) - Deque's industry-standard engine
2. **Siteimprove ALFA** (`@siteimprove/alfa-cli`) - Standards-first, ACT-rules-based
3. **IBM Equal Access Checker** (`accessibility-checker`) - IBM's comprehensive checker
4. **AccessLint** (`@accesslint/core`) - Automated accessibility testing
5. **QualWeb** (`@qualweb/core`) - University of Lisbon WCAG/ACT evaluator

Default: **axe** plus one randomly chosen engine. Use `ALL` in the issue title or `Engine: all` in the body to run all five.

---

## Key Commands

```bash
# Run all unit tests
npm test

# Lint all scanner modules
npm run lint

# Run individual scanner modules
npm run run:parse
npm run run:validate
npm run run:scan
npm run run:generate-reports
npm run run:analyse-trends
```

---

## Coding Conventions

### Module Structure

- ES modules (`type: "module"` in `package.json`), Node.js >= 20
- Use an import guard so `main()` does not run during tests:
  ```javascript
  if (import.meta.url === `file://${process.argv[1]}`) {
    main();
  }
  ```
- Export functions from modules for unit testing

### Stdout / Stderr Convention

**CRITICAL** - workflows parse stdout as JSON. Any non-JSON output on stdout breaks parsing.

- **stdout**: structured JSON output only
- **stderr**: all progress messages, warnings, and diagnostics

```javascript
// CORRECT
console.error(`[1/100] Scanned ${url} in ${ms}ms`); // progress to stderr
console.log(JSON.stringify({ results: [] }));          // JSON to stdout

// WRONG - corrupts workflow JSON parsing
console.log(`[1/100] Scanned ${url}`);
```

### Security

- Use `spawnSync` with argument arrays - never `execSync` with template strings (command injection risk)
- Validate all user-supplied URLs before processing
- Never commit secrets, credentials, or agent-specific directories (`.claude/`, `.codex/`, `.gemini/`, etc.)

### File Organization

| Path | Purpose |
|------|---------|
| `scanner/*.mjs` | Scanner modules |
| `tests/unit/*.test.mjs` | Unit tests (Node.js built-in runner) |
| `.github/workflows/` | GitHub Actions workflows |
| `reports/` | Generated scan output (GitHub Pages) |
| `kitty-specs/` | Spec Kitty work packages |

### Workflows

- **`scan-request.yml`**: Triggered on issue creation/edit for `SCAN:` issues
- **`scan-issue-queue.yml`**: Daily scheduled scan of all open `SCAN:` issues + manual trigger
- **`scheduled-scan-queue.yml`**: Timed issues (`WEEKLY:`, `MONTHLY:`, etc.)
- All workflows share the `scan-repository` concurrency group (sequential processing)

### Never Commit

- `node_modules/` (in `.gitignore`)
- Secrets or credentials
- Agent-specific runtime directories (`.claude/`, `.cursor/`, `.gemini/`, `.codex/`)

---

## Pull Request Checklist

Every PR should include (per `SUSTAINABILITY.md`):

- Sustainability impact: `improves` / `neutral` / `regresses`
- AI usage disclosure if AI assistance was used
- All tests passing (`npm test`) and lint clean (`npm run lint`)
