# Scan Report: EC

- Issue: https://github.com/mgifford/open-scans/issues/222
- Submitted by: mgifford
- Scanned at: 2026-03-25T20:42:57.526Z
- Engines used: AXE, ACCESSLINT
- Scan duration: 3.7 minutes
- Total URLs submitted: 20
- Accepted public URLs: 20
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 18765 passed, 76 failed, 139 cantTell, 856 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 1757 passed, 83 failed (83 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 0

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://commission.europa.eu/strategy-and-policy/eu-budget/performance-and-reporting/programme-performance-statements/asylum-migration-and-integration-fund-performance_en) | 9 | 13 | **22** | Asylum, Migration and Integration Fund - Performance - European Commission |
| [View Page](https://commission.europa.eu/select-language?destination=/node/1) | 6 | 7 | **13** | Language selection \| European Commission |
| [View Page](https://reforms-investments.ec.europa.eu/projects/cinavlab-project_en) | 7 | 6 | **13** | CINAVLAB project - Reforms and Investments - European Commission |
| [View Page](https://commission.europa.eu/ec-events/eu-green-week-2022-2022-05-30_en) | 5 | 3 | **8** | EU Green Week 2022 - European Commission |
| [View Page](https://reforms-investments.ec.europa.eu/projects/establishment-cultural-facility-baix-emporda-based-energy-savings_en) | 3 | 5 | **8** | Establishment of a cultural facility in Baix Empordà based on energy savings. - Reforms and Investments |
| [View Page](https://reforms-investments.ec.europa.eu/projects/construction-kindergarten-marina-di-ragusa-ragusa-sicily-2_en) | 3 | 5 | **8** | Construction of a kindergarten in Marina di Ragusa, Ragusa, Sicily - Reforms and Investments |
| [View Page](https://commission.europa.eu/news-and-media/news/26-european-islands-launch-clean-energy-transition-2019-02-18_en) | 3 | 5 | **8** | 26 European islands launch clean energy transition - European Commission |
| [View Page](https://commission.europa.eu/calls-tender-european-commission/prestation-de-services-dans-le-domaine-de-la-medecine-generale-pour-le-service-medical-de-la-0_en) | 4 | 3 | **7** | Prestation de services dans le domaine de la médecine générale pour le service médical de la Commission européenne à Bruxelles - 2 - HR/D3/PN-2018-007 - European Commission |
| [View Page](https://commission.europa.eu/ec-events/citizens-dialogue-krosno-witold-naturski-deputy-head-european-commissions-representation-poland-2019-04-15_en) | 4 | 3 | **7** | Citizens&#039; Dialogue in Krosno with Witold Naturski, Deputy Head of the European Commission&#039;s Representation in Poland - European Commission |
| [View Page](https://commission.europa.eu/ec-events/eubeachcleanup-turkey-2019-10-07_en) | 4 | 3 | **7** | #EUBeachCleanUp in Turkey - European Commission |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| region | **20** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| link-name | **2** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| heading-order | **2** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| landmark-unique | **2** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| empty-table-header | **1** of 20 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-table-header) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<span class="wt-globan--text-long">An official website of the European Union</span>
```

**XPath** (use in browser DevTools):
```
.wt-globan--text-long
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.wt-globan--text-long')`
5. The element will be highlighted

**Affected Pages**:
- https://commission.europa.eu
- https://commission.europa.eu/publications/2025-annual-progress-report-simplification-implementation-and-enforcement-commissioner-wopke_en
- https://commission.europa.eu/dmt-nodes-issues-placeholder/mobility-and-transport_en
- https://commission.europa.eu/sonia-martins_en
- https://commission.europa.eu/publications/annual-activity-report-2013-justice_en
- *...and 15 more page(s)*

---

#### Pattern 2: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">Conferences and summits</li></ul>
```

**XPath** (use in browser DevTools):
```
.ecl-page-header__meta
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.ecl-page-header__meta')`
5. The element will be highlighted

**Affected Pages**:
- https://commission.europa.eu/ec-events/eu-green-week-2022-2022-05-30_en
- https://commission.europa.eu/ec-events/citizens-dialogue-krosno-witold-naturski-deputy-head-european-commissions-representation-poland-2019-04-15_en
- https://commission.europa.eu/ec-events/eubeachcleanup-turkey-2019-10-07_en

---

#### Pattern 3: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">Project</li></ul>
```

**XPath** (use in browser DevTools):
```
.ecl-page-header__meta
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.ecl-page-header__meta')`
5. The element will be highlighted

**Affected Pages**:
- https://commission.europa.eu/projects/establishment-cultural-facility-baix-emporda-based-energy-savings_en
- https://commission.europa.eu/projects/construction-kindergarten-marina-di-ragusa-ragusa-sicily-2_en
- https://commission.europa.eu/projects/cinavlab-project_en

---

#### Pattern 4: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">General publications</li></ul>
```

**XPath** (use in browser DevTools):
```
.ecl-page-header__meta
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.ecl-page-header__meta')`
5. The element will be highlighted

**Affected Pages**:
- https://commission.europa.eu/publications/2025-annual-progress-report-simplification-implementation-and-enforcement-commissioner-wopke_en
- https://commission.europa.eu/publications/own-resources-legal-texts_en

---

#### Pattern 5: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h1 class="ecl-page-header__title">Access denied</h1>
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
- https://commission.europa.eu/dmt-nodes-issues-placeholder/mobility-and-transport_en
- https://commission.europa.eu/about/departments-and-executive-agencies/internal-audit-service/internal-audit-service-ias-history/twenty-years-internal-audit-service-ias_en

---

#### Pattern 6: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div id="ec-survey-pop-up-container-wrapper" class=" ecsi-container-wrapper ecsi_visible" style="display: block; height: 321px; top: 199.5px;">
```

**XPath** (use in browser DevTools):
```
#ec-survey-pop-up-container-wrapper
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#ec-survey-pop-up-container-wrapper')`
5. The element will be highlighted

**Affected Pages**:
- https://commission.europa.eu/ec-events/eu-green-week-2022-2022-05-30_en
- https://commission.europa.eu/law/tracking-law-making_en

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://commission.europa.eu | https://commission.europa.eu/select-language?destination=/node/1 | OK | 200 | yes | 12000 | 6 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: link-name, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region, navigable/link-name |
| https://commission.europa.eu/publications/2025-annual-progress-report-simplification-implementation-and-enforcement-commissioner-wopke_en | https://commission.europa.eu/publications/2025-annual-progress-report-simplification-implementation-and-enforcement-commissioner-wopke_en | OK | 200 | no | 10572 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/dmt-nodes-issues-placeholder/mobility-and-transport_en | https://commission.europa.eu/dmt-nodes-issues-placeholder/mobility-and-transport_en | FAIL | 403 | no | 10771 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/sonia-martins_en | https://commission.europa.eu/sonia-martins_en | OK | 200 | no | 11737 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/publications/annual-activity-report-2013-justice_en | https://commission.europa.eu/publications/annual-activity-report-2013-justice_en | OK | 200 | no | 10735 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/publications/eu-competition-law_en | https://commission.europa.eu/publications/eu-competition-law_en | OK | 200 | no | 10467 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/ec-events/eu-green-week-2022-2022-05-30_en | https://commission.europa.eu/ec-events/eu-green-week-2022-2022-05-30_en | OK | 200 | no | 10823 | 5 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/publications/own-resources-legal-texts_en | https://commission.europa.eu/publications/own-resources-legal-texts_en | OK | 200 | no | 10442 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/publications/legal-articles-about-joining-euro_en | https://commission.europa.eu/publications/legal-articles-about-joining-euro_en | OK | 200 | no | 10687 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/projects/establishment-cultural-facility-baix-emporda-based-energy-savings_en | https://reforms-investments.ec.europa.eu/projects/establishment-cultural-facility-baix-emporda-based-energy-savings_en | OK | 200 | yes | 10320 | 3 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/calls-tender-european-commission/prestation-de-services-dans-le-domaine-de-la-medecine-generale-pour-le-service-medical-de-la-0_en | https://commission.europa.eu/calls-tender-european-commission/prestation-de-services-dans-le-domaine-de-la-medecine-generale-pour-le-service-medical-de-la-0_en | OK | 200 | no | 9939 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/ec-events/citizens-dialogue-krosno-witold-naturski-deputy-head-european-commissions-representation-poland-2019-04-15_en | https://commission.europa.eu/ec-events/citizens-dialogue-krosno-witold-naturski-deputy-head-european-commissions-representation-poland-2019-04-15_en | OK | 200 | no | 10423 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/publications/provisional-agenda-meeting-specialised-committee-implementation-windsor-framework-18-july-2024_en | https://commission.europa.eu/publications/provisional-agenda-meeting-specialised-committee-implementation-windsor-framework-18-july-2024_en | OK | 200 | no | 10295 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/ec-events/eubeachcleanup-turkey-2019-10-07_en | https://commission.europa.eu/ec-events/eubeachcleanup-turkey-2019-10-07_en | OK | 200 | no | 11649 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/law/tracking-law-making_en | https://commission.europa.eu/law/tracking-law-making_en | OK | 200 | no | 10298 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/projects/construction-kindergarten-marina-di-ragusa-ragusa-sicily-2_en | https://reforms-investments.ec.europa.eu/projects/construction-kindergarten-marina-di-ragusa-ragusa-sicily-2_en | OK | 200 | yes | 10627 | 3 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/strategy-and-policy/eu-budget/performance-and-reporting/programme-performance-statements/asylum-migration-and-integration-fund-performance_en | https://commission.europa.eu/strategy-and-policy/eu-budget/performance-and-reporting/programme-performance-statements/asylum-migration-and-integration-fund-performance_en | OK | 200 | no | 15278 | 9 | 0 | 0 | 13 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: empty-table-header, heading-order, landmark-unique, link-name, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/empty-table-header, adaptable/th-has-data-cells, keyboard-accessible/focus-visible, landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region, navigable/heading-order, navigable/link-name |
| https://commission.europa.eu/projects/cinavlab-project_en | https://reforms-investments.ec.europa.eu/projects/cinavlab-project_en | OK | 200 | yes | 11651 | 7 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region, navigable/heading-order |
| https://commission.europa.eu/news-and-media/news/26-european-islands-launch-clean-energy-transition-2019-02-18_en | https://commission.europa.eu/news-and-media/news/26-european-islands-launch-clean-energy-transition-2019-02-18_en | OK | 200 | no | 10435 | 3 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |
| https://commission.europa.eu/about/departments-and-executive-agencies/internal-audit-service/internal-audit-service-ias-history/twenty-years-internal-audit-service-ias_en | https://commission.europa.eu/about/departments-and-executive-agencies/internal-audit-service/internal-audit-service-ias-history/twenty-years-internal-audit-service-ias_en | FAIL | 403 | no | 11088 | 2 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-unique, landmarks/no-duplicate-banner, landmarks/region |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://commission.europa.eu

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/EuropeanCommission" class="ecl-link ecl-link--standalone ecl-link--icon ecl-social-media-follow__link ecl-link--icon-only">`
- XPath: `.ecl-social-media-follow--horizontal > .ecl-social-media-follow__list > .ecl-social-media-follow__item:nth-child(1) > .ecl-social-media-follow__link.ecl-link--icon-only.ecl-link--icon`

**Failure 2:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a href="https://x.com/eu_commission" class="ecl-link ecl-link--standalone ecl-link--icon ecl-social-media-follow__link ecl-link--icon-only">`
- XPath: `a[href$="eu_commission"]`

**Failure 3:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/european-commission" class="ecl-link ecl-link--standalone ecl-link--icon ecl-social-media-follow__link ecl-link--icon-only">`
- XPath: `.ecl-social-media-follow--horizontal > .ecl-social-media-follow__list > .ecl-social-media-follow__item:nth-child(3) > .ecl-social-media-follow__link.ecl-link--icon-only.ecl-link--icon`

**Failure 4:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a href="https://european-union.europa.eu/contact-eu/social-media-channels_en" class="ecl-link ecl-link--standalone ecl-link--icon ecl-social-media-follow__link ecl-link--icon-only">`
- XPath: `.ecl-social-media-follow--horizontal > .ecl-social-media-follow__list > .ecl-social-media-follow__item:nth-child(4) > .ecl-social-media-follow__link.ecl-link--icon-only.ecl-link--icon`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<div class="featured-page-header" id="block-ewcms-theme-page-header">`
- XPath: `#block-ewcms-theme-page-header`

### https://commission.europa.eu/publications/2025-annual-progress-report-simplification-implementation-and-enforcement-commissioner-wopke_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>2025 Annual Progress Report on Simplification, Implementation and Enforcement of Commissioner Wopke Hoekstra</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">General publications</li></ul>`
- XPath: `.ecl-page-header__meta`

### https://commission.europa.eu/dmt-nodes-issues-placeholder/mobility-and-transport_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title">Access denied</h1>`
- XPath: `h1`

### https://commission.europa.eu/sonia-martins_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>Sónia Martins</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">Specialist in Prevention and Awareness EC3 Europol</li></ul>`
- XPath: `.ecl-page-header__meta`

### https://commission.europa.eu/publications/annual-activity-report-2013-justice_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>Annual activity report 2013 - Justice</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">Annual activity report</li></ul>`
- XPath: `.ecl-page-header__meta`

### https://commission.europa.eu/publications/eu-competition-law_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>EU Competition law</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">Notice to stakeholders</li></ul>`
- XPath: `.ecl-page-header__meta`

### https://commission.europa.eu/ec-events/eu-green-week-2022-2022-05-30_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>EU Green Week 2022</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<div class="ecl-page-header__description-top"><div class="ecl-page-header__description-container"><p class="ecl-page-header__description">This year's edition focuses on the European Green Deal! </p></div></div>`
- XPath: `.ecl-page-header__description-top`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">Conferences and summits</li></ul>`
- XPath: `.ecl-page-header__meta`

**Failure 5:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<div id="ec-survey-pop-up-container-wrapper" class=" ecsi-container-wrapper ecsi_visible" style="display: block; height: 321px; top: 199.5px;">`
- XPath: `#ec-survey-pop-up-container-wrapper`

### https://commission.europa.eu/publications/own-resources-legal-texts_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>Own resources legal texts</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">General publications</li></ul>`
- XPath: `.ecl-page-header__meta`

### https://commission.europa.eu/publications/legal-articles-about-joining-euro_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>Legal articles about joining the euro</span></h1>`
- XPath: `h1`

### https://commission.europa.eu/projects/establishment-cultural-facility-baix-emporda-based-energy-savings_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>Establishment of a cultural facility in Baix Empordà based on energy savings.</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">Project</li></ul>`
- XPath: `.ecl-page-header__meta`

### https://commission.europa.eu/calls-tender-european-commission/prestation-de-services-dans-le-domaine-de-la-medecine-generale-pour-le-service-medical-de-la-0_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>Prestation de services dans le domaine de la médecine générale pour le service médical de la Commission européenne à Bruxelles - 2 - HR/D3/PN-2018-007</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<div class="ecl-page-header__description-top">`
- XPath: `.ecl-page-header__description-top`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">Call for tenders</li><li class="ecl-page-header__meta-item">Closed</li></ul>`
- XPath: `.ecl-page-header__meta`

### https://commission.europa.eu/ec-events/citizens-dialogue-krosno-witold-naturski-deputy-head-european-commissions-representation-poland-2019-04-15_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>Citizens' Dialogue in Krosno with Witold Naturski, Deputy Head of the European Commission's Representation in Poland</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<div class="ecl-page-header__description-top"><div class="ecl-page-header__description-container"><p class="ecl-page-header__description">Citizens' Dialogue in Krosno with Witold Naturski, Deputy Head of the European Commission's Representation in Poland </p></div></div>`
- XPath: `.ecl-page-header__description-top`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">Conferences and summits</li></ul>`
- XPath: `.ecl-page-header__meta`

### https://commission.europa.eu/publications/provisional-agenda-meeting-specialised-committee-implementation-windsor-framework-18-july-2024_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>Provisional agenda of the meeting of the Specialised Committee on the implementation of the Windsor Framework on 18 July 2024</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">Agenda</li></ul>`
- XPath: `.ecl-page-header__meta`

### https://commission.europa.eu/ec-events/eubeachcleanup-turkey-2019-10-07_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>#EUBeachCleanUp in Turkey</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<div class="ecl-page-header__description-top"><div class="ecl-page-header__description-container"><p class="ecl-page-header__description">#EUBeachCleanUp in Turkey </p></div></div>`
- XPath: `.ecl-page-header__description-top`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">Conferences and summits</li></ul>`
- XPath: `.ecl-page-header__meta`

### https://commission.europa.eu/law/tracking-law-making_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>Tracking law-making</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<div class="ecl-page-header__description-top"><div class="ecl-page-header__description-container"><p class="ecl-page-header__description">Everyone can track the development of proposed EU laws throughout the law-making process. </p></div></div>`
- XPath: `.ecl-page-header__description-top`

**Failure 4:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<div id="ec-survey-pop-up-container-wrapper" class=" ecsi-container-wrapper ecsi_visible" style="display: block; height: 321px; top: 199.5px;">`
- XPath: `#ec-survey-pop-up-container-wrapper`

### https://commission.europa.eu/projects/construction-kindergarten-marina-di-ragusa-ragusa-sicily-2_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>Construction of a kindergarten in Marina di Ragusa, Ragusa, Sicily</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">Project</li></ul>`
- XPath: `.ecl-page-header__meta`

### https://commission.europa.eu/strategy-and-policy/eu-budget/performance-and-reporting/programme-performance-statements/asylum-migration-and-integration-fund-performance_en

#### Rule: [empty-table-header](https://dequeuniversity.com/rules/axe/4.11/empty-table-header?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-25
- Message: Table header text should not be empty
- HTML: `<th class="ecl-table__cell ecl-table__header" style="vertical-align: bottom;       "><span>&nbsp;</span></th>`
- XPath: `div:nth-child(5) > table > thead > tr > th:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-25
- Message: Table header text should not be empty
- HTML: `<th class="ecl-table__cell ecl-table__header" style="vertical-align: bottom;       "><span>&nbsp;</span></th>`
- XPath: `div:nth-child(6) > table > thead > tr > th:nth-child(1)`

**Failure 3:**
- First identified: 2026-03-25
- Message: Table header text should not be empty
- HTML: `<th class="ecl-table__cell ecl-table__header" style="vertical-align: center;       "><span>&nbsp;</span></th>`
- XPath: `div:nth-child(7) > table > thead > tr > th:nth-child(1)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Heading levels should only increase by one
- HTML: `<h6>Chart</h6>`
- XPath: `#highcharts-screen-reader-region-before-0 > div > h6`

**Failure 2:**
- First identified: 2026-03-25
- Message: Heading levels should only increase by one
- HTML: `<h6 class="wt-noconflict">Chart</h6>`
- XPath: `.wt-noconflict > h6`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div class="wt-charts--container" data-highcharts-chart="0" role="region" aria-label="Chart. Highcharts interactive chart." style="overflow: hidden;">`
- XPath: `div[data-highcharts-chart="0"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-25
- Message: Links must have discernible text
- HTML: `<a href="https://wayback.archive-it.org/12090/20250228100532/https:/commission.europa.eu/strategy-and-policy/eu-budget/performance-and-reporting/programme-performance-statements/asylum-migration-and-integration-fund-performance_en"> </a>`
- XPath: `.ecl-unordered-list__item[data-liststyle="PHPWordList7"][data-numid="7"]:nth-child(1) > a:nth-child(5)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>Asylum, Migration and Integration Fund - Performance</span></h1>`
- XPath: `h1`

### https://commission.europa.eu/projects/cinavlab-project_en

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Heading levels should only increase by one
- HTML: `<h4>Additional media:</h4>`
- XPath: `h4`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<header class="ecl-site-header ecl-site-header-with-logo-l ecl-site-header--has-menu" data-ecl-auto-init="SiteHeader" data-ecl-auto-initialized="true">`
- XPath: `.ecl-site-header`

**Failure 2:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<main class="ecl-u-pb-xl" id="main-content" data-inpage-navigation-source-area="h2.ecl-u-type-heading-2, div.ecl-featured-item__heading">`
- XPath: `#main-content`

**Failure 3:**
- First identified: 2026-03-25
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<footer class="ecl-u-bg-blue-100 ecl-u-pa-l"></footer>`
- XPath: `iframe[title="PRR Marinha COMAR"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>CINAVLAB project</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<ul class="ecl-page-header__meta"><li class="ecl-page-header__meta-item">Project</li></ul>`
- XPath: `.ecl-page-header__meta`

### https://commission.europa.eu/news-and-media/news/26-european-islands-launch-clean-energy-transition-2019-02-18_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title"><span>26 European islands launch clean energy transition</span></h1>`
- XPath: `h1`

**Failure 3:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<ul class="ecl-page-header__meta">`
- XPath: `.ecl-page-header__meta`

### https://commission.europa.eu/about/departments-and-executive-agencies/internal-audit-service/internal-audit-service-ias-history/twenty-years-internal-audit-service-ias_en

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<span class="wt-globan--text-long">An official website of the European Union</span>`
- XPath: `.wt-globan--text-long`

**Failure 2:**
- First identified: 2026-03-25
- Message: All page content should be contained by landmarks
- HTML: `<h1 class="ecl-page-header__title">Access denied</h1>`
- XPath: `h1`

