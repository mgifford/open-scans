# Scan Report: Testing Alberta Sites

- Issue: https://github.com/mgifford/open-scans/issues/324
- Submitted by: OGBaldoran
- Scanned at: 2026-07-07T14:42:48.915Z
- Engines used: AXE, ACCESSLINT
- Scan duration: 0.2 minutes
- Total URLs submitted: 2
- Accepted public URLs: 2
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 540 passed, 9 failed, 0 cantTell, 54 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 86 passed, 6 failed (6 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 0

## 🔄 Changes Since Last Scan

- 🆕 **15 new unique issue(s)** detected for the first time in this scan

### 🆕 New Issues

- **A11Y-4309d920** `rule:empty-heading|light` (axe) — https://adsp.alberta.ca/
- **A11Y-a7cb271f** `rule:heading-order|light` (axe) — https://adsp.alberta.ca/
- **A11Y-d52c837b** `wcag:wcag111|light` (axe) — https://adsp.alberta.ca/
- **A11Y-7ff99ef9** `wcag:wcag111|light` (axe) — https://adsp.alberta.ca/
- **A11Y-ea6785e8** `wcag:wcag111|light` (axe) — https://adsp.alberta.ca/
- **A11Y-01f61b33** `wcag:wcag111|light` (axe) — https://adsp.alberta.ca/
- **A11Y-36bde3eb** `wcag:wcag111|light` (axe) — https://adsp.alberta.ca/
- **A11Y-6a2b5e92** `wcag:wcag111|light` (axe) — https://adsp.alberta.ca/
- **A11Y-9939ce27** `wcag:wcag111|light` (axe) — https://adsp.alberta.ca/
- **A11Y-95ae39d7** `rule:distinguishable/color-contrast|light` (accesslint) — https://adsp.alberta.ca/
- **A11Y-2bb976ba** `rule:distinguishable/color-contrast|light` (accesslint) — https://adsp.alberta.ca/
- **A11Y-0f25cc29** `rule:navigable/heading-order|light` (accesslint) — https://adsp.alberta.ca/
- **A11Y-56184596** `rule:navigable/heading-order|light` (accesslint) — https://adsp.alberta.ca/
- **A11Y-459edf56** `rule:landmarks/no-duplicate-banner|light` (accesslint) — https://adsp.alberta.ca/
- **A11Y-8be09dce** `rule:labels-and-names/label-content-mismatch|light` (accesslint) — https://adsp.alberta.ca/

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact. Scanner columns show raw failures; the Total column remains unique across the active scanners.

| Page | axe Errors | AccessLint Errors | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://adsp.alberta.ca/) | 9 | 6 | **15** | Alberta Digital Service Platform |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| empty-heading | **1** of 2 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-heading) |
| heading-order | **1** of 2 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| role-img-alt | **1** of 2 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/role-img-alt) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Errors | ALFA Errors | Equal Access Errors | AccessLint Errors | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://alberta.ca | https://alberta.ca/ | FAIL | - | no | 325 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://adsp.alberta.ca/ | https://adsp.alberta.ca/ | OK | 200 | no | 14242 | 9 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, heading-order, role-img-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/no-duplicate-banner, navigable/heading-order |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://adsp.alberta.ca/

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-07-07
- Message: Headings should not be empty
- HTML: `<h1 class="svelte-1bs44ou"></h1>`
- XPath: `goa-hero-banner,h1`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-07-07
- Message: Heading levels should only increase by one
- HTML: `<h4>Tenants</h4>`
- XPath: `.iiGkvd[md="3"][hspacing="0.5"]:nth-child(1) > div > h4`

#### Rule: [role-img-alt](https://dequeuniversity.com/rules/axe/4.11/role-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-07-07
- Message: [role="img"] elements must have alternative text
- HTML: `<div role="img" aria-label="" aria-controls="" aria-expanded="true" class="goa-icon goa-icon--medium svelte-1wzvott" data-testid="" data-type="create" title="" style="          ;     --opacity: 1;   ">`
- XPath: `.sc-iGOTzy > goa-icon,.goa-icon.goa-icon--medium[aria-label=""]`

**Failure 2:**
- First identified: 2026-07-07
- Message: [role="img"] elements must have alternative text
- HTML: `<div role="img" aria-label="" aria-controls="" aria-expanded="true" class="goa-icon goa-icon--medium svelte-1wzvott" data-testid="" data-type="create" title="" style="          ;     --opacity: 1;   ">`
- XPath: `.sc-fPzTCD > goa-icon,.goa-icon.goa-icon--medium[aria-label=""]`

**Failure 3:**
- First identified: 2026-07-07
- Message: [role="img"] elements must have alternative text
- HTML: `<div role="img" aria-label="" aria-controls="" aria-expanded="true" class="goa-icon goa-icon--medium svelte-1wzvott" data-testid="" data-type="create" title="" style="          ;     --opacity: 1;   ">`
- XPath: `.sc-dKvMaA > goa-icon,.goa-icon.goa-icon--medium[aria-label=""]`

**Failure 4:**
- First identified: 2026-07-07
- Message: [role="img"] elements must have alternative text
- HTML: `<div role="img" aria-label="" aria-controls="" aria-expanded="true" class="goa-icon goa-icon--medium svelte-1wzvott" data-testid="" data-type="create" title="" style="          ;     --opacity: 1;   ">`
- XPath: `.sc-TgMdF > goa-icon,.goa-icon.goa-icon--medium[aria-label=""]`

**Failure 5:**
- First identified: 2026-07-07
- Message: [role="img"] elements must have alternative text
- HTML: `<div role="img" aria-label="" aria-controls="" aria-expanded="true" class="goa-icon goa-icon--medium svelte-1wzvott" data-testid="" data-type="create" title="" style="          ;     --opacity: 1;   ">`
- XPath: `.sc-hWXAay > goa-icon,.goa-icon.goa-icon--medium[aria-label=""]`

*... and 2 more failures for this rule*

