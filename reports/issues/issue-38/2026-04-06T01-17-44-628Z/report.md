# Scan Report: LocalGov Drupal

- Issue: https://github.com/mgifford/open-scans/issues/38
- Submitted by: mgifford
- Scanned at: 2026-04-06T01:16:54.803Z
- Engines used: AXE, ACCESSLINT
- Scan duration: 16.4 minutes
- Total URLs submitted: 70
- Accepted public URLs: 70
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 **Dark mode:** 7 of 70 URLs (10%) support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 54 of 70 URLs (77%) support `prefers-reduced-motion: reduce`
  - 🔍 **High contrast:** 4 of 70 URLs (6%) support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 5 of 70 URLs (7%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 64935 passed, 311 failed, 711 cantTell, 3240 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 5486 passed, 8404 failed (8394 unique, 10 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 15

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.lbhf.gov.uk/) | 2 | 7817 | **7819** | Page not found \| London Borough of Hammersmith &amp; Fulham |
| [View Page](https://new.calderdale.gov.uk/) | 29 | 28 | **57** | Welcome to Calderdale Council \| Calderdale Council |
| [View Page](https://www.milton-keynes.gov.uk/) | 22 | 34 | **56** | Milton Keynes City Council |
| [View Page](https://www.newark-sherwooddc.gov.uk/) | 0 | 39 | **39** | Home \| Newark &amp; Sherwood District Council |
| [View Page](https://www.sstaffs.gov.uk/) | 8 | 26 | **34** | Welcome to South Staffordshire Council - Homepage \| South Staffordshire District Council |
| [View Page](https://www.bracknell-forest.gov.uk/) | 3 | 30 | **33** | Bracknell Forest Council \| |
| [View Page](https://www.knowsley.gov.uk/) | 16 | 15 | **31** | Home \| Knowsley Council |
| [View Page](https://www.bedford.gov.uk/) | 6 | 23 | **29** | Homepage \| Bedford Borough Council |
| [View Page](https://www.solihull.gov.uk/) | 5 | 22 | **27** | Homepage \| Solihull Metropolitan Borough Council |
| [View Page](https://www.luton.gov.uk/) | 5 | 21 | **26** | Luton Borough Council \| Luton Borough Council |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| region | **47** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| color-contrast | **11** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| landmark-no-duplicate-contentinfo | **9** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-contentinfo) |
| landmark-unique | **9** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| aria-dialog-name | **6** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-dialog-name) |
| heading-order | **5** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| label-title-only | **5** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/label-title-only) |
| link-name | **4** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| page-has-heading-one | **4** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/page-has-heading-one) |
| aria-allowed-role | **4** of 70 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 22 page(s) - 22 occurrence(s)

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
- https://carlow.ie/
- https://schools.essex.gov.uk/
- *...and 17 more page(s)*

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
- https://www.eastcambs.gov.uk
- https://new.calderdale.gov.uk/
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
- https://www.redcar-cleveland.gov.uk/
- https://www.sheffield.gov.uk/

---

#### Pattern 6: Affects 4 page(s) - 4 occurrence(s)

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

#### Pattern 7: Affects 4 page(s) - 4 occurrence(s)

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
- https://www.northtyneside.gov.uk/
- https://galwaycity.ie/
- https://www.ipswich.gov.uk/
- https://www.tamworth.gov.uk

---

#### Pattern 8: Affects 3 page(s) - 6 occurrence(s)

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

#### Pattern 9: Affects 3 page(s) - 4 occurrence(s)

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

#### Pattern 10: Affects 3 page(s) - 3 occurrence(s)

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

#### Pattern 11: Affects 2 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="rc-anchor-invisible-text"><span>protected by <strong>reCAPTCHA</strong></span><div class="rc-anchor-pt"></div></div>
```

**XPath** (use in browser DevTools):
```
iframe[title="reCAPTCHA"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('iframe[title="reCAPTCHA"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.woking.gov.uk/
- https://westmorlandandfurness.gov.uk/

---

#### Pattern 12: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="field field--name-localgov-image field--type-entity-reference field--label-hidden field__item">
```

**XPath** (use in browser DevTools):
```
.field--name-localgov-image
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.field--name-localgov-image')`
5. The element will be highlighted

**Affected Pages**:
- https://www.staffordshire.gov.uk/
- https://www.northdevon.gov.uk

---

#### Pattern 13: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one contentinfo landmark

**HTML Pattern**:
```html
<footer class="lgd-footer">
```

**XPath** (use in browser DevTools):
```
footer
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('footer')`
5. The element will be highlighted

**Affected Pages**:
- https://www.kingston.gov.uk
- https://www.northtyneside.gov.uk/

---

#### Pattern 14: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="lgd-region lgd-region--pre-footer region region-pre-footer">
```

**XPath** (use in browser DevTools):
```
.lgd-region--pre-footer
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.lgd-region--pre-footer')`
5. The element will be highlighted

**Affected Pages**:
- https://www.northyorks.gov.uk/
- https://www.northdevon.gov.uk

---

#### Pattern 15: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor
**Issue**: Alternative text of images should not be repeated as text

**HTML Pattern**:
```html
<img src="data:image/svg+xml;b..." alt="begin" style="margin-left: 5px;">
```

**XPath** (use in browser DevTools):
```
img[alt="begin"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('img[alt="begin"]')`
5. The element will be highlighted

**Affected Pages**:
- https://southhams.gov.uk/
- https://westdevon.gov.uk/

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.clarecoco.ie | https://www.clarecoco.ie/ | OK | 200 | no | 9833 | 6 | 0 | 0 | 5 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-valid-attr-value, distinguishable/color-contrast, labels-and-names/duplicate-id-aria, labels-and-names/multiple-labels, landmarks/region |
| https://www.leicester.gov.uk | https://www.leicester.gov.uk/ | OK | 200 | no | 11338 | 0 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/frame-title, labels-and-names/label-content-mismatch, landmarks/landmark-unique, landmarks/region, readable/valid-lang |
| https://beta.luton.gov.uk/ | https://www.luton.gov.uk/ | OK | 200 | yes | 10098 | 5 | 0 | 0 | 21 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, labels-and-names/duplicate-id-aria, labels-and-names/label-content-mismatch, labels-and-names/multiple-labels, landmarks/region, navigable/heading-order |
| https://www.staffordshire.gov.uk/ | https://www.staffordshire.gov.uk/ | OK | 200 | no | 11432 | 3 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://www.newark-sherwooddc.gov.uk/ | https://www.newark-sherwooddc.gov.uk/ | OK | 200 | no | 15040 | 0 | 0 | 0 | 39 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/presentational-children-focusable, keyboard-accessible/nested-interactive, labels-and-names/frame-title, landmarks/region |
| https://leeds.gov.uk | https://www.leeds.gov.uk/ | OK | 200 | yes | 31427 | 0 | 0 | 0 | 10 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/label-content-mismatch, landmarks/region, navigable/empty-heading |
| https://www.merton.gov.uk | https://www.merton.gov.uk/ | OK | 200 | no | 9094 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/region |
| https://www.dumfriesandgalloway.gov.uk/ | https://www.dumfriesandgalloway.gov.uk/ | FAIL | 403 | no | 26889 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://www.solihull.gov.uk/ | https://www.solihull.gov.uk/ | OK | 200 | no | 8892 | 5 | 0 | 0 | 22 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-required-attr, labels-and-names/label-content-mismatch, landmarks/landmark-unique, landmarks/region |
| https://www.woking.gov.uk/ | https://www.woking.gov.uk/ | OK | 200 | no | 12341 | 1 | 0 | 0 | 24 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/label-content-mismatch, landmarks/region, navigable/empty-heading, readable/valid-lang, text-alternatives/image-alt-words |
| https://www.kingston.gov.uk | https://www.kingston.gov.uk/ | OK | 200 | no | 11444 | 2 | 0 | 0 | 11 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-contentinfo, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, labels-and-names/frame-title, labels-and-names/label-content-mismatch, landmarks/landmark-unique, landmarks/no-duplicate-contentinfo, landmarks/region, readable/valid-lang |
| https://www.erewash.gov.uk/ | https://www.erewash.gov.uk/ | OK | 200 | no | 9362 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch, landmarks/landmark-unique, landmarks/region |
| https://www.northtyneside.gov.uk/ | https://www.northtyneside.gov.uk/ | OK | 200 | no | 10222 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, landmark-no-duplicate-contentinfo, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/no-duplicate-contentinfo, text-alternatives/image-alt-words |
| https://www.spelthorne.gov.uk/ | https://www.spelthorne.gov.uk/ | FAIL | - | no | 60000 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://www.galway.ie/ | https://www.galway.ie/en | OK | 200 | yes | 10706 | 5 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region, scrollable-region-focusable |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-valid-attr-value, labels-and-names/label-content-mismatch |
| https://www.gedling.gov.uk | https://www.gedling.gov.uk/ | OK | 200 | no | 10994 | 1 | 0 | 0 | 15 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-prohibited-attr, labels-and-names/duplicate-id-aria, labels-and-names/frame-title, labels-and-names/multiple-labels, landmarks/region, readable/valid-lang |
| https://haringey.gov.uk/ | https://haringey.gov.uk/ | OK | 200 | no | 10914 | 2 | 0 | 0 | 20 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, labels-and-names/frame-title, labels-and-names/label-content-mismatch, landmarks/landmark-unique, landmarks/region, navigable/heading-order |
| https://www.newport.gov.uk/ | https://www.newport.gov.uk/ | FAIL | 403 | no | 28304 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://carlow.ie/ | https://carlow.ie/ | OK | 200 | no | 12603 | 2 | 0 | 0 | 18 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, labels-and-names/duplicate-id-aria, labels-and-names/label-content-mismatch, labels-and-names/multiple-labels, landmarks/region, navigable/heading-order |
| https://www.londoncouncils.gov.uk/ | https://www.londoncouncils.gov.uk/ | OK | 200 | no | 12388 | 0 | 0 | 0 | 8 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, keyboard-accessible/focus-order, labels-and-names/aria-dialog-name, landmarks/region, text-alternatives/image-alt-words |
| https://www.rbwm.gov.uk/ | https://www.rbwm.gov.uk/ | OK | 200 | no | 9643 | 0 | 0 | 0 | 9 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/duplicate-id-aria, labels-and-names/label-content-mismatch, landmarks/landmark-unique, landmarks/region |
| https://schools.essex.gov.uk/ | https://schools.essex.gov.uk/ | OK | 200 | no | 9886 | 5 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-contentinfo, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/no-duplicate-contentinfo |
| https://laois.ie/ | https://laois.ie/ | OK | 200 | no | 13093 | 9 | 0 | 0 | 12 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/duplicate-id-aria, landmarks/landmark-unique |
| https://southwark.gov.uk | https://www.southwark.gov.uk/ | OK | 200 | yes | 12633 | 2 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/frame-title, labels-and-names/label-content-mismatch, landmarks/region, readable/valid-lang |
| https://www.royalgreenwich.gov.uk/ | https://www.royalgreenwich.gov.uk/ | OK | 200 | no | 10668 | 6 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-contentinfo, link-name, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch, landmarks/no-duplicate-contentinfo, navigable/link-name |
| https://northumberland.gov.uk/ | https://www.northumberland.gov.uk/ | OK | 200 | yes | 13546 | 10 | 0 | 0 | 11 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/duplicate-id-aria, landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/no-duplicate-contentinfo |
| https://galwaycity.ie/ | https://www.galwaycity.ie/ | OK | 200 | yes | 14150 | 2 | 0 | 0 | 17 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-required-attr, labels-and-names/label-content-mismatch, landmarks/region, navigable/page-has-heading-one |
| https://www.ipswich.gov.uk/ | https://www.ipswich.gov.uk/ | OK | 200 | no | 12848 | 1 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://www.eastcambs.gov.uk | https://eastcambs.gov.uk/ | OK | 200 | yes | 15968 | 2 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: page-has-heading-one, region |
| https://www.tamworth.gov.uk | https://www.tamworth.gov.uk/ | OK | 200 | no | 13905 | 3 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/region, navigable/page-has-heading-one |
| https://argyll-bute.gov.uk/ | https://www.argyll-bute.gov.uk/ | OK | 200 | yes | 22332 | 3 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, link-name, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: navigable/link-name, text-alternatives/img-alt |
| https://www.canterbury.gov.uk/ | https://www.canterbury.gov.uk/ | OK | 200 | no | 12005 | 7 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label-title-only, landmark-no-duplicate-contentinfo, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch, labels-and-names/label-title-only, landmarks/no-duplicate-contentinfo |
| https://cumberland.gov.uk/ | https://www.cumberland.gov.uk/ | OK | 200 | yes | 12723 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch |
| https://www.easthants.gov.uk/ | https://www.easthants.gov.uk/ | OK | 200 | no | 13281 | 8 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, landmarks/region |
| https://www.eaststaffsbc.gov.uk/ | https://www.eaststaffsbc.gov.uk/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://www.essex.gov.uk/ | https://www.essex.gov.uk/ | OK | 200 | no | 9561 | 6 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label-title-only, landmark-no-duplicate-contentinfo, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/no-duplicate-contentinfo, landmarks/region |
| https://www.lbhf.gov.uk/ | https://www.lbhf.gov.uk/ | FAIL | 404 | no | 32954 | 2 | 0 | 0 | 7817 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, labels-and-names/duplicate-id-aria, labels-and-names/label-content-mismatch, labels-and-names/multiple-labels, landmarks/region, navigable/heading-order, navigable/page-has-heading-one |
| https://www.hart.gov.uk/ | https://www.hart.gov.uk/ | OK | 200 | no | 10826 | 1 | 0 | 0 | 8 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch |
| https://www.havant.gov.uk/ | https://www.havant.gov.uk/ | OK | 200 | no | 12224 | 11 | 0 | 0 | 10 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, color-contrast, label-title-only, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, labels-and-names/label-title-only, landmarks/region, text-alternatives/image-alt-words |
| https://www.n-kesteven.gov.uk/ | https://www.n-kesteven.gov.uk/ | OK | 200 | no | 10565 | 0 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch |
| https://www.northyorks.gov.uk/ | https://www.northyorks.gov.uk/ | OK | 200 | no | 11921 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label-title-only, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/main-is-top-level, landmarks/no-duplicate-main |
| https://www.rutland.gov.uk/ | https://www.rutland.gov.uk/ | OK | 200 | no | 9939 | 6 | 0 | 0 | 6 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-redundant-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, labels-and-names/duplicate-id-aria, labels-and-names/label-content-mismatch, labels-and-names/multiple-labels, text-alternatives/image-redundant-alt |
| https://www.surreyheath.gov.uk/ | https://www.surreyheath.gov.uk/ | OK | 200 | no | 12104 | 0 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch, landmarks/region |
| https://www.tipperarycoco.ie/ | https://www.tipperarycoco.ie/ | FAIL | 403 | no | 26700 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://westmorlandandfurness.gov.uk/ | https://www.westmorlandandfurness.gov.uk/ | OK | 200 | yes | 14262 | 8 | 0 | 0 | 8 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label-title-only, landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/duplicate-id-aria, labels-and-names/label-content-mismatch, labels-and-names/multiple-labels, landmarks/banner-is-top-level, landmarks/region |
| https://www.wirral.gov.uk/ | https://www.wirral.gov.uk/ | OK | 200 | no | 10013 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/frame-title, landmarks/region, text-alternatives/image-alt-words |
| https://www.wokingham.gov.uk/ | https://www.wokingham.gov.uk/ | OK | 200 | no | 16588 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/region, navigable/heading-order |
| https://southhams.gov.uk/ | https://southhams.gov.uk/ | FAIL | 405 | no | 8909 | 5 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-redundant-alt, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, text-alternatives/image-redundant-alt |
| https://westdevon.gov.uk/ | https://westdevon.gov.uk/ | FAIL | 405 | no | 8992 | 5 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-redundant-alt, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, text-alternatives/image-redundant-alt |
| https://www.northdevon.gov.uk | https://www.northdevon.gov.uk/ | OK | 200 | no | 9926 | 6 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-contentinfo, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/no-duplicate-contentinfo |
| https://www.southkesteven.gov.uk/ | https://www.southkesteven.gov.uk/ | OK | 200 | no | 10925 | 7 | 0 | 0 | 9 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, link-name, page-has-heading-one |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/region, navigable/heading-order, navigable/link-name, navigable/page-has-heading-one, navigable/skip-link |
| https://www.sstaffs.gov.uk/ | https://www.sstaffs.gov.uk/ | OK | 200 | no | 11438 | 8 | 0 | 0 | 26 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, color-contrast, meta-viewport-large, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/presentational-children-focusable, keyboard-accessible/focus-order, keyboard-accessible/nested-interactive, labels-and-names/duplicate-id-aria, labels-and-names/label-content-mismatch, labels-and-names/multiple-labels, landmarks/region |
| https://www.knowsley.gov.uk/ | https://www.knowsley.gov.uk/ | OK | 200 | no | 18798 | 16 | 0 | 0 | 15 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, landmark-no-duplicate-contentinfo, link-name, region, role-img-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch, landmarks/no-duplicate-contentinfo, navigable/empty-heading, navigable/link-name, text-alternatives/role-img-alt |
| https://new.calderdale.gov.uk/ | https://new.calderdale.gov.uk/ | OK | 200 | no | 20132 | 29 | 0 | 0 | 28 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast, frame-title, region, svg-img-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, distinguishable/color-contrast, labels-and-names/frame-title, landmarks/region, text-alternatives/svg-img-alt |
| https://www.elmbridge.gov.uk | https://www.elmbridge.gov.uk/ | OK | 200 | no | 10658 | 8 | 0 | 0 | 11 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-banner-is-top-level, landmark-no-duplicate-banner, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch, landmarks/banner-is-top-level, landmarks/no-duplicate-banner, landmarks/region |
| https://www.bedford.gov.uk/ | https://www.bedford.gov.uk/ | OK | 200 | no | 9644 | 6 | 0 | 0 | 23 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, heading-order, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, distinguishable/link-in-text-block, labels-and-names/label-content-mismatch, landmarks/region, navigable/heading-order |
| https://www.lbbd.gov.uk/ | https://www.lbbd.gov.uk/ | OK | 200 | no | 34235 | 13 | 0 | 0 | 7 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name, color-contrast, frame-title, landmark-unique, region, select-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/form-label, labels-and-names/frame-title, labels-and-names/frame-title-unique, labels-and-names/label-content-mismatch, landmarks/region |
| https://www.blackburn.gov.uk/ | https://www.blackburn.gov.uk/ | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://www.rbkc.gov.uk/ | https://www.rbkc.gov.uk/ | OK | 200 | no | 10487 | 8 | 0 | 0 | 13 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-no-duplicate-banner, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/no-duplicate-banner, text-alternatives/image-alt-words |
| https://www.milton-keynes.gov.uk/ | https://www.milton-keynes.gov.uk/ | OK | 200 | no | 11995 | 22 | 0 | 0 | 34 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-required-children, aria-required-parent, button-name, color-contrast, list, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, aria/aria-allowed-role, keyboard-accessible/focus-order, labels-and-names/aria-toggle-field-name, labels-and-names/button-name, labels-and-names/duplicate-id-aria, labels-and-names/form-label, labels-and-names/label-content-mismatch, landmarks/region |
| https://www.redcar-cleveland.gov.uk/ | https://www.redcar-cleveland.gov.uk/ | OK | 200 | no | 14175 | 4 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, heading-order, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch, landmarks/region, navigable/heading-order, text-alternatives/image-alt-words |
| https://www.sheffield.gov.uk/ | https://www.sheffield.gov.uk/ | OK | 200 | no | 10263 | 3 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch |
| https://www.west-lindsey.gov.uk/ | https://www.west-lindsey.gov.uk/ | OK | 200 | no | 11238 | 0 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/label-content-mismatch |
| https://www.bracknell-forest.gov.uk/ | https://www.bracknell-forest.gov.uk/ | OK | 200 | no | 8499 | 3 | 0 | 0 | 30 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/region |
| https://www.croydon.gov.uk/ | https://www.croydon.gov.uk/ | OK | 200 | no | 9580 | 5 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-dialog-name, landmark-no-duplicate-contentinfo, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/presentational-children-focusable, keyboard-accessible/nested-interactive, labels-and-names/label-content-mismatch, landmarks/no-duplicate-contentinfo |
| https://www.walthamforest.gov.uk/ | https://www.walthamforest.gov.uk/ | OK | 200 | no | 13227 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: labels-and-names/duplicate-id-aria, landmarks/landmark-unique, landmarks/region |
| https://www.westminster.gov.uk/ | https://www.westminster.gov.uk/ | OK | 200 | no | 10416 | 1 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/aria-required-parent, landmarks/region |
| https://www.westnorthants.gov.uk | https://www.westnorthants.gov.uk/ | OK | 200 | no | 12357 | 4 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/aria-required-parent, text-alternatives/image-alt-words |
| https://www.brighton-hove.gov.uk/ | https://www.brighton-hove.gov.uk/ | OK | 200 | no | 8878 | 1 | 0 | 0 | 7 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/focus-order, labels-and-names/duplicate-id-aria, labels-and-names/label-content-mismatch, labels-and-names/multiple-labels, landmarks/landmark-unique, landmarks/region |
| https://www.lambeth.gov.uk/ | https://www.lambeth.gov.uk/ | OK | 200 | no | 10243 | 0 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://www.clarecoco.ie

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2>Clare County Council</h2>`
- XPath: `#block-bbd-localgov-clarecountycouncil > h2`

**Failure 2:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 id="block-bbd-localgov-quicklinks-menu">Quicklinks</h2>`
- XPath: `#block-bbd-localgov-quicklinks-menu`

**Failure 3:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 id="block-bbd-localgov-help-menu">Help</h2>`
- XPath: `#block-bbd-localgov-help-menu`

**Failure 4:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2 id="block-bbd-localgov-terms-menu">Terms</h2>`
- XPath: `#block-bbd-localgov-terms-menu`

**Failure 5:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h2>Google translate</h2>`
- XPath: `#block-bbd-localgov-gtranslate-block--2 > h2`

*... and 1 more failures for this rule*

### https://beta.luton.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 4:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-localgov-title field--type-string field--label-hidden field__item">How can we help?</div>`
- XPath: `.field--name-localgov-title`

**Failure 5:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<input data-drupal-selector="edit-s" placeholder="Search" type="text" id="edit-s--2" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `.beta-search-box > .views-exposed-form.block-localgov-search.block-localgov-sitewide-search-block > form > .js-form-item.form-item.js-form-type-search-api-autocomplete > .form-text.required[data-drupal-selector="edit-s"]`

### https://www.staffordshire.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<h1>Welcome to Staffordshire</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-search-api-autocomplete form-item-s js-form-item-s">`
- XPath: `form[data-drupal-form-fields="edit-s,edit-type"] > .js-form-type-search-api-autocomplete.form-item-s.js-form-item-s`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-localgov-image field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-localgov-image`

### https://www.merton.gov.uk

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="fourpledges">`
- XPath: `.fourpledges`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--content-title region region-content-title">`
- XPath: `.lgd-region--content-title`

### https://www.dumfriesandgalloway.gov.uk/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-06
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://www.solihull.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__content-inner">`
- XPath: `.banner__content-inner`

**Failure 4:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s">`
- XPath: `.js-form-type-textfield`

**Failure 5:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

### https://www.woking.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="rc-anchor-invisible-text"><span>protected by <strong>reCAPTCHA</strong></span><div class="rc-anchor-pt"></div></div>`
- XPath: `iframe[title="reCAPTCHA"]`

### https://www.kingston.gov.uk

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer class="lgd-footer">`
- XPath: `footer`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer class="lgd-footer">`
- XPath: `footer`

### https://www.erewash.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-06
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--opt-in" role="dialog" aria-hidden="false" data-once="data-table">`
- XPath: `.eu-cookie-compliance-banner`

**Failure 2:**
- First identified: 2026-04-06
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1">`
- XPath: `#prefix-overlay-outer`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="az-services-wrapper">`
- XPath: `.az-services-wrapper`

### https://www.northtyneside.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-06
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="sliding-popup" role="alertdialog" aria-describedby="popup-text" class="sliding-popup-bottom" style="height: auto; width: 100%; bottom: 0px;">`
- XPath: `#sliding-popup`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Document should not have more than one contentinfo landmark
- HTML: `<footer class="lgd-footer">`
- XPath: `footer`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--banner region region-banner">`
- XPath: `.lgd-region--banner`

### https://www.galway.ie/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s">`
- XPath: `.js-form-item`

**Failure 4:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a aria-label="Back to top" class="back-to-top" data-min-content-viewport-ratio="1.5" href="#main-content" hidden="" data-once="back-to-top">`
- XPath: `.back-to-top`

#### Rule: [scrollable-region-focusable](https://dequeuniversity.com/rules/axe/4.11/scrollable-region-focusable?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard), [SC 2.1.3](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Scrollable region must have keyboard access
- HTML: `<div id="uc-cmp-description" class="overflow">`
- XPath: `#usercentrics-cmp-ui,#uc-cmp-description`

### https://www.gedling.gov.uk

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

### https://haringey.gov.uk/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="search-block-form block block-search block-search-form-block" data-drupal-selector="search-block-form" id="block-searchform" role="search">`
- XPath: `#block-searchform`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.newport.gov.uk/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-06
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://carlow.ie/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Heading levels should only increase by one
- HTML: `<h3 class="box-link__title">     <a class="box-link__link" href="/planning-and-building/development-management/planning-permission">               Online Planning     </a>   </h3>`
- XPath: `.box-links-listing__list-item.lgd-row__one-quarter:nth-child(1) > .box-link.paragraph--type--localgov-box-link > .box-link__title`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://schools.essex.gov.uk/

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="page-title">Essex Schools InfoLink</h1>`
- XPath: `h1`

**Failure 4:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<input data-drupal-selector="edit-s" placeholder="Search" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

### https://laois.ie/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Your links to community and updates!</p>`
- XPath: `.lgd-page-section--bg-colour-6.lgd-page-section--padding-top-largest.lgd-page-section--padding-bottom-medium > .padding-horizontal.lgd-container > .layout--onecol.layout > .layout__region--content.layout__region > .text > .field--name-localgov-text.field--type-text-long.field--label-hidden > p`

**Failure 2:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Fógra faoi shocruithe bainistíochta tráchta sealadacha ar an R445, Príomhshráid, Maighean Rátha, Co. Laoise</span>`
- XPath: `.views-row:nth-child(1) > .lgd-teaser.lgd-teaser--localgov-news-article.node--type-localgov-news-article > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > h3 > a[rel="bookmark"] > span`

**Failure 3:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Notification of temporary traffic management arrangements on the R445, Main Street, Mountrath, Co. Laois</span>`
- XPath: `.views-row:nth-child(2) > .lgd-teaser.lgd-teaser--localgov-news-article.node--type-localgov-news-article > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > h3 > a[rel="bookmark"] > span`

**Failure 4:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Notification of temporary traffic management arrangements on the N80 Emmett Street, Mountmellick, Co. Laois</span>`
- XPath: `.views-row:nth-child(3) > .lgd-teaser.lgd-teaser--localgov-news-article.node--type-localgov-news-article > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > h3 > a[rel="bookmark"] > span`

**Failure 5:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Notificiation of temporary traffic management arrangements on The Numbers Road, Graiguecullen, Co. Laois</span>`
- XPath: `.views-row:nth-child(4) > .lgd-teaser.lgd-teaser--localgov-news-article.node--type-localgov-news-article > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > h3 > a[rel="bookmark"] > span`

*... and 1 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-banner-text field--type-text-long field--label-hidden field__item"><h2>Welcome to</h2><h1>Laois County Council</h1><p>How can we help you?</p></div>`
- XPath: `.field--name-field-banner-text`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s">`
- XPath: `.js-form-item`

### https://southwark.gov.uk

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="ccc-vendor-reveal ccc-notify-button ccc-link ccc-tabbable" aria-controls="optional-vendor-1" aria-expanded="false">`
- XPath: `.ccc-vendor-reveal`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.royalgreenwich.gov.uk/

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div data-component-id="greenwich:cookie-banner" class="eu-cookie-compliance-banner cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a class="lgd-card__link" href="/news/2026/thursday-7-may-local-election-get-ready-vote"></a>`
- XPath: `.padding-horizontal.lgd-container:nth-child(5) > .rbg-promoted-cards > .lgd-row--halves.lgd-row > article:nth-child(1) > .lgd-card__content > .lgd-card__link`

**Failure 2:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a class="lgd-card__link" href="/news/2026/new-chapter-thamesmead-waterfront-site-set-deliver-15000-homes-after-new-town-selection"></a>`
- XPath: `.padding-horizontal.lgd-container:nth-child(5) > .rbg-promoted-cards > .lgd-row--halves.lgd-row > article:nth-child(2) > .lgd-card__content > .lgd-card__link`

**Failure 3:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a class="lgd-card__link" href="/events/luminarium-myriad"></a>`
- XPath: `article:nth-child(1) > .lgd-card__content > .lgd-card__link[href$="luminarium-myriad"]`

**Failure 4:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a class="lgd-card__link" href="/events/luminarium-myriad"></a>`
- XPath: `article:nth-child(2) > .lgd-card__content > .lgd-card__link[href$="luminarium-myriad"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://northumberland.gov.uk/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">30 March 2026</span>`
- XPath: `.view-ncc-homepage-news-featured-items-with-image > .view-content > .views-row:nth-child(1) > article > .card-item-link > .content > .date`

**Failure 2:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">02 April 2026</span>`
- XPath: `.view-ncc-homepage-news-featured-items-with-image > .view-content > .views-row:nth-child(2) > article > .card-item-link > .content > .date`

**Failure 3:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">31 March 2026</span>`
- XPath: `.view-ncc-homepage-news-featured-items-with-image > .view-content > .views-row:nth-child(3) > article > .card-item-link > .content > .date`

**Failure 4:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">02 April 2026</span>`
- XPath: `.view-ncc-homepage-news-items-with-image > .view-content > .views-row:nth-child(1) > article > .card-item-link > .content > .date`

**Failure 5:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="date">02 April 2026</span>`
- XPath: `.view-ncc-homepage-news-items-with-image > .view-content > .views-row:nth-child(2) > article > .card-item-link > .content > .date`

*... and 2 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="silktide-banner" class="bottomRight">`
- XPath: `#silktide-banner`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="hero__overlay">`
- XPath: `.hero__overlay`

### https://galwaycity.ie/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--banner region region-banner">`
- XPath: `.lgd-region--banner`

### https://www.ipswich.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--banner region region-banner">`
- XPath: `.lgd-region--banner`

### https://www.eastcambs.gov.uk

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-gb" dir="ltr" class="sticky-header-html js" data-once="euccRelocateInit" style="--lgd-sticky-header-position: 0px; --lgd-sticky-header-height: 103px;">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

### https://www.tamworth.gov.uk

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr" class="sticky-header-html js" style="--lgd-sticky-header-position: 0px; --lgd-sticky-header-height: 116px;">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-04-06
- Message: Page should contain a level-one heading
- HTML: `<html class="overflow-hidden h-full w-full">`
- XPath: `#connect-frame`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--banner region region-banner">`
- XPath: `.lgd-region--banner`

### https://argyll-bute.gov.uk/

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/localgov_newsroom_teaser/public/migrated_files/vote-3569999_1280_0.jpg?itok=j85IGkFq" width="360" height="200" data-once="allImages">`
- XPath: `.views-row:nth-child(1) > .views-field-field-media-image.views-field > .field-content > a[hreflang="en"] > img[width="360"][loading="lazy"][height="200"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a href="/news/2026/apr/election-candidates-confirmed-argyll-and-bute-scottish-parliamentary-constituency" hreflang="en">`
- XPath: `.views-row:nth-child(1) > .views-field-field-media-image.views-field > .field-content > a[hreflang="en"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.canterbury.gov.uk/

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-06
- Message: Form elements should have a visible label
- HTML: `<input title="Search" autocomplete="off" data-drupal-selector="edit-search-query" type="text" id="edit-search-query--2" name="search_query" value="" size="60" maxlength="128" placeholder="Search" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-search-query--2`

**Failure 2:**
- First identified: 2026-04-06
- Message: Form elements should have a visible label
- HTML: `<input title="Search" autocomplete="off" data-drupal-selector="edit-search-query" type="text" id="edit-search-query" name="search_query" value="" size="60" maxlength="128" placeholder="Search" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-search-query`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-localgov-title field--type-string field--label-above field__item"> 	<h1>Welcome to 		<span class="banner-title-name">Canterbury</span> 	</h1></div>`
- XPath: `.field--name-localgov-title`

**Failure 4:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-search-query js-form-item-search-query form-no-label">`
- XPath: `#batch-job-form > .js-form-item.form-item.js-form-type-textfield`

### https://cumberland.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<h1>Welcome to Cumberland</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s">`
- XPath: `.js-form-type-textfield`

### https://www.easthants.gov.uk/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-06
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="js-localgov-alert-banner localgov-alert-banner localgov-alert-banner--announcement localgov-alert-banner--homepage localgov-alert-banner--no-link" data-dismiss-alert-token="alert-90--811e9bbcf9da7a8aeddcac3104df7198e202e0f8" role="alert" data-once="allAlertBanners">`
- XPath: `.js-localgov-alert-banner`

**Failure 2:**
- First identified: 2026-04-06
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="js-localgov-alert-banner localgov-alert-banner localgov-alert-banner--announcement localgov-alert-banner--homepage localgov-alert-banner--no-link" data-dismiss-alert-token="alert-90--811e9bbcf9da7a8aeddcac3104df7198e202e0f8" role="alert" data-once="allAlertBanners">`
- XPath: `.js-localgov-alert-banner`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-field-landing-banner`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-ehdc-theme-homepagebannercontent" class="block block-block-content block-block-content11a73b7a-c7d1-4bc7-9f28-d2a74be1554b">`
- XPath: `#block-ehdc-theme-homepagebannercontent`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<input placeholder="Search" data-drupal-selector="edit-s" data-search-api-auto...="localgov_sitewide_se..." class="form-autocomplete fo..." data-autocomplete-pa...="/search_api_autocomp..." type="text" id="edit-s" name="s" value="" size="30" maxlength="128" required="required" aria-required="true" d ...>`
- XPath: `#edit-s`

**Failure 4:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-field-landing-banner`

**Failure 5:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-ehdc-theme-homepagebannercontent" class="block block-block-content block-block-content11a73b7a-c7d1-4bc7-9f28-d2a74be1554b">`
- XPath: `#block-ehdc-theme-homepagebannercontent`

*... and 1 more failures for this rule*

### https://www.essex.gov.uk/

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-06
- Message: Form elements should have a visible label
- HTML: `<input title="Enter the terms you ..." autocomplete="off" placeholder="Search Essex County ..." onfocus="this.placeholder = '..." onblur="this.placeholder = '..." data-drupal-selector="edit-search-keys" type="text" id="edit-search-keys" name="search_keys" value="" size="60" maxlength="128" class="fo ...>`
- XPath: `#edit-search-keys`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="page-title">Welcome to Essex</h1>`
- XPath: `h1`

**Failure 4:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<h2>Search</h2>`
- XPath: `#block-ecc-theme-gov-cludosearchblock > h2`

### https://www.lbhf.gov.uk/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div data-parent-id="our-services-id" class="lgd-header__nav lbhf-header-drawer-item lbhf-header-drawer-item__sm" id="our-services-drawer" tabindex="-1" aria-labelledby="our-services-id" role="region">`
- XPath: `#our-services-drawer`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://www.hart.gov.uk/

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr" class="sticky-header-html js" style="--lgd-sticky-header-position: 0px; --lgd-sticky-header-height: 93px;">`
- XPath: `html`

### https://www.havant.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-06
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-labelledby="#prefix-overlay-header" aria-describedby="#prefix-overlay-step1" style="height: 349px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input placeholder="Search" data-drupal-selector="edit-s" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

**Failure 2:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="field field--name-localgov-news-date field--type-datetime field--label-hidden field__item">1 April 2026</div>`
- XPath: `.views-row:nth-child(1) > a[rel="bookmark"] > .wlgd-news-card > .node--type-localgov-news-article.node--view-mode-news-list > .field--name-localgov-news-date.field--type-datetime.field--label-hidden`

**Failure 3:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="field field--name-localgov-news-date field--type-datetime field--label-hidden field__item">30 March 2026</div>`
- XPath: `.views-row:nth-child(2) > a[rel="bookmark"] > .wlgd-news-card > .node--type-localgov-news-article.node--view-mode-news-list > .field--name-localgov-news-date.field--type-datetime.field--label-hidden`

**Failure 4:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="field field--name-localgov-news-date field--type-datetime field--label-hidden field__item">25 March 2026</div>`
- XPath: `.views-row:nth-child(3) > a[rel="bookmark"] > .wlgd-news-card > .node--type-localgov-news-article.node--view-mode-news-list > .field--name-localgov-news-date.field--type-datetime.field--label-hidden`

**Failure 5:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/news">See More News</a>`
- XPath: `a[href$="news"]`

*... and 1 more failures for this rule*

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-06
- Message: Form elements should have a visible label
- HTML: `<input placeholder="Enter your email address" name="e" type="email" required="" id="prefix-emailInput" title="Enter your email address">`
- XPath: `#prefix-emailInput`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-field-landing-banner`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-havant-theme-homepagebannercontent" class="block block-block-content block-block-content11a73b7a-c7d1-4bc7-9f28-d2a74be1554b">`
- XPath: `#block-havant-theme-homepagebannercontent`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<input placeholder="Search" data-drupal-selector="edit-s" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

### https://www.northyorks.gov.uk/

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-06
- Message: Form elements should have a visible label
- HTML: `<input title="Search" data-drupal-selector="edit-keys" placeholder="Search our website" id="edit-keys--rJHPZ8t25AY" type="search" name="keys" value="" size="15" maxlength="128" class="form-search">`
- XPath: `#edit-keys--rJHPZ8t25AY`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.visually-hidden`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-nyccfrontpagequickactions" class="frontpage-quickactions block block-block-content block-block-contentc440986d-db47-4f2c-9348-b3ac6b93a7d7">`
- XPath: `#block-nyccfrontpagequickactions`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--pre-footer region region-pre-footer">`
- XPath: `.lgd-region--pre-footer`

### https://www.rutland.gov.uk/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-06
- Message: ARIA role should be appropriate for the element
- HTML: `<article class="js-localgov-alert-ba..." data-dismiss-alert-t...="alert-51--efd9d6cc6e..." role="alert" data-once="allAlertBanners">`
- XPath: `.js-localgov-alert-banner`

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-06
- Message: Alternative text of images should not be repeated as text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/footer_icons/public/2022-09/group_21.png?itok=2sAiHH2g" width="66" height="66" alt="Email" data-once="allImages">`
- XPath: `img[alt="Email"]`

**Failure 2:**
- First identified: 2026-04-06
- Message: Alternative text of images should not be repeated as text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/footer_icons/public/2022-09/group_19.png?itok=caeYrV6F" width="66" height="66" alt="Customer feedback" data-once="allImages">`
- XPath: `img[alt="Customer feedback"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<select class="gt_selector notranslate" aria-label="Select Language">`
- XPath: `select`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="title-wrapper">                        <div class="field field--name-field-title field--type-string field--label-hidden field__item"><h1>Welcome to Rutland County Council</h1> </div>                </div>`
- XPath: `.title-wrapper`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<input autocomplete="off" data-drupal-selector="edit-search-keys" type="text" id="edit-search-keys" name="search_keys" value="" size="60" maxlength="128" placeholder="Search" class="form-text">`
- XPath: `#cludo-banner-search-form > .js-form-item.form-item.js-form-type-textfield > .form-text[data-drupal-selector="edit-search-keys"][type="text"]`

### https://www.tipperarycoco.ie/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- First identified: 2026-04-06
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://westmorlandandfurness.gov.uk/

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-06
- Message: Form elements should have a visible label
- HTML: `<input title="Enter the terms you wish to search for." data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" class="form-search">`
- XPath: `.banner__content > div > .search-block-form.block-search.block-search-form-block > form[action="/search"][method="get"][data-once="form-updated"] > .js-form-type-search.form-item-keys.js-form-item-keys > .form-search[data-drupal-selector="edit-keys"][type="search"]`

**Failure 2:**
- First identified: 2026-04-06
- Message: Form elements should have a visible label
- HTML: `<input title="Enter the terms you wish to search for." data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" class="form-search">`
- XPath: `.banner__content > div > .search-block-form.block-search.block-search-form-block > form[action="/search"][method="get"][data-once="form-updated"] > .js-form-type-search.form-item-keys.js-form-item-keys > .form-search[data-drupal-selector="edit-keys"][type="search"]`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Document should not have more than one banner landmark
- HTML: `<header class="lgd-header" aria-label="Navigation" data-once="allStickyHeaders">`
- XPath: `header`

**Failure 2:**
- First identified: 2026-04-06
- Message: Document should not have more than one banner landmark
- HTML: `<header class="lgd-header" aria-label="Navigation" data-once="allStickyHeaders">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="search-block-form block block-search block-search-form-block" data-drupal-selector="search-block-form" id="block-localgov-wandf-searchform" role="search">`
- XPath: `.lgd-region__inner--search > .search-block-form.block-search.block-search-form-block`

**Failure 2:**
- First identified: 2026-04-06
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="search-block-form block block-search block-search-form-block" data-drupal-selector="search-block-form" id="block-localgov-wandf-searchform" role="search">`
- XPath: `.lgd-region__inner--search > .search-block-form.block-search.block-search-form-block`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="rc-anchor-invisible-text"><span>protected by <strong>reCAPTCHA</strong></span><div class="rc-anchor-pt"></div></div>`
- XPath: `iframe[title="reCAPTCHA"]`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="rc-anchor-invisible-text"><span>protected by <strong>reCAPTCHA</strong></span><div class="rc-anchor-pt"></div></div>`
- XPath: `iframe[title="reCAPTCHA"]`

### https://www.wirral.gov.uk/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="checkbox-toggle-off" aria-hidden="true">Off</span>`
- XPath: `.checkbox-toggle-off`

**Failure 2:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="skiptranslate goog-te-gadget" dir="ltr" style="">`
- XPath: `.goog-te-gadget`

**Failure 3:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="VIpgJd-ZVi9od-l4eHX-hSRGPd" href="https://translate.google.com" target="_blank"><img src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png" width="37px" height="14px" style="padding-right: 3px" alt="Google Translate">Translate</a>`
- XPath: `.VIpgJd-ZVi9od-l4eHX-hSRGPd`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.visually-hidden`

### https://www.wokingham.gov.uk/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Heading levels should only increase by one
- HTML: `<h4 class="heading heading--small">             Connect with us       </h4>`
- XPath: `h4`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="footer-banner__text">         <h2 class="heading heading--main">             Sign up to the Wokingham Borough Council Newsletter       </h2>                <p class="paragraph">       Get the latest news and updates within the area.   </p>           </div>`
- XPath: `.footer-banner__text`

### https://southhams.gov.uk/

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-06
- Message: Alternative text of images should not be repeated as text
- HTML: `<img src="data:image/svg+xml;b..." alt="begin" style="margin-left: 5px;">`
- XPath: `img[alt="begin"]`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div><h1 style="font-weight: normal; color: rgb(221, 107, 16);">Let's confirm you are human</h1></div>`
- XPath: `div:nth-child(3)`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="root-instructions" style="text-align: initial; align-self: center; line-height: 22px;"><p>Complete the security check before continuing. This step verifies that you are not a bot, which helps to protect your account and prevent spam.</p></div>`
- XPath: `#root-instructions`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<select class="amzn-captcha-lang-selector" aria-label="Select language" style="margin-top: 5px;">`
- XPath: `select`

### https://westdevon.gov.uk/

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-06
- Message: Alternative text of images should not be repeated as text
- HTML: `<img src="data:image/svg+xml;b..." alt="begin" style="margin-left: 5px;">`
- XPath: `img[alt="begin"]`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div><h1 style="font-weight: normal; color: rgb(221, 107, 16);">Let's confirm you are human</h1></div>`
- XPath: `div:nth-child(3)`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="root-instructions" style="text-align: initial; align-self: center; line-height: 22px;"><p>Complete the security check before continuing. This step verifies that you are not a bot, which helps to protect your account and prevent spam.</p></div>`
- XPath: `#root-instructions`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<select class="amzn-captcha-lang-selector" aria-label="Select language" style="margin-top: 5px;">`
- XPath: `select`

### https://www.northdevon.gov.uk

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookie notice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-localgov-northdevon-localgov-alert-banner-scarfolk" class="block block-localgov-alert-banner block-localgov-alert-banner-block">`
- XPath: `#block-localgov-northdevon-localgov-alert-banner-scarfolk`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-localgov-image field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-localgov-image`

**Failure 4:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<input data-drupal-selector="edit-s" placeholder="Search northdevon.gov.uk" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

**Failure 5:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="lgd-region lgd-region--pre-footer region region-pre-footer">`
- XPath: `.lgd-region--pre-footer`

### https://www.southkesteven.gov.uk/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Heading levels should only increase by one
- HTML: `<h4>Upgrade for play area</h4>`
- XPath: `a[href$="upgrade-play-area"] > .lgd-teaser__content.lgd-teaser__content--localgov-news-article > .text-wrapper > .field--name-field-display-title.field--type-string.field--label-hidden > h4`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--facebook" href="https://www.facebook.com/southkdc">         <span class="fab fa-facebook fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--facebook`

**Failure 2:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--twitter" href="https://x.com/southkesteven">         <span class="fab fa-x-twitter fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--twitter`

**Failure 3:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--instagram" href="https://www.instagram.com/discoversouthk">         <span class="fab fa-instagram fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--instagram`

**Failure 4:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--linkedin" href="https://www.linkedin.com/company/south-kesteven-council">         <span class="fab fa-linkedin fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--linkedin`

**Failure 5:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--youtube" href="https://www.youtube.com/@SouthKestevenGovUK">         <span class="fab fa-youtube fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--youtube`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" dir="ltr" class="sticky-header-html js" style="--lgd-sticky-header-position: 0px; --lgd-sticky-header-height: 86px;">`
- XPath: `html`

### https://www.sstaffs.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-06
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<input type="submit" value="Subscribe" id="prefix-submitButton">`
- XPath: `#prefix-submitButton`

#### Rule: [meta-viewport-large](https://dequeuniversity.com/rules/axe/4.11/meta-viewport-large?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-06
- Message: Users should be able to zoom and scale the text up to 500%
- HTML: `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2.0, user-scalable=yes">`
- XPath: `meta[name="viewport"]:nth-child(28)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="email-alerts--text"><h3 class="email-alerts--heading h5">Stay connected</h3> <p>Sign up to receive news and updates from South Staffordshire Council</p> </div>`
- XPath: `.email-alerts--text`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-email form-item-email js-form-item-email form-no-label">`
- XPath: `.js-form-type-email`

**Failure 4:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<h2>A-Z of services</h2>`
- XPath: `#block-atoz > h2`

**Failure 5:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="a-z-items">`
- XPath: `.a-z-items`

### https://www.knowsley.gov.uk/

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-06
- Message: Headings should not be empty
- HTML: `<h2 class="call-to-action-links-listing__title"></h2>`
- XPath: `.call-to-action-links-listing__title`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--facebook" href="https://www.facebook.com/knowsley.council">         <span class="fab fa-facebook fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--facebook`

**Failure 2:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--youtube" href="https://www.youtube.com/knowsleycouncil">         <span class="fab fa-youtube fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--youtube`

**Failure 3:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--instagram" href="https://www.instagram.com/knowsleycouncil">         <span class="fab fa-instagram fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--instagram`

**Failure 4:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--pinterest" href="https://www.pinterest.com/knowsleycouncil">         <span class="fab fa-pinterest fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--pinterest`

**Failure 5:**
- First identified: 2026-04-06
- Message: Links must have discernible text
- HTML: `<a class="social-media-link-icon--flickr" href="https://www.flickr.com/photos/knowsleycouncil">         <span class="fab fa-flickr fa-2x"></span>       </a>`
- XPath: `.social-media-link-icon--flickr`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="banner__image">`
- XPath: `.banner__image`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<span class="heading-intro">Welcome,</span>`
- XPath: `.heading-intro`

**Failure 4:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="page-title">How can we help?</h1>`
- XPath: `h1`

**Failure 5:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-search-api-autocomplete form-item-s js-form-item-s">`
- XPath: `.js-form-type-search-api-autocomplete`

#### Rule: [role-img-alt](https://dequeuniversity.com/rules/axe/4.11/role-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: [role="img"] elements must have alternative text
- HTML: `<span class="fa-ext extlink" role="img" aria-hidden="false"><span class="fa fa-external-link" data-extlink-placement="append"></span></span>`
- XPath: `.call-to-action.paragraph--type--call-to-action.paragraph--view-mode--default > .ext[data-extlink=""][aria-label="(link is external)"] > .fa-ext.extlink[role="img"]`

**Failure 2:**
- First identified: 2026-04-06
- Message: [role="img"] elements must have alternative text
- HTML: `<span class="fa-ext extlink" role="img" aria-hidden="false"><span class="fa fa-external-link" data-extlink-placement="append"></span></span>`
- XPath: `a[href$="foster4.co.uk/"] > .fa-ext.extlink[role="img"]`

**Failure 3:**
- First identified: 2026-04-06
- Message: [role="img"] elements must have alternative text
- HTML: `<span class="fa-ext extlink" role="img" aria-hidden="false"><span class="fa fa-external-link" data-extlink-placement="append"></span></span>`
- XPath: `.menu-item:nth-child(9) > .ext[data-extlink=""][aria-label="(link is external)"] > .fa-ext.extlink[role="img"]`

**Failure 4:**
- First identified: 2026-04-06
- Message: [role="img"] elements must have alternative text
- HTML: `<span class="fa-ext extlink" role="img" aria-hidden="false"><span class="fa fa-external-link" data-extlink-placement="append"></span></span>`
- XPath: `.menu-item:nth-child(12) > .ext[data-extlink=""][aria-label="(link is external)"] > .fa-ext.extlink[role="img"]`

### https://new.calderdale.gov.uk/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-06
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide cmbc-carousel_item is-active is-visible" id="carousel-mnmhy1jqlyonn-slide01" role="group" aria-roledescription="slide" aria-label="1 of 3" style="width: calc(100%);">`
- XPath: `#carousel-mnmhy1jqlyonn-slide01`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="oit-inlay-header-title-text" data-bind="           text: strings.title,           visible: strings.title,         ">Web chat</span>`
- XPath: `#chatInlay`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Frames must have an accessible name
- HTML: `<iframe src="javascript:false" title="" role="presentation" style="position: absolute; width: 0px; height: 0px; border: 0px;"></iframe>`
- XPath: `#chatInlay`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

#### Rule: [svg-img-alt](https://dequeuniversity.com/rules/axe/4.11/svg-img-alt?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg data-fa-pseudo-element="::after" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" alt="">`
- XPath: `a[href$="apply"] > .fa-chevron-right[data-fa-pseudo-element="::after"][data-icon="chevron-right"]`

**Failure 2:**
- First identified: 2026-04-06
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg data-fa-pseudo-element="::after" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" alt="">`
- XPath: `a[href$="apply-or-search-job"] > .fa-chevron-right[data-fa-pseudo-element="::after"][data-icon="chevron-right"]`

**Failure 3:**
- First identified: 2026-04-06
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg data-fa-pseudo-element="::after" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" alt="">`
- XPath: `.dio_apply-region > .paragraph--type--localgov-text.paragraph.paragraph--view-mode--default > .field--name-localgov-text.field--type-text-long.field--label-hidden > ul > li:nth-child(3) > a[data-entity-substitution="canonical"][data-entity-type="node"] > .fa-chevron-right[data-fa-pseudo-element="::after"][data-icon="chevron-right"]`

**Failure 4:**
- First identified: 2026-04-06
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg data-fa-pseudo-element="::after" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" alt="">`
- XPath: `a[href$="apply-planning-permission"] > .fa-chevron-right[data-fa-pseudo-element="::after"][data-icon="chevron-right"]`

**Failure 5:**
- First identified: 2026-04-06
- Message: <svg> elements with an img role must have alternative text
- HTML: `<svg data-fa-pseudo-element="::after" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" alt="">`
- XPath: `a[title="Admissions"] > .fa-chevron-right[data-fa-pseudo-element="::after"][data-icon="chevron-right"]`

*... and 19 more failures for this rule*

### https://www.elmbridge.gov.uk

#### Rule: [landmark-banner-is-top-level](https://dequeuniversity.com/rules/axe/4.11/landmark-banner-is-top-level?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--header region region-header" role="banner">`
- XPath: `.lgd-region--header`

**Failure 2:**
- First identified: 2026-04-06
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--content region region-content" role="banner">`
- XPath: `.lgd-region--content`

**Failure 3:**
- First identified: 2026-04-06
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--content-bottom region region-content-bottom" role="banner">`
- XPath: `.lgd-region--content-bottom`

**Failure 4:**
- First identified: 2026-04-06
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--footer-first region region-footer-first" role="banner">`
- XPath: `.lgd-region--footer-first`

**Failure 5:**
- First identified: 2026-04-06
- Message: Banner landmark should not be contained in another landmark
- HTML: `<div class="lgd-region lgd-region--footer-second region region-footer-second" role="banner">`
- XPath: `.lgd-region--footer-second`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Document should not have more than one banner landmark
- HTML: `<header>         <h1 class="visually-hidden">Welcome to Elmbridge.gov.uk</h1>       </header>`
- XPath: `body > header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header>         <h1 class="visually-hidden">Welcome to Elmbridge.gov.uk</h1>       </header>`
- XPath: `body > header`

### https://www.bedford.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-06
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1">`
- XPath: `#prefix-overlay-outer`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Heading levels should only increase by one
- HTML: `<h3 class="services-menu-title">Services</h3>`
- XPath: `.services-menu-title`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__item">`
- XPath: `.field--name-field-landing-banner`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-bbc-theme-homepagebannercontent" class="block block-block-content block-block-contentf12e6c3d-df74-44c1-b0c3-99781afd32f8">`
- XPath: `#block-bbc-theme-homepagebannercontent`

**Failure 4:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<input placeholder="Search" autocomplete="off" data-drupal-selector="edit-s" type="text" id="edit-s" name="s" value="" size="30" maxlength="128" class="form-text required" required="required" aria-required="true">`
- XPath: `#edit-s`

### https://www.lbbd.gov.uk/

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player y..." tabindex="" id="movie_player" data-version="/s/player/f4c47414/p..." aria-label="YouTube Video Player">`
- XPath: `li:nth-child(1) > iframe[title="Youtube Video Player"][width="570px"][height="600px;"]`

**Failure 2:**
- First identified: 2026-04-06
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player y..." tabindex="" id="movie_player" data-version="/s/player/f4c47414/p..." aria-label="YouTube Video Player">`
- XPath: `li:nth-child(2) > iframe[title="Youtube Video Player"][width="570px"][height="600px;"]`

**Failure 3:**
- First identified: 2026-04-06
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player y..." tabindex="" id="movie_player" data-version="/s/player/f4c47414/p..." aria-label="YouTube Video Player">`
- XPath: `li:nth-child(3) > iframe[title="Youtube Video Player"][width="570px"][height="600px;"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span>Submit</span>`
- XPath: `iframe[title="ehq-embed-survey"]`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Frames must have an accessible name
- HTML: `<iframe id="chatbox" src="https://chat.lbbd.gov.uk/" style="width: 100%; height: 0px; border: none; box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px; background-color: white; transition: height 0.3s ease-out;"></iframe>`
- XPath: `#chatbox`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main class="main" id="main-content">`
- XPath: `#main-content`

**Failure 2:**
- First identified: 2026-04-06
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div role="region" aria-live="polite" id="chakra-toast-manager..." style="position: fixed; z-i...">`
- XPath: `iframe[title="ehq-embed-survey"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-lgd-localgov-home-welcome-block-base" class="block block-localgov block-localgov-home-welcome-block">               <h1>How can we help?</h1><p>Ask any question about council services</p>   </div>`
- XPath: `#block-lgd-localgov-home-welcome-block-base`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-textfield form-item-s js-form-item-s form-no-label">`
- XPath: `.js-form-item`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-lgd-localgov-subsite-banner-base" class="block block-localgov-subsites block-localgov-subsite-banner">`
- XPath: `#block-lgd-localgov-subsite-banner-base`

**Failure 4:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="chat-button" style="background-color: rg...">`
- XPath: `#chat-button`

**Failure 5:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div data-v-8980d791="">`
- XPath: `#chatbox`

#### Rule: [select-name](https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Select element must have an accessible name
- HTML: `<select id="gtranslate_fake_select">`
- XPath: `.block-gtranslate > .gtranslate_wrapper.gt_container--wz96ug > select:nth-child(1)`

### https://www.rbkc.gov.uk/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button href="#" class="button button--inverse alert-banner__toggle alert-banner__toggle--close js-alert-banner-toggle">        Close     </button>`
- XPath: `.alert-banner__toggle--close`

**Failure 2:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button type="button" class="agree-button eu-cookie-compliance-secondary-button button--agree button button--inverse" tabindex="0">Accept cookies policy</button>`
- XPath: `.agree-button`

**Failure 3:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="button button--expander js-button-expander" aria-expanded="false">         More services       </button>`
- XPath: `.button--expander`

**Failure 4:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="paragraph">               Use the library catalogue, sign up for events and more.       </p>`
- XPath: `#paragraph-id-4804 > .cta-block__content > .paragraph`

**Failure 5:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.rbkc.gov.uk/libraries-0" class="button button--inverse button--icon" target="_self">`
- XPath: `#paragraph-id-4804 > .button--icon.button--inverse[target="_self"]`

*... and 1 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Document should not have more than one banner landmark
- HTML: `<header class="header eu-cookie-compliance-status-null" data-eu-cookie-compliance-once="true" data-once="site-header">`
- XPath: `header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="header eu-cookie-compliance-status-null" data-eu-cookie-compliance-once="true" data-once="site-header">`
- XPath: `header`

### https://www.milton-keynes.gov.uk/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-06
- Message: ARIA role should be appropriate for the element
- HTML: `<button role="listitem" class="qc-cmp2-list-item-header" aria-label="Opt-Outs" aria-live="polite">`
- XPath: `button[aria-label="Opt-Outs"]`

**Failure 2:**
- First identified: 2026-04-06
- Message: ARIA role should be appropriate for the element
- HTML: `<li id="Google Basic Consents" class="qc-cmp2-list-item qc-cmp2-expanded" role="list">`
- XPath: `#Google\ Basic\ Consents`

**Failure 3:**
- First identified: 2026-04-06
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="qc-cmp2-list-item-header" role="listitem" aria-label="Google consents" aria-live="polite">`
- XPath: `button[aria-label="Google consents"]`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Certain ARIA roles must contain particular children
- HTML: `<li id="Google Basic Consents" class="qc-cmp2-list-item qc-cmp2-expanded" role="list">`
- XPath: `#Google\ Basic\ Consents`

#### Rule: [aria-required-parent](https://dequeuniversity.com/rules/axe/4.11/aria-required-parent?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Certain ARIA roles must be contained by particular parents
- HTML: `<button role="listitem" class="qc-cmp2-list-item-header" aria-label="Opt-Outs" aria-live="polite">`
- XPath: `button[aria-label="Opt-Outs"]`

**Failure 2:**
- First identified: 2026-04-06
- Message: Certain ARIA roles must be contained by particular parents
- HTML: `<p class="qc-cmp2-list-item-title" role="listitem"><p>Google consents</p></p>`
- XPath: `.qc-cmp2-list-item-title[role="listitem"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(1) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

**Failure 2:**
- First identified: 2026-04-06
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(2) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

**Failure 3:**
- First identified: 2026-04-06
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(3) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

**Failure 4:**
- First identified: 2026-04-06
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(4) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

**Failure 5:**
- First identified: 2026-04-06
- Message: Buttons must have discernible text
- HTML: `<button tabindex="0" role="switch" aria-checked="false" class="qc-cmp2-toggle css-w01txj"><div class="toggle"></div><p class="text off" aria-label="Toggle off">OFF</p><p class="text on" aria-label="Toggle on">ON</p></button>`
- XPath: `.qc-cmp2-expandable-info:nth-child(5) > .qc-cmp2-toggle-switch > .css-w01txj.qc-cmp2-toggle[role="switch"]`

*... and 2 more failures for this rule*

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="css-jg567y">Opted In</p>`
- XPath: `div:nth-child(2) > .css-cf00qb > .css-jg567y`

**Failure 2:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="css-jg567y">Opted In</p>`
- XPath: `div:nth-child(3) > .css-cf00qb > .css-jg567y`

**Failure 3:**
- First identified: 2026-04-06
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p class="css-jg567y">Opted In</p>`
- XPath: `div:nth-child(4) > .css-cf00qb > .css-jg567y`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="qc-cmp2-consent-list css-1f88jwd">`
- XPath: `.css-1f88jwd`

**Failure 2:**
- First identified: 2026-04-06
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="qc-cmp2-consent-list css-def7e2">`
- XPath: `.css-def7e2`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="field field--name-field-landing-banner field--type-entity-reference field--label-hidden field__items">`
- XPath: `.field--name-field-landing-banner`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-homepagebannercontent" class="block block-block-content block-block-content065139dd-3323-4556-84e7-e4bce3b95d5f">`
- XPath: `#block-homepagebannercontent`

**Failure 4:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<input placeholder="Search" data-drupal-selector="edit-search" type="text" id="edit-search" name="search" value="" size="30" maxlength="128" class="form-text">`
- XPath: `#edit-search`

### https://www.redcar-cleveland.gov.uk/

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-06
- Message: Buttons must have discernible text
- HTML: `<button class="MuiButtonBase-root M..." tabindex="0" type="button" id=":r3:">`
- XPath: `div[data-arto-chat-host=""],#\:r3\:`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Heading levels should only increase by one
- HTML: `<h3 class="box-link__title">     <a class="box-link__link" href="/cost-of-living-support">               Cost of Living Support     </a>   </h3>`
- XPath: `.box-links-listing__list-item.lgd-row__one-quarter:nth-child(1) > .box-link.paragraph--type--localgov-box-link > .box-link__title`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-search-api-autocomplete form-item-s js-form-item-s">`
- XPath: `.js-form-item`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="block-subsitebanner" class="block block-localgov-subsites block-localgov-subsite-banner">`
- XPath: `#block-subsitebanner`

### https://www.sheffield.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<h1>For you and your city</h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="js-form-item form-item js-form-type-search-api-autocomplete form-item-s js-form-item-s">`
- XPath: `#views-exposed-form-search-results-embed-1-69d2e9aa88da9-block > .js-form-type-search-api-autocomplete.form-item-s.js-form-item-s`

### https://www.bracknell-forest.gov.uk/

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-06
- Message: Elements should not have tabindex greater than zero
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link" tabindex="1">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: Elements should not have tabindex greater than zero
- HTML: `<div class="site-logo" tabindex="2">         <img src="/themes/custom/bfc/logo.svg" alt="Bracknell Forest Council">       </div>`
- XPath: `.site-logo`

**Failure 3:**
- First identified: 2026-04-06
- Message: Elements should not have tabindex greater than zero
- HTML: `<button aria-controls="main-menu-wrapper" aria-expanded="false" type="button" class="menu__button" tabindex="3">`
- XPath: `.menu__button`

### https://www.croydon.gov.uk/

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-04-06
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="sliding-popup" role="alertdialog" aria-describedby="popup-text" class="sliding-popup-top clearfix" style="top: 0px;">`
- XPath: `#sliding-popup`

#### Rule: [landmark-no-duplicate-contentinfo](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-contentinfo?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Document should not have more than one contentinfo landmark
- HTML: `<div class="eu-cookie-compliance-banner eu-cookie-compliance-banner-info eu-cookie-compliance-banner--categories cookies-notice" role="contentinfo" aria-label="cookienotice" aria-hidden="false">`
- XPath: `.eu-cookie-compliance-banner`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="search-block-form google-cse block block-search block-search-form-block" data-drupal-selector="search-block-form" novalidate="novalidate" id="block-localgov-base-croydon-searchform" role="search">`
- XPath: `#block-localgov-base-croydon-searchform`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="localgov-alert-banner__content">`
- XPath: `.localgov-alert-banner__content`

### https://www.walthamforest.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="homepage-banner__hero-image">`
- XPath: `.homepage-banner__hero-image`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="homepage-banner__content homepage-banner__content--right ">`
- XPath: `.homepage-banner__content--right`

### https://www.westminster.gov.uk/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="col-md-12">`
- XPath: `.col-md-12`

### https://www.westnorthants.gov.uk

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<p class="sc-iVnIWt isTIAC">Tell us whether you accept cookies</p>`
- XPath: `.sc-iVnIWt`

**Failure 2:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="sc-hWgKua iAFiwN"><p>We use <a href="/your-council/cookies">cookies to collect information</a> about how you use this website. We use this information to make it work as well as possible and help make improvements.</p></div>`
- XPath: `.sc-hWgKua`

**Failure 3:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div class="sc-fGniAB kxXsia">`
- XPath: `.sc-fGniAB`

**Failure 4:**
- First identified: 2026-04-06
- Message: All page content should be contained by landmarks
- HTML: `<div id="promoted-services-tabpanel-0" aria-labelledby="promoted-services-tab-0" role="tabpanel" class="sc-ecEkbT bubSOo">`
- XPath: `#promoted-services-tabpanel-0`

### https://www.brighton-hove.gov.uk/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-06
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="block-bhcc-base-footer-menu" role="navigation">`
- XPath: `#block-bhcc-base-footer-menu`

