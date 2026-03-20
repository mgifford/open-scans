# Scan Report: https://www.access-board.gov/

- Issue: https://github.com/mgifford/open-scans/issues/203
- Submitted by: mgifford
- Scanned at: 2026-03-20T16:01:35.931Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 2.9 minutes
- Total URLs submitted: 20
- Accepted public URLs: 20
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 20 of 20 URLs (100%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 23145 passed, 112 failed, 82 cantTell, 691 inapplicable
- Equal Access outcomes: 54371 passed, 1465 failed (1225 unique, 240 duplicate), 900 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 240

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.access-board.gov/ada/guides/chapter-10-play-areas/) | 14 | 129 | **143** | Chapter 10: Play Areas |
| [View Page](https://www.access-board.gov/aba/guides/chapter-1-using-the-aba-standards/) | 7 | 99 | **106** | Chapter 1: Using the ABA Standards |
| [View Page](https://www.access-board.gov/ada/guides/chapter-10-golf-courses/) | 5 | 90 | **95** | Chapter 10: Golf Courses |
| [View Page](https://www.access-board.gov/ada/guides/chapter-3-floor-and-ground-surfaces/) | 6 | 87 | **93** | Chapter 3: Floor and Ground Surfaces |
| [View Page](https://www.access-board.gov/pvag/ch-v9/) | 6 | 68 | **74** | Chapter V9 |
| [View Page](https://www.access-board.gov/ada/vehicles/subpart-f/) | 5 | 64 | **69** | Subpart F-Intercity Rail Cars and Systems |
| [View Page](https://www.access-board.gov/) | 10 | 55 | **65** | U.S. Access Board - Home |
| [View Page](https://www.access-board.gov/cj/) | 4 | 60 | **64** | Budget Justification |
| [View Page](https://www.access-board.gov/research/prow/interfacing-aps/lessons-learned/) | 4 | 56 | **60** | Lessons Learned from Existing Installations |
| [View Page](https://www.access-board.gov/research/communication/variable-message-signing/vms-legibility/) | 4 | 55 | **59** | VMS Legibility Standards and Research |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-no-duplicate-banner | **20** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-banner) |
| landmark-unique | **20** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| heading-order | **15** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| region | **10** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| aria-allowed-attr | **10** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-attr) |
| skip-link | **8** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/skip-link) |
| empty-heading | **2** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-heading) |
| empty-table-header | **2** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-table-header) |
| aria-allowed-role | **1** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one banner landmark

**HTML Pattern**:
```html
<header class="usa-banner__header">
```

**XPath** (use in browser DevTools):
```
.usa-banner__header
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.usa-banner__header')`
5. The element will be highlighted

**Affected Pages**:
- https://www.access-board.gov/
- https://www.access-board.gov/news/2021/01/04/dot-proposes-rule-to-improve-access-to-vehicles-for-people-with-disabilities/
- https://www.access-board.gov/research/communication/variable-message-signing/vms-legibility/
- https://www.access-board.gov/aba/guides/chapter-1-using-the-aba-standards/
- https://www.access-board.gov/ada/guides/chapter-10-golf-courses/
- *...and 15 more page(s)*

---

#### Pattern 2: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<header class="usa-banner__header">
```

**XPath** (use in browser DevTools):
```
.usa-banner__header
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.usa-banner__header')`
5. The element will be highlighted

**Affected Pages**:
- https://www.access-board.gov/
- https://www.access-board.gov/news/2021/01/04/dot-proposes-rule-to-improve-access-to-vehicles-for-people-with-disabilities/
- https://www.access-board.gov/research/communication/variable-message-signing/vms-legibility/
- https://www.access-board.gov/aba/guides/chapter-1-using-the-aba-standards/
- https://www.access-board.gov/ada/guides/chapter-10-golf-courses/
- *...and 15 more page(s)*

---

#### Pattern 3: Affects 10 page(s) - 10 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**Issue**: Elements must only use supported ARIA attributes

**HTML Pattern**:
```html
<nav role="navigation" class="toc-subnav usa-accordion" aria-multiselectable="true" aria-label="Table of contents subnavigation">
```

**XPath** (use in browser DevTools):
```
.toc-subnav
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.toc-subnav')`
5. The element will be highlighted

**Affected Pages**:
- https://www.access-board.gov/research/communication/variable-message-signing/vms-legibility/
- https://www.access-board.gov/aba/guides/chapter-1-using-the-aba-standards/
- https://www.access-board.gov/ada/guides/chapter-10-golf-courses/
- https://www.access-board.gov/ada/guides/chapter-10-play-areas/
- https://www.access-board.gov/pvag/ch-v9/
- *...and 5 more page(s)*

---

#### Pattern 4: Affects 8 page(s) - 8 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<a class="usa-skipnav" href="#content">Skip to main content</a>
```

**XPath** (use in browser DevTools):
```
.usa-skipnav
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.usa-skipnav')`
5. The element will be highlighted

**Affected Pages**:
- https://www.access-board.gov/news/2021/01/04/dot-proposes-rule-to-improve-access-to-vehicles-for-people-with-disabilities/
- https://www.access-board.gov/webinars/2025/05/01/outdoor-dining-retail-and-community-spaces/
- https://www.access-board.gov/news/2023/07/26/u-s-access-board-holds-town-hall-meeting-at-national-federation-of-the-blind-in-baltimore/
- https://www.access-board.gov/news/2021/11/15/u-s-access-board-hosts-virtual-event-on-architectural-trends-and-social-justice/
- https://www.access-board.gov/webinars/2021/01/07/interior-and-exterior-accessible-routes/
- *...and 3 more page(s)*

---

#### Pattern 5: Affects 8 page(s) - 8 occurrence(s)

**Scanner**: axe
**Rule**: [skip-link](https://dequeuniversity.com/rules/axe/4.11/skip-link?application=playwright)
**Impact**: moderate
**Issue**: The skip-link target should exist and be focusable

**HTML Pattern**:
```html
<a class="usa-skipnav" href="#content">Skip to main content</a>
```

**XPath** (use in browser DevTools):
```
.usa-skipnav
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.usa-skipnav')`
5. The element will be highlighted

**Affected Pages**:
- https://www.access-board.gov/news/2021/01/04/dot-proposes-rule-to-improve-access-to-vehicles-for-people-with-disabilities/
- https://www.access-board.gov/webinars/2025/05/01/outdoor-dining-retail-and-community-spaces/
- https://www.access-board.gov/news/2023/07/26/u-s-access-board-holds-town-hall-meeting-at-national-federation-of-the-blind-in-baltimore/
- https://www.access-board.gov/news/2021/11/15/u-s-access-board-hosts-virtual-event-on-architectural-trends-and-social-justice/
- https://www.access-board.gov/webinars/2021/01/07/interior-and-exterior-accessible-routes/
- *...and 3 more page(s)*

---

#### Pattern 6: Affects 6 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<section role="navigation" aria-label="return to top of page" class="noprint">
```

**XPath** (use in browser DevTools):
```
.noprint > section
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.noprint > section')`
5. The element will be highlighted

**Affected Pages**:
- https://www.access-board.gov/aba/guides/chapter-1-using-the-aba-standards/
- https://www.access-board.gov/ada/guides/chapter-10-golf-courses/
- https://www.access-board.gov/ada/guides/chapter-10-play-areas/
- https://www.access-board.gov/pvag/ch-v9/
- https://www.access-board.gov/ada/guides/chapter-3-floor-and-ground-surfaces/
- *...and 1 more page(s)*

---

#### Pattern 7: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h4>Featured News</h4>
```

**XPath** (use in browser DevTools):
```
.border-top-1.border-accent-cool-darker.margin-bottom-4:nth-child(1) > h4
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.border-top-1.border-accent-cool-darker.margin-bottom-4:nth-child(1) > h4')`
5. The element will be highlighted

**Affected Pages**:
- https://www.access-board.gov/news/2021/01/04/dot-proposes-rule-to-improve-access-to-vehicles-for-people-with-disabilities/
- https://www.access-board.gov/news/2023/07/26/u-s-access-board-holds-town-hall-meeting-at-national-federation-of-the-blind-in-baltimore/
- https://www.access-board.gov/news/2021/11/15/u-s-access-board-hosts-virtual-event-on-architectural-trends-and-social-justice/
- https://www.access-board.gov/news/2022/10/20/u-s-access-board-seeks-financial-program-manager/
- https://www.access-board.gov/news/2022/11/14/administration-for-community-living-s-national-institute-on-disability-independent-living-and-rehabilitation-research-seeks-comments-on-long-range-plan/

---

#### Pattern 8: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor
**Issue**: Headings should not be empty

**HTML Pattern**:
```html
<h3 class="text-italic text-white margin-0 margin-top-1"></h3>
```

**XPath** (use in browser DevTools):
```
.margin-0.margin-top-1.text-white
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.margin-0.margin-top-1.text-white')`
5. The element will be highlighted

**Affected Pages**:
- https://www.access-board.gov/aba/guides/chapter-1-using-the-aba-standards/
- https://www.access-board.gov/pvag/ch-v9/

---

#### Pattern 9: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h3 class="text-italic text-white margin-0 margin-top-1"></h3>
```

**XPath** (use in browser DevTools):
```
.margin-0.margin-top-1.text-white
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.margin-0.margin-top-1.text-white')`
5. The element will be highlighted

**Affected Pages**:
- https://www.access-board.gov/aba/guides/chapter-1-using-the-aba-standards/
- https://www.access-board.gov/pvag/ch-v9/

---

#### Pattern 10: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<aside id="toc" class="desktop:grid-col-3 margin-bottom-2 padding-right-2 border-right-width-2">
```

**XPath** (use in browser DevTools):
```
#toc
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#toc')`
5. The element will be highlighted

**Affected Pages**:
- https://www.access-board.gov/aba/guides/chapter-1-using-the-aba-standards/
- https://www.access-board.gov/ada/guides/chapter-3-floor-and-ground-surfaces/

---

#### Pattern 11: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h3 id="continuing-education-recognition-available">Continuing Education Recognition Available</h3>
```

**XPath** (use in browser DevTools):
```
#continuing-education-recognition-available
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#continuing-education-recognition-available')`
5. The element will be highlighted

**Affected Pages**:
- https://www.access-board.gov/webinars/2025/05/01/outdoor-dining-retail-and-community-spaces/
- https://www.access-board.gov/webinars/2021/01/07/interior-and-exterior-accessible-routes/

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://www.access-board.gov/ | https://www.access-board.gov/ | OK | 200 | no | 8655 | 10 | 0 | 55 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, landmark-no-duplicate-banner, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, aria_role_valid, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading |
| https://www.access-board.gov/news/2021/01/04/dot-proposes-rule-to-improve-access-to-vehicles-for-people-with-disabilities/ | https://www.access-board.gov/news/2021/01/04/dot-proposes-rule-to-improve-access-to-vehicles-for-people-with-disabilities/ | OK | 200 | no | 6523 | 5 | 0 | 44 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region, skip-link |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading |
| https://www.access-board.gov/research/communication/variable-message-signing/vms-legibility/ | https://www.access-board.gov/research/communication/variable-message-signing/vms-legibility/ | OK | 200 | no | 7363 | 4 | 0 | 55 | 0 | 22 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, heading-order, landmark-no-duplicate-banner, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading, text_sensory_misuse |
| https://www.access-board.gov/aba/guides/chapter-1-using-the-aba-standards/ | https://www.access-board.gov/aba/guides/chapter-1-using-the-aba-standards/ | OK | 200 | no | 11542 | 7 | 0 | 99 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, empty-heading, heading-order, landmark-no-duplicate-banner, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_accessiblename_exists, aria_attribute_valid, aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, heading_content_exists, heading_markup_misuse, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading, text_quoted_correctly, text_sensory_misuse |
| https://www.access-board.gov/ada/guides/chapter-10-golf-courses/ | https://www.access-board.gov/ada/guides/chapter-10-golf-courses/ | OK | 200 | no | 9307 | 5 | 0 | 90 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, heading-order, landmark-no-duplicate-banner, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, blockquote_cite_exists, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, list_markup_review, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading |
| https://www.access-board.gov/webinars/2025/05/01/outdoor-dining-retail-and-community-spaces/ | https://www.access-board.gov/webinars/2025/05/01/outdoor-dining-retail-and-community-spaces/ | OK | 200 | no | 6835 | 6 | 0 | 43 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-table-header, heading-order, landmark-no-duplicate-banner, landmark-unique, region, skip-link |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_accessiblename_exists, aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading |
| https://www.access-board.gov/cj/ | https://www.access-board.gov/cj/ | OK | 200 | no | 15147 | 4 | 0 | 60 | 0 | 41 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, table_headers_related, target_spacing_sufficient, text_block_heading, text_sensory_misuse |
| https://www.access-board.gov/ada/guides/chapter-10-play-areas/ | https://www.access-board.gov/ada/guides/chapter-10-play-areas/ | OK | 200 | no | 15728 | 14 | 0 | 129 | 0 | 44 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, empty-table-header, heading-order, landmark-no-duplicate-banner, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_accessiblename_exists, aria_attribute_valid, aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, heading_markup_misuse, input_label_visible, list_markup_review, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading, text_sensory_misuse |
| https://www.access-board.gov/news/2023/07/26/u-s-access-board-holds-town-hall-meeting-at-national-federation-of-the-blind-in-baltimore/ | https://www.access-board.gov/news/2023/07/26/u-s-access-board-holds-town-hall-meeting-at-national-federation-of-the-blind-in-baltimore/ | OK | 200 | no | 7490 | 5 | 0 | 49 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region, skip-link |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading, text_sensory_misuse |
| https://www.access-board.gov/pvag/ch-v9/ | https://www.access-board.gov/pvag/ch-v9/ | OK | 200 | no | 8174 | 6 | 0 | 68 | 0 | 19 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, empty-heading, heading-order, landmark-no-duplicate-banner, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_accessiblename_exists, aria_attribute_valid, aria_banner_label_unique, aria_child_valid, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, heading_content_exists, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading, text_sensory_misuse |
| https://www.access-board.gov/contact/ | https://www.access-board.gov/contact/ | OK | 200 | no | 6755 | 3 | 0 | 46 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading |
| https://www.access-board.gov/news/2021/11/15/u-s-access-board-hosts-virtual-event-on-architectural-trends-and-social-justice/ | https://www.access-board.gov/news/2021/11/15/u-s-access-board-hosts-virtual-event-on-architectural-trends-and-social-justice/ | OK | 200 | no | 6389 | 5 | 0 | 44 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region, skip-link |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading, text_sensory_misuse |
| https://www.access-board.gov/ada/guides/chapter-3-floor-and-ground-surfaces/ | https://www.access-board.gov/ada/guides/chapter-3-floor-and-ground-surfaces/ | OK | 200 | no | 8425 | 6 | 0 | 87 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, heading-order, landmark-no-duplicate-banner, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, heading_markup_misuse, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading, text_sensory_misuse |
| https://www.access-board.gov/research/prow/literature-roundabout-signalization/summary-conclusions/ | https://www.access-board.gov/research/prow/literature-roundabout-signalization/summary-conclusions/ | OK | 200 | no | 7627 | 3 | 0 | 55 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, landmark-no-duplicate-banner, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_banner_label_unique, aria_child_valid, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading |
| https://www.access-board.gov/webinars/2021/01/07/interior-and-exterior-accessible-routes/ | https://www.access-board.gov/webinars/2021/01/07/interior-and-exterior-accessible-routes/ | OK | 200 | no | 7520 | 5 | 0 | 42 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region, skip-link |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading |
| https://www.access-board.gov/ada/vehicles/subpart-f/ | https://www.access-board.gov/ada/vehicles/subpart-f/ | OK | 200 | no | 7856 | 5 | 0 | 64 | 0 | 27 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, heading-order, landmark-no-duplicate-banner, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, list_markup_review, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading, text_sensory_misuse |
| https://www.access-board.gov/research/prow/interfacing-aps/lessons-learned/ | https://www.access-board.gov/research/prow/interfacing-aps/lessons-learned/ | OK | 200 | no | 6672 | 4 | 0 | 56 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, heading-order, landmark-no-duplicate-banner, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_banner_label_unique, aria_child_valid, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading, text_sensory_misuse |
| https://www.access-board.gov/advisory-committee-reports/passenger-vessels/pvaac-report-adaag-coast-guard/ | https://www.access-board.gov/advisory-committee-reports/passenger-vessels/pvaac-report-adaag-coast-guard/ | OK | 200 | no | 10842 | 5 | 0 | 52 | 0 | 45 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, landmark-no-duplicate-banner, landmark-unique, region, skip-link |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, heading_markup_misuse, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, table_headers_related, target_spacing_sufficient, text_block_heading, text_quoted_correctly, text_sensory_misuse |
| https://www.access-board.gov/news/2022/10/20/u-s-access-board-seeks-financial-program-manager/ | https://www.access-board.gov/news/2022/10/20/u-s-access-board-seeks-financial-program-manager/ | OK | 200 | no | 8871 | 5 | 0 | 44 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region, skip-link |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading |
| https://www.access-board.gov/news/2022/11/14/administration-for-community-living-s-national-institute-on-disability-independent-living-and-rehabilitation-research-seeks-comments-on-long-range-plan/ | https://www.access-board.gov/news/2022/11/14/administration-for-community-living-s-national-institute-on-disability-independent-living-and-rehabilitation-research-seeks-comments-on-long-range-plan/ | OK | 200 | no | 6212 | 5 | 0 | 43 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-no-duplicate-banner, landmark-unique, region, skip-link |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_banner_label_unique, aria_complementary_labelled, aria_content_in_landmark, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, target_spacing_sufficient, text_block_heading |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://www.access-board.gov/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a href="/ada/guides/animatio..." class="swiper-slide swiper-..." style="background-image: ur..." aria-labelledby="title-accessible-bat..." title="1 of 8" role="group" aria-label="1 / 8">`
- XPath: `a[title="1 of 8"]`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a href="/ada/guides/animatio..." class="swiper-slide swiper-..." style="background-image: ur..." aria-labelledby="title-accessible-toi..." title="2 of 8" role="group" aria-label="2 / 8">`
- XPath: `a[aria-labelledby="title-accessible-toilet-rooms"]`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a href="/ada/guides/animatio..." class="swiper-slide swiper-..." style="background-image: ur..." aria-labelledby="title-maneuvering-at..." title="3 of 8" role="group" aria-label="3 / 8">`
- XPath: `a[aria-labelledby="title-maneuvering-at-doors"]`

**Failure 4:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a href="/ada/guides/animatio..." class="swiper-slide swiper-..." style="background-image: ur..." aria-labelledby="title-parking-and-pa..." title="4 of 8" role="group" aria-label="4 / 8">`
- XPath: `a[title="4 of 8"]`

**Failure 5:**
- Message: ARIA role should be appropriate for the element
- HTML: `<a href="/ada/guides/animatio..." class="swiper-slide swiper-..." style="background-image: ur..." aria-labelledby="title-protruding-obj..." title="5 of 8" role="group" aria-label="5 / 8">`
- XPath: `a[aria-labelledby="title-protruding-objects"]`

*... and 3 more failures for this rule*

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

### https://www.access-board.gov/news/2021/01/04/dot-proposes-rule-to-improve-access-to-vehicles-for-people-with-disabilities/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Featured News</h4>`
- XPath: `.border-top-1.border-accent-cool-darker.margin-bottom-4:nth-child(1) > h4`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

#### Rule: [skip-link](https://dequeuniversity.com/rules/axe/4.11/skip-link?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: The skip-link target should exist and be focusable
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

### https://www.access-board.gov/research/communication/variable-message-signing/vms-legibility/

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<nav role="navigation" class="toc-subnav usa-accordion" aria-multiselectable="true" aria-label="Table of contents subnavigation">`
- XPath: `.toc-subnav`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 id="character-variables" style="display: inline-block;">Character Variables</h3>`
- XPath: `#character-variables`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

### https://www.access-board.gov/aba/guides/chapter-1-using-the-aba-standards/

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<nav role="navigation" class="toc-subnav usa-accordion" aria-multiselectable="true" aria-label="Table of contents subnavigation">`
- XPath: `.toc-subnav`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3 class="text-italic text-white margin-0 margin-top-1"></h3>`
- XPath: `.margin-0.margin-top-1.text-white`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="text-italic text-white margin-0 margin-top-1"></h3>`
- XPath: `.margin-0.margin-top-1.text-white`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="toc" class="desktop:grid-col-3 margin-bottom-2 padding-right-2 border-right-width-2">`
- XPath: `#toc`

**Failure 3:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section role="navigation" aria-label="return to top of page" class="noprint">`
- XPath: `.noprint > section`

### https://www.access-board.gov/ada/guides/chapter-10-golf-courses/

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<nav role="navigation" class="toc-subnav usa-accordion" aria-multiselectable="true" aria-label="Table of contents subnavigation">`
- XPath: `.toc-subnav`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 id="accessible-golf-courses" style="display: inline-block;">Accessible Golf Courses</h3>`
- XPath: `#accessible-golf-courses`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section role="navigation" aria-label="return to top of page" class="noprint">`
- XPath: `.noprint > section`

### https://www.access-board.gov/webinars/2025/05/01/outdoor-dining-retail-and-community-spaces/

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Table header text should not be empty
- HTML: `<th>&nbsp;</th>`
- XPath: `th:nth-child(1)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 id="continuing-education-recognition-available">Continuing Education Recognition Available</h3>`
- XPath: `#continuing-education-recognition-available`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

#### Rule: [skip-link](https://dequeuniversity.com/rules/axe/4.11/skip-link?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: The skip-link target should exist and be focusable
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

### https://www.access-board.gov/cj/

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav id="nav1" role="navigation" class="usa-nav">`
- XPath: `#nav1`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="section-title" class="bg-primary-darker usa-content font-serif-md padding-y-2">   <div class="grid-container text-center maxw-desktop">     <h1 class="text-normal text-white margin-0">                About the U.S. Access Board            </h1>        </div> </div>`
- XPath: `#section-title`

### https://www.access-board.gov/ada/guides/chapter-10-play-areas/

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<nav role="navigation" class="toc-subnav usa-accordion" aria-multiselectable="true" aria-label="Table of contents subnavigation">`
- XPath: `.toc-subnav`

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Table header text should not be empty
- HTML: `<th></th>`
- XPath: `.usa-table:nth-child(419) > thead > tr > th:nth-child(1)`

**Failure 2:**
- Message: Table header text should not be empty
- HTML: `<th></th>`
- XPath: `.usa-table:nth-child(420) > thead > tr > th:nth-child(1)`

**Failure 3:**
- Message: Table header text should not be empty
- HTML: `<th></th>`
- XPath: `.usa-table:nth-child(421) > thead > tr > th:nth-child(1)`

**Failure 4:**
- Message: Table header text should not be empty
- HTML: `<th></th>`
- XPath: `.usa-table:nth-child(422) > thead > tr > th:nth-child(1)`

**Failure 5:**
- Message: Table header text should not be empty
- HTML: `<th></th>`
- XPath: `.usa-table:nth-child(423) > thead > tr > th:nth-child(1)`

*... and 4 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4 id="a-summary-of-accessibility-guidelines-for-play-areas" style="display: inline-block;">A Summary of Accessibility Guidelines for Play Areas</h4>`
- XPath: `#a-summary-of-accessibility-guidelines-for-play-areas`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section role="navigation" aria-label="return to top of page" class="noprint">`
- XPath: `.noprint > section`

### https://www.access-board.gov/news/2023/07/26/u-s-access-board-holds-town-hall-meeting-at-national-federation-of-the-blind-in-baltimore/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Featured News</h4>`
- XPath: `.border-top-1.border-accent-cool-darker.margin-bottom-4:nth-child(1) > h4`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

#### Rule: [skip-link](https://dequeuniversity.com/rules/axe/4.11/skip-link?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: The skip-link target should exist and be focusable
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

### https://www.access-board.gov/pvag/ch-v9/

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<nav role="navigation" class="toc-subnav usa-accordion" aria-multiselectable="true" aria-label="Table of contents subnavigation">`
- XPath: `.toc-subnav`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h3 class="text-italic text-white margin-0 margin-top-1"></h3>`
- XPath: `.text-italic`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 class="text-italic text-white margin-0 margin-top-1"></h3>`
- XPath: `.text-italic`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section role="navigation" aria-label="return to top of page" class="noprint">`
- XPath: `.noprint > section`

### https://www.access-board.gov/contact/

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div id="section-title" class="bg-primary-darker usa-content font-serif-md padding-y-2">   <div class="grid-container text-center maxw-desktop">     <h1 class="text-normal text-white margin-0">                Contact Us            </h1>        </div> </div>`
- XPath: `#section-title`

### https://www.access-board.gov/news/2021/11/15/u-s-access-board-hosts-virtual-event-on-architectural-trends-and-social-justice/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Featured News</h4>`
- XPath: `.border-top-1.border-accent-cool-darker.margin-bottom-4:nth-child(1) > h4`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

#### Rule: [skip-link](https://dequeuniversity.com/rules/axe/4.11/skip-link?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: The skip-link target should exist and be focusable
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

### https://www.access-board.gov/ada/guides/chapter-3-floor-and-ground-surfaces/

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<nav role="navigation" class="toc-subnav usa-accordion" aria-multiselectable="true" aria-label="Table of contents subnavigation">`
- XPath: `.toc-subnav`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 id="firmness-stability-and-slip-resistance" style="display: inline-block;">Firmness, Stability, and Slip Resistance</h3>`
- XPath: `#firmness-stability-and-slip-resistance`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="toc" class="desktop:grid-col-3 margin-bottom-2 padding-right-2 border-right-width-2">`
- XPath: `#toc`

**Failure 3:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section role="navigation" aria-label="return to top of page" class="noprint">`
- XPath: `.noprint > section`

### https://www.access-board.gov/research/prow/literature-roundabout-signalization/summary-conclusions/

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<nav role="navigation" class="toc-subnav usa-accordion" aria-multiselectable="true" aria-label="Table of contents subnavigation">`
- XPath: `.toc-subnav`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

### https://www.access-board.gov/webinars/2021/01/07/interior-and-exterior-accessible-routes/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 id="continuing-education-recognition-available">Continuing Education Recognition Available</h3>`
- XPath: `#continuing-education-recognition-available`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

#### Rule: [skip-link](https://dequeuniversity.com/rules/axe/4.11/skip-link?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: The skip-link target should exist and be focusable
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

### https://www.access-board.gov/ada/vehicles/subpart-f/

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<nav role="navigation" class="toc-subnav usa-accordion" aria-multiselectable="true" aria-label="Table of contents subnavigation">`
- XPath: `.toc-subnav`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 id="1192111-general" style="display: inline-block;">§1192.111 General.</h3>`
- XPath: `#\31 192111-general`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<section role="navigation" aria-label="return to top of page" class="noprint">`
- XPath: `.noprint > section`

### https://www.access-board.gov/research/prow/interfacing-aps/lessons-learned/

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<nav role="navigation" class="toc-subnav usa-accordion" aria-multiselectable="true" aria-label="Table of contents subnavigation">`
- XPath: `.toc-subnav`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4 id="apsconflict-monitor-compatibility" style="display: inline-block;">APS/Conflict Monitor Compatibility</h4>`
- XPath: `#apsconflict-monitor-compatibility`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

### https://www.access-board.gov/advisory-committee-reports/passenger-vessels/pvaac-report-adaag-coast-guard/

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<nav role="navigation" class="toc-subnav usa-accordion" aria-multiselectable="true" aria-label="Table of contents subnavigation">`
- XPath: `.toc-subnav`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

#### Rule: [skip-link](https://dequeuniversity.com/rules/axe/4.11/skip-link?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: The skip-link target should exist and be focusable
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

### https://www.access-board.gov/news/2022/10/20/u-s-access-board-seeks-financial-program-manager/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Featured News</h4>`
- XPath: `.border-top-1.border-accent-cool-darker.margin-bottom-4:nth-child(1) > h4`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

#### Rule: [skip-link](https://dequeuniversity.com/rules/axe/4.11/skip-link?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: The skip-link target should exist and be focusable
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

### https://www.access-board.gov/news/2022/11/14/administration-for-community-living-s-national-institute-on-disability-independent-living-and-rehabilitation-research-seeks-comments-on-long-range-plan/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>Featured News</h4>`
- XPath: `.border-top-1.border-accent-cool-darker.margin-bottom-4:nth-child(1) > h4`

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="usa-banner__header">`
- XPath: `.usa-banner__header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

#### Rule: [skip-link](https://dequeuniversity.com/rules/axe/4.11/skip-link?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: The skip-link target should exist and be focusable
- HTML: `<a class="usa-skipnav" href="#content">Skip to main content</a>`
- XPath: `.usa-skipnav`

