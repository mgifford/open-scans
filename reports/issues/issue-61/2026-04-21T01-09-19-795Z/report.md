# Scan Report: Energy.gov

- Issue: https://github.com/mgifford/open-scans/issues/61
- Submitted by: mgifford
- Scanned at: 2026-04-21T01:08:19.981Z
- Engines used: AXE, QUALWEB
- Scan duration: 4.5 minutes
- Total URLs submitted: 69
- Accepted public URLs: 69
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 22 of 69 URLs (32%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 22 of 69 URLs (32%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 18263 passed, 47 failed, 178 cantTell, 1379 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 10169 passed, 431 failed, 3280 cantTell, 73 inapplicable
- Duplicate findings caught by later scanners: 370

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.energy.gov/oe/funding-opportunities-and-requests-information) | 0 | 145 | **145** | Funding Opportunities and Requests for Information \| Department of Energy |
| [View Page](https://www.energy.gov/nnsa/national-nuclear-security-administration) | 6 | 25 | **31** | National Nuclear Security Administration \| Department of Energy |
| [View Page](https://www.energy.gov/hgeo/hgeo-solicitations-and-business-opportunities) | 1 | 25 | **26** | HGEO Solicitations and Business Opportunities \| Department of Energy |
| [View Page](https://www.energy.gov/web-policies) | 0 | 25 | **25** | Web Policies \| Department of Energy |
| [View Page](https://www.energy.gov/cmei/femp/federal-energy-management-program-funding-opportunities) | 2 | 22 | **24** | Federal Energy Management Program Funding Opportunities \| Department of Energy |
| [View Page](https://www.energy.gov/undersecretaryforscience/genesis-mission/genesis-mission) | 1 | 14 | **15** | The Genesis Mission \| Department of Energy |
| [View Page](https://www.energy.gov/cio/department-energy-information-quality-guidelines) | 0 | 15 | **15** | Department of Energy Information Quality Guidelines \| Department of Energy |
| [View Page](https://www.energy.gov/work-us-department-energy) | 0 | 14 | **14** | Work at the U.S. Department of Energy \| Department of Energy |
| [View Page](https://www.energy.gov/lm/history) | 1 | 12 | **13** | History \| Department of Energy |
| [View Page](https://www.energy.gov/commercialization) | 0 | 12 | **12** | Commercialization \| Department of Energy |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| heading-order | **8** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| html-has-lang | **5** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/html-has-lang) |
| landmark-one-main | **5** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-one-main) |
| region | **5** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| link-name | **2** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| aria-allowed-role | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| aria-prohibited-attr | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-prohibited-attr) |
| button-name | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 5 page(s) - 5 occurrence(s)

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
- https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments
- https://energy.gov/topics/cybersecurity
- https://energy.gov/topics/energy-workforce
- https://energy.gov/eere/funding/eere-funding-opportunities
- https://energy.gov/topics/puerto-rico-grid-resilience-and-modernization

---

#### Pattern 2: Affects 5 page(s) - 5 occurrence(s)

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
- https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments
- https://energy.gov/topics/cybersecurity
- https://energy.gov/topics/energy-workforce
- https://energy.gov/eere/funding/eere-funding-opportunities
- https://energy.gov/topics/puerto-rico-grid-resilience-and-modernization

---

#### Pattern 3: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h1>403 ERROR</h1>
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
- https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments
- https://energy.gov/topics/cybersecurity
- https://energy.gov/topics/energy-workforce
- https://energy.gov/eere/funding/eere-funding-opportunities
- https://energy.gov/topics/puerto-rico-grid-resilience-and-modernization

---

#### Pattern 4: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<h2>The request could not be satisfied.</h2>
```

**XPath** (use in browser DevTools):
```
h2
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('h2')`
5. The element will be highlighted

**Affected Pages**:
- https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments
- https://energy.gov/topics/cybersecurity
- https://energy.gov/topics/energy-workforce
- https://energy.gov/eere/funding/eere-funding-opportunities
- https://energy.gov/topics/puerto-rico-grid-resilience-and-modernization

---

#### Pattern 5: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h3>Media Inquiries:</h3>
```

**XPath** (use in browser DevTools):
```
.group-section__item--start > h3
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.group-section__item--start > h3')`
5. The element will be highlighted

**Affected Pages**:
- https://energy.gov/articles/energy-department-announces-1715-million-expand-us-geothermal-energy
- https://energy.gov/articles/energy-department-announces-largest-loan-department-history-delivering-over-7-billion
- https://energy.gov/articles/us-department-energy-reverses-biden-lng-pause-restores-trump-energy-dominance-agenda

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://energy.gov/ | https://www.energy.gov/ | OK | 200 | yes | 13113 | 6 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-prohibited-attr, button-name |
| https://energy.gov/cio/accessibility-standard-statement | https://energy.gov/cio/accessibility-standard-statement | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/gdo/funding-opportunities-and-requests-information | https://www.energy.gov/oe/funding-opportunities-and-requests-information | OK | 200 | yes | 11330 | 0 | 0 | 0 | 0 | 142 | Skipped (not requested) |
| https://energy.gov/apprenticeships-workforce-development | https://energy.gov/apprenticeships-workforce-development | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/budget-performance | https://energy.gov/budget-performance | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/commercialization | https://www.energy.gov/commercialization | OK | 200 | yes | 10152 | 0 | 0 | 0 | 0 | 10 | Skipped (not requested) |
| https://energy.gov/contact-us | https://energy.gov/contact-us | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/design | https://www.energy.gov/design | OK | 200 | yes | 9714 | 0 | 0 | 0 | 0 | 10 | Skipped (not requested) |
| https://energy.gov/digital-engagement-and-media | https://energy.gov/digital-engagement-and-media | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/EDF | https://energy.gov/EDF | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/funding-opportunities | https://energy.gov/funding-opportunities | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/genesis | https://www.energy.gov/undersecretaryforscience/genesis-mission/genesis-mission | OK | 200 | yes | 11190 | 1 | 0 | 0 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
| https://energy.gov/internships-fellowships | https://energy.gov/internships-fellowships | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/mission | https://energy.gov/mission | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/newsroom | https://www.energy.gov/newsroom | OK | 200 | yes | 10586 | 0 | 0 | 0 | 0 | 10 | Skipped (not requested) |
| https://energy.gov/notice-court-orders | https://energy.gov/notice-court-orders | FAIL | - | no | 267 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/open-government | https://energy.gov/open-government | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/our-leadership-offices | https://energy.gov/our-leadership-offices | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/power-marketing-administrations | https://www.energy.gov/power-marketing-administrations | OK | 200 | yes | 10279 | 0 | 0 | 0 | 0 | 10 | Skipped (not requested) |
| https://energy.gov/save | https://energy.gov/save | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/state-american-energy-promises-made-promises-kept | https://energy.gov/state-american-energy-promises-made-promises-kept | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics | https://energy.gov/topics | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/us-department-energy-national-laboratories | https://energy.gov/us-department-energy-national-laboratories | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/us-energy-information-administration-eia | https://www.energy.gov/us-energy-information-administration-eia | OK | 200 | yes | 9608 | 0 | 0 | 0 | 0 | 10 | Skipped (not requested) |
| https://energy.gov/web-policies | https://www.energy.gov/web-policies | OK | 200 | yes | 10578 | 0 | 0 | 0 | 0 | 22 | Skipped (not requested) |
| https://energy.gov/whistleblower-protection-and-nondisclosure-agreements | https://www.energy.gov/whistleblower-protection-and-nondisclosure-agreements | OK | 200 | yes | 9462 | 0 | 0 | 0 | 0 | 6 | Skipped (not requested) |
| https://energy.gov/work-us-department-energy | https://www.energy.gov/work-us-department-energy | OK | 200 | yes | 10195 | 0 | 0 | 0 | 0 | 12 | Skipped (not requested) |
| https://energy.gov/articles/energy-department-announces-1715-million-expand-us-geothermal-energy | https://www.energy.gov/articles/energy-department-announces-1715-million-expand-us-geothermal-energy | OK | 200 | yes | 9843 | 1 | 0 | 0 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
| https://energy.gov/articles/energy-department-announces-largest-loan-department-history-delivering-over-7-billion | https://www.energy.gov/articles/energy-department-announces-largest-loan-department-history-delivering-over-7-billion | OK | 200 | yes | 9937 | 1 | 0 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
| https://energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng | https://energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/fact-sheet-energy-department-lowering-electricity-costs-georgia-and-alabama | https://energy.gov/articles/fact-sheet-energy-department-lowering-electricity-costs-georgia-and-alabama | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/fact-sheet-president-trump-restoring-prosperity-safety-and-security-united-states-and | https://www.energy.gov/articles/fact-sheet-president-trump-restoring-prosperity-safety-and-security-united-states-and | OK | 200 | yes | 9860 | 1 | 0 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
| https://energy.gov/articles/us-department-energy-reverses-biden-lng-pause-restores-trump-energy-dominance-agenda | https://www.energy.gov/articles/us-department-energy-reverses-biden-lng-pause-restores-trump-energy-dominance-agenda | OK | 200 | yes | 9880 | 1 | 0 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
| https://energy.gov/ceser/does-use-federal-power-act-emergency-authority | https://energy.gov/ceser/does-use-federal-power-act-emergency-authority | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/ceser/emergency-response-hub-0 | https://energy.gov/ceser/emergency-response-hub-0 | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/cio/department-energy-information-quality-guidelines | https://www.energy.gov/cio/department-energy-information-quality-guidelines | OK | 200 | yes | 9890 | 0 | 0 | 0 | 0 | 12 | Skipped (not requested) |
| https://energy.gov/cio/privacy-program | https://www.energy.gov/cio/privacy-program | OK | 200 | yes | 10222 | 0 | 0 | 0 | 0 | 10 | Skipped (not requested) |
| https://energy.gov/energysaver/energy-saver | https://energy.gov/energysaver/energy-saver | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/femp/federal-energy-management-program-funding-opportunities | https://www.energy.gov/cmei/femp/federal-energy-management-program-funding-opportunities | OK | 200 | yes | 10170 | 2 | 0 | 0 | 0 | 18 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, link-name |
| https://energy.gov/gc/freedom-information-act | https://energy.gov/gc/freedom-information-act | FAIL | - | no | 266 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/hgeo/hgeo-solicitations-and-business-opportunities | https://www.energy.gov/hgeo/hgeo-solicitations-and-business-opportunities | OK | 200 | yes | 10324 | 1 | 0 | 0 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
| https://energy.gov/ig/office-inspector-general | https://energy.gov/ig/office-inspector-general | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/indianenergy/current-funding-and-technical-assistance-opportunities | https://energy.gov/indianenergy/current-funding-and-technical-assistance-opportunities | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/lm/history | https://www.energy.gov/lm/history | OK | 200 | yes | 10953 | 1 | 0 | 0 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
| https://energy.gov/mesc/funding | https://energy.gov/mesc/funding | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/nnsa/national-nuclear-security-administration | https://www.energy.gov/nnsa/national-nuclear-security-administration | OK | 200 | yes | 11885 | 6 | 0 | 0 | 0 | 21 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: link-name |
| https://energy.gov/OMEI/office-civil-rights-and-equal-employment-opportunity | https://energy.gov/OMEI/office-civil-rights-and-equal-employment-opportunity | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/science/department-energy-nobel-laureates | https://energy.gov/science/department-energy-nobel-laureates | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/science/office-science-funding-opportunities | https://www.energy.gov/science/office-science-funding-opportunities | OK | 200 | yes | 10128 | 0 | 0 | 0 | 0 | 10 | Skipped (not requested) |
| https://energy.gov/topics/2025-doe-403-orders | https://energy.gov/topics/2025-doe-403-orders | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments | https://www.energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments | FAIL | 403 | yes | 6095 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://energy.gov/topics/american-manufacturing | https://energy.gov/topics/american-manufacturing | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/artificial-intelligence | https://energy.gov/topics/artificial-intelligence | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/cybersecurity | https://www.energy.gov/topics/cybersecurity | FAIL | 403 | yes | 6166 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://energy.gov/topics/earth-systems-modeling | https://energy.gov/topics/earth-systems-modeling | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/energy-security | https://energy.gov/topics/energy-security | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/energy-workforce | https://www.energy.gov/topics/energy-workforce | FAIL | 403 | yes | 6138 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://energy.gov/topics/environmental-and-legacy-management | https://energy.gov/topics/environmental-and-legacy-management | FAIL | - | no | 289 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/about-us/web-policies/privacy | https://energy.gov/about-us/web-policies/privacy | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/cio/articles/vulnerability-disclosure-policy | https://energy.gov/cio/articles/vulnerability-disclosure-policy | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/eere/funding/eere-funding-opportunities | https://www.energy.gov/eere/funding/eere-funding-opportunities | FAIL | 403 | yes | 6124 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://energy.gov/scep/wap/weatherization-assistance-program | https://energy.gov/scep/wap/weatherization-assistance-program | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/national-science-bowl | https://energy.gov/topics/national-science-bowl | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/grid-deployment-and-transmission | https://energy.gov/topics/grid-deployment-and-transmission | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/puerto-rico-grid-resilience-and-modernization | https://www.energy.gov/topics/puerto-rico-grid-resilience-and-modernization | FAIL | 403 | yes | 6121 | 5 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
| https://energy.gov/topics/tribal-energy-access | https://energy.gov/topics/tribal-energy-access | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/research-technology-and-economic-security | https://energy.gov/topics/research-technology-and-economic-security | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/extreme-weather-resiliency | https://energy.gov/topics/extreme-weather-resiliency | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/nuclear-security | https://energy.gov/topics/nuclear-security | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://energy.gov/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-21
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="field__item splide__slide is-active is-visible" id="main-carousel-slide01" role="group" aria-roledescription="slide" aria-label="1 of 4" style="width: calc(100%);">`
- XPath: `#main-carousel-slide01`

**Failure 2:**
- First identified: 2026-04-21
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-active is-visible" id="thumbnail-carousel-slide01" role="button" aria-label="Go to slide 1" aria-current="true" tabindex="0" aria-controls="main-carousel-slide01">`
- XPath: `#thumbnail-carousel-slide01`

**Failure 3:**
- First identified: 2026-04-21
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible is-next" id="thumbnail-carousel-slide02" role="button" aria-label="Go to slide 2" tabindex="0" aria-controls="main-carousel-slide02">`
- XPath: `#thumbnail-carousel-slide02`

**Failure 4:**
- First identified: 2026-04-21
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible" id="thumbnail-carousel-slide03" role="button" aria-label="Go to slide 3" tabindex="0" aria-controls="main-carousel-slide03">`
- XPath: `#thumbnail-carousel-slide03`

**Failure 5:**
- First identified: 2026-04-21
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible" id="thumbnail-carousel-slide04" role="button" aria-label="Go to slide 4" tabindex="0" aria-controls="main-carousel-slide04">`
- XPath: `#thumbnail-carousel-slide04`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-21
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/d95a0e03/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\33 83566717`

### https://energy.gov/genesis

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: Heading levels should only increase by one
- HTML: `<h3>The Genesis Mission unites DOE National Labs, industry, academia, and more to harness AI for breakthroughs in energy dominance, discovery science, and national security.</h3>`
- XPath: `h3`

### https://energy.gov/articles/energy-department-announces-1715-million-expand-us-geothermal-energy

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: Heading levels should only increase by one
- HTML: `<h3>Media Inquiries:</h3>`
- XPath: `.group-section__item--start > h3`

### https://energy.gov/articles/energy-department-announces-largest-loan-department-history-delivering-over-7-billion

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: Heading levels should only increase by one
- HTML: `<h3>Media Inquiries:</h3>`
- XPath: `.group-section__item--start > h3`

### https://energy.gov/articles/fact-sheet-president-trump-restoring-prosperity-safety-and-security-united-states-and

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: Heading levels should only increase by one
- HTML: `<h3><strong>PRESIDENT TRUMP ANNOUNCES A HISTORIC US-VENEZUELA ENERGY DEAL TO SAFEGUARD AMERICA</strong></h3>`
- XPath: `.field--field_text > h3:nth-child(1)`

### https://energy.gov/articles/us-department-energy-reverses-biden-lng-pause-restores-trump-energy-dominance-agenda

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: Heading levels should only increase by one
- HTML: `<h3>Media Inquiries:</h3>`
- XPath: `.group-section__item--start > h3`

### https://energy.gov/femp/federal-energy-management-program-funding-opportunities

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: Heading levels should only increase by one
- HTML: `<h5>`
- XPath: `.layout--50-50.blade-section--white.blade-section--boxed:nth-child(2) > .grid-container > .blade-color > .grid-row > .tablet-lg\:grid-col-6:nth-child(1) > .block-inline-blockbasic.block-layout-builder.block > .field--body.field--name-body.field--type-text-with-summary > h5`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-21
- Message: Links must have discernible text
- HTML: `<a href="/cmei/femp/federal-energy-management-program-legacy" data-entity-type="node" data-entity-uuid="d5b7971e-461c-4dd6-a523-f44e158d469a" data-entity-substitution="canonical" data-once="links"> </a>`
- XPath: `.field--field_text > p:nth-child(1) > a[data-entity-type="node"][data-entity-substitution="canonical"][data-once="links"]:nth-child(1)`

### https://energy.gov/hgeo/hgeo-solicitations-and-business-opportunities

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: Heading levels should only increase by one
- HTML: `<h3><strong>HGEO Funding</strong></h3>`
- XPath: `h3`

### https://energy.gov/lm/history

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: Heading levels should only increase by one
- HTML: `<h5><a href="/management/articles/gosling-manhattan-project-making-atomic-bomb" data-once="links">The Manhattan Project: Making the Atomic Bomb&nbsp;</a></h5>`
- XPath: `#energy-accordion--2-1 > .paragraph--type--text-field.paragraph.paragraph--view-mode--default > .paragraph__column > .field--field_text.field--name-field-text.field--type-text-long > h5:nth-child(1)`

### https://energy.gov/nnsa/national-nuclear-security-administration

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-21
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/NNSANews/" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `div:nth-child(1) > .paragraph--type--button.paragraph.paragraph--view-mode--default > .field--link.field--field_button_link.field--name-field-button-link > .usa-button--blue[aria-label=" "][data-extlink=""]`

**Failure 2:**
- First identified: 2026-04-21
- Message: Links must have discernible text
- HTML: `<a href="https://www.instagram.com/nnsanews/" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `div:nth-child(2) > .paragraph--type--button.paragraph.paragraph--view-mode--default > .field--link.field--field_button_link.field--name-field-button-link > .usa-button--blue[aria-label=" "][data-extlink=""]`

**Failure 3:**
- First identified: 2026-04-21
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/national-nuclear-security-administration/posts/?feedView=articles" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `div:nth-child(3) > .paragraph--type--button.paragraph.paragraph--view-mode--default > .field--link.field--field_button_link.field--name-field-button-link > .usa-button--blue[aria-label=" "][data-extlink=""]`

**Failure 4:**
- First identified: 2026-04-21
- Message: Links must have discernible text
- HTML: `<a href="https://www.youtube.com/nnsanews" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `div:nth-child(4) > .paragraph--type--button.paragraph.paragraph--view-mode--default > .field--link.field--field_button_link.field--name-field-button-link > .usa-button--blue[aria-label=" "][data-extlink=""]`

**Failure 5:**
- First identified: 2026-04-21
- Message: Links must have discernible text
- HTML: `<a href="https://www.x.com/NNSANews" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `a[href$="NNSANews"]`

*... and 1 more failures for this rule*

### https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-21
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<h1>403 ERROR</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<h2>The request could not be satisfied.</h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<pre>Generated by cloudfront (CloudFront) Request ID: WU05Yd9uteoZ7bRK9Vz8CSl2Atr9FSSRBN-JlvZYXYE46bSE69sSeg== </pre>`
- XPath: `pre`

### https://energy.gov/topics/cybersecurity

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-21
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<h1>403 ERROR</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<h2>The request could not be satisfied.</h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<pre>Generated by cloudfront (CloudFront) Request ID: YmJta_Hr5fIpfYxM_IGiSGOXPOpYoQlgcbN-a92aCKC-r2rJ6s5Xow== </pre>`
- XPath: `pre`

### https://energy.gov/topics/energy-workforce

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-21
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<h1>403 ERROR</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<h2>The request could not be satisfied.</h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<pre>Generated by cloudfront (CloudFront) Request ID: qIz9nH91Bl0DKV2Yc_gXGdoe4oEHsRTmc4U4lCbg5EIYzgK0WUd2nw== </pre>`
- XPath: `pre`

### https://energy.gov/eere/funding/eere-funding-opportunities

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-21
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<h1>403 ERROR</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<h2>The request could not be satisfied.</h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<pre>Generated by cloudfront (CloudFront) Request ID: rrTTCHhKECwkCc6EsZ8SVuducsXPvE5akGoxZcCANS0zh6Fa7VuDCQ== </pre>`
- XPath: `pre`

### https://energy.gov/topics/puerto-rico-grid-resilience-and-modernization

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-21
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<h1>403 ERROR</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<h2>The request could not be satisfied.</h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-04-21
- Message: All page content should be contained by landmarks
- HTML: `<pre>Generated by cloudfront (CloudFront) Request ID: R21-PDP9Ie4Yi6o0Kcuzb_8qqmyXmiKIlghJXQ8qxZeKYsTwGu2lYQ== </pre>`
- XPath: `pre`

