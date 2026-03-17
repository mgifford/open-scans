# Scan Report: NH.gov

- Issue: https://github.com/mgifford/open-scans/issues/175
- Submitted by: maggiewachs
- Scanned at: 2026-03-17T00:53:59.004Z
- Engines used: AXE, QUALWEB
- Scan duration: 5.0 minutes
- Total URLs submitted: 56
- Accepted public URLs: 56
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 504 passed, 280 failed, 0 cantTell, 4480 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 728 passed, 56 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 0

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.nh.gov/) | 5 | 1 | **6** | Access Denied |
| [View Page](https://www.nh.gov/government) | 5 | 1 | **6** | Access Denied |
| [View Page](https://www.nh.gov/government/state-government-agencies) | 5 | 1 | **6** | Access Denied |
| [View Page](https://www.das.nh.gov/) | 5 | 1 | **6** | Access Denied |
| [View Page](https://www.nh.gov/search) | 5 | 1 | **6** | Access Denied |
| [View Page](https://www.nh.gov/search/advanced) | 5 | 1 | **6** | Access Denied |
| [View Page](https://www.nh.gov/contact-us) | 5 | 1 | **6** | Access Denied |
| [View Page](https://www.nh.gov/contact-us/feedback) | 5 | 1 | **6** | Access Denied |
| [View Page](https://www.nh.gov/online-services) | 5 | 1 | **6** | Access Denied |
| [View Page](https://www.nh.gov/help-center) | 5 | 1 | **6** | Access Denied |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| html-has-lang | **56** of 56 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/html-has-lang) |
| landmark-one-main | **56** of 56 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-one-main) |
| region | **56** of 56 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 56 page(s) - 56 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h1>Access Denied</h1>
```

**XPath** (use in browser DevTools):
```
h1
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('h1')`
5. The element will be highlighted

**Affected Pages**:
- https://nh.gov/
- https://nh.gov/government
- https://nh.gov/government/state-government-agencies
- https://das.nh.gov/
- https://nh.gov/search
- *...and 51 more page(s)*

---

#### Pattern 2: Affects 49 page(s) - 49 occurrence(s)

**Scanner**: axe
**Rule**: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**Issue**: <html> element must have a lang attribute

**HTML Pattern**:
```html
<html>
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
- https://nh.gov/government/state-government-agencies
- https://nh.gov/search/advanced
- https://nh.gov/contact-us/feedback
- https://nh.gov/online-services
- https://nh.gov/residents/events
- *...and 44 more page(s)*

---

#### Pattern 3: Affects 49 page(s) - 49 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate
**Issue**: Document should have one main landmark

**HTML Pattern**:
```html
<html>
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
- https://nh.gov/government/state-government-agencies
- https://nh.gov/search/advanced
- https://nh.gov/contact-us/feedback
- https://nh.gov/online-services
- https://nh.gov/residents/events
- *...and 44 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://nh.gov/ | https://www.nh.gov/ | FAIL | 403 | yes | 6873 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/government | https://www.nh.gov/government | FAIL | 403 | yes | 5382 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/government/state-government-agencies | https://www.nh.gov/government/state-government-agencies | FAIL | 403 | yes | 5372 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://das.nh.gov/ | https://www.das.nh.gov/ | FAIL | 403 | yes | 5452 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/search | https://www.nh.gov/search | FAIL | 403 | yes | 5458 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/search/advanced | https://www.nh.gov/search/advanced | FAIL | 403 | yes | 5643 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/contact-us | https://www.nh.gov/contact-us | FAIL | 403 | yes | 5336 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/contact-us/feedback | https://www.nh.gov/contact-us/feedback | FAIL | 403 | yes | 5388 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services | https://www.nh.gov/online-services | FAIL | 403 | yes | 5357 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/help-center | https://www.nh.gov/help-center | FAIL | 403 | yes | 5336 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/residents/events | https://www.nh.gov/residents/events | FAIL | 403 | yes | 5368 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/residents/events/submit | https://www.nh.gov/residents/events/submit | FAIL | 403 | yes | 5323 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/government/cities-towns | https://www.nh.gov/government/cities-towns | FAIL | 403 | yes | 5354 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/government/local-government | https://www.nh.gov/government/local-government | FAIL | 403 | yes | 5318 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/history | https://www.nh.gov/almanac/history | FAIL | 403 | yes | 5329 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/history/markers | https://www.nh.gov/almanac/history/markers | FAIL | 403 | yes | 5359 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/visitors/planning-tools | https://www.nh.gov/visitors/planning-tools | FAIL | 403 | yes | 5344 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/visitors/guide-request | https://www.nh.gov/visitors/guide-request | FAIL | 403 | yes | 5393 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents/motor-vehicle-boating-services | https://www.nh.gov/online-services/residents/motor-vehicle-boating-services | FAIL | 403 | yes | 5363 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents/motor-vehicle-boating-services/renewal | https://www.nh.gov/online-services/residents/motor-vehicle-boating-services/renewal | FAIL | 403 | yes | 5331 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/sitemap | https://www.nh.gov/sitemap | FAIL | 403 | yes | 5361 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/residents/energy-assistance | https://www.nh.gov/residents/energy-assistance | FAIL | 403 | yes | 5357 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/residents/employment-security | https://www.nh.gov/residents/employment-security | FAIL | 403 | yes | 5361 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/businesses/procurement | https://www.nh.gov/businesses/procurement | FAIL | 403 | yes | 5329 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/government/transparency | https://www.nh.gov/government/transparency | FAIL | 403 | yes | 5328 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/government/boards-commissions | https://www.nh.gov/government/boards-commissions | FAIL | 403 | yes | 5370 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents/public-safety | https://www.nh.gov/online-services/residents/public-safety | FAIL | 403 | yes | 5323 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents/housing-assistance | https://www.nh.gov/online-services/residents/housing-assistance | FAIL | 403 | yes | 5379 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents/legal-assistance | https://www.nh.gov/online-services/residents/legal-assistance | FAIL | 403 | yes | 5340 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents/social-services | https://www.nh.gov/online-services/residents/social-services | FAIL | 403 | yes | 5328 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents/veterans-services | https://www.nh.gov/online-services/residents/veterans-services | FAIL | 403 | yes | 5361 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-spider | https://www.nh.gov/almanac/state-spider | FAIL | 403 | yes | 5327 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-raptor | https://www.nh.gov/almanac/state-raptor | FAIL | 403 | yes | 5376 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-tartan | https://www.nh.gov/almanac/state-tartan | FAIL | 403 | yes | 5338 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-saltwater-game-fish | https://www.nh.gov/almanac/state-saltwater-game-fish | FAIL | 403 | yes | 5335 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-fruit | https://www.nh.gov/almanac/state-fruit | FAIL | 403 | yes | 5354 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-marsupial | https://www.nh.gov/almanac/state-marsupial | FAIL | 403 | yes | 5349 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-beverage | https://www.nh.gov/almanac/state-beverage | FAIL | 403 | yes | 5345 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-animal | https://www.nh.gov/almanac/state-animal | FAIL | 403 | yes | 5321 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-amphibian | https://www.nh.gov/almanac/state-amphibian | FAIL | 403 | yes | 5332 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution/bill-rights | https://www.nh.gov/glance/state-constitution/bill-rights | FAIL | 403 | yes | 5353 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution/clerk-courts | https://www.nh.gov/glance/state-constitution/clerk-courts | FAIL | 403 | yes | 5315 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution/secretary-treasurer-etc | https://www.nh.gov/glance/state-constitution/secretary-treasurer-etc | FAIL | 403 | yes | 5358 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution/executive-power-governor | https://www.nh.gov/glance/state-constitution/executive-power-governor | FAIL | 403 | yes | 5342 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution/county-treasurer-etc | https://www.nh.gov/glance/state-constitution/county-treasurer-etc | FAIL | 403 | yes | 5326 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution/oaths-and-subscriptions-exclusion-offices-etc | https://www.nh.gov/glance/state-constitution/oaths-and-subscriptions-exclusion-offices-etc | FAIL | 403 | yes | 5347 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution/senate | https://www.nh.gov/glance/state-constitution/senate | FAIL | 403 | yes | 5325 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/policies/accessibility-policy | https://www.nh.gov/policies/accessibility-policy | FAIL | 403 | yes | 5348 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents | https://www.nh.gov/online-services/residents | FAIL | 403 | yes | 5355 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/demographics-statistics | https://www.nh.gov/almanac/demographics-statistics | FAIL | 403 | yes | 5341 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/policies/privacy-policy | https://www.nh.gov/policies/privacy-policy | FAIL | 403 | yes | 5343 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/policies/language-translation-tool-information | https://www.nh.gov/policies/language-translation-tool-information | FAIL | 403 | yes | 5332 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution | https://www.nh.gov/glance/state-constitution | FAIL | 403 | yes | 5340 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/traffic | https://www.nh.gov/glance/traffic | FAIL | 403 | yes | 5328 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/weather | https://www.nh.gov/glance/weather | FAIL | 403 | yes | 5314 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/page-not-found | https://www.nh.gov/page-not-found | FAIL | 403 | yes | 5335 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://nh.gov/

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/" on this server.<p> Reference #18.91813217.1773708538.1174bae1 </p><p>https://errors.edgesuite.net/18.91813217.1773708538.1174bae1</p>   </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/" on this server.<p> Reference #18.91813217.1773708538.1174bae1 </p><p>https://errors.edgesuite.net/18.91813217.1773708538.1174bae1</p>   </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.91813217.1773708538.1174bae1 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.91813217.1773708538.1174bae1</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/government

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/government" on this server.<p> Reference #18.8f813217.1773708544.35db9500 </p><p>https://errors.edgesuite.net/18.8f813217.1773708544.35db9500</p>   </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/government" on this server.<p> Reference #18.8f813217.1773708544.35db9500 </p><p>https://errors.edgesuite.net/18.8f813217.1773708544.35db9500</p>   </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708544.35db9500 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708544.35db9500</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/government/state-government-agencies

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708550.35dc389e </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708550.35dc389e</p>`
- XPath: `p:nth-child(3)`

### https://das.nh.gov/

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.das.nh.gov/" on this server.<p> Reference #18.89ce4917.1773708555.f6207c </p><p>https://errors.edgesuite.net/18.89ce4917.1773708555.f6207c</p>   </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.das.nh.gov/" on this server.<p> Reference #18.89ce4917.1773708555.f6207c </p><p>https://errors.edgesuite.net/18.89ce4917.1773708555.f6207c</p>   </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.89ce4917.1773708555.f6207c </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.89ce4917.1773708555.f6207c</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/search

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/search" on this server.<p> Reference #18.8ece4917.1773708560.1a47015 </p><p>https://errors.edgesuite.net/18.8ece4917.1773708560.1a47015</p>   </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/search" on this server.<p> Reference #18.8ece4917.1773708560.1a47015 </p><p>https://errors.edgesuite.net/18.8ece4917.1773708560.1a47015</p>   </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708560.1a47015 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708560.1a47015</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/search/advanced

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708566.1a472d7 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708566.1a472d7</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/contact-us

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/contact-us" on this server.<p> Reference #18.8ece4917.1773708571.1a4752e </p><p>https://errors.edgesuite.net/18.8ece4917.1773708571.1a4752e</p>   </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/contact-us" on this server.<p> Reference #18.8ece4917.1773708571.1a4752e </p><p>https://errors.edgesuite.net/18.8ece4917.1773708571.1a4752e</p>   </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708571.1a4752e </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708571.1a4752e</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/contact-us/feedback

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708577.1a47743 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708577.1a47743</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/online-services

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708582.1a47a17 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708582.1a47a17</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/help-center

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/help-center" on this server.<p> Reference #18.8ece4917.1773708588.1a47c4d </p><p>https://errors.edgesuite.net/18.8ece4917.1773708588.1a47c4d</p>   </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/help-center" on this server.<p> Reference #18.8ece4917.1773708588.1a47c4d </p><p>https://errors.edgesuite.net/18.8ece4917.1773708588.1a47c4d</p>   </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708588.1a47c4d </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708588.1a47c4d</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/residents/events

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708593.1a47e8c </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708593.1a47e8c</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/residents/events/submit

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708598.1a481a2 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708598.1a481a2</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/government/cities-towns

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708604.35e29afa </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708604.35e29afa</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/government/local-government

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.91813217.1773708609.1179bcb0 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.91813217.1773708609.1179bcb0</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/almanac/history

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708614.35e3b47e </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708614.35e3b47e</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/almanac/history/markers

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.91813217.1773708620.117a8044 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.91813217.1773708620.117a8044</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/visitors/planning-tools

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708625.35e4d8f1 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708625.35e4d8f1</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/visitors/guide-request

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708630.35e56562 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708630.35e56562</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/online-services/residents/motor-vehicle-boating-services

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.91813217.1773708636.117bb115 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.91813217.1773708636.117bb115</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/online-services/residents/motor-vehicle-boating-services/renewal

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708641.35e6923f </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708641.35e6923f</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/sitemap

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/sitemap" on this server.<p> Reference #18.8f813217.1773708646.35e7296e </p><p>https://errors.edgesuite.net/18.8f813217.1773708646.35e7296e</p>   </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/sitemap" on this server.<p> Reference #18.8f813217.1773708646.35e7296e </p><p>https://errors.edgesuite.net/18.8f813217.1773708646.35e7296e</p>   </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708646.35e7296e </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708646.35e7296e</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/residents/energy-assistance

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.91813217.1773708652.117ced65 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.91813217.1773708652.117ced65</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/residents/employment-security

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708657.35e86f27 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708657.35e86f27</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/businesses/procurement

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708662.35e913b0 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708662.35e913b0</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/government/transparency

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708668.1a4b40e </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708668.1a4b40e</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/government/boards-commissions

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708673.1a4b740 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708673.1a4b740</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/online-services/residents/public-safety

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708678.1a4ba7f </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708678.1a4ba7f</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/online-services/residents/housing-assistance

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708684.1a4be64 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708684.1a4be64</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/online-services/residents/legal-assistance

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708689.35ed4094 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708689.35ed4094</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/online-services/residents/social-services

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.91813217.1773708695.1180442a </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.91813217.1773708695.1180442a</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/online-services/residents/veterans-services

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.91813217.1773708700.1180b2c3 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.91813217.1773708700.1180b2c3</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/almanac/state-spider

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708705.35ef83ca </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708705.35ef83ca</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/almanac/state-raptor

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.91813217.1773708711.11815d2b </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.91813217.1773708711.11815d2b</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/almanac/state-tartan

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708716.35f11e5a </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708716.35f11e5a</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/almanac/state-saltwater-game-fish

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708721.35f1ee04 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708721.35f1ee04</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/almanac/state-fruit

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708727.35f2c9f9 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708727.35f2c9f9</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/almanac/state-marsupial

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708732.1a4e53d </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708732.1a4e53d</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/almanac/state-beverage

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708737.1a4eb47 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708737.1a4eb47</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/almanac/state-animal

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708743.1a4f0df </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708743.1a4f0df</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/almanac/state-amphibian

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708748.1a4f5b4 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708748.1a4f5b4</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/glance/state-constitution/bill-rights

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708753.35f711a7 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708753.35f711a7</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/glance/state-constitution/clerk-courts

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.91813217.1773708759.1184ad6b </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.91813217.1773708759.1184ad6b</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/glance/state-constitution/secretary-treasurer-etc

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708764.35f8b485 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708764.35f8b485</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/glance/state-constitution/executive-power-governor

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.91813217.1773708769.118554a8 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.91813217.1773708769.118554a8</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/glance/state-constitution/county-treasurer-etc

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.91813217.1773708775.1185b005 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.91813217.1773708775.1185b005</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/glance/state-constitution/oaths-and-subscriptions-exclusion-offices-etc

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708780.35fb04a8 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708780.35fb04a8</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/glance/state-constitution/senate

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708785.35fbca7f </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708785.35fbca7f</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/policies/accessibility-policy

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8f813217.1773708791.35fc7ddc </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8f813217.1773708791.35fc7ddc</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/online-services/residents

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708796.1a52f98 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708796.1a52f98</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/almanac/demographics-statistics

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708801.1a534fa </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708801.1a534fa</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/policies/privacy-policy

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708807.1a539e6 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708807.1a539e6</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/policies/language-translation-tool-information

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708812.1a53df4 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708812.1a53df4</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/glance/state-constitution

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708817.1a541fc </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708817.1a541fc</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/glance/traffic

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708823.1a54692 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708823.1a54692</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/glance/weather

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708828.1a54b22 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708828.1a54b22</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/page-not-found

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.8ece4917.1773708833.1a551ae </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.8ece4917.1773708833.1a551ae</p>`
- XPath: `p:nth-child(3)`

