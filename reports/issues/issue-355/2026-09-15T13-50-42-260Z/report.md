# Scan Report: CAE List

- Issue: https://github.com/mgifford/open-scans/issues/355
- Submitted by: Jay-Gar
- Scanned at: 2026-09-15T13:50:21.190Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 0.7 minutes
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 1670 passed, 0 failed, 9 cantTell, 45 inapplicable
- Equal Access outcomes: 36 passed, 4 failed (4 unique, 0 duplicate), 1 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Reflow risk outcomes (WCAG 1.4.10, indicator only — not a conformance verdict): 0 failed, 0 potential, 1 passed, 0 cantTell, 0 not executed
- Semantica11y outcomes (semantic HTML/ARIA suggestions, kept separate from WCAG violation counts): 1 errors, 65 warnings, 0 suggestions, 0 not executed
- Duplicate findings caught by later scanners: 0

## 🔄 Changes Since Last Scan

- 🆕 **9 new unique issue(s)** detected for the first time in this scan

### 🆕 New Issues

- **A11Y-1b836ce1** `rule:html_lang_exists|light` (equalAccess) — https://www.tbs-sct.canada.ca/ap/list-liste/cae-dpv-eng.asp
- **A11Y-5c469f1f** `rule:html_skipnav_exists|light` (equalAccess) — https://www.tbs-sct.canada.ca/ap/list-liste/cae-dpv-eng.asp
- **A11Y-d70d36e7** `rule:skip_main_exists|light` (equalAccess) — https://www.tbs-sct.canada.ca/ap/list-liste/cae-dpv-eng.asp
- **A11Y-0f26abc5** `rule:aria_content_in_landmark|light` (equalAccess) — https://www.tbs-sct.canada.ca/ap/list-liste/cae-dpv-eng.asp
- **A11Y-f7ddfe74** `rule:aria-expanded|light` (semantica11y) — https://www.tbs-sct.canada.ca/ap/list-liste/cae-dpv-eng.asp
- **A11Y-a3cf05a2** `rule:aria-expanded|light` (semantica11y) — https://www.tbs-sct.canada.ca/ap/list-liste/cae-dpv-eng.asp
- **A11Y-0e4b457b** `rule:aria-expanded|light` (semantica11y) — https://www.tbs-sct.canada.ca/ap/list-liste/cae-dpv-eng.asp
- **A11Y-7d4c939b** `rule:aria-structure|light` (semantica11y) — https://www.tbs-sct.canada.ca/ap/list-liste/cae-dpv-eng.asp
- **A11Y-e8fdb7ea** `rule:native-label|light` (semantica11y) — https://www.tbs-sct.canada.ca/ap/list-liste/cae-dpv-eng.asp

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact. Scanner columns show raw failures; the Total column remains unique across the active scanners.

| Page | axe Errors | Equal Access Errors | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.tbs-sct.canada.ca/ap/list-liste/cae-dpv-eng.asp) | 0 | 4 | **4** | List of chief audit executives by institution |

## 🧭 Reflow Risk (WCAG 1.4.10)

Page-level indicator: resizes to 320 CSS pixels wide and checks for horizontal overflow. This is a risk indicator, not a conformance verdict — see [Behavioral Accessibility Automation](https://github.com/mgifford/ACCESSIBILITY.md/blob/main/examples/BEHAVIORAL_ACCESSIBILITY_AUTOMATION.md) for what it can and cannot detect.

✅ No horizontal overflow detected at 320px width on any scanned page!

## 🏷️ Semantic HTML & ARIA (Semantica11y)

Checks for non-semantic HTML and ARIA usage with suggestions for semantic improvements. These are suggestions, not WCAG conformance failures — see [semantica11y](https://npm.im/semantica11y) for the rule set.

| Page | Errors | Warnings | Suggestions | Corroborated | Page Title |
|---|---|---|---|---|---|
| [View Page](https://www.tbs-sct.canada.ca/ap/list-liste/cae-dpv-eng.asp) | 1 | 65 | 0 | - | List of chief audit executives by institution |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

✅ No axe failed rules detected!

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Errors | ALFA Errors | Equal Access Errors | AccessLint Errors | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.tbs-sct.canada.ca/ap/list-liste/cae-dpv-eng.asp | https://www.tbs-sct.canada.ca/ap/list-liste/cae-dpv-eng.asp | OK | 200 | no | 39087 | 0 | 0 | 4 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, html_lang_exists, html_skipnav_exists, skip_main_exists |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

