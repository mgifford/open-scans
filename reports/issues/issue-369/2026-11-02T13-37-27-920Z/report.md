# Scan Report: Scan /1

- Issue: https://github.com/mgifford/open-scans/issues/369
- Submitted by: nosher150
- Scanned at: 2026-11-02T13:36:48.344Z
- Engines used: AXE, ALFA
- Scan duration: 0.7 minutes
- Total URLs submitted: 2
- Accepted public URLs: 2
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 2 of 2 URLs (100%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 2 of 2 URLs (100%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 1501 passed, 38 failed, 0 cantTell, 90 inapplicable
- axe outcomes: 1509 passed, 1 failed, 0 cantTell, 88 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Reflow risk outcomes (WCAG 1.4.10, indicator only — not a conformance verdict): 0 failed, 0 potential, 2 passed, 0 cantTell, 0 not executed
- Semantica11y outcomes (semantic HTML/ARIA suggestions, kept separate from WCAG violation counts): 2 errors, 4 warnings, 0 suggestions, 0 not executed
- Duplicate findings caught by later scanners: 31

## 🔄 Changes Since Last Scan

- 🆕 **14 new unique issue(s)** detected for the first time in this scan

### 🆕 New Issues

- **A11Y-2395d282** `rule:region|light` (axe) — https://www.walthamforest.gov.uk/
- **A11Y-e0832248** `rule:https://alfa.siteimprove.com/rules/sia-r14|light` (alfa) — https://www.walthamforest.gov.uk/
- **A11Y-a267cf1c** `rule:https://alfa.siteimprove.com/rules/sia-r57|light` (alfa) — https://www.walthamforest.gov.uk/
- **A11Y-a0b8cdfa** `rule:https://alfa.siteimprove.com/rules/sia-r61|light` (alfa) — https://www.walthamforest.gov.uk/
- **A11Y-66f95dbd** `rule:https://alfa.siteimprove.com/rules/sia-r66|light` (alfa) — https://www.walthamforest.gov.uk/
- **A11Y-4cc6a8ae** `rule:aria-expanded|light` (semantica11y) — https://www.walthamforest.gov.uk/
- **A11Y-f7ac21cf** `rule:aria-expanded|light` (semantica11y) — https://www.walthamforest.gov.uk/
- **A11Y-dc7a00b7** `rule:native-label|light` (semantica11y) — https://www.walthamforest.gov.uk/
- **A11Y-51ffdabe** `rule:https://alfa.siteimprove.com/rules/sia-r14|light` (alfa) — https://www.walthamforest.gov.uk/tasks/book
- **A11Y-28998679** `rule:https://alfa.siteimprove.com/rules/sia-r61|light` (alfa) — https://www.walthamforest.gov.uk/tasks/book
- **A11Y-d99c97f0** `rule:https://alfa.siteimprove.com/rules/sia-r66|light` (alfa) — https://www.walthamforest.gov.uk/tasks/book
- **A11Y-0a89ead0** `rule:aria-expanded|light` (semantica11y) — https://www.walthamforest.gov.uk/tasks/book
- **A11Y-157fe3e0** `rule:aria-expanded|light` (semantica11y) — https://www.walthamforest.gov.uk/tasks/book
- **A11Y-b3bd90f9** `rule:native-label|light` (semantica11y) — https://www.walthamforest.gov.uk/tasks/book

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact. Scanner columns show raw failures; the Total column remains unique across the active scanners.

| Page | axe Errors | ALFA Errors | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.walthamforest.gov.uk/tasks/book) | 0 | 22 | **22** | Book \| London Borough of Waltham Forest |
| [View Page](https://www.walthamforest.gov.uk/) | 1 | 16 | **17** | Home \| London Borough of Waltham Forest |

## 🧭 Reflow Risk (WCAG 1.4.10)

Page-level indicator: resizes to 320 CSS pixels wide and checks for horizontal overflow. This is a risk indicator, not a conformance verdict — see [Behavioral Accessibility Automation](https://github.com/mgifford/ACCESSIBILITY.md/blob/main/examples/BEHAVIORAL_ACCESSIBILITY_AUTOMATION.md) for what it can and cannot detect.

✅ No horizontal overflow detected at 320px width on any scanned page!

## 🏷️ Semantic HTML & ARIA (Semantica11y)

Checks for non-semantic HTML and ARIA usage with suggestions for semantic improvements. These are suggestions, not WCAG conformance failures — see [semantica11y](https://npm.im/semantica11y) for the rule set.

| Page | Errors | Warnings | Suggestions | Corroborated | Page Title |
|---|---|---|---|---|---|
| [View Page](https://www.walthamforest.gov.uk/) | 1 | 2 | 0 | - | Home \| London Borough of Waltham Forest |
| [View Page](https://www.walthamforest.gov.uk/tasks/book) | 1 | 2 | 0 | - | Book \| London Borough of Waltham Forest |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R14](https://alfa.siteimprove.com/rules/sia-r14): The visible label text of an element is included in its accessible name | **2** of 2 | [View Rule](https://alfa.siteimprove.com/rules/sia-r14) |
| [SIA-R61](https://alfa.siteimprove.com/rules/sia-r61): The first heading in the document is a level 1 heading | **2** of 2 | [View Rule](https://alfa.siteimprove.com/rules/sia-r61) |
| [SIA-R66](https://alfa.siteimprove.com/rules/sia-r66): Text has enhanced contrast with its background | **2** of 2 | [View Rule](https://alfa.siteimprove.com/rules/sia-r66) |
| [SIA-R57](https://alfa.siteimprove.com/rules/sia-r57): Visible text content on the page is contained within a landmark region | **1** of 2 | [View Rule](https://alfa.siteimprove.com/rules/sia-r57) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| region | **1** of 2 | [View Rule](https://dequeuniversity.com/rules/axe/4.12.1/region) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R14: The visible label text of an element is included in its accessible name](https://alfa.siteimprove.com/rules/sia-r14)
**Issue**: The visible text content of the element is not included within its accessible name

**HTML Pattern**:
```html
<button class="lgd-header__toggle lgd-header__toggle--secondary nav-icon nav-icon--toggle" data-target="lgd-header__nav--secondary" aria-controls="lgd-header__nav--secondary" aria-expanded="false" aria-label="Services: jump to services" data-once="header-toggle header-toggle-override">...</button>
```

**XPath** (use in browser DevTools):
```
/button[@class="lgd-header__toggle lgd-header__toggle--secondary nav-icon nav-icon--toggle"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/button[@class="lgd-header__toggle lgd-header__toggle--secondary nav-icon nav-icon--toggle"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.walthamforest.gov.uk/
- https://www.walthamforest.gov.uk/tasks/book

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Errors | ALFA Errors | Equal Access Errors | AccessLint Errors | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.walthamforest.gov.uk/ | https://www.walthamforest.gov.uk/ | OK | 200 | no | 24409 | 1 | 16 | 0 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R14 (The visible label text of an element is included in its accessible name), SIA-R57 (Visible text content on the page is contained within a landmark region), SIA-R61 (The first heading in the document is a level 1 heading), SIA-R66 (Text has enhanced contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.walthamforest.gov.uk/tasks/book | https://www.walthamforest.gov.uk/tasks/book | OK | 200 | no | 20569 | 0 | 22 | 0 | 0 | 19 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R14 (The visible label text of an element is included in its accessible name), SIA-R61 (The first heading in the document is a level 1 heading), SIA-R66 (Text has enhanced contrast with its background) |

## Detailed Failure Information (ALFA)

### https://www.walthamforest.gov.uk/

#### Rule: [SIA-R14: The visible label text of an element is included in its accessible name](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-11-02
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button class="lgd-header__toggle lgd-header__toggle--secondary nav-icon nav-icon--toggle" data-target="lgd-header__nav--secondary" aria-controls="lgd-header__nav--secondary" aria-expanded="false" aria-label="Services: jump to services" data-once="header-toggle header-toggle-override">...</button>`
- XPath: `/button[@class="lgd-header__toggle lgd-header__toggle--secondary nav-icon nav-icon--toggle"]`

#### Rule: [SIA-R57: Visible text content on the page is contained within a landmark region](https://alfa.siteimprove.com/rules/sia-r57)
**WCAG**: Best Practice

**Failure 1:**
- First identified: 2026-11-02
- Message: The text is not included in a landmark region

#### Rule: [SIA-R61: The first heading in the document is a level 1 heading](https://alfa.siteimprove.com/rules/sia-r61)
**WCAG**: Best Practice

**Failure 1:**
- First identified: 2026-11-02
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-11-02
- Message: The highest possible contrast of the text is 5.12:1 which is         below the required contrast of 7:1

### https://www.walthamforest.gov.uk/tasks/book

#### Rule: [SIA-R14: The visible label text of an element is included in its accessible name](https://alfa.siteimprove.com/rules/sia-r14)
**WCAG**: [SC 2.5.3](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name) (Level A)

**Failure 1:**
- First identified: 2026-11-02
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button class="lgd-header__toggle lgd-header__toggle--secondary nav-icon nav-icon--toggle" data-target="lgd-header__nav--secondary" aria-controls="lgd-header__nav--secondary" aria-expanded="false" aria-label="Services: jump to services" data-once="header-toggle header-toggle-override">...</button>`
- XPath: `/button[@class="lgd-header__toggle lgd-header__toggle--secondary nav-icon nav-icon--toggle"]`

#### Rule: [SIA-R61: The first heading in the document is a level 1 heading](https://alfa.siteimprove.com/rules/sia-r61)
**WCAG**: Best Practice

**Failure 1:**
- First identified: 2026-11-02
- Message: The document does not start with a level 1 heading

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)
**WCAG**: [SC 1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced) (Level AAA)

**Failure 1:**
- First identified: 2026-11-02
- Message: The highest possible contrast of the text is 5.12:1 which is         below the required contrast of 7:1

## Detailed Failure Information (axe)

### https://www.walthamforest.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.12/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-11-02
- Message: All page content should be contained by landmarks
- HTML: `<div class="search-block__top">              <h1 class="search-block__heading">Welcome to Waltham Forest</h1>                 </div>`
- XPath: `.search-block__top`

