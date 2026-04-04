# Scan Report: GitHub Pages accessibility check

- Issue: https://github.com/mgifford/open-scans/actions/runs/23980574988
- Submitted by: github-actions[bot]
- Scanned at: 2026-04-04T14:13:27.521Z
- Engines used: AXE
- Scan duration: 0.4 minutes
- Total URLs submitted: 4
- Accepted public URLs: 4
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 **Dark mode:** 3 of 4 URLs (75%) support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 2 of 4 URLs (50%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 3568 passed, 2 failed, 50 cantTell, 357 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 0

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Total Unique | Page Title |
|---|---:|---:|---|
| [View Page](https://mgifford.github.io/open-scans/trends.html) | 2 | **2** | Accessibility Trends – Open Scans |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| link-in-text-block | **1** of 4 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-in-text-block) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://mgifford.github.io/open-scans/ | https://mgifford.github.io/open-scans/ | OK | 200 | no | 5519 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://mgifford.github.io/open-scans/index.html | https://mgifford.github.io/open-scans/index.html | OK | 200 | no | 5014 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://mgifford.github.io/open-scans/reports.html | https://mgifford.github.io/open-scans/reports.html | OK | 200 | no | 6192 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://mgifford.github.io/open-scans/trends.html | https://mgifford.github.io/open-scans/trends.html | OK | 200 | no | 4583 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: link-in-text-block |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://mgifford.github.io/open-scans/trends.html

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-04-04
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://github.com/mgifford/open-scans">open-scans</a>`
- XPath: `p > a`

**Failure 2:**
- First identified: 2026-04-04
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://github.com/mgifford/open-scans">open-scans</a>`
- XPath: `p > a`

