# Scan Report: WA.gov Washington State

- Issue: https://github.com/mgifford/open-scans/issues/63
- Submitted by: mgifford
- Scanned at: 2026-04-16T01:17:56.555Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 12.3 minutes
- Total URLs submitted: 86
- Accepted public URLs: 86
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 86 of 86 URLs (100%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 62117 passed, 1559 failed, 1010 cantTell, 3543 inapplicable
- Equal Access outcomes: 140519 passed, 2715 failed (2564 unique, 151 duplicate), 1215 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 151

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://wa.gov/work/professional-licenses) | 252 | 257 | **509** | 403 Forbidden |
| [View Page](https://wa.gov/agency) | 99 | 265 | **364** | 403 Forbidden |
| [View Page](https://wa.gov/your-government) | 67 | 80 | **147** | 403 Forbidden |
| [View Page](https://wa.gov/health-safety/public-utilities) | 65 | 75 | **140** | 403 Forbidden |
| [View Page](https://wa.gov/families) | 60 | 74 | **134** | 403 Forbidden |
| [View Page](https://wa.gov/health-and-safety) | 60 | 72 | **132** | 403 Forbidden |
| [View Page](https://wa.gov/how-to-guides/historic-flood-emergency-financial-resources-and-recovery-washingtonians) | 49 | 58 | **107** | 403 Forbidden |
| [View Page](https://wa.gov/people-with-disabilities/blindness-related-tools-and-services) | 44 | 51 | **95** | 403 Forbidden |
| [View Page](https://wa.gov/people-with-disabilities/rights-and-self-advocacy) | 42 | 48 | **90** | 403 Forbidden |
| [View Page](https://wa.gov/how-to-guides/file-complaint) | 38 | 51 | **89** | 403 Forbidden |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| image-alt | **86** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/image-alt) |
| color-contrast | **56** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| region | **22** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| link-name | **5** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| heading-order | **4** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| empty-heading | **1** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-heading) |
| aria-prohibited-attr | **1** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-prohibited-attr) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 86 page(s) - 86 occurrence(s)

**Scanner**: axe
**Rule**: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**Issue**: Images must have alternative text

**HTML Pattern**:
```html
<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">
```

**XPath** (use in browser DevTools):
```
a[href$="wa.gov"] > img
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="wa.gov"] > img')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/
- https://wa.gov/accessibility-in-washington/workplace-accessibility/support-employees-with-disabilities-in-the-workplace
- https://wa.gov/accessibility-in-washington/accessibility-basics
- https://wa.gov/accessibility-in-washington/accessibility-laws
- https://wa.gov/accessibility-in-washington/accessibility-resources
- *...and 81 more page(s)*

---

#### Pattern 2: Affects 27 page(s) - 27 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/">Home</a>
```

**XPath** (use in browser DevTools):
```
.breadcrumb-item:nth-child(1) > a[href="/"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.breadcrumb-item:nth-child(1) > a[href="/"]')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/people-with-disabilities/accessibility-policy
- https://wa.gov/people-with-disabilities/accessibility-wa-state-law-and-policy
- https://wa.gov/people-with-disabilities/electronic-and-data-accessibility
- https://wa.gov/people-with-disabilities/blindness-related-tools-and-services
- https://wa.gov/checklists-and-tools
- *...and 22 more page(s)*

---

#### Pattern 3: Affects 22 page(s) - 22 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="wrapper-banner">
```

**XPath** (use in browser DevTools):
```
.wrapper-banner
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.wrapper-banner')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/report-suspected-fraud
- https://wa.gov/how-to-guides/get-help-finding-food
- https://wa.gov/how-to-guides/secureaccess-washington-saw-login-state-services
- https://wa.gov/businesses
- https://wa.gov/education
- *...and 17 more page(s)*

---

#### Pattern 4: Affects 11 page(s) - 11 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/people-with-disabilities">People With Disabilities</a>
```

**XPath** (use in browser DevTools):
```
.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/people-with-disabilities/accessibility-policy
- https://wa.gov/people-with-disabilities/accessibility-wa-state-law-and-policy
- https://wa.gov/people-with-disabilities/electronic-and-data-accessibility
- https://wa.gov/people-with-disabilities/blindness-related-tools-and-services
- https://wa.gov/people-with-disabilities/age-55-and-senior-blind-individuals
- *...and 6 more page(s)*

---

#### Pattern 5: Affects 9 page(s) - 9 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/how-to-guides">How-to-guides</a>
```

**XPath** (use in browser DevTools):
```
.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/Get%20Help%20Finding%20Food
- https://wa.gov/SecureAccess%20Washington%20%28SAW%29%20Login%20for%20State%20Services
- https://wa.gov/Accessing%20Government%20Assistance
- https://wa.gov/File%20a%20Complaint
- https://wa.gov/Historic%20Flood%20Emergency%3A%20Financial%20Resources%20and%20Recovery%20for%20Washingtonians
- *...and 4 more page(s)*

---

#### Pattern 6: Affects 9 page(s) - 9 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/search-results">Search WA.gov and all Washington government sites</a>
```

**XPath** (use in browser DevTools):
```
a[href$="search-results"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="search-results"]')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/Get%20Help%20Finding%20Food
- https://wa.gov/SecureAccess%20Washington%20%28SAW%29%20Login%20for%20State%20Services
- https://wa.gov/Accessing%20Government%20Assistance
- https://wa.gov/File%20a%20Complaint
- https://wa.gov/Historic%20Flood%20Emergency%3A%20Financial%20Resources%20and%20Recovery%20for%20Washingtonians
- *...and 4 more page(s)*

---

#### Pattern 7: Affects 9 page(s) - 9 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/agency">Find an agency</a>
```

**XPath** (use in browser DevTools):
```
li:nth-child(3) > a[href$="agency"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(3) > a[href$="agency"]')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/Get%20Help%20Finding%20Food
- https://wa.gov/SecureAccess%20Washington%20%28SAW%29%20Login%20for%20State%20Services
- https://wa.gov/Accessing%20Government%20Assistance
- https://wa.gov/File%20a%20Complaint
- https://wa.gov/Historic%20Flood%20Emergency%3A%20Financial%20Resources%20and%20Recovery%20for%20Washingtonians
- *...and 4 more page(s)*

---

#### Pattern 8: Affects 9 page(s) - 9 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/state-employee-contacts">Find a state employee</a>
```

**XPath** (use in browser DevTools):
```
li:nth-child(4) > a[href$="state-employee-contacts"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('li:nth-child(4) > a[href$="state-employee-contacts"]')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/Get%20Help%20Finding%20Food
- https://wa.gov/SecureAccess%20Washington%20%28SAW%29%20Login%20for%20State%20Services
- https://wa.gov/Accessing%20Government%20Assistance
- https://wa.gov/File%20a%20Complaint
- https://wa.gov/Historic%20Flood%20Emergency%3A%20Financial%20Resources%20and%20Recovery%20for%20Washingtonians
- *...and 4 more page(s)*

---

#### Pattern 9: Affects 9 page(s) - 9 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/webform/contact-wagov-team">contact the WA.gov team</a>
```

**XPath** (use in browser DevTools):
```
a[href$="contact-wagov-team"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="contact-wagov-team"]')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/Get%20Help%20Finding%20Food
- https://wa.gov/SecureAccess%20Washington%20%28SAW%29%20Login%20for%20State%20Services
- https://wa.gov/Accessing%20Government%20Assistance
- https://wa.gov/File%20a%20Complaint
- https://wa.gov/Historic%20Flood%20Emergency%3A%20Financial%20Resources%20and%20Recovery%20for%20Washingtonians
- *...and 4 more page(s)*

---

#### Pattern 10: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="https://www.hum.wa.gov/sites/default/files/public/publications/Service%20Animals%20and%20the%20Washington%20Law%20Against%20Discrimination-032019.pdf">Guide to Service Animals and Washington State Law </a>
```

**XPath** (use in browser DevTools):
```
ul:nth-child(3) > li:nth-child(1) > a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('ul:nth-child(3) > li:nth-child(1) > a')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/people-with-disabilities/accessibility-policy
- https://wa.gov/people-with-disabilities/electronic-and-data-accessibility
- https://wa.gov/people-with-disabilities/blindness-related-tools-and-services
- https://wa.gov/people-with-disabilities/creating-disability-friendly-spaces
- https://wa.gov/people-with-disabilities/human-relations

---

#### Pattern 11: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="https://www.ada.gov/service_animals_2010.htm">ADA Service Animals</a>
```

**XPath** (use in browser DevTools):
```
ul:nth-child(3) > li:nth-child(2) > a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('ul:nth-child(3) > li:nth-child(2) > a')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/people-with-disabilities/accessibility-policy
- https://wa.gov/people-with-disabilities/electronic-and-data-accessibility
- https://wa.gov/people-with-disabilities/blindness-related-tools-and-services
- https://wa.gov/people-with-disabilities/creating-disability-friendly-spaces
- https://wa.gov/people-with-disabilities/human-relations

---

#### Pattern 12: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="https://waservicedog.org/wa-state-laws/">WA State Laws – Washington State Service Dog Association</a>
```

**XPath** (use in browser DevTools):
```
ul:nth-child(3) > li:nth-child(3) > a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('ul:nth-child(3) > li:nth-child(3) > a')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/people-with-disabilities/accessibility-policy
- https://wa.gov/people-with-disabilities/electronic-and-data-accessibility
- https://wa.gov/people-with-disabilities/blindness-related-tools-and-services
- https://wa.gov/people-with-disabilities/creating-disability-friendly-spaces
- https://wa.gov/people-with-disabilities/human-relations

---

#### Pattern 13: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="https://www.guidedogs.com/uploads/files/2016_Service_Dog_Letter.pdf">GDB – Access Letter to businesses</a>
```

**XPath** (use in browser DevTools):
```
ul:nth-child(3) > li:nth-child(4) > a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('ul:nth-child(3) > li:nth-child(4) > a')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/people-with-disabilities/accessibility-policy
- https://wa.gov/people-with-disabilities/electronic-and-data-accessibility
- https://wa.gov/people-with-disabilities/blindness-related-tools-and-services
- https://wa.gov/people-with-disabilities/creating-disability-friendly-spaces
- https://wa.gov/people-with-disabilities/human-relations

---

#### Pattern 14: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="https://www.youtube.com/watch?v=iJfxkBOekvs">Light House Guild - Guide Technique video</a>
```

**XPath** (use in browser DevTools):
```
ul:nth-child(5) > li:nth-child(3) > a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('ul:nth-child(5) > li:nth-child(3) > a')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/people-with-disabilities/accessibility-policy
- https://wa.gov/people-with-disabilities/electronic-and-data-accessibility
- https://wa.gov/people-with-disabilities/blindness-related-tools-and-services
- https://wa.gov/people-with-disabilities/creating-disability-friendly-spaces
- https://wa.gov/people-with-disabilities/human-relations

---

#### Pattern 15: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<a href="/how-to-guides/use-public-transportation" hreflang="en">Use Public Transportation</a>
```

**XPath** (use in browser DevTools):
```
.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .details > h3 > a[hreflang="en"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .details > h3 > a[hreflang="en"]')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/businesses
- https://wa.gov/recreation
- https://wa.gov/travel
- https://wa.gov/work
- https://wa.gov/people-with-disabilities

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://wa.gov/ | https://wa.gov/ | FAIL | 403 | no | 10748 | 1 | 0 | 15 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/accessibility-in-washington/workplace-accessibility/support-employees-with-disabilities-in-the-workplace | https://wa.gov/accessibility-in-washington/workplace-accessibility/support-employees-with-disabilities-in-the-workplace | FAIL | 403 | no | 7396 | 1 | 0 | 14 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_sensory_misuse |
| https://wa.gov/accessibility-in-washington/accessibility-basics | https://wa.gov/accessibility-in-washington/accessibility-basics | FAIL | 403 | no | 6153 | 1 | 0 | 10 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_sensory_misuse |
| https://wa.gov/accessibility-in-washington/accessibility-laws | https://wa.gov/accessibility-in-washington/accessibility-laws | FAIL | 403 | no | 6818 | 1 | 0 | 10 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_sensory_misuse |
| https://wa.gov/accessibility-in-washington/accessibility-resources | https://wa.gov/accessibility-in-washington/accessibility-resources | FAIL | 403 | no | 7956 | 1 | 0 | 19 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable |
| https://wa.gov/accessibility-in-washington/education-recreation | https://wa.gov/accessibility-in-washington/education-recreation | FAIL | 403 | no | 6156 | 1 | 0 | 9 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable |
| https://wa.gov/accessibility-in-washington/health-safety-for-people-with-disabilities | https://wa.gov/accessibility-in-washington/health-safety-for-people-with-disabilities | FAIL | 403 | no | 6787 | 1 | 0 | 10 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_sensory_misuse |
| https://wa.gov/accessibility-in-washington/transportation-and-personal-mobility | https://wa.gov/accessibility-in-washington/transportation-and-personal-mobility | FAIL | 403 | no | 6778 | 1 | 0 | 9 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable |
| https://wa.gov/accessibility-in-washington/workplace-accessibility | https://wa.gov/accessibility-in-washington/workplace-accessibility | FAIL | 403 | no | 5973 | 1 | 0 | 9 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable |
| https://wa.gov/people-with-disabilities/accessibility-policy | https://wa.gov/people-with-disabilities/accessibility-policy | FAIL | 403 | no | 8210 | 24 | 0 | 29 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/people-with-disabilities/accessibility-wa-state-law-and-policy | https://wa.gov/people-with-disabilities/accessibility-wa-state-law-and-policy | FAIL | 403 | no | 8039 | 18 | 0 | 24 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/people-with-disabilities/electronic-and-data-accessibility | https://wa.gov/people-with-disabilities/electronic-and-data-accessibility | FAIL | 403 | no | 8482 | 38 | 0 | 44 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/accessibility-in-washington/accessibility-basics/disability-etiquette-for-respecting-people-with-disabilities | https://wa.gov/accessibility-in-washington/accessibility-basics/disability-etiquette-for-respecting-people-with-disabilities | FAIL | 403 | no | 5915 | 2 | 0 | 13 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_sensory_misuse |
| https://wa.gov/accessibility-in-washington/accessibility-basics/how-to-make-physical-and-digital-spaces-accessible | https://wa.gov/accessibility-in-washington/accessibility-basics/how-to-make-physical-and-digital-spaces-accessible | FAIL | 403 | no | 6339 | 1 | 0 | 11 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable |
| https://wa.gov/report-suspected-fraud | https://wa.gov/report-suspected-fraud | FAIL | 403 | no | 7509 | 2 | 0 | 14 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_form_label_unique, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/people-with-disabilities/blindness-related-tools-and-services | https://wa.gov/people-with-disabilities/blindness-related-tools-and-services | FAIL | 403 | no | 8530 | 44 | 0 | 51 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/checklists-and-tools | https://wa.gov/checklists-and-tools | FAIL | 403 | no | 7133 | 3 | 0 | 9 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/error | https://wa.gov/error | FAIL | 403 | no | 7054 | 6 | 0 | 14 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, empty-heading, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_accessiblename_exists, element_attribute_deprecated, element_id_unique, element_tabbable_visible, heading_content_exists, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/get-help | https://wa.gov/get-help | FAIL | 403 | no | 8630 | 13 | 0 | 13 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/privacy-notice | https://wa.gov/privacy-notice | FAIL | 403 | no | 8000 | 12 | 0 | 16 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/test | https://wa.gov/test | FAIL | 403 | no | 7387 | 2 | 0 | 10 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient |
| https://wa.gov/use-our-logo | https://wa.gov/use-our-logo | FAIL | 403 | no | 7703 | 7 | 0 | 14 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_valid, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient, text_quoted_correctly |
| https://wa.gov/washingtons-it-strategic-plan | https://wa.gov/washingtons-it-strategic-plan | FAIL | 403 | no | 7645 | 11 | 0 | 20 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/get-help/get-touch | https://wa.gov/get-help/get-touch | FAIL | 403 | no | 7608 | 7 | 0 | 13 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/Get%20Help%20Finding%20Food | https://wa.gov/Get%20Help%20Finding%20Food | FAIL | 403 | no | 7255 | 6 | 0 | 12 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/health-safety/public-utilities | https://wa.gov/health-safety/public-utilities | FAIL | 403 | no | 10119 | 65 | 0 | 75 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/people-with-disabilities/age-55-and-senior-blind-individuals | https://wa.gov/people-with-disabilities/age-55-and-senior-blind-individuals | FAIL | 403 | no | 7690 | 14 | 0 | 18 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/people-with-disabilities/creating-disability-friendly-spaces | https://wa.gov/people-with-disabilities/creating-disability-friendly-spaces | FAIL | 403 | no | 8012 | 20 | 0 | 26 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/people-with-disabilities/general-blindness-considerations | https://wa.gov/people-with-disabilities/general-blindness-considerations | FAIL | 403 | no | 7365 | 10 | 0 | 16 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/people-with-disabilities/getting-what-you-need | https://wa.gov/people-with-disabilities/getting-what-you-need | FAIL | 403 | no | 8389 | 37 | 0 | 42 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/people-with-disabilities/human-relations | https://wa.gov/people-with-disabilities/human-relations | FAIL | 403 | no | 7957 | 25 | 0 | 29 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/people-with-disabilities/rights-and-self-advocacy | https://wa.gov/people-with-disabilities/rights-and-self-advocacy | FAIL | 403 | no | 8398 | 42 | 0 | 48 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/recreation/parks | https://wa.gov/recreation/parks | FAIL | 403 | no | 8767 | 33 | 0 | 44 | 0 | 29 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient |
| https://wa.gov/work/professional-licenses | https://wa.gov/work/professional-licenses | FAIL | 403 | no | 18133 | 252 | 0 | 257 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/how-to-guides/get-help-finding-food | https://wa.gov/how-to-guides/get-help-finding-food | FAIL | 403 | no | 8936 | 19 | 0 | 31 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient |
| https://wa.gov/SecureAccess%20Washington%20%28SAW%29%20Login%20for%20State%20Services | https://wa.gov/SecureAccess%20Washington%20%28SAW%29%20Login%20for%20State%20Services | FAIL | 403 | no | 7117 | 6 | 0 | 12 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/how-to-guides/secureaccess-washington-saw-login-state-services | https://wa.gov/how-to-guides/secureaccess-washington-saw-login-state-services | FAIL | 403 | no | 7733 | 8 | 0 | 22 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient |
| https://wa.gov/Accessing%20Government%20Assistance | https://wa.gov/Accessing%20Government%20Assistance | FAIL | 403 | no | 6984 | 6 | 0 | 12 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/agency | https://wa.gov/agency | FAIL | 403 | no | 27060 | 99 | 0 | 265 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/businesses | https://wa.gov/businesses | FAIL | 403 | no | 8448 | 32 | 0 | 46 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/education | https://wa.gov/education | FAIL | 403 | no | 8803 | 24 | 0 | 37 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient |
| https://wa.gov/families | https://wa.gov/families | FAIL | 403 | no | 9194 | 60 | 0 | 74 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/File%20a%20Complaint | https://wa.gov/File%20a%20Complaint | FAIL | 403 | no | 7172 | 6 | 0 | 12 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/health-and-safety | https://wa.gov/health-and-safety | FAIL | 403 | no | 9062 | 60 | 0 | 72 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient |
| https://wa.gov/Historic%20Flood%20Emergency%3A%20Financial%20Resources%20and%20Recovery%20for%20Washingtonians | https://wa.gov/Historic%20Flood%20Emergency%3A%20Financial%20Resources%20and%20Recovery%20for%20Washingtonians | FAIL | 403 | no | 7059 | 6 | 0 | 12 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/Housing%20Assistance | https://wa.gov/Housing%20Assistance | FAIL | 403 | no | 7167 | 6 | 0 | 12 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/how-to-guides | https://wa.gov/how-to-guides | FAIL | 403 | no | 8086 | 3 | 0 | 8 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/news | https://wa.gov/news | FAIL | 403 | no | 8301 | 22 | 0 | 28 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/node | https://wa.gov/node | FAIL | 403 | no | 8975 | 1 | 0 | 15 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/Protecting%20Your%20Community%20from%20Wildfire | https://wa.gov/Protecting%20Your%20Community%20from%20Wildfire | FAIL | 403 | no | 7439 | 6 | 0 | 12 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/recreation | https://wa.gov/recreation | FAIL | 403 | no | 8411 | 23 | 0 | 35 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient |
| https://wa.gov/seniors | https://wa.gov/seniors | FAIL | 403 | no | 8208 | 34 | 0 | 48 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/state-employee-contacts | https://wa.gov/state-employee-contacts | FAIL | 403 | no | 7318 | 3 | 0 | 13 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/travel | https://wa.gov/travel | FAIL | 403 | no | 8726 | 24 | 0 | 37 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient |
| https://wa.gov/visitors | https://wa.gov/visitors | FAIL | 403 | no | 8256 | 34 | 0 | 47 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/work | https://wa.gov/work | FAIL | 403 | no | 8392 | 35 | 0 | 48 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/Workers%E2%80%99%20Rights | https://wa.gov/Workers%E2%80%99%20Rights | FAIL | 403 | no | 7154 | 6 | 0 | 12 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/your-government | https://wa.gov/your-government | FAIL | 403 | no | 9630 | 67 | 0 | 80 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient |
| https://wa.gov/Your%20New%20WA.gov%20Account | https://wa.gov/Your%20New%20WA.gov%20Account | FAIL | 403 | no | 10873 | 6 | 0 | 12 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/ar/node | https://wa.gov/ar/node | FAIL | 403 | no | 8812 | 1 | 0 | 13 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/es/node | https://wa.gov/es/node | FAIL | 403 | no | 8853 | 1 | 0 | 12 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/hi/node | https://wa.gov/hi/node | FAIL | 403 | no | 8805 | 1 | 0 | 14 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/how-to-guides/accessing-government-assistance | https://wa.gov/how-to-guides/accessing-government-assistance | FAIL | 403 | no | 8419 | 31 | 0 | 47 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_eventhandler_role_valid, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/how-to-guides/file-complaint | https://wa.gov/how-to-guides/file-complaint | FAIL | 403 | no | 8885 | 38 | 0 | 51 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/how-to-guides/historic-flood-emergency-financial-resources-and-recovery-washingtonians | https://wa.gov/how-to-guides/historic-flood-emergency-financial-resources-and-recovery-washingtonians | FAIL | 403 | no | 9509 | 49 | 0 | 58 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient, text_quoted_correctly, text_sensory_misuse |
| https://wa.gov/how-to-guides/housing-assistance | https://wa.gov/how-to-guides/housing-assistance | FAIL | 403 | no | 7663 | 14 | 0 | 28 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient |
| https://wa.gov/how-to-guides/protecting-your-community-wildfire | https://wa.gov/how-to-guides/protecting-your-community-wildfire | FAIL | 403 | no | 7921 | 23 | 0 | 35 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/how-to-guides/workers-rights | https://wa.gov/how-to-guides/workers-rights | FAIL | 403 | no | 7993 | 27 | 0 | 42 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/how-to-guides/your-new-wagov-account | https://wa.gov/how-to-guides/your-new-wagov-account | FAIL | 403 | no | 8932 | 4 | 0 | 22 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, frame_src_valid, html_lang_exists, html_skipnav_exists, img_alt_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient |
| https://wa.gov/ja/node | https://wa.gov/ja/node | FAIL | 403 | no | 8968 | 1 | 0 | 15 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/ko/node | https://wa.gov/ko/node | FAIL | 403 | no | 9206 | 1 | 0 | 13 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/node/61721 | https://wa.gov/node/61721 | FAIL | 403 | no | 7597 | 7 | 0 | 14 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_valid, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient, text_quoted_correctly |
| https://wa.gov/ru/node | https://wa.gov/ru/node | FAIL | 403 | no | 9145 | 1 | 0 | 12 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/uk/node | https://wa.gov/uk/node | FAIL | 403 | no | 8841 | 1 | 0 | 13 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/vi/node | https://wa.gov/vi/node | FAIL | 403 | no | 8717 | 1 | 0 | 13 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, element_attribute_deprecated, element_tabbable_visible, heading_markup_misuse, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/accessibility-in-washington/accessibility-basics/learn-about-disabilities | https://wa.gov/accessibility-in-washington/accessibility-basics/learn-about-disabilities | FAIL | 403 | no | 5891 | 1 | 0 | 11 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable |
| https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/education-for-children-through-high-school | https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/education-for-children-through-high-school | FAIL | 403 | no | 6296 | 1 | 0 | 14 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_sensory_misuse |
| https://wa.gov/people-with-disabilities | https://wa.gov/people-with-disabilities | FAIL | 403 | no | 8100 | 23 | 0 | 44 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/accessibility-in-washington | https://wa.gov/accessibility-in-washington | FAIL | 403 | no | 6053 | 2 | 0 | 13 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable |
| https://wa.gov/people-with-disabilities/schools-and-universities | https://wa.gov/people-with-disabilities/schools-and-universities | FAIL | 403 | no | 8155 | 26 | 0 | 32 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_contrast_sufficient |
| https://wa.gov/zh-hant/node | https://wa.gov/zh-hant/node | FAIL | 403 | no | 38968 | 1 | 0 | 15 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/zh-hans/node | https://wa.gov/zh-hans/node | FAIL | 403 | no | 8908 | 1 | 0 | 15 | 0 | 5 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_form_label_unique, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, style_color_misuse, style_highcontrast_visible, style_viewport_resizable, text_block_heading, text_contrast_sufficient, text_sensory_misuse |
| https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/extracurriculars-for-children-with-disabilities | https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/extracurriculars-for-children-with-disabilities | FAIL | 403 | no | 6217 | 1 | 0 | 13 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable |
| https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/accessibility-in-higher-education | https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/accessibility-in-higher-education | FAIL | 403 | no | 5958 | 1 | 0 | 11 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable |
| https://wa.gov/accessibility-in-washington/education-recreation/education-children-through-high-school | https://wa.gov/accessibility-in-washington/education-recreation/education-children-through-high-school | FAIL | 403 | no | 6037 | 1 | 0 | 12 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_sensory_misuse |
| https://wa.gov/accessibility-in-washington/workplace-accessibility/employment-and-workers-rights-for-people-with-disabilities | https://wa.gov/accessibility-in-washington/workplace-accessibility/employment-and-workers-rights-for-people-with-disabilities | FAIL | 403 | no | 6052 | 1 | 0 | 13 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_role_redundant, element_attribute_deprecated, element_tabbable_unobscured, element_tabbable_visible, img_alt_valid, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://wa.gov/

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/workplace-accessibility/support-employees-with-disabilities-in-the-workplace

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/accessibility-basics

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/accessibility-laws

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/accessibility-resources

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/education-recreation

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/health-safety-for-people-with-disabilities

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/transportation-and-personal-mobility

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/workplace-accessibility

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/accessibility-policy

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nwadacenter.org/index.php?q=training/">Training \| ADANW (nwadacenter.org)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://adata.org/ada-training">ADA Training \| ADA National Network (adata.org)</a>`
- XPath: `a[href$="ada-training"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.disabilityempowerment.org/consulting-for-businesses">What We Do: Consulting for Businesses — Disability Empowerment Center</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(3) > a`

*... and 18 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/accessibility-wa-state-law-and-policy

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://apps.leg.wa.gov/rcw/default.aspx?cite=49.60.030">RCW 49.60.030: Freedom from discrimination—Declaration of civil rights</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://app.leg.wa.gov/RCW/default.aspx?cite=70.84.010">RCW 70.84.010: Declaration—Policy. (wa.gov)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.hum.wa.gov/sites/default/files/public/publications/Disability%20Q%20and%20A_updated%202012.pdf">Guide to Disability and Washington State Nondiscrimination Laws</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(3) > a`

*... and 12 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/electronic-and-data-accessibility

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="Funding%20assistive%20technology%20in%20the%20workplace">Small Business, Big Tech: Funding Assistive Technology in the Workplace (accessibility.com)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://dsb.wa.gov/assistive-technology-0">Assistive Technology \| DSB - Wa Dept of Services for the Blind</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://dsb.wa.gov/resources/accessible-documents-and-websites">Accessible Documents and Websites \| DSB - Wa Dept of Services for the Blind</a>`
- XPath: `ul:nth-child(4) > li:nth-child(1) > a`

*... and 32 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/accessibility-basics/disability-etiquette-for-respecting-people-with-disabilities

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: Heading levels should only increase by one
- HTML: `<h3 paraeid="{22822a97-584b-47c5-a5c6-b0f92da819e5}{37}" paraid="1333256644"><a href="https://www.cdc.gov/ncbddd/disabilityandhealth/materials/factsheets/fs-communicating-with-people.html" rel="noreferrer noopener" target="_blank">Using people-first language</a>&nbsp;</h3>`
- XPath: `h3[paraid="1333256644"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/accessibility-basics/how-to-make-physical-and-digital-spaces-accessible

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/report-suspected-fraud

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/people-with-disabilities/blindness-related-tools-and-services

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://guidedogusersinc.org/resources/guide-dog-training-schools/">List of Guide Dog schools</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://guidedogusersinc.org/resources">Guide Dog Users Inc Resources</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.hum.wa.gov/sites/default/files/public/publications/Service%20Animals%20and%20the%20Washington%20Law%20Against%20Discrimination-032019.pdf">Guide to Service Animals and Washington State Law </a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(3) > a`

*... and 38 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/checklists-and-tools

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.hum.wa.gov/sites/default/files/public/publications/disbselfassess%20updated.pdf">HRC Self-Assessment for Best Practice - Employment</a>`
- XPath: `.layout__region > .text-formatted.field--name-body.field--type-text-with-summary > ul > li > a`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/error

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/how-to-guides">How-to-guides</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/get-help">Get Help</a>`
- XPath: `p:nth-child(5) > a[href$="get-help"]`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-16
- Message: Headings should not be empty
- HTML: `<h1 id="title-404"><span id="main-content" class=""></span></h1>`
- XPath: `#title-404`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/get-help

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#create-account">create&nbsp;a WA.gov account</a>`
- XPath: `li[paraid="1764699694"] > a[href$="#create-account"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/how-to-guides/secureaccess-washington-saw-login-state-services" rel="noreferrer noopener" target="_blank">SAW account</a>`
- XPath: `li[paraid="718587847"] > a[target="_blank"][rel="noreferrer noopener"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#finding-info" rel="noreferrer noopener">unemployment</a>`
- XPath: `a[href$="#finding-info"][rel="noreferrer noopener"]:nth-child(1)`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#finding-info" rel="noreferrer noopener">licensing</a>`
- XPath: `a[href$="#finding-info"][rel="noreferrer noopener"]:nth-child(2)`

*... and 6 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: Heading levels should only increase by one
- HTML: `<h2 aria-level="4" id="create-account" paraeid="{5f11862d-080e-4ae3-8c20-35f719db1398}{210}" paraid="1676407293" role="heading">Create a&nbsp;WA.gov&nbsp;account</h2>`
- XPath: `#create-account`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/privacy-notice

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.sos.wa.gov/archives/">State Archives</a>`
- XPath: `p:nth-child(11) > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.gpo.gov/fdsys/pkg/USCODE-2011-title15/html/USCODE-2011-title15-chap91-sec6501.htm">Children's Online Privacy Protection Act</a>`
- XPath: `p:nth-child(13) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://apps.leg.wa.gov/RCW/default.aspx?cite=42.56">RCW 42.56</a>`
- XPath: `a:nth-child(3)`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://apps.leg.wa.gov/RCW/default.aspx?cite=42.56.070">RCW 42.56.070(6)</a>`
- XPath: `a:nth-child(7)`

*... and 6 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/test

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/use-our-logo

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/index.html">https://wa.gov</a>`
- XPath: `li:nth-child(1) > a[href="https://wa.gov/index.html"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html">Read about WCAG Color contrast standards</a>`
- XPath: `li:nth-child(4) > ul > li:nth-child(1) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://webaim.org/resources/contrastchecker/">Check your color contrast at WebAIM</a>`
- XPath: `li:nth-child(4) > ul > li:nth-child(2) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/index.html">Visit WA.gov</a>`
- XPath: `li:nth-child(4) > a[href="https://wa.gov/index.html"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/washingtons-it-strategic-plan

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong data-end="511" data-start="490">RCW 43.105.220(1)</strong>`
- XPath: `strong[data-end="511"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/sites/default/files/2025-08/Washington%20State%20IT%20Strategic%20Plan-8.27.25.pdf">Learn more about Washington's IT Strategic Plan</a>`
- XPath: `p[data-end="1189"] > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://watech.wa.gov">Washington Technology Solutions</a>`
- XPath: `p[data-end="1517"] > a[href$="watech.wa.gov"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/sites/default/files/2025-08/Washington%20State%20IT%20Strategic%20Plan-8.27.25.pdf">Washington's IT Strategic Plan 2025-2028</a>`
- XPath: `.col-md-3 > ul:nth-child(2) > li:nth-child(1) > a`

*... and 5 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/get-help/get-touch

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/get-help">Get Help</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="get-help"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/agency" rel="noreferrer noopener" target="_blank">Contact the agency</a>`
- XPath: `a[rel="noreferrer noopener"][target="_blank"][href$="agency"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/get-help">Get Help</a>`
- XPath: `p:nth-child(5) > a[href$="get-help"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/form/contact-us-for-support-with-your">Submit a help ticket</a>`
- XPath: `li:nth-child(1) > p > a`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/Get%20Help%20Finding%20Food

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/health-safety/public-utilities

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/health-and-safety">Health &amp; Safety</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="health-and-safety"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.nwnatural.com/">Northwest Natural Gas</a>`
- XPath: `a[href$="nwnatural.com/"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.rustonwa.org/departments/utility-department/">Town of Ruston </a>`
- XPath: `tr:nth-child(2) > .views-field-title[headers="view-title-table-column"] > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://townofcouleedam.org/billing-and-payments">City of Coulee Dam </a>`
- XPath: `tr:nth-child(3) > .views-field-title[headers="view-title-table-column"] > a`

*... and 59 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/age-55-and-senior-blind-individuals

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://visionaware.org/emotional-support/for-family-and-friends/guidance-for-caregivers-of-individuals-who-are-blind-or-visually-impaired/resource-list-for-caregivers-of-individuals-with-vision-loss/">Guidance for Caregivers of Individuals Who Are Blind or Visually Impaired</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.caregiveraction.org/">Caregiver Action Network</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.agingkingcounty.org/">Area Agency on Aging (Seattle)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(3) > a`

*... and 8 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/creating-disability-friendly-spaces

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.ntac.blind.msstate.edu/businesses/what-is">What is blindness and low vision? \| National Technical Assistance Center (msstate.edu)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://youth.gov/youth-topics/inclusion-and-accessibility">Inclusion and Accessibility \| Youth.gov</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.perkins.org/blind-etiquette-six-ways-to-be-considerate-when-interacting-with-people-with-visual-impairments/">Blindness etiquette</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(3) > a`

*... and 14 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/general-blindness-considerations

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.ntac.blind.msstate.edu/businesses/what-is">What is blindness and low vision? \| National Technical Assistance Center (msstate.edu)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://youth.gov/youth-topics/inclusion-and-accessibility">Inclusion and Accessibility \| Youth.gov</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.icanconnect.org/">iCanConnect</a>`
- XPath: `a[href$="icanconnect.org/"]`

*... and 4 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/getting-what-you-need

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://dsb.wa.gov/">Home \| DSB - WA Dept of Services for the Blind</a>`
- XPath: `a[href$="dsb.wa.gov/"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.helenkeller.org/hknc/northwestern-region">HKNC: Northwest Region</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.wssb.wa.gov/">Home \| Washington State School for the Blind</a>`
- XPath: `a[href$="wssb.wa.gov/"]`

*... and 31 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/human-relations

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.ntac.blind.msstate.edu/businesses/what-types-of-jobs">What types of jobs can people who are blind or have low vision do? \| National Technical Assistance Center (msstate.edu)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.ntac.blind.msstate.edu/businesses/why-hire-workers">Why hire workers who are blind or have low vision? \| National Technical Assistance Center (msstate.edu)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.ntac.blind.msstate.edu/businesses/what-is">Blindness and Low Vision basic information</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(3) > a`

*... and 19 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/rights-and-self-advocacy

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.nfbw.org/">National Federation of the Blind of Washington</a>`
- XPath: `a[href$="nfbw.org/"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wcbinfo.org/about-us/">Washington Council of the Blind</a>`
- XPath: `a[href$="about-us/"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://seattledbsc.org/">Deaf-Blind Service Center- Empowering Deaf-Blind Individuals and the Deaf-Blind Community</a>`
- XPath: `a[href$="seattledbsc.org/"]`

*... and 36 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/recreation/parks

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/recreation">Recreation</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="recreation"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

**Failure 2:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="https://parks.wa.gov/sites/default/files/styles/square_600/public/2023-03/AltaLake_HikingSign.jpg?itok=vKY6tLSM">`
- XPath: `.views-row:nth-child(1) > .views-field.views-field-nothing > .field-content > .park-card > a > img`

**Failure 3:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="https://parks.wa.gov/sites/default/files/styles/square_600/public/2023-05/lake2.jpg?itok=n-HP162X">`
- XPath: `.views-row:nth-child(2) > .views-field.views-field-nothing > .field-content > .park-card > a > img`

**Failure 4:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="https://parks.wa.gov/sites/default/files/styles/square_600/public/2025-10/BattleGroundLakeDockWithRocks.jpg?itok=Bmm5E6Qw">`
- XPath: `.views-row:nth-child(3) > .views-field.views-field-nothing > .field-content > .park-card > a > img`

**Failure 5:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="https://parks.wa.gov/sites/default/files/styles/square_600/public/2023-06/BayView_Kite.jpg?itok=WPSLQj7p">`
- XPath: `.views-row:nth-child(4) > .views-field.views-field-nothing > .field-content > .park-card > a > img`

*... and 26 more failures for this rule*

### https://wa.gov/work/professional-licenses

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/work">Work</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="work"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://doh.wa.gov/licenses-permits-and-certificates/professions-new-renew-or-update/acupuncture-and-eastern-medicine-practitioner">Acupuncture and Eastern Medicine Practitioners</a>`
- XPath: `.views-row:nth-child(2) > .views-field.views-field-nothing > .field-content > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://doh.wa.gov/licenses-permits-and-certificates/facilities-z/hospitals/acute-care">Acute Care Hospitals</a>`
- XPath: `.views-row:nth-child(3) > .views-field.views-field-nothing > .field-content > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nursing.wa.gov/licensing/apply-license/arnp-license">Advanced Registered Nurse Practitioners (ARNP)</a>`
- XPath: `.views-row:nth-child(4) > .views-field.views-field-nothing > .field-content > a`

*... and 245 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: Heading levels should only increase by one
- HTML: `<h3>A</h3>`
- XPath: `h3:nth-child(1)`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/how-to-guides/get-help-finding-food

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/esa/community-services-offices/basic-food">Basic Food eligibility </a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/sites/default/files/publications/documents/22-297.pdf">Guide on how to apply and use Basic Food benefits</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.washingtonconnection.org/home/">Apply online</a>`
- XPath: `p:nth-child(6) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/esa/community-services-offices/community-services-office">Apply by phone</a>`
- XPath: `p:nth-child(7) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/office-locations">Apply in person at a Community Services Office</a>`
- XPath: `p:nth-child(8) > a`

*... and 12 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/SecureAccess%20Washington%20%28SAW%29%20Login%20for%20State%20Services

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/how-to-guides/secureaccess-washington-saw-login-state-services

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-auth="NotApplicable" data-entity-substitu...="canonical" data-entity-type="node" data-entity-uuid="1d94b174-4417-4bbb-a..." data-linkindex="2" href="/how-to-guides/your-..." title="Original URL: https:...">`
- XPath: `a[data-auth="NotApplicable"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="e3654f8d-d7e9-4499-a727-6373bb57fb6c" href="/how-to-guides/washington-state-launching-wagov-accounts" title="Washington state is launching WA.gov accounts">this page</a>`
- XPath: `p:nth-child(3) > a[data-entity-substitution="canonical"][data-entity-type="node"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://secureaccess.wa.gov/">Log in to SAW</a>`
- XPath: `a[href$="secureaccess.wa.gov/"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://paidleave.wa.gov/login/">Paid Family and Medical Leave</a>`
- XPath: `.node__content > .text-formatted.field--name-body.field--type-text-with-summary > ul > li:nth-child(1) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://secure.dor.wa.gov/home/Login">File a tax return or renew a business license</a>`
- XPath: `.node__content > .text-formatted.field--name-body.field--type-text-with-summary > ul > li:nth-child(2) > a`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/Accessing%20Government%20Assistance

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/agency

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://agr.wa.gov/services/consumer-protection-and-complaints">Report a concern about your food</a>`
- XPath: `.js-view-dom-id-380cfc7f6cbf0403bf2c5f39bc3cee9ef2ce2ddebf04914cf28276e24ff9a04e > .view-content.row > div > ul > li:nth-child(1) > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://agr.wa.gov/washington-agriculture">Learn about agriculture in Washington</a>`
- XPath: `.js-view-dom-id-380cfc7f6cbf0403bf2c5f39bc3cee9ef2ce2ddebf04914cf28276e24ff9a04e > .view-content.row > div > ul > li:nth-child(2) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.arts.wa.gov/center-for-washington-cultural-traditions/">Folk arts &amp; cultural traditions</a>`
- XPath: `.js-view-dom-id-6e64cb259dda478a0d0d6eddd49b13bcc458acac2d68a7fca7ceb2238b45dcf6 > .view-content.row > div > ul > li:nth-child(1) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.arts.wa.gov/my-public-art-portal/">Search the collection of public art</a>`
- XPath: `.js-view-dom-id-6e64cb259dda478a0d0d6eddd49b13bcc458acac2d68a7fca7ceb2238b45dcf6 > .view-content.row > div > ul > li:nth-child(2) > a`

*... and 93 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/businesses

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://dor.wa.gov/open-business">Open a business</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://dor.wa.gov/manage-business">Manage or close a business</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://dor.wa.gov/file-pay-taxes">File and pay B&amp;O taxes</a>`
- XPath: `p:nth-child(6) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.esd.wa.gov/employer-taxes">Unemployment taxes</a>`
- XPath: `p:nth-child(7) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://ecology.wa.gov/Waste-Toxics/Business-waste">Business waste</a>`
- XPath: `p:nth-child(8) > a`

*... and 19 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

**Failure 2:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/SAW-guide_0_0.jpg?itok=UeoHwuKw" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(1) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/public-transportation.jpg?itok=4Rr8FvMC" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/bicycle-commute-guide_99091035_Preview_0.jpg?itok=Et5Etisn" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(6) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/secureaccess-washington-saw-login-state-services">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/SAW-guide_0_0.jpg?itok=UeoHwuKw" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(1) > .card.how-to-lg > .z-img > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/use-public-transportation">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/public-transportation.jpg?itok=4Rr8FvMC" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/bicycle-commuting">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/bicycle-commute-guide_99091035_Preview_0.jpg?itok=Et5Etisn" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(6) > .card.how-to-lg > .z-img > a`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/education

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://washingtonstatereportcard.ospi.k12.wa.us/">State's report card on public instruction</a>`
- XPath: `.item-list:nth-child(1) > ul > li > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.k12.wa.us/certification">Certification</a>`
- XPath: `.item-list:nth-child(2) > ul > li:nth-child(1) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://educationnorthwest.org/">Education Northwest</a>`
- XPath: `a[href$="educationnorthwest.org/"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.k12.wa.us/educator-support">Educators Support</a>`
- XPath: `.item-list:nth-child(2) > ul > li:nth-child(3) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.k12.wa.us/student-success">Student success</a>`
- XPath: `.item-list:nth-child(2) > ul > li:nth-child(4) > .views-field-views-conditional-field.views-field > .field-content > a`

*... and 17 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/families

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.washingtonconnection.org/home/explorecategories.go?locale=en_US&amp;category=FD">Resources to help you find food</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://feedingwashington.org/find-food/">Map of currently open food banks and meal programs in our state</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://doh.wa.gov/you-and-your-family/nutrition-and-physical-activity">Improving health with nutrition and physical activity</a>`
- XPath: `p:nth-child(6) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa211.org/">Washington 2-1-1</a>`
- XPath: `a[href$="wa211.org/"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.hca.wa.gov/about-hca/apple-health-medicaid/how-we-work">Learn how Washington Apple Health works</a>`
- XPath: `p:nth-child(10) > a`

*... and 47 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

**Failure 2:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/lake-diablo-how-to.jpg?itok=jzW2hUAC" width="410" height="210" class="image-style-how-to-image">`
- XPath: `a[href$="become-resident"] > .image-style-how-to-image[width="410"][height="210"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/vote-how-to.jpg?itok=2mVUcT2-" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/elk-herd-near-north%20bend.jpg?itok=FEYy-0rN" width="410" height="210" class="image-style-how-to-image">`
- XPath: `a[href$="get-outside"] > .image-style-how-to-image[width="410"][height="210"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/become-resident">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/lake-diablo-how-to.jpg?itok=jzW2hUAC" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.z-img > a[href$="become-resident"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/vote-participate-local-state-federal-elections">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/vote-how-to.jpg?itok=2mVUcT2-" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/get-outside">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/elk-herd-near-north%20bend.jpg?itok=FEYy-0rN" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.z-img > a[href$="get-outside"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/File%20a%20Complaint

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/health-and-safety

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/adult-care">Adult care</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(1) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/bha">Care for those with addiction and mental health conditions</a>`
- XPath: `a[href$="bha"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.dshs.wa.gov/ddd/">Care for those with developmental disabilities</a>`
- XPath: `a[href$="ddd/"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/altsa/long-term-care-services-information">Long-term care services &amp; information</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(4) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.atg.wa.gov/protecting-seniors">Protecting seniors</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(5) > .views-field-views-conditional-field.views-field > .field-content > a`

*... and 53 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/Historic%20Flood%20Emergency%3A%20Financial%20Resources%20and%20Recovery%20for%20Washingtonians

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/Housing%20Assistance

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/how-to-guides

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: Heading levels should only increase by one
- HTML: `<h3><a href="/how-to-guides/create-your-wagov-account" hreflang="en">Create your WA.gov account</a></h3>`
- XPath: `.col-sm-2.col-lg-3.mb-4:nth-child(1) > .how-to.card > .body > h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/news

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wdfw.wa.gov/fishing/regulations/emergency-rules/lower-columbia-river-open-additional-day-spring-chinook-retention-2026-04" target="_blank">Lower Columbia River to open for additional day of spring Chinook retention</a>`
- XPath: `li:nth-child(1) > .views-field-title.views-field > .field-content > a[target="_blank"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://mil.wa.gov/news/a-focus-on-lahars-in-pierce-county" target="_blank">A focus on lahars in Pierce County</a>`
- XPath: `li:nth-child(2) > .views-field-title.views-field > .field-content > a[target="_blank"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://mil.wa.gov/news/federal-assistance-available-for-flood-survivors" target="_blank">Federal Assistance available for flood survivors</a>`
- XPath: `li:nth-child(3) > .views-field-title.views-field > .field-content > a[target="_blank"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wdfw.wa.gov/newsroom/news-release/april-salmon-fishing-closed-marine-area-11-tacoma-vashon-island-support-conservation-objectives" target="_blank">April salmon fishing closed in Marine Area 11 (Tacoma-Vashon Island) to support conservation objectives</a>`
- XPath: `li:nth-child(4) > .views-field-title.views-field > .field-content > a[target="_blank"]`

*... and 16 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/Protecting%20Your%20Community%20from%20Wildfire

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/recreation

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.arts.wa.gov/center-for-washington-cultural-traditions/">Folk arts &amp; cultural traditions</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(1) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.des.wa.gov/services/facilities/CapitolCampus/MemorialsArt/Pages/default.aspx">Memorials &amp; artwork at the state capitol</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(2) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.arts.wa.gov/my-public-art-portal/">Search the collection of public art</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(3) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://boat.wa.gov/">Boating information portal</a>`
- XPath: `a[href$="boat.wa.gov/"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.uscgboating.org/">Boating safety</a>`
- XPath: `a[href$="uscgboating.org/"]`

*... and 16 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/seniors

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.caregiverslibrary.org/Portals/0/checklistsandforms_NeedsAssessmentWorksheet.pdf">Needs Assessment Worksheet</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/altsa/home-and-community-services/who-contact-find-local-services">Who to contact to find local services</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/ALTSA/resources">Resources for aging by county</a>`
- XPath: `p:nth-child(6) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/altsa/home-and-community-services/services-help-adult-remain-home">Read more about services that help an adult remain at home</a>`
- XPath: `p:nth-child(9) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/sites/default/files/ALTSA/hcs/documents/HCRR_Consumer_Hire_Supervise.pdf">How to find and hire a home care worker</a>`
- XPath: `p:nth-child(10) > a`

*... and 21 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

**Failure 2:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/vote-how-to.jpg?itok=2mVUcT2-" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(1) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/elk-herd-near-north%20bend.jpg?itok=FEYy-0rN" width="410" height="210" class="image-style-how-to-image">`
- XPath: `a[href$="get-outside"] > .image-style-how-to-image[width="410"][height="210"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/SAW-guide_0_0.jpg?itok=UeoHwuKw" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(6) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/vote-participate-local-state-federal-elections">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/vote-how-to.jpg?itok=2mVUcT2-" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(1) > .card.how-to-lg > .z-img > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/get-outside">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/elk-herd-near-north%20bend.jpg?itok=FEYy-0rN" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.z-img > a[href$="get-outside"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/secureaccess-washington-saw-login-state-services">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/SAW-guide_0_0.jpg?itok=UeoHwuKw" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(6) > .card.how-to-lg > .z-img > a`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/state-employee-contacts

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">state government agency</a>`
- XPath: `.view-empty > a[href$="agency"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/travel

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.portofbellingham.com/888/Airport">Bellingham International Airport</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(1) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wsdot.wa.gov/travel/aviation">Local airports &amp; pilots</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(2) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.portseattle.org/sea-tac">Seattle-Tacoma International Airport</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(3) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://spokaneairports.net/">Spokane International Airport</a>`
- XPath: `a[href$="spokaneairports.net/"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.flytricities.com/">Tri-Cities Regional Airport</a>`
- XPath: `a[href$="flytricities.com/"]`

*... and 17 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/visitors

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.arts.wa.gov/center-for-washington-cultural-traditions/">Center for Washington Cultural Traditions</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.des.wa.gov/services/facilities-leasing/capitol-campus/memorials-and-artwork">Memorials &amp; Artwork at the State Capitol</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.arts.wa.gov/my-public-art-portal/">Search the collection of public art</a>`
- XPath: `p:nth-child(6) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://art-collecting.com/nonprofits_wa.htm">List of Washington art museums</a>`
- XPath: `p:nth-child(7) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.arts.wa.gov/creative-district-communities/">Washington Creative Districts</a>`
- XPath: `p:nth-child(8) > a`

*... and 21 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

**Failure 2:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/lake-diablo-how-to.jpg?itok=jzW2hUAC" width="410" height="210" class="image-style-how-to-image">`
- XPath: `a[href$="become-resident"] > .image-style-how-to-image[width="410"][height="210"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/gambling.jpg?itok=ZYzVHYR9" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/elk-herd-near-north%20bend.jpg?itok=FEYy-0rN" width="410" height="210" class="image-style-how-to-image">`
- XPath: `a[href$="get-outside"] > .image-style-how-to-image[width="410"][height="210"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/become-resident">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/lake-diablo-how-to.jpg?itok=jzW2hUAC" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.z-img > a[href$="become-resident"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/lottery-gambling">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/gambling.jpg?itok=ZYzVHYR9" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/get-outside">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/elk-herd-near-north%20bend.jpg?itok=FEYy-0rN" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.z-img > a[href$="get-outside"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/work

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://ecology.wa.gov/Waste-Toxics/Business-waste">Business waste</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(1) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://dor.wa.gov/file-pay-taxes">File and pay Business &amp; Occupation (B&amp;O) taxes</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(2) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://paidleave.wa.gov/employer-roles-responsibilities/">Paid leave reporting</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(3) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.esd.wa.gov/employer-taxes">Unemployment taxes</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(4) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://lni.wa.gov/insurance/">Workers' compensation coverage</a>`
- XPath: `a[href$="insurance/"]`

*... and 28 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/Workers%E2%80%99%20Rights

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/your-government

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://tre.wa.gov/home/debt-management/">Debt management</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(1) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.erfc.wa.gov/">Economic and Revenue Forecast Council</a>`
- XPath: `a[href$="erfc.wa.gov/"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.atg.wa.gov/open-government">Learn about Open Government</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(3) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://sao.wa.gov/reports-data/report-types/">Reports &amp; data on government</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(4) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://fiscal.wa.gov/">State budget and fiscal information</a>`
- XPath: `a[href$="fiscal.wa.gov/"]`

*... and 60 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/Your%20New%20WA.gov%20Account

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/ar/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/es/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/hi/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/how-to-guides/accessing-government-assistance

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/esa/community-services-offices/eligibility-dshs-services">How to qualify for DSHS services</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/esa/community-services-offices/how-apply-services">Apply for services</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/office-locations?field_geofield_distance%5Bdistance%5D=100&amp;field_geofield_distance%5Bunit%5D=3959&amp;field_geofield_distance%5Borigin%5D=&amp;field_office_type_tid%5B0%5D=9651">Find your local Community Service Office</a>`
- XPath: `p:nth-child(6) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/esa/csd-mobile-office/mobile-community-services-office">Mobile Community Services Office that travels to you if you live in a rural area</a>`
- XPath: `p:nth-child(7) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/esa/community-services-offices/emergency-programs">Get more information on emergency programs</a>`
- XPath: `p:nth-child(10) > a`

*... and 24 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/how-to-guides/file-complaint

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.atg.wa.gov/file-complaint#Online" rel="noreferrer noopener" target="_blank">File a complaint online</a>`
- XPath: `p:nth-child(4) > a[rel="noreferrer noopener"][target="_blank"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.atg.wa.gov/file-complaint#Mail" rel="noreferrer noopener" target="_blank">File a complaint by mail</a>`
- XPath: `p:nth-child(5) > a[rel="noreferrer noopener"][target="_blank"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.atg.wa.gov/file-complaint#Complaint" rel="noreferrer noopener" target="_blank">Learn how the complaint process works</a>`
- XPath: `p:nth-child(6) > a[rel="noreferrer noopener"][target="_blank"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.atg.wa.gov/queja" rel="noreferrer noopener" target="_blank">Presentar una queja</a>`
- XPath: `p:nth-child(7) > a[href$="queja"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.atg.wa.gov/consumer-issues" rel="noreferrer noopener" target="_blank">List of consumer issues A-Z</a>`
- XPath: `p:nth-child(10) > a[rel="noreferrer noopener"][target="_blank"]`

*... and 31 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/how-to-guides/historic-flood-emergency-financial-resources-and-recovery-washingtonians

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#cash-assistance">Cash Assistance</a>`
- XPath: `a[href$="#cash-assistance"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#food-assistance">Food Assistance</a>`
- XPath: `a[href$="#food-assistance"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#housing-property-assistance">Housing and Property Assistance</a>`
- XPath: `a[href="#housing-property-assistance"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#livestock-assistance">Livestock Assistance</a>`
- XPath: `a[href$="#livestock-assistance"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#medication-equipment-replacement">Medication and Medical Equipment Replacement</a>`
- XPath: `#block-drupalbase-custom-floodresourcelinks > .content > .text-formatted.field--name-body.field--type-text-with-summary > ul > li:nth-child(5) > a`

*... and 42 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/how-to-guides/housing-assistance

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.homelessshelterdirectory.org/state/washington">Homeless shelter directory</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="56752f9f-bb4d-4b0f-86d7-de34f74be1f4" href="/how-to-guides/get-help-finding-food" title="Get Help Finding Food">Get Help Finding Food Guide</a>`
- XPath: `a[title="Get Help Finding Food"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.commerce.wa.gov/serving-communities/homelessness/office-of-youth-homelessness/#programs">Learn more about the Office of Homeless Youth programs</a>`
- XPath: `p:nth-child(10) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://deptofcommerce.app.box.com/s/o27hkoudakw1au21dfw2dzl5y4x8ar1a">List of contracted service providers</a>`
- XPath: `p:nth-child(11) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.commerce.wa.gov/serving-communities/homelessness/youth-and-young-adult-eviction-rent-assistance-program/">Youth and Young Adult Eviction Rent Assistance Program</a>`
- XPath: `p:nth-child(12) > a`

*... and 7 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/how-to-guides/protecting-your-community-wildfire

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dnr.wa.gov/publications/rp_fireprev_outdoors.pdf">Prevent wildfires when having fun outside</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dnr.wa.gov/publications/rp_fireprev_firework.pdf">Fireworks safety</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dnr.wa.gov/publications/rp_fireprev_campground.pdf">Campfire safety</a>`
- XPath: `p:nth-child(6) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dnr.wa.gov/publications/rp_fire_how_to_prepare_wildfire.pdf">How to prepare for a wildfire </a>`
- XPath: `p:nth-child(9) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dnr.wa.gov/publications/rp_fireprev_home.pdf">Defend your home from wildfire</a>`
- XPath: `p:nth-child(10) > a`

*... and 16 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/how-to-guides/workers-rights

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://lni.wa.gov/workers-rights/wages/minimum-wage/">Learn more about wage laws in our state</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://lni.wa.gov/workers-rights/wages/equal-pay-opportunities-act/">Read about the Equal Pay and Opportunities Act</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://lni.wa.gov/workers-rights/workplace-policies/rest-breaks-meal-periods-and-schedules">Read about all your rights regarding rest and meal breaks</a>`
- XPath: `p:nth-child(8) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dol.gov/agencies/whd/fact-sheets/73-flsa-break-time-nursing-mothers">Additional rights for nursing mothers</a>`
- XPath: `p:nth-child(9) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.lni.wa.gov/safety-health/">Discover more about safety and health</a>`
- XPath: `p:nth-child(12) > a`

*... and 20 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/how-to-guides/your-new-wagov-account

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode" tabindex="" id="movie_player" data-version="/s/player/b174a5bb/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `iframe`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="d27c5548-3d72-4914-bde8-38f3be2e7b28" href="/get-help" title="Get help">Get Help&nbsp;for support creating or using&nbsp;your WA.gov&nbsp;account.</a>`
- XPath: `a[title="Get help"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/ja/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/ko/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/node/61721

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/index.html">https://wa.gov</a>`
- XPath: `li:nth-child(1) > a[href="https://wa.gov/index.html"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html">Read about WCAG Color contrast standards</a>`
- XPath: `li:nth-child(4) > ul > li:nth-child(1) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://webaim.org/resources/contrastchecker/">Check your color contrast at WebAIM</a>`
- XPath: `li:nth-child(4) > ul > li:nth-child(2) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/index.html">Visit WA.gov</a>`
- XPath: `li:nth-child(4) > a[href="https://wa.gov/index.html"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/ru/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/uk/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/vi/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/accessibility-basics/learn-about-disabilities

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/education-for-children-through-high-school

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/accessibility-in-washington" rel="noreferrer noopener" target="_blank">Accessibility in Washington</a>`
- XPath: `a[href="/accessibility-in-washington"][rel="noreferrer noopener"][target="_blank"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/accessibility-in-washington/accessibility-basics/learn-about-disabilities" rel="noreferrer noopener" target="_blank">Different types of visual and cognitive disabilities </a>`
- XPath: `li[paraid="1736683443"] > a[rel="noreferrer noopener"][target="_blank"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/accessibility-in-washington/accessibility-basics/disability-etiquette-for-respecting-people-with-disabilities" rel="noreferrer noopener" target="_blank">Disability etiquette</a>`
- XPath: `li[paraid="782388127"] > a[rel="noreferrer noopener"][target="_blank"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/accessibility-in-washington/accessibility-basics/how-to-make-physical-and-digital-spaces-accessible" rel="noreferrer noopener" target="_blank">Physical and digital accessible design</a>`
- XPath: `li[paraid="243822543"] > a[rel="noreferrer noopener"][target="_blank"]`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/accessibility-in-washington/education-recreation-people-with-disabilities/accessibility-in-higher-education" rel="noreferrer noopener" target="_blank">Accessibility in higher education</a>`
- XPath: `li[paraid="1894270935"] > a[rel="noreferrer noopener"][target="_blank"]`

*... and 10 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

**Failure 2:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/public-transportation.jpg?itok=4Rr8FvMC" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(1) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-07/government-assistance-guide.jpg?itok=Tne0SruB" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

**Failure 4:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-10/workers-rights.jpg?itok=Q6H9O4y0" width="410" height="210" class="image-style-how-to-image">`
- XPath: `a[href$="workers-rights"] > .image-style-how-to-image[width="410"][height="210"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/use-public-transportation">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/public-transportation.jpg?itok=4Rr8FvMC" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(1) > .card.how-to-lg > .z-img > a`

**Failure 2:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/accessing-government-assistance">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-07/government-assistance-guide.jpg?itok=Tne0SruB" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a`

**Failure 3:**
- First identified: 2026-04-16
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/workers-rights">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-10/workers-rights.jpg?itok=Q6H9O4y0" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.z-img > a[href$="workers-rights"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/accessibility-in-washington

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-16
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/people-with-disabilities/schools-and-universities

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.wssb.wa.gov/services/outreach/birth-three">Birth to Three \| Washington State School for the Blind</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wapave.org/early-intervention-how-to-access-services-for-children-birth-to-3-in-washington/#:~:text=In%20Washington%2C%20the%20Department%20of,Infants%20and%20Toddlers%20(ESIT).">Early Intervention: How to Access Services for Children Birth to 3 in Washington - PAVE</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- First identified: 2026-04-16
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.wssb.wa.gov/">Home \| Washington State School for the Blind</a>`
- XPath: `a[href$="wssb.wa.gov/"]`

*... and 20 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/zh-hant/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/zh-hans/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/extracurriculars-for-children-with-disabilities

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/accessibility-in-higher-education

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/education-recreation/education-children-through-high-school

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/workplace-accessibility/employment-and-workers-rights-for-people-with-disabilities

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-16
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

