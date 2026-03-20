# Scan Report: energy.gov/

- Issue: https://github.com/mgifford/open-scans/issues/204
- Submitted by: mgifford
- Scanned at: 2026-03-20T16:05:54.212Z
- Engines used: ACCESSLINT, AXE
- Scan duration: 2.2 minutes
- Total URLs submitted: 69
- Accepted public URLs: 69
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 14 of 69 URLs (20%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 13 of 69 URLs (19%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 12399 passed, 15 failed, 133 cantTell, 634 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 1174 passed, 114 failed (114 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 0

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.energy.gov/oe/funding-opportunities-and-requests-information) | 0 | 42 | **42** | Funding Opportunities and Requests for Information \| Department of Energy |
| [View Page](https://www.energy.gov/budget-performance) | 2 | 11 | **13** | Budget &amp; Performance \| Department of Energy |
| [View Page](https://genesis.energy.gov/) | 7 | 6 | **13** | Genesis Mission |
| [View Page](https://www.energy.gov/) | 5 | 6 | **11** | Department of Energy |
| [View Page](https://www.energy.gov/save) | 0 | 11 | **11** | Energy Savings Hub \| Department of Energy |
| [View Page](https://www.energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng) | 1 | 5 | **6** | Energy Department Approves Export Expansion at Corpus Christi LNG \| Department of Energy |
| [View Page](https://www.energy.gov/design) | 0 | 5 | **5** | Design \| Department of Energy |
| [View Page](https://www.energy.gov/cio/department-energy-information-quality-guidelines) | 0 | 5 | **5** | Department of Energy Information Quality Guidelines \| Department of Energy |
| [View Page](https://www.energy.gov/science/office-science-funding-opportunities) | 0 | 5 | **5** | Office of Science Funding Opportunities \| Department of Energy |
| [View Page](https://www.energy.gov/topics/energy-security) | 0 | 5 | **5** | Energy Security \| Department of Energy |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| heading-order | **2** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| aria-allowed-role | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| landmark-one-main | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-one-main) |
| landmark-unique | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| nested-interactive | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/nested-interactive) |
| region | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://energy.gov/ | https://www.energy.gov/ | OK | 200 | yes | 10320 | 5 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, landmarks/region |
| https://energy.gov/cio/accessibility-standard-statement | https://energy.gov/cio/accessibility-standard-statement | FAIL | - | no | 255 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/gdo/funding-opportunities-and-requests-information | https://www.energy.gov/oe/funding-opportunities-and-requests-information | OK | 200 | yes | 8468 | 0 | 0 | 0 | 42 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/region |
| https://energy.gov/apprenticeships-workforce-development | https://energy.gov/apprenticeships-workforce-development | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/budget-performance | https://www.energy.gov/budget-performance | OK | 200 | yes | 7925 | 2 | 0 | 0 | 11 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/region, navigable/heading-order |
| https://energy.gov/commercialization | https://energy.gov/commercialization | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/contact-us | https://energy.gov/contact-us | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/design | https://www.energy.gov/design | OK | 200 | yes | 7155 | 0 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/digital-engagement-and-media | https://energy.gov/digital-engagement-and-media | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/EDF | https://energy.gov/EDF | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/funding-opportunities | https://energy.gov/funding-opportunities | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/genesis | https://genesis.energy.gov/ | OK | 200 | yes | 13153 | 7 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, landmark-unique, nested-interactive, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, aria/presentational-children-focusable, landmarks/landmark-main, landmarks/region, time-based-media/video-captions |
| https://energy.gov/internships-fellowships | https://energy.gov/internships-fellowships | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/mission | https://energy.gov/mission | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/newsroom | https://energy.gov/newsroom | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/notice-court-orders | https://www.energy.gov/notice-court-orders | OK | 200 | yes | 7220 | 0 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/open-government | https://energy.gov/open-government | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/our-leadership-offices | https://energy.gov/our-leadership-offices | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/power-marketing-administrations | https://energy.gov/power-marketing-administrations | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/save | https://www.energy.gov/save | OK | 200 | yes | 7319 | 0 | 0 | 0 | 11 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/image-alt-words |
| https://energy.gov/state-american-energy-promises-made-promises-kept | https://energy.gov/state-american-energy-promises-made-promises-kept | FAIL | - | no | 301 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics | https://energy.gov/topics | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/us-department-energy-national-laboratories | https://energy.gov/us-department-energy-national-laboratories | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/us-energy-information-administration-eia | https://energy.gov/us-energy-information-administration-eia | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/web-policies | https://www.energy.gov/web-policies | OK | 200 | yes | 7831 | 0 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/whistleblower-protection-and-nondisclosure-agreements | https://energy.gov/whistleblower-protection-and-nondisclosure-agreements | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/work-us-department-energy | https://energy.gov/work-us-department-energy | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/energy-department-announces-1715-million-expand-us-geothermal-energy | https://energy.gov/articles/energy-department-announces-1715-million-expand-us-geothermal-energy | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/energy-department-announces-largest-loan-department-history-delivering-over-7-billion | https://energy.gov/articles/energy-department-announces-largest-loan-department-history-delivering-over-7-billion | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng | https://www.energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng | OK | 200 | yes | 7326 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/region, navigable/heading-order |
| https://energy.gov/articles/fact-sheet-energy-department-lowering-electricity-costs-georgia-and-alabama | https://energy.gov/articles/fact-sheet-energy-department-lowering-electricity-costs-georgia-and-alabama | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/fact-sheet-president-trump-restoring-prosperity-safety-and-security-united-states-and | https://energy.gov/articles/fact-sheet-president-trump-restoring-prosperity-safety-and-security-united-states-and | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/us-department-energy-reverses-biden-lng-pause-restores-trump-energy-dominance-agenda | https://energy.gov/articles/us-department-energy-reverses-biden-lng-pause-restores-trump-energy-dominance-agenda | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/ceser/does-use-federal-power-act-emergency-authority | https://energy.gov/ceser/does-use-federal-power-act-emergency-authority | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/ceser/emergency-response-hub-0 | https://energy.gov/ceser/emergency-response-hub-0 | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/cio/department-energy-information-quality-guidelines | https://www.energy.gov/cio/department-energy-information-quality-guidelines | OK | 200 | yes | 7301 | 0 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/region |
| https://energy.gov/cio/privacy-program | https://energy.gov/cio/privacy-program | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/energysaver/energy-saver | https://energy.gov/energysaver/energy-saver | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/femp/federal-energy-management-program-funding-opportunities | https://energy.gov/femp/federal-energy-management-program-funding-opportunities | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/gc/freedom-information-act | https://energy.gov/gc/freedom-information-act | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/hgeo/hgeo-solicitations-and-business-opportunities | https://energy.gov/hgeo/hgeo-solicitations-and-business-opportunities | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/ig/office-inspector-general | https://www.energy.gov/ig/office-inspector-general | OK | 200 | yes | 7461 | 0 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/indianenergy/current-funding-and-technical-assistance-opportunities | https://energy.gov/indianenergy/current-funding-and-technical-assistance-opportunities | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/lm/history | https://energy.gov/lm/history | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/mesc/funding | https://energy.gov/mesc/funding | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/nnsa/national-nuclear-security-administration | https://energy.gov/nnsa/national-nuclear-security-administration | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/OMEI/office-civil-rights-and-equal-employment-opportunity | https://energy.gov/OMEI/office-civil-rights-and-equal-employment-opportunity | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/science/department-energy-nobel-laureates | https://energy.gov/science/department-energy-nobel-laureates | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/science/office-science-funding-opportunities | https://www.energy.gov/science/office-science-funding-opportunities | OK | 200 | yes | 7301 | 0 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/topics/2025-doe-403-orders | https://energy.gov/topics/2025-doe-403-orders | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments | https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/american-manufacturing | https://energy.gov/topics/american-manufacturing | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/artificial-intelligence | https://energy.gov/topics/artificial-intelligence | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/cybersecurity | https://energy.gov/topics/cybersecurity | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/earth-systems-modeling | https://energy.gov/topics/earth-systems-modeling | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/energy-security | https://www.energy.gov/topics/energy-security | OK | 200 | yes | 7482 | 0 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/topics/energy-workforce | https://energy.gov/topics/energy-workforce | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/environmental-and-legacy-management | https://energy.gov/topics/environmental-and-legacy-management | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/about-us/web-policies/privacy | https://energy.gov/about-us/web-policies/privacy | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/cio/articles/vulnerability-disclosure-policy | https://energy.gov/cio/articles/vulnerability-disclosure-policy | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/eere/funding/eere-funding-opportunities | https://energy.gov/eere/funding/eere-funding-opportunities | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/scep/wap/weatherization-assistance-program | https://energy.gov/scep/wap/weatherization-assistance-program | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/national-science-bowl | https://energy.gov/topics/national-science-bowl | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/grid-deployment-and-transmission | https://www.energy.gov/topics/grid-deployment-and-transmission | OK | 200 | yes | 9583 | 0 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/topics/puerto-rico-grid-resilience-and-modernization | https://energy.gov/topics/puerto-rico-grid-resilience-and-modernization | FAIL | - | no | 310 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/tribal-energy-access | https://energy.gov/topics/tribal-energy-access | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/research-technology-and-economic-security | https://energy.gov/topics/research-technology-and-economic-security | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/extreme-weather-resiliency | https://energy.gov/topics/extreme-weather-resiliency | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/nuclear-security | https://energy.gov/topics/nuclear-security | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://energy.gov/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="field__item splide__slide is-active is-visible" id="main-carousel-slide01" role="group" aria-roledescription="slide" aria-label="1 of 4" style="width: calc(100%);">`
- XPath: `#main-carousel-slide01`

**Failure 2:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-active is-visible" id="thumbnail-carousel-slide01" role="button" aria-label="Go to slide 1" aria-current="true" tabindex="0" aria-controls="main-carousel-slide01">`
- XPath: `#thumbnail-carousel-slide01`

**Failure 3:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible is-next" id="thumbnail-carousel-slide02" role="button" aria-label="Go to slide 2" tabindex="0" aria-controls="main-carousel-slide02">`
- XPath: `#thumbnail-carousel-slide02`

**Failure 4:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible" id="thumbnail-carousel-slide03" role="button" aria-label="Go to slide 3" tabindex="0" aria-controls="main-carousel-slide03">`
- XPath: `#thumbnail-carousel-slide03`

**Failure 5:**
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible" id="thumbnail-carousel-slide04" role="button" aria-label="Go to slide 4" tabindex="0" aria-controls="main-carousel-slide04">`
- XPath: `#thumbnail-carousel-slide04`

### https://energy.gov/budget-performance

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3><a href="/cfo/listings/budget-justification-supporting-documents" data-once="links">More Budget Requests</a></h3>`
- XPath: `.layout-breakout.layout-float.layout-right > .field--text_default.field--body.field--name-body > h3`

**Failure 2:**
- Message: Heading levels should only increase by one
- HTML: `<h4><a aria-label="Read more about More Annual Performance Reports" href="/cfo/listings/annual-performance-reports" title="Read more about More Annual Performance Reports" data-once="links">More Annual Performance Reports</a></h4>`
- XPath: `h4`

### https://energy.gov/genesis

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html lang="en" class="bg-main-dark" style="color-scheme:dark">`
- XPath: `html`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div id="faq-answer-0" class="overflow-hidden" role="region" aria-labelledby="faq-question-0" style="height:0px;opacity:0">`
- XPath: `#faq-answer-0`

#### Rule: [nested-interactive](https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- Message: Interactive controls must not be nested
- HTML: `<div class="absolute inset-0 z-40 flex cursor-pointer items-center justify-center" role="button" tabindex="0" aria-label="Play Genesis Mission announcement video">`
- XPath: `.z-40`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="hidden md:absolute md:left-6 md:flex md:items-center">`
- XPath: `.md\:left-6`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="hidden md:flex md:items-center md:gap-4" data-name="wrapper">`
- XPath: `.md\:gap-4`

**Failure 3:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="hidden md:absolute md:right-6 md:flex md:items-center"><p class="font-mono text-[12px] leading-4 font-normal tracking-[0.72px] text-neutral-50 uppercase whitespace-pre">16:04:27 UTC</p></div>`
- XPath: `.md\:right-6`

**Failure 4:**
- Message: All page content should be contained by landmarks
- HTML: `<section class="relative" aria-labelledby="section-security">`
- XPath: `section[aria-labelledby="section-security"]`

### https://energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>Media Inquiries:</h3>`
- XPath: `.group-section__item--start > h3`

