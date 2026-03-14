# Scan Report: Georgia.gov

- Issue: https://github.com/mgifford/open-scans/issues/65
- Submitted by: mgifford
- Scanned at: 2026-03-14T18:42:22.864Z
- Engines used: AXE, ACCESSLINT
- Scan duration: 11.9 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🌙 **Dark mode tested: 56 of 100 URLs (56%) support `prefers-color-scheme: dark`**
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 34978 passed, 410 failed, 150 cantTell, 8988 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 8973 passed, 227 failed (227 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 0

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://georgia.gov/how-do-i-find-job-georgia) | 10 | 3 | **13** | Find a Job in Georgia \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-register-lp-hdi) | 10 | 3 | **13** | Register an LP HDI \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-request-and-vote-absentee-ballot) | 10 | 3 | **13** | Request and Vote by an Absentee Ballot \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-register-vehicle) | 10 | 2 | **12** | Register a Vehicle \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services) | 8 | 3 | **11** | Find Equity and Accessibility Resources for Consumer Services \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services) | 8 | 3 | **11** | Find Equity and Accessibility Resources for Disability Services \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services) | 8 | 3 | **11** | Find Equity and Accessibility Resources for Veterans Services \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources) | 8 | 3 | **11** | Find Aging Equity and Accessibility Resources \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-apply-exemption-window-tint-law) | 8 | 3 | **11** | Apply for an Exemption to the Window Tint Law \| Georgia.gov |
| [View Page](https://georgia.gov/how-do-i-apply-georgia-dream-homeownership-program) | 8 | 3 | **11** | Apply for the Georgia Dream Homeownership Program \| Georgia.gov |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| meta-refresh | **56** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/meta-refresh) |
| region | **44** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| tabindex | **44** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/tabindex) |
| landmark-no-duplicate-banner | **33** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-banner) |
| landmark-unique | **33** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| aria-prohibited-attr | **4** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-prohibited-attr) |
| empty-heading | **3** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-heading) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 56 page(s) - 112 occurrence(s)

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
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-assistance-programs
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-children-and-parenting
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-courts-and-corrections
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-education-and-teaching
- https://georgia.gov/
- *...and 51 more page(s)*

---

#### Pattern 2: Affects 44 page(s) - 44 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p class="alert__title">
          That Text Is Not From Us        </p>
```

**XPath** (use in browser DevTools):
```
.alert__title
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.alert__title')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services
- https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources
- https://georgia.gov/organization/georgia-department-human-services-division-child-support-services
- *...and 39 more page(s)*

---

#### Pattern 3: Affects 44 page(s) - 44 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<p class="alert__body">We'll never request payment or info through unsolicited text</p>
```

**XPath** (use in browser DevTools):
```
.alert__body
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.alert__body')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services
- https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources
- https://georgia.gov/organization/georgia-department-human-services-division-child-support-services
- *...and 39 more page(s)*

---

#### Pattern 4: Affects 44 page(s) - 44 occurrence(s)

**Scanner**: axe
**Rule**: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious
**Issue**: Elements should not have tabindex greater than zero

**HTML Pattern**:
```html
<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">
```

**XPath** (use in browser DevTools):
```
#ivy-bot
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#ivy-bot')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services
- https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources
- https://georgia.gov/organization/georgia-department-human-services-division-child-support-services
- *...and 39 more page(s)*

---

#### Pattern 5: Affects 27 page(s) - 27 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one banner landmark

**HTML Pattern**:
```html
<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">
```

**XPath** (use in browser DevTools):
```
#header
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#header')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services
- https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources
- https://georgia.gov/how-do-i-apply-exemption-window-tint-law
- *...and 22 more page(s)*

---

#### Pattern 6: Affects 27 page(s) - 27 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">
```

**XPath** (use in browser DevTools):
```
#header
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#header')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services
- https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources
- https://georgia.gov/how-do-i-apply-exemption-window-tint-law
- *...and 22 more page(s)*

---

#### Pattern 7: Affects 25 page(s) - 25 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h2>Did you find what you were looking for on this page?</h2>
```

**XPath** (use in browser DevTools):
```
#upper-feedback-content > h2
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#upper-feedback-content > h2')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services
- https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services
- https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources
- https://georgia.gov/how-do-i-find-job-georgia
- *...and 20 more page(s)*

---

#### Pattern 8: Affects 6 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate
**Issue**: Document should not have more than one banner landmark

**HTML Pattern**:
```html
<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">
```

**XPath** (use in browser DevTools):
```
#header
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#header')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-job-georgia
- https://georgia.gov/how-do-i-register-lp-hdi
- https://georgia.gov/how-do-i-register-vehicle
- https://georgia.gov/how-do-i-request-and-vote-absentee-ballot
- https://georgia.gov/locations/department-human-services-division-family-and-children-services-location
- *...and 1 more page(s)*

---

#### Pattern 9: Affects 6 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">
```

**XPath** (use in browser DevTools):
```
#header
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#header')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-job-georgia
- https://georgia.gov/how-do-i-register-lp-hdi
- https://georgia.gov/how-do-i-register-vehicle
- https://georgia.gov/how-do-i-request-and-vote-absentee-ballot
- https://georgia.gov/locations/department-human-services-division-family-and-children-services-location
- *...and 1 more page(s)*

---

#### Pattern 10: Affects 6 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="js-form-item form-item js-form-type-textarea form-item-feedback-message js-form-item-feedback-message">
```

**XPath** (use in browser DevTools):
```
.js-form-type-textarea
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.js-form-type-textarea')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-job-georgia
- https://georgia.gov/how-do-i-register-lp-hdi
- https://georgia.gov/how-do-i-register-vehicle
- https://georgia.gov/how-do-i-request-and-vote-absentee-ballot
- https://georgia.gov/bulk-corporations-data
- *...and 1 more page(s)*

---

#### Pattern 11: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<nav class="how-do-i-step-links accordion-wrapper" aria-label="How Do I Steps">
```

**XPath** (use in browser DevTools):
```
.content-page__mobile > .how-do-i-step-links.accordion-wrapper[aria-label="How Do I Steps"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.content-page__mobile > .how-do-i-step-links.accordion-wrapper[aria-label="How Do I Steps"]')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/how-do-i-find-job-georgia
- https://georgia.gov/how-do-i-register-lp-hdi
- https://georgia.gov/how-do-i-register-vehicle
- https://georgia.gov/how-do-i-request-and-vote-absentee-ballot

---

#### Pattern 12: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor
**Issue**: Headings should not be empty

**HTML Pattern**:
```html
<h2 class="organization-summary__title"></h2>
```

**XPath** (use in browser DevTools):
```
.organization-summary__title
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.organization-summary__title')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/organization/georgia-department-human-services-division-child-support-services
- https://georgia.gov/organization/department-human-services-division-family-and-children-services
- https://georgia.gov/organization/georgia-department-veterans-service

---

#### Pattern 13: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="full-location-teaser__info">
```

**XPath** (use in browser DevTools):
```
.full-location-teaser__info
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.full-location-teaser__info')`
5. The element will be highlighted

**Affected Pages**:
- https://georgia.gov/locations/department-human-services-division-family-and-children-services-location
- https://georgia.gov/locations/georgia-dhs-division-aging-services

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services | https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services | OK | 200 | no | 9123 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services | https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services | OK | 200 | no | 7461 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services | https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services | OK | 200 | no | 7214 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources | https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources | OK | 200 | no | 7285 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-assistance-programs | https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-assistance-programs | FAIL | 429 | no | 6831 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-children-and-parenting | https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-children-and-parenting | FAIL | 429 | no | 6775 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-courts-and-corrections | https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-courts-and-corrections | OK | 200 | no | 7029 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-education-and-teaching | https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-education-and-teaching | FAIL | 403 | no | 6668 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/ | https://georgia.gov/ | FAIL | 429 | no | 6707 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, labels-and-names/label-content-mismatch |
| https://georgia.gov/accessibility | https://georgia.gov/accessibility | OK | 200 | no | 6784 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/contacts/child-support-services | https://georgia.gov/contacts/child-support-services | FAIL | 429 | no | 6633 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/organization/georgia-department-human-services-division-child-support-services | https://georgia.gov/organization/georgia-department-human-services-division-child-support-services | OK | 200 | no | 7220 | 4 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/find-a-job-in-georgia | https://georgia.gov/find-a-job-in-georgia | OK | 200 | no | 6757 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/how-do-i-find-job-georgia | https://georgia.gov/how-do-i-find-job-georgia | OK | 200 | no | 7349 | 10 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/locations/12000-findley-rd-ste-400 | https://georgia.gov/locations/12000-findley-rd-ste-400 | OK | 200 | no | 6720 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/aging-services | https://georgia.gov/aging-services | OK | 200 | no | 6952 | 4 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/disability-services | https://georgia.gov/disability-services | OK | 200 | no | 7104 | 4 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/faqs-motor-vehicle-reports | https://georgia.gov/faqs-motor-vehicle-reports | FAIL | 403 | no | 6596 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/how-do-i-apply-childcare-and-parent-services-caps-program | https://georgia.gov/how-do-i-apply-childcare-and-parent-services-caps-program | FAIL | 429 | no | 6743 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-drivers-license | https://georgia.gov/how-do-i-apply-drivers-license | FAIL | 429 | no | 7567 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-exemption-window-tint-law | https://georgia.gov/how-do-i-apply-exemption-window-tint-law | OK | 200 | no | 6990 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-georgia-dream-homeownership-program | https://georgia.gov/how-do-i-apply-georgia-dream-homeownership-program | OK | 200 | no | 7430 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-housing-choice-voucher-program | https://georgia.gov/how-do-i-apply-housing-choice-voucher-program | FAIL | 429 | no | 6726 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-independent-care-waiver-program-icwp | https://georgia.gov/how-do-i-apply-independent-care-waiver-program-icwp | FAIL | 429 | no | 6602 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-medicaid | https://georgia.gov/how-do-i-apply-medicaid | OK | 200 | no | 6936 | 8 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/how-do-i-apply-my-georgia-drivers-license | https://georgia.gov/how-do-i-apply-my-georgia-drivers-license | OK | 200 | no | 8936 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-snap | https://georgia.gov/how-do-i-apply-snap | FAIL | 429 | no | 8497 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-state-id-card | https://georgia.gov/how-do-i-apply-state-id-card | OK | 200 | no | 7310 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-tanf | https://georgia.gov/how-do-i-apply-tanf | FAIL | 403 | no | 6631 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-apply-weapons-carry-license-wcl | https://georgia.gov/how-do-i-apply-weapons-carry-license-wcl | FAIL | 429 | no | 6687 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-get-or-renew-professional-certification-or-license | https://georgia.gov/how-do-i-get-or-renew-professional-certification-or-license | OK | 200 | no | 7003 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-pay-estimated-tax | https://georgia.gov/how-do-i-pay-estimated-tax | FAIL | 429 | no | 8627 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-pay-traffic-ticket | https://georgia.gov/how-do-i-pay-traffic-ticket | FAIL | 429 | no | 7906 | 8 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/how-do-i-register-boat | https://georgia.gov/how-do-i-register-boat | OK | 200 | no | 9206 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-register-business-dol | https://georgia.gov/how-do-i-register-business-dol | FAIL | 429 | no | 6698 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-register-business-dor | https://georgia.gov/how-do-i-register-business-dor | FAIL | 429 | no | 6746 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-register-corporation | https://georgia.gov/how-do-i-register-corporation | FAIL | 429 | no | 7677 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-register-llc | https://georgia.gov/how-do-i-register-llc | FAIL | 429 | no | 6317 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/how-do-i-register-lp-hdi | https://georgia.gov/how-do-i-register-lp-hdi | OK | 200 | no | 7231 | 10 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-register-vehicle | https://georgia.gov/how-do-i-register-vehicle | OK | 200 | no | 8093 | 10 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/how-do-i-register-vote | https://georgia.gov/how-do-i-register-vote | OK | 200 | no | 7033 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-renew-boat-registration | https://georgia.gov/how-do-i-renew-boat-registration | OK | 200 | no | 6965 | 8 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/how-do-i-renew-corporation | https://georgia.gov/how-do-i-renew-corporation | OK | 200 | no | 9409 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-renew-drivers-license | https://georgia.gov/how-do-i-renew-drivers-license | FAIL | 429 | no | 6927 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-renew-limited-partnership-lp | https://georgia.gov/how-do-i-renew-limited-partnership-lp | FAIL | 403 | no | 6640 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-renew-my-llc | https://georgia.gov/how-do-i-renew-my-llc | OK | 200 | no | 7173 | 8 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/how-do-i-renew-my-medicaid-benefits | https://georgia.gov/how-do-i-renew-my-medicaid-benefits | OK | 200 | no | 7066 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-renew-my-snap-benefits | https://georgia.gov/how-do-i-renew-my-snap-benefits | OK | 200 | no | 7090 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-renew-my-vehicle-registration | https://georgia.gov/how-do-i-renew-my-vehicle-registration | OK | 200 | no | 9392 | 8 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-report-elder-abuse | https://georgia.gov/how-do-i-report-elder-abuse | FAIL | 429 | no | 8615 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-request-and-vote-absentee-ballot | https://georgia.gov/how-do-i-request-and-vote-absentee-ballot | OK | 200 | no | 7356 | 10 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-request-copy-my-immunization-records | https://georgia.gov/how-do-i-request-copy-my-immunization-records | FAIL | 429 | no | 6572 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-request-criminal-background-check | https://georgia.gov/how-do-i-request-criminal-background-check | FAIL | 429 | no | 6671 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-request-vital-records | https://georgia.gov/how-do-i-request-vital-records | FAIL | 429 | no | 6778 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/motor-vehicle-reports | https://georgia.gov/motor-vehicle-reports | FAIL | 429 | no | 6605 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/public-service-commissioner-chuck-eaton | https://georgia.gov/public-service-commissioner-chuck-eaton | FAIL | 429 | no | 6348 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/renewing-business | https://georgia.gov/renewing-business | OK | 200 | no | 7061 | 3 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/contacts/child-protective-services | https://georgia.gov/contacts/child-protective-services | OK | 200 | no | 8474 | 5 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/contacts/customer-service | https://georgia.gov/contacts/customer-service | OK | 200 | no | 6923 | 5 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/contacts/customer-service-0 | https://georgia.gov/contacts/customer-service-0 | OK | 200 | no | 6769 | 5 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/contacts/customer-service-call-center | https://georgia.gov/contacts/customer-service-call-center | OK | 200 | no | 7016 | 5 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/contacts/dcss-customer-service | https://georgia.gov/contacts/dcss-customer-service | OK | 200 | no | 8365 | 5 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/contacts/department-administrative-services-contact | https://georgia.gov/contacts/department-administrative-services-contact | OK | 200 | no | 8987 | 5 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/contacts/department-human-services | https://georgia.gov/contacts/department-human-services | FAIL | 429 | no | 6843 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/contacts/department-human-services-division-family-and-children-services | https://georgia.gov/contacts/department-human-services-division-family-and-children-services | FAIL | 429 | no | 6700 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/contacts/department-veterans-service | https://georgia.gov/contacts/department-veterans-service | FAIL | 429 | no | 6879 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/locations/department-administrative-services | https://georgia.gov/locations/department-administrative-services | FAIL | 429 | no | 6553 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/locations/department-human-services-division-family-and-children-services-location | https://georgia.gov/locations/department-human-services-division-family-and-children-services-location | FAIL | 429 | no | 7062 | 6 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/locations/georgia-department-driver-services-dds | https://georgia.gov/locations/georgia-department-driver-services-dds | FAIL | 429 | no | 6609 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/locations/georgia-dhs-division-aging-services | https://georgia.gov/locations/georgia-dhs-division-aging-services | OK | 200 | no | 7140 | 6 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/locations/georgia-dhs-division-aging-services-0 | https://georgia.gov/locations/georgia-dhs-division-aging-services-0 | FAIL | 429 | no | 6802 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/locations/public-service-commission-location | https://georgia.gov/locations/public-service-commission-location | FAIL | 403 | no | 6764 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/organization/department-administrative-services | https://georgia.gov/organization/department-administrative-services | OK | 200 | no | 6636 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/organization/department-human-services | https://georgia.gov/organization/department-human-services | OK | 200 | no | 6788 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/organization/department-human-services-division-family-and-children-services | https://georgia.gov/organization/department-human-services-division-family-and-children-services | OK | 200 | no | 7139 | 4 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/organization/division-aging-services | https://georgia.gov/organization/division-aging-services | FAIL | 429 | no | 6610 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/organization/georgia-department-driver-services | https://georgia.gov/organization/georgia-department-driver-services | FAIL | 429 | no | 6843 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/organization/georgia-department-veterans-service | https://georgia.gov/organization/georgia-department-veterans-service | OK | 200 | no | 7055 | 4 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-heading, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/organization/governors-office-disability-services-ombudsman | https://georgia.gov/organization/governors-office-disability-services-ombudsman | FAIL | 429 | no | 7810 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/organization/public-service-commission | https://georgia.gov/organization/public-service-commission | OK | 200 | no | 6698 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, navigable/empty-heading |
| https://georgia.gov/child-support | https://georgia.gov/child-support | FAIL | 429 | no | 6584 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/events/2024-09-16/first-day-request-absentee-ballots-december-runoff | https://georgia.gov/events/2024-09-16/first-day-request-absentee-ballots-december-runoff | FAIL | 429 | no | 6713 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/events/2024-10-07/last-day-registered-voters-change-address | https://georgia.gov/events/2024-10-07/last-day-registered-voters-change-address | FAIL | 429 | no | 6672 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-collect-child-support | https://georgia.gov/how-do-i-collect-child-support | FAIL | 429 | no | 6621 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/landmark-unique, landmarks/no-duplicate-banner |
| https://georgia.gov/how-do-i-get-support-my-child-special-needs | https://georgia.gov/how-do-i-get-support-my-child-special-needs | OK | 200 | no | 7159 | 8 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/2022-calendario-electoral-intermedia | https://georgia.gov/2022-calendario-electoral-intermedia | OK | 200 | no | 7014 | 5 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/abby-cox-0 | https://georgia.gov/abby-cox-0 | OK | 200 | no | 7753 | 6 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, landmark-unique, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://georgia.gov/access-public-information | https://georgia.gov/access-public-information | OK | 200 | no | 7174 | 9 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/affordable-housing | https://georgia.gov/affordable-housing | FAIL | 429 | no | 6800 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/alicia-m-johnson | https://georgia.gov/alicia-m-johnson | FAIL | 429 | no | 6696 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/barbara-rivera-holmes | https://georgia.gov/barbara-rivera-holmes | FAIL | 429 | no | 6574 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/brad-raffensperger | https://georgia.gov/brad-raffensperger | FAIL | 429 | no | 6646 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/brian-kemp | https://georgia.gov/brian-kemp | FAIL | 429 | no | 6635 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/bulk-corporations-data | https://georgia.gov/bulk-corporations-data | OK | 200 | no | 7189 | 8 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/burt-jones | https://georgia.gov/burt-jones | FAIL | 429 | no | 6640 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/business-taxes | https://georgia.gov/business-taxes | OK | 200 | no | 7033 | 3 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/call | https://georgia.gov/call | OK | 200 | no | 6713 | 2 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, landmarks/no-duplicate-banner |
| https://georgia.gov/chat | https://georgia.gov/chat | FAIL | 429 | no | 6842 | 7 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/child-care | https://georgia.gov/child-care | FAIL | 403 | no | 6618 | 2 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |
| https://georgia.gov/children-and-parenting | https://georgia.gov/children-and-parenting | FAIL | 403 | no | 7185 | 3 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region, tabindex |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-consumer-services

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-33466">Yes</label>`
- XPath: `label[for="feedback-yes-button-33466"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-33466">No</label>`
- XPath: `label[for="feedback-no-button-33466"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-disability-services

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-33486">Yes</label>`
- XPath: `label[for="feedback-yes-button-33486"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-33486">No</label>`
- XPath: `label[for="feedback-no-button-33486"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-veterans-services

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-33506">Yes</label>`
- XPath: `label[for="feedback-yes-button-33506"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-33506">No</label>`
- XPath: `label[for="feedback-no-button-33506"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-find-aging-equity-and-accessibility-resources

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-33306">Yes</label>`
- XPath: `label[for="feedback-yes-button-33306"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-33306">No</label>`
- XPath: `label[for="feedback-no-button-33306"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-assistance-programs

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-children-and-parenting

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-courts-and-corrections

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-find-equity-and-accessibility-resources-education-and-teaching

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/accessibility

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/contacts/child-support-services

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/organization/georgia-department-human-services-division-child-support-services

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2 class="organization-summary__title"></h2>`
- XPath: `.organization-summary__title`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/find-a-job-in-georgia

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-find-job-georgia

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="how-do-i-step-links accordion-wrapper" aria-label="How Do I Steps">`
- XPath: `.content-page__mobile > .how-do-i-step-links.accordion-wrapper[aria-label="How Do I Steps"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-29106">Yes</label>`
- XPath: `label[for="feedback-yes-button-29106"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-29106">No</label>`
- XPath: `label[for="feedback-no-button-29106"]`

*... and 1 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/locations/12000-findley-rd-ste-400

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/aging-services

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Circle plus shape icon">`
- XPath: `.content-icon__image`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/disability-services

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Warning siren icon">`
- XPath: `.content-icon__image`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/faqs-motor-vehicle-reports

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-apply-childcare-and-parent-services-caps-program

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-apply-drivers-license

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-apply-exemption-window-tint-law

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-30211">Yes</label>`
- XPath: `label[for="feedback-yes-button-30211"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-30211">No</label>`
- XPath: `label[for="feedback-no-button-30211"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-apply-georgia-dream-homeownership-program

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-30281">Yes</label>`
- XPath: `label[for="feedback-yes-button-30281"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-30281">No</label>`
- XPath: `label[for="feedback-no-button-30281"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-apply-housing-choice-voucher-program

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-apply-independent-care-waiver-program-icwp

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-apply-medicaid

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20616">Yes</label>`
- XPath: `label[for="feedback-yes-button-20616"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20616">No</label>`
- XPath: `label[for="feedback-no-button-20616"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-apply-my-georgia-drivers-license

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-25076">Yes</label>`
- XPath: `label[for="feedback-yes-button-25076"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-25076">No</label>`
- XPath: `label[for="feedback-no-button-25076"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-apply-snap

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-apply-state-id-card

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-33066">Yes</label>`
- XPath: `label[for="feedback-yes-button-33066"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-33066">No</label>`
- XPath: `label[for="feedback-no-button-33066"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-apply-tanf

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-apply-weapons-carry-license-wcl

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-get-or-renew-professional-certification-or-license

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-pay-estimated-tax

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-pay-traffic-ticket

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-28316">Yes</label>`
- XPath: `label[for="feedback-yes-button-28316"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-28316">No</label>`
- XPath: `label[for="feedback-no-button-28316"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-register-boat

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-28996">Yes</label>`
- XPath: `label[for="feedback-yes-button-28996"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-28996">No</label>`
- XPath: `label[for="feedback-no-button-28996"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-register-business-dol

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-register-business-dor

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-register-corporation

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-register-llc

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-register-lp-hdi

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="how-do-i-step-links accordion-wrapper" aria-label="How Do I Steps">`
- XPath: `.content-page__mobile > .how-do-i-step-links.accordion-wrapper[aria-label="How Do I Steps"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20321">Yes</label>`
- XPath: `label[for="feedback-yes-button-20321"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20321">No</label>`
- XPath: `label[for="feedback-no-button-20321"]`

*... and 1 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-register-vehicle

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="how-do-i-step-links accordion-wrapper" aria-label="How Do I Steps">`
- XPath: `.content-page__mobile > .how-do-i-step-links.accordion-wrapper[aria-label="How Do I Steps"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20536">Yes</label>`
- XPath: `label[for="feedback-yes-button-20536"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20536">No</label>`
- XPath: `label[for="feedback-no-button-20536"]`

*... and 1 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-register-vote

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20736">Yes</label>`
- XPath: `label[for="feedback-yes-button-20736"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20736">No</label>`
- XPath: `label[for="feedback-no-button-20736"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-renew-boat-registration

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-30946">Yes</label>`
- XPath: `label[for="feedback-yes-button-30946"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-30946">No</label>`
- XPath: `label[for="feedback-no-button-30946"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-renew-corporation

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-29271">Yes</label>`
- XPath: `label[for="feedback-yes-button-29271"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-29271">No</label>`
- XPath: `label[for="feedback-no-button-29271"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-renew-drivers-license

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-renew-limited-partnership-lp

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-renew-my-llc

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-28926">Yes</label>`
- XPath: `label[for="feedback-yes-button-28926"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-28926">No</label>`
- XPath: `label[for="feedback-no-button-28926"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-renew-my-medicaid-benefits

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-25611">Yes</label>`
- XPath: `label[for="feedback-yes-button-25611"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-25611">No</label>`
- XPath: `label[for="feedback-no-button-25611"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-renew-my-snap-benefits

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-27706">Yes</label>`
- XPath: `label[for="feedback-yes-button-27706"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-27706">No</label>`
- XPath: `label[for="feedback-no-button-27706"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-renew-my-vehicle-registration

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-20561">Yes</label>`
- XPath: `label[for="feedback-yes-button-20561"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-20561">No</label>`
- XPath: `label[for="feedback-no-button-20561"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-report-elder-abuse

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-request-and-vote-absentee-ballot

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

**Failure 2:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="how-do-i-step-links accordion-wrapper" aria-label="How Do I Steps">`
- XPath: `.content-page__mobile > .how-do-i-step-links.accordion-wrapper[aria-label="How Do I Steps"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-23061">Yes</label>`
- XPath: `label[for="feedback-yes-button-23061"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-23061">No</label>`
- XPath: `label[for="feedback-no-button-23061"]`

*... and 1 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/how-do-i-request-copy-my-immunization-records

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-request-criminal-background-check

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-request-vital-records

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/motor-vehicle-reports

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/public-service-commissioner-chuck-eaton

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/renewing-business

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/contacts/child-protective-services

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/contacts/customer-service

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/contacts/customer-service-0

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/contacts/customer-service-call-center

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/contacts/dcss-customer-service

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/contacts/department-administrative-services-contact

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/contacts/department-human-services

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/contacts/department-human-services-division-family-and-children-services

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/contacts/department-veterans-service

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/locations/department-administrative-services

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/locations/department-human-services-division-family-and-children-services-location

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="full-location-teaser__info">`
- XPath: `.full-location-teaser__info`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/locations/georgia-department-driver-services-dds

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/locations/georgia-dhs-division-aging-services

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="full-location-teaser__info">`
- XPath: `.full-location-teaser__info`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/locations/georgia-dhs-division-aging-services-0

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/locations/public-service-commission-location

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/organization/department-administrative-services

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/organization/department-human-services

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/organization/department-human-services-division-family-and-children-services

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2 class="organization-summary__title"></h2>`
- XPath: `.organization-summary__title`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/organization/division-aging-services

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/organization/georgia-department-driver-services

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/organization/georgia-department-veterans-service

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2 class="organization-summary__title"></h2>`
- XPath: `.organization-summary__title`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/organization/governors-office-disability-services-ombudsman

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/organization/public-service-commission

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/child-support

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/events/2024-09-16/first-day-request-absentee-ballots-december-runoff

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/events/2024-10-07/last-day-registered-voters-change-address

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-collect-child-support

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/how-do-i-get-support-my-child-special-needs

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-30491">Yes</label>`
- XPath: `label[for="feedback-yes-button-30491"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-30491">No</label>`
- XPath: `label[for="feedback-no-button-30491"]`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/2022-calendario-electoral-intermedia

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/abby-cox-0

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header id="header" class="header__wrapper header__wrapper--www" data-drupal-selector="site-header" role="banner" data-info-expanded="false" data-once="navigation">`
- XPath: `#header`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="bio-top__teaser">      Abigail (Abby) Cox is the Director of the Department of Human Services, Division of Aging Services (DAS). In this capacity, she administers a statewide system of services for older adults, their families and caregivers.   </div>`
- XPath: `.bio-top__teaser`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/access-public-information

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Document icon">`
- XPath: `div[aria-label="Document icon"]`

**Failure 2:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Building icon">`
- XPath: `div[aria-label="Building icon"]`

**Failure 3:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Car icon">`
- XPath: `div[aria-label="Car icon"]`

**Failure 4:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Computer icon">`
- XPath: `div[aria-label="Computer icon"]`

**Failure 5:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Checbkox shape icon">`
- XPath: `div[aria-label="Checbkox shape icon"]`

*... and 1 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/affordable-housing

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/alicia-m-johnson

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/barbara-rivera-holmes

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/brad-raffensperger

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/brian-kemp

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/bulk-corporations-data

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="content-icon__image" aria-label="Phone icon">`
- XPath: `.content-icon__image`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-32496">Yes</label>`
- XPath: `label[for="feedback-yes-button-32496"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-32496">No</label>`
- XPath: `label[for="feedback-no-button-32496"]`

*... and 1 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/burt-jones

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/business-taxes

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/call

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/chat

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<h2>Did you find what you were looking for on this page?</h2>`
- XPath: `#upper-feedback-content > h2`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-yes-button-27536">Yes</label>`
- XPath: `label[for="feedback-yes-button-27536"]`

**Failure 5:**
- Message: All page content should be contained by landmarks
- HTML: `<label class="visually-hidden" for="feedback-no-button-27536">No</label>`
- XPath: `label[for="feedback-no-button-27536"]`

*... and 1 more failures for this rule*

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

### https://georgia.gov/child-care

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**WCAG**: [SC 2.2.1](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable) (Level A)

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://georgia.gov/children-and-parenting

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__title">           That Text Is Not From Us        </p>`
- XPath: `.alert__title`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p class="alert__body">We'll never request payment or info through unsolicited text</p>`
- XPath: `.alert__body`

#### Rule: [tabindex](https://dequeuniversity.com/rules/axe/4.11/tabindex?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements should not have tabindex greater than zero
- HTML: `<div id="ivy-bot" tabindex="2" role="button" aria-label="Open chat" aria-expanded="false" aria-disabled="false" class="ivy-circle ivy-intro..." style="background-color: rg...">`
- XPath: `#ivy-bot`

