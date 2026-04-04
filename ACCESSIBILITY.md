# ACCESSIBILITY.md

> **Accessibility commitment and transparency for open-scans**

This document defines the accessibility standards, practices, and guidelines for the open-scans project.

**Related:** See [AGENTS.md](./AGENTS.md) for AI agent instructions that enforce these standards.

---

## 🎯 Project Purpose

open-scans is an issue-driven accessibility scanning tool that uses GitHub Pages and GitHub Actions to perform automated accessibility scans. The tool helps developers identify and fix accessibility issues by:

- Scanning multiple URLs for WCAG compliance
- Generating actionable reports using five accessibility engines
- Publishing results to GitHub Pages for easy comparison

---

## 📊 Conformance Status

### Target Standard
- **WCAG 2.2 Level AA** - This project strives to meet WCAG 2.2 Level AA standards for all user-facing interfaces.

### Current Status
- **Frontend (index.html, reports.html)**: Tested with automated tools, keyboard navigation verified
- **Generated Reports**: Semantic HTML structure, keyboard accessible, proper heading hierarchy
- **Scan Results**: Machine-readable formats (JSON, CSV) and human-readable formats (Markdown, HTML)

---

## 🔧 Automated Testing

### Multi-Engine Approach

This project uses five accessibility scanning engines:

1. **axe-core** (`@axe-core/playwright`) - Industry-standard accessibility testing; Playwright integration for dynamic content
2. **Siteimprove Alfa** (`@siteimprove/alfa-cli`) - Standards-first approach based on ACT rules; comprehensive WCAG 2.2 coverage; EARL report format support
3. **IBM Equal Access Checker** (`accessibility-checker`) - IBM's comprehensive WCAG checker
4. **AccessLint** (`@accesslint/core`) - Automated accessibility testing with WCAG rule mapping
5. **QualWeb** (`@qualweb/core`) - University of Lisbon WCAG/ACT evaluator

Default: axe-core plus one randomly chosen engine. Use `ALL` in the issue title or `Engine: all` in the body to run all five.

### CI/CD Integration

All scans run in GitHub Actions workflows:
- **scan-request.yml**: Triggered on issue creation/edit
- **scan-issue-queue.yml**: Daily scheduled scans + manual trigger
- **scheduled-scan-queue.yml**: Timed issues (WEEKLY:, MONTHLY:, etc.)

### Automated Guardrails

✅ **What is automated:**
- WCAG 2.2 rule violations (both ALFA and axe-core)
- Color contrast checking
- Semantic HTML structure validation
- ARIA usage validation
- Keyboard accessibility patterns

❌ **What requires manual testing:**
- Screen reader compatibility
- Focus management in complex interactions
- Meaningful content descriptions
- Logical reading order

---

## 💻 Development Best Practices

### 1. Module Structure & Security

**Use ES Modules**
```javascript
// package.json
{
  "type": "module"
}
```

**Export Functions for Testing**
```javascript
// Use import guard to prevent main() execution during testing
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
```

**Security: Never use command injection patterns**
```javascript
// ✅ CORRECT: Use spawn with argument arrays
import { spawn } from "node:child_process";
const child = spawn(command, [arg1, arg2, arg3]);

// ❌ WRONG: Never use execSync with template strings
// execSync(`command ${userInput}`); // Command injection risk!
```

### 2. Frontend Accessibility

**Semantic HTML**
- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic elements (`<nav>`, `<main>`, `<footer>`, `<article>`)
- Provide labels for all form inputs

**Form Validation**
- Real-time URL validation with clear error messages
- Server-side validation as defense-in-depth
- Prevent submission of private/localhost URLs

**Keyboard Navigation**
- All interactive elements are keyboard accessible
- Visible focus indicators
- Logical tab order

### 3. Report Generation

**Accessible Reports**
- Priority sections show pages with most errors first
- Common issues prominently displayed
- Cross-page pattern analysis for recurring problems
- Detailed failure information with replication steps
- Disability impact indicators (visual, hearing, motor, cognitive)
- Functional Performance Specification (FPS) population data
- Cross-engine overlap indicators showing WCAG criteria covered by multiple engines
- "Copy failure details" button on each finding generates a structured GitHub issue report

**Multiple Formats**
- HTML with semantic structure and ARIA landmarks
- Markdown for GitHub rendering
- CSV for data analysis
- JSON for machine processing

### 4. Input Validation

**URL Validation Rules**
- Reject localhost URLs (`localhost`, `127.0.0.1`, `[::1]`)
- Reject private IPv4 ranges (10.x, 172.16-31.x, 192.168.x, 169.254.x)
- Reject private IPv6 ranges (fe80:, fc00:, fd00:, ::1)
- Accept only HTTP/HTTPS protocols
- Enforce 500 URL maximum per scan request

### 5. Testing Requirements

**Unit Tests**
- All scanner modules have unit tests in `tests/unit/*.test.mjs`
- Use Node.js built-in test runner
- Run tests with: `npm test`

**Linting**
- All code must pass syntax checking
- Run linter with: `npm run lint`

**Quality Gates**
```bash
# Run all unit tests
npm test

# Lint all scanner modules
npm run lint

# Test individual modules
npm run run:parse
npm run run:validate
npm run run:scan
```

---

## 🐛 Bug Reporting Best Practices

This project follows the [Accessibility Bug Reporting Best Practices](https://github.com/mgifford/ACCESSIBILITY.md/blob/main/examples/ACCESSIBILITY_BUG_REPORTING_BEST_PRACTICES.md) guide. The scan reports implement this guidance directly: the **"Copy failure details"** button on each finding generates a pre-formatted GitHub issue report.

### Unique Issue Identifiers

Every finding in a scan report carries two stable, human-readable identifiers that follow the `A11Y-xxxxxxxx` format (prefix + 8 hex characters):

| Identifier | What it covers | Hash inputs |
|------------|---------------|-------------|
| **Instance ID** | A specific defect on a specific page | Page URL + element locator + rule ID |
| **Pattern ID** | The same defect type across all pages | Element locator + rule ID + colour mode (no page URL) |

- The **Instance ID** is stable across scans: the same element defect on the same URL will always produce the same ID, enabling "first identified" tracking over time.
- The **Pattern ID** is stable across pages: if the same broken component appears on 20 pages, all 20 findings share one Pattern ID, making it easy to identify template-level regressions.

Both identifiers appear in each finding card in the HTML report and are included in the text copied by the **"Copy failure details"** button.

**Example:**

```
Instance ID: A11Y-xxxxxxxx  (this defect on https://example.com/checkout)
Pattern ID:  A11Y-yyyyyyyy  (this defect type across all pages)
```

> Both IDs are computed automatically during scanning. Each `x` or `y` represents a hexadecimal character.

### Required Fields

Every accessibility bug report must include:

| Field | Description |
|-------|-------------|
| **Instance ID** | `A11Y-xxxxxxxx` — stable ID for this defect on this page |
| **Pattern ID** | `A11Y-xxxxxxxx` — stable ID for this defect type across pages |
| **Page URL** | Exact URL where the issue was found, including query string and fragment if relevant |
| **XPath** | Shortest XPath that uniquely identifies the failing element |
| **HTML Snippet** | Minimal HTML fragment demonstrating the problem |
| **WCAG SC** | Specific WCAG Success Criterion violated (number + level) |
| **Rule ID** | Testing tool rule identifier (e.g. axe-core `image-alt`) |
| **Severity** | Critical / High (Serious) / Medium (Moderate) / Low (Minor) |
| **Frequency** | Number of instances on this page; number of pages affected |
| **Colour mode** | Light / dark — some failures only occur in one mode |
| **Viewport** | Desktop / mobile — layout issues are often viewport-specific |

### Severity Scale

| Level | Definition | Example |
|-------|-----------|---------|
| **Critical** | Users cannot complete a core task at all | Modal dialog traps keyboard focus with no close mechanism |
| **Serious** | Significant barrier that degrades or blocks a key workflow | Form error messages not announced to screen readers |
| **Moderate** | Noticeable barrier with a workaround available | Focus indicator is missing but Tab order is logical |
| **Minor** | Minor issue with minimal real-world impact | Decorative icon has a redundant `aria-label` |

> **Frequency amplifies effective severity.** A Minor issue that appears on every page, or on a high-traffic task (search, sign-in, checkout), should be escalated by one severity level.

### GitHub Issue Template

When filing an accessibility bug, use this structure:

```markdown
## Accessibility Issue: [component] — [failure mode] ([WCAG SC])

**Bug ID:** `A11Y-xxxxxxxx` (instance) / `A11Y-xxxxxxxx` (pattern)
**URL:** [full URL]
**XPath:** `[shortest unique XPath]`
**WCAG SC:** [SC number] — [SC name] (Level [A/AA/AAA])
**Rule:** [engine] — [rule ID] ([rule URL])
**Severity:** [Critical / Serious / Moderate / Minor]
**Frequency:** [N] instance(s) on this page; [N] page(s) affected
**Screen type:** [desktop / mobile] | **Colour mode:** [light / dark]

### HTML Snippet

\`\`\`html
[minimal failing HTML fragment]
\`\`\`

### Description

[What is wrong and why it creates a barrier for users]

### Expected Behaviour

[What the correct, accessible experience should be]

### Actual Behaviour

[What currently happens — the accessibility failure]

### Impact

[Disability groups affected and how: e.g. blind users, voice-control users]

### Testing Environment

| Item | Value |
|------|-------|
| Browser | [name and version] |
| Testing tool | [engine name and version] |

### Suggested Fix (optional)

[Code or prose describing the remediation]
```

The **"Copy failure details"** button in every scan report automatically generates a report in this format, pre-filled with data from the scan.

---

## 📚 Trusted Accessibility Resources

This project follows guidance from established accessibility authorities:

### Standards & Specifications
- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) - Web Content Accessibility Guidelines
- [W3C ARIA](https://www.w3.org/TR/wai-aria/) - Accessible Rich Internet Applications
- [ACT Rules](https://www.w3.org/WAI/standards-guidelines/act/) - Accessibility Conformance Testing
- [EARL](https://www.w3.org/WAI/standards-guidelines/earl/) - Evaluation and Report Language (machine-readable results)
- [Section 508 FPS](https://www.access-board.gov/ict/) - Functional Performance Specifications

### Tools & Libraries
- [Siteimprove Alfa](https://alfa.siteimprove.com/) - Standards-first accessibility testing
- [axe-core](https://github.com/dequelabs/axe-core) - Industry-standard accessibility engine
- [IBM Equal Access Checker](https://www.ibm.com/able/toolkit/tools/) - IBM's WCAG checker
- [QualWeb](https://qualweb.di.fc.ul.pt/) - University of Lisbon WCAG/ACT evaluator
- [Playwright](https://playwright.dev/) - Cross-browser testing framework

### Community Resources
For a comprehensive list of vetted accessibility resources and bug reporting guidance, see:
- [TRUSTED_SOURCES.yaml](https://github.com/mgifford/ACCESSIBILITY.md/blob/main/examples/TRUSTED_SOURCES.yaml) - Machine-readable accessibility resource registry
- [Accessibility Bug Reporting Best Practices](https://github.com/mgifford/ACCESSIBILITY.md/blob/main/examples/ACCESSIBILITY_BUG_REPORTING_BEST_PRACTICES.md) - Guide to writing actionable accessibility bug reports

---

## 🤝 Contributing

### Accessibility Requirements for PRs

All pull requests must:
1. ✅ Pass automated accessibility scans (Alfa + axe-core)
2. ✅ Include unit tests for new functionality
3. ✅ Pass linting checks
4. ✅ Follow existing code patterns
5. ✅ Update documentation as needed

### Reporting Accessibility Issues

Found an accessibility barrier? Please:
1. Open a GitHub issue with the `accessibility` label
2. Use the [GitHub Issue Template](#-bug-reporting-best-practices) in this document
3. Describe the barrier and how it affects users with disabilities
4. Include steps to reproduce (URL, XPath, HTML snippet)
5. Specify your testing environment (browser, OS, tool used)
6. Suggest a fix if you have one

> Tip: Use the **"Copy failure details"** button in any scan report to pre-fill a correctly structured bug report.

### AI Agent Compliance

AI coding assistants (GitHub Copilot, Cursor, Claude, etc.) working in this repository must:
- Read and follow [AGENTS.md](./AGENTS.md) instructions
- Generate WCAG 2.2 AA compliant code
- Use secure coding patterns (no command injection)
- Follow existing module structure and conventions
- Include unit tests for new functionality

---

## 🔗 Related Documentation

- **[AGENTS.md](./AGENTS.md)** - AI agent instructions and coding standards
- **[README.md](./README.md)** - Project overview and usage guide
- **[.github/copilot-instructions.md](.github/copilot-instructions.md)** - GitHub Copilot specific instructions
- **[.kittify/AGENTS.md](.kittify/AGENTS.md)** - Spec Kitty project management rules

---

## 📈 Metrics & Accountability

### Current Test Coverage
- ✅ 409/409 unit tests passing
- ✅ All scanner modules lint-clean
- ✅ Five-engine validation (axe-core, ALFA, Equal Access, AccessLint, QualWeb)

### Known Limitations
- Manual screen reader testing not yet performed
- Limited assistive technology coverage in testing
- Focus on automated testing over manual evaluation

### Ongoing Improvements
- Expanding test coverage for edge cases
- Adding more comprehensive keyboard navigation tests
- Documenting screen reader testing procedures

---

## 📞 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/mgifford/open-scans/issues)
- **Repository**: [mgifford/open-scans](https://github.com/mgifford/open-scans)
- **Community**: Join our [GitHub Discussions](https://github.com/mgifford/open-scans/discussions)

---

**Last Updated**: 2026-04-02

This is a living document. As our accessibility practices evolve, this document will be updated to reflect our current state and commitments.
