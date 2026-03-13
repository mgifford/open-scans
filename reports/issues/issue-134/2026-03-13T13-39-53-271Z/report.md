# Scan Report: NFP.org

- Issue: https://github.com/mgifford/open-scans/issues/134
- Submitted by: mgifford
- Scanned at: 2026-03-13T13:38:55.118Z
- Engines used: AXE, ACCESSLINT
- Scan duration: 0.6 minutes
- Total URLs submitted: 18
- Accepted public URLs: 18
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 1044 passed, 72 failed, 18 cantTell, 1296 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 1602 passed, 54 failed (54 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 0

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://nfb.org/) | 4 | 3 | **7** | Attention Required! \| Cloudflare |
| [View Page](https://nfb.org/about-us/contact-us) | 4 | 3 | **7** | Attention Required! \| Cloudflare |
| [View Page](https://nfb.org/about-us/state-affiliates) | 4 | 3 | **7** | Attention Required! \| Cloudflare |
| [View Page](https://nfb.org/resources/publications-and-media) | 4 | 3 | **7** | Attention Required! \| Cloudflare |
| [View Page](https://nfb.org/get-involved/join-us) | 4 | 3 | **7** | Attention Required! \| Cloudflare |
| [View Page](https://nfb.org/programs-services/free-white-cane-program) | 4 | 3 | **7** | Attention Required! \| Cloudflare |
| [View Page](https://nfb.org/programs-services/independence-market) | 4 | 3 | **7** | Attention Required! \| Cloudflare |
| [View Page](https://nfb.org/resources/publications-and-media/braille-monitor) | 4 | 3 | **7** | Attention Required! \| Cloudflare |
| [View Page](https://nfb.org/blog) | 4 | 3 | **7** | Attention Required! \| Cloudflare |
| [View Page](https://nfb.org/about-us/leadership/board-directors) | 4 | 3 | **7** | Attention Required! \| Cloudflare |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-one-main | **18** of 18 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-one-main) |
| region | **18** of 18 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 18 page(s) - 18 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate
**Issue**: Document should have one main landmark

**HTML Pattern**:
```html
<html class="no-js" lang="en-US">
```

**XPath** (use in browser DevTools):
```
html
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('html')`
5. The element will be highlighted

**Affected Pages**:
- https://nfb.org/
- https://nfb.org/about-us/contact-us
- https://nfb.org/about-us/state-affiliates
- https://nfb.org/resources/publications-and-media
- https://nfb.org/get-involved/join-us
- *...and 13 more page(s)*

---

#### Pattern 2: Affects 18 page(s) - 18 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="cf-wrapper cf-header cf-error-overview">
        <h1 data-translate="block_headline">Sorry, you have been blocked</h1>
        <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>
      </div>
```

**XPath** (use in browser DevTools):
```
.cf-header
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.cf-header')`
5. The element will be highlighted

**Affected Pages**:
- https://nfb.org/
- https://nfb.org/about-us/contact-us
- https://nfb.org/about-us/state-affiliates
- https://nfb.org/resources/publications-and-media
- https://nfb.org/get-involved/join-us
- *...and 13 more page(s)*

---

#### Pattern 3: Affects 18 page(s) - 18 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="cf-section cf-wrapper">
```

**XPath** (use in browser DevTools):
```
.cf-section.cf-wrapper
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.cf-section.cf-wrapper')`
5. The element will be highlighted

**Affected Pages**:
- https://nfb.org/
- https://nfb.org/about-us/contact-us
- https://nfb.org/about-us/state-affiliates
- https://nfb.org/resources/publications-and-media
- https://nfb.org/get-involved/join-us
- *...and 13 more page(s)*

---

#### Pattern 4: Affects 18 page(s) - 18 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p class="text-13">
```

**XPath** (use in browser DevTools):
```
.text-13
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.text-13')`
5. The element will be highlighted

**Affected Pages**:
- https://nfb.org/
- https://nfb.org/about-us/contact-us
- https://nfb.org/about-us/state-affiliates
- https://nfb.org/resources/publications-and-media
- https://nfb.org/get-involved/join-us
- *...and 13 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://nfb.org/ | https://nfb.org/ | FAIL | 403 | no | 4903 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/about-us/contact-us | https://nfb.org/about-us/contact-us | FAIL | 403 | no | 1954 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/about-us/state-affiliates | https://nfb.org/about-us/state-affiliates | FAIL | 403 | no | 1945 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/resources/publications-and-media | https://nfb.org/resources/publications-and-media | FAIL | 403 | no | 1922 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/get-involved/join-us | https://nfb.org/get-involved/join-us | FAIL | 403 | no | 1948 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/programs-services/free-white-cane-program | https://nfb.org/programs-services/free-white-cane-program | FAIL | 403 | no | 1937 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/programs-services/independence-market | https://nfb.org/programs-services/independence-market | FAIL | 403 | no | 1935 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/resources/publications-and-media/braille-monitor | https://nfb.org/resources/publications-and-media/braille-monitor | FAIL | 403 | no | 1931 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/blog | https://nfb.org/blog | FAIL | 403 | no | 1919 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/about-us/leadership/board-directors | https://nfb.org/about-us/leadership/board-directors | FAIL | 403 | no | 1925 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/programs-services/nfb-newsline | https://nfb.org/programs-services/nfb-newsline | FAIL | 403 | no | 1918 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/resources/jacobus-tenbroek-library | https://nfb.org/resources/jacobus-tenbroek-library | FAIL | 403 | no | 1916 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/get-involved/national-convention | https://nfb.org/get-involved/national-convention | FAIL | 403 | no | 1920 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/programs-services/legal-program | https://nfb.org/programs-services/legal-program | FAIL | 403 | no | 1912 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/programs-services/education | https://nfb.org/programs-services/education | FAIL | 403 | no | 1908 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/programs-services/braille-certification | https://nfb.org/programs-services/braille-certification | FAIL | 403 | no | 1931 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/about-us/press-room | https://nfb.org/about-us/press-room | FAIL | 403 | no | 1914 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |
| https://nfb.org/about-us/annual-report-and-financials | https://nfb.org/about-us/annual-report-and-financials | FAIL | 403 | no | 1915 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/link-in-text-block, landmarks/landmark-main, landmarks/region |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://nfb.org/

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/about-us/contact-us

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/about-us/state-affiliates

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/resources/publications-and-media

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/get-involved/join-us

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/programs-services/free-white-cane-program

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/programs-services/independence-market

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/resources/publications-and-media/braille-monitor

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/blog

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/about-us/leadership/board-directors

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/programs-services/nfb-newsline

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/resources/jacobus-tenbroek-library

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/get-involved/national-convention

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/programs-services/legal-program

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/programs-services/education

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/programs-services/braille-certification

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/about-us/press-room

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

### https://nfb.org/about-us/annual-report-and-financials

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html class="no-js" lang="en-US">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-wrapper cf-header cf-error-overview">         <h1 data-translate="block_headline">Sorry, you have been blocked</h1>         <h2 class="cf-subheadline"><span data-translate="unable_to_access">You are unable to access</span> nfb.org</h2>       </div>`
- XPath: `.cf-header`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="cf-section cf-wrapper">`
- XPath: `.cf-section.cf-wrapper`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="text-13">`
- XPath: `.text-13`

