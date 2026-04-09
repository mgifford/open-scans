# Scan Report: Accessibility scans, If.se, prioritized pages

- Issue: https://github.com/mgifford/open-scans/issues/252
- Submitted by: solros44-a11y
- Scanned at: 2026-04-09T16:49:45.853Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 4.9 minutes
- Total URLs submitted: 16
- Accepted public URLs: 16
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 9 of 16 URLs (56%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 24528 passed, 48 failed, 392 cantTell, 573 inapplicable
- Equal Access outcomes: 80678 passed, 1479 failed (1363 unique, 116 duplicate), 1216 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 116

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.if.se/privat/forsakringar/bilforsakring) | 1 | 157 | **158** | Bilförsäkring med högt betyg \| Se ditt pris & teckna direkt - If |
| [View Page](https://www.if.se/privat/forsakringar/hemforsakring/villaforsakring) | 3 | 132 | **135** | Villaförsäkring \| Försäkra huset och sakerna \| Se ditt pris - If |
| [View Page](https://www.if.se/privat/forsakringar/hemforsakring/hyresratt) | 5 | 123 | **128** | Hemförsäkring hyresrätt \| Få pris för bostad du hyr - If |
| [View Page](https://www.if.se/privat/forsakringar/hemforsakring/bostadsrattsforsakring) | 6 | 122 | **128** | Bostadsrättsförsäkring \| Se pris & försäkra din bostadsrätt - If |
| [View Page](https://www.if.se/privat/forsakringar/personforsakring/barnforsakring) | 4 | 122 | **126** | Barnförsäkring \| Försäkring för barn vid sjukdom och olycksfall - If |
| [View Page](https://www.if.se/privat/forsakringar/personforsakring/livforsakring) | 4 | 95 | **99** | Teckna livförsäkring \| Ekonomisk trygghet för din familj - If |
| [View Page](https://www.if.se/privat/kundservice) | 6 | 84 | **90** | Kontakta If kundservice \| Få hjälp med försäkringsärenden - If |
| [View Page](https://www.if.se/privat/vid-skada) | 2 | 85 | **87** | Skadeanmälan \| Anmäl skada online dygnet runt - If |
| [View Page](https://www.if.se/privat/forsakringar) | 2 | 77 | **79** | Försäkringar \| Hitta rätt försäkring för dig och familjen - If |
| [View Page](https://www.if.se/privat/kundservice/guider/saga-upp-forsakringen) | 2 | 65 | **67** | Säga upp försäkring – Så gör du för att avsluta en försäkring - If |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-unique | **16** of 16 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| heading-order | **8** of 16 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| aria-allowed-role | **7** of 16 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| aria-allowed-attr | **6** of 16 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-attr) |
| color-contrast | **4** of 16 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| image-alt | **1** of 16 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 7 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>
```

**XPath** (use in browser DevTools):
```
#e120fb54edca436c91db201a81d67bbe > .weight-medium
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#e120fb54edca436c91db201a81d67bbe > .weight-medium')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat/forsakringar/hemforsakring
- https://www.if.se/privat/forsakringar/personforsakring/livforsakring
- https://www.if.se/privat/forsakringar/hemforsakring/hyresratt
- https://www.if.se/privat/forsakringar/hemforsakring/bostadsrattsforsakring
- https://www.if.se/privat/kundservice
- *...and 2 more page(s)*

---

#### Pattern 2: Affects 6 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**Issue**: Elements must only use supported ARIA attributes

**HTML Pattern**:
```html
<fieldset class="if border-none" role="group" aria-required="true">
```

**XPath** (use in browser DevTools):
```
fieldset
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('fieldset')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat/forsakringar/personforsakring/livforsakring
- https://www.if.se/privat/forsakringar/personforsakring/barnforsakring
- https://www.if.se/privat/kundservice
- https://www.if.se/privat/kundservice/guider/betalningsguide
- https://www.if.se/privat/kundservice/guider/saga-upp-forsakringen
- *...and 1 more page(s)*

---

#### Pattern 3: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor
**Issue**: ARIA role should be appropriate for the element

**HTML Pattern**:
```html
<img class="if size-100p object-cover" loading="lazy" alt="Uthyrningsförsäkring" src="https://v.imgi.no/vr3eurtjjv-MOODBOARD/2042" srcset="https://v.imgi.no/vr3eurtjjv-MOODBOARD/300 300w, https://v.imgi.no/vr3eurtjjv-MOODBOARD/660 660w" sizes="(max-width: 300px) 300px, 660px" role="presentation">
```

**XPath** (use in browser DevTools):
```
img[alt="Uthyrningsförsäkring"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('img[alt="Uthyrningsförsäkring"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat/forsakringar/hemforsakring/hyresratt
- https://www.if.se/privat/forsakringar/hemforsakring/bostadsrattsforsakring
- https://www.if.se/privat/forsakringar/hemforsakring/villaforsakring

---

#### Pattern 4: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor
**Issue**: ARIA role should be appropriate for the element

**HTML Pattern**:
```html
<img class="if size-100p object-..." loading="lazy" alt="Försäkringar för mam..." src="https://v.imgi.no/2d..." srcset="https://v.imgi.no/2d..." sizes="(max-width: 450px) 4..." role="presentation">
```

**XPath** (use in browser DevTools):
```
.image > .size-100p.object-cover[loading="lazy"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.image > .size-100p.object-cover[loading="lazy"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat
- https://www.if.se/privat/forsakringar

---

#### Pattern 5: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<span class="super-title">Försäkringsguiden</span>
```

**XPath** (use in browser DevTools):
```
.super-title
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.super-title')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat/forsakringar/personforsakring/livforsakring
- https://www.if.se/privat/forsakringar/personforsakring/barnforsakring

---

#### Pattern 6: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor
**Issue**: ARIA role should be appropriate for the element

**HTML Pattern**:
```html
<img class="if size-100p object-..." loading="lazy" alt="Försäkring för speci..." src="https://v.imgi.no/5z..." srcset="https://v.imgi.no/5z..." sizes="(max-width: 300px) 3..." role="presentation">
```

**XPath** (use in browser DevTools):
```
.op-addon.narrow.focusindication:nth-child(2) > .op-addon-media-size.card-media > .object-cover.size-100p[role="presentation"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.op-addon.narrow.focusindication:nth-child(2) > .op-addon-media-size.card-media > .object-cover.size-100p[role="presentation"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat/forsakringar/hemforsakring/hyresratt
- https://www.if.se/privat/forsakringar/hemforsakring/bostadsrattsforsakring

---

#### Pattern 7: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/privat/vid-skada/hus-hem" class="if button tonal icon-right">
```

**XPath** (use in browser DevTools):
```
#skadehandelse > .section-content.op > .icon-right.tonal[href$="hus-hem"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#skadehandelse > .section-content.op > .icon-right.tonal[href$="hus-hem"]')`
5. The element will be highlighted

**Affected Pages**:
- https://www.if.se/privat/forsakringar/hemforsakring/hyresratt
- https://www.if.se/privat/forsakringar/hemforsakring/bostadsrattsforsakring

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.if.se/privat | https://www.if.se/privat | OK | 200 | no | 20509 | 2 | 0 | 61 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_child_valid, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, aria_role_valid, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, img_alt_decorative, input_label_visible, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://www.if.se/privat/forsakringar | https://www.if.se/privat/forsakringar | OK | 200 | no | 19330 | 2 | 0 | 77 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_child_valid, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, aria_role_valid, element_tabbable_unobscured, element_tabbable_visible, img_alt_decorative, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://www.if.se/privat/forsakringar/hemforsakring | https://www.if.se/privat/forsakringar/hemforsakring | OK | 200 | no | 15959 | 2 | 0 | 58 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.if.se/privat/forsakringar/personforsakring/livforsakring | https://www.if.se/privat/forsakringar/personforsakring/livforsakring | OK | 200 | no | 20826 | 4 | 0 | 95 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, color-contrast, heading-order, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_deprecated, aria_attribute_redundant, aria_attribute_valid, aria_child_valid, aria_complementary_labelled, aria_content_in_landmark, aria_eventhandler_role_valid, aria_keyboard_handler_exists, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, form_label_unique, label_name_visible, list_markup_review, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient |
| https://www.if.se/privat/forsakringar/bilforsakring | https://www.if.se/privat/forsakringar/bilforsakring | OK | 200 | no | 19209 | 1 | 0 | 157 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_deprecated, aria_attribute_valid, aria_child_valid, aria_complementary_labelled, aria_content_in_landmark, aria_keyboard_handler_exists, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.if.se/privat/forsakringar/personforsakring/barnforsakring | https://www.if.se/privat/forsakringar/personforsakring/barnforsakring | OK | 200 | no | 22987 | 4 | 0 | 122 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, color-contrast, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_deprecated, aria_attribute_redundant, aria_attribute_valid, aria_child_valid, aria_complementary_labelled, aria_content_in_landmark, aria_eventhandler_role_valid, aria_keyboard_handler_exists, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_checkboxes_grouped, label_name_visible, list_markup_review, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.if.se/privat/forsakringar/hemforsakring/hyresratt | https://www.if.se/privat/forsakringar/hemforsakring/hyresratt | OK | 200 | no | 20613 | 5 | 0 | 123 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast, heading-order, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_deprecated, aria_attribute_valid, aria_child_valid, aria_complementary_labelled, aria_content_in_landmark, aria_keyboard_handler_exists, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, aria_role_valid, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_decorative, input_label_exists, label_name_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.if.se/privat/forsakringar/hemforsakring/bostadsrattsforsakring | https://www.if.se/privat/forsakringar/hemforsakring/bostadsrattsforsakring | OK | 200 | no | 20185 | 6 | 0 | 122 | 0 | 9 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast, heading-order, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_deprecated, aria_attribute_valid, aria_child_valid, aria_complementary_labelled, aria_content_in_landmark, aria_keyboard_handler_exists, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, aria_role_valid, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, figure_label_exists, img_alt_decorative, input_label_exists, label_name_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.if.se/privat/forsakringar/hemforsakring/villaforsakring | https://www.if.se/privat/forsakringar/hemforsakring/villaforsakring | OK | 200 | no | 19614 | 3 | 0 | 132 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_child_valid, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, aria_role_valid, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, img_alt_decorative, input_label_exists, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://www.if.se/privat/kundservice | https://www.if.se/privat/kundservice | OK | 200 | no | 17935 | 6 | 0 | 84 | 0 | 20 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, heading-order, image-alt, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_attribute_valid, aria_child_valid, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, aria_role_valid, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, img_alt_decorative, img_alt_valid, input_label_visible, label_name_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.if.se/privat/kundservice/fragor-svar | https://www.if.se/privat/kundservice/fragor-svar | OK | 200 | no | 14613 | 2 | 0 | 40 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.if.se/privat/kundservice/guider/betalningsguide | https://www.if.se/privat/kundservice/guider/betalningsguide | OK | 200 | no | 17585 | 3 | 0 | 50 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, heading-order, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_attribute_valid, aria_child_valid, aria_content_in_landmark, aria_id_unique, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, label_name_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.if.se/privat/kundservice/guider/saga-upp-forsakringen | https://www.if.se/privat/kundservice/guider/saga-upp-forsakringen | OK | 200 | no | 20340 | 2 | 0 | 65 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_attribute_valid, aria_child_valid, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, label_name_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.if.se/privat/vid-skada | https://www.if.se/privat/vid-skada | OK | 200 | no | 16575 | 2 | 0 | 85 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_redundant, aria_attribute_valid, aria_child_valid, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, label_name_visible, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading |
| https://www.if.se/privat/erbjudanden | https://www.if.se/privat/erbjudanden | OK | 200 | no | 16014 | 2 | 0 | 55 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_deprecated, aria_child_valid, aria_complementary_labelled, aria_content_in_landmark, aria_keyboard_handler_exists, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, aria_role_valid, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, img_alt_decorative, label_name_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_sensory_misuse |
| https://www.if.se/privat/sokresultat?q=f%C3%B6rs%C3%A4kring | https://www.if.se/privat/sokresultat?q=f%C3%B6rs%C3%A4kring | OK | 200 | no | 13758 | 2 | 0 | 37 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, label_content_exists, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://www.if.se/privat

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-..." loading="lazy" alt="Försäkringar för mam..." src="https://v.imgi.no/2d..." srcset="https://v.imgi.no/2d..." sizes="(max-width: 450px) 4..." role="presentation">`
- XPath: `.image > .size-100p.object-cover[loading="lazy"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="fcd605e770d040ddbe9de80ae07da475">`
- XPath: `#fcd605e770d040ddbe9de80ae07da475`

### https://www.if.se/privat/forsakringar

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-..." loading="lazy" alt="Försäkringar för mam..." src="https://v.imgi.no/2d..." srcset="https://v.imgi.no/2d..." sizes="(max-width: 450px) 4..." role="presentation">`
- XPath: `.size-100p`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="bc829ce680d746beb02c03ba7bcc2e25">`
- XPath: `#bc829ce680d746beb02c03ba7bcc2e25`

### https://www.if.se/privat/forsakringar/hemforsakring

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `#e120fb54edca436c91db201a81d67bbe > .weight-medium`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="e120fb54edca436c91db201a81d67bbe">`
- XPath: `#e120fb54edca436c91db201a81d67bbe`

### https://www.if.se/privat/forsakringar/personforsakring/livforsakring

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must only use supported ARIA attributes
- HTML: `<fieldset class="if border-none" role="group" aria-required="true">`
- XPath: `fieldset`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="super-title">Försäkringsguiden</span>`
- XPath: `.super-title`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `#\34 2e41a5adabc417aa7f1488d556b751d > .weight-medium`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="42e41a5adabc417aa7f1488d556b751d">`
- XPath: `#\34 2e41a5adabc417aa7f1488d556b751d`

### https://www.if.se/privat/forsakringar/bilforsakring

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="41d308f6f9314091b058a2e9847ff3e2">`
- XPath: `#\34 1d308f6f9314091b058a2e9847ff3e2`

### https://www.if.se/privat/forsakringar/personforsakring/barnforsakring

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must only use supported ARIA attributes
- HTML: `<fieldset class="if border-none" role="group" aria-required="true">`
- XPath: `fieldset`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/privat/vid-skada/personskador" class="if button tonal icon-right">`
- XPath: `#skadehandelse > .section-content.op > .icon-right.tonal[href$="personskador"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<span class="super-title">Försäkringsguiden</span>`
- XPath: `.super-title`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="1204e70ed99e475c8a6d4da817504e7d">`
- XPath: `#\31 204e70ed99e475c8a6d4da817504e7d`

### https://www.if.se/privat/forsakringar/hemforsakring/hyresratt

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-cover" loading="lazy" alt="Uthyrningsförsäkring" src="https://v.imgi.no/vr3eurtjjv-MOODBOARD/2042" srcset="https://v.imgi.no/vr3eurtjjv-MOODBOARD/300 300w, https://v.imgi.no/vr3eurtjjv-MOODBOARD/660 660w" sizes="(max-width: 300px) 300px, 660px" role="presentation">`
- XPath: `img[alt="Uthyrningsförsäkring"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-..." loading="lazy" alt="Försäkring för speci..." src="https://v.imgi.no/5z..." srcset="https://v.imgi.no/5z..." sizes="(max-width: 300px) 3..." role="presentation">`
- XPath: `.op-addon.narrow.focusindication:nth-child(2) > .op-addon-media-size.card-media > .object-cover.size-100p[role="presentation"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/privat/vid-skada/hus-hem" class="if button tonal icon-right">`
- XPath: `#skadehandelse > .section-content.op > .icon-right.tonal[href$="hus-hem"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `#e96797c89d824c0dbadf2046abd32d44 > .weight-medium`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="e96797c89d824c0dbadf2046abd32d44">`
- XPath: `#e96797c89d824c0dbadf2046abd32d44`

### https://www.if.se/privat/forsakringar/hemforsakring/bostadsrattsforsakring

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-cover" loading="lazy" alt="Bostadsrättstillägg" src="https://v.imgi.no/ancaqcvgz6-MOODBOARD/2042" srcset="https://v.imgi.no/ancaqcvgz6-MOODBOARD/300 300w, https://v.imgi.no/ancaqcvgz6-MOODBOARD/660 660w" sizes="(max-width: 300px) 300px, 660px" role="presentation">`
- XPath: `img[alt="Bostadsrättstillägg"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-cover" loading="lazy" alt="Uthyrningsförsäkring" src="https://v.imgi.no/vr3eurtjjv-MOODBOARD/2042" srcset="https://v.imgi.no/vr3eurtjjv-MOODBOARD/300 300w, https://v.imgi.no/vr3eurtjjv-MOODBOARD/660 660w" sizes="(max-width: 300px) 300px, 660px" role="presentation">`
- XPath: `img[alt="Uthyrningsförsäkring"]`

**Failure 3:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-..." loading="lazy" alt="Försäkring för speci..." src="https://v.imgi.no/5z..." srcset="https://v.imgi.no/5z..." sizes="(max-width: 300px) 3..." role="presentation">`
- XPath: `.op-addon.narrow.focusindication:nth-child(3) > .op-addon-media-size.card-media > .object-cover.size-100p[role="presentation"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/privat/vid-skada/hus-hem" class="if button tonal icon-right">`
- XPath: `#skadehandelse > .section-content.op > .icon-right.tonal[href$="hus-hem"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `#d797baaba15e4ca4b5d2e20ff95ade56 > .weight-medium`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="d797baaba15e4ca4b5d2e20ff95ade56">`
- XPath: `#d797baaba15e4ca4b5d2e20ff95ade56`

### https://www.if.se/privat/forsakringar/hemforsakring/villaforsakring

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-cover" loading="lazy" alt="Uthyrningsförsäkring" src="https://v.imgi.no/vr3eurtjjv-MOODBOARD/2042" srcset="https://v.imgi.no/vr3eurtjjv-MOODBOARD/300 300w, https://v.imgi.no/vr3eurtjjv-MOODBOARD/660 660w" sizes="(max-width: 300px) 300px, 660px" role="presentation">`
- XPath: `img[alt="Uthyrningsförsäkring"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-cover" loading="lazy" alt="Specialförsäkring" src="https://v.imgi.no/67sumetdpr-MOODBOARD/2042" srcset="https://v.imgi.no/67sumetdpr-MOODBOARD/300 300w, https://v.imgi.no/67sumetdpr-MOODBOARD/660 660w" sizes="(max-width: 300px) 300px, 660px" role="presentation">`
- XPath: `img[alt="Specialförsäkring"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="558a08f7acec4b0cac8ab006d7310597">`
- XPath: `#\35 58a08f7acec4b0cac8ab006d7310597`

### https://www.if.se/privat/kundservice

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must only use supported ARIA attributes
- HTML: `<fieldset class="if border-none" role="group" aria-required="true">`
- XPath: `fieldset`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-..." loading="lazy" alt="I appen har du allti..." src="https://v.imgi.no/yl..." srcset="https://v.imgi.no/yl..." sizes="(max-width: 450px) 4..." role="presentation">`
- XPath: `.reverse > .gap-0.section-content.op > .image > .size-100p.object-cover[role="presentation"]`

**Failure 2:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-..." loading="lazy" alt="Vill du mejla oss?" src="https://v.imgi.no/at..." srcset="https://v.imgi.no/at..." sizes="(max-width: 450px) 4..." role="presentation">`
- XPath: `img[alt="Vill du mejla oss?"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `#\31 ae2cfe03e96473e89d9f1d2d3a0fa2e > .weight-medium`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Images must have alternative text
- HTML: `<img src="https://v.imgi.no/2q4jmeqgyt-BOARDLARGE/1500" loading="eager" srcset="https://v.imgi.no/2q4jmeqgyt-BOARDLARGE/1000 1000w, https://v.imgi.no/2q4jmeqgyt-BOARDLARGE/1500 1500w" sizes="(min-width: 1240px) 1160px, 95vw" class="border-radius-12">`
- XPath: `.border-radius-12`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="1ae2cfe03e96473e89d9f1d2d3a0fa2e">`
- XPath: `#\31 ae2cfe03e96473e89d9f1d2d3a0fa2e`

### https://www.if.se/privat/kundservice/fragor-svar

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `#dee07a21f91f48bead73d175cfca7c22 > .weight-medium`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="dee07a21f91f48bead73d175cfca7c22">`
- XPath: `#dee07a21f91f48bead73d175cfca7c22`

### https://www.if.se/privat/kundservice/guider/betalningsguide

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must only use supported ARIA attributes
- HTML: `<fieldset class="if border-none" role="group" aria-required="true">`
- XPath: `fieldset`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h3>Hur ändrar jag betalningssätt på min försäkring?</h3>`
- XPath: `#\30 6d9cd704c4d46af941f5d328e1c1308 > .faq-title[itemprop="name"] > h3`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="5ee1ca1666e74e1cb43e9868a8b820aa">`
- XPath: `#\35 ee1ca1666e74e1cb43e9868a8b820aa`

### https://www.if.se/privat/kundservice/guider/saga-upp-forsakringen

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must only use supported ARIA attributes
- HTML: `<fieldset class="if border-none" role="group" aria-required="true">`
- XPath: `fieldset`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="e23b1a2606b54b7b902b867560416172">`
- XPath: `#e23b1a2606b54b7b902b867560416172`

### https://www.if.se/privat/vid-skada

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-09
- Message: Elements must only use supported ARIA attributes
- HTML: `<fieldset class="if border-none" role="group" aria-required="true">`
- XPath: `fieldset`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="040b7f8062bb4efab3addf4e70723227">`
- XPath: `#\30 40b7f8062bb4efab3addf4e70723227`

### https://www.if.se/privat/erbjudanden

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-09
- Message: ARIA role should be appropriate for the element
- HTML: `<img class="if size-100p object-..." loading="lazy" alt="Rabatt när du hyr bi..." src="https://v.imgi.no/bs..." srcset="https://v.imgi.no/bs..." sizes="(max-width: 450px) 4..." role="presentation">`
- XPath: `.object-cover.size-100p[role="presentation"]`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="1ca2eace533f4eada2d3b5bb3d1aacae">`
- XPath: `#\31 ca2eace533f4eada2d3b5bb3d1aacae`

### https://www.if.se/privat/sokresultat?q=f%C3%B6rs%C3%A4kring

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Heading levels should only increase by one
- HTML: `<h4 class="if typography ui medium weight-medium">Populära försäkringar</h4>`
- XPath: `#\31 fa222febd104737bc70130a52c2bf5c > .weight-medium`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-09
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="if flex-column gap-16" id="1fa222febd104737bc70130a52c2bf5c">`
- XPath: `#\31 fa222febd104737bc70130a52c2bf5c`

