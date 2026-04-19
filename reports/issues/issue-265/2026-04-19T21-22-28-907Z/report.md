# Scan Report: Austin mobility services

- Issue: https://github.com/mgifford/open-scans/issues/265
- Submitted by: danid123
- Scanned at: 2026-04-19T21:21:38.861Z
- Engines used: AXE, ALFA
- Scan duration: 0.2 minutes
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 123 passed, 27 failed, 1 cantTell, 61 inapplicable
- axe outcomes: 97 passed, 4 failed, 0 cantTell, 65 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 22

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://atd.knack.com/mobility-services) | 4 | 5 | **9** | Knack |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R111](https://alfa.siteimprove.com/rules/sia-r111): Interactive elements have a sufficient target size | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r111) |
| [SIA-R47](https://alfa.siteimprove.com/rules/sia-r47) | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r47) |
| [SIA-R57](https://alfa.siteimprove.com/rules/sia-r57): Landmarks don't repeat the same content | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r57) |
| [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61): Documents start with a level 1 heading | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r61) |
| [SIA-R73](https://alfa.siteimprove.com/rules/sia-r73): Text spacing can be adjusted without loss of content | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r73) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-one-main | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-one-main) |
| meta-viewport | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/meta-viewport) |
| page-has-heading-one | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/page-has-heading-one) |
| region | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://atd.knack.com/mobility-services#chauffeur-permit/ | https://atd.knack.com/mobility-services | OK | 200 | no | 10012 | 4 | 5 | 0 | 0 | 22 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R47, SIA-R57 (Landmarks don't repeat the same content), SIA-R61 (Documents start with a level 1 heading), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, meta-viewport, page-has-heading-one, region |

## Detailed Failure Information (ALFA)

### https://atd.knack.com/mobility-services#chauffeur-permit/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-19
- Message: Target has insufficient size
- HTML: `<a href="#my-applications">Sign up / Log in</a>`
- XPath: `/a`

#### Rule: [SIA-R47](https://alfa.siteimprove.com/rules/sia-r47)

**Failure 1:**
- First identified: 2026-04-19
- Message: The `<meta>` element restricts the ability to zoom
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />`
- XPath: `/meta`

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: [SC 1.3.6](https://www.w3.org/WAI/WCAG22/Understanding/identify-purpose) (Level AAA)

**Failure 1:**
- First identified: 2026-04-19
- Message: The text is not included in a landmark region

#### Rule: [SIA-R61: Documents start with a level 1 heading](https://alfa.siteimprove.com/rules/sia-r61)
**WCAG**: Best Practice

**Failure 1:**
- First identified: 2026-04-19
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-04-19
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p style="text-align: center;">...</p>`
- XPath: `/p`

## Detailed Failure Information (axe)

### https://atd.knack.com/mobility-services#chauffeur-permit/

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-19
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [meta-viewport](https://dequeuniversity.com/rules/axe/4.11/meta-viewport?application=playwright)
**Impact**: moderate
**WCAG**: [SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) (Level AA)

**Failure 1:**
- First identified: 2026-04-19
- Message: Zooming and scaling must not be disabled
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">`
- XPath: `meta[name="viewport"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-19
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-19
- Message: All page content should be contained by landmarks
- HTML: `<div class="kn-scenes kn-section">`
- XPath: `.kn-scenes`

