# Scan Report: Preserve Chunk 1

- Issue: https://github.com/mgifford/open-scans/issues/246
- Submitted by: NicoleMBytes
- Scanned at: 2026-04-07T00:51:55.173Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 9.9 minutes
- Total URLs submitted: 50
- Accepted public URLs: 50
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 50 of 50 URLs (100%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 71146 passed, 1098 failed, 238 cantTell, 2100 inapplicable
- Equal Access outcomes: 185190 passed, 2097 failed (2036 unique, 61 duplicate), 1877 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 1056

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.preserve.eco/collections/products/products/toothbrush-in-lightweight-pouch-single) | 7 | 90 | **97** | Preserve Toothbrush in Lightweight Pouch \| Single |
| [View Page](https://www.preserve.eco/collections/toothbrush-subscriptions/products/kids-toothbrush-single) | 7 | 85 | **92** | Preserve Kids Toothbrush \| Single |
| [View Page](https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single) | 7 | 81 | **88** | Preserve Kids Toothbrush \| Single |
| [View Page](https://www.preserve.eco/collections/tableware-and-food-storage/products/everyday-bowl-4-count) | 9 | 79 | **88** | Preserve Everyday Bowl \| 4 Count |
| [View Page](https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack) | 7 | 80 | **87** | Preserve Toothbrush in Lightweight Pouch \| 6-pack |
| [View Page](https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count) | 9 | 76 | **85** | Preserve Everyday Bowl \| 4 Count |
| [View Page](https://www.preserve.eco/collections/no-animal-testing/products/toothbrush-in-bulk-packaging-surprise-colors-3-pack) | 8 | 72 | **80** | Toothbrush in Lightweight Paper Packaging - Surprise Colors \| 3 Pack &ndash; Preserve |
| [View Page](https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets) | 8 | 71 | **79** | Preserve Medium Weight Cutlery \| Knives, Forks, Spoons \| 8 sets |
| [View Page](https://www.preserve.eco/pages/popi-about) | 8 | 56 | **64** | Preserve Ocean Plastic Initiative (POPi) |
| [View Page](https://www.preserve.eco/collections/utec-cutting-boards/products/utec-cutting-board-small) | 3 | 56 | **59** | UTEC Cutting Board \| Small &ndash; Preserve |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| image-alt | **11** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |
| aria-allowed-role | **10** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| listitem | **10** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/listitem) |
| label | **6** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/label) |
| heading-order | **3** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| region | **3** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| color-contrast | **2** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| link-name | **2** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| aria-prohibited-attr | **1** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-prohibited-attr) |
| button-name | **1** of 50 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 9 page(s) - 735 occurrence(s)

**Scanner**: axe
**Rule**: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**Issue**: <li> elements must be contained in a <ul> or <ol>

**HTML Pattern**:
```html
<li><svg viewBox="0 0 24 24" data-lx-fill="full" role="presentation" aria-hidden="true" class="loox-icon star" style="display: block; width: 1em; height: 1em;"><use href="#looxicons-rating-icon"></use></svg></li>
```

**XPath** (use in browser DevTools):
```
#looxReviewsFrame
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#looxReviewsFrame')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack
- https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count
- https://www.preserve.eco/collections/popi/products/popi-shave-5-replacement-blades-8ct
- https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets
- https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single
- *...and 4 more page(s)*

---

#### Pattern 2: Affects 9 page(s) - 135 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor
**Issue**: ARIA role should be appropriate for the element

**HTML Pattern**:
```html
<ul style="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;" aria-label="Rating icons:  5 / 5 star review" role="img" aria-roledescription="figure">
```

**XPath** (use in browser DevTools):
```
#looxReviewsFrame
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#looxReviewsFrame')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack
- https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count
- https://www.preserve.eco/collections/popi/products/popi-shave-5-replacement-blades-8ct
- https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets
- https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single
- *...and 4 more page(s)*

---

#### Pattern 3: Affects 9 page(s) - 60 occurrence(s)

**Scanner**: axe
**Rule**: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**Issue**: <li> elements must be contained in a <ul> or <ol>

**HTML Pattern**:
```html
<li><svg viewBox="0 0 24 24" data-lx-fill="empty" role="presentation" aria-hidden="true" class="loox-icon star" style="display: block; width: 1em; height: 1em;"><use href="#looxicons-rating-icon"></use></svg></li>
```

**XPath** (use in browser DevTools):
```
#looxReviewsFrame
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#looxReviewsFrame')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack
- https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count
- https://www.preserve.eco/collections/popi/products/popi-shave-5-replacement-blades-8ct
- https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets
- https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single
- *...and 4 more page(s)*

---

#### Pattern 4: Affects 9 page(s) - 42 occurrence(s)

**Scanner**: axe
**Rule**: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**Issue**: <li> elements must be contained in a <ul> or <ol>

**HTML Pattern**:
```html
<li><svg viewBox="0 0 24 24" data-lx-fill="full" role="presentation" aria-hidden="true" class="loox-icon star text-large" style="display: block; width: 1em; height: 1em;"><use href="#looxicons-rating-icon"></use></svg></li>
```

**XPath** (use in browser DevTools):
```
#looxReviewsFrame
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#looxReviewsFrame')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack
- https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count
- https://www.preserve.eco/collections/popi/products/popi-shave-5-replacement-blades-8ct
- https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets
- https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single
- *...and 4 more page(s)*

---

#### Pattern 5: Affects 8 page(s) - 15 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor
**Issue**: ARIA role should be appropriate for the element

**HTML Pattern**:
```html
<ul style="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;" aria-label="Rating icons:  4 / 5 star review" role="img" aria-roledescription="figure">
```

**XPath** (use in browser DevTools):
```
#looxReviewsFrame
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#looxReviewsFrame')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count
- https://www.preserve.eco/collections/popi/products/popi-shave-5-replacement-blades-8ct
- https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets
- https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single
- https://www.preserve.eco/collections/no-animal-testing/products/toothbrush-in-bulk-packaging-surprise-colors-3-pack
- *...and 3 more page(s)*

---

#### Pattern 6: Affects 8 page(s) - 8 occurrence(s)

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

#### Pattern 7: Affects 8 page(s) - 8 occurrence(s)

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

#### Pattern 8: Affects 8 page(s) - 8 occurrence(s)

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

#### Pattern 9: Affects 8 page(s) - 8 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">
```

**XPath** (use in browser DevTools):
```
.tooltip:nth-child(4) > img
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.tooltip:nth-child(4) > img')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack
- https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count
- https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets
- https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single
- https://www.preserve.eco/collections/no-animal-testing/products/toothbrush-in-bulk-packaging-surprise-colors-3-pack
- *...and 3 more page(s)*

---

#### Pattern 10: Affects 6 page(s) - 6 occurrence(s)

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
- https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack
- https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets
- https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single
- https://www.preserve.eco/collections/no-animal-testing/products/toothbrush-in-bulk-packaging-surprise-colors-3-pack
- https://www.preserve.eco/collections/products/products/toothbrush-in-lightweight-pouch-single
- *...and 1 more page(s)*

---

#### Pattern 11: Affects 6 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**Issue**: Form elements must have labels

**HTML Pattern**:
```html
<input name="esc_cf_t" type="text" class="esc--1337">
```

**XPath** (use in browser DevTools):
```
input[name="esc_cf_t"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('input[name="esc_cf_t"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/pages/contact-us-wholesale-or-food-service-inquiry
- https://www.preserve.eco/pages/contact-us-online-order
- https://www.preserve.eco/pages/contact-us-marketing-partnerships-donations
- https://www.preserve.eco/pages/contact-us-general-questions-feedback
- https://www.preserve.eco/pages/contact-us-preserve-cutlery-dispenser
- *...and 1 more page(s)*

---

#### Pattern 12: Affects 6 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**Issue**: Form elements must have labels

**HTML Pattern**:
```html
<input type="email" class="esc--1337">
```

**XPath** (use in browser DevTools):
```
.esc--1337[type="email"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.esc--1337[type="email"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/pages/contact-us-wholesale-or-food-service-inquiry
- https://www.preserve.eco/pages/contact-us-online-order
- https://www.preserve.eco/pages/contact-us-marketing-partnerships-donations
- https://www.preserve.eco/pages/contact-us-general-questions-feedback
- https://www.preserve.eco/pages/contact-us-preserve-cutlery-dispenser
- *...and 1 more page(s)*

---

#### Pattern 13: Affects 6 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**Issue**: Form elements must have labels

**HTML Pattern**:
```html
<input type="text" class="esc--1337">
```

**XPath** (use in browser DevTools):
```
.esc--1337[type="text"]:nth-child(3)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.esc--1337[type="text"]:nth-child(3)')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/pages/contact-us-wholesale-or-food-service-inquiry
- https://www.preserve.eco/pages/contact-us-online-order
- https://www.preserve.eco/pages/contact-us-marketing-partnerships-donations
- https://www.preserve.eco/pages/contact-us-general-questions-feedback
- https://www.preserve.eco/pages/contact-us-preserve-cutlery-dispenser
- *...and 1 more page(s)*

---

#### Pattern 14: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor
**Issue**: ARIA role should be appropriate for the element

**HTML Pattern**:
```html
<ul style="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;" aria-label="Rating icons:  2 / 5 star review" role="img" aria-roledescription="figure">
```

**XPath** (use in browser DevTools):
```
#looxReviewsFrame
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#looxReviewsFrame')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count
- https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets
- https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single
- https://www.preserve.eco/collections/tableware-and-food-storage/products/everyday-bowl-4-count
- https://www.preserve.eco/collections/toothbrush-subscriptions/products/kids-toothbrush-single

---

#### Pattern 15: Affects 4 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor
**Issue**: ARIA role should be appropriate for the element

**HTML Pattern**:
```html
<ul style="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;" aria-label="Rating icons:  3 / 5 star review" role="img" aria-roledescription="figure">
```

**XPath** (use in browser DevTools):
```
#looxReviewsFrame
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#looxReviewsFrame')`
5. The element will be highlighted

**Affected Pages**:
- https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack
- https://www.preserve.eco/collections/popi/products/popi-shave-5-replacement-blades-8ct
- https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets
- https://www.preserve.eco/collections/no-animal-testing/products/toothbrush-in-bulk-packaging-surprise-colors-3-pack

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.preserve.eco/pages/overview | https://www.preserve.eco/pages/overview | OK | 200 | no | 12131 | 0 | 0 | 22 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/pages/purposeful-plastics | https://www.preserve.eco/pages/purposeful-plastics | OK | 200 | no | 10105 | 0 | 0 | 28 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://www.preserve.eco/ | https://www.preserve.eco/ | OK | 200 | no | 9527 | 0 | 0 | 29 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://www.preserve.eco/pages/work | https://www.preserve.eco/pages/work | OK | 200 | no | 10112 | 0 | 0 | 30 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.preserve.eco/pages/our-commitments | https://www.preserve.eco/pages/our-commitments | OK | 200 | no | 9737 | 0 | 0 | 25 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://www.preserve.eco/pages/corporate-sales | https://www.preserve.eco/pages/corporate-sales | OK | 200 | no | 9510 | 0 | 0 | 27 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, text_block_heading |
| https://www.preserve.eco/blogs/stories | https://www.preserve.eco/blogs/stories | OK | 200 | no | 9722 | 1 | 0 | 26 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_visible, heading_markup_misuse, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/preserve-hoodie-preserve-pact | https://www.preserve.eco/collections/preserve-hoodie-preserve-pact | OK | 200 | no | 9858 | 0 | 0 | 22 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/pages/manage-subscriptions | https://www.preserve.eco/pages/manage-subscriptions | OK | 200 | no | 9344 | 0 | 0 | 28 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/preserve | https://www.preserve.eco/collections/preserve | OK | 200 | no | 12157 | 0 | 0 | 43 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/food-storage | https://www.preserve.eco/collections/food-storage | OK | 200 | no | 11875 | 0 | 0 | 36 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/pages/bcorp-certification | https://www.preserve.eco/pages/bcorp-certification | OK | 200 | no | 9471 | 0 | 0 | 26 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://www.preserve.eco/pages/terms-of-use | https://www.preserve.eco/pages/terms-of-use | OK | 200 | no | 9697 | 1 | 0 | 28 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://www.preserve.eco/pages/gimme5-overview | https://www.preserve.eco/pages/gimme5-overview | OK | 200 | no | 9708 | 0 | 0 | 28 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://www.preserve.eco/pages/compostables | https://www.preserve.eco/pages/compostables | OK | 200 | no | 9866 | 1 | 0 | 28 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.preserve.eco/pages/privacy-policy | https://www.preserve.eco/pages/privacy-policy | OK | 200 | no | 9202 | 0 | 0 | 24 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/pages/climate | https://www.preserve.eco/pages/climate | OK | 200 | no | 9591 | 0 | 0 | 27 | 0 | 17 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://www.preserve.eco/collections/travel | https://www.preserve.eco/collections/travel | OK | 200 | no | 11735 | 0 | 0 | 57 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/spring-blowout | https://www.preserve.eco/collections/spring-blowout | OK | 200 | no | 10823 | 0 | 0 | 30 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/kitchen | https://www.preserve.eco/collections/kitchen | OK | 200 | no | 13519 | 0 | 0 | 43 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/razors | https://www.preserve.eco/collections/razors | OK | 200 | no | 11808 | 0 | 0 | 48 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/pages/founding-story | https://www.preserve.eco/pages/founding-story | OK | 200 | no | 9954 | 0 | 0 | 25 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/pages/popi-about | https://www.preserve.eco/pages/popi-about | OK | 200 | no | 19245 | 8 | 0 | 56 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name, color-contrast, link-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, heading_markup_misuse, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.preserve.eco/collections/oral-care | https://www.preserve.eco/collections/oral-care | OK | 200 | no | 15907 | 0 | 0 | 44 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/pages/toothbrush-takeback | https://www.preserve.eco/pages/toothbrush-takeback | OK | 200 | no | 9633 | 0 | 0 | 27 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/dopper | https://www.preserve.eco/collections/dopper | OK | 200 | no | 10043 | 2 | 0 | 35 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_keyboard_handler_exists, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/subscriptions | https://www.preserve.eco/collections/subscriptions | OK | 200 | no | 12029 | 0 | 0 | 39 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/popi | https://www.preserve.eco/collections/popi | OK | 200 | no | 9800 | 0 | 0 | 29 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/tabletop | https://www.preserve.eco/collections/tabletop | OK | 200 | no | 13354 | 0 | 0 | 39 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/pages/contact-us | https://www.preserve.eco/pages/contact-us | OK | 200 | no | 9967 | 0 | 0 | 38 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack | https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack | OK | 200 | no | 14167 | 7 | 0 | 80 | 0 | 126 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, listitem |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_keyboard_handler_exists, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, img_alt_valid, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count | https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count | OK | 200 | no | 13402 | 9 | 0 | 76 | 0 | 124 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, listitem |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, img_alt_valid, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/popi/products/popi-shave-5-replacement-blades-8ct | https://www.preserve.eco/collections/popi/products/popi-shave-5-replacement-blades-8ct | OK | 200 | no | 11927 | 2 | 0 | 56 | 0 | 72 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, listitem |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_keyboard_handler_exists, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, widget_tabbable_exists |
| https://www.preserve.eco/pages/contact-us-wholesale-or-food-service-inquiry | https://www.preserve.eco/pages/contact-us-wholesale-or-food-service-inquiry | OK | 200 | no | 9457 | 3 | 0 | 23 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/pages/contact-us-online-order | https://www.preserve.eco/pages/contact-us-online-order | OK | 200 | no | 9603 | 3 | 0 | 26 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/pages/contact-us-marketing-partnerships-donations | https://www.preserve.eco/pages/contact-us-marketing-partnerships-donations | OK | 200 | no | 9540 | 3 | 0 | 23 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/pages/contact-us-general-questions-feedback | https://www.preserve.eco/pages/contact-us-general-questions-feedback | OK | 200 | no | 10076 | 3 | 0 | 23 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/pages/contact-us-preserve-cutlery-dispenser | https://www.preserve.eco/pages/contact-us-preserve-cutlery-dispenser | OK | 200 | no | 10512 | 3 | 0 | 22 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections | https://www.preserve.eco/collections | OK | 200 | no | 35276 | 1 | 0 | 52 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/pages/contact-us-recycling | https://www.preserve.eco/pages/contact-us-recycling | OK | 200 | no | 9747 | 3 | 0 | 23 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets | https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets | OK | 200 | no | 12593 | 8 | 0 | 71 | 0 | 88 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, listitem |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, img_alt_valid, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single | https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single | OK | 200 | no | 13303 | 7 | 0 | 81 | 0 | 108 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, listitem |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_keyboard_handler_exists, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, img_alt_valid, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/no-animal-testing/products/toothbrush-in-bulk-packaging-surprise-colors-3-pack | https://www.preserve.eco/collections/no-animal-testing/products/toothbrush-in-bulk-packaging-surprise-colors-3-pack | OK | 200 | no | 12975 | 8 | 0 | 72 | 0 | 124 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, listitem |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, img_alt_valid, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://www.preserve.eco/collections/tableware-and-food-storage/products/everyday-bowl-4-count | https://www.preserve.eco/collections/tableware-and-food-storage/products/everyday-bowl-4-count | OK | 200 | no | 13212 | 9 | 0 | 79 | 0 | 124 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, listitem |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, img_alt_valid, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/reusables | https://www.preserve.eco/collections/reusables | OK | 200 | no | 14236 | 0 | 0 | 40 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/utec-cutting-boards/products/utec-cutting-board-small | https://www.preserve.eco/collections/utec-cutting-boards/products/utec-cutting-board-small | OK | 200 | no | 11133 | 3 | 0 | 56 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, link-name, listitem |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_quoted_correctly, text_sensory_misuse |
| https://www.preserve.eco/collections/toothbrush-subscriptions | https://www.preserve.eco/collections/toothbrush-subscriptions | OK | 200 | no | 12021 | 2 | 0 | 40 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.preserve.eco/collections/products/products/toothbrush-in-lightweight-pouch-single | https://www.preserve.eco/collections/products/products/toothbrush-in-lightweight-pouch-single | OK | 200 | no | 14469 | 7 | 0 | 90 | 0 | 126 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, listitem |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_keyboard_handler_exists, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, img_alt_valid, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, widget_tabbable_exists |
| https://www.preserve.eco/collections/toothbrush-subscriptions/products/kids-toothbrush-single | https://www.preserve.eco/collections/toothbrush-subscriptions/products/kids-toothbrush-single | OK | 200 | no | 15096 | 7 | 0 | 85 | 0 | 108 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, image-alt, listitem |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_complementary_labelled, aria_form_label_unique, aria_keyboard_handler_exists, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, img_alt_valid, input_label_visible, label_ref_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse, widget_tabbable_exists |
| https://www.preserve.eco/collections/cutlery | https://www.preserve.eco/collections/cutlery | OK | 200 | no | 10697 | 2 | 0 | 31 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://www.preserve.eco/blogs/stories

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h3 class="h3 blog__article__title">Waste Warriors: POPi Partner Stepping in Where There’s No Formal Waste Collection Infrastructure</h3>`
- XPath: `.large--one-third.grid__item:nth-child(1) > .blog__link > .blog__article.blog__article--card.blog__article--image > .blog__article__content.equalHeightColumn > h3`

### https://www.preserve.eco/pages/terms-of-use

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h3>Terms of Use</h3>`
- XPath: `h3:nth-child(1)`

### https://www.preserve.eco/pages/compostables

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a id="s-fccac842-8595-4255-b8bd-bfd4ca9356a9" class="shg-btn shg-cse shg-btn-text " href="https://www.preserve.eco/collections/preserve">       SHOP COMPOSTABLES   </a>`
- XPath: `#s-fccac842-8595-4255-b8bd-bfd4ca9356a9`

### https://www.preserve.eco/pages/popi-about

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/8c83ec2e/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `iframe[loading="eager"]`

**Failure 2:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/8c83ec2e/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#s-d7ab9102-9018-450c-826c-e5d616c8d2f1 > .shogun-video.shogun-video-16x9 > .video-wrapper > .shogun-video-embed[allowfullscreen=""][title="Embedded Youtube Video"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a id="s-2b831de7-c735-4151-8ae3-96b081ff843f" class="shg-btn shg-cse shg-btn-text " href="https://www.preserve.eco/collections/popi/products/popi-toothbrush-single">       Order Now   </a>`
- XPath: `#s-2b831de7-c735-4151-8ae3-96b081ff843f`

**Failure 2:**
- First identified: 2026-04-07
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a id="s-31cb5dad-06fd-453e-b1e3-e8f04e60303c" class="shg-btn shg-cse shg-btn-text " href="https://www.preserve.eco/collections/popi/products/popi-shave-5-razor-system-handle-1-blade">       Order Now   </a>`
- XPath: `#s-31cb5dad-06fd-453e-b1e3-e8f04e60303c`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Links must have discernible text
- HTML: `<a class="shogun-image-link" href="https://www.preserve.eco/collections/popi">`
- XPath: `#s-8848b3ff-8581-498c-8937-4c56ebfd2dca > .shogun-image-link`

**Failure 2:**
- First identified: 2026-04-07
- Message: Links must have discernible text
- HTML: `<a class="shogun-image-link" href="https://www.preserve.eco/collections/popi">`
- XPath: `#s-0881fab3-aab8-49b5-b49f-e9f7e8f62648 > .shogun-image-link`

**Failure 3:**
- First identified: 2026-04-07
- Message: Links must have discernible text
- HTML: `<a class="shg-social-element" data-icon="facebook-square" data-link="https://www.facebook.com/preserveproducts" target="_blank" " href="https://www.facebook.com/preserveproducts" style="margin-right: 0px;">`
- XPath: `a[data-icon="facebook-square"]`

**Failure 4:**
- First identified: 2026-04-07
- Message: Links must have discernible text
- HTML: `<a class="shg-social-element" data-icon="instagram" data-link="https://www.instagram.com/preserveproducts/" target="_blank&quot; " href="https://www.instagram.com/preserveproducts/" style="margin-right: 0px;"><i class="shg-fa shg-fa-instagram shg-fa-3x" style="color: rgb(255, 255, 255);"></i></a>`
- XPath: `a[data-icon="instagram"]`

### https://www.preserve.eco/collections/dopper

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img class="parallax-slider" src="//www.preserve.eco/cdn/shop/collections/collect-header3-50_bca3e9cc-2ac8-48bb-89e6-bedc57cd047f_1800x.jpg?v=1517178503" style="transform: translate3d(0px, -99.8125px, 0px); position: absolute; height: 374px; width: 1280px; max-width: none;">`
- XPath: `.parallax-slider`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: All page content should be contained by landmarks
- HTML: `<div class="parallax-mirror" style="visibility: visible; z-index: -100; position: fixed; top: 0px; left: 0px; overflow: hidden; transform: translate3d(0px, 98.5156px, 0px); height: 254px; width: 1280px;">`
- XPath: `.parallax-mirror`

### https://www.preserve.eco/collections/subscriptions/products/toothbrush-in-lightweight-pouch-6-pack

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<ul style="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;" aria-label="Rating icons:  5 / 5 star review" role="img" aria-roledescription="figure">`
- XPath: `#looxReviewsFrame`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 2:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 3:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 4:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

**Failure 5:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(5) > img`

#### Rule: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><svg viewBox="0 0 24 24" data-lx-fill="full" role="presentation" aria-hidden="true" class="loox-icon star text-large" style="display: block; width: 1em; height: 1em;"><use href="#looxicons-rating-icon"></use></svg></li>`
- XPath: `#looxReviewsFrame`

### https://www.preserve.eco/collections/tabletop/products/everyday-bowl-4-count

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<ul style="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;" aria-label="Rating icons:  5 / 5 star review" role="img" aria-roledescription="figure">`
- XPath: `#looxReviewsFrame`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 2:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 3:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 4:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

**Failure 5:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/dishwasher-icon.PNG?9048842991914706303">`
- XPath: `.tooltip:nth-child(5) > img`

*... and 2 more failures for this rule*

#### Rule: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><svg viewBox="0 0 24 24" data-lx-fill="full" role="presentation" aria-hidden="true" class="loox-icon star text-large" style="display: block; width: 1em; height: 1em;"><use href="#looxicons-rating-icon"></use></svg></li>`
- XPath: `#looxReviewsFrame`

### https://www.preserve.eco/collections/popi/products/popi-shave-5-replacement-blades-8ct

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<ul style="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;" aria-label="Rating icons:  5 / 5 star review" role="img" aria-roledescription="figure">`
- XPath: `#looxReviewsFrame`

#### Rule: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><svg viewBox="0 0 24 24" data-lx-fill="full" role="presentation" aria-hidden="true" class="loox-icon star text-large" style="display: block; width: 1em; height: 1em;"><use href="#looxicons-rating-icon"></use></svg></li>`
- XPath: `#looxReviewsFrame`

### https://www.preserve.eco/pages/contact-us-wholesale-or-food-service-inquiry

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input name="esc_cf_t" type="text" class="esc--1337">`
- XPath: `input[name="esc_cf_t"]`

**Failure 2:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input type="email" class="esc--1337">`
- XPath: `.esc--1337[type="email"]`

**Failure 3:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input type="text" class="esc--1337">`
- XPath: `.esc--1337[type="text"]:nth-child(3)`

### https://www.preserve.eco/pages/contact-us-online-order

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input name="esc_cf_t" type="text" class="esc--1337">`
- XPath: `input[name="esc_cf_t"]`

**Failure 2:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input type="email" class="esc--1337">`
- XPath: `.esc--1337[type="email"]`

**Failure 3:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input type="text" class="esc--1337">`
- XPath: `.esc--1337[type="text"]:nth-child(3)`

### https://www.preserve.eco/pages/contact-us-marketing-partnerships-donations

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input name="esc_cf_t" type="text" class="esc--1337">`
- XPath: `input[name="esc_cf_t"]`

**Failure 2:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input type="email" class="esc--1337">`
- XPath: `.esc--1337[type="email"]`

**Failure 3:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input type="text" class="esc--1337">`
- XPath: `.esc--1337[type="text"]:nth-child(3)`

### https://www.preserve.eco/pages/contact-us-general-questions-feedback

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input name="esc_cf_t" type="text" class="esc--1337">`
- XPath: `input[name="esc_cf_t"]`

**Failure 2:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input type="email" class="esc--1337">`
- XPath: `.esc--1337[type="email"]`

**Failure 3:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input type="text" class="esc--1337">`
- XPath: `.esc--1337[type="text"]:nth-child(3)`

### https://www.preserve.eco/pages/contact-us-preserve-cutlery-dispenser

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input name="esc_cf_t" type="text" class="esc--1337">`
- XPath: `input[name="esc_cf_t"]`

**Failure 2:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input type="email" class="esc--1337">`
- XPath: `.esc--1337[type="email"]`

**Failure 3:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input type="text" class="esc--1337">`
- XPath: `.esc--1337[type="text"]:nth-child(3)`

### https://www.preserve.eco/collections

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h3 class="h3 section-header__left title"><a href="/collections/products" title="Browse our All Products collection">All Products ›</a></h3>`
- XPath: `.collection-list-item:nth-child(3) > .section-header > h3`

### https://www.preserve.eco/pages/contact-us-recycling

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input name="esc_cf_t" type="text" class="esc--1337">`
- XPath: `input[name="esc_cf_t"]`

**Failure 2:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input type="email" class="esc--1337">`
- XPath: `.esc--1337[type="email"]`

**Failure 3:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input type="text" class="esc--1337">`
- XPath: `.esc--1337[type="text"]:nth-child(3)`

### https://www.preserve.eco/collections/tabletop/products/medium-weight-cutlery-knives-forks-spoons-8-sets

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<ul style="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;" aria-label="Rating icons:  4.5 / 5 star review" role="img" aria-roledescription="figure">`
- XPath: `#looxReviewsFrame`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 2:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 3:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 4:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

**Failure 5:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(5) > img`

*... and 1 more failures for this rule*

#### Rule: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><svg viewBox="0 0 24 24" data-lx-fill="full" role="presentation" aria-hidden="true" class="loox-icon star text-large" style="display: block; width: 1em; height: 1em;"><use href="#looxicons-rating-icon"></use></svg></li>`
- XPath: `#looxReviewsFrame`

### https://www.preserve.eco/collections/toothbrush/products/kids-toothbrush-single

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<ul style="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;" aria-label="Rating icons:  4.5 / 5 star review" role="img" aria-roledescription="figure">`
- XPath: `#looxReviewsFrame`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 2:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 3:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 4:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

**Failure 5:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(5) > img`

#### Rule: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><svg viewBox="0 0 24 24" data-lx-fill="full" role="presentation" aria-hidden="true" class="loox-icon star text-large" style="display: block; width: 1em; height: 1em;"><use href="#looxicons-rating-icon"></use></svg></li>`
- XPath: `#looxReviewsFrame`

### https://www.preserve.eco/collections/no-animal-testing/products/toothbrush-in-bulk-packaging-surprise-colors-3-pack

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<ul style="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;" aria-label="Rating icons:  5 / 5 star review" role="img" aria-roledescription="figure">`
- XPath: `#looxReviewsFrame`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 2:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 3:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 4:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

**Failure 5:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(5) > img`

*... and 1 more failures for this rule*

#### Rule: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><svg viewBox="0 0 24 24" data-lx-fill="full" role="presentation" aria-hidden="true" class="loox-icon star text-large" style="display: block; width: 1em; height: 1em;"><use href="#looxicons-rating-icon"></use></svg></li>`
- XPath: `#looxReviewsFrame`

### https://www.preserve.eco/collections/tableware-and-food-storage/products/everyday-bowl-4-count

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<ul style="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;" aria-label="Rating icons:  5 / 5 star review" role="img" aria-roledescription="figure">`
- XPath: `#looxReviewsFrame`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 2:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 3:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 4:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

**Failure 5:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/dishwasher-icon.PNG?9048842991914706303">`
- XPath: `.tooltip:nth-child(5) > img`

*... and 2 more failures for this rule*

#### Rule: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><svg viewBox="0 0 24 24" data-lx-fill="full" role="presentation" aria-hidden="true" class="loox-icon star text-large" style="display: block; width: 1em; height: 1em;"><use href="#looxicons-rating-icon"></use></svg></li>`
- XPath: `#looxReviewsFrame`

### https://www.preserve.eco/collections/utec-cutting-boards/products/utec-cutting-board-small

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<ul style="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;" aria-label="Rating icons:  0 / 5 star review" role="img" aria-roledescription="figure">`
- XPath: `#looxReviewsFrame`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Links must have discernible text
- HTML: `<a href="#looxReviews"> <div class="loox-rating" data-id="12512378763" data-rating="" data-raters=""></div> </a>`
- XPath: `a[href$="#looxReviews"]`

#### Rule: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><svg viewBox="0 0 24 24" data-lx-fill="empty" role="presentation" aria-hidden="true" class="loox-icon star text-large" style="display: block; width: 1em; height: 1em;"><use href="#looxicons-rating-icon"></use></svg></li>`
- XPath: `#looxReviewsFrame`

### https://www.preserve.eco/collections/toothbrush-subscriptions

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img class="parallax-slider" src="//www.preserve.eco/cdn/shop/collections/header_5522078f-fde3-4d41-b67d-7a7d4e6e9601_1800x.jpg?v=1543922424" style="transform: translate3d(-296px, -78.8125px, 0px); position: absolute; height: 332px; width: 1873px; max-width: none;">`
- XPath: `.parallax-slider`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: All page content should be contained by landmarks
- HTML: `<div class="parallax-mirror" style="visibility: visible; z-index: -100; position: fixed; top: 0px; left: 0px; overflow: hidden; transform: translate3d(0px, 98.5156px, 0px); height: 254px; width: 1280px;">`
- XPath: `.parallax-mirror`

### https://www.preserve.eco/collections/products/products/toothbrush-in-lightweight-pouch-single

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<ul style="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;" aria-label="Rating icons:  5 / 5 star review" role="img" aria-roledescription="figure">`
- XPath: `#looxReviewsFrame`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 2:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 3:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 4:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

**Failure 5:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(5) > img`

#### Rule: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><svg viewBox="0 0 24 24" data-lx-fill="full" role="presentation" aria-hidden="true" class="loox-icon star text-large" style="display: block; width: 1em; height: 1em;"><use href="#looxicons-rating-icon"></use></svg></li>`
- XPath: `#looxReviewsFrame`

### https://www.preserve.eco/collections/toothbrush-subscriptions/products/kids-toothbrush-single

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<ul style="display: inline-flex; margin: unset; padding: unset; text-indent: unset; list-style-type: none; gap: 2px;" aria-label="Rating icons:  4.5 / 5 star review" role="img" aria-roledescription="figure">`
- XPath: `#looxReviewsFrame`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bcorp-icon.PNG?6054642618249289208">`
- XPath: `.tooltip:nth-child(1) > img`

**Failure 2:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/usa-icon.PNG?2807102045077662897">`
- XPath: `.tooltip:nth-child(2) > img`

**Failure 3:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/recycle-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(3) > img`

**Failure 4:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/gimme5-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(4) > img`

**Failure 5:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img src="https://cdn.shopify.com/s/files/1/2372/0029/files/bpafree-icon.PNG?157872935954425060">`
- XPath: `.tooltip:nth-child(5) > img`

#### Rule: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><svg viewBox="0 0 24 24" data-lx-fill="full" role="presentation" aria-hidden="true" class="loox-icon star text-large" style="display: block; width: 1em; height: 1em;"><use href="#looxicons-rating-icon"></use></svg></li>`
- XPath: `#looxReviewsFrame`

### https://www.preserve.eco/collections/cutlery

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img class="parallax-slider" src="//www.preserve.eco/cdn/shop/collections/collect-header3_d7ac84db-cb3e-4fbc-bf53-8affa0db57fd_1800x.jpg?v=1517153822" style="transform: translate3d(0px, -99.8125px, 0px); position: absolute; height: 374px; width: 1280px; max-width: none;">`
- XPath: `.parallax-slider`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: All page content should be contained by landmarks
- HTML: `<div class="parallax-mirror" style="visibility: visible; z-index: -100; position: fixed; top: 0px; left: 0px; overflow: hidden; transform: translate3d(0px, 98.5156px, 0px); height: 254px; width: 1280px;">`
- XPath: `.parallax-mirror`

