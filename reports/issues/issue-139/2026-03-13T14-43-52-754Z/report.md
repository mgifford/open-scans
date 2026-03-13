# Scan Report: Preserve Chunk 1 Scan

- Issue: https://github.com/mgifford/open-scans/issues/139
- Submitted by: NicoleMBytes
- Scanned at: 2026-03-13T14:43:00.005Z
- Engines used: AXE, QUALWEB
- Scan duration: 6.9 minutes
- Total URLs submitted: 50
- Accepted public URLs: 50
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 70791 passed, 628 failed, 354 cantTell, 2142 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 18241 passed, 1847 failed, 3374 cantTell, 98 inapplicable
- Duplicate findings caught by later scanners: 1433

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.preserve.eco/collections/reusables) | 10 | 100 | **110** | Reusables &ndash; Preserve |
| [View Page](https://www.preserve.eco/collections/tabletop) | 10 | 86 | **96** | tabletop &ndash; Preserve |
| [View Page](https://www.preserve.eco/collections/kitchen) | 10 | 85 | **95** | kitchen &ndash; Preserve |
| [View Page](https://www.preserve.eco/collections/products/products/toothbrush-in-lightweight-pouch-single) | 18 | 63 | **81** | Preserve Toothbrush in Lightweight Pouch \| Single |
| [View Page](https://www.preserve.eco/collections/toothbrush-subscriptions/products/kids-toothbrush-single) | 18 | 61 | **79** | Preserve Kids Toothbrush \| Single |
| [View Page](https://www.preserve.eco/collections/tableware-and-food-storage/products/everyday-bowl-4-count) | 20 | 58 | **78** | Preserve Everyday Bowl \| 4 Count |
| [View Page](https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count) | 20 | 56 | **76** | Preserve Everyday Bowl \| 4 Count |
| [View Page](https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack) | 18 | 57 | **75** | Preserve Toothbrush in Lightweight Pouch \| 6-pack |
| [View Page](https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single) | 18 | 54 | **72** | Preserve Kids Toothbrush \| Single |
| [View Page](https://www.preserve.eco/collections/subscriptions) | 10 | 61 | **71** | Subscriptions &ndash; Preserve |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| button-name | **50** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |
| heading-order | **50** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| html-has-lang | **50** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/html-has-lang) |
| image-alt | **50** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |
| label | **50** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/label) |
| link-name | **50** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| region | **50** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| color-contrast | **48** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| aria-input-field-name | **10** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-input-field-name) |
| aria-toggle-field-name | **10** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-toggle-field-name) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 50 page(s) - 50 occurrence(s)

**Scanner**: axe
**Rule**: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**Issue**: Buttons must have discernible text

**HTML Pattern**:
```html
<button type="submit" class="btn search-btn"></button>
```

**XPath** (use in browser DevTools):
```
.search-btn
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.search-btn')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/purposeful-plastics
- https://www.preserve.eco/
- https://www.preserve.eco/pages/work
- https://www.preserve.eco/pages/our-commitments
- *...and 45 more page(s)*

---

#### Pattern 2: Affects 50 page(s) - 50 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">
```

**XPath** (use in browser DevTools):
```
a[href$="account"] > img
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="account"] > img')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/purposeful-plastics
- https://www.preserve.eco/
- https://www.preserve.eco/pages/work
- https://www.preserve.eco/pages/our-commitments
- *...and 45 more page(s)*

---

#### Pattern 3: Affects 50 page(s) - 50 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>
```

**XPath** (use in browser DevTools):
```
a[href$="account"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="account"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/purposeful-plastics
- https://www.preserve.eco/
- https://www.preserve.eco/pages/work
- https://www.preserve.eco/pages/our-commitments
- *...and 45 more page(s)*

---

#### Pattern 4: Affects 50 page(s) - 50 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a href="/pages/contact-us123"></a>
```

**XPath** (use in browser DevTools):
```
a[href$="contact-us123"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="contact-us123"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/purposeful-plastics
- https://www.preserve.eco/
- https://www.preserve.eco/pages/work
- https://www.preserve.eco/pages/our-commitments
- *...and 45 more page(s)*

---

#### Pattern 5: Affects 50 page(s) - 50 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a href="/cart" class="CartToggle header-cart"></a>
```

**XPath** (use in browser DevTools):
```
.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/purposeful-plastics
- https://www.preserve.eco/
- https://www.preserve.eco/pages/work
- https://www.preserve.eco/pages/our-commitments
- *...and 45 more page(s)*

---

#### Pattern 6: Affects 50 page(s) - 50 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="header-account-link">
          <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>
        </div>
```

**XPath** (use in browser DevTools):
```
.header-account-link
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.header-account-link')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/purposeful-plastics
- https://www.preserve.eco/
- https://www.preserve.eco/pages/work
- https://www.preserve.eco/pages/our-commitments
- *...and 45 more page(s)*

---

#### Pattern 7: Affects 49 page(s) - 49 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h5 class="uppercase">Main menu </h5>
```

**XPath** (use in browser DevTools):
```
.large--one-third.grid__item:nth-child(1) > h5
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.large--one-third.grid__item:nth-child(1) > h5')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/purposeful-plastics
- https://www.preserve.eco/pages/work
- https://www.preserve.eco/pages/our-commitments
- https://www.preserve.eco/pages/corporate-sales
- *...and 44 more page(s)*

---

#### Pattern 8: Affects 47 page(s) - 47 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>
```

**XPath** (use in browser DevTools):
```
#qab_message
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#qab_message')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/purposeful-plastics
- https://www.preserve.eco/
- https://www.preserve.eco/pages/work
- https://www.preserve.eco/pages/our-commitments
- *...and 42 more page(s)*

---

#### Pattern 9: Affects 44 page(s) - 44 occurrence(s)

**Scanner**: axe
**Rule**: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**Issue**: Form elements must have labels

**HTML Pattern**:
```html
<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">
```

**XPath** (use in browser DevTools):
```
.search-bar
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.search-bar')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/pages/overview
- https://www.preserve.eco/pages/purposeful-plastics
- https://www.preserve.eco/
- https://www.preserve.eco/pages/work
- https://www.preserve.eco/pages/our-commitments
- *...and 39 more page(s)*

---

#### Pattern 10: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h3 class="home__subtitle">Related</h3>
```

**XPath** (use in browser DevTools):
```
h3
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('h3')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack
- https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count
- https://www.preserve.eco/collections/popi/products/popi-shave-5-replacement-blades-8ct
- https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets
- https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single
- *...and 5 more page(s)*

---

#### Pattern 11: Affects 9 page(s) - 9 occurrence(s)

**Scanner**: axe
**Rule**: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**Issue**: <html> element must have a lang attribute

**HTML Pattern**:
```html
<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">
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
- https://www.preserve.eco/pages/work
- https://www.preserve.eco/pages/manage-subscriptions
- https://www.preserve.eco/pages/terms-of-use
- https://www.preserve.eco/collections/spring-blowout
- https://www.preserve.eco/collections/kitchen
- *...and 4 more page(s)*

---

#### Pattern 12: Affects 9 page(s) - 9 occurrence(s)

**Scanner**: axe
**Rule**: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**Issue**: <html> element must have a lang attribute

**HTML Pattern**:
```html
<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">
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
- https://www.preserve.eco/collections/food-storage
- https://www.preserve.eco/pages/privacy-policy
- https://www.preserve.eco/pages/toothbrush-takeback
- https://www.preserve.eco/collections/popi
- https://www.preserve.eco/collections/popi/products/popi-shave-5-replacement-blades-8ct
- *...and 4 more page(s)*

---

#### Pattern 13: Affects 8 page(s) - 8 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">
```

**XPath** (use in browser DevTools):
```
.tooltip:nth-child(1) > img
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.tooltip:nth-child(1) > img')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack
- https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count
- https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets
- https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single
- https://www.preserve.eco/collections/no-animal-testing/products/toothbrush-in-bulk-packaging-surprise-colors-3-pack
- *...and 3 more page(s)*

---

#### Pattern 14: Affects 8 page(s) - 8 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">
```

**XPath** (use in browser DevTools):
```
.tooltip:nth-child(2) > img
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.tooltip:nth-child(2) > img')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack
- https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count
- https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets
- https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single
- https://www.preserve.eco/collections/no-animal-testing/products/toothbrush-in-bulk-packaging-surprise-colors-3-pack
- *...and 3 more page(s)*

---

#### Pattern 15: Affects 8 page(s) - 8 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">
```

**XPath** (use in browser DevTools):
```
.tooltip:nth-child(3) > img
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.tooltip:nth-child(3) > img')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack
- https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count
- https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets
- https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single
- https://www.preserve.eco/collections/no-animal-testing/products/toothbrush-in-bulk-packaging-surprise-colors-3-pack
- *...and 3 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.preserve.eco/pages/overview | https://www.preserve.eco/pages/overview | OK | 200 | no | 6991 | 10 | 0 | 0 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/purposeful-plastics | https://www.preserve.eco/pages/purposeful-plastics | OK | 200 | no | 7449 | 10 | 0 | 0 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/ | https://www.preserve.eco/ | OK | 200 | no | 6964 | 10 | 0 | 0 | 0 | 14 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/work | https://www.preserve.eco/pages/work | OK | 200 | no | 5979 | 10 | 0 | 0 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/our-commitments | https://www.preserve.eco/pages/our-commitments | OK | 200 | no | 6939 | 10 | 0 | 0 | 0 | 21 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/corporate-sales | https://www.preserve.eco/pages/corporate-sales | OK | 200 | no | 6639 | 9 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/blogs/stories | https://www.preserve.eco/blogs/stories | OK | 200 | no | 5901 | 11 | 0 | 0 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, page-has-heading-one, region |
| https://www.preserve.eco/collections/preserve-hoodie-preserve-pact | https://www.preserve.eco/collections/preserve-hoodie-preserve-pact | OK | 200 | no | 6900 | 12 | 0 | 0 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/manage-subscriptions | https://www.preserve.eco/pages/manage-subscriptions | OK | 200 | no | 5554 | 10 | 0 | 0 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/preserve | https://www.preserve.eco/collections/preserve | OK | 200 | no | 7689 | 10 | 0 | 0 | 0 | 41 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/food-storage | https://www.preserve.eco/collections/food-storage | OK | 200 | no | 8345 | 10 | 0 | 0 | 0 | 45 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/bcorp-certification | https://www.preserve.eco/pages/bcorp-certification | OK | 200 | no | 6871 | 10 | 0 | 0 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/terms-of-use | https://www.preserve.eco/pages/terms-of-use | OK | 200 | no | 6944 | 11 | 0 | 0 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/gimme5-overview | https://www.preserve.eco/pages/gimme5-overview | OK | 200 | no | 6201 | 10 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/compostables | https://www.preserve.eco/pages/compostables | OK | 200 | no | 6857 | 11 | 0 | 0 | 0 | 14 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/privacy-policy | https://www.preserve.eco/pages/privacy-policy | OK | 200 | no | 5673 | 10 | 0 | 0 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/climate | https://www.preserve.eco/pages/climate | OK | 200 | no | 6070 | 10 | 0 | 0 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/travel | https://www.preserve.eco/collections/travel | OK | 200 | no | 8029 | 10 | 0 | 0 | 0 | 41 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/spring-blowout | https://www.preserve.eco/collections/spring-blowout | OK | 200 | no | 6555 | 10 | 0 | 0 | 0 | 22 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/kitchen | https://www.preserve.eco/collections/kitchen | OK | 200 | no | 9603 | 10 | 0 | 0 | 0 | 76 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/razors | https://www.preserve.eco/collections/razors | OK | 200 | no | 7944 | 10 | 0 | 0 | 0 | 38 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/founding-story | https://www.preserve.eco/pages/founding-story | OK | 200 | no | 6901 | 10 | 0 | 0 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/popi-about | https://www.preserve.eco/pages/popi-about | OK | 200 | no | 7520 | 17 | 0 | 0 | 0 | 24 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/oral-care | https://www.preserve.eco/collections/oral-care | OK | 200 | no | 8900 | 10 | 0 | 0 | 0 | 49 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/toothbrush-takeback | https://www.preserve.eco/pages/toothbrush-takeback | OK | 200 | no | 6893 | 10 | 0 | 0 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/dopper | https://www.preserve.eco/collections/dopper | OK | 200 | no | 7185 | 12 | 0 | 0 | 0 | 20 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/subscriptions | https://www.preserve.eco/collections/subscriptions | OK | 200 | no | 9441 | 10 | 0 | 0 | 0 | 52 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/popi | https://www.preserve.eco/collections/popi | OK | 200 | no | 7210 | 11 | 0 | 0 | 0 | 21 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-in-text-block, link-name, region |
| https://www.preserve.eco/collections/tabletop | https://www.preserve.eco/collections/tabletop | OK | 200 | no | 8764 | 10 | 0 | 0 | 0 | 77 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/contact-us | https://www.preserve.eco/pages/contact-us | OK | 200 | no | 11589 | 10 | 0 | 0 | 0 | 18 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack | https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack | OK | 200 | no | 9824 | 18 | 0 | 0 | 0 | 48 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count | https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count | OK | 200 | no | 9657 | 20 | 0 | 0 | 0 | 47 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/popi/products/popi-shave-5-replacement-blades-8ct | https://www.preserve.eco/collections/popi/products/popi-shave-5-replacement-blades-8ct | OK | 200 | no | 8699 | 13 | 0 | 0 | 0 | 31 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/contact-us-wholesale-or-food-service-inquiry | https://www.preserve.eco/pages/contact-us-wholesale-or-food-service-inquiry | OK | 200 | no | 5812 | 16 | 0 | 0 | 0 | 20 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/contact-us-online-order | https://www.preserve.eco/pages/contact-us-online-order | OK | 200 | no | 5763 | 16 | 0 | 0 | 0 | 20 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/contact-us-marketing-partnerships-donations | https://www.preserve.eco/pages/contact-us-marketing-partnerships-donations | OK | 200 | no | 5697 | 16 | 0 | 0 | 0 | 20 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/contact-us-general-questions-feedback | https://www.preserve.eco/pages/contact-us-general-questions-feedback | OK | 200 | no | 5673 | 16 | 0 | 0 | 0 | 20 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/pages/contact-us-preserve-cutlery-dispenser | https://www.preserve.eco/pages/contact-us-preserve-cutlery-dispenser | OK | 200 | no | 5792 | 9 | 0 | 0 | 0 | 18 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections | https://www.preserve.eco/collections | OK | 200 | no | 41776 | 13 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, page-has-heading-one, region |
| https://www.preserve.eco/pages/contact-us-recycling | https://www.preserve.eco/pages/contact-us-recycling | OK | 200 | no | 5908 | 16 | 0 | 0 | 0 | 20 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets | https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets | OK | 200 | no | 8810 | 19 | 0 | 0 | 0 | 43 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single | https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single | OK | 200 | no | 10021 | 18 | 0 | 0 | 0 | 45 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/no-animal-testing/products/toothbrush-in-bulk-packaging-surprise-colors-3-pack | https://www.preserve.eco/collections/no-animal-testing/products/toothbrush-in-bulk-packaging-surprise-colors-3-pack | OK | 200 | no | 8589 | 19 | 0 | 0 | 0 | 41 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/tableware-and-food-storage/products/everyday-bowl-4-count | https://www.preserve.eco/collections/tableware-and-food-storage/products/everyday-bowl-4-count | OK | 200 | no | 8898 | 20 | 0 | 0 | 0 | 49 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/reusables | https://www.preserve.eco/collections/reusables | OK | 200 | no | 10264 | 10 | 0 | 0 | 0 | 91 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/utec-cutting-boards/products/utec-cutting-board-small | https://www.preserve.eco/collections/utec-cutting-boards/products/utec-cutting-board-small | OK | 200 | no | 7481 | 14 | 0 | 0 | 0 | 26 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/toothbrush-subscriptions | https://www.preserve.eco/collections/toothbrush-subscriptions | OK | 200 | no | 7144 | 12 | 0 | 0 | 0 | 41 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/products/products/toothbrush-in-lightweight-pouch-single | https://www.preserve.eco/collections/products/products/toothbrush-in-lightweight-pouch-single | OK | 200 | no | 10739 | 18 | 0 | 0 | 0 | 54 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/toothbrush-subscriptions/products/kids-toothbrush-single | https://www.preserve.eco/collections/toothbrush-subscriptions/products/kids-toothbrush-single | OK | 200 | no | 9239 | 18 | 0 | 0 | 0 | 52 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
| https://www.preserve.eco/collections/cutlery | https://www.preserve.eco/collections/cutlery | OK | 200 | no | 7335 | 12 | 0 | 0 | 0 | 19 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://www.preserve.eco/pages/overview

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/purposeful-plastics

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4 class="home__subtitle">SHOP PRESERVE</h4>`
- XPath: `.wrapper > h4`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i7-active wf-opensans-i4-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/work

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/our-commitments

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i7-active wf-opensans-i4-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/corporate-sales

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/blogs/stories

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-i4-active wf-opensans-i7-active wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-i4-active wf-opensans-i7-active wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/preserve-hoodie-preserve-pact

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="money">$80.00</span>`
- XPath: `.push--large--one-quarter.small--one-half.medium--one-half:nth-child(1) > .figcaption.under.text-center > a > .compare-at > .money`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="money">$80.00</span>`
- XPath: `.push--large--one-quarter.small--one-half.medium--one-half:nth-child(2) > .figcaption.under.text-center > a > .compare-at > .money`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar" type="search" name="q">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/manage-subscriptions

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/preserve

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-i7-active wf-opensans-i4-active wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/food-storage

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/bcorp-certification

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/terms-of-use

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Terms of Use</h3>`
- XPath: `h3:nth-child(1)`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/gimme5-overview

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-i4-active wf-opensans-n7-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/compostables

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a id="s-fccac842-8595-4255-b8bd-bfd4ca9356a9" class="shg-btn shg-cse shg-btn-text " href="https://www.preserve.eco/collections/preserve">       SHOP COMPOSTABLES   </a>`
- XPath: `#s-fccac842-8595-4255-b8bd-bfd4ca9356a9`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/privacy-policy

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/climate

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-i4-active wf-opensans-i7-active wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/travel

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i7-active wf-opensans-i4-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/spring-blowout

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/kitchen

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/razors

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-i4-active wf-opensans-n7-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/founding-story

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/popi-about

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/74edf1a3/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `iframe[loading="eager"]`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/74edf1a3/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#s-d7ab9102-9018-450c-826c-e5d616c8d2f1 > .shogun-video.shogun-video-16x9 > .video-wrapper > .shogun-video-embed[allowfullscreen=""][title="Embedded Youtube Video"]`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a id="s-2b831de7-c735-4151-8ae3-96b081ff843f" class="shg-btn shg-cse shg-btn-text " href="https://www.preserve.eco/collections/popi/products/popi-toothbrush-single">       Order Now   </a>`
- XPath: `#s-2b831de7-c735-4151-8ae3-96b081ff843f`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a id="s-31cb5dad-06fd-453e-b1e3-e8f04e60303c" class="shg-btn shg-cse shg-btn-text " href="https://www.preserve.eco/collections/popi/products/popi-shave-5-razor-system-handle-1-blade">       Order Now   </a>`
- XPath: `#s-31cb5dad-06fd-453e-b1e3-e8f04e60303c`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-i4-active wf-opensans-n7-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar" type="search" name="q">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="shogun-image-link" href="https://www.preserve.eco/collections/popi">`
- XPath: `#s-8848b3ff-8581-498c-8937-4c56ebfd2dca > .shogun-image-link`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a class="shogun-image-link" href="https://www.preserve.eco/collections/popi">`
- XPath: `#s-0881fab3-aab8-49b5-b49f-e9f7e8f62648 > .shogun-image-link`

*... and 2 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/oral-care

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/toothbrush-takeback

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/dopper

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-oswald-n4-active wf-opensans-n7-active wf-opensans-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img class="parallax-slider" src="//www.preserve.eco/cdn/shop/collections/collect-header3-50_bca3e9cc-2ac8-48bb-89e6-bedc57cd047f_1800x.jpg?v=1517178503" style="transform: translate3d(0px, -99.8125px, 0px); position: absolute; height: 374px; width: 1280px; max-width: none;">`
- XPath: `.parallax-slider`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="parallax-mirror" style="visibility: visible; z-index: -100; position: fixed; top: 0px; left: 0px; overflow: hidden; transform: translate3d(0px, 98.5156px, 0px); height: 254px; width: 1280px;">`
- XPath: `.parallax-mirror`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/subscriptions

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/popi

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="https://www.preserve.eco/pages/popi-about">Preserve Ocean Plastic Initiative (POPi)</a>`
- XPath: `p > a`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/tabletop

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/contact-us

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 4422px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick..." data-thumb="//www.preserve.eco/c..." data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
- XPath: `.slick-current`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="home__subtitle">Related</h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

*... and 1 more failures for this rule*

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar" type="search" name="q">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 5159px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick..." data-thumb="//www.preserve.eco/c..." data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
- XPath: `.slick-current`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="home__subtitle">Related</h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

*... and 3 more failures for this rule*

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/popi/products/popi-shave-5-replacement-blades-8ct

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 4422px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick..." data-thumb="//www.preserve.eco/c..." data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
- XPath: `.slick-current`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="home__subtitle">Related</h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/contact-us-wholesale-or-food-service-inquiry

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="esc-google-privacy">       This form is protected by reCAPTCHA and the Google       <a href="https://policies.google.com/privacy">Privacy Policy</a> and       <a href="https://policies.google.com/terms">Terms of Service</a> apply     </div>`
- XPath: `.esc-google-privacy`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://policies.google.com/privacy">Privacy Policy</a>`
- XPath: `.esc-google-privacy > a:nth-child(1)`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://policies.google.com/terms">Terms of Service</a>`
- XPath: `.esc-google-privacy > a:nth-child(2)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

**Failure 2:**
- Message: Form elements must have labels
- HTML: `<input name="esc_cf_t" type="text" class="esc--1337">`
- XPath: `input[name="esc_cf_t"]`

**Failure 3:**
- Message: Form elements must have labels
- HTML: `<input type="email" class="esc--1337">`
- XPath: `.esc--1337[type="email"]`

**Failure 4:**
- Message: Form elements must have labels
- HTML: `<input type="text" class="esc--1337">`
- XPath: `.esc--1337[type="text"]:nth-child(3)`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/contact-us-online-order

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="esc-google-privacy">       This form is protected by reCAPTCHA and the Google       <a href="https://policies.google.com/privacy">Privacy Policy</a> and       <a href="https://policies.google.com/terms">Terms of Service</a> apply     </div>`
- XPath: `.esc-google-privacy`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://policies.google.com/privacy">Privacy Policy</a>`
- XPath: `.esc-google-privacy > a:nth-child(1)`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://policies.google.com/terms">Terms of Service</a>`
- XPath: `.esc-google-privacy > a:nth-child(2)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

**Failure 2:**
- Message: Form elements must have labels
- HTML: `<input name="esc_cf_t" type="text" class="esc--1337">`
- XPath: `input[name="esc_cf_t"]`

**Failure 3:**
- Message: Form elements must have labels
- HTML: `<input type="email" class="esc--1337">`
- XPath: `.esc--1337[type="email"]`

**Failure 4:**
- Message: Form elements must have labels
- HTML: `<input type="text" class="esc--1337">`
- XPath: `.esc--1337[type="text"]:nth-child(3)`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/contact-us-marketing-partnerships-donations

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="esc-google-privacy">       This form is protected by reCAPTCHA and the Google       <a href="https://policies.google.com/privacy">Privacy Policy</a> and       <a href="https://policies.google.com/terms">Terms of Service</a> apply     </div>`
- XPath: `.esc-google-privacy`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://policies.google.com/privacy">Privacy Policy</a>`
- XPath: `.esc-google-privacy > a:nth-child(1)`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://policies.google.com/terms">Terms of Service</a>`
- XPath: `.esc-google-privacy > a:nth-child(2)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-oswald-n4-active wf-opensans-n7-active wf-opensans-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

**Failure 2:**
- Message: Form elements must have labels
- HTML: `<input name="esc_cf_t" type="text" class="esc--1337">`
- XPath: `input[name="esc_cf_t"]`

**Failure 3:**
- Message: Form elements must have labels
- HTML: `<input type="email" class="esc--1337">`
- XPath: `.esc--1337[type="email"]`

**Failure 4:**
- Message: Form elements must have labels
- HTML: `<input type="text" class="esc--1337">`
- XPath: `.esc--1337[type="text"]:nth-child(3)`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/contact-us-general-questions-feedback

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="esc-google-privacy">       This form is protected by reCAPTCHA and the Google       <a href="https://policies.google.com/privacy">Privacy Policy</a> and       <a href="https://policies.google.com/terms">Terms of Service</a> apply     </div>`
- XPath: `.esc-google-privacy`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://policies.google.com/privacy">Privacy Policy</a>`
- XPath: `.esc-google-privacy > a:nth-child(1)`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://policies.google.com/terms">Terms of Service</a>`
- XPath: `.esc-google-privacy > a:nth-child(2)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-oswald-n4-active wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

**Failure 2:**
- Message: Form elements must have labels
- HTML: `<input name="esc_cf_t" type="text" class="esc--1337">`
- XPath: `input[name="esc_cf_t"]`

**Failure 3:**
- Message: Form elements must have labels
- HTML: `<input type="email" class="esc--1337">`
- XPath: `.esc--1337[type="email"]`

**Failure 4:**
- Message: Form elements must have labels
- HTML: `<input type="text" class="esc--1337">`
- XPath: `.esc--1337[type="text"]:nth-child(3)`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/contact-us-preserve-cutlery-dispenser

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar" type="search" name="q">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="money">$80.00</span>`
- XPath: `.on-sale.small--one-half.medium--one-half:nth-child(1) > .figcaption.under.text-center > a > .compare-at > .money`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="money">$80.00</span>`
- XPath: `.on-sale.small--one-half.medium--one-half:nth-child(2) > .figcaption.under.text-center > a > .compare-at > .money`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-i4-active wf-opensans-n7-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar" type="search" name="q">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-i4-active wf-opensans-n7-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/pages/contact-us-recycling

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="esc-google-privacy">       This form is protected by reCAPTCHA and the Google       <a href="https://policies.google.com/privacy">Privacy Policy</a> and       <a href="https://policies.google.com/terms">Terms of Service</a> apply     </div>`
- XPath: `.esc-google-privacy`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://policies.google.com/privacy">Privacy Policy</a>`
- XPath: `.esc-google-privacy > a:nth-child(1)`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://policies.google.com/terms">Terms of Service</a>`
- XPath: `.esc-google-privacy > a:nth-child(2)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i7-active wf-opensans-i4-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

**Failure 2:**
- Message: Form elements must have labels
- HTML: `<input name="esc_cf_t" type="text" class="esc--1337">`
- XPath: `input[name="esc_cf_t"]`

**Failure 3:**
- Message: Form elements must have labels
- HTML: `<input type="email" class="esc--1337">`
- XPath: `.esc--1337[type="email"]`

**Failure 4:**
- Message: Form elements must have labels
- HTML: `<input type="text" class="esc--1337">`
- XPath: `.esc--1337[type="text"]:nth-child(3)`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 4422px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick..." data-thumb="//www.preserve.eco/c..." data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
- XPath: `.slick-current`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="home__subtitle">Related</h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

*... and 2 more failures for this rule*

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 6633px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick..." data-thumb="//www.preserve.eco/c..." data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
- XPath: `.slick-current`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="home__subtitle">Related</h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

*... and 1 more failures for this rule*

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/no-animal-testing/products/toothbrush-in-bulk-packaging-surprise-colors-3-pack

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 737px; transform: translate3d(0px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/surprise-bug2_small_cropped.jpg?v=1620678833" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
- XPath: `.product__photo`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="home__subtitle">Related</h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i7-active wf-opensans-i4-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

*... and 2 more failures for this rule*

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/tableware-and-food-storage/products/everyday-bowl-4-count

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 5159px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick..." data-thumb="//www.preserve.eco/c..." data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
- XPath: `.slick-current`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="home__subtitle">Related</h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

*... and 3 more failures for this rule*

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/reusables

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/utec-cutting-boards/products/utec-cutting-board-small

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 3685px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/UTEC_Cuttingboard_2_small_cropped.png?v=1544469819" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
- XPath: `.slick-current`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="home__subtitle">Related</h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="#looxReviews"> <div class="loox-rating" data-id="12512378763" data-rating="" data-raters=""></div> </a>`
- XPath: `a[href$="#looxReviews"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/toothbrush-subscriptions

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-i4-active wf-opensans-n7-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img class="parallax-slider" src="//www.preserve.eco/cdn/shop/collections/header_5522078f-fde3-4d41-b67d-7a7d4e6e9601_1800x.jpg?v=1543922424" style="transform: translate3d(-296px, -78.8125px, 0px); position: absolute; height: 332px; width: 1873px; max-width: none;">`
- XPath: `.parallax-slider`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="parallax-mirror" style="visibility: visible; z-index: -100; position: fixed; top: 0px; left: 0px; overflow: hidden; transform: translate3d(0px, 98.5156px, 0px); height: 254px; width: 1280px;">`
- XPath: `.parallax-mirror`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/products/products/toothbrush-in-lightweight-pouch-single

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 19899px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/files/LWP_small_cropped.jpg?v=1697593659" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
- XPath: `.slick-current`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="home__subtitle">Related</h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

*... and 1 more failures for this rule*

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar" type="search" name="q">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/toothbrush-subscriptions/products/kids-toothbrush-single

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 6633px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick..." data-thumb="//www.preserve.eco/c..." data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
- XPath: `.slick-current`

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="home__subtitle">Related</h3>`
- XPath: `h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

*... and 1 more failures for this rule*

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/cutlery

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button type="submit" class="btn search-btn"></button>`
- XPath: `.search-btn`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="qab_message" style="color: inherit; font-size: 18px;">FREE SHIPPING ON ALL U.S. ORDERS OVER $50! </span>`
- XPath: `#qab_message`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h5 class="uppercase">Main menu </h5>`
- XPath: `.large--one-third.grid__item:nth-child(1) > h5`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img class="parallax-slider" src="//www.preserve.eco/cdn/shop/collections/collect-header3_d7ac84db-cb3e-4fbc-bf53-8affa0db57fd_1800x.jpg?v=1517153822" style="transform: translate3d(0px, -99.8125px, 0px); position: absolute; height: 374px; width: 1280px; max-width: none;">`
- XPath: `.parallax-slider`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645">`
- XPath: `a[href$="account"] > img`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Form elements must have labels
- HTML: `<input class="search-bar snize-input-style" type="search" name="q" role="combobox" aria-haspopup="listbox" aria-autocomplete="list" aria-expanded="false" autocorrect="off" autocapitalize="off" autocomplete="off">`
- XPath: `.search-bar`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>`
- XPath: `a[href$="account"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/pages/contact-us123"></a>`
- XPath: `a[href$="contact-us123"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/cart" class="CartToggle header-cart"></a>`
- XPath: `.nav--desktop > .mobile-wrapper > .header-cart__wrapper > .header-cart.CartToggle[href$="cart"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="parallax-mirror" style="visibility: visible; z-index: -100; position: fixed; top: 0px; left: 0px; overflow: hidden; transform: translate3d(0px, 98.5156px, 0px); height: 254px; width: 1280px;">`
- XPath: `.parallax-mirror`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

