# Scan Report: https://canada.ca

- Issue: https://github.com/mgifford/open-scans/issues/367
- Submitted by: mgifford
- Scanned at: 2026-10-31T22:50:37.266Z
- Engines used: AXE, QUALWEB
- Scan duration: 5.4 minutes
- Total URLs submitted: 8
- Accepted public URLs: 8
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 **High contrast:** 1 of 8 URLs (13%) support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 1333 passed, 1 failed, 37 cantTell, 41 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Reflow risk outcomes (WCAG 1.4.10, indicator only — not a conformance verdict): 0 failed, 0 potential, 1 passed, 0 cantTell, 7 not executed
- Semantica11y outcomes (semantic HTML/ARIA suggestions, kept separate from WCAG violation counts): 0 errors, 66 warnings, 0 suggestions, 7 not executed
- Duplicate findings caught by later scanners: 0

## 🔄 Changes Since Last Scan

- 🆕 **6 new unique issue(s)** detected for the first time in this scan

### 🆕 New Issues

- **A11Y-b6b8a105** `rule:landmark-unique|light` (axe) — https://www.canada.ca/en.html
- **A11Y-43c38954** `rule:aria-expanded|light` (semantica11y) — https://www.canada.ca/en.html
- **A11Y-cd731783** `rule:aria-expanded|light` (semantica11y) — https://www.canada.ca/en.html
- **A11Y-26d2298e** `rule:aria-expanded|light` (semantica11y) — https://www.canada.ca/en.html
- **A11Y-8764a5bf** `rule:aria-expanded|light` (semantica11y) — https://www.canada.ca/en.html
- **A11Y-010f8e1c** `rule:aria-structure|light` (semantica11y) — https://www.canada.ca/en.html

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact. Scanner columns show raw failures; the Total column remains unique across the active scanners.

| Page | axe Errors | QualWeb Errors | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.canada.ca/en.html) | 1 | 0 | **1** | Home - Canada.ca |

## 🧭 Reflow Risk (WCAG 1.4.10)

Page-level indicator: resizes to 320 CSS pixels wide and checks for horizontal overflow. This is a risk indicator, not a conformance verdict — see [Behavioral Accessibility Automation](https://github.com/mgifford/ACCESSIBILITY.md/blob/main/examples/BEHAVIORAL_ACCESSIBILITY_AUTOMATION.md) for what it can and cannot detect.

✅ No horizontal overflow detected at 320px width on any scanned page!

## 🏷️ Semantic HTML & ARIA (Semantica11y)

Checks for non-semantic HTML and ARIA usage with suggestions for semantic improvements. These are suggestions, not WCAG conformance failures — see [semantica11y](https://npm.im/semantica11y) for the rule set.

| Page | Errors | Warnings | Suggestions | Corroborated | Page Title |
|---|---|---|---|---|---|
| [View Page](https://www.canada.ca/en.html) | 0 | 66 | 0 | - | Home - Canada.ca |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-unique | **1** of 8 | [View Rule](https://dequeuniversity.com/rules/axe/4.12.1/landmark-unique) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Errors | ALFA Errors | Equal Access Errors | AccessLint Errors | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://canada.ca | https://canada.ca/ | FAIL | - | no | 60002 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://canada.ca/etc/designs/canada/wet-boew/css/theme.min.css | https://www.canada.ca/etc/designs/canada/wet-boew/css/theme.min.css | OK | 200 | yes | 9872 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://canada.ca/etc/designs/canada/wet-boew/css/noscript.min.css | https://www.canada.ca/etc/designs/canada/wet-boew/css/noscript.min.css | OK | 200 | yes | 1374 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://canada.ca/etc/designs/canada/wet-boew/css/messages.min.css | https://www.canada.ca/etc/designs/canada/wet-boew/css/messages.min.css | OK | 200 | yes | 2382 | 0 | 0 | 0 | 0 | 0 | Skipped (not requested) |
| https://canada.ca/en.html | https://www.canada.ca/en.html | OK | 200 | yes | 59930 | 1 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://canada.ca/fr.html | https://canada.ca/fr.html | FAIL | - | no | 60001 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://canada.ca/en/transparency/terms.html | https://canada.ca/en/transparency/terms.html | FAIL | - | no | 60002 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://canada.ca/fr/transparence/avis.html | https://canada.ca/fr/transparence/avis.html | FAIL | - | no | 60001 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://canada.ca/en.html

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.12/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-10-31
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.global-header > nav`

