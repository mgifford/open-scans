# Scan Report: NH.gov

- Issue: https://github.com/mgifford/open-scans/issues/175
- Submitted by: maggiewachs
- Scanned at: 2026-03-17T00:03:45.492Z
- Engines used: AXE, QUALWEB
- Scan duration: 5.2 minutes
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
| https://nh.gov/ | https://www.nh.gov/ | FAIL | 403 | yes | 7358 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/government | https://www.nh.gov/government | FAIL | 403 | yes | 5635 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/government/state-government-agencies | https://www.nh.gov/government/state-government-agencies | FAIL | 403 | yes | 5607 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://das.nh.gov/ | https://www.das.nh.gov/ | FAIL | 403 | yes | 5989 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/search | https://www.nh.gov/search | FAIL | 403 | yes | 5658 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/search/advanced | https://www.nh.gov/search/advanced | FAIL | 403 | yes | 5613 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/contact-us | https://www.nh.gov/contact-us | FAIL | 403 | yes | 5578 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/contact-us/feedback | https://www.nh.gov/contact-us/feedback | FAIL | 403 | yes | 5577 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services | https://www.nh.gov/online-services | FAIL | 403 | yes | 5532 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/help-center | https://www.nh.gov/help-center | FAIL | 403 | yes | 5483 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/residents/events | https://www.nh.gov/residents/events | FAIL | 403 | yes | 5582 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/residents/events/submit | https://www.nh.gov/residents/events/submit | FAIL | 403 | yes | 5536 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/government/cities-towns | https://www.nh.gov/government/cities-towns | FAIL | 403 | yes | 5542 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/government/local-government | https://www.nh.gov/government/local-government | FAIL | 403 | yes | 5642 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/history | https://www.nh.gov/almanac/history | FAIL | 403 | yes | 5565 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/history/markers | https://www.nh.gov/almanac/history/markers | FAIL | 403 | yes | 5692 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/visitors/planning-tools | https://www.nh.gov/visitors/planning-tools | FAIL | 403 | yes | 5580 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/visitors/guide-request | https://www.nh.gov/visitors/guide-request | FAIL | 403 | yes | 5508 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents/motor-vehicle-boating-services | https://www.nh.gov/online-services/residents/motor-vehicle-boating-services | FAIL | 403 | yes | 5547 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents/motor-vehicle-boating-services/renewal | https://www.nh.gov/online-services/residents/motor-vehicle-boating-services/renewal | FAIL | 403 | yes | 5565 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/sitemap | https://www.nh.gov/sitemap | FAIL | 403 | yes | 5565 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/residents/energy-assistance | https://www.nh.gov/residents/energy-assistance | FAIL | 403 | yes | 5544 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/residents/employment-security | https://www.nh.gov/residents/employment-security | FAIL | 403 | yes | 5538 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/businesses/procurement | https://www.nh.gov/businesses/procurement | FAIL | 403 | yes | 5528 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/government/transparency | https://www.nh.gov/government/transparency | FAIL | 403 | yes | 5526 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/government/boards-commissions | https://www.nh.gov/government/boards-commissions | FAIL | 403 | yes | 5580 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents/public-safety | https://www.nh.gov/online-services/residents/public-safety | FAIL | 403 | yes | 5562 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents/housing-assistance | https://www.nh.gov/online-services/residents/housing-assistance | FAIL | 403 | yes | 5598 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents/legal-assistance | https://www.nh.gov/online-services/residents/legal-assistance | FAIL | 403 | yes | 5658 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents/social-services | https://www.nh.gov/online-services/residents/social-services | FAIL | 403 | yes | 5544 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents/veterans-services | https://www.nh.gov/online-services/residents/veterans-services | FAIL | 403 | yes | 5561 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-spider | https://www.nh.gov/almanac/state-spider | FAIL | 403 | yes | 5607 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-raptor | https://www.nh.gov/almanac/state-raptor | FAIL | 403 | yes | 5517 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-tartan | https://www.nh.gov/almanac/state-tartan | FAIL | 403 | yes | 5536 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-saltwater-game-fish | https://www.nh.gov/almanac/state-saltwater-game-fish | FAIL | 403 | yes | 5524 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-fruit | https://www.nh.gov/almanac/state-fruit | FAIL | 403 | yes | 5581 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-marsupial | https://www.nh.gov/almanac/state-marsupial | FAIL | 403 | yes | 5530 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-beverage | https://www.nh.gov/almanac/state-beverage | FAIL | 403 | yes | 5585 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-animal | https://www.nh.gov/almanac/state-animal | FAIL | 403 | yes | 5589 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/state-amphibian | https://www.nh.gov/almanac/state-amphibian | FAIL | 403 | yes | 5586 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution/bill-rights | https://www.nh.gov/glance/state-constitution/bill-rights | FAIL | 403 | yes | 5581 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution/clerk-courts | https://www.nh.gov/glance/state-constitution/clerk-courts | FAIL | 403 | yes | 5567 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution/secretary-treasurer-etc | https://www.nh.gov/glance/state-constitution/secretary-treasurer-etc | FAIL | 403 | yes | 5554 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution/executive-power-governor | https://www.nh.gov/glance/state-constitution/executive-power-governor | FAIL | 403 | yes | 5513 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution/county-treasurer-etc | https://www.nh.gov/glance/state-constitution/county-treasurer-etc | FAIL | 403 | yes | 5554 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution/oaths-and-subscriptions-exclusion-offices-etc | https://www.nh.gov/glance/state-constitution/oaths-and-subscriptions-exclusion-offices-etc | FAIL | 403 | yes | 5598 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution/senate | https://www.nh.gov/glance/state-constitution/senate | FAIL | 403 | yes | 5532 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/policies/accessibility-policy | https://www.nh.gov/policies/accessibility-policy | FAIL | 403 | yes | 5579 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/online-services/residents | https://www.nh.gov/online-services/residents | FAIL | 403 | yes | 5620 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/almanac/demographics-statistics | https://www.nh.gov/almanac/demographics-statistics | FAIL | 403 | yes | 5545 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/policies/privacy-policy | https://www.nh.gov/policies/privacy-policy | FAIL | 403 | yes | 5517 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/policies/language-translation-tool-information | https://www.nh.gov/policies/language-translation-tool-information | FAIL | 403 | yes | 5513 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/state-constitution | https://www.nh.gov/glance/state-constitution | FAIL | 403 | yes | 5545 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/traffic | https://www.nh.gov/glance/traffic | FAIL | 403 | yes | 5545 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/glance/weather | https://www.nh.gov/glance/weather | FAIL | 403 | yes | 5576 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://nh.gov/page-not-found | https://www.nh.gov/page-not-found | FAIL | 403 | yes | 5539 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://nh.gov/

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/" on this server.<p> Reference #18.cf1fd717.1773705513.4251892 </p><p>https://errors.edgesuite.net/18.cf1fd717.1773705513.4251892</p>   </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/" on this server.<p> Reference #18.cf1fd717.1773705513.4251892 </p><p>https://errors.edgesuite.net/18.cf1fd717.1773705513.4251892</p>   </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.cf1fd717.1773705513.4251892 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.cf1fd717.1773705513.4251892</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/government

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/government" on this server.<p> Reference #18.cf1fd717.1773705519.4252c05 </p><p>https://errors.edgesuite.net/18.cf1fd717.1773705519.4252c05</p>   </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/government" on this server.<p> Reference #18.cf1fd717.1773705519.4252c05 </p><p>https://errors.edgesuite.net/18.cf1fd717.1773705519.4252c05</p>   </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.cf1fd717.1773705519.4252c05 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.cf1fd717.1773705519.4252c05</p>`
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
- HTML: `<p> Reference #18.c41fd717.1773705524.20f12e9a </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.c41fd717.1773705524.20f12e9a</p>`
- XPath: `p:nth-child(3)`

### https://das.nh.gov/

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.das.nh.gov/" on this server.<p> Reference #18.50b03b17.1773705530.2a5e47af </p><p>https://errors.edgesuite.net/18.50b03b17.1773705530.2a5e47af</p>   </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.das.nh.gov/" on this server.<p> Reference #18.50b03b17.1773705530.2a5e47af </p><p>https://errors.edgesuite.net/18.50b03b17.1773705530.2a5e47af</p>   </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.50b03b17.1773705530.2a5e47af </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705530.2a5e47af</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/search

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/search" on this server.<p> Reference #18.47b03b17.1773705536.3138a95a </p><p>https://errors.edgesuite.net/18.47b03b17.1773705536.3138a95a</p>   </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/search" on this server.<p> Reference #18.47b03b17.1773705536.3138a95a </p><p>https://errors.edgesuite.net/18.47b03b17.1773705536.3138a95a</p>   </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.47b03b17.1773705536.3138a95a </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705536.3138a95a</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705542.3138c512 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705542.3138c512</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/contact-us

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/contact-us" on this server.<p> Reference #18.50b03b17.1773705547.2a5ea92b </p><p>https://errors.edgesuite.net/18.50b03b17.1773705547.2a5ea92b</p>   </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/contact-us" on this server.<p> Reference #18.50b03b17.1773705547.2a5ea92b </p><p>https://errors.edgesuite.net/18.50b03b17.1773705547.2a5ea92b</p>   </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.50b03b17.1773705547.2a5ea92b </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705547.2a5ea92b</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705553.3138fafc </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705553.3138fafc</p>`
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
- HTML: `<p> Reference #18.cf1fd717.1773705558.425995b </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.cf1fd717.1773705558.425995b</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/help-center

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/help-center" on this server.<p> Reference #18.cf1fd717.1773705564.425a4d1 </p><p>https://errors.edgesuite.net/18.cf1fd717.1773705564.425a4d1</p>   </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/help-center" on this server.<p> Reference #18.cf1fd717.1773705564.425a4d1 </p><p>https://errors.edgesuite.net/18.cf1fd717.1773705564.425a4d1</p>   </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.cf1fd717.1773705564.425a4d1 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.cf1fd717.1773705564.425a4d1</p>`
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
- HTML: `<p> Reference #18.cf1fd717.1773705569.425b1ea </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.cf1fd717.1773705569.425b1ea</p>`
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
- HTML: `<p> Reference #18.c41fd717.1773705575.20f31c5e </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.c41fd717.1773705575.20f31c5e</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705581.31396a66 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705581.31396a66</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705586.2a5f8f75 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705586.2a5f8f75</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705592.3139b1a4 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705592.3139b1a4</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705597.2a5fda83 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705597.2a5fda83</p>`
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
- HTML: `<p> Reference #18.cf1fd717.1773705603.425f770 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.cf1fd717.1773705603.425f770</p>`
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
- HTML: `<p> Reference #18.cf1fd717.1773705609.42602dc </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.cf1fd717.1773705609.42602dc</p>`
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
- HTML: `<p> Reference #18.cf1fd717.1773705614.4260cb1 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.cf1fd717.1773705614.4260cb1</p>`
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
- HTML: `<p> Reference #18.cf1fd717.1773705620.4261995 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.cf1fd717.1773705620.4261995</p>`
- XPath: `p:nth-child(3)`

### https://nh.gov/sitemap

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/sitemap" on this server.<p> Reference #18.47b03b17.1773705625.313a89c6 </p><p>https://errors.edgesuite.net/18.47b03b17.1773705625.313a89c6</p>   </body></html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html><head> <title>Access Denied</title> </head><body> <h1>Access Denied</h1>   You don't have permission to access "http://www.nh.gov/sitemap" on this server.<p> Reference #18.47b03b17.1773705625.313a89c6 </p><p>https://errors.edgesuite.net/18.47b03b17.1773705625.313a89c6</p>   </body></html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<h1>Access Denied</h1>`
- XPath: `h1`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<p> Reference #18.47b03b17.1773705625.313a89c6 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705625.313a89c6</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705631.313aab66 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705631.313aab66</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705636.2a60d48d </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705636.2a60d48d</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705642.2a60f64e </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705642.2a60f64e</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705647.2a611c60 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705647.2a611c60</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705653.2a6142a7 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705653.2a6142a7</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705658.313b5a44 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705658.313b5a44</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705664.313b7ad7 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705664.313b7ad7</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705670.2a61b2b2 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705670.2a61b2b2</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705675.2a61d9d0 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705675.2a61d9d0</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705681.2a620264 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705681.2a620264</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705686.313c0043 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705686.313c0043</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705692.313c1fbb </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705692.313c1fbb</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705698.313c3ee4 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705698.313c3ee4</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705703.313c5e27 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705703.313c5e27</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705709.313c7cc8 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705709.313c7cc8</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705714.2a62ec33 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705714.2a62ec33</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705720.2a631219 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705720.2a631219</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705725.2a6339c9 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705725.2a6339c9</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705731.2a63674f </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705731.2a63674f</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705736.2a639504 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705736.2a639504</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705742.313d3694 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705742.313d3694</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705748.2a63e5e9 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705748.2a63e5e9</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705753.2a6409b2 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705753.2a6409b2</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705759.313d878d </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705759.313d878d</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705764.313da7a6 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705764.313da7a6</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705770.313dc29f </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705770.313dc29f</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705775.2a6488bf </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705775.2a6488bf</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705781.2a64a7d5 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705781.2a64a7d5</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705787.2a64c720 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705787.2a64c720</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705792.2a64e2b5 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705792.2a64e2b5</p>`
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
- HTML: `<p> Reference #18.47b03b17.1773705798.313e3b75 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.47b03b17.1773705798.313e3b75</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705803.2a651a6f </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705803.2a651a6f</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705809.2a6532d7 </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705809.2a6532d7</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705814.2a65508f </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705814.2a65508f</p>`
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
- HTML: `<p> Reference #18.50b03b17.1773705820.2a6573fa </p>`
- XPath: `p:nth-child(2)`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<p>https://errors.edgesuite.net/18.50b03b17.1773705820.2a6573fa</p>`
- XPath: `p:nth-child(3)`

