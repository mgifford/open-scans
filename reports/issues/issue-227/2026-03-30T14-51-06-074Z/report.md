# Scan Report: MD Labor Accessbility Scan

- Issue: https://github.com/mgifford/open-scans/issues/227
- Submitted by: emilyan0810
- Scanned at: 2026-03-30T14:50:12.522Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 10.8 minutes
- Total URLs submitted: 86
- Accepted public URLs: 86
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 49 of 86 URLs (57%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 37 of 86 URLs (43%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 80337 passed, 298 failed, 824 cantTell, 3813 inapplicable
- Equal Access outcomes: 193946 passed, 4286 failed (3910 unique, 376 duplicate), 3751 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 379

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://labor.maryland.gov/unemployment-insurance/data/initial-claims-by-county.shtml) | 3 | 654 | **657** | Initial Unemployment Insurance Claims by County - Division of Unemployment Insurance - Maryland Department of Labor |
| [View Page](https://labor.maryland.gov/employment/) | 4 | 99 | **103** | Division of Workforce Development and Adult Learning - Maryland Department of Labor |
| [View Page](https://labor.maryland.gov/lmi/) | 3 | 94 | **97** | Labor Market Information Resources for Jobseekers and Employers - Division of Workforce Development and Adult Learning |
| [View Page](https://labor.maryland.gov/county/) | 3 | 92 | **95** | Maryland's American Job Centers - Division of Workforce Development and Adult Learning |
| [View Page](https://labor.maryland.gov/license/) | 4 | 83 | **87** | Division of Occupational and Professional Licensing - Maryland Department of Labor |
| [View Page](https://labor.maryland.gov/license/index.shtml) | 4 | 83 | **87** | Division of Occupational and Professional Licensing - Maryland Department of Labor |
| [View Page](https://labor.maryland.gov/labor/wages/) | 6 | 80 | **86** | Employment Standards Service-Wage and Hour Information - Division of Labor and Industry |
| [View Page](https://labor.maryland.gov/employment/warn.shtml) | 3 | 79 | **82** | Work Adjustment and Retraining Notification (WARN) and Other Dislocation Notices - Division of Workforce Development and Adult Learning |
| [View Page](https://labor.maryland.gov/employment/busservices.shtml) | 7 | 73 | **80** | Maryland Business - Division of Workforce Development and Adult Learning |
| [View Page](https://labor.maryland.gov/labor/wages/empm.shtml) | 5 | 75 | **80** | Employment of Minors (Work Permit) - Employment Standards Service (ESS) - Division of Labor and Industry |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| region | **86** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| landmark-unique | **35** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| heading-order | **13** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| list | **6** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/list) |
| image-redundant-alt | **3** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-redundant-alt) |
| aria-prohibited-attr | **2** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-prohibited-attr) |
| button-name | **2** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |
| listitem | **1** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/listitem) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 49 page(s) - 49 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>
```

**XPath** (use in browser DevTools):
```
.sr-only-focusable.show-on-focus.sr-only:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.sr-only-focusable.show-on-focus.sr-only:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://labor.maryland.gov/
- https://labor.maryland.gov/aboutdllr/
- https://labor.maryland.gov/aboutdllr/mdbusexp.shtml
- https://labor.maryland.gov/aboutdllr/mpia.shtml
- https://labor.maryland.gov/aboutdllr/privacystatement.shtml
- *...and 44 more page(s)*

---

#### Pattern 2: Affects 49 page(s) - 49 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">
        <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">
    </a>
```

**XPath** (use in browser DevTools):
```
.mdgov-entNav__logo
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.mdgov-entNav__logo')`
5. The element will be highlighted

**Affected Pages**:
- https://labor.maryland.gov/
- https://labor.maryland.gov/aboutdllr/
- https://labor.maryland.gov/aboutdllr/mdbusexp.shtml
- https://labor.maryland.gov/aboutdllr/mpia.shtml
- https://labor.maryland.gov/aboutdllr/privacystatement.shtml
- *...and 44 more page(s)*

---

#### Pattern 3: Affects 49 page(s) - 49 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<ul class="mdgov-entNavList">
```

**XPath** (use in browser DevTools):
```
.mdgov-entNavList
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.mdgov-entNavList')`
5. The element will be highlighted

**Affected Pages**:
- https://labor.maryland.gov/
- https://labor.maryland.gov/aboutdllr/
- https://labor.maryland.gov/aboutdllr/mdbusexp.shtml
- https://labor.maryland.gov/aboutdllr/mpia.shtml
- https://labor.maryland.gov/aboutdllr/privacystatement.shtml
- *...and 44 more page(s)*

---

#### Pattern 4: Affects 37 page(s) - 37 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>
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
- https://labor.maryland.gov/employment/1099ginsert.shtml
- https://labor.maryland.gov/employment/claimfaq.shtml
- https://labor.maryland.gov/employment/contributions.shtml
- https://labor.maryland.gov/employment/danpcafaqs.shtml
- https://labor.maryland.gov/employment/maryland-unemployment-insurance-complaints.shtml
- *...and 32 more page(s)*

---

#### Pattern 5: Affects 37 page(s) - 37 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div contact="">
```

**XPath** (use in browser DevTools):
```
div[contact=""]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('div[contact=""]')`
5. The element will be highlighted

**Affected Pages**:
- https://labor.maryland.gov/employment/1099ginsert.shtml
- https://labor.maryland.gov/employment/claimfaq.shtml
- https://labor.maryland.gov/employment/contributions.shtml
- https://labor.maryland.gov/employment/danpcafaqs.shtml
- https://labor.maryland.gov/employment/maryland-unemployment-insurance-complaints.shtml
- *...and 32 more page(s)*

---

#### Pattern 6: Affects 35 page(s) - 35 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<aside id="sidenav" class="sidenav">
```

**XPath** (use in browser DevTools):
```
#sidenav
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#sidenav')`
5. The element will be highlighted

**Affected Pages**:
- https://labor.maryland.gov/employment/1099ginsert.shtml
- https://labor.maryland.gov/employment/claimfaq.shtml
- https://labor.maryland.gov/employment/contributions.shtml
- https://labor.maryland.gov/employment/danpcafaqs.shtml
- https://labor.maryland.gov/employment/maryland-unemployment-insurance-complaints.shtml
- *...and 30 more page(s)*

---

#### Pattern 7: Affects 7 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="col-md-12 col-xl-3 p-3 p-lg-4 bg-gray">
```

**XPath** (use in browser DevTools):
```
.col-md-12
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.col-md-12')`
5. The element will be highlighted

**Affected Pages**:
- https://labor.maryland.gov/
- https://labor.maryland.gov/aboutdllr/
- https://labor.maryland.gov/employment/
- https://labor.maryland.gov/labor/
- https://labor.maryland.gov/license/
- *...and 2 more page(s)*

---

#### Pattern 8: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**Issue**: <ul> and <ol> must only directly contain <li>, <script> or <template> elements

**HTML Pattern**:
```html
<ul>
```

**XPath** (use in browser DevTools):
```
ul:nth-child(20)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('ul:nth-child(20)')`
5. The element will be highlighted

**Affected Pages**:
- https://labor.maryland.gov/employment/busservices.shtml
- https://labor.maryland.gov/employment/new-employers.shtml
- https://labor.maryland.gov/employment/uiaswreq.shtml
- https://labor.maryland.gov/employment/uirex.shtml
- https://labor.maryland.gov/labor/wages/

---

#### Pattern 9: Affects 2 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical
**Issue**: Buttons must have discernible text

**HTML Pattern**:
```html
<button class="ytmVideoInfoLink ytmVideoInfoChannelAvatar"><img alt="thumbnail-image" class="ytCoreImageHost ytmVideoInfoChannelLogo ytCoreImageFillParentHeight ytCoreImageFillParentWidth ytCoreImageContentModeScaleAspectFill"></button>
```

**XPath** (use in browser DevTools):
```
p:nth-child(5) > iframe
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('p:nth-child(5) > iframe')`
5. The element will be highlighted

**Affected Pages**:
- https://labor.maryland.gov/employment/worksharing/
- https://labor.maryland.gov/labor/wages/empm.shtml

---

#### Pattern 10: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h4 class="usa-accordion__heading">
    <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a1">Direct job contact activities </button></h4>
```

**XPath** (use in browser DevTools):
```
.usa-accordion__heading:nth-child(1)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.usa-accordion__heading:nth-child(1)')`
5. The element will be highlighted

**Affected Pages**:
- https://labor.maryland.gov/employment/uiaswreq.shtml
- https://labor.maryland.gov/employment/uirex.shtml

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://labor.maryland.gov/ | https://labor.maryland.gov/ | OK | 200 | no | 8633 | 4 | 0 | 57 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://labor.maryland.gov/aboutdllr/ | https://labor.maryland.gov/aboutdllr/ | OK | 200 | no | 7087 | 4 | 0 | 63 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/aboutdllr/mdbusexp.shtml | https://labor.maryland.gov/aboutdllr/mdbusexp.shtml | OK | 200 | no | 6551 | 3 | 0 | 49 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, img_alt_redundant, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/aboutdllr/mpia.shtml | https://labor.maryland.gov/aboutdllr/mpia.shtml | OK | 200 | no | 6604 | 3 | 0 | 47 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/aboutdllr/privacystatement.shtml | https://labor.maryland.gov/aboutdllr/privacystatement.shtml | OK | 200 | no | 6796 | 3 | 0 | 48 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_quoted_correctly, text_sensory_misuse |
| https://labor.maryland.gov/aboutdllr/workgroups.shtml | https://labor.maryland.gov/aboutdllr/workgroups.shtml | OK | 200 | no | 6823 | 3 | 0 | 47 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/adultliteracy/ | https://labor.maryland.gov/adultliteracy/ | OK | 200 | no | 6601 | 3 | 0 | 44 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/adultliteracy/ged.shtml | https://labor.maryland.gov/adultliteracy/ged.shtml | OK | 200 | no | 6840 | 3 | 0 | 45 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/contactinfo/ | https://labor.maryland.gov/contactinfo/ | OK | 200 | no | 6827 | 3 | 0 | 50 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_keyboard_handler_exists, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/county/ | https://labor.maryland.gov/county/ | OK | 200 | no | 7403 | 3 | 0 | 92 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/earn/ | https://labor.maryland.gov/earn/ | OK | 200 | no | 6771 | 4 | 0 | 65 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/ | https://labor.maryland.gov/employment/ | OK | 200 | no | 8034 | 4 | 0 | 99 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://labor.maryland.gov/employment/1099ginsert.shtml | https://labor.maryland.gov/unemployment-insurance/technical-support/1099G-tax-form.shtml | OK | 200 | yes | 6637 | 3 | 0 | 14 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, heading_markup_misuse, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/appr/ | https://labor.maryland.gov/employment/appr/ | OK | 200 | no | 9535 | 3 | 0 | 43 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/busservices.shtml | https://labor.maryland.gov/employment/busservices.shtml | OK | 200 | no | 7366 | 7 | 0 | 73 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, image-redundant-alt, list, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, img_alt_redundant, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, target_spacing_sufficient, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://labor.maryland.gov/employment/claimfaq.shtml | https://labor.maryland.gov/unemployment-insurance/claimants/ | OK | 200 | yes | 7899 | 3 | 0 | 19 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/contributions.shtml | https://labor.maryland.gov/unemployment-insurance/contact.shtml | OK | 200 | yes | 7039 | 3 | 0 | 15 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/danpcafaqs.shtml | https://labor.maryland.gov/unemployment-insurance/employer-agent/assessment-notice-civil-action-letter.shtml | OK | 200 | yes | 6765 | 3 | 0 | 15 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, heading_markup_misuse, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/maryland-unemployment-insurance-complaints.shtml | https://labor.maryland.gov/unemployment-insurance/contact.shtml | OK | 200 | yes | 6717 | 3 | 0 | 15 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/new-employers.shtml | https://labor.maryland.gov/unemployment-insurance/employer-agent/new-employer-get-started.shtml | OK | 200 | yes | 7034 | 4 | 0 | 17 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, list, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/new-filers.shtml | https://labor.maryland.gov/unemployment-insurance/claimants/ | OK | 200 | yes | 7044 | 3 | 0 | 19 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/officenum.shtml | https://labor.maryland.gov/unemployment-insurance/contact.shtml | OK | 200 | yes | 6665 | 3 | 0 | 15 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/reentry.shtml | https://labor.maryland.gov/employment/reentry.shtml | OK | 200 | no | 7094 | 4 | 0 | 64 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/train/ | https://labor.maryland.gov/employment/train/ | OK | 200 | no | 7332 | 4 | 0 | 61 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uiaccessibility.shtml | https://labor.maryland.gov/unemployment-insurance/claimants/people-with-disabilities-accessibility.shtml | OK | 200 | yes | 6759 | 3 | 0 | 14 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uiassessmentvideo.shtml | https://labor.maryland.gov/unemployment-insurance/employer-agent/assessment-notice-civil-action-letter.shtml | OK | 200 | yes | 6664 | 3 | 0 | 15 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, heading_markup_misuse, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uiaswreq.shtml | https://labor.maryland.gov/unemployment-insurance/claimants/job-search.shtml | OK | 200 | yes | 7115 | 5 | 0 | 16 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique, list, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uibeaconemployerfaqs.shtml | https://labor.maryland.gov/unemployment-insurance/technical-support/employers.shtml | OK | 200 | yes | 6847 | 3 | 0 | 14 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uibeaconthirdpartyfaqs.shtml | https://labor.maryland.gov/unemployment-insurance/technical-support/third-party-agents.shtml | OK | 200 | yes | 7770 | 3 | 0 | 14 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uibeaconvideo.shtml | https://labor.maryland.gov/unemployment-insurance/technical-support/claimants.shtml | OK | 200 | yes | 6894 | 3 | 0 | 15 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uibenefits.shtml | https://labor.maryland.gov/unemployment-insurance/claimants/ | OK | 200 | yes | 7008 | 3 | 0 | 19 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uibpc.shtml | https://www.labor.maryland.gov/unemployment-insurance/claimants/audits-and-overpayments/ | OK | 200 | yes | 7008 | 3 | 0 | 20 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, blockquote_cite_exists, element_attribute_deprecated, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_quoted_correctly, text_sensory_misuse |
| https://labor.maryland.gov/employment/uiclmtvideo.shtml | https://labor.maryland.gov/unemployment-insurance/claimants/audits-and-overpayments/ | OK | 200 | yes | 7928 | 3 | 0 | 20 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, blockquote_cite_exists, element_attribute_deprecated, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_quoted_correctly, text_sensory_misuse |
| https://labor.maryland.gov/employment/uicounty.shtml | https://labor.maryland.gov/unemployment-insurance/data/initial-claims-by-county.shtml | OK | 200 | yes | 37823 | 3 | 0 | 654 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_descendant_valid, aria_keyboard_handler_exists, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uidata.shtml | https://labor.maryland.gov/unemployment-insurance/data/ | OK | 200 | yes | 7182 | 4 | 0 | 18 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_quoted_correctly, text_sensory_misuse |
| https://labor.maryland.gov/employment/uidhr.shtml | https://labor.maryland.gov/unemployment-insurance/claimants/other-benefit-programs.shtml | OK | 200 | yes | 6283 | 3 | 0 | 15 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uiempvideo.shtml | https://labor.maryland.gov/unemployment-insurance/employer-agent/reporting-systems.shtml | OK | 200 | yes | 6570 | 3 | 0 | 16 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uifraudstats.shtml | https://labor.maryland.gov/unemployment-insurance/fraud-and-identity/ | OK | 200 | yes | 6861 | 3 | 0 | 17 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uiissues.shtml | https://labor.maryland.gov/unemployment-insurance/claimants/do-i-qualify.shtml | OK | 200 | yes | 6885 | 4 | 0 | 15 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, heading_markup_misuse, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uirex.shtml | https://labor.maryland.gov/unemployment-insurance/claimants/job-search.shtml | OK | 200 | yes | 10121 | 5 | 0 | 16 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique, list, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uisides.shtml | https://labor.maryland.gov/unemployment-insurance/employer-agent/reporting-systems.shtml | OK | 200 | yes | 6743 | 3 | 0 | 16 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uistopfraud.shtml | https://labor.maryland.gov/unemployment-insurance/fraud-and-identity/ | OK | 200 | yes | 7212 | 3 | 0 | 17 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uitaxapps.shtml | https://labor.maryland.gov/unemployment-insurance/technical-support/employers.shtml | OK | 200 | yes | 6796 | 3 | 0 | 14 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uitaxexpratefaqs.shtml | https://labor.maryland.gov/unemployment-insurance/employer-agent/tax-rate.shtml | OK | 200 | yes | 6563 | 4 | 0 | 15 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uitaxfaqs.shtml | https://labor.maryland.gov/unemployment-insurance/employer-agent/ | OK | 200 | yes | 6322 | 3 | 0 | 14 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uitaxpaymentplans.shtml | https://labor.maryland.gov/unemployment-insurance/employer-agent/payment-plans.shtml | OK | 200 | yes | 6374 | 3 | 0 | 14 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uitaxpub.shtml | https://labor.maryland.gov/unemployment-insurance/employer-agent/requirements-and-resources.shtml | OK | 200 | yes | 6165 | 3 | 0 | 14 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uitaxresources.shtml | https://labor.maryland.gov/unemployment-insurance/employer-agent/requirements-and-resources.shtml | OK | 200 | yes | 6267 | 3 | 0 | 14 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/uivideomwe.shtml | https://labor.maryland.gov/unemployment-insurance/technical-support/ | OK | 200 | yes | 6477 | 4 | 0 | 15 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/unemployment.shtml | https://labor.maryland.gov/unemployment-insurance/ | OK | 200 | yes | 7072 | 2 | 0 | 15 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/veteranservices.shtml | https://labor.maryland.gov/employment/veteranservices.shtml | OK | 200 | no | 7541 | 3 | 0 | 65 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/warn.shtml | https://labor.maryland.gov/employment/warn.shtml | OK | 200 | no | 8665 | 3 | 0 | 79 | 0 | 166 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_descendant_valid, aria_keyboard_handler_exists, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, table_headers_exists, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/wioasuccess.shtml | https://labor.maryland.gov/employment/wioasuccess.shtml | OK | 200 | no | 7408 | 4 | 0 | 66 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/employment/worksharing/ | https://labor.maryland.gov/unemployment-insurance/employer-agent/work-sharing-avoiding-layoffs.shtml | OK | 200 | yes | 9137 | 5 | 0 | 21 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, frame_src_valid, heading_markup_misuse, list_markup_review, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/finance/ | https://labor.maryland.gov/finance/ | OK | 200 | no | 6929 | 3 | 0 | 45 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/finance/consumers/idtheft.shtml | https://labor.maryland.gov/finance/consumers/idtheft.shtml | OK | 200 | no | 6641 | 3 | 0 | 38 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/finance/consumers/mortforeinfo.shtml | https://labor.maryland.gov/finance/consumers/mortforeinfo.shtml | OK | 200 | no | 6940 | 9 | 0 | 39 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list, listitem, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/forms/oandpcomplaint.shtml | https://labor.maryland.gov/forms/oandpcomplaint.shtml | OK | 200 | no | 6533 | 3 | 0 | 48 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_keyboard_handler_exists, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/labor/ | https://labor.maryland.gov/labor/ | OK | 200 | no | 7146 | 4 | 0 | 48 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://labor.maryland.gov/labor/wages/ | https://labor.maryland.gov/labor/wages/ | OK | 200 | no | 8407 | 6 | 0 | 80 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, image-redundant-alt, list, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_child_valid, aria_content_in_landmark, aria_descendant_valid, aria_keyboard_handler_exists, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, img_alt_redundant, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://labor.maryland.gov/labor/wages/empm.shtml | https://labor.maryland.gov/labor/wages/empm.shtml | OK | 200 | no | 8644 | 5 | 0 | 75 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/labor/wages/wagehrfacts.shtml | https://labor.maryland.gov/labor/wages/wagehrfacts.shtml | OK | 200 | no | 7454 | 3 | 0 | 69 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/license/ | https://labor.maryland.gov/license/ | OK | 200 | no | 7092 | 4 | 0 | 83 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://labor.maryland.gov/license/boardvol.shtml | https://labor.maryland.gov/license/boardvol.shtml | OK | 200 | no | 6787 | 3 | 0 | 35 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/license/index.shtml | https://labor.maryland.gov/license/index.shtml | OK | 200 | no | 7201 | 4 | 0 | 83 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://labor.maryland.gov/license/law/ | https://labor.maryland.gov/license/law/ | OK | 200 | no | 6930 | 3 | 0 | 33 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/license/min/ | https://labor.maryland.gov/license/min/ | OK | 200 | no | 6443 | 3 | 0 | 33 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/license/news/ | https://labor.maryland.gov/license/news/ | OK | 200 | no | 6778 | 3 | 0 | 33 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/license/oplic.shtml | https://labor.maryland.gov/license/oplic.shtml | OK | 200 | no | 7844 | 3 | 0 | 66 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/license/opvetlic.shtml | https://labor.maryland.gov/license/opvetlic.shtml | OK | 200 | no | 6968 | 3 | 0 | 41 | 0 | 27 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/license/reahi/ | https://labor.maryland.gov/license/reahi/ | OK | 200 | no | 6918 | 5 | 0 | 55 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, image-redundant-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, heading_markup_misuse, img_alt_redundant, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, target_spacing_sufficient, text_block_heading, text_contrast_sufficient, text_quoted_correctly, text_sensory_misuse |
| https://labor.maryland.gov/lmi/ | https://labor.maryland.gov/lmi/ | OK | 200 | no | 11337 | 3 | 0 | 94 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/oeope/posters.shtml | https://labor.maryland.gov/oeope/posters.shtml | OK | 200 | no | 7314 | 3 | 0 | 55 | 0 | 46 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/osbra/ | https://labor.maryland.gov/osbra/ | OK | 200 | no | 6446 | 3 | 0 | 43 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/personnel/dllremp.shtml | https://labor.maryland.gov/personnel/dllremp.shtml | OK | 200 | no | 6681 | 3 | 0 | 48 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/pq/ | https://labor.maryland.gov/pq/ | OK | 200 | no | 6713 | 3 | 0 | 34 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/racing/ | https://labor.maryland.gov/racing/ | OK | 200 | no | 7611 | 4 | 0 | 44 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/regs/ | https://labor.maryland.gov/regs/ | OK | 200 | no | 6553 | 3 | 0 | 43 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/spanish/ | https://labor.maryland.gov/spanish/ | OK | 200 | no | 7003 | 3 | 0 | 49 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_quoted_correctly, text_sensory_misuse |
| https://labor.maryland.gov/spanish/desempleo.shtml | https://www.labor.maryland.gov/unemployment-insurance/index-es.shtml | OK | 200 | yes | 7228 | 2 | 0 | 15 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/uiappeals/ | https://labor.maryland.gov/uiappeals/ | OK | 200 | no | 6756 | 3 | 0 | 44 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/uim/employer/uimempfaqs.shtml | https://labor.maryland.gov/unemployment-insurance/technical-support/employers.shtml | OK | 200 | yes | 6899 | 3 | 0 | 14 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, element_tabbable_role_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/whatsnews/ | https://labor.maryland.gov/whatsnews/ | OK | 200 | no | 6982 | 3 | 0 | 43 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_keyboard_handler_exists, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/whatsnews/laborannouncesfundingsupportcareerpathways.shtml | https://labor.maryland.gov/whatsnews/laborannouncesfundingsupportcareerpathways.shtml | OK | 200 | no | 6644 | 3 | 0 | 42 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/whatsnews/laborlaunchesrecoveryfriendlyworkplacepilot.shtml | https://labor.maryland.gov/whatsnews/laborlaunchesrecoveryfriendlyworkplacepilot.shtml | OK | 200 | no | 6585 | 3 | 0 | 42 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |
| https://labor.maryland.gov/whatsnews/mlr.shtml | https://labor.maryland.gov/whatsnews/mlr.shtml | OK | 200 | no | 6536 | 3 | 0 | 43 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_id_unique, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, text_block_heading, text_sensory_misuse |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://labor.maryland.gov/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

**Failure 4:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div class="col-md-12 col-xl-3 p-3 p-lg-4 bg-gray">`
- XPath: `.col-md-12`

### https://labor.maryland.gov/aboutdllr/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

**Failure 4:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div class="col-md-12 col-xl-3 p-3 p-lg-4 bg-gray">`
- XPath: `.col-md-12`

### https://labor.maryland.gov/aboutdllr/mdbusexp.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/aboutdllr/mpia.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/aboutdllr/privacystatement.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/aboutdllr/workgroups.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/adultliteracy/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/adultliteracy/ged.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/contactinfo/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/county/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/earn/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3 class="card-title"> EARN Maryland Job Training Programs Near You</h3>`
- XPath: `.col-sm-12.col-md-4.col-lg-6 > .card.card-shadowed.h-100 > .card-body > div > .card-title`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/employment/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

**Failure 4:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div class="col-md-12 col-xl-3 p-3 p-lg-4 bg-gray">`
- XPath: `.col-md-12`

### https://labor.maryland.gov/employment/1099ginsert.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/appr/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/employment/busservices.shtml

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3 class="mb-2">EARN Maryland</h3>`
- XPath: `.active.carousel-item[href$="earn/"] > .carousel-caption.bg-secondary.text-white > .mb-2`

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: Alternative text of images should not be repeated as text
- HTML: `<img class="d-block w-100" src="/images/wdearnslide.png" alt="earn maryland">`
- XPath: `img[src$="wdearnslide.png"]`

**Failure 2:**
- First identified: 2026-03-30
- Message: Alternative text of images should not be repeated as text
- HTML: `<img src="/images/worksmart2.png" alt="Worksmart">`
- XPath: `img[src$="worksmart2.png"]`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `ul:nth-child(20)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/employment/claimfaq.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/contributions.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/danpcafaqs.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/maryland-unemployment-insurance-complaints.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/new-employers.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `#mdgovMain > ul:nth-child(5)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/new-filers.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/officenum.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/reentry.shtml

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3>Providing Job Resources to Returning Citizens</h3>`
- XPath: `#mdgovMain > h3`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/employment/train/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3>Job Seekers</h3>`
- XPath: `h3:nth-child(5)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/employment/uiaccessibility.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uiassessmentvideo.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uiaswreq.shtml

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h4 class="usa-accordion__heading">     <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a1">Direct job contact activities </button></h4>`
- XPath: `.usa-accordion__heading:nth-child(1)`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `ul:nth-child(25)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uibeaconemployerfaqs.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uibeaconthirdpartyfaqs.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uibeaconvideo.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uibenefits.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uibpc.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uiclmtvideo.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uicounty.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uidata.shtml

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h4 class="usa-accordion__heading">     <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a1">Archive of prior weeks - 2026</button></h4>`
- XPath: `#mdgovMain > .usa-accordion--multiselectable.usa-accordion[data-allow-multiple=""] > .usa-accordion__heading`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uidhr.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uiempvideo.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uifraudstats.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uiissues.shtml

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h4 class="usa-process-list__heading">You must be unemployed through no fault of your own</h4>`
- XPath: `.usa-process-list__item:nth-child(1) > .usa-process-list__heading`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uirex.shtml

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h4 class="usa-accordion__heading">     <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a1">Direct job contact activities </button></h4>`
- XPath: `.usa-accordion__heading:nth-child(1)`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `ul:nth-child(25)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uisides.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uistopfraud.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uitaxapps.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uitaxexpratefaqs.shtml

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h4 class="usa-accordion__heading">     <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a5">How do I calculate gross wages? </button></h4>`
- XPath: `.usa-accordion--multiselectable.usa-accordion[data-allow-multiple=""]:nth-child(10) > .usa-accordion__heading:nth-child(1)`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uitaxfaqs.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uitaxpaymentplans.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uitaxpub.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uitaxresources.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/uivideomwe.shtml

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h4 class="usa-accordion__heading">     <button type="button" class="usa-accordion__button" aria-expanded="false" aria-controls="m-a1">Using the Maryland Unemployment Insurance Portal (BEACON)</button></h4>`
- XPath: `.usa-accordion__heading:nth-child(1)`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/unemployment.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/employment/veteranservices.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/employment/warn.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/employment/wioasuccess.shtml

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3><a href="wioanewsletters.shtml">Stay up-to-date on the latest Partner Activities with the Benchmarks of Success Newsletter!</a></h3>`
- XPath: `#mdgovMain > h3`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/employment/worksharing/

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-small-mode" tabindex="" id="movie_player" data-version="/s/player/8e54e4ea/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `p:nth-child(4) > iframe`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-small-mode" tabindex="" id="movie_player" data-version="/s/player/8e54e4ea/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `p:nth-child(5) > iframe`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/finance/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/finance/consumers/idtheft.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/finance/consumers/mortforeinfo.shtml

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul> <strong><li><a href="#1">Contact Your Mortgage Servicer</a></li>  <li><a href="#2"> Know Your Rights</a></li>  <li> <a href="#3"> Help is Available</a> </li>  <li> <a href="#4"> Beware of Scams</a> </li>  <li> <a href="#5"> Additional Resources</a></li> </strong>   </ul>`
- XPath: `ul:nth-child(4)`

#### Rule: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><a href="#1">Contact Your Mortgage Servicer</a></li>`
- XPath: `strong > li:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-30
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><a href="#2"> Know Your Rights</a></li>`
- XPath: `strong > li:nth-child(2)`

**Failure 3:**
- First identified: 2026-03-30
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li> <a href="#3"> Help is Available</a> </li>`
- XPath: `strong > li:nth-child(3)`

**Failure 4:**
- First identified: 2026-03-30
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li> <a href="#4"> Beware of Scams</a> </li>`
- XPath: `strong > li:nth-child(4)`

**Failure 5:**
- First identified: 2026-03-30
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li> <a href="#5"> Additional Resources</a></li>`
- XPath: `strong > li:nth-child(5)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/forms/oandpcomplaint.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/labor/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

**Failure 4:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div class="col-md-12 col-xl-3 p-3 p-lg-4 bg-gray">`
- XPath: `.col-md-12`

### https://labor.maryland.gov/labor/wages/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3 class="mb-2">We're Hiring!</h3>`
- XPath: `.mb-2`

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: Alternative text of images should not be repeated as text
- HTML: `<img class="d-block w-100" src="/images/dliwearehiringslide.png" alt="We're Hiring!">`
- XPath: `.d-block`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `ul:nth-child(20)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/labor/wages/empm.shtml

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode" tabindex="" id="movie_player" data-version="/s/player/f85ea353/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\36 87607477`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode" tabindex="" id="movie_player" data-version="/s/player/8e54e4ea/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\33 59307296`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/labor/wages/wagehrfacts.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/license/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

**Failure 4:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div class="col-md-12 col-xl-3 p-3 p-lg-4 bg-gray">`
- XPath: `.col-md-12`

### https://labor.maryland.gov/license/boardvol.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/license/index.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

**Failure 4:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div class="col-md-12 col-xl-3 p-3 p-lg-4 bg-gray">`
- XPath: `.col-md-12`

### https://labor.maryland.gov/license/law/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/license/min/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/license/news/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/license/oplic.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/license/opvetlic.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/license/reahi/

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3 class="mb-2">Licensing Applications</h3>`
- XPath: `.active.carousel-item[href$="reahilic.shtml"] > .carousel-caption.bg-secondary.text-white > .mb-2`

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: Alternative text of images should not be repeated as text
- HTML: `<img class="d-block w-100" src="../../images/oplicslide.png" alt="Licensing Applications">`
- XPath: `img[src$="oplicslide.png"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/lmi/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/oeope/posters.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/osbra/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/personnel/dllremp.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/pq/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/racing/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

**Failure 4:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div class="col-md-12 col-xl-3 p-3 p-lg-4 bg-gray">`
- XPath: `.col-md-12`

### https://labor.maryland.gov/regs/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/spanish/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/spanish/desempleo.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/uiappeals/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/uim/employer/uimempfaqs.shtml

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<aside id="sidenav" class="sidenav">`
- XPath: `#sidenav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="usa-skipnav" href="#mdgovMain">Skip to main content</a>`
- XPath: `.usa-skipnav`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div contact="">`
- XPath: `div[contact=""]`

### https://labor.maryland.gov/whatsnews/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/whatsnews/laborannouncesfundingsupportcareerpathways.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/whatsnews/laborlaunchesrecoveryfriendlyworkplacepilot.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

### https://labor.maryland.gov/whatsnews/mlr.shtml

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a href="http://www.maryland.gov/pages/accessibility.aspx" class="sr-only sr-only-focusable show-on-focus" target="_blank">Accessibility Information</a>`
- XPath: `.sr-only-focusable.show-on-focus.sr-only:nth-child(2)`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="mdgov-entNav__logo" href="https://www.maryland.gov/">         <img src="https://egov.maryland.gov/doit/ewf/widgets/header/v2/img/mdgov-logo-2018-black.png" alt="Maryland.gov">     </a>`
- XPath: `.mdgov-entNav__logo`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<ul class="mdgov-entNavList">`
- XPath: `.mdgov-entNavList`

