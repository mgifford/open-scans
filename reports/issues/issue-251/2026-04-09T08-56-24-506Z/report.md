# Scan Report: Listberg

- Issue: https://github.com/mgifford/open-scans/issues/251
- Submitted by: pemson-18
- Scanned at: 2026-04-09T08:55:41.096Z
- Engines used: AXE, ALFA
- Scan duration: 0.3 minutes
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 **Dark mode:** 1 of 1 URLs (100%) support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 7 passed, 4 failed, 0 cantTell, 80 inapplicable
- axe outcomes: 116 passed, 2 failed, 0 cantTell, 128 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 0

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://listberg.com/) | 2 | 4 | **6** | Home \| Listberg.com |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59): Document has at least one heading to identify its main content | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r59) |
| [SIA-R87](https://alfa.siteimprove.com/rules/sia-r87): First focusable element is a skip link | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r87) |
| [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9) | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r9) |
| [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96) | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r96) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| meta-refresh | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/meta-refresh) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://listberg.com | https://listberg.com/ | OK | 200 | no | 16648 | 2 | 4 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R59 (Document has at least one heading to identify its main content), SIA-R87 (First focusable element is a skip link), SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |

## Detailed Failure Information (ALFA)

### https://listberg.com

#### Rule: [SIA-R59: Document has at least one heading to identify its main content](https://alfa.siteimprove.com/rules/sia-r59)
**WCAG**: [SC 2.4.6](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: The document does not have a heading element

#### Rule: [SIA-R87: First focusable element is a skip link](https://alfa.siteimprove.com/rules/sia-r87)
**WCAG**: [SC 2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: The document has no tabbable descendants

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- First identified: 2026-04-09
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- First identified: 2026-04-09
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

## Detailed Failure Information (axe)

### https://listberg.com

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

