# Scan Report: WA.gov Washington State

- Issue: https://github.com/mgifford/open-scans/issues/63
- Submitted by: mgifford
- Scanned at: 2026-03-19T01:07:12.850Z
- Engines used: AXE, ACCESSLINT
- Scan duration: 12.7 minutes
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
- axe outcomes: 62221 passed, 1662 failed, 1011 cantTell, 3481 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 7347 passed, 565 failed (565 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 0

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://wa.gov/work/professional-licenses) | 252 | 5 | **257** | 403 Forbidden |
| [View Page](https://wa.gov/agency) | 99 | 4 | **103** | 403 Forbidden |
| [View Page](https://wa.gov/your-government) | 67 | 4 | **71** | 403 Forbidden |
| [View Page](https://wa.gov/health-safety/public-utilities) | 65 | 5 | **70** | 403 Forbidden |
| [View Page](https://wa.gov/families) | 60 | 10 | **70** | 403 Forbidden |
| [View Page](https://wa.gov/recreation/parks) | 33 | 34 | **67** | 403 Forbidden |
| [View Page](https://wa.gov/health-and-safety) | 60 | 4 | **64** | 403 Forbidden |
| [View Page](https://wa.gov/how-to-guides/historic-flood-emergency-financial-resources-and-recovery-washingtonians) | 46 | 4 | **50** | 403 Forbidden |
| [View Page](https://wa.gov/people-with-disabilities/blindness-related-tools-and-services) | 44 | 4 | **48** | 403 Forbidden |
| [View Page](https://wa.gov/people-with-disabilities/rights-and-self-advocacy) | 42 | 4 | **46** | 403 Forbidden |

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
| link-name | **17** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| heading-order | **4** of 86 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |

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

#### Pattern 4: Affects 12 page(s) - 12 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a href="/Create%20your%20WA.gov%20account"></a>
```

**XPath** (use in browser DevTools):
```
.masonry-item.views-row:nth-child(1) > .views-field-nothing.views-field > .field-content > a:nth-child(1)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.masonry-item.views-row:nth-child(1) > .views-field-nothing.views-field > .field-content > a:nth-child(1)')`
5. The element will be highlighted

**Affected Pages**:
- https://wa.gov/
- https://wa.gov/node
- https://wa.gov/ar/node
- https://wa.gov/es/node
- https://wa.gov/hi/node
- *...and 7 more page(s)*

---

#### Pattern 5: Affects 11 page(s) - 11 occurrence(s)

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

#### Pattern 6: Affects 9 page(s) - 9 occurrence(s)

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

#### Pattern 7: Affects 9 page(s) - 9 occurrence(s)

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

#### Pattern 8: Affects 9 page(s) - 9 occurrence(s)

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

#### Pattern 9: Affects 9 page(s) - 9 occurrence(s)

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

#### Pattern 10: Affects 9 page(s) - 9 occurrence(s)

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

#### Pattern 11: Affects 5 page(s) - 5 occurrence(s)

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

#### Pattern 12: Affects 5 page(s) - 5 occurrence(s)

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

#### Pattern 13: Affects 5 page(s) - 5 occurrence(s)

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

#### Pattern 14: Affects 5 page(s) - 5 occurrence(s)

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

#### Pattern 15: Affects 5 page(s) - 5 occurrence(s)

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

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://wa.gov/ | https://wa.gov/ | FAIL | 403 | no | 9407 | 10 | 0 | 0 | 14 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, link-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/workplace-accessibility/support-employees-with-disabilities-in-the-workplace | https://wa.gov/accessibility-in-washington/workplace-accessibility/support-employees-with-disabilities-in-the-workplace | FAIL | 403 | no | 7278 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/accessibility-basics | https://wa.gov/accessibility-in-washington/accessibility-basics | FAIL | 403 | no | 7303 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/accessibility-laws | https://wa.gov/accessibility-in-washington/accessibility-laws | FAIL | 403 | no | 7374 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/accessibility-resources | https://wa.gov/accessibility-in-washington/accessibility-resources | FAIL | 403 | no | 7668 | 1 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, keyboard-accessible/focus-order, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/education-recreation | https://wa.gov/accessibility-in-washington/education-recreation | FAIL | 403 | no | 7369 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/health-safety-for-people-with-disabilities | https://wa.gov/accessibility-in-washington/health-safety-for-people-with-disabilities | FAIL | 403 | no | 7505 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/transportation-and-personal-mobility | https://wa.gov/accessibility-in-washington/transportation-and-personal-mobility | FAIL | 403 | no | 7442 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/workplace-accessibility | https://wa.gov/accessibility-in-washington/workplace-accessibility | FAIL | 403 | no | 7513 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/people-with-disabilities/accessibility-policy | https://wa.gov/people-with-disabilities/accessibility-policy | FAIL | 403 | no | 11423 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/people-with-disabilities/accessibility-wa-state-law-and-policy | https://wa.gov/people-with-disabilities/accessibility-wa-state-law-and-policy | FAIL | 403 | no | 8263 | 18 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/people-with-disabilities/electronic-and-data-accessibility | https://wa.gov/people-with-disabilities/electronic-and-data-accessibility | FAIL | 403 | no | 8615 | 38 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/accessibility-basics/disability-etiquette-for-respecting-people-with-disabilities | https://wa.gov/accessibility-in-washington/accessibility-basics/disability-etiquette-for-respecting-people-with-disabilities | FAIL | 403 | no | 7199 | 2 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, navigable/heading-order, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/accessibility-basics/how-to-make-physical-and-digital-spaces-accessible | https://wa.gov/accessibility-in-washington/accessibility-basics/how-to-make-physical-and-digital-spaces-accessible | FAIL | 403 | no | 7640 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/report-suspected-fraud | https://wa.gov/report-suspected-fraud | FAIL | 403 | no | 8619 | 2 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/people-with-disabilities/blindness-related-tools-and-services | https://wa.gov/people-with-disabilities/blindness-related-tools-and-services | FAIL | 403 | no | 8834 | 44 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/checklists-and-tools | https://wa.gov/checklists-and-tools | FAIL | 403 | no | 8869 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/error | https://wa.gov/error | FAIL | 403 | no | 8106 | 5 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/get-help | https://wa.gov/get-help | FAIL | 403 | no | 11248 | 13 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/heading-order, text-alternatives/img-alt |
| https://wa.gov/privacy-notice | https://wa.gov/privacy-notice | FAIL | 403 | no | 8605 | 12 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/test | https://wa.gov/test | FAIL | 403 | no | 8170 | 2 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/use-our-logo | https://wa.gov/use-our-logo | FAIL | 403 | no | 8303 | 7 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/washingtons-it-strategic-plan | https://wa.gov/washingtons-it-strategic-plan | FAIL | 403 | no | 8263 | 11 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/get-help/get-touch | https://wa.gov/get-help/get-touch | FAIL | 403 | no | 8187 | 7 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/Get%20Help%20Finding%20Food | https://wa.gov/Get%20Help%20Finding%20Food | FAIL | 403 | no | 7924 | 6 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/health-safety/public-utilities | https://wa.gov/health-safety/public-utilities | FAIL | 403 | no | 9057 | 65 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, keyboard-accessible/focus-order, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/people-with-disabilities/age-55-and-senior-blind-individuals | https://wa.gov/people-with-disabilities/age-55-and-senior-blind-individuals | FAIL | 403 | no | 10631 | 14 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/people-with-disabilities/creating-disability-friendly-spaces | https://wa.gov/people-with-disabilities/creating-disability-friendly-spaces | FAIL | 403 | no | 8179 | 20 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/people-with-disabilities/general-blindness-considerations | https://wa.gov/people-with-disabilities/general-blindness-considerations | FAIL | 403 | no | 7961 | 10 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/people-with-disabilities/getting-what-you-need | https://wa.gov/people-with-disabilities/getting-what-you-need | FAIL | 403 | no | 8604 | 37 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/people-with-disabilities/human-relations | https://wa.gov/people-with-disabilities/human-relations | FAIL | 403 | no | 8296 | 25 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/people-with-disabilities/rights-and-self-advocacy | https://wa.gov/people-with-disabilities/rights-and-self-advocacy | FAIL | 403 | no | 8425 | 42 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/recreation/parks | https://wa.gov/recreation/parks | FAIL | 403 | no | 8566 | 33 | 0 | 0 | 34 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/work/professional-licenses | https://wa.gov/work/professional-licenses | FAIL | 403 | no | 11560 | 252 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/heading-order, text-alternatives/img-alt |
| https://wa.gov/how-to-guides/get-help-finding-food | https://wa.gov/how-to-guides/get-help-finding-food | FAIL | 403 | no | 8821 | 19 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/SecureAccess%20Washington%20%28SAW%29%20Login%20for%20State%20Services | https://wa.gov/SecureAccess%20Washington%20%28SAW%29%20Login%20for%20State%20Services | FAIL | 403 | no | 8358 | 6 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/how-to-guides/secureaccess-washington-saw-login-state-services | https://wa.gov/how-to-guides/secureaccess-washington-saw-login-state-services | FAIL | 403 | no | 8338 | 8 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/Accessing%20Government%20Assistance | https://wa.gov/Accessing%20Government%20Assistance | FAIL | 403 | no | 8090 | 6 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/agency | https://wa.gov/agency | FAIL | 403 | no | 12242 | 99 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/businesses | https://wa.gov/businesses | FAIL | 403 | no | 8544 | 32 | 0 | 0 | 10 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-name, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, text-alternatives/img-alt |
| https://wa.gov/education | https://wa.gov/education | FAIL | 403 | no | 10968 | 24 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/image-alt-words, text-alternatives/img-alt |
| https://wa.gov/families | https://wa.gov/families | FAIL | 403 | no | 8733 | 60 | 0 | 0 | 10 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-name, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, text-alternatives/img-alt |
| https://wa.gov/File%20a%20Complaint | https://wa.gov/File%20a%20Complaint | FAIL | 403 | no | 8058 | 6 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/health-and-safety | https://wa.gov/health-and-safety | FAIL | 403 | no | 8934 | 60 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/Historic%20Flood%20Emergency%3A%20Financial%20Resources%20and%20Recovery%20for%20Washingtonians | https://wa.gov/Historic%20Flood%20Emergency%3A%20Financial%20Resources%20and%20Recovery%20for%20Washingtonians | FAIL | 403 | no | 9249 | 6 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/Housing%20Assistance | https://wa.gov/Housing%20Assistance | FAIL | 403 | no | 8513 | 6 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/how-to-guides | https://wa.gov/how-to-guides | FAIL | 403 | no | 8811 | 3 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/heading-order, text-alternatives/image-alt-words, text-alternatives/img-alt |
| https://wa.gov/news | https://wa.gov/news | FAIL | 403 | no | 9556 | 22 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/node | https://wa.gov/node | FAIL | 403 | no | 8794 | 10 | 0 | 0 | 14 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, link-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, text-alternatives/img-alt |
| https://wa.gov/Protecting%20Your%20Community%20from%20Wildfire | https://wa.gov/Protecting%20Your%20Community%20from%20Wildfire | FAIL | 403 | no | 7946 | 6 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/recreation | https://wa.gov/recreation | FAIL | 403 | no | 9996 | 23 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/seniors | https://wa.gov/seniors | FAIL | 403 | no | 8392 | 34 | 0 | 0 | 10 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-name, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, text-alternatives/img-alt |
| https://wa.gov/state-employee-contacts | https://wa.gov/state-employee-contacts | FAIL | 403 | no | 8540 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/travel | https://wa.gov/travel | FAIL | 403 | no | 8271 | 24 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/visitors | https://wa.gov/visitors | FAIL | 403 | no | 8601 | 34 | 0 | 0 | 10 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-name, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, text-alternatives/img-alt |
| https://wa.gov/work | https://wa.gov/work | FAIL | 403 | no | 9115 | 35 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/Workers%E2%80%99%20Rights | https://wa.gov/Workers%E2%80%99%20Rights | FAIL | 403 | no | 7893 | 6 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/your-government | https://wa.gov/your-government | FAIL | 403 | no | 8855 | 67 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/Your%20New%20WA.gov%20Account | https://wa.gov/Your%20New%20WA.gov%20Account | FAIL | 403 | no | 7973 | 6 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/ar/node | https://wa.gov/ar/node | FAIL | 403 | no | 9535 | 10 | 0 | 0 | 14 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, link-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, text-alternatives/img-alt |
| https://wa.gov/es/node | https://wa.gov/es/node | FAIL | 403 | no | 10308 | 10 | 0 | 0 | 15 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, link-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, navigable/page-has-heading-one, text-alternatives/img-alt |
| https://wa.gov/hi/node | https://wa.gov/hi/node | FAIL | 403 | no | 8899 | 10 | 0 | 0 | 15 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, link-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, navigable/page-has-heading-one, text-alternatives/img-alt |
| https://wa.gov/how-to-guides/accessing-government-assistance | https://wa.gov/how-to-guides/accessing-government-assistance | FAIL | 403 | no | 8876 | 31 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/how-to-guides/file-complaint | https://wa.gov/how-to-guides/file-complaint | FAIL | 403 | no | 10076 | 38 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/how-to-guides/historic-flood-emergency-financial-resources-and-recovery-washingtonians | https://wa.gov/how-to-guides/historic-flood-emergency-financial-resources-and-recovery-washingtonians | FAIL | 403 | no | 8865 | 46 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/how-to-guides/housing-assistance | https://wa.gov/how-to-guides/housing-assistance | FAIL | 403 | no | 8612 | 14 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/how-to-guides/protecting-your-community-wildfire | https://wa.gov/how-to-guides/protecting-your-community-wildfire | FAIL | 403 | no | 8321 | 23 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/how-to-guides/workers-rights | https://wa.gov/how-to-guides/workers-rights | FAIL | 403 | no | 10264 | 27 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/how-to-guides/your-new-wagov-account | https://wa.gov/how-to-guides/your-new-wagov-account | FAIL | 403 | no | 8344 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/ja/node | https://wa.gov/ja/node | FAIL | 403 | no | 11544 | 10 | 0 | 0 | 15 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, link-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, navigable/page-has-heading-one, text-alternatives/img-alt |
| https://wa.gov/ko/node | https://wa.gov/ko/node | FAIL | 403 | no | 9182 | 10 | 0 | 0 | 15 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, link-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, navigable/page-has-heading-one, text-alternatives/img-alt |
| https://wa.gov/node/61721 | https://wa.gov/node/61721 | FAIL | 403 | no | 8306 | 7 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/ru/node | https://wa.gov/ru/node | FAIL | 403 | no | 13306 | 10 | 0 | 0 | 15 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, link-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, navigable/page-has-heading-one, text-alternatives/img-alt |
| https://wa.gov/uk/node | https://wa.gov/uk/node | FAIL | 403 | no | 9115 | 10 | 0 | 0 | 15 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, link-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, navigable/page-has-heading-one, text-alternatives/img-alt |
| https://wa.gov/vi/node | https://wa.gov/vi/node | FAIL | 403 | no | 12343 | 10 | 0 | 0 | 14 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, link-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/accessibility-basics/learn-about-disabilities | https://wa.gov/accessibility-in-washington/accessibility-basics/learn-about-disabilities | FAIL | 403 | no | 11043 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/education-for-children-through-high-school | https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/education-for-children-through-high-school | FAIL | 403 | no | 7337 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/people-with-disabilities | https://wa.gov/people-with-disabilities | FAIL | 403 | no | 8649 | 23 | 0 | 0 | 11 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt, link-name, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, text-alternatives/image-alt-words, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington | https://wa.gov/accessibility-in-washington | FAIL | 403 | no | 7142 | 2 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/people-with-disabilities/schools-and-universities | https://wa.gov/people-with-disabilities/schools-and-universities | FAIL | 403 | no | 9392 | 26 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/zh-hant/node | https://wa.gov/zh-hant/node | FAIL | 403 | no | 10207 | 10 | 0 | 0 | 15 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, link-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, navigable/page-has-heading-one, text-alternatives/img-alt |
| https://wa.gov/zh-hans/node | https://wa.gov/zh-hans/node | FAIL | 403 | no | 9038 | 10 | 0 | 0 | 15 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt, link-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/link-name, navigable/page-has-heading-one, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/extracurriculars-for-children-with-disabilities | https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/extracurriculars-for-children-with-disabilities | FAIL | 403 | no | 7342 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/accessibility-in-higher-education | https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/accessibility-in-higher-education | FAIL | 403 | no | 9296 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/education-recreation/education-children-through-high-school | https://wa.gov/accessibility-in-washington/education-recreation/education-children-through-high-school | FAIL | 403 | no | 7714 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |
| https://wa.gov/accessibility-in-washington/workplace-accessibility/employment-and-workers-rights-for-people-with-disabilities | https://wa.gov/accessibility-in-washington/workplace-accessibility/employment-and-workers-rights-for-people-with-disabilities | FAIL | 403 | no | 7629 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/region, text-alternatives/img-alt |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://wa.gov/

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/Create%20your%20WA.gov%20account"></a>`
- XPath: `.masonry-item.views-row:nth-child(1) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/SecureAccess%20Washington%20%28SAW%29%20Login%20for%20State%20Services"></a>`
- XPath: `.masonry-item.views-row:nth-child(2) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/Historic%20Flood%20Emergency%3A%20Financial%20Resources%20and%20Recovery%20for%20Washingtonians"></a>`
- XPath: `.masonry-item.views-row:nth-child(3) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/File%20a%20Complaint"></a>`
- XPath: `a[href$="File%20a%20Complaint"]`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="/Workers%E2%80%99%20Rights"></a>`
- XPath: `a[href$="Workers%E2%80%99%20Rights"]`

*... and 4 more failures for this rule*

### https://wa.gov/accessibility-in-washington/workplace-accessibility/support-employees-with-disabilities-in-the-workplace

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/accessibility-basics

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/accessibility-laws

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/accessibility-resources

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/education-recreation

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/health-safety-for-people-with-disabilities

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/transportation-and-personal-mobility

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/workplace-accessibility

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/accessibility-policy

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nwadacenter.org/index.php?q=training/">Training \| ADANW (nwadacenter.org)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://adata.org/ada-training">ADA Training \| ADA National Network (adata.org)</a>`
- XPath: `a[href$="ada-training"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.disabilityempowerment.org/consulting-for-businesses">What We Do: Consulting for Businesses — Disability Empowerment Center</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(3) > a`

*... and 18 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/accessibility-wa-state-law-and-policy

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://apps.leg.wa.gov/rcw/default.aspx?cite=49.60.030">RCW 49.60.030: Freedom from discrimination—Declaration of civil rights</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://app.leg.wa.gov/RCW/default.aspx?cite=70.84.010">RCW 70.84.010: Declaration—Policy. (wa.gov)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.hum.wa.gov/sites/default/files/public/publications/Disability%20Q%20and%20A_updated%202012.pdf">Guide to Disability and Washington State Nondiscrimination Laws</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(3) > a`

*... and 12 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/electronic-and-data-accessibility

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="Funding%20assistive%20technology%20in%20the%20workplace">Small Business, Big Tech: Funding Assistive Technology in the Workplace (accessibility.com)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://dsb.wa.gov/assistive-technology-0">Assistive Technology \| DSB - Wa Dept of Services for the Blind</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://dsb.wa.gov/resources/accessible-documents-and-websites">Accessible Documents and Websites \| DSB - Wa Dept of Services for the Blind</a>`
- XPath: `ul:nth-child(4) > li:nth-child(1) > a`

*... and 32 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/accessibility-basics/disability-etiquette-for-respecting-people-with-disabilities

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3 paraeid="{22822a97-584b-47c5-a5c6-b0f92da819e5}{37}" paraid="1333256644"><a href="https://www.cdc.gov/ncbddd/disabilityandhealth/materials/factsheets/fs-communicating-with-people.html" rel="noreferrer noopener" target="_blank">Using people-first language</a>&nbsp;</h3>`
- XPath: `h3[paraid="1333256644"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/accessibility-basics/how-to-make-physical-and-digital-spaces-accessible

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/report-suspected-fraud

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/people-with-disabilities/blindness-related-tools-and-services

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://guidedogusersinc.org/resources/guide-dog-training-schools/">List of Guide Dog schools</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://guidedogusersinc.org/resources">Guide Dog Users Inc Resources</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.hum.wa.gov/sites/default/files/public/publications/Service%20Animals%20and%20the%20Washington%20Law%20Against%20Discrimination-032019.pdf">Guide to Service Animals and Washington State Law </a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(3) > a`

*... and 38 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/checklists-and-tools

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.hum.wa.gov/sites/default/files/public/publications/disbselfassess%20updated.pdf">HRC Self-Assessment for Best Practice - Employment</a>`
- XPath: `.layout__region > .text-formatted.field--name-body.field--type-text-with-summary > ul > li > a`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/error

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/how-to-guides">How-to-guides</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/form/contact-us-for-support-with-your">contact us to get quick assistance</a>`
- XPath: `p:nth-child(4) > a`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/get-help

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#create-account">create&nbsp;a WA.gov account</a>`
- XPath: `li[paraid="1764699694"] > a[href$="#create-account"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/how-to-guides/secureaccess-washington-saw-login-state-services" rel="noreferrer noopener" target="_blank">SAW account</a>`
- XPath: `li[paraid="718587847"] > a[target="_blank"][rel="noreferrer noopener"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#finding-info" rel="noreferrer noopener">unemployment</a>`
- XPath: `a[href$="#finding-info"][rel="noreferrer noopener"]:nth-child(1)`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#finding-info" rel="noreferrer noopener">licensing</a>`
- XPath: `a[href$="#finding-info"][rel="noreferrer noopener"]:nth-child(2)`

*... and 6 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h2 aria-level="4" id="create-account" paraeid="{5f11862d-080e-4ae3-8c20-35f719db1398}{210}" paraid="1676407293" role="heading">Create a&nbsp;WA.gov&nbsp;account</h2>`
- XPath: `#create-account`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/privacy-notice

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.sos.wa.gov/archives/">State Archives</a>`
- XPath: `p:nth-child(11) > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.gpo.gov/fdsys/pkg/USCODE-2011-title15/html/USCODE-2011-title15-chap91-sec6501.htm">Children's Online Privacy Protection Act</a>`
- XPath: `p:nth-child(13) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://apps.leg.wa.gov/RCW/default.aspx?cite=42.56">RCW 42.56</a>`
- XPath: `a:nth-child(3)`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://apps.leg.wa.gov/RCW/default.aspx?cite=42.56.070">RCW 42.56.070(6)</a>`
- XPath: `a:nth-child(7)`

*... and 6 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/test

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/use-our-logo

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/index.html">https://wa.gov</a>`
- XPath: `li:nth-child(1) > a[href="https://wa.gov/index.html"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html">Read about WCAG Color contrast standards</a>`
- XPath: `li:nth-child(4) > ul > li:nth-child(1) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://webaim.org/resources/contrastchecker/">Check your color contrast at WebAIM</a>`
- XPath: `li:nth-child(4) > ul > li:nth-child(2) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/index.html">Visit WA.gov</a>`
- XPath: `li:nth-child(4) > a[href="https://wa.gov/index.html"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/washingtons-it-strategic-plan

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong data-end="511" data-start="490">RCW 43.105.220(1)</strong>`
- XPath: `strong[data-end="511"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/sites/default/files/2025-08/Washington%20State%20IT%20Strategic%20Plan-8.27.25.pdf">Learn more about Washington's IT Strategic Plan</a>`
- XPath: `p[data-end="1189"] > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://watech.wa.gov">Washington Technology Solutions</a>`
- XPath: `p[data-end="1517"] > a[href$="watech.wa.gov"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/sites/default/files/2025-08/Washington%20State%20IT%20Strategic%20Plan-8.27.25.pdf">Washington's IT Strategic Plan 2025-2028</a>`
- XPath: `.col-md-3 > ul:nth-child(2) > li:nth-child(1) > a`

*... and 5 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/get-help/get-touch

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/get-help">Get Help</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="get-help"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/agency" rel="noreferrer noopener" target="_blank">Contact the agency</a>`
- XPath: `a[rel="noreferrer noopener"][target="_blank"][href$="agency"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/get-help">Get Help</a>`
- XPath: `p:nth-child(5) > a[href$="get-help"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/form/contact-us-for-support-with-your">Submit a help ticket</a>`
- XPath: `li:nth-child(1) > p > a`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/Get%20Help%20Finding%20Food

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/health-safety/public-utilities

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/health-and-safety">Health &amp; Safety</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="health-and-safety"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.nwnatural.com/">Northwest Natural Gas</a>`
- XPath: `a[href$="nwnatural.com/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.rustonwa.org/departments/utility-department/">Town of Ruston </a>`
- XPath: `tr:nth-child(2) > .views-field-title[headers="view-title-table-column"] > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://townofcouleedam.org/billing-and-payments">City of Coulee Dam </a>`
- XPath: `tr:nth-child(3) > .views-field-title[headers="view-title-table-column"] > a`

*... and 59 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/age-55-and-senior-blind-individuals

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://visionaware.org/emotional-support/for-family-and-friends/guidance-for-caregivers-of-individuals-who-are-blind-or-visually-impaired/resource-list-for-caregivers-of-individuals-with-vision-loss/">Guidance for Caregivers of Individuals Who Are Blind or Visually Impaired</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.caregiveraction.org/">Caregiver Action Network</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.agingkingcounty.org/">Area Agency on Aging (Seattle)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(3) > a`

*... and 8 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/creating-disability-friendly-spaces

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.ntac.blind.msstate.edu/businesses/what-is">What is blindness and low vision? \| National Technical Assistance Center (msstate.edu)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://youth.gov/youth-topics/inclusion-and-accessibility">Inclusion and Accessibility \| Youth.gov</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.perkins.org/blind-etiquette-six-ways-to-be-considerate-when-interacting-with-people-with-visual-impairments/">Blindness etiquette</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(3) > a`

*... and 14 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/general-blindness-considerations

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.ntac.blind.msstate.edu/businesses/what-is">What is blindness and low vision? \| National Technical Assistance Center (msstate.edu)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://youth.gov/youth-topics/inclusion-and-accessibility">Inclusion and Accessibility \| Youth.gov</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.icanconnect.org/">iCanConnect</a>`
- XPath: `a[href$="icanconnect.org/"]`

*... and 4 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/getting-what-you-need

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://dsb.wa.gov/">Home \| DSB - WA Dept of Services for the Blind</a>`
- XPath: `a[href$="dsb.wa.gov/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.helenkeller.org/hknc/northwestern-region">HKNC: Northwest Region</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.wssb.wa.gov/">Home \| Washington State School for the Blind</a>`
- XPath: `a[href$="wssb.wa.gov/"]`

*... and 31 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/human-relations

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.ntac.blind.msstate.edu/businesses/what-types-of-jobs">What types of jobs can people who are blind or have low vision do? \| National Technical Assistance Center (msstate.edu)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.ntac.blind.msstate.edu/businesses/why-hire-workers">Why hire workers who are blind or have low vision? \| National Technical Assistance Center (msstate.edu)</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.ntac.blind.msstate.edu/businesses/what-is">Blindness and Low Vision basic information</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(3) > a`

*... and 19 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities/rights-and-self-advocacy

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.nfbw.org/">National Federation of the Blind of Washington</a>`
- XPath: `a[href$="nfbw.org/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wcbinfo.org/about-us/">Washington Council of the Blind</a>`
- XPath: `a[href$="about-us/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://seattledbsc.org/">Deaf-Blind Service Center- Empowering Deaf-Blind Individuals and the Deaf-Blind Community</a>`
- XPath: `a[href$="seattledbsc.org/"]`

*... and 36 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/recreation/parks

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/recreation">Recreation</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="recreation"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img src="https://parks.wa.gov/sites/default/files/styles/square_600/public/2023-03/AltaLake_HikingSign.jpg?itok=vKY6tLSM">`
- XPath: `.views-row:nth-child(1) > .views-field.views-field-nothing > .field-content > .park-card > a > img`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img src="https://parks.wa.gov/sites/default/files/styles/square_600/public/2023-05/lake2.jpg?itok=n-HP162X">`
- XPath: `.views-row:nth-child(2) > .views-field.views-field-nothing > .field-content > .park-card > a > img`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img src="https://parks.wa.gov/sites/default/files/styles/square_600/public/2025-10/BattleGroundLakeDockWithRocks.jpg?itok=Bmm5E6Qw">`
- XPath: `.views-row:nth-child(3) > .views-field.views-field-nothing > .field-content > .park-card > a > img`

**Failure 5:**
- Message: Images must have alternative text
- HTML: `<img src="https://parks.wa.gov/sites/default/files/styles/square_600/public/2023-06/BayView_Kite.jpg?itok=WPSLQj7p">`
- XPath: `.views-row:nth-child(4) > .views-field.views-field-nothing > .field-content > .park-card > a > img`

*... and 26 more failures for this rule*

### https://wa.gov/work/professional-licenses

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/work">Work</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="work"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://doh.wa.gov/licenses-permits-and-certificates/professions-new-renew-or-update/acupuncture-and-eastern-medicine-practitioner">Acupuncture and Eastern Medicine Practitioners</a>`
- XPath: `.views-row:nth-child(2) > .views-field.views-field-nothing > .field-content > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://doh.wa.gov/licenses-permits-and-certificates/facilities-z/hospitals/acute-care">Acute Care Hospitals</a>`
- XPath: `.views-row:nth-child(3) > .views-field.views-field-nothing > .field-content > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://nursing.wa.gov/licensing/apply-license/arnp-license">Advanced Registered Nurse Practitioners (ARNP)</a>`
- XPath: `.views-row:nth-child(4) > .views-field.views-field-nothing > .field-content > a`

*... and 245 more failures for this rule*

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>A</h3>`
- XPath: `h3:nth-child(1)`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/how-to-guides/get-help-finding-food

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/esa/community-services-offices/basic-food">Basic Food eligibility </a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/sites/default/files/publications/documents/22-297.pdf">Guide on how to apply and use Basic Food benefits</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.washingtonconnection.org/home/">Apply online</a>`
- XPath: `p:nth-child(6) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/esa/community-services-offices/community-services-office">Apply by phone</a>`
- XPath: `p:nth-child(7) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/office-locations">Apply in person at a Community Services Office</a>`
- XPath: `p:nth-child(8) > a`

*... and 12 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/SecureAccess%20Washington%20%28SAW%29%20Login%20for%20State%20Services

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/how-to-guides/secureaccess-washington-saw-login-state-services

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-auth="NotApplicable" data-entity-substitu...="canonical" data-entity-type="node" data-entity-uuid="1d94b174-4417-4bbb-a..." data-linkindex="2" href="/how-to-guides/your-..." title="Original URL: https:...">`
- XPath: `a[data-auth="NotApplicable"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="e3654f8d-d7e9-4499-a727-6373bb57fb6c" href="/how-to-guides/washington-state-launching-wagov-accounts" title="Washington state is launching WA.gov accounts">this page</a>`
- XPath: `p:nth-child(3) > a[data-entity-substitution="canonical"][data-entity-type="node"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://secureaccess.wa.gov/">Log in to SAW</a>`
- XPath: `a[href$="secureaccess.wa.gov/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://paidleave.wa.gov/login/">Paid Family and Medical Leave</a>`
- XPath: `.node__content > .text-formatted.field--name-body.field--type-text-with-summary > ul > li:nth-child(1) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://secure.dor.wa.gov/home/Login">File a tax return or renew a business license</a>`
- XPath: `.node__content > .text-formatted.field--name-body.field--type-text-with-summary > ul > li:nth-child(2) > a`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/Accessing%20Government%20Assistance

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/agency

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://agr.wa.gov/services/consumer-protection-and-complaints">Report a concern about your food</a>`
- XPath: `.js-view-dom-id-e8894f81bb95cd18bcb24859b99391e42376384cf1dbda6a2a810d3930cc6136 > .view-content.row > div > ul > li:nth-child(1) > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://agr.wa.gov/washington-agriculture">Learn about agriculture in Washington</a>`
- XPath: `.js-view-dom-id-e8894f81bb95cd18bcb24859b99391e42376384cf1dbda6a2a810d3930cc6136 > .view-content.row > div > ul > li:nth-child(2) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.arts.wa.gov/center-for-washington-cultural-traditions/">Folk arts &amp; cultural traditions</a>`
- XPath: `.js-view-dom-id-1e930169d87ef6ee2f2487a848d8a9023997a8ba81aaafa2624702fb0e98a461 > .view-content.row > div > ul > li:nth-child(1) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.arts.wa.gov/my-public-art-portal/">Search the collection of public art</a>`
- XPath: `.js-view-dom-id-1e930169d87ef6ee2f2487a848d8a9023997a8ba81aaafa2624702fb0e98a461 > .view-content.row > div > ul > li:nth-child(2) > a`

*... and 93 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/businesses

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://dor.wa.gov/open-business">Open a business</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://dor.wa.gov/manage-business">Manage or close a business</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://dor.wa.gov/file-pay-taxes">File and pay B&amp;O taxes</a>`
- XPath: `p:nth-child(6) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.esd.wa.gov/employer-taxes">Unemployment taxes</a>`
- XPath: `p:nth-child(7) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://ecology.wa.gov/Waste-Toxics/Business-waste">Business waste</a>`
- XPath: `p:nth-child(8) > a`

*... and 19 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/SAW-guide_0_0.jpg?itok=UeoHwuKw" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(1) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/public-transportation.jpg?itok=4Rr8FvMC" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/bicycle-commute-guide_99091035_Preview_0.jpg?itok=Et5Etisn" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(6) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/secureaccess-washington-saw-login-state-services">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/SAW-guide_0_0.jpg?itok=UeoHwuKw" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(1) > .card.how-to-lg > .z-img > a`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/use-public-transportation">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/public-transportation.jpg?itok=4Rr8FvMC" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/bicycle-commuting">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/bicycle-commute-guide_99091035_Preview_0.jpg?itok=Et5Etisn" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(6) > .card.how-to-lg > .z-img > a`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/education

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://washingtonstatereportcard.ospi.k12.wa.us/">State's report card on public instruction</a>`
- XPath: `.item-list:nth-child(1) > ul > li > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.k12.wa.us/certification">Certification</a>`
- XPath: `.item-list:nth-child(2) > ul > li:nth-child(1) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://educationnorthwest.org/">Education Northwest</a>`
- XPath: `a[href$="educationnorthwest.org/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.k12.wa.us/educator-support">Educators Support</a>`
- XPath: `.item-list:nth-child(2) > ul > li:nth-child(3) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.k12.wa.us/student-success">Student success</a>`
- XPath: `.item-list:nth-child(2) > ul > li:nth-child(4) > .views-field-views-conditional-field.views-field > .field-content > a`

*... and 17 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/families

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.washingtonconnection.org/home/explorecategories.go?locale=en_US&amp;category=FD">Resources to help you find food</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://feedingwashington.org/find-food/">Map of currently open food banks and meal programs in our state</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://doh.wa.gov/you-and-your-family/nutrition-and-physical-activity">Improving health with nutrition and physical activity</a>`
- XPath: `p:nth-child(6) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa211.org/">Washington 2-1-1</a>`
- XPath: `a[href$="wa211.org/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.hca.wa.gov/about-hca/apple-health-medicaid/how-we-work">Learn how Washington Apple Health works</a>`
- XPath: `p:nth-child(10) > a`

*... and 47 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/lake-diablo-how-to.jpg?itok=jzW2hUAC" width="410" height="210" class="image-style-how-to-image">`
- XPath: `a[href$="become-resident"] > .image-style-how-to-image[width="410"][height="210"]`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/vote-how-to.jpg?itok=2mVUcT2-" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/elk-herd-near-north%20bend.jpg?itok=FEYy-0rN" width="410" height="210" class="image-style-how-to-image">`
- XPath: `a[href$="get-outside"] > .image-style-how-to-image[width="410"][height="210"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/become-resident">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/lake-diablo-how-to.jpg?itok=jzW2hUAC" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.z-img > a[href$="become-resident"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/vote-participate-local-state-federal-elections">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/vote-how-to.jpg?itok=2mVUcT2-" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/get-outside">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/elk-herd-near-north%20bend.jpg?itok=FEYy-0rN" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.z-img > a[href$="get-outside"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/File%20a%20Complaint

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/health-and-safety

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/adult-care">Adult care</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(1) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/bha">Care for those with addiction and mental health conditions</a>`
- XPath: `a[href$="bha"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.dshs.wa.gov/ddd/">Care for those with developmental disabilities</a>`
- XPath: `a[href$="ddd/"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/altsa/long-term-care-services-information">Long-term care services &amp; information</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(4) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.atg.wa.gov/protecting-seniors">Protecting seniors</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(5) > .views-field-views-conditional-field.views-field > .field-content > a`

*... and 53 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/Historic%20Flood%20Emergency%3A%20Financial%20Resources%20and%20Recovery%20for%20Washingtonians

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/Housing%20Assistance

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/how-to-guides

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3><a href="/how-to-guides/create-your-wagov-account" hreflang="en">Create your WA.gov account</a></h3>`
- XPath: `.col-sm-2.col-lg-3.mb-4:nth-child(1) > .how-to.card > .body > h3`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/news

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wdfw.wa.gov/newsroom/news-release/wdfw-soliciting-additional-public-comment-incentive-deer-permit-proposals" target="_blank">WDFW soliciting additional public comment for incentive deer permit proposals</a>`
- XPath: `li:nth-child(1) > .views-field-title.views-field > .field-content > a[target="_blank"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wdfw.wa.gov/newsroom/wdfw-statement/march-2026-nisqually-river-incident" target="_blank">March 2026 Nisqually River incident</a>`
- XPath: `li:nth-child(2) > .views-field-title.views-field > .field-content > a[target="_blank"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wdfw.wa.gov/fishing/regulations/emergency-rules/hatchery-steelhead-season-extended-salmon-creek-clark-county-2026-03" target="_blank">Hatchery steelhead season extended on Salmon Creek (Clark County)</a>`
- XPath: `li:nth-child(3) > .views-field-title.views-field > .field-content > a[target="_blank"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wdfw.wa.gov/newsroom/news-release/prescribed-fires-planned-wdfw-managed-lands-eastern-washington-0" target="_blank">Prescribed fires planned for WDFW-managed lands in Eastern Washington</a>`
- XPath: `li:nth-child(4) > .views-field-title.views-field > .field-content > a[target="_blank"]`

*... and 16 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/Create%20your%20WA.gov%20account"></a>`
- XPath: `.masonry-item.views-row:nth-child(1) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/SecureAccess%20Washington%20%28SAW%29%20Login%20for%20State%20Services"></a>`
- XPath: `.masonry-item.views-row:nth-child(2) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/Historic%20Flood%20Emergency%3A%20Financial%20Resources%20and%20Recovery%20for%20Washingtonians"></a>`
- XPath: `.masonry-item.views-row:nth-child(3) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/File%20a%20Complaint"></a>`
- XPath: `a[href$="File%20a%20Complaint"]`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="/Workers%E2%80%99%20Rights"></a>`
- XPath: `a[href$="Workers%E2%80%99%20Rights"]`

*... and 4 more failures for this rule*

### https://wa.gov/Protecting%20Your%20Community%20from%20Wildfire

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/recreation

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.arts.wa.gov/center-for-washington-cultural-traditions/">Folk arts &amp; cultural traditions</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(1) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.des.wa.gov/services/facilities/CapitolCampus/MemorialsArt/Pages/default.aspx">Memorials &amp; artwork at the state capitol</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(2) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.arts.wa.gov/my-public-art-portal/">Search the collection of public art</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(3) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://boat.wa.gov/">Boating information portal</a>`
- XPath: `a[href$="boat.wa.gov/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.uscgboating.org/">Boating safety</a>`
- XPath: `a[href$="uscgboating.org/"]`

*... and 16 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/seniors

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.caregiverslibrary.org/Portals/0/checklistsandforms_NeedsAssessmentWorksheet.pdf">Needs Assessment Worksheet</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/altsa/home-and-community-services/who-contact-find-local-services">Who to contact to find local services</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/ALTSA/resources">Resources for aging by county</a>`
- XPath: `p:nth-child(6) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/altsa/home-and-community-services/services-help-adult-remain-home">Read more about services that help an adult remain at home</a>`
- XPath: `p:nth-child(9) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/sites/default/files/ALTSA/hcs/documents/HCRR_Consumer_Hire_Supervise.pdf">How to find and hire a home care worker</a>`
- XPath: `p:nth-child(10) > a`

*... and 21 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/vote-how-to.jpg?itok=2mVUcT2-" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(1) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/elk-herd-near-north%20bend.jpg?itok=FEYy-0rN" width="410" height="210" class="image-style-how-to-image">`
- XPath: `a[href$="get-outside"] > .image-style-how-to-image[width="410"][height="210"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/SAW-guide_0_0.jpg?itok=UeoHwuKw" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(6) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/vote-participate-local-state-federal-elections">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/vote-how-to.jpg?itok=2mVUcT2-" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(1) > .card.how-to-lg > .z-img > a`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/get-outside">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/elk-herd-near-north%20bend.jpg?itok=FEYy-0rN" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.z-img > a[href$="get-outside"]`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/secureaccess-washington-saw-login-state-services">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/SAW-guide_0_0.jpg?itok=UeoHwuKw" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(6) > .card.how-to-lg > .z-img > a`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/state-employee-contacts

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">state government agency</a>`
- XPath: `.view-empty > a[href$="agency"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/travel

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.portofbellingham.com/888/Airport">Bellingham International Airport</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(1) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wsdot.wa.gov/travel/aviation">Local airports &amp; pilots</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(2) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.portseattle.org/sea-tac">Seattle-Tacoma International Airport</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(3) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://spokaneairports.net/">Spokane International Airport</a>`
- XPath: `a[href$="spokaneairports.net/"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.flytricities.com/">Tri-Cities Regional Airport</a>`
- XPath: `a[href$="flytricities.com/"]`

*... and 17 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/visitors

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.arts.wa.gov/center-for-washington-cultural-traditions/">Center for Washington Cultural Traditions</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.des.wa.gov/services/facilities-leasing/capitol-campus/memorials-and-artwork">Memorials &amp; Artwork at the State Capitol</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.arts.wa.gov/my-public-art-portal/">Search the collection of public art</a>`
- XPath: `p:nth-child(6) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://art-collecting.com/nonprofits_wa.htm">List of Washington art museums</a>`
- XPath: `p:nth-child(7) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.arts.wa.gov/creative-district-communities/">Washington Creative Districts</a>`
- XPath: `p:nth-child(8) > a`

*... and 21 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/lake-diablo-how-to.jpg?itok=jzW2hUAC" width="410" height="210" class="image-style-how-to-image">`
- XPath: `a[href$="become-resident"] > .image-style-how-to-image[width="410"][height="210"]`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/gambling.jpg?itok=ZYzVHYR9" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/elk-herd-near-north%20bend.jpg?itok=FEYy-0rN" width="410" height="210" class="image-style-how-to-image">`
- XPath: `a[href$="get-outside"] > .image-style-how-to-image[width="410"][height="210"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/become-resident">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-04/lake-diablo-how-to.jpg?itok=jzW2hUAC" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.z-img > a[href$="become-resident"]`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/lottery-gambling">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/gambling.jpg?itok=ZYzVHYR9" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/get-outside">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/elk-herd-near-north%20bend.jpg?itok=FEYy-0rN" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.z-img > a[href$="get-outside"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/work

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://ecology.wa.gov/Waste-Toxics/Business-waste">Business waste</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(1) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://dor.wa.gov/file-pay-taxes">File and pay Business &amp; Occupation (B&amp;O) taxes</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(2) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://paidleave.wa.gov/employer-roles-responsibilities/">Paid leave reporting</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(3) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.esd.wa.gov/employer-taxes">Unemployment taxes</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(4) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://lni.wa.gov/insurance/">Workers' compensation coverage</a>`
- XPath: `a[href$="insurance/"]`

*... and 28 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/Workers%E2%80%99%20Rights

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/your-government

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://tre.wa.gov/home/debt-management/">Debt management</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(1) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="http://www.erfc.wa.gov/">Economic and Revenue Forecast Council</a>`
- XPath: `a[href$="erfc.wa.gov/"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.atg.wa.gov/open-government">Learn about Open Government</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(3) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://sao.wa.gov/reports-data/report-types/">Reports &amp; data on government</a>`
- XPath: `.item-list:nth-child(1) > ul > li:nth-child(4) > .views-field-views-conditional-field.views-field > .field-content > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://fiscal.wa.gov/">State budget and fiscal information</a>`
- XPath: `a[href$="fiscal.wa.gov/"]`

*... and 60 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/Your%20New%20WA.gov%20Account

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/how-to-guides">How-to-guides</a>`
- XPath: `.col-xl-6.col-lg-6.col-md-6:nth-child(2) > ul > li:nth-child(1) > a[href$="how-to-guides"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/search-results">Search WA.gov and all Washington government sites</a>`
- XPath: `a[href$="search-results"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/agency">Find an agency</a>`
- XPath: `li:nth-child(3) > a[href$="agency"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/state-employee-contacts">Find a state employee</a>`
- XPath: `li:nth-child(4) > a[href$="state-employee-contacts"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/webform/contact-wagov-team">contact the WA.gov team</a>`
- XPath: `a[href$="contact-wagov-team"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/ar/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/Create%20your%20WA.gov%20account"></a>`
- XPath: `.masonry-item.views-row:nth-child(1) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/SecureAccess%20Washington%20%28SAW%29%20%D9%87%D9%88%20%D8%AA%D8%B3%D8%AC%D9%8A%D9%84%20%D8%A7%D9%84%D8%AF%D8%AE%D9%88%D9%84%20%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%20%D8%A8%D9%83%20%D9%84%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D9%88%D9%84%D8%A7%D9%8A%D8%A9"></a>`
- XPath: `.masonry-item.views-row:nth-child(2) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/%D8%AD%D8%A7%D9%84%...">`
- XPath: `.masonry-item.views-row:nth-child(3) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/%D8%AA%D9%82%D8%AF%D9%8A%D9%85%20%D8%B4%D9%83%D9%88%D9%89"></a>`
- XPath: `.masonry-item.views-row:nth-child(4) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="/%D8%AD%D9%82%D9%88%D9%82%20%D8%A7%D9%84%D8%B9%D9%85%D8%A7%D9%84"></a>`
- XPath: `.masonry-item.views-row:nth-child(5) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

*... and 4 more failures for this rule*

### https://wa.gov/es/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/Create%20your%20WA.gov%20account"></a>`
- XPath: `.masonry-item.views-row:nth-child(1) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/SecureAccess%20Washington%20%28SAW%29%20es%20su%20acceso%20a%20los%20servicios%20estatales"></a>`
- XPath: `.masonry-item.views-row:nth-child(2) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/Emergencia%20hist%C3%B3rica%20por%20inundaciones%3A%20recursos%20financieros%20y%20recuperaci%C3%B3n%20para%20los%20habitantes%20de%20Washington"></a>`
- XPath: `.masonry-item.views-row:nth-child(3) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/Presentar%20una%20queja"></a>`
- XPath: `a[href$="Presentar%20una%20queja"]`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="/Derechos%20de%20los%20trabajadores"></a>`
- XPath: `.masonry-item.views-row:nth-child(5) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

*... and 4 more failures for this rule*

### https://wa.gov/hi/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/Create%20your%20WA.gov%20account"></a>`
- XPath: `.masonry-item.views-row:nth-child(1) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/%E0%A4%B8%E0%A4%BF%...">`
- XPath: `.masonry-item.views-row:nth-child(2) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/%E0%A4%90%E0%A4%A4%...">`
- XPath: `.masonry-item.views-row:nth-child(3) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/%E0%A4%8F%E0%A4%95%20%E0%A4%B6%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%AF%E0%A4%A4%20%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%9C%E0%A4%BC%20%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%82"></a>`
- XPath: `.masonry-item.views-row:nth-child(4) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%AE%E0%A4%BF%E0%A4%95%20%E0%A4%85%E0%A4%A7%E0%A4%BF%E0%A4%95%E0%A4%BE%E0%A4%B0"></a>`
- XPath: `.masonry-item.views-row:nth-child(5) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

*... and 4 more failures for this rule*

### https://wa.gov/how-to-guides/accessing-government-assistance

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/esa/community-services-offices/eligibility-dshs-services">How to qualify for DSHS services</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/esa/community-services-offices/how-apply-services">Apply for services</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/office-locations?field_geofield_distance%5Bdistance%5D=100&amp;field_geofield_distance%5Bunit%5D=3959&amp;field_geofield_distance%5Borigin%5D=&amp;field_office_type_tid%5B0%5D=9651">Find your local Community Service Office</a>`
- XPath: `p:nth-child(6) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/esa/csd-mobile-office/mobile-community-services-office">Mobile Community Services Office that travels to you if you live in a rural area</a>`
- XPath: `p:nth-child(7) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dshs.wa.gov/esa/community-services-offices/emergency-programs">Get more information on emergency programs</a>`
- XPath: `p:nth-child(10) > a`

*... and 24 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/how-to-guides/file-complaint

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.atg.wa.gov/file-complaint#Online" rel="noreferrer noopener" target="_blank">File a complaint online</a>`
- XPath: `p:nth-child(4) > a[rel="noreferrer noopener"][target="_blank"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.atg.wa.gov/file-complaint#Mail" rel="noreferrer noopener" target="_blank">File a complaint by mail</a>`
- XPath: `p:nth-child(5) > a[rel="noreferrer noopener"][target="_blank"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.atg.wa.gov/file-complaint#Complaint" rel="noreferrer noopener" target="_blank">Learn how the complaint process works</a>`
- XPath: `p:nth-child(6) > a[rel="noreferrer noopener"][target="_blank"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.atg.wa.gov/queja" rel="noreferrer noopener" target="_blank">Presentar una queja</a>`
- XPath: `p:nth-child(7) > a[href$="queja"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.atg.wa.gov/consumer-issues" rel="noreferrer noopener" target="_blank">List of consumer issues A-Z</a>`
- XPath: `p:nth-child(10) > a[rel="noreferrer noopener"][target="_blank"]`

*... and 31 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/how-to-guides/historic-flood-emergency-financial-resources-and-recovery-washingtonians

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#cash-assistance">Cash Assistance</a>`
- XPath: `a[href$="#cash-assistance"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#food-assistance">Food Assistance</a>`
- XPath: `a[href$="#food-assistance"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#housing-property-assistance">Housing and Property Assistance</a>`
- XPath: `a[href="#housing-property-assistance"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#livestock-assistance">Livestock Assistance</a>`
- XPath: `a[href$="#livestock-assistance"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="#medication-equipment-replacement">Medication and Medical Equipment Replacement</a>`
- XPath: `#block-drupalbase-custom-floodresourcelinks > .content > .text-formatted.field--name-body.field--type-text-with-summary > ul > li:nth-child(5) > a`

*... and 39 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/how-to-guides/housing-assistance

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.homelessshelterdirectory.org/state/washington">Homeless shelter directory</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="56752f9f-bb4d-4b0f-86d7-de34f74be1f4" href="/how-to-guides/get-help-finding-food" title="Get Help Finding Food">Get Help Finding Food Guide</a>`
- XPath: `a[title="Get Help Finding Food"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.commerce.wa.gov/serving-communities/homelessness/office-of-youth-homelessness/#programs">Learn more about the Office of Homeless Youth programs</a>`
- XPath: `p:nth-child(10) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://deptofcommerce.app.box.com/s/o27hkoudakw1au21dfw2dzl5y4x8ar1a">List of contracted service providers</a>`
- XPath: `p:nth-child(11) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.commerce.wa.gov/serving-communities/homelessness/youth-and-young-adult-eviction-rent-assistance-program/">Youth and Young Adult Eviction Rent Assistance Program</a>`
- XPath: `p:nth-child(12) > a`

*... and 7 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/how-to-guides/protecting-your-community-wildfire

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dnr.wa.gov/publications/rp_fireprev_outdoors.pdf">Prevent wildfires when having fun outside</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dnr.wa.gov/publications/rp_fireprev_firework.pdf">Fireworks safety</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dnr.wa.gov/publications/rp_fireprev_campground.pdf">Campfire safety</a>`
- XPath: `p:nth-child(6) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dnr.wa.gov/publications/rp_fire_how_to_prepare_wildfire.pdf">How to prepare for a wildfire </a>`
- XPath: `p:nth-child(9) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dnr.wa.gov/publications/rp_fireprev_home.pdf">Defend your home from wildfire</a>`
- XPath: `p:nth-child(10) > a`

*... and 16 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/how-to-guides/workers-rights

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://lni.wa.gov/workers-rights/wages/minimum-wage/">Learn more about wage laws in our state</a>`
- XPath: `p:nth-child(4) > a`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://lni.wa.gov/workers-rights/wages/equal-pay-opportunities-act/">Read about the Equal Pay and Opportunities Act</a>`
- XPath: `p:nth-child(5) > a`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://lni.wa.gov/workers-rights/workplace-policies/rest-breaks-meal-periods-and-schedules">Read about all your rights regarding rest and meal breaks</a>`
- XPath: `p:nth-child(8) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.dol.gov/agencies/whd/fact-sheets/73-flsa-break-time-nursing-mothers">Additional rights for nursing mothers</a>`
- XPath: `p:nth-child(9) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.lni.wa.gov/safety-health/">Discover more about safety and health</a>`
- XPath: `p:nth-child(12) > a`

*... and 20 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/how-to-guides/your-new-wagov-account

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a data-entity-substitution="canonical" data-entity-type="node" data-entity-uuid="d27c5548-3d72-4914-bde8-38f3be2e7b28" href="/get-help" title="Get help">Get Help&nbsp;for support creating or using&nbsp;your WA.gov&nbsp;account.</a>`
- XPath: `a[title="Get help"]`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/ja/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/Create%20your%20WA.gov%20account"></a>`
- XPath: `.masonry-item.views-row:nth-child(1) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/SecureAccess%20Washington%20%28SAW%29%20%E3%81%AF%E5%B7%9E%E3%81%AE%E3%82%B5%E3%83%BC%E3%83%93%E3%82%B9%E3%81%B8%E3%81%AE%E3%83%AD%E3%82%B0%E3%82%A4%E3%83%B3%E3%81%A7%E3%81%99"></a>`
- XPath: `.masonry-item.views-row:nth-child(2) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/%E6%AD%B4%E5%8F%B2%E7%9A%84%E3%81%AA%E6%B4%AA%E6%B0%B4%E7%B7%8A%E6%80%A5%E4%BA%8B%E6%85%8B%EF%BC%9A%E3%83%AF%E3%82%B7%E3%83%B3%E3%83%88%E3%83%B3%E5%B7%9E%E6%B0%91%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E8%B2%A1%E6%94%BF%E7%9A%84%E8%B3%87%E6%BA%90%E3%81%A8%E5%BE%A9%E8%88%88"></a>`
- XPath: `.masonry-item.views-row:nth-child(3) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/%E8%8B%A6%E6%83%85%E3%82%92%E7%94%B3%E3%81%97%E7%AB%8B%E3%81%A6%E3%82%8B"></a>`
- XPath: `.masonry-item.views-row:nth-child(4) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="/%E5%8A%B4%E5%83%8D%E8%80%85%E3%81%AE%E6%A8%A9%E5%88%A9"></a>`
- XPath: `.masonry-item.views-row:nth-child(5) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

*... and 4 more failures for this rule*

### https://wa.gov/ko/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/Create%20your%20WA.gov%20account"></a>`
- XPath: `.masonry-item.views-row:nth-child(1) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/SecureAccess%20Washington%28SAW%29%EC%9D%80%20%EC%A3%BC%EC%A0%95%EB%B6%80%20%EC%84%9C%EB%B9%84%EC%8A%A4%EC%97%90%20%EB%8C%80%ED%95%9C%20%EB%A1%9C%EA%B7%B8%EC%9D%B8%EC%9E%85%EB%8B%88%EB%8B%A4."></a>`
- XPath: `.masonry-item.views-row:nth-child(2) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/%EC%97%AD%EC%82%AC%...">`
- XPath: `.masonry-item.views-row:nth-child(3) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/%EB%B6%88%EB%A7%8C%20%EC%A0%9C%EA%B8%B0"></a>`
- XPath: `.masonry-item.views-row:nth-child(4) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="/%EB%85%B8%EB%8F%99%EC%9E%90%EC%9D%98%20%EA%B6%8C%EB%A6%AC"></a>`
- XPath: `.masonry-item.views-row:nth-child(5) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

*... and 4 more failures for this rule*

### https://wa.gov/node/61721

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/index.html">https://wa.gov</a>`
- XPath: `li:nth-child(1) > a[href="https://wa.gov/index.html"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html">Read about WCAG Color contrast standards</a>`
- XPath: `li:nth-child(4) > ul > li:nth-child(1) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://webaim.org/resources/contrastchecker/">Check your color contrast at WebAIM</a>`
- XPath: `li:nth-child(4) > ul > li:nth-child(2) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wa.gov/index.html">Visit WA.gov</a>`
- XPath: `li:nth-child(4) > a[href="https://wa.gov/index.html"]`

*... and 1 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/ru/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/Create%20your%20WA.gov%20account"></a>`
- XPath: `.masonry-item.views-row:nth-child(1) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/SecureAccess%20Washington%20%28SAW%29%20%E2%80%94%20%D0%B2%D0%B0%D1%88%20%D0%BB%D0%BE%D0%B3%D0%B8%D0%BD%20%D0%B4%D0%BB%D1%8F%20%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D1%85%20%D1%83%D1%81%D0%BB%D1%83%D0%B3"></a>`
- XPath: `.masonry-item.views-row:nth-child(2) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/%D0%98%D1%81%D1%82%...">`
- XPath: `.masonry-item.views-row:nth-child(3) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/%D0%9F%D0%BE%D0%B4%D0%B0%D1%82%D1%8C%20%D0%B6%D0%B0%D0%BB%D0%BE%D0%B1%D1%83"></a>`
- XPath: `.masonry-item.views-row:nth-child(4) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="/%D0%9F%D1%80%D0%B0%D0%B2%D0%B0%20%D1%82%D1%80%D1%83%D0%B4%D1%8F%D1%89%D0%B8%D1%85%D1%81%D1%8F"></a>`
- XPath: `.masonry-item.views-row:nth-child(5) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

*... and 4 more failures for this rule*

### https://wa.gov/uk/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/Create%20your%20WA.gov%20account"></a>`
- XPath: `.masonry-item.views-row:nth-child(1) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/SecureAccess%20Wash...">`
- XPath: `.masonry-item.views-row:nth-child(2) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/%D0%86%D1%81%D1%82%...">`
- XPath: `.masonry-item.views-row:nth-child(3) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/%D0%9F%D0%BE%D0%B4%D0%B0%D0%B9%D1%82%D0%B5%20%D1%81%D0%BA%D0%B0%D1%80%D0%B3%D1%83"></a>`
- XPath: `.masonry-item.views-row:nth-child(4) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="/%D0%9F%D1%80%D0%B0%D0%B2%D0%B0%20%D0%BF%D1%80%D0%B0%D1%86%D1%96%D0%B2%D0%BD%D0%B8%D0%BA%D1%96%D0%B2"></a>`
- XPath: `.masonry-item.views-row:nth-child(5) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

*... and 4 more failures for this rule*

### https://wa.gov/vi/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/Create%20your%20WA.gov%20account"></a>`
- XPath: `.masonry-item.views-row:nth-child(1) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/SecureAccess%20Washington%20%28SAW%29%20l%C3%A0%20th%C3%B4ng%20tin%20%C4%91%C4%83ng%20nh%E1%BA%ADp%20c%E1%BB%A7a%20b%E1%BA%A1n%20cho%20c%C3%A1c%20d%E1%BB%8Bch%20v%E1%BB%A5%20c%E1%BB%A7a%20ti%E1%BB%83u%20bang"></a>`
- XPath: `.masonry-item.views-row:nth-child(2) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/T%C3%ACnh%20tr%E1%B...">`
- XPath: `.masonry-item.views-row:nth-child(3) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/N%E1%BB%99p%20%C4%91%C6%A1n%20khi%E1%BA%BFu%20n%E1%BA%A1i"></a>`
- XPath: `.masonry-item.views-row:nth-child(4) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="/Quy%E1%BB%81n%20c%E1%BB%A7a%20ng%C6%B0%E1%BB%9Di%20lao%20%C4%91%E1%BB%99ng"></a>`
- XPath: `.masonry-item.views-row:nth-child(5) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

*... and 4 more failures for this rule*

### https://wa.gov/accessibility-in-washington/accessibility-basics/learn-about-disabilities

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/education-for-children-through-high-school

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/people-with-disabilities

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/accessibility-in-washington" rel="noreferrer noopener" target="_blank">Accessibility in Washington</a>`
- XPath: `a[href="/accessibility-in-washington"][rel="noreferrer noopener"][target="_blank"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/accessibility-in-washington/accessibility-basics/learn-about-disabilities" rel="noreferrer noopener" target="_blank">Different types of visual and cognitive disabilities </a>`
- XPath: `li[paraid="1736683443"] > a[rel="noreferrer noopener"][target="_blank"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/accessibility-in-washington/accessibility-basics/disability-etiquette-for-respecting-people-with-disabilities" rel="noreferrer noopener" target="_blank">Disability etiquette</a>`
- XPath: `li[paraid="782388127"] > a[rel="noreferrer noopener"][target="_blank"]`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/accessibility-in-washington/accessibility-basics/how-to-make-physical-and-digital-spaces-accessible" rel="noreferrer noopener" target="_blank">Physical and digital accessible design</a>`
- XPath: `li[paraid="243822543"] > a[rel="noreferrer noopener"][target="_blank"]`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/accessibility-in-washington/education-recreation-people-with-disabilities/accessibility-in-higher-education" rel="noreferrer noopener" target="_blank">Accessibility in higher education</a>`
- XPath: `li[paraid="1894270935"] > a[rel="noreferrer noopener"][target="_blank"]`

*... and 10 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

**Failure 2:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/public-transportation.jpg?itok=4Rr8FvMC" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(1) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

**Failure 3:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-07/government-assistance-guide.jpg?itok=Tne0SruB" width="410" height="210" class="image-style-how-to-image">`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a > .image-style-how-to-image[width="410"][height="210"]`

**Failure 4:**
- Message: Images must have alternative text
- HTML: `<img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-10/workers-rights.jpg?itok=Q6H9O4y0" width="410" height="210" class="image-style-how-to-image">`
- XPath: `a[href$="workers-rights"] > .image-style-how-to-image[width="410"][height="210"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/use-public-transportation">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-05/public-transportation.jpg?itok=4Rr8FvMC" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(1) > .card.how-to-lg > .z-img > a`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/accessing-government-assistance">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-07/government-assistance-guide.jpg?itok=Tne0SruB" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.col-sm-6.col.col-md-4:nth-child(3) > .card.how-to-lg > .z-img > a`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/how-to-guides/workers-rights">  <img loading="lazy" src="/sites/default/files/styles/how_to_image/public/2022-10/workers-rights.jpg?itok=Q6H9O4y0" width="410" height="210" class="image-style-how-to-image">   </a>`
- XPath: `.z-img > a[href$="workers-rights"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/accessibility-in-washington

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="wrapper-banner">`
- XPath: `.wrapper-banner`

### https://wa.gov/people-with-disabilities/schools-and-universities

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/">Home</a>`
- XPath: `.breadcrumb-item:nth-child(1) > a[href="/"]`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/people-with-disabilities">People With Disabilities</a>`
- XPath: `.breadcrumb-item:nth-child(2) > a[href$="people-with-disabilities"]`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.wssb.wa.gov/services/outreach/birth-three">Birth to Three \| Washington State School for the Blind</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(1) > a`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://wapave.org/early-intervention-how-to-access-services-for-children-birth-to-3-in-washington/#:~:text=In%20Washington%2C%20the%20Department%20of,Infants%20and%20Toddlers%20(ESIT).">Early Intervention: How to Access Services for Children Birth to 3 in Washington - PAVE</a>`
- XPath: `.text-formatted.field--name-body.field--type-text-with-summary > ul:nth-child(2) > li:nth-child(2) > a`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="https://www.wssb.wa.gov/">Home \| Washington State School for the Blind</a>`
- XPath: `a[href$="wssb.wa.gov/"]`

*... and 20 more failures for this rule*

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/zh-hant/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/Create%20your%20WA.gov%20account"></a>`
- XPath: `.masonry-item.views-row:nth-child(1) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/SecureAccess%20Washington%20%28SAW%29%20%E6%98%AF%E6%82%A8%E7%9A%84%E5%B7%9E%E6%9C%8D%E5%8B%99%E7%99%BB%E5%85%A5%E5%90%8D"></a>`
- XPath: `.masonry-item.views-row:nth-child(2) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/%E6%AD%B7%E5%8F%B2%E6%80%A7%E6%B4%AA%E7%81%BD%E7%B7%8A%E6%80%A5%E6%83%85%E6%B3%81%EF%BC%9A%E8%8F%AF%E7%9B%9B%E9%A0%93%E5%B7%9E%E5%B1%85%E6%B0%91%E7%9A%84%E8%B2%A1%E6%94%BF%E8%B3%87%E6%BA%90%E5%92%8C%E7%81%BD%E5%BE%8C%E9%87%8D%E5%BB%BA"></a>`
- XPath: `.masonry-item.views-row:nth-child(3) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/%E6%8F%90%E5%87%BA%E6%8A%95%E8%A8%B4"></a>`
- XPath: `.masonry-item.views-row:nth-child(4) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="/%E5%B7%A5%E4%BA%BA%E6%AC%8A%E5%88%A9"></a>`
- XPath: `.masonry-item.views-row:nth-child(5) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

*... and 4 more failures for this rule*

### https://wa.gov/zh-hans/node

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="/Create%20your%20WA.gov%20account"></a>`
- XPath: `.masonry-item.views-row:nth-child(1) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 2:**
- Message: Links must have discernible text
- HTML: `<a href="/SecureAccess%20Washington%20%28SAW%29%20%E6%98%AF%E6%82%A8%E7%9A%84%E5%B7%9E%E6%9C%8D%E5%8A%A1%E7%99%BB%E5%BD%95%E5%90%8D"></a>`
- XPath: `.masonry-item.views-row:nth-child(2) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 3:**
- Message: Links must have discernible text
- HTML: `<a href="/%E5%8E%86%E5%8F%B2%E6%80%A7%E6%B4%AA%E7%81%BE%E7%B4%A7%E6%80%A5%E6%83%85%E5%86%B5%EF%BC%9A%E5%8D%8E%E7%9B%9B%E9%A1%BF%E5%B7%9E%E5%B1%85%E6%B0%91%E7%9A%84%E8%B4%A2%E6%94%BF%E8%B5%84%E6%BA%90%E5%92%8C%E7%81%BE%E5%90%8E%E9%87%8D%E5%BB%BA"></a>`
- XPath: `.masonry-item.views-row:nth-child(3) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 4:**
- Message: Links must have discernible text
- HTML: `<a href="/%E6%8F%90%E5%87%BA%E6%8A%95%E8%AF%89"></a>`
- XPath: `.masonry-item.views-row:nth-child(4) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

**Failure 5:**
- Message: Links must have discernible text
- HTML: `<a href="/%E5%B7%A5%E4%BA%BA%E6%9D%83%E5%88%A9"></a>`
- XPath: `.masonry-item.views-row:nth-child(5) > .views-field-nothing.views-field > .field-content > a:nth-child(1)`

*... and 4 more failures for this rule*

### https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/extracurriculars-for-children-with-disabilities

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/education-recreation-people-with-disabilities/accessibility-in-higher-education

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/education-recreation/education-children-through-high-school

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

### https://wa.gov/accessibility-in-washington/workplace-accessibility/employment-and-workers-rights-for-people-with-disabilities

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- Message: Images must have alternative text
- HTML: `<img src="/modules/contrib/wagov_univ_header/FAVICON_WAGOV.png">`
- XPath: `a[href$="wa.gov"] > img`

