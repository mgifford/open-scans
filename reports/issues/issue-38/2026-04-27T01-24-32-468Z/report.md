# Scan Report: LocalGov Drupal

- Issue: https://github.com/mgifford/open-scans/issues/38
- Submitted by: mgifford
- Scanned at: 2026-04-27T01:23:41.903Z
- Engines used: AXE, ACCESSLINT
- Scan duration: 15.3 minutes
- Total URLs submitted: 70
- Accepted public URLs: 70
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 **Dark mode:** 7 of 70 URLs (10%) support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 48 of 70 URLs (69%) support `prefers-reduced-motion: reduce`
  - 🔍 **High contrast:** 4 of 70 URLs (6%) support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 5 of 70 URLs (7%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 58734 passed, 305 failed, 640 cantTell, 3469 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 5253 passed, 8367 failed (8362 unique, 5 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 5

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.lbhf.gov.uk/) | 2 | 7823 | **7825** | https://www.lbhf.gov.uk/ |
| [View Page](https://new.calderdale.gov.uk/) | 28 | 28 | **56** | Welcome to Calderdale Council \| Calderdale Council |
| [View Page](https://www.milton-keynes.gov.uk/) | 22 | 34 | **56** | Milton Keynes City Council |
| [View Page](https://www.newark-sherwooddc.gov.uk/) | 0 | 39 | **39** | Home \| Newark &amp; Sherwood District Council |
| [View Page](https://www.knowsley.gov.uk/) | 18 | 17 | **35** | Home \| Knowsley Council |
| [View Page](https://www.bedford.gov.uk/) | 6 | 29 | **35** | Homepage \| Bedford Borough Council |
| [View Page](https://www.bracknell-forest.gov.uk/) | 3 | 30 | **33** | Bracknell Forest Council \| |
| [View Page](https://www.luton.gov.uk/) | 5 | 27 | **32** | Luton Borough Council \| Luton Borough Council |
| [View Page](https://www.sstaffs.gov.uk/) | 9 | 22 | **31** | Welcome to South Staffordshire Council - Homepage \| South Staffordshire District Council |
| [View Page](https://haringey.gov.uk/) | 2 | 27 | **29** | Welcome to Haringey Council \| Haringey Council |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| region | **47** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| color-contrast | **11** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| landmark-unique | **9** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| landmark-one-main | **8** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-one-main) |
| html-has-lang | **6** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/html-has-lang) |
| landmark-no-duplicate-contentinfo | **6** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-contentinfo) |
| aria-dialog-name | **5** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-dialog-name) |
| heading-order | **5** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| label-title-only | **5** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/label-title-only) |
| landmark-no-duplicate-banner | **4** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-banner) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<a href="#main-content" class="visually-hidden focusable skip-link">
      Skip to main content
    </a>
```

**XPath** (use in browser DevTools):
```
.focusable
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.focusable')`
5. The element will be highlighted

**Affected Pages**:
- https://beta.luton.gov.uk/
- https://www.solihull.gov.uk/
- https://haringey.gov.uk/
- https://schools.essex.gov.uk/
- https://southwark.gov.uk
- *...and 15 more page(s)*

---

#### Pattern 2: Affects 8 page(s) - 8 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="banner__image">
```

**XPath** (use in browser DevTools):
```
.banner__image
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.banner__image')`
5. The element will be highlighted

**Affected Pages**:
- https://beta.luton.gov.uk/
- https://www.solihull.gov.uk/
- https://www.galway.ie/
- https://schools.essex.gov.uk/
- https://laois.ie/
- *...and 3 more page(s)*

---

#### Pattern 3: Affects 6 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="localgov-alert-banner__content">
```

**XPath** (use in browser DevTools):
```
.localgov-alert-banner__content
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.localgov-alert-banner__content')`
5. The element will be highlighted

**Affected Pages**:
- https://beta.luton.gov.uk/
- https://www.solihull.gov.uk/
- https://www.gedling.gov.uk
- https://www.rbwm.gov.uk/
- https://www.sstaffs.gov.uk/
- *...and 1 more page(s)*

---

#### Pattern 4: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one contentinfo landmark

**HTML Pattern**:
```html
<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">
```

**XPath** (use in browser DevTools):
```
.eu-cookie-compliance-banner
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.eu-cookie-compliance-banner')`
5. The element will be highlighted

**Affected Pages**:
- https://schools.essex.gov.uk/
- https://www.canterbury.gov.uk/
- https://www.essex.gov.uk/
- https://www.knowsley.gov.uk/
- https://www.croydon.gov.uk/

---

#### Pattern 5: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s">
```

**XPath** (use in browser DevTools):
```
.js-form-type-textfield
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.js-form-type-textfield')`
5. The element will be highlighted

**Affected Pages**:
- https://www.solihull.gov.uk/
- https://www.galway.ie/
- https://laois.ie/
- https://cumberland.gov.uk/

---

#### Pattern 6: Affects 3 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**Issue**: Delayed refresh under 20 hours must not be used

**HTML Pattern**:
```html
<meta http-equiv="refresh" content="360">
```

**XPath** (use in browser DevTools):
```
meta[http-equiv="refresh"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('meta[http-equiv="refresh"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.dumfriesandgalloway.gov.uk/
- https://www.newport.gov.uk/
- https://www.tipperarycoco.ie/

---

#### Pattern 7: Affects 3 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__item">
```

**XPath** (use in browser DevTools):
```
.field--name-field-landing-banner
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.field--name-field-landing-banner')`
5. The element will be highlighted

**Affected Pages**:
- https://www.easthants.gov.uk/
- https://www.havant.gov.uk/
- https://www.bedford.gov.uk/

---

#### Pattern 8: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="js-form-item form-item js-form-type-search-api-autocomplete form-item-s js-form-item-s">
```

**XPath** (use in browser DevTools):
```
form[data-drupal-form-fields="edit-s,edit-type"] > .js-form-type-search-api-autocomplete.form-item-s.js-form-item-s
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('form[data-drupal-form-fields="edit-s,edit-type"] > .js-form-type-search-api-autocomplete.form-item-s.js-form-item-s')`
5. The element will be highlighted

**Affected Pages**:
- https://www.staffordshire.gov.uk/
- https://www.knowsley.gov.uk/
- https://www.sheffield.gov.uk/

---

#### Pattern 9: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**Issue**: <html> element must have a lang attribute

**HTML Pattern**:
```html
<html>
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
- https://www.woking.gov.uk/
- https://www.northtyneside.gov.uk/
- https://www.royalgreenwich.gov.uk/

---

#### Pattern 10: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate
**Issue**: Document should have one main landmark

**HTML Pattern**:
```html
<html>
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
- https://www.woking.gov.uk/
- https://www.northtyneside.gov.uk/
- https://www.royalgreenwich.gov.uk/

---

#### Pattern 11: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h1>403 ERROR</h1>
```

**XPath** (use in browser DevTools):
```
h1
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('h1')`
5. The element will be highlighted

**Affected Pages**:
- https://www.woking.gov.uk/
- https://www.northtyneside.gov.uk/
- https://www.royalgreenwich.gov.uk/

---

#### Pattern 12: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h2>The request could not be satisfied.</h2>
```

**XPath** (use in browser DevTools):
```
h2
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('h2')`
5. The element will be highlighted

**Affected Pages**:
- https://www.woking.gov.uk/
- https://www.northtyneside.gov.uk/
- https://www.royalgreenwich.gov.uk/

---

#### Pattern 13: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious
**Issue**: ARIA dialog and alertdialog nodes should have an accessible name

**HTML Pattern**:
```html
<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1">
```

**XPath** (use in browser DevTools):
```
#prefix-overlay-outer
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#prefix-overlay-outer')`
5. The element will be highlighted

**Affected Pages**:
- https://www.erewash.gov.uk/
- https://www.sstaffs.gov.uk/
- https://www.bedford.gov.uk/

---

#### Pattern 14: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="lgd-region lgd-region--banner region region-banner">
```

**XPath** (use in browser DevTools):
```
.lgd-region--banner
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.lgd-region--banner')`
5. The element will be highlighted

**Affected Pages**:
- https://galwaycity.ie/
- https://www.ipswich.gov.uk/
- https://www.tamworth.gov.uk

---

#### Pattern 15: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**Issue**: <html> element must have a lang attribute

**HTML Pattern**:
```html
<html><head><title>403 Forbidden</title></head>
<body>
<center><h1>403 Forbidden</h1></center>








</body></html>
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
- https://www.eastcambs.gov.uk
- https://www.lbbd.gov.uk/
- https://www.redcar-cleveland.gov.uk/

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.clarecoco.ie | https://www.clarecoco.ie/ | OK | 200 | no | 10234 | 7 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-valid-attr-value, distinguishable/color-contrast, landmarks/region |
| https://www.leicester.gov.uk | https://www.leicester.gov.uk/ | OK | 200 | no | 9813 | 0 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch, landmarks/landmark-unique, landmarks/region |
| https://beta.luton.gov.uk/ | https://www.luton.gov.uk/ | OK | 200 | yes | 10092 | 5 | 0 | 0 | 27 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-required-attr, distinguishable/link-in-text-block, labels-and-names/duplicate-id-aria, labels-and-names/label-content-mismatch, labels-and-names/multiple-labels, landmarks/region |
| https://www.staffordshire.gov.uk/ | https://www.staffordshire.gov.uk/ | OK | 200 | no | 10152 | 3 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://www.newark-sherwooddc.gov.uk/ | https://www.newark-sherwooddc.gov.uk/ | OK | 200 | no | 14208 | 0 | 0 | 0 | 39 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/presentational-children-focusable, keyboard-accessible/nested-interactive, labels-and-names/frame-title, landmarks/region |
| https://leeds.gov.uk | https://www.leeds.gov.uk/ | OK | 200 | yes | 30087 | 0 | 0 | 0 | 10 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/label-content-mismatch, landmarks/region, navigable/empty-heading |
| https://www.merton.gov.uk | https://www.merton.gov.uk/ | OK | 200 | no | 8626 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/region |
| https://www.dumfriesandgalloway.gov.uk/ | https://www.dumfriesandgalloway.gov.uk/ | FAIL | 403 | no | 26962 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
| https://www.solihull.gov.uk/ | https://www.solihull.gov.uk/ | OK | 200 | no | 8825 | 5 | 0 | 0 | 22 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-required-attr, labels-and-names/label-content-mismatch, landmarks/landmark-unique, landmarks/region |
| https://www.woking.gov.uk/ | https://www.woking.gov.uk/ | FAIL | 403 | no | 6951 | 5 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, readable/html-has-lang |
| https://www.kingston.gov.uk | https://www.kingston.gov.uk/ | OK | 200 | no | 11551 | 0 | 0 | 0 | 11 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, labels-and-names/frame-title, labels-and-names/label-content-mismatch, landmarks/landmark-unique, landmarks/no-duplicate-contentinfo, landmarks/region, readable/valid-lang |
| https://www.erewash.gov.uk/ | https://www.erewash.gov.uk/ | OK | 200 | no | 10279 | 4 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/landmark-unique, landmarks/region |
| https://www.northtyneside.gov.uk/ | https://www.northtyneside.gov.uk/ | FAIL | 403 | no | 7212 | 5 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, readable/html-has-lang |
| https://www.spelthorne.gov.uk/ | https://www.spelthorne.gov.uk/ | FAIL | - | no | 60000 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://www.galway.ie/ | https://www.galway.ie/en | OK | 200 | yes | 10750 | 5 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region, scrollable-region-focusable |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-valid-attr-value, labels-and-names/label-content-mismatch |
| https://www.gedling.gov.uk | https://www.gedling.gov.uk/ | OK | 200 | no | 12219 | 1 | 0 | 0 | 13 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-prohibited-attr, labels-and-names/duplicate-id-aria, labels-and-names/frame-title, labels-and-names/multiple-labels, landmarks/region, readable/valid-lang |
| https://haringey.gov.uk/ | https://haringey.gov.uk/ | OK | 200 | no | 10671 | 2 | 0 | 0 | 27 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-required-attr, labels-and-names/frame-title, labels-and-names/label-content-mismatch, landmarks/landmark-unique, landmarks/region |
| https://www.newport.gov.uk/ | https://www.newport.gov.uk/ | FAIL | 403 | no | 27866 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
| https://carlow.ie/ | https://carlow.ie/ | OK | 200 | no | 11889 | 1 | 0 | 0 | 4 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/duplicate-id-aria, labels-and-names/multiple-labels, landmarks/region, navigable/heading-order |
| https://www.londoncouncils.gov.uk/ | https://www.londoncouncils.gov.uk/ | OK | 200 | no | 12329 | 0 | 0 | 0 | 8 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/aria-dialog-name, landmarks/region, text-alternatives/image-alt-words |
| https://www.rbwm.gov.uk/ | https://www.rbwm.gov.uk/ | OK | 202 | no | 11387 | 1 | 0 | 0 | 9 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/duplicate-id-aria, labels-and-names/label-content-mismatch, landmarks/landmark-unique, landmarks/region |
| https://schools.essex.gov.uk/ | https://schools.essex.gov.uk/ | OK | 200 | no | 10056 | 5 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-contentinfo, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/no-duplicate-contentinfo |
| https://laois.ie/ | https://laois.ie/ | OK | 200 | no | 12695 | 9 | 0 | 0 | 12 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/duplicate-id-aria, landmarks/landmark-unique |
| https://southwark.gov.uk | https://www.southwark.gov.uk/ | OK | 200 | yes | 12874 | 2 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/frame-title, labels-and-names/label-content-mismatch, landmarks/region, readable/valid-lang |
| https://www.royalgreenwich.gov.uk/ | https://www.royalgreenwich.gov.uk/ | FAIL | 403 | no | 6982 | 5 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, readable/html-has-lang |
| https://northumberland.gov.uk/ | https://www.northumberland.gov.uk/ | OK | 200 | yes | 13107 | 10 | 0 | 0 | 11 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/duplicate-id-aria, landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/no-duplicate-contentinfo |
| https://galwaycity.ie/ | https://www.galwaycity.ie/ | OK | 200 | yes | 13375 | 2 | 0 | 0 | 17 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-required-attr, labels-and-names/label-content-mismatch, landmarks/region, navigable/page-has-heading-one |
| https://www.ipswich.gov.uk/ | https://www.ipswich.gov.uk/ | OK | 200 | no | 12835 | 1 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.eastcambs.gov.uk | https://www.eastcambs.gov.uk/ | FAIL | 403 | no | 8435 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, readable/html-has-lang |
| https://www.tamworth.gov.uk | https://www.tamworth.gov.uk/ | OK | 200 | no | 12903 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/region, navigable/page-has-heading-one, text-alternatives/image-alt-words |
| https://argyll-bute.gov.uk/ | https://www.argyll-bute.gov.uk/ | OK | 200 | yes | 17639 | 1 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.canterbury.gov.uk/ | https://www.canterbury.gov.uk/ | OK | 200 | no | 11272 | 7 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label-title-only, landmark-no-duplicate-contentinfo, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch, labels-and-names/label-title-only, landmarks/no-duplicate-contentinfo |
| https://cumberland.gov.uk/ | https://www.cumberland.gov.uk/ | OK | 200 | yes | 11287 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch |
| https://www.easthants.gov.uk/ | https://www.easthants.gov.uk/ | OK | 200 | no | 12349 | 6 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/region |
| https://www.eaststaffsbc.gov.uk/ | https://www.eaststaffsbc.gov.uk/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://www.essex.gov.uk/ | https://www.essex.gov.uk/ | OK | 200 | no | 8506 | 6 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label-title-only, landmark-no-duplicate-contentinfo, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/no-duplicate-contentinfo, landmarks/region |
| https://www.lbhf.gov.uk/ | https://www.lbhf.gov.uk/ | OK | 202 | no | 34499 | 2 | 0 | 0 | 7823 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-required-attr, labels-and-names/duplicate-id-aria, labels-and-names/label-content-mismatch, labels-and-names/multiple-labels, landmarks/region, navigable/page-has-heading-one |
| https://www.hart.gov.uk/ | https://www.hart.gov.uk/ | OK | 200 | no | 9577 | 3 | 0 | 0 | 9 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch, landmarks/no-duplicate-banner |
| https://www.havant.gov.uk/ | https://www.havant.gov.uk/ | OK | 200 | no | 11610 | 11 | 0 | 0 | 9 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, color-contrast, label-title-only, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, labels-and-names/label-title-only, landmarks/region |
| https://www.n-kesteven.gov.uk/ | https://www.n-kesteven.gov.uk/ | OK | 200 | no | 10052 | 0 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch |
| https://www.northyorks.gov.uk/ | https://www.northyorks.gov.uk/ | OK | 200 | no | 11540 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label-title-only, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/main-is-top-level, landmarks/no-duplicate-main |
| https://www.rutland.gov.uk/ | https://www.rutland.gov.uk/ | OK | 200 | no | 10009 | 6 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-redundant-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, labels-and-names/label-content-mismatch, text-alternatives/image-redundant-alt |
| https://www.surreyheath.gov.uk/ | https://www.surreyheath.gov.uk/ | OK | 200 | no | 11688 | 3 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch, landmarks/region |
| https://www.tipperarycoco.ie/ | https://www.tipperarycoco.ie/ | FAIL | 403 | no | 26850 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
| https://westmorlandandfurness.gov.uk/ | https://www.westmorlandandfurness.gov.uk/ | OK | 200 | yes | 14822 | 8 | 0 | 0 | 8 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label-title-only, landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/duplicate-id-aria, labels-and-names/label-content-mismatch, labels-and-names/multiple-labels, landmarks/banner-is-top-level, landmarks/region |
| https://www.wirral.gov.uk/ | https://www.wirral.gov.uk/ | OK | 200 | no | 9895 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/frame-title, landmarks/region, text-alternatives/image-alt-words |
| https://www.wokingham.gov.uk/ | https://www.wokingham.gov.uk/ | OK | 200 | no | 14273 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/region, navigable/heading-order |
| https://southhams.gov.uk/ | https://southhams.gov.uk/ | FAIL | 405 | no | 9513 | 5 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-redundant-alt, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, text-alternatives/image-redundant-alt |
| https://westdevon.gov.uk/ | https://westdevon.gov.uk/ | FAIL | 405 | no | 9269 | 5 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-redundant-alt, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, text-alternatives/image-redundant-alt |
| https://www.northdevon.gov.uk | https://www.northdevon.gov.uk/ | OK | 200 | no | 8839 | 7 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-contentinfo, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/no-duplicate-contentinfo, navigable/heading-order |
| https://www.southkesteven.gov.uk/ | https://www.southkesteven.gov.uk/ | OK | 200 | no | 9964 | 7 | 0 | 0 | 9 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, link-name, page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/region, navigable/heading-order, navigable/link-name, navigable/page-has-heading-one, navigable/skip-link |
| https://www.sstaffs.gov.uk/ | https://www.sstaffs.gov.uk/ | OK | 200 | no | 10950 | 9 | 0 | 0 | 22 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, color-contrast, meta-viewport-large, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/presentational-children-focusable, keyboard-accessible/focus-order, keyboard-accessible/nested-interactive, labels-and-names/label-content-mismatch, landmarks/region |
| https://www.knowsley.gov.uk/ | https://www.knowsley.gov.uk/ | OK | 200 | no | 21223 | 18 | 0 | 0 | 17 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, landmark-no-duplicate-contentinfo, link-name, region, role-img-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch, landmarks/no-duplicate-contentinfo, navigable/empty-heading, navigable/link-name, text-alternatives/role-img-alt |
| https://new.calderdale.gov.uk/ | https://new.calderdale.gov.uk/ | OK | 200 | no | 19447 | 28 | 0 | 0 | 28 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast, frame-title, region, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, distinguishable/color-contrast, labels-and-names/frame-title, landmarks/region, text-alternatives/svg-img-alt |
| https://www.elmbridge.gov.uk | https://www.elmbridge.gov.uk/ | OK | 200 | no | 9809 | 8 | 0 | 0 | 11 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch, landmarks/banner-is-top-level, landmarks/no-duplicate-banner, landmarks/region |
| https://www.bedford.gov.uk/ | https://www.bedford.gov.uk/ | OK | 200 | no | 9710 | 6 | 0 | 0 | 29 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, heading-order, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-required-attr, distinguishable/link-in-text-block, labels-and-names/label-content-mismatch, landmarks/region, navigable/heading-order |
| https://www.lbbd.gov.uk/ | https://www.lbbd.gov.uk/ | FAIL | 403 | no | 8143 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, readable/html-has-lang |
| https://www.blackburn.gov.uk/ | https://www.blackburn.gov.uk/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://www.rbkc.gov.uk/ | https://www.rbkc.gov.uk/ | OK | 200 | no | 9862 | 8 | 0 | 0 | 12 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-no-duplicate-banner, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/no-duplicate-banner |
| https://www.milton-keynes.gov.uk/ | https://www.milton-keynes.gov.uk/ | OK | 200 | no | 11637 | 22 | 0 | 0 | 34 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-required-children, aria-required-parent, button-name, color-contrast, list, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-allowed-role, keyboard-accessible/focus-order, labels-and-names/aria-toggle-field-name, labels-and-names/button-name, labels-and-names/duplicate-id-aria, labels-and-names/form-label, labels-and-names/label-content-mismatch, landmarks/region |
| https://www.redcar-cleveland.gov.uk/ | https://www.redcar-cleveland.gov.uk/ | FAIL | 403 | no | 8386 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, readable/html-has-lang |
| https://www.sheffield.gov.uk/ | https://www.sheffield.gov.uk/ | OK | 200 | no | 10148 | 3 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch |
| https://www.west-lindsey.gov.uk/ | https://www.west-lindsey.gov.uk/ | OK | 200 | no | 10040 | 0 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch |
| https://www.bracknell-forest.gov.uk/ | https://www.bracknell-forest.gov.uk/ | OK | 200 | no | 8845 | 3 | 0 | 0 | 30 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/region |
| https://www.croydon.gov.uk/ | https://www.croydon.gov.uk/ | OK | 200 | no | 10277 | 5 | 0 | 0 | 8 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, landmark-no-duplicate-contentinfo, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/presentational-children-focusable, keyboard-accessible/nested-interactive, labels-and-names/label-content-mismatch, landmarks/no-duplicate-contentinfo, text-alternatives/image-alt-words |
| https://www.walthamforest.gov.uk/ | https://www.walthamforest.gov.uk/ | OK | 200 | no | 12426 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/duplicate-id-aria, landmarks/landmark-unique, landmarks/region |
| https://www.westminster.gov.uk/ | https://www.westminster.gov.uk/ | OK | 200 | no | 17625 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-command-name, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/aria-required-parent, landmarks/region |
| https://www.westnorthants.gov.uk | https://www.westnorthants.gov.uk/ | OK | 200 | no | 12494 | 4 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/aria-required-parent, text-alternatives/image-alt-words |
| https://www.brighton-hove.gov.uk/ | https://www.brighton-hove.gov.uk/ | OK | 200 | no | 9164 | 1 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/label-content-mismatch, landmarks/banner-is-top-level, landmarks/landmark-unique, landmarks/region |
| https://www.lambeth.gov.uk/ | https://www.lambeth.gov.uk/ | OK | 200 | no | 9495 | 0 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://www.clarecoco.ie

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2>Clare County Council</h2>`
- XPath: `#block-bbd-localgov-clarecountycouncil > h2`

**Failure 2:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 id="block-bbd-localgov-quicklinks-menu">Quicklinks</h2>`
- XPath: `#block-bbd-localgov-quicklinks-menu`

**Failure 3:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 id="block-bbd-localgov-help-menu">Help</h2>`
- XPath: `#block-bbd-localgov-help-menu`

**Failure 4:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 id="block-bbd-localgov-terms-menu">Terms</h2>`
- XPath: `#block-bbd-localgov-terms-menu`

**Failure 5:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2>Google translate</h2>`
- XPath: `#block-bbd-localgov-gtranslate-block--2 > h2`

*... and 2 more failures for this rule*

### https://beta.luton.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 4:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-localgov-title field--type-string field--label-hidden field__item">How can we help?</div>`
- XPath: `.field--name-localgov-title`

**Failure 5:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<input data-drupal-selector="edit-s" placeholder="Search" type="text" id="edit-s--2" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `.beta-search-box > .views-exposed-form.block-localgov-search.block-localgov-sitewide-search-block > form > .js-form-item.form-item.js-form-type-search-api-autocomplete > .form-text.required[data-drupal-selector="edit-s"]`

### https://www.staffordshire.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h1>Welcome to Staffordshire</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-search-api-autocomplete form-item-s js-form-item-s">`
- XPath: `form[data-drupal-form-fields="edit-s,edit-type"] > .js-form-type-search-api-autocomplete.form-item-s.js-form-item-s`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-localgov-image field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-localgov-image`

### https://www.merton.gov.uk

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="fourpledges">`
- XPath: `.fourpledges`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--content-title region region-content-title">`
- XPath: `.lgd-region--content-title`

### https://www.dumfriesandgalloway.gov.uk/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-27
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://www.solihull.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__content-inner">`
- XPath: `.banner__content-inner`

**Failure 4:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s">`
- XPath: `.js-form-type-textfield`

**Failure 5:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

### https://www.woking.gov.uk/

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h1>403 ERROR</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h2>The request could not be satisfied.</h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<pre>Generated by cloudfront (CloudFront) Request ID: kNiN9-IuXaTqJMAhYG1kHsJGCZ_6ZEOvAPWE8hYfCsb7deDhkj74FQ== </pre>`
- XPath: `pre`

### https://www.erewash.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-27
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--opt-in" role="dialog" aria-hidden="false" data-once="data-table">`
- XPath: `.eu-cookie-compliance-banner`

**Failure 2:**
- First identified: 2026-04-27
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1">`
- XPath: `#prefix-overlay-outer`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__body">`
- XPath: `.localgov-alert-banner__body`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="az-services-wrapper">`
- XPath: `.az-services-wrapper`

### https://www.northtyneside.gov.uk/

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h1>403 ERROR</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h2>The request could not be satisfied.</h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<pre>Generated by cloudfront (CloudFront) Request ID: XXJxBdImsHVG1yk621y-4uMC7o44RXC_jnGttpMS0co1Zk4wWMtHVg== </pre>`
- XPath: `pre`

### https://www.galway.ie/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s">`
- XPath: `.js-form-item`

**Failure 4:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a aria-label="Back to top" class="back-to-top" data-min-content-viewport-ratio="1.5" href="#main-content" hidden="" data-once="back-to-top">`
- XPath: `.back-to-top`

#### Rule: [scrollable-region-focusable](https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard), [SC 2.1.3](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: Scrollable region must have keyboard access
- HTML: `<div id="uc-cmp-description" class="overflow">`
- XPath: `#usercentrics-cmp-ui,#uc-cmp-description`

### https://www.gedling.gov.uk

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

### https://haringey.gov.uk/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="search-block-form block block-search block-search-form-block" data-drupal-selector="search-block-form" id="block-searchform" role="search">`
- XPath: `#block-searchform`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.newport.gov.uk/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-27
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://carlow.ie/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Heading levels should only increase by one
- HTML: `<h3 class="box-link__title">     <a class="box-link__link" href="/planning-and-building/development-management/planning-permission">               Online Planning     </a>   </h3>`
- XPath: `.box-links-listing__list-item.lgd-row__one-quarter:nth-child(1) > .box-link.paragraph--type--localgov-box-link > .box-link__title`

### https://www.rbwm.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

### https://schools.essex.gov.uk/

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="page-title">Essex Schools InfoLink</h1>`
- XPath: `h1`

**Failure 4:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<input data-drupal-selector="edit-s" placeholder="Search" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

### https://laois.ie/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Your links to community and updates!</p>`
- XPath: `.lgd-page-section--bg-colour-6.lgd-page-section--padding-top-largest.lgd-page-section--padding-bottom-medium > .padding-horizontal.lgd-container > .layout--onecol.layout > .layout__region--content.layout__region > .text > .field--name-localgov-text.field--type-text-long.field--label-hidden > p`

**Failure 2:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Notification of Temporary Traffic Management at the following location R445 Cappakeel, Ballybrittas, Co. Laois</span>`
- XPath: `.views-row:nth-child(1) > .lgd-teaser.lgd-teaser--localgov-news-article.node--type-localgov-news-article > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > h3 > a[rel="bookmark"] > span`

**Failure 3:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Notification of Temporary road closure at the following L-5595, Shanvaghey, Clogh, Co. Laois&nbsp;&nbsp;&nbsp;&nbsp;</span>`
- XPath: `.views-row:nth-child(2) > .lgd-teaser.lgd-teaser--localgov-news-article.node--type-localgov-news-article > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > h3 > a[rel="bookmark"] > span`

**Failure 4:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Notification of Temporary Road Closure at R-434 at Derrinoliver/Lowran (between Aghaboe &amp; Borris-in-Ossory), The Pike of Rushall, Co. Laois.</span>`
- XPath: `.views-row:nth-child(3) > .lgd-teaser.lgd-teaser--localgov-news-article.node--type-localgov-news-article > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > h3 > a[rel="bookmark"] > span`

**Failure 5:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Notification of Temporary Road Closure at L1756 Ballykealy, Cullahill, Co. Laois</span>`
- XPath: `.views-row:nth-child(4) > .lgd-teaser.lgd-teaser--localgov-news-article.node--type-localgov-news-article > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > h3 > a[rel="bookmark"] > span`

*... and 1 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-banner-text field--type-text-long field--label-hidden field__item"><h2>Welcome to</h2><h1>Laois County Council</h1><p>How can we help you?</p></div>`
- XPath: `.field--name-field-banner-text`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s">`
- XPath: `.js-form-item`

### https://southwark.gov.uk

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="ccc-vendor-reveal ccc-notify-button ccc-link ccc-tabbable" aria-controls="optional-vendor-1" aria-expanded="false">`
- XPath: `.ccc-vendor-reveal`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.royalgreenwich.gov.uk/

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h1>403 ERROR</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h2>The request could not be satisfied.</h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<pre>Generated by cloudfront (CloudFront) Request ID: xDYJxValhKbJN2nAa12-jzZewgsVemdVc7H1pwg7Zdw_jj5qvU2cXQ== </pre>`
- XPath: `pre`

### https://northumberland.gov.uk/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">22 April 2026</span>`
- XPath: `.view-ncc-homepage-news-featured-items-with-image > .view-content > .views-row:nth-child(1) > article > .card-item-link > .content > .date`

**Failure 2:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">13 April 2026</span>`
- XPath: `.view-ncc-homepage-news-featured-items-with-image > .view-content > .views-row:nth-child(2) > article > .card-item-link > .content > .date`

**Failure 3:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">23 April 2026</span>`
- XPath: `.view-ncc-homepage-news-featured-items-with-image > .view-content > .views-row:nth-child(3) > article > .card-item-link > .content > .date`

**Failure 4:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">21 April 2026</span>`
- XPath: `.view-ncc-homepage-news-items-with-image > .view-content > .views-row:nth-child(1) > article > .card-item-link > .content > .date`

**Failure 5:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">20 April 2026</span>`
- XPath: `.view-ncc-homepage-news-items-with-image > .view-content > .views-row:nth-child(2) > article > .card-item-link > .content > .date`

*... and 2 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div id="silktide-banner" class="bottomRight">`
- XPath: `#silktide-banner`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="hero__overlay">`
- XPath: `.hero__overlay`

### https://galwaycity.ie/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--banner region region-banner">`
- XPath: `.lgd-region--banner`

### https://www.ipswich.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--banner region region-banner">`
- XPath: `.lgd-region--banner`

### https://www.eastcambs.gov.uk

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: <html> element must have a lang attribute
- HTML: `<html><head><title>403 Forbidden</title></head> <body> <center><h1>403 Forbidden</h1></center>         </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should have one main landmark
- HTML: `<html><head><title>403 Forbidden</title></head> <body> <center><h1>403 Forbidden</h1></center>         </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<center><h1>403 Forbidden</h1></center>`
- XPath: `center`

### https://www.tamworth.gov.uk

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr" class="sticky-header-html js" style="--lgd-sticky-header-position: 0px; --lgd-sticky-header-height: 116px;">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-27
- Message: Page should contain a level-one heading
- HTML: `<html class="overflow-hidden h-full w-full">`
- XPath: `#connect-frame`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--banner region region-banner">`
- XPath: `.lgd-region--banner`

### https://argyll-bute.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.canterbury.gov.uk/

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-27
- Message: Form elements should have a visible label
- HTML: `<input title="Search" autocomplete="off" data-drupal-selector="edit-search-query" type="text" id="edit-search-query--2" name="search_query" value="" size="60" maxlength="128" placeholder="Search" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-search-query--2`

**Failure 2:**
- First identified: 2026-04-27
- Message: Form elements should have a visible label
- HTML: `<input title="Search" autocomplete="off" data-drupal-selector="edit-search-query" type="text" id="edit-search-query" name="search_query" value="" size="60" maxlength="128" placeholder="Search" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-search-query`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-localgov-title field--type-string field--label-above field__item"> 	<h1>Welcome to 		<span class="banner-title-name">Canterbury</span> 	</h1></div>`
- XPath: `.field--name-localgov-title`

**Failure 4:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-search-query js-form-item-search-query form-no-label">`
- XPath: `#batch-job-form > .js-form-item.form-item.js-form-type-textfield`

### https://cumberland.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h1>Welcome to Cumberland</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s">`
- XPath: `.js-form-type-textfield`

### https://www.easthants.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-field-landing-banner`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-ehdc-theme-homepagebannercontent" class="block block-block-content block-block-content11a73b7a-c7d1-4bc7-9f28-d2a74be1554b">`
- XPath: `#block-ehdc-theme-homepagebannercontent`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<input placeholder="Search" data-drupal-selector="edit-s" data-search-api-auto...="localgov_sitewide_se..." class="form-autocomplete fo..." data-autocomplete-pa...="/search_api_autocomp..." type="text" id="edit-s" name="s" value="" size="30" maxlength="128" required="required" aria-required="true" d ...>`
- XPath: `#edit-s`

**Failure 4:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-field-landing-banner`

**Failure 5:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-ehdc-theme-homepagebannercontent" class="block block-block-content block-block-content11a73b7a-c7d1-4bc7-9f28-d2a74be1554b">`
- XPath: `#block-ehdc-theme-homepagebannercontent`

*... and 1 more failures for this rule*

### https://www.essex.gov.uk/

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-27
- Message: Form elements should have a visible label
- HTML: `<input title="Enter the terms you ..." autocomplete="off" placeholder="Search Essex County ..." onfocus="this.placeholder = '..." onblur="this.placeholder = '..." data-drupal-selector="edit-search-keys" type="text" id="edit-search-keys" name="search_keys" value="" size="60" maxlength="128" class="fo ...>`
- XPath: `#edit-search-keys`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="page-title">Welcome to Essex</h1>`
- XPath: `h1`

**Failure 4:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h2>Search</h2>`
- XPath: `#block-ecc-theme-gov-cludosearchblock > h2`

### https://www.lbhf.gov.uk/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-parent-id="our-services-id" class="lgd-header__nav lbhf-header-drawer-item lbhf-header-drawer-item__sm" id="our-services-drawer" tabindex="-1" aria-labelledby="our-services-id" role="region">`
- XPath: `#our-services-drawer`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.hart.gov.uk/

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should not have more than one banner landmark
- HTML: `<header class="lgd-header" data-once="allStickyHeaders">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="lgd-header" data-once="allStickyHeaders">`
- XPath: `header`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr" class="sticky-header-html js" style="--lgd-sticky-header-position: 0px; --lgd-sticky-header-height: 92px;">`
- XPath: `html`

### https://www.havant.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-27
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-labelledby="#prefix-overlay-header" aria-describedby="#prefix-overlay-step1" style="height: 349px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input placeholder="Search" data-drupal-selector="edit-s" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

**Failure 2:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="field field--name-localgov-news-date field--type-datetime field--label-hidden field__item">13 April 2026</div>`
- XPath: `.views-row:nth-child(1) > a[rel="bookmark"] > .wlgd-news-card > .node--type-localgov-news-article.node--view-mode-news-list > .field--name-localgov-news-date.field--type-datetime.field--label-hidden`

**Failure 3:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="field field--name-localgov-news-date field--type-datetime field--label-hidden field__item">10 April 2026</div>`
- XPath: `.views-row:nth-child(2) > a[rel="bookmark"] > .wlgd-news-card > .node--type-localgov-news-article.node--view-mode-news-list > .field--name-localgov-news-date.field--type-datetime.field--label-hidden`

**Failure 4:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="field field--name-localgov-news-date field--type-datetime field--label-hidden field__item">10 April 2026</div>`
- XPath: `.views-row:nth-child(3) > a[rel="bookmark"] > .wlgd-news-card > .node--type-localgov-news-article.node--view-mode-news-list > .field--name-localgov-news-date.field--type-datetime.field--label-hidden`

**Failure 5:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/news">See More News</a>`
- XPath: `a[href$="news"]`

*... and 1 more failures for this rule*

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-27
- Message: Form elements should have a visible label
- HTML: `<input placeholder="Enter your email address" name="e" type="email" required="" id="prefix-emailInput" title="Enter your email address">`
- XPath: `#prefix-emailInput`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-field-landing-banner`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-havant-theme-homepagebannercontent" class="block block-block-content block-block-content11a73b7a-c7d1-4bc7-9f28-d2a74be1554b">`
- XPath: `#block-havant-theme-homepagebannercontent`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<input placeholder="Search" data-drupal-selector="edit-s" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

### https://www.northyorks.gov.uk/

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-27
- Message: Form elements should have a visible label
- HTML: `<input title="Search" data-drupal-selector="edit-keys" placeholder="Search our website" id="edit-keys--u2Hygo0_wgk" type="search" name="keys" value="" size="15" maxlength="128" class="form-search">`
- XPath: `#edit-keys--u2Hygo0_wgk`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.visually-hidden`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-nyccfrontpagequickactions" class="frontpage-quickactions block block-block-content block-block-contentc440986d-db47-4f2c-9348-b3ac6b93a7d7">`
- XPath: `#block-nyccfrontpagequickactions`

### https://www.rutland.gov.uk/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-27
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="js-localgov-alert-ba..." data-dismiss-alert-t...="alert-63--b0efba5585..." role="alert" data-once="allAlertBanners">`
- XPath: `.js-localgov-alert-banner`

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-27
- Message: Alternative text of images should not be repeated as text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/footer_icons/public/2022-09/group_21.png?itok=2sAiHH2g" width="66" height="66" alt="Email" data-once="allImages">`
- XPath: `img[alt="Email"]`

**Failure 2:**
- First identified: 2026-04-27
- Message: Alternative text of images should not be repeated as text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/footer_icons/public/2022-09/group_19.png?itok=caeYrV6F" width="66" height="66" alt="Customer feedback" data-once="allImages">`
- XPath: `img[alt="Customer feedback"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<select class="gt_selector notranslate" aria-label="Select Language">`
- XPath: `select`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="title-wrapper">                        <div class="field field--name-field-title field--type-string field--label-hidden field__item"><h1>Welcome to Rutland County Council</h1> </div>                </div>`
- XPath: `.title-wrapper`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<input autocomplete="off" data-drupal-selector="edit-search-keys" type="text" id="edit-search-keys--2" name="search_keys" value="" size="60" maxlength="128" placeholder="Search" class="form-text">`
- XPath: `#edit-search-keys--2`

### https://www.surreyheath.gov.uk/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="required">(required)</span>`
- XPath: `#esEmbedIframe`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="lgd-header" data-once="allStickyHeaders">`
- XPath: `header`

**Failure 2:**
- First identified: 2026-04-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main class="main" id="main-content">`
- XPath: `#main-content`

### https://www.tipperarycoco.ie/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-27
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://westmorlandandfurness.gov.uk/

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-27
- Message: Form elements should have a visible label
- HTML: `<input title="Enter the terms you wish to search for." data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" class="form-search">`
- XPath: `.banner__content > div > .search-block-form.block-search.block-search-form-block > form[action="/search"][method="get"][data-once="form-updated"] > .js-form-type-search.form-item-keys.js-form-item-keys > .form-search[data-drupal-selector="edit-keys"][type="search"]`

**Failure 2:**
- First identified: 2026-04-27
- Message: Form elements should have a visible label
- HTML: `<input title="Enter the terms you wish to search for." data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" class="form-search">`
- XPath: `.banner__content > div > .search-block-form.block-search.block-search-form-block > form[action="/search"][method="get"][data-once="form-updated"] > .js-form-type-search.form-item-keys.js-form-item-keys > .form-search[data-drupal-selector="edit-keys"][type="search"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should not have more than one banner landmark
- HTML: `<header class="lgd-header" aria-label="Navigation" data-once="allStickyHeaders">`
- XPath: `header`

**Failure 2:**
- First identified: 2026-04-27
- Message: Document should not have more than one banner landmark
- HTML: `<header class="lgd-header" aria-label="Navigation" data-once="allStickyHeaders">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="search-block-form block block-search block-search-form-block" data-drupal-selector="search-block-form" id="block-localgov-wandf-searchform" role="search">`
- XPath: `.lgd-region__inner--search > .search-block-form.block-search.block-search-form-block`

**Failure 2:**
- First identified: 2026-04-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="search-block-form block block-search block-search-form-block" data-drupal-selector="search-block-form" id="block-localgov-wandf-searchform" role="search">`
- XPath: `.lgd-region__inner--search > .search-block-form.block-search.block-search-form-block`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="rc-anchor-invisible-text"><span>protected by <strong>reCAPTCHA</strong></span><div class="rc-anchor-pt"></div></div>`
- XPath: `iframe[title="reCAPTCHA"]`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="rc-anchor-invisible-text"><span>protected by <strong>reCAPTCHA</strong></span><div class="rc-anchor-pt"></div></div>`
- XPath: `iframe[title="reCAPTCHA"]`

### https://www.wirral.gov.uk/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="checkbox-toggle-off" aria-hidden="true">Off</span>`
- XPath: `.checkbox-toggle-off`

**Failure 2:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="skiptranslate goog-te-gadget" dir="ltr" style="">`
- XPath: `.goog-te-gadget`

**Failure 3:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="VIpgJd-ZVi9od-l4eHX-hSRGPd" href="https://translate.google.com" target="_blank"><img src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png" width="37px" height="14px" style="padding-right: 3px" alt="Google Translate">Translate</a>`
- XPath: `.VIpgJd-ZVi9od-l4eHX-hSRGPd`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.visually-hidden`

### https://www.wokingham.gov.uk/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Heading levels should only increase by one
- HTML: `<h4 class="heading heading--small">             Connect with us       </h4>`
- XPath: `h4`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="footer-banner__text">         <h2 class="heading heading--main">             Sign up to the Wokingham Borough Council Newsletter       </h2>                <p class="paragraph">       Get the latest news and updates within the area.   </p>           </div>`
- XPath: `.footer-banner__text`

### https://southhams.gov.uk/

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-27
- Message: Alternative text of images should not be repeated as text
- HTML: `<img src="data:image/svg+xml;b..." alt="begin" style="margin-left: 5px;">`
- XPath: `img[alt="begin"]`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div><h1 style="font-weight: normal; color: rgb(221, 107, 16);">Let's confirm you are human</h1></div>`
- XPath: `div:nth-child(3)`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div id="root-instructions" style="text-align: initial; align-self: center; line-height: 22px;"><p>Complete the security check before continuing. This step verifies that you are not a bot, which helps to protect your account and prevent spam.</p></div>`
- XPath: `#root-instructions`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<select class="amzn-captcha-lang-selector" aria-label="Select language" style="margin-top: 5px;">`
- XPath: `select`

### https://westdevon.gov.uk/

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-27
- Message: Alternative text of images should not be repeated as text
- HTML: `<img src="data:image/svg+xml;b..." alt="begin" style="margin-left: 5px;">`
- XPath: `img[alt="begin"]`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div><h1 style="font-weight: normal; color: rgb(221, 107, 16);">Let's confirm you are human</h1></div>`
- XPath: `div:nth-child(3)`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div id="root-instructions" style="text-align: initial; align-self: center; line-height: 22px;"><p>Complete the security check before continuing. This step verifies that you are not a bot, which helps to protect your account and prevent spam.</p></div>`
- XPath: `#root-instructions`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<select class="amzn-captcha-lang-selector" aria-label="Select language" style="margin-top: 5px;">`
- XPath: `select`

### https://www.northdevon.gov.uk

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Heading levels should only increase by one
- HTML: `<h4 id="the-crisis-and-resilience-fund-crf-has-replaced-the-household-support-fund">The Crisis and Resilience Fund (CRF) has replaced the Household Support Fund</h4>`
- XPath: `#the-crisis-and-resilience-fund-crf-has-replaced-the-household-support-fund`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookie notice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-localgov-northdevon-localgov-alert-banner-scarfolk" class="block block-localgov-alert-banner block-localgov-alert-banner-block">`
- XPath: `#block-localgov-northdevon-localgov-alert-banner-scarfolk`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-localgov-image field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-localgov-image`

**Failure 4:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<input data-drupal-selector="edit-s" placeholder="Search northdevon.gov.uk" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

**Failure 5:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--pre-footer region region-pre-footer">`
- XPath: `.lgd-region--pre-footer`

### https://www.southkesteven.gov.uk/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Heading levels should only increase by one
- HTML: `<h4>Engines, entertainment and family fun gearing up for Grantham Car Show</h4>`
- XPath: `.views-row.lgd-row__one-third:nth-child(1) > .node--type-localgov-news-article.lgd-teaser.lgd-teaser--localgov-news-article > .card-link > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > .text-wrapper > .field--name-field-display-title.field--type-string.field--label-hidden > h4`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--facebook" href="https://www.facebook.com/southkdc">         <span class="fab fa-facebook fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--facebook`

**Failure 2:**
- First identified: 2026-04-27
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--twitter" href="https://x.com/southkesteven">         <span class="fab fa-x-twitter fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--twitter`

**Failure 3:**
- First identified: 2026-04-27
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--instagram" href="https://www.instagram.com/discoversouthk">         <span class="fab fa-instagram fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--instagram`

**Failure 4:**
- First identified: 2026-04-27
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--linkedin" href="https://www.linkedin.com/company/south-kesteven-council">         <span class="fab fa-linkedin fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--linkedin`

**Failure 5:**
- First identified: 2026-04-27
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--youtube" href="https://www.youtube.com/@SouthKestevenGovUK">         <span class="fab fa-youtube fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--youtube`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr" class="sticky-header-html js" style="--lgd-sticky-header-position: 0px; --lgd-sticky-header-height: 121px;">`
- XPath: `html`

### https://www.sstaffs.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-27
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input type="submit" value="Subscribe" id="prefix-submitButton">`
- XPath: `#prefix-submitButton`

#### Rule: [meta-viewport-large](https://dequeuniversity.com/rules/axe/4.11/meta-viewport-large?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-27
- Message: Users should be able to zoom and scale the text up to 500%
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0, user-scalable=yes">`
- XPath: `meta[name="viewport"]:nth-child(28)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="email-alerts--text"><h3 class="email-alerts--heading h5">Stay connected</h3> <p>Sign up to receive news and updates from South Staffordshire Council</p> </div>`
- XPath: `.email-alerts--text`

**Failure 4:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-email form-item-email js-form-item-email form-no-label">`
- XPath: `.js-form-type-email`

**Failure 5:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h2>A-Z of services</h2>`
- XPath: `#block-atoz > h2`

*... and 1 more failures for this rule*

### https://www.knowsley.gov.uk/

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-27
- Message: Headings should not be empty
- HTML: `<h2 class="call-to-action-links-listing__title"></h2>`
- XPath: `.call-to-action-links-listing__title`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--facebook" href="https://www.facebook.com/knowsley.council">         <span class="fab fa-facebook fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--facebook`

**Failure 2:**
- First identified: 2026-04-27
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--youtube" href="https://www.youtube.com/knowsleycouncil">         <span class="fab fa-youtube fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--youtube`

**Failure 3:**
- First identified: 2026-04-27
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--instagram" href="https://www.instagram.com/knowsleycouncil">         <span class="fab fa-instagram fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--instagram`

**Failure 4:**
- First identified: 2026-04-27
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--pinterest" href="https://www.pinterest.com/knowsleycouncil">         <span class="fab fa-pinterest fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--pinterest`

**Failure 5:**
- First identified: 2026-04-27
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--flickr" href="https://www.flickr.com/photos/knowsleycouncil">         <span class="fab fa-flickr fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--flickr`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-knowsley-localgov-alert-banner-scarfolk" class="block block-localgov-alert-banner block-localgov-alert-banner-block">`
- XPath: `#block-knowsley-localgov-alert-banner-scarfolk`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 4:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<span class="heading-intro">Welcome,</span>`
- XPath: `.heading-intro`

**Failure 5:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="page-title">How can we help?</h1>`
- XPath: `h1`

*... and 1 more failures for this rule*

#### Rule: [role-img-alt](https://dequeuniversity.com/rules/axe/4.11/role-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: [role="img"] elements must have alternative text
- HTML: `<span class="fa-ext extlink" role="img" aria-hidden="false"><span class="fa fa-external-link" data-extlink-placement="append"></span></span>`
- XPath: `.call-to-action.paragraph--type--call-to-action.paragraph--view-mode--default > .ext[data-extlink=""][aria-label="(link is external)"] > .fa-ext.extlink[role="img"]`

**Failure 2:**
- First identified: 2026-04-27
- Message: [role="img"] elements must have alternative text
- HTML: `<span class="fa-ext extlink" role="img" aria-hidden="false"><span class="fa fa-external-link" data-extlink-placement="append"></span></span>`
- XPath: `a[href$="foster4.co.uk/"] > .fa-ext.extlink[role="img"]`

**Failure 3:**
- First identified: 2026-04-27
- Message: [role="img"] elements must have alternative text
- HTML: `<span class="fa-ext extlink" role="img" aria-hidden="false"><span class="fa fa-external-link" data-extlink-placement="append"></span></span>`
- XPath: `a[href$="knowsleyeps.co.uk/"] > .fa-ext.extlink[role="img"]`

**Failure 4:**
- First identified: 2026-04-27
- Message: [role="img"] elements must have alternative text
- HTML: `<span class="fa-ext extlink" role="img" aria-hidden="false"><span class="fa fa-external-link" data-extlink-placement="append"></span></span>`
- XPath: `.menu-item:nth-child(10) > .ext[data-extlink=""][aria-label="(link is external)"] > .fa-ext.extlink[role="img"]`

**Failure 5:**
- First identified: 2026-04-27
- Message: [role="img"] elements must have alternative text
- HTML: `<span class="fa-ext extlink" role="img" aria-hidden="false"><span class="fa fa-external-link" data-extlink-placement="append"></span></span>`
- XPath: `.menu-item:nth-child(13) > .ext[data-extlink=""][aria-label="(link is external)"] > .fa-ext.extlink[role="img"]`

### https://new.calderdale.gov.uk/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-27
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide cmbc-carousel_item is-active is-visible" id="carousel-mogig9la45d5h-slide01" role="group" aria-roledescription="slide" aria-label="1 of 4" style="width: calc(100%);">`
- XPath: `#carousel-mogig9la45d5h-slide01`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oit-inlay-header-title-text" data-bind="           text: strings.title,           visible: strings.title,         ">Web chat</span>`
- XPath: `#chatInlay`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: Frames must have an accessible name
- HTML: `<iframe src="javascript:false" title="" role="presentation" style="position: absolute; width: 0px; height: 0px; border: 0px;"></iframe>`
- XPath: `#chatInlay`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg data-fa-pseudo-element="::after" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" alt="">`
- XPath: `a[href$="apply"] > .fa-chevron-right[data-fa-pseudo-element="::after"][data-icon="chevron-right"]`

**Failure 2:**
- First identified: 2026-04-27
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg data-fa-pseudo-element="::after" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" alt="">`
- XPath: `a[href$="apply-or-search-job"] > .fa-chevron-right[data-fa-pseudo-element="::after"][data-icon="chevron-right"]`

**Failure 3:**
- First identified: 2026-04-27
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg data-fa-pseudo-element="::after" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" alt="">`
- XPath: `.dio_apply-region > .paragraph--type--localgov-text.paragraph.paragraph--view-mode--default > .field--name-localgov-text.field--type-text-long.field--label-hidden > ul > li:nth-child(3) > a[data-entity-substitution="canonical"][data-entity-type="node"] > .fa-chevron-right[data-fa-pseudo-element="::after"][data-icon="chevron-right"]`

**Failure 4:**
- First identified: 2026-04-27
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg data-fa-pseudo-element="::after" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" alt="">`
- XPath: `a[href$="apply-planning-permission"] > .fa-chevron-right[data-fa-pseudo-element="::after"][data-icon="chevron-right"]`

**Failure 5:**
- First identified: 2026-04-27
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg data-fa-pseudo-element="::after" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" alt="">`
- XPath: `a[title="Admissions"] > .fa-chevron-right[data-fa-pseudo-element="::after"][data-icon="chevron-right"]`

*... and 19 more failures for this rule*

### https://www.elmbridge.gov.uk

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--header region region-header" role="banner">`
- XPath: `.lgd-region--header`

**Failure 2:**
- First identified: 2026-04-27
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--content region region-content" role="banner">`
- XPath: `.lgd-region--content`

**Failure 3:**
- First identified: 2026-04-27
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--content-bottom region region-content-bottom" role="banner">`
- XPath: `.lgd-region--content-bottom`

**Failure 4:**
- First identified: 2026-04-27
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--footer-first region region-footer-first" role="banner">`
- XPath: `.lgd-region--footer-first`

**Failure 5:**
- First identified: 2026-04-27
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--footer-second region region-footer-second" role="banner">`
- XPath: `.lgd-region--footer-second`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should not have more than one banner landmark
- HTML: `<header>         <h1 class="visually-hidden">Welcome to Elmbridge.gov.uk</h1>       </header>`
- XPath: `body > header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header>         <h1 class="visually-hidden">Welcome to Elmbridge.gov.uk</h1>       </header>`
- XPath: `body > header`

### https://www.bedford.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-27
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1">`
- XPath: `#prefix-overlay-outer`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Heading levels should only increase by one
- HTML: `<h3 class="services-menu-title">Services</h3>`
- XPath: `.services-menu-title`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-field-landing-banner`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-bbc-theme-homepagebannercontent" class="block block-block-content block-block-contentf12e6c3d-df74-44c1-b0c3-99781afd32f8">`
- XPath: `#block-bbc-theme-homepagebannercontent`

**Failure 4:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<input placeholder="Search" autocomplete="off" data-drupal-selector="edit-s" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

### https://www.lbbd.gov.uk/

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: <html> element must have a lang attribute
- HTML: `<html><head><title>403 Forbidden</title></head> <body> <center><h1>403 Forbidden</h1></center>         </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should have one main landmark
- HTML: `<html><head><title>403 Forbidden</title></head> <body> <center><h1>403 Forbidden</h1></center>         </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<center><h1>403 Forbidden</h1></center>`
- XPath: `center`

### https://www.rbkc.gov.uk/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button href="#" class="button button--inverse alert-banner__toggle alert-banner__toggle--close js-alert-banner-toggle">        Close     </button>`
- XPath: `.alert-banner__toggle--close`

**Failure 2:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button button--agree button button--inverse" tabindex="0">Accept cookies policy</button>`
- XPath: `.agree-button`

**Failure 3:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="button button--expander js-button-expander" aria-expanded="false">         More services       </button>`
- XPath: `.button--expander`

**Failure 4:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="paragraph">               Use the library catalogue, sign up for events and more.       </p>`
- XPath: `#paragraph-id-4804 > .cta-block__content > .paragraph`

**Failure 5:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.rbkc.gov.uk/libraries-0" class="button button--inverse button--icon" target="_self">`
- XPath: `#paragraph-id-4804 > .button--icon.button--inverse[target="_self"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header eu-cookie-compliance-status-null" data-eu-cookie-compliance-once="true" data-once="site-header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header eu-cookie-compliance-status-null" data-eu-cookie-compliance-once="true" data-once="site-header">`
- XPath: `header`

### https://www.milton-keynes.gov.uk/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-27
- Message: ARIA role should be appropriate for the element
- HTML: `<button role="listitem" class="qc-cmp2-list-item-header" aria-label="Opt-Outs" aria-live="polite">`
- XPath: `button[aria-label="Opt-Outs"]`

**Failure 2:**
- First identified: 2026-04-27
- Message: ARIA role should be appropriate for the element
- HTML: `<li id="Google Basic Consents" class="qc-cmp2-list-item qc-cmp2-expanded" role="list">`
- XPath: `#Google\ Basic\ Consents`

**Failure 3:**
- First identified: 2026-04-27
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="qc-cmp2-list-item-header" role="listitem" aria-label="Google consents" aria-live="polite">`
- XPath: `button[aria-label="Google consents"]`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: Certain ARIA roles must contain particular children
- HTML: `<li id="Google Basic Consents" class="qc-cmp2-list-item qc-cmp2-expanded" role="list">`
- XPath: `#Google\ Basic\ Consents`

#### Rule: [aria-required-parent](https://dequeuniversity.com/rules/axe/4.11/aria-required-parent?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: Certain ARIA roles must be contained by particular parents
- HTML: `<button role="listitem" class="qc-cmp2-list-item-header" aria-label="Opt-Outs" aria-live="polite">`
- XPath: `button[aria-label="Opt-Outs"]`

**Failure 2:**
- First identified: 2026-04-27
- Message: Certain ARIA roles must be contained by particular parents
- HTML: `<p class="qc-cmp2-list-item-title" role="listitem"><p>Google consents</p></p>`
- XPath: `.qc-cmp2-list-item-title[role="listitem"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(1) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

**Failure 2:**
- First identified: 2026-04-27
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(2) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

**Failure 3:**
- First identified: 2026-04-27
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(3) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

**Failure 4:**
- First identified: 2026-04-27
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(4) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

**Failure 5:**
- First identified: 2026-04-27
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(5) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

*... and 2 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="css-jg567y">Opted In</p>`
- XPath: `div:nth-child(2) > .css-cf00qb > .css-jg567y`

**Failure 2:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="css-jg567y">Opted In</p>`
- XPath: `div:nth-child(3) > .css-cf00qb > .css-jg567y`

**Failure 3:**
- First identified: 2026-04-27
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="css-jg567y">Opted In</p>`
- XPath: `div:nth-child(4) > .css-cf00qb > .css-jg567y`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="qc-cmp2-consent-list css-1f88jwd">`
- XPath: `.css-1f88jwd`

**Failure 2:**
- First identified: 2026-04-27
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="qc-cmp2-consent-list css-def7e2">`
- XPath: `.css-def7e2`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__items">`
- XPath: `.field--name-field-landing-banner`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-homepagebannercontent" class="block block-block-content block-block-content065139dd-3323-4556-84e7-e4bce3b95d5f">`
- XPath: `#block-homepagebannercontent`

**Failure 4:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<input placeholder="Search" data-drupal-selector="edit-search" type="text" id="edit-search" name="search" value="" size="30" maxlength="128" class="form-text">`
- XPath: `#edit-search`

### https://www.redcar-cleveland.gov.uk/

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: <html> element must have a lang attribute
- HTML: `<html><head><title>403 Forbidden</title></head> <body> <center><h1>403 Forbidden</h1></center>         </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should have one main landmark
- HTML: `<html><head><title>403 Forbidden</title></head> <body> <center><h1>403 Forbidden</h1></center>         </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<center><h1>403 Forbidden</h1></center>`
- XPath: `center`

### https://www.sheffield.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<h1>For you and your city</h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-search-api-autocomplete form-item-s js-form-item-s">`
- XPath: `#views-exposed-form-search-results-embed-1-69eea111cf6c1-block > .js-form-type-search-api-autocomplete.form-item-s.js-form-item-s`

### https://www.bracknell-forest.gov.uk/

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-27
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-27
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="site-logo" tabindex="2">         <img src="/themes/custom/bfc/logo.svg" alt="Bracknell Forest Council">       </div>`
- XPath: `.site-logo`

**Failure 3:**
- First identified: 2026-04-27
- Message: Elements should not have tabindex greater than zero
- HTML: `<button aria-controls="main-menu-wrapper" aria-expanded="false" type="button" class="menu__button" tabindex="3">`
- XPath: `.menu__button`

### https://www.croydon.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-27
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="sliding-popup" role="alertdialog" aria-describedby="popup-text" class="sliding-popup-top clearfix" style="top: 0px;">`
- XPath: `#sliding-popup`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="search-block-form google-cse block block-search block-search-form-block" data-drupal-selector="search-block-form" novalidate="novalidate" id="block-localgov-base-croydon-searchform" role="search">`
- XPath: `#block-localgov-base-croydon-searchform`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

### https://www.walthamforest.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="homepage-banner__hero-image">`
- XPath: `.homepage-banner__hero-image`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="homepage-banner__content homepage-banner__content--right ">`
- XPath: `.homepage-banner__content--right`

### https://www.westminster.gov.uk/

#### Rule: [aria-command-name](https://dequeuniversity.com/rules/axe/4.11/aria-command-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-27
- Message: ARIA commands must have an accessible name
- HTML: `<div id="oc-lcw-chat-button" dir="ltr" tabindex="0" role="button" class="ms-Stack css-110"><i aria-hidden="true" class="root-111" id="oc-lcw-chat-button-icon-container"></i></div>`
- XPath: `#Microsoft_Omnichannel_LCWidget_Chat_Iframe_Window`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="col-md-12">`
- XPath: `.col-md-12`

### https://www.westnorthants.gov.uk

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<p class="sc-iVnIWt isTIAC">Tell us whether you accept cookies</p>`
- XPath: `.sc-iVnIWt`

**Failure 2:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="sc-hWgKua iAFiwN"><p>We use <a href="/your-council/cookies">cookies to collect information</a> about how you use this website. We use this information to make it work as well as possible and help make improvements.</p></div>`
- XPath: `.sc-hWgKua`

**Failure 3:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div class="sc-fGniAB kxXsia">`
- XPath: `.sc-fGniAB`

**Failure 4:**
- First identified: 2026-04-27
- Message: All page content should be contained by landmarks
- HTML: `<div id="promoted-services-tabpanel-0" aria-labelledby="promoted-services-tab-0" role="tabpanel" class="sc-ecEkbT bubSOo">`
- XPath: `#promoted-services-tabpanel-0`

### https://www.brighton-hove.gov.uk/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-27
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="block-bhcc-base-footer-menu" role="navigation">`
- XPath: `#block-bhcc-base-footer-menu`

