# Scan Report: https://www.maryland.gov/

- Issue: https://github.com/mgifford/open-scans/issues/218
- Submitted by: raybell-md
- Scanned at: 2026-03-25T18:20:49.508Z
- Engines used: All engines (AXE, ALFA, Equal Access, AccessLint, QualWeb)
- Scan duration: 0.3 minutes
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 1467 passed, 40 failed, 2 cantTell, 47 inapplicable
- axe outcomes: 929 passed, 0 failed, 52 cantTell, 43 inapplicable
- Equal Access outcomes: 2349 passed, 27 failed (17 unique, 10 duplicate), 17 cantTell, 0 inapplicable
- AccessLint outcomes: 92 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 564 passed, 15 failed, 187 cantTell, 5 inapplicable
- Duplicate findings caught by later scanners: 57

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---:|---|
| [View Page](https://www.maryland.gov/) | 0 | 6 | 17 | 0 | 15 | **38** | Maryland.gov |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R111](https://alfa.siteimprove.com/rules/sia-r111): Interactive elements have a sufficient target size | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r111) |
| [SIA-R14](https://alfa.siteimprove.com/rules/sia-r14): Images have an accessible name or are decorative | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r14) |
| [SIA-R73](https://alfa.siteimprove.com/rules/sia-r73): Text spacing can be adjusted without loss of content | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r73) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

✅ No axe failed rules detected!

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.maryland.gov/ | https://www.maryland.gov/ | OK | 200 | no | 17752 | 0 | 6 | 17 | 0 | 57 | Maryland.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_visible, figure_label_exists, input_label_visible, label_name_visible, page_title_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_quoted_correctly, text_sensory_misuse |

## Detailed Failure Information (ALFA)

### https://www.maryland.gov/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**WCAG**: [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a href="https://translate.google.com/translate?u=https://www.maryland.gov/welcome-maryland" class="usa-banner__additional-link">...</a>`
- XPath: `/a[@class="usa-banner__additional-link"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a href="https://www.maryland.gov/services/driving-and-transportation/drivers-and-motor-vehicles">Drivers and Motor Vehicles</a>`
- XPath: `/a`

**Failure 3:**
- First identified: 2026-03-25
- Message: Target has insufficient size
- HTML: `<a href="https://www.visitmaryland.org/" class="ext" data-extlink="" rel="nofollow noreferrer">...</a>`
- XPath: `/a[@class="ext"]`

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<a href="https://dnr.maryland.gov/publiclands/Pages/Miles-for-Maryland.aspx" class="maryland-card__link" aria-label=" - To commemorate the MARYLAND 250, Maryland State Parks is challenging you to hike 250 miles in State Parks this year!">...</a>`
- XPath: `/a[@class="maryland-card__link"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)
**WCAG**: [SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) (Level AA)

**Failure 1:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="usa-banner__header-text">           An official website of the State of Mar...</p>`
- XPath: `/p[@class="usa-banner__header-text"]`

**Failure 2:**
- First identified: 2026-03-25
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p>Get the support you need to live well in Maryland.</p>`
- XPath: `/p`

## Detailed Failure Information (axe)

