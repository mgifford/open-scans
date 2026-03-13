# Scan Report: Preserve Chunk 2

- Issue: https://github.com/mgifford/open-scans/issues/140
- Submitted by: NicoleMBytes
- Scanned at: 2026-03-13T14:57:09.073Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 10.2 minutes
- Total URLs submitted: 77
- Accepted public URLs: 77
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 196916 passed, 1280 failed, 1642 cantTell, 2729 inapplicable
- Equal Access outcomes: 332573 passed, 8464 failed (8315 unique, 149 duplicate), 3824 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 149

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.preserve.eco/collections/toothbrush-subscriptions/products/toothbrush-in-lightweight-pouch-single) | 18 | 178 | **196** | Preserve Toothbrush in Lightweight Pouch \| Single |
| [View Page](https://www.preserve.eco/collections/summer-collection/products/toothbrush-in-lightweight-pouch-6-pack) | 18 | 158 | **176** | Preserve Toothbrush in Lightweight Pouch \| 6-pack |
| [View Page](https://www.preserve.eco/collections/toothbrush/products/toothbrush-in-lightweight-pouch-single) | 18 | 157 | **175** | Preserve Toothbrush in Lightweight Pouch \| Single |
| [View Page](https://www.preserve.eco/collections/oral-care/products/toothbrush-in-lightweight-pouch-single) | 18 | 154 | **172** | Preserve Toothbrush in Lightweight Pouch \| Single |
| [View Page](https://www.preserve.eco/collections/preserve/products/9-compostable-plate) | 18 | 143 | **161** | Medium Compostable Plate \| 24 Count &ndash; Preserve |
| [View Page](https://www.preserve.eco/collections/kitchen/products/colander-small) | 20 | 140 | **160** | Preserve Colander \| Small |
| [View Page](https://www.preserve.eco/collections/oral-care/products/kids-toothbrush-single) | 18 | 142 | **160** | Preserve Kids Toothbrush \| Single |
| [View Page](https://www.preserve.eco/collections/razor-systems/products/shave-3-razor-system-handle-and-2-blades) | 18 | 140 | **158** | Shave 3 Razor System\| Handle &amp; 2 Blades &ndash; Preserve |
| [View Page](https://www.preserve.eco/collections/oral-care/products/toothbrush-in-lightweight-pouch-6-pack) | 18 | 140 | **158** | Preserve Toothbrush in Lightweight Pouch \| 6-pack |
| [View Page](https://www.preserve.eco/collections/earth-day-collection/products/popi-shave-5-razor-system-handle-1-blade) | 19 | 137 | **156** | Preserve Shave 5 Razor System \| Handle &amp; 1 Blade |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| button-name | **76** of 77 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |
| heading-order | **76** of 77 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| html-has-lang | **76** of 77 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/html-has-lang) |
| image-alt | **76** of 77 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |
| label | **76** of 77 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/label) |
| link-name | **76** of 77 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| region | **76** of 77 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| color-contrast | **72** of 77 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| aria-input-field-name | **63** of 77 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-input-field-name) |
| aria-toggle-field-name | **63** of 77 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-toggle-field-name) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 76 page(s) - 76 occurrence(s)

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
- https://www.preserve.eco/collections/shave-5-systems
- https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large
- https://www.preserve.eco/collections/razor-systems
- https://www.preserve.eco/collections/collections
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- *...and 71 more page(s)*

---

#### Pattern 2: Affects 76 page(s) - 76 occurrence(s)

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
- https://www.preserve.eco/collections/shave-5-systems
- https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large
- https://www.preserve.eco/collections/razor-systems
- https://www.preserve.eco/collections/collections
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- *...and 71 more page(s)*

---

#### Pattern 3: Affects 76 page(s) - 76 occurrence(s)

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
- https://www.preserve.eco/collections/shave-5-systems
- https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large
- https://www.preserve.eco/collections/razor-systems
- https://www.preserve.eco/collections/collections
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- *...and 71 more page(s)*

---

#### Pattern 4: Affects 76 page(s) - 76 occurrence(s)

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
- https://www.preserve.eco/collections/shave-5-systems
- https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large
- https://www.preserve.eco/collections/razor-systems
- https://www.preserve.eco/collections/collections
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- *...and 71 more page(s)*

---

#### Pattern 5: Affects 76 page(s) - 76 occurrence(s)

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
- https://www.preserve.eco/collections/shave-5-systems
- https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large
- https://www.preserve.eco/collections/razor-systems
- https://www.preserve.eco/collections/collections
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- *...and 71 more page(s)*

---

#### Pattern 6: Affects 76 page(s) - 76 occurrence(s)

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
- https://www.preserve.eco/collections/shave-5-systems
- https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large
- https://www.preserve.eco/collections/razor-systems
- https://www.preserve.eco/collections/collections
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- *...and 71 more page(s)*

---

#### Pattern 7: Affects 76 page(s) - 76 occurrence(s)

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
- https://www.preserve.eco/collections/shave-5-systems
- https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large
- https://www.preserve.eco/collections/razor-systems
- https://www.preserve.eco/collections/collections
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- *...and 71 more page(s)*

---

#### Pattern 8: Affects 71 page(s) - 71 occurrence(s)

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
- https://www.preserve.eco/collections/shave-5-systems
- https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large
- https://www.preserve.eco/collections/razor-systems
- https://www.preserve.eco/collections/collections
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- *...and 66 more page(s)*

---

#### Pattern 9: Affects 63 page(s) - 63 occurrence(s)

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
- https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- https://www.preserve.eco/collections/gifting/products/food-storage-lunch-pack-4-containers
- https://www.preserve.eco/collections/cups/products/on-the-go-cups-10-count
- https://www.preserve.eco/collections/toothbrush/products/toothbrush-in-lightweight-pouch-single
- *...and 58 more page(s)*

---

#### Pattern 10: Affects 48 page(s) - 48 occurrence(s)

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
- https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- https://www.preserve.eco/collections/gifting/products/food-storage-lunch-pack-4-containers
- https://www.preserve.eco/collections/cups/products/on-the-go-cups-10-count
- https://www.preserve.eco/collections/toothbrush/products/toothbrush-in-lightweight-pouch-single
- *...and 43 more page(s)*

---

#### Pattern 11: Affects 48 page(s) - 48 occurrence(s)

**Scanner**: axe
**Rule**: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**Issue**: Form elements must have labels

**HTML Pattern**:
```html
<input class="search-bar" type="search" name="q">
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
- https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- https://www.preserve.eco/collections/gifting/products/food-storage-lunch-pack-4-containers
- https://www.preserve.eco/collections/cups/products/on-the-go-cups-10-count
- https://www.preserve.eco/collections/toothbrush/products/toothbrush-in-lightweight-pouch-single
- *...and 43 more page(s)*

---

#### Pattern 12: Affects 46 page(s) - 46 occurrence(s)

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
- https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- https://www.preserve.eco/collections/gifting/products/food-storage-lunch-pack-4-containers
- https://www.preserve.eco/collections/cups/products/on-the-go-cups-10-count
- https://www.preserve.eco/collections/toothbrush/products/toothbrush-in-lightweight-pouch-single
- *...and 41 more page(s)*

---

#### Pattern 13: Affects 43 page(s) - 43 occurrence(s)

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
- https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- https://www.preserve.eco/collections/gifting/products/food-storage-lunch-pack-4-containers
- https://www.preserve.eco/collections/cups/products/on-the-go-cups-10-count
- https://www.preserve.eco/collections/toothbrush/products/toothbrush-in-lightweight-pouch-single
- *...and 38 more page(s)*

---

#### Pattern 14: Affects 42 page(s) - 42 occurrence(s)

**Scanner**: axe
**Rule**: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**Issue**: ARIA toggle fields must have an accessible name

**HTML Pattern**:
```html
<div class="product__photo slick..." data-thumb="//www.preserve.eco/c..." data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">
```

**XPath** (use in browser DevTools):
```
.slick-current
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.slick-current')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- https://www.preserve.eco/collections/gifting/products/food-storage-lunch-pack-4-containers
- https://www.preserve.eco/collections/toothpick-subscriptions/products/flavored-toothpicks-2-pack
- https://www.preserve.eco/collections/reusables/products/sandwich-food-storage-container-set-of-2
- https://www.preserve.eco/collections/plates/products/small-compostable-plates-8-count
- *...and 37 more page(s)*

---

#### Pattern 15: Affects 41 page(s) - 41 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">
```

**XPath** (use in browser DevTools):
```
.tooltip:nth-child(5) > img
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.tooltip:nth-child(5) > img')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large
- https://www.preserve.eco/collections/featured/products/popi-toothbrush-single
- https://www.preserve.eco/collections/gifting/products/food-storage-lunch-pack-4-containers
- https://www.preserve.eco/collections/cups/products/on-the-go-cups-10-count
- https://www.preserve.eco/collections/toothbrush/products/toothbrush-in-lightweight-pouch-single
- *...and 36 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.preserve.eco/collections/shave-5-systems | https://www.preserve.eco/collections/shave-5-systems | OK | 200 | no | 7603 | 12 | 0 | 72 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large | https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large | OK | 200 | no | 8898 | 20 | 0 | 132 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/razor-systems | https://www.preserve.eco/collections/razor-systems | OK | 200 | no | 5503 | 10 | 0 | 93 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://www.preserve.eco/collections/collections | https://www.preserve.eco/collections/collections | OK | 200 | no | 5187 | 10 | 0 | 58 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://www.preserve.eco/collections/featured/products/popi-toothbrush-single | https://www.preserve.eco/collections/featured/products/popi-toothbrush-single | OK | 200 | no | 8506 | 18 | 0 | 117 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/travel-razor | https://www.preserve.eco/collections/travel-razor | OK | 200 | no | 5638 | 12 | 0 | 94 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://www.preserve.eco/collections/gifting/products/food-storage-lunch-pack-4-containers | https://www.preserve.eco/collections/gifting/products/food-storage-lunch-pack-4-containers | OK | 200 | no | 7529 | 20 | 0 | 116 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/cups/products/on-the-go-cups-10-count | https://www.preserve.eco/collections/cups/products/on-the-go-cups-10-count | OK | 200 | no | 7815 | 20 | 0 | 104 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/toothbrush/products/toothbrush-in-lightweight-pouch-single | https://www.preserve.eco/collections/toothbrush/products/toothbrush-in-lightweight-pouch-single | OK | 200 | no | 8840 | 18 | 0 | 157 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/summer-collection | https://www.preserve.eco/collections/summer-collection | OK | 200 | no | 10399 | 13 | 0 | 108 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://www.preserve.eco/collections/lightweight-pouch-featuring-artists-for-humanity-artwork | https://www.preserve.eco/collections/lightweight-pouch-featuring-artists-for-humanity-artwork | OK | 200 | no | 5412 | 12 | 0 | 56 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://www.preserve.eco/collections/toothpick-subscriptions/products/flavored-toothpicks-2-pack | https://www.preserve.eco/collections/toothpick-subscriptions/products/flavored-toothpicks-2-pack | OK | 200 | no | 7559 | 15 | 0 | 112 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/reusables/products/round-food-storage-container-mini | https://www.preserve.eco/collections/reusables/products/round-food-storage-container-mini | OK | 200 | no | 7833 | 19 | 0 | 125 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/straws | https://www.preserve.eco/collections/straws | OK | 200 | no | 4419 | 11 | 0 | 46 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://www.preserve.eco/collections/reusables/products/sandwich-food-storage-container-set-of-2 | https://www.preserve.eco/collections/reusables/products/sandwich-food-storage-container-set-of-2 | OK | 200 | no | 7734 | 19 | 0 | 123 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/plates/products/small-compostable-plates-8-count | https://www.preserve.eco/collections/plates/products/small-compostable-plates-8-count | OK | 200 | no | 6390 | 17 | 0 | 116 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/food-storage-containers/products/round-food-storage-container-large | https://www.preserve.eco/collections/food-storage-containers/products/round-food-storage-container-large | OK | 200 | no | 7535 | 20 | 0 | 106 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/summer-collection/products/toothbrush-in-lightweight-pouch-6-pack | https://www.preserve.eco/collections/summer-collection/products/toothbrush-in-lightweight-pouch-6-pack | OK | 200 | no | 8913 | 18 | 0 | 158 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/utec-cutting-boards/products/utec-gift-set-large-and-small-cutting-boards | https://www.preserve.eco/collections/utec-cutting-boards/products/utec-gift-set-large-and-small-cutting-boards | OK | 200 | no | 5431 | 13 | 0 | 73 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/tableware-and-food-storage/products/everyday-tableware-set-pack-for-4 | https://www.preserve.eco/collections/tableware-and-food-storage/products/everyday-tableware-set-pack-for-4 | OK | 200 | no | 8036 | 21 | 0 | 134 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/no-animal-testing | https://www.preserve.eco/collections/no-animal-testing | OK | 200 | no | 6295 | 10 | 0 | 94 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://www.preserve.eco/collections/toothpicks/products/flavored-toothpicks-24-pack | https://www.preserve.eco/collections/toothpicks/products/flavored-toothpicks-24-pack | OK | 200 | no | 7183 | 15 | 0 | 87 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/earth-day-collection/products/popi-shave-5-razor-system-handle-1-blade | https://www.preserve.eco/collections/earth-day-collection/products/popi-shave-5-razor-system-handle-1-blade | OK | 200 | no | 8337 | 19 | 0 | 137 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/replacement-blade-subscriptions/products/shave-3-replacement-blades-24-blades | https://www.preserve.eco/collections/replacement-blade-subscriptions/products/shave-3-replacement-blades-24-blades | OK | 200 | no | 6648 | 15 | 0 | 71 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-mini | https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-mini | OK | 200 | no | 8120 | 19 | 0 | 129 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/toothbrush/products/popi-toothbrush-single | https://www.preserve.eco/collections/toothbrush/products/popi-toothbrush-single | OK | 200 | no | 8401 | 18 | 0 | 129 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/razor-systems/products/shave-3-razor-system-handle-and-2-blades | https://www.preserve.eco/collections/razor-systems/products/shave-3-razor-system-handle-and-2-blades | OK | 200 | no | 7939 | 18 | 0 | 140 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/razor-systems/products/popi-shave-5-replacement-blades-8ct | https://www.preserve.eco/collections/razor-systems/products/popi-shave-5-replacement-blades-8ct | OK | 200 | no | 7586 | 13 | 0 | 128 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/replacement-blade-subscriptions/products/popi-shave-5-replacement-blades-8ct | https://www.preserve.eco/collections/replacement-blade-subscriptions/products/popi-shave-5-replacement-blades-8ct | OK | 200 | no | 6115 | 13 | 0 | 72 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/tools/products/colander-small | https://www.preserve.eco/collections/tools/products/colander-small | OK | 200 | no | 7967 | 20 | 0 | 118 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/utec-cutting-boards-1/products/utec-cutting-board-large | https://www.preserve.eco/collections/utec-cutting-boards-1/products/utec-cutting-board-large | OK | 200 | no | 5522 | 13 | 0 | 73 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-small | https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-small | OK | 200 | no | 7936 | 20 | 0 | 127 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/cups/products/compostable-cups-8-count | https://www.preserve.eco/collections/cups/products/compostable-cups-8-count | OK | 200 | no | 6171 | 16 | 0 | 106 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/blogs/stories/supporting_a_better_world | https://www.preserve.eco/blogs/stories/supporting_a_better_world | OK | 200 | no | 4693 | 13 | 0 | 35 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.preserve.eco/blogs/stories/popi-partner-spotlight-seatrees | https://www.preserve.eco/blogs/stories/popi-partner-spotlight-seatrees | OK | 200 | no | 4820 | 13 | 0 | 37 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.preserve.eco/blogs/stories/preventing-plastic-pollution-in-our-oceans-6-ways-you-can-have-an-impact | https://www.preserve.eco/blogs/stories/preventing-plastic-pollution-in-our-oceans-6-ways-you-can-have-an-impact | OK | 200 | no | 5258 | 13 | 0 | 39 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.preserve.eco/blogs/stories/5-startling-facts-about-ocean-plastic-pollution-and-what-we-can-do-to-stop-it | https://www.preserve.eco/blogs/stories/5-startling-facts-about-ocean-plastic-pollution-and-what-we-can-do-to-stop-it | OK | 200 | no | 4767 | 14 | 0 | 39 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.preserve.eco/collections/preserve-hoodie-preserve-pact/products/preserve-hoodie | https://www.preserve.eco/collections/preserve-hoodie-preserve-pact/products/preserve-hoodie | OK | 200 | no | 5329 | 16 | 0 | 74 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/preserve/products/compostable-straws-50-count | https://www.preserve.eco/collections/preserve/products/compostable-straws-50-count | OK | 200 | no | 7082 | 17 | 0 | 130 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/preserve/products/small-compostable-plates-8-count | https://www.preserve.eco/collections/preserve/products/small-compostable-plates-8-count | OK | 200 | no | 6985 | 17 | 0 | 135 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/preserve/products/9-compostable-plate | https://www.preserve.eco/collections/preserve/products/9-compostable-plate | OK | 200 | no | 7236 | 18 | 0 | 143 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/preserve/products/compostable-bowls-8-count | https://www.preserve.eco/collections/preserve/products/compostable-bowls-8-count | OK | 200 | no | 6971 | 17 | 0 | 131 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/preserve/products/compostable-bowl-16-oz | https://www.preserve.eco/collections/preserve/products/compostable-bowl-16-oz | OK | 200 | no | 6735 | 19 | 0 | 124 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/food-storage/products/round-food-storage-container-large | https://www.preserve.eco/collections/food-storage/products/round-food-storage-container-large | OK | 200 | no | 7808 | 20 | 0 | 108 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/food-storage/products/sandwich-food-storage-container-set-of-2 | https://www.preserve.eco/collections/food-storage/products/sandwich-food-storage-container-set-of-2 | OK | 200 | no | 8008 | 19 | 0 | 121 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/food-storage/products/round-food-storage-container-mini | https://www.preserve.eco/collections/food-storage/products/round-food-storage-container-mini | OK | 200 | no | 8146 | 19 | 0 | 123 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/food-storage/products/preserve-2-go | https://www.preserve.eco/collections/food-storage/products/preserve-2-go | OK | 200 | no | 8108 | 19 | 0 | 106 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://www.preserve.eco/collections/travel/products/dopper | https://www.preserve.eco/collections/travel/products/dopper | FAIL | - | no | 60002 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://www.preserve.eco/collections/spring-blowout/products/medium-weight-cutlery-knives-forks-spoons-8-sets | https://www.preserve.eco/collections/spring-blowout/products/medium-weight-cutlery-knives-forks-spoons-8-sets | OK | 200 | no | 7154 | 19 | 0 | 88 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/spring-blowout/products/brew-house-9-compostable-plates-24-pack-made-with-brewed-hops | https://www.preserve.eco/collections/spring-blowout/products/brew-house-9-compostable-plates-24-pack-made-with-brewed-hops | OK | 200 | no | 6232 | 17 | 0 | 74 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/spring-blowout/products/9-compostable-plate | https://www.preserve.eco/collections/spring-blowout/products/9-compostable-plate | OK | 200 | no | 6198 | 18 | 0 | 89 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/kitchen/products/preserve-2-go | https://www.preserve.eco/collections/kitchen/products/preserve-2-go | OK | 200 | no | 8034 | 19 | 0 | 127 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://www.preserve.eco/collections/kitchen/products/utec-cutting-board-small | https://www.preserve.eco/collections/kitchen/products/utec-cutting-board-small | OK | 200 | no | 6495 | 14 | 0 | 126 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/kitchen/products/utec-cutting-board-large | https://www.preserve.eco/collections/kitchen/products/utec-cutting-board-large | OK | 200 | no | 6941 | 13 | 0 | 116 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_quoted_correctly, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/kitchen/products/cutting-board-small | https://www.preserve.eco/collections/kitchen/products/cutting-board-small | OK | 200 | no | 7972 | 20 | 0 | 135 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/kitchen/products/kitchen-starter-set-4-items | https://www.preserve.eco/collections/kitchen/products/kitchen-starter-set-4-items | OK | 200 | no | 6929 | 20 | 0 | 125 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_quoted_correctly, widget_tabbable_exists |
| https://www.preserve.eco/collections/kitchen/products/food-storage-container-mini-set-of-4-with-packaging | https://www.preserve.eco/collections/kitchen/products/food-storage-container-mini-set-of-4-with-packaging | OK | 200 | no | 8365 | 20 | 0 | 131 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/kitchen/products/sandwich-food-storage-container-set-of-2 | https://www.preserve.eco/collections/kitchen/products/sandwich-food-storage-container-set-of-2 | OK | 200 | no | 8387 | 19 | 0 | 121 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, widget_tabbable_exists |
| https://www.preserve.eco/collections/kitchen/products/sandwich-food-storage-lid | https://www.preserve.eco/collections/kitchen/products/sandwich-food-storage-lid | OK | 200 | no | 6547 | 20 | 0 | 117 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/kitchen/products/round-food-storage-container-small | https://www.preserve.eco/collections/kitchen/products/round-food-storage-container-small | OK | 200 | no | 8618 | 20 | 0 | 123 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/kitchen/products/colander-small | https://www.preserve.eco/collections/kitchen/products/colander-small | OK | 200 | no | 8317 | 20 | 0 | 140 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/razors/products/shave-5-replacement-blades-4-blades | https://www.preserve.eco/collections/razors/products/shave-5-replacement-blades-4-blades | OK | 200 | no | 8065 | 15 | 0 | 118 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/razors/products/shave-5-razor-system-handle-and-1-blade | https://www.preserve.eco/collections/razors/products/shave-5-razor-system-handle-and-1-blade | OK | 200 | no | 8032 | 17 | 0 | 125 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/popi/products/popi-toothbrush-single | https://www.preserve.eco/collections/popi/products/popi-toothbrush-single | OK | 200 | no | 7320 | 18 | 0 | 96 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/oral-care/products/toothbrush-in-lightweight-pouch-single | https://www.preserve.eco/collections/oral-care/products/toothbrush-in-lightweight-pouch-single | OK | 200 | no | 8540 | 18 | 0 | 154 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/oral-care/products/kids-toothbrush-single | https://www.preserve.eco/collections/oral-care/products/kids-toothbrush-single | OK | 200 | no | 7972 | 18 | 0 | 142 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/oral-care/products/toothbrush-in-lightweight-pouch-6-pack | https://www.preserve.eco/collections/oral-care/products/toothbrush-in-lightweight-pouch-6-pack | OK | 200 | no | 8307 | 18 | 0 | 140 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-paper-board-6-pack | https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-paper-board-6-pack | OK | 200 | no | 7960 | 18 | 0 | 129 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/popi/products/popi-replacement-blades | https://www.preserve.eco/collections/popi/products/popi-replacement-blades | OK | 200 | no | 7159 | 13 | 0 | 91 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/subscriptions/products/shave-5-replacement-blades-wave-edition-4-blades | https://www.preserve.eco/collections/subscriptions/products/shave-5-replacement-blades-wave-edition-4-blades | OK | 200 | no | 6131 | 18 | 0 | 107 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/tabletop/products/everyday-plate-4-count | https://www.preserve.eco/collections/tabletop/products/everyday-plate-4-count | OK | 200 | no | 7670 | 21 | 0 | 125 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/tabletop/products/on-the-go-tableware-set-pack-for-8 | https://www.preserve.eco/collections/tabletop/products/on-the-go-tableware-set-pack-for-8 | OK | 200 | no | 6866 | 21 | 0 | 123 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://www.preserve.eco/collections/tabletop/products/small-on-the-go-plates-10-count-discontinued-color-packaging | https://www.preserve.eco/collections/tabletop/products/small-on-the-go-plates-10-count-discontinued-color-packaging | OK | 200 | no | 7103 | 19 | 0 | 113 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/food-storage-containers | https://www.preserve.eco/collections/food-storage-containers | OK | 200 | no | 6395 | 12 | 0 | 83 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
| https://www.preserve.eco/collections/tabletop/products/large-on-the-go-plates-8-count | https://www.preserve.eco/collections/tabletop/products/large-on-the-go-plates-8-count | OK | 200 | no | 7911 | 20 | 0 | 126 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/toothbrush-subscriptions/products/toothbrush-in-lightweight-pouch-single | https://www.preserve.eco/collections/toothbrush-subscriptions/products/toothbrush-in-lightweight-pouch-single | OK | 200 | no | 10338 | 18 | 0 | 178 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, color-contrast, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/bowls/products/compostable-bowls-8-count | https://www.preserve.eco/collections/bowls/products/compostable-bowls-8-count | OK | 200 | no | 5748 | 16 | 0 | 97 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-input-field-name, aria-toggle-field-name, button-name, heading-order, html-has-lang, image-alt, label, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_attribute_deprecated, aria_child_tabbable, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_id_unique, aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, aria_widget_labelled, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, img_alt_valid, input_label_exists, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://www.preserve.eco/collections/shave-5-systems

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

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img srcset="https://i.shgcdn.com..." sizes="100vw" src="https://i.shgcdn.com..." class="shogun-image " decoding="async" loading="eager" draggable="false">`
- XPath: `img[loading="eager"]`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img srcset="https://i.shgcdn.com..." sizes="100vw" src="https://i.shgcdn.com..." class="shogun-image " decoding="async" loading="lazy" draggable="false">`
- XPath: `img[loading="lazy"]`

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

### https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-large

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
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/files/preserve-large-fs-green_small_cropped.jpg?v=1764175523" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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

*... and 3 more failures for this rule*

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

### https://www.preserve.eco/collections/razor-systems

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

### https://www.preserve.eco/collections/collections

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

### https://www.preserve.eco/collections/featured/products/popi-toothbrush-single

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

### https://www.preserve.eco/collections/travel-razor

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
- HTML: `<img class="parallax-slider" src="//www.preserve.eco/cdn/shop/collections/header_37e4de39-9e36-4c16-ab90-5965a8069a81_1800x.jpg?v=1543924251" style="transform: translate3d(-296px, -78.8125px, 0px); position: absolute; height: 332px; width: 1873px; max-width: none;">`
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

### https://www.preserve.eco/collections/gifting/products/food-storage-lunch-pack-4-containers

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

### https://www.preserve.eco/collections/cups/products/on-the-go-cups-10-count

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
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/otg-cups-green_small_cropped.jpg?v=1517173673" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
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

### https://www.preserve.eco/collections/toothbrush/products/toothbrush-in-lightweight-pouch-single

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

### https://www.preserve.eco/collections/summer-collection

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
- HTML: `<span style="color: rgb(0, 125, 204);">Our summer sale is here! <strong>30% off</strong> almost everything. Now through 8/9. Enter <strong>SUMMER30</strong> at checkout.</span>`
- XPath: `p:nth-child(1) > span`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>30% off</strong>`
- XPath: `span > strong:nth-child(1)`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>SUMMER30</strong>`
- XPath: `strong:nth-child(2)`

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

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img srcset="https://i.shgcdn.com..." sizes="100vw" src="https://i.shgcdn.com..." class="shogun-image " decoding="async" loading="eager" draggable="false">`
- XPath: `.shogun-image`

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

### https://www.preserve.eco/collections/lightweight-pouch-featuring-artists-for-humanity-artwork

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
- HTML: `<img class="parallax-slider" src="//www.preserve.eco/cdn/shop/collections/cover-updated-neader_1800x.jpg?v=1579287325" style="transform: translate3d(-442px, -78.8125px, 0px); position: absolute; height: 332px; width: 2165px; max-width: none;">`
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

### https://www.preserve.eco/collections/toothpick-subscriptions/products/flavored-toothpicks-2-pack

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-i4-active wf-opensans-n7-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
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

### https://www.preserve.eco/collections/reusables/products/round-food-storage-container-mini

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 5896px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/Aqua-Mini_1_small_cropped.png?v=1569119918" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

*... and 2 more failures for this rule*

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

### https://www.preserve.eco/collections/straws

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-n7-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
- XPath: `html`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img class="parallax-slider" src="//www.preserve.eco/cdn/shop/collections/collect-header3_79deb025-27d2-4365-bbc4-daff99f9b956_1800x.jpg?v=1517170961" style="transform: translate3d(0px, -99.8125px, 0px); position: absolute; height: 374px; width: 1280px; max-width: none;">`
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
- HTML: `<div class="parallax-mirror" style="visibility: visible; z-index: -100; position: fixed; top: 0px; left: 0px; overflow: hidden; transform: translate3d(0px, 98.5156px, 0px); height: 254px; width: 1280px;">`
- XPath: `.parallax-mirror`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/reusables/products/sandwich-food-storage-container-set-of-2

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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

*... and 2 more failures for this rule*

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

### https://www.preserve.eco/collections/plates/products/small-compostable-plates-8-count

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gmo-icon.PNG?8170414422949020231">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/glutenfree-icon.PNG?8170414422949020231">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/microwavedurable-icon.PNG?9048842991914706303">`
- XPath: `.tooltip:nth-child(4) > img`

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

### https://www.preserve.eco/collections/food-storage-containers/products/round-food-storage-container-large

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
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/files/preserve-large-fs-green_small_cropped.jpg?v=1764175523" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
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

### https://www.preserve.eco/collections/summer-collection/products/toothbrush-in-lightweight-pouch-6-pack

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-i4-active wf-opensans-n7-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
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

### https://www.preserve.eco/collections/utec-cutting-boards/products/utec-gift-set-large-and-small-cutting-boards

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

### https://www.preserve.eco/collections/tableware-and-food-storage/products/everyday-tableware-set-pack-for-4

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 5896px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-oswald-n4-active wf-opensans-n7-active wf-opensans-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
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

*... and 4 more failures for this rule*

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

### https://www.preserve.eco/collections/no-animal-testing

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

### https://www.preserve.eco/collections/toothpicks/products/flavored-toothpicks-24-pack

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

### https://www.preserve.eco/collections/earth-day-collection/products/popi-shave-5-razor-system-handle-1-blade

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 8107px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
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

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a class="shogun-image-link" href="https://getshogun.com/previews/145ffeef-6ba5-4c1e-9374-4531f22da1db/5d2650612b074f004fa12c07">`
- XPath: `.shogun-image-link`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/replacement-blade-subscriptions/products/shave-3-replacement-blades-24-blades

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
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/Picture1_small_cropped.jpg?v=1642799837" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-i7-active wf-opensans-i4-active wf-oswald-n4-active wf-opensans-n7-active wf-opensans-n4-active wf-active" style="">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/noanimaltesting-icon.PNG?9048842991914706303">`
- XPath: `.tooltip:nth-child(2) > img`

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

### https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-mini

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 5896px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/Aqua-Mini_1_small_cropped.png?v=1569119918" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

*... and 2 more failures for this rule*

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

### https://www.preserve.eco/collections/toothbrush/products/popi-toothbrush-single

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

### https://www.preserve.eco/collections/razor-systems/products/shave-3-razor-system-handle-and-2-blades

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 11055px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
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

### https://www.preserve.eco/collections/razor-systems/products/popi-shave-5-replacement-blades-8ct

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-opensans-n7-active wf-opensans-n4-active wf-active" style="">`
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

### https://www.preserve.eco/collections/replacement-blade-subscriptions/products/popi-shave-5-replacement-blades-8ct

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

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/tools/products/colander-small

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
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

### https://www.preserve.eco/collections/utec-cutting-boards-1/products/utec-cutting-board-large

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

### https://www.preserve.eco/collections/summer-food-storage/products/round-food-storage-container-small

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

*... and 3 more failures for this rule*

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

### https://www.preserve.eco/collections/cups/products/compostable-cups-8-count

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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/compost-icon.PNG?8170414422949020231">`
- XPath: `.tooltip:nth-child(3) > img`

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

### https://www.preserve.eco/blogs/stories/supporting_a_better_world

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
- HTML: `<h5 class="uppercase h5">Tags</h5>`
- XPath: `.h5`

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
- HTML: `<img class="parallax-slider" src="//www.preserve.eco/cdn/shop/articles/shutterstock_760589224_1800x.jpg?v=1583779150" style="transform: translate3d(0px, -291.812px, 0px); position: absolute; height: 853px; width: 1280px; max-width: none;">`
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
- HTML: `<div class="parallax-mirror" style="visibility: visible; z-index: -100; position: fixed; top: 0px; left: 0px; overflow: hidden; transform: translate3d(0px, 98.5156px, 0px); height: 348px; width: 1280px;">`
- XPath: `.parallax-mirror`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/blogs/stories/popi-partner-spotlight-seatrees

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
- HTML: `<h5 class="uppercase h5">Tags</h5>`
- XPath: `.h5`

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
- HTML: `<img class="parallax-slider" src="//www.preserve.eco/cdn/shop/articles/SeeTrees-420-2-lr_1800x.png?v=1636289826" style="transform: translate3d(0px, -291.812px, 0px); position: absolute; height: 853px; width: 1280px; max-width: none;">`
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
- HTML: `<div class="parallax-mirror" style="visibility: visible; z-index: -100; position: fixed; top: 0px; left: 0px; overflow: hidden; transform: translate3d(0px, 98.5156px, 0px); height: 348px; width: 1280px;">`
- XPath: `.parallax-mirror`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/blogs/stories/preventing-plastic-pollution-in-our-oceans-6-ways-you-can-have-an-impact

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
- HTML: `<h5 class="uppercase h5">Tags</h5>`
- XPath: `.h5`

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
- HTML: `<img class="parallax-slider" src="//www.preserve.eco/cdn/shop/articles/preserve-plastic-6-3000_1800x.jpg?v=1577452590" style="transform: translate3d(0px, -263.812px, 0px); position: absolute; height: 796px; width: 1280px; max-width: none;">`
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
- HTML: `<div class="parallax-mirror" style="visibility: visible; z-index: -100; position: fixed; top: 0px; left: 0px; overflow: hidden; transform: translate3d(0px, 98.5156px, 0px); height: 348px; width: 1280px;">`
- XPath: `.parallax-mirror`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/blogs/stories/5-startling-facts-about-ocean-plastic-pollution-and-what-we-can-do-to-stop-it

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
- HTML: `<h5 class="uppercase h5">Tags</h5>`
- XPath: `.h5`

**Failure 2:**
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
- HTML: `<img class="parallax-slider" src="//www.preserve.eco/cdn/shop/articles/blog3_1800x.jpg?v=1578355525" style="transform: translate3d(0px, -291.812px, 0px); position: absolute; height: 853px; width: 1280px; max-width: none;">`
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

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a name="_ftn8" href="#_ftnref8"></a>`
- XPath: `a[name="_ftn8"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="parallax-mirror" style="visibility: visible; z-index: -100; position: fixed; top: 0px; left: 0px; overflow: hidden; transform: translate3d(0px, 98.5156px, 0px); height: 348px; width: 1280px;">`
- XPath: `.parallax-mirror`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/preserve-hoodie-preserve-pact/products/preserve-hoodie

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 7370px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/files/WA1-UOH-MRN-NAVY-FRONT_small_cropped.jpg?v=1703876676" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span id="ComparePrice-product">$80.00</span>`
- XPath: `#ComparePrice-product`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="money">$80.00</span>`
- XPath: `a > .compare-at > .money`

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
- HTML: `<a href="#looxReviews"> <div class="loox-rating" data-id="8197112791283" data-rating="" data-raters=""></div> </a>`
- XPath: `a[href$="#looxReviews"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/preserve/products/compostable-straws-50-count

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gmo-icon.PNG?8170414422949020231">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/glutenfree-icon.PNG?8170414422949020231">`
- XPath: `.tooltip:nth-child(4) > img`

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

### https://www.preserve.eco/collections/preserve/products/small-compostable-plates-8-count

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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gmo-icon.PNG?8170414422949020231">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/glutenfree-icon.PNG?8170414422949020231">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/microwavedurable-icon.PNG?9048842991914706303">`
- XPath: `.tooltip:nth-child(4) > img`

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

### https://www.preserve.eco/collections/preserve/products/9-compostable-plate

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/glutenfree-icon.PNG?8170414422949020231">`
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

### https://www.preserve.eco/collections/preserve/products/compostable-bowls-8-count

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
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/Green-Bowl-OLS_small_cropped.png?v=1516219753" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gmo-icon.PNG?8170414422949020231">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/glutenfree-icon.PNG?8170414422949020231">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/microwavedurable-icon.PNG?9048842991914706303">`
- XPath: `.tooltip:nth-child(4) > img`

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

### https://www.preserve.eco/collections/preserve/products/compostable-bowl-16-oz

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 2948px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/glutenfree-icon.PNG?8170414422949020231">`
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

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="#looxReviews"> <div class="loox-rating" data-id="6873234538661" data-rating="" data-raters=""></div> </a>`
- XPath: `a[href$="#looxReviews"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/food-storage/products/round-food-storage-container-large

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
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/files/preserve-large-fs-green_small_cropped.jpg?v=1764175523" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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

*... and 3 more failures for this rule*

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

### https://www.preserve.eco/collections/food-storage/products/sandwich-food-storage-container-set-of-2

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

*... and 2 more failures for this rule*

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

### https://www.preserve.eco/collections/food-storage/products/round-food-storage-container-mini

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 5896px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/Aqua-Mini_1_small_cropped.png?v=1569119918" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

*... and 2 more failures for this rule*

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

### https://www.preserve.eco/collections/food-storage/products/preserve-2-go

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 2948px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/FS2Go-Closed_small_cropped.png?v=1569058176" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
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

### https://www.preserve.eco/collections/spring-blowout/products/medium-weight-cutlery-knives-forks-spoons-8-sets

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

*... and 2 more failures for this rule*

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

### https://www.preserve.eco/collections/spring-blowout/products/brew-house-9-compostable-plates-24-pack-made-with-brewed-hops

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
- HTML: `<div class="product__photo slick..." data-thumb="//www.preserve.eco/c..." data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
- XPath: `.product__photo`

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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/noanimaltesting-icon.PNG?9048842991914706303">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/glutenfree-icon.PNG?8170414422949020231">`
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

### https://www.preserve.eco/collections/spring-blowout/products/9-compostable-plate

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-i4-active wf-opensans-i7-active wf-oswald-n4-active wf-opensans-n7-active wf-opensans-n4-active wf-active" style="">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/glutenfree-icon.PNG?8170414422949020231">`
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

### https://www.preserve.eco/collections/kitchen/products/preserve-2-go

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 2948px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/FS2Go-Closed_small_cropped.png?v=1569058176" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
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

### https://www.preserve.eco/collections/kitchen/products/utec-cutting-board-small

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

### https://www.preserve.eco/collections/kitchen/products/utec-cutting-board-large

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-oswald-n4-active wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
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

### https://www.preserve.eco/collections/kitchen/products/cutting-board-small

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

### https://www.preserve.eco/collections/kitchen/products/kitchen-starter-set-4-items

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
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

### https://www.preserve.eco/collections/kitchen/products/food-storage-container-mini-set-of-4-with-packaging

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-i4-active wf-opensans-i7-active wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-active" style="">`
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

### https://www.preserve.eco/collections/kitchen/products/sandwich-food-storage-container-set-of-2

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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

*... and 2 more failures for this rule*

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

### https://www.preserve.eco/collections/kitchen/products/sandwich-food-storage-lid

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
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/Square-Lid_small_cropped.png?v=1505737486" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
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

### https://www.preserve.eco/collections/kitchen/products/round-food-storage-container-small

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

*... and 3 more failures for this rule*

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

### https://www.preserve.eco/collections/kitchen/products/colander-small

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

### https://www.preserve.eco/collections/razors/products/shave-5-replacement-blades-4-blades

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/noanimaltesting-icon.PNG?9048842991914706303">`
- XPath: `.tooltip:nth-child(2) > img`

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

### https://www.preserve.eco/collections/razors/products/shave-5-razor-system-handle-and-1-blade

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 11055px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-i4-active wf-opensans-n7-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
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

### https://www.preserve.eco/collections/popi/products/popi-toothbrush-single

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

### https://www.preserve.eco/collections/oral-care/products/toothbrush-in-lightweight-pouch-single

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

### https://www.preserve.eco/collections/oral-care/products/kids-toothbrush-single

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

### https://www.preserve.eco/collections/oral-care/products/toothbrush-in-lightweight-pouch-6-pack

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

### https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-paper-board-6-pack

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-opensans-i7-active wf-opensans-i4-active wf-active" style="">`
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

### https://www.preserve.eco/collections/popi/products/popi-replacement-blades

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
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/POPiShave5blades4ct_small_cropped.png?v=1664571365" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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

### https://www.preserve.eco/collections/subscriptions/products/shave-5-replacement-blades-wave-edition-4-blades

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
- HTML: `<div class="product__photo slick..." data-thumb="//www.preserve.eco/c..." data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

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
- HTML: `<a href="#looxReviews"> <div class="loox-rating" data-id="8679764394227" data-rating="" data-raters=""></div> </a>`
- XPath: `a[href$="#looxReviews"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="header-account-link">           <a href="/account"><img src="//www.preserve.eco/cdn/shop/t/21/assets/account.svg?v=152161910560963363051726753645"></a>         </div>`
- XPath: `.header-account-link`

### https://www.preserve.eco/collections/tabletop/products/everyday-plate-4-count

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 5896px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-oswald-n4-active wf-opensans-n4-active wf-opensans-n7-active wf-opensans-i4-active wf-opensans-i7-active wf-active" style="">`
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

*... and 4 more failures for this rule*

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

### https://www.preserve.eco/collections/tabletop/products/on-the-go-tableware-set-pack-for-8

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
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/OTGTW-new-green-sq_small_cropped.jpg?v=1517154508" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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

*... and 4 more failures for this rule*

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

### https://www.preserve.eco/collections/tabletop/products/small-on-the-go-plates-10-count-discontinued-color-packaging

#### Rule: [aria-input-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-input-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA input fields must have an accessible name
- HTML: `<div class="slick-track" style="opacity: 1; width: 2948px; transform: translate3d(-737px, 0px, 0px);" role="listbox">`
- XPath: `.slick-track`

#### Rule: [aria-toggle-field-name](https://dequeuniversity.com/rules/axe/4.11/aria-toggle-field-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: ARIA toggle fields must have an accessible name
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/small_plate_green_small_cropped.jpg?v=1667832946" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-i4-active wf-opensans-i7-active wf-opensans-n7-active wf-opensans-n4-active wf-oswald-n4-active wf-active" style="">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
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

### https://www.preserve.eco/collections/food-storage-containers

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
- HTML: `<img class="parallax-slider" src="//www.preserve.eco/cdn/shop/collections/header_46d4435f-0de7-488a-b9b9-9f001d696df2_1800x.jpg?v=1543923935" style="transform: translate3d(-296px, -78.8125px, 0px); position: absolute; height: 332px; width: 1873px; max-width: none;">`
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

### https://www.preserve.eco/collections/tabletop/products/large-on-the-go-plates-8-count

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

*... and 3 more failures for this rule*

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

### https://www.preserve.eco/collections/toothbrush-subscriptions/products/toothbrush-in-lightweight-pouch-single

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

### https://www.preserve.eco/collections/bowls/products/compostable-bowls-8-count

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
- HTML: `<div class="product__photo slick-slide slick-current slick-active" data-thumb="//www.preserve.eco/cdn/shop/products/Green-Bowl-OLS_small_cropped.png?v=1516219753" data-slick-index="0" aria-hidden="false" style="width: 737px;" tabindex="-1" role="option" aria-describedby="slick-slide00">`
- XPath: `.slick-current`

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
- HTML: `<html class="supports-js supports-no-touch supports-csstransforms supports-csstransforms3d supports-fontface wf-opensans-n4-active wf-opensans-i4-active wf-opensans-n7-active wf-opensans-i7-active wf-oswald-n4-active wf-active" style="">`
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
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gmo-icon.PNG?8170414422949020231">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/glutenfree-icon.PNG?8170414422949020231">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/microwavedurable-icon.PNG?9048842991914706303">`
- XPath: `.tooltip:nth-child(4) > img`

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

