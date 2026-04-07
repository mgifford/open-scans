# Scan Report: energy.gov/

- Issue: https://github.com/mgifford/open-scans/issues/204
- Submitted by: mgifford
- Scanned at: 2026-04-07T22:16:58.266Z
- Engines used: ACCESSLINT, AXE
- Scan duration: 5.9 minutes
- Total URLs submitted: 69
- Accepted public URLs: 69
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 31 of 69 URLs (45%) support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 30 of 69 URLs (43%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 30844 passed, 99 failed, 391 cantTell, 1526 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 2787 passed, 249 failed (249 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 51

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.energy.gov/oe/funding-opportunities-and-requests-information) | 0 | 38 | **38** | Funding Opportunities and Requests for Information \| Department of Energy |
| [View Page](https://www.energy.gov/lm/history) | 1 | 23 | **24** | History \| Department of Energy |
| [View Page](https://www.energy.gov/internships-fellowships) | 0 | 18 | **18** | Internships &amp; Fellowships \| Department of Energy |
| [View Page](https://www.energy.gov/nnsa/national-nuclear-security-administration) | 6 | 12 | **18** | National Nuclear Security Administration \| Department of Energy |
| [View Page](https://www.energy.gov/budget-performance) | 2 | 12 | **14** | Budget &amp; Performance \| Department of Energy |
| [View Page](https://genesis.energy.gov/) | 7 | 6 | **13** | Genesis Mission |
| [View Page](https://www.energy.gov/) | 6 | 6 | **12** | Department of Energy |
| [View Page](https://www.energy.gov/cmei/femp/federal-energy-management-program-funding-opportunities) | 2 | 9 | **11** | Federal Energy Management Program Funding Opportunities \| Department of Energy |
| [View Page](https://www.energy.gov/topics/tribal-energy-access) | 5 | 5 | **10** | ERROR: The request could not be satisfied |
| [View Page](https://www.energy.gov/topics/research-technology-and-economic-security) | 5 | 5 | **10** | ERROR: The request could not be satisfied |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| aria-prohibited-attr | **7** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-prohibited-attr) |
| button-name | **7** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |
| heading-order | **7** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| landmark-one-main | **3** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-one-main) |
| region | **3** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| link-name | **2** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |
| html-has-lang | **2** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/html-has-lang) |
| aria-allowed-role | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| landmark-unique | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| nested-interactive | **1** of 69 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/nested-interactive) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 7 page(s) - 9 occurrence(s)

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
#\38 56600975
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#\38 56600975')`
5. The element will be highlighted

**Affected Pages**:
- https://energy.gov/
- https://energy.gov/state-american-energy-promises-made-promises-kept
- https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments
- https://energy.gov/topics/american-manufacturing
- https://energy.gov/topics/earth-systems-modeling
- *...and 2 more page(s)*

---

#### Pattern 2: Affects 5 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**Issue**: Elements must only use permitted ARIA attributes

**HTML Pattern**:
```html
<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/57fefa84/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">
```

**XPath** (use in browser DevTools):
```
#\38 56600975
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#\38 56600975')`
5. The element will be highlighted

**Affected Pages**:
- https://energy.gov/
- https://energy.gov/state-american-energy-promises-made-promises-kept
- https://energy.gov/topics/american-manufacturing
- https://energy.gov/topics/energy-workforce
- https://energy.gov/topics/grid-deployment-and-transmission

---

#### Pattern 3: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h5>
```

**XPath** (use in browser DevTools):
```
.layout--50-50.blade-section--white.blade-section--boxed:nth-child(2) > .grid-container > .blade-color > .grid-row > .tablet-lg\:grid-col-6:nth-child(1) > .block-inline-blockbasic.block-layout-builder.block > .field--body.field--name-body.field--type-text-with-summary > h5
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.layout--50-50.blade-section--white.blade-section--boxed:nth-child(2) > .grid-container > .blade-color > .grid-row > .tablet-lg\:grid-col-6:nth-child(1) > .block-inline-blockbasic.block-layout-builder.block > .field--body.field--name-body.field--type-text-with-summary > h5')`
5. The element will be highlighted

**Affected Pages**:
- https://energy.gov/femp/federal-energy-management-program-funding-opportunities
- https://energy.gov/eere/funding/eere-funding-opportunities

---

#### Pattern 4: Affects 2 page(s) - 2 occurrence(s)

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
- https://energy.gov/topics/tribal-energy-access
- https://energy.gov/topics/research-technology-and-economic-security

---

#### Pattern 5: Affects 2 page(s) - 2 occurrence(s)

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
- https://energy.gov/topics/tribal-energy-access
- https://energy.gov/topics/research-technology-and-economic-security

---

#### Pattern 6: Affects 2 page(s) - 2 occurrence(s)

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
- https://energy.gov/topics/tribal-energy-access
- https://energy.gov/topics/research-technology-and-economic-security

---

#### Pattern 7: Affects 2 page(s) - 2 occurrence(s)

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
- https://energy.gov/topics/tribal-energy-access
- https://energy.gov/topics/research-technology-and-economic-security

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://energy.gov/ | https://www.energy.gov/ | OK | 200 | yes | 13119 | 6 | 0 | 0 | 6 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-prohibited-attr, button-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, landmarks/region |
| https://energy.gov/cio/accessibility-standard-statement | https://energy.gov/cio/accessibility-standard-statement | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/gdo/funding-opportunities-and-requests-information | https://www.energy.gov/oe/funding-opportunities-and-requests-information | OK | 200 | yes | 10785 | 0 | 0 | 0 | 38 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/region |
| https://energy.gov/apprenticeships-workforce-development | https://energy.gov/apprenticeships-workforce-development | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/budget-performance | https://www.energy.gov/budget-performance | OK | 200 | yes | 10735 | 2 | 0 | 0 | 12 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/region, navigable/heading-order |
| https://energy.gov/commercialization | https://www.energy.gov/commercialization | OK | 200 | yes | 9693 | 0 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/contact-us | https://energy.gov/contact-us | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/design | https://www.energy.gov/design | OK | 200 | yes | 9249 | 0 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/digital-engagement-and-media | https://energy.gov/digital-engagement-and-media | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/EDF | https://www.energy.gov/EDF | OK | 200 | yes | 10214 | 0 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/funding-opportunities | https://energy.gov/funding-opportunities | FAIL | - | no | 262 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/genesis | https://genesis.energy.gov/ | OK | 200 | yes | 17848 | 7 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-one-main, landmark-unique, nested-interactive, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-hidden-focus, aria/presentational-children-focusable, landmarks/landmark-main, landmarks/region, time-based-media/video-captions |
| https://energy.gov/internships-fellowships | https://www.energy.gov/internships-fellowships | OK | 200 | yes | 10126 | 0 | 0 | 0 | 18 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/td-has-header, distinguishable/color-contrast, keyboard-accessible/focus-order, landmarks/region |
| https://energy.gov/mission | https://www.energy.gov/mission | FAIL | 404 | yes | 9187 | 1 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: label |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/form-label, landmarks/region |
| https://energy.gov/newsroom | https://www.energy.gov/newsroom | OK | 200 | yes | 9644 | 0 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/notice-court-orders | https://energy.gov/notice-court-orders | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/open-government | https://www.energy.gov/open-government | OK | 200 | yes | 9572 | 1 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/region, navigable/heading-order |
| https://energy.gov/our-leadership-offices | https://www.energy.gov/our-leadership-offices | OK | 200 | yes | 10489 | 0 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/image-alt-words |
| https://energy.gov/power-marketing-administrations | https://energy.gov/power-marketing-administrations | FAIL | - | no | 269 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/save | https://energy.gov/save | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/state-american-energy-promises-made-promises-kept | https://www.energy.gov/state-american-energy-promises-made-promises-kept | OK | 200 | yes | 11926 | 1 | 0 | 0 | 3 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/region |
| https://energy.gov/topics | https://energy.gov/topics | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/us-department-energy-national-laboratories | https://energy.gov/us-department-energy-national-laboratories | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/us-energy-information-administration-eia | https://energy.gov/us-energy-information-administration-eia | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/web-policies | https://www.energy.gov/web-policies | OK | 200 | yes | 9860 | 0 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/whistleblower-protection-and-nondisclosure-agreements | https://www.energy.gov/whistleblower-protection-and-nondisclosure-agreements | OK | 200 | yes | 9350 | 0 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/work-us-department-energy | https://energy.gov/work-us-department-energy | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/energy-department-announces-1715-million-expand-us-geothermal-energy | https://energy.gov/articles/energy-department-announces-1715-million-expand-us-geothermal-energy | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/energy-department-announces-largest-loan-department-history-delivering-over-7-billion | https://energy.gov/articles/energy-department-announces-largest-loan-department-history-delivering-over-7-billion | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng | https://www.energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng | OK | 200 | yes | 10620 | 1 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/region, navigable/heading-order |
| https://energy.gov/articles/fact-sheet-energy-department-lowering-electricity-costs-georgia-and-alabama | https://energy.gov/articles/fact-sheet-energy-department-lowering-electricity-costs-georgia-and-alabama | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/articles/fact-sheet-president-trump-restoring-prosperity-safety-and-security-united-states-and | https://www.energy.gov/articles/fact-sheet-president-trump-restoring-prosperity-safety-and-security-united-states-and | OK | 200 | yes | 9621 | 1 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/heading-order |
| https://energy.gov/articles/us-department-energy-reverses-biden-lng-pause-restores-trump-energy-dominance-agenda | https://energy.gov/articles/us-department-energy-reverses-biden-lng-pause-restores-trump-energy-dominance-agenda | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/ceser/does-use-federal-power-act-emergency-authority | https://energy.gov/ceser/does-use-federal-power-act-emergency-authority | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/ceser/emergency-response-hub-0 | https://energy.gov/ceser/emergency-response-hub-0 | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/cio/department-energy-information-quality-guidelines | https://energy.gov/cio/department-energy-information-quality-guidelines | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/cio/privacy-program | https://www.energy.gov/cio/privacy-program | OK | 200 | yes | 9709 | 0 | 0 | 0 | 8 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/energysaver/energy-saver | https://energy.gov/energysaver/energy-saver | FAIL | - | no | 265 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/femp/federal-energy-management-program-funding-opportunities | https://www.energy.gov/cmei/femp/federal-energy-management-program-funding-opportunities | OK | 200 | yes | 9613 | 2 | 0 | 0 | 9 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order, link-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/region, navigable/heading-order, navigable/link-name |
| https://energy.gov/gc/freedom-information-act | https://energy.gov/gc/freedom-information-act | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/hgeo/hgeo-solicitations-and-business-opportunities | https://energy.gov/hgeo/hgeo-solicitations-and-business-opportunities | FAIL | - | no | 250 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/ig/office-inspector-general | https://energy.gov/ig/office-inspector-general | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/indianenergy/current-funding-and-technical-assistance-opportunities | https://energy.gov/indianenergy/current-funding-and-technical-assistance-opportunities | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/lm/history | https://www.energy.gov/lm/history | OK | 200 | yes | 9924 | 1 | 0 | 0 | 23 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, navigable/heading-order, text-alternatives/image-alt-words |
| https://energy.gov/mesc/funding | https://energy.gov/mesc/funding | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/nnsa/national-nuclear-security-administration | https://www.energy.gov/nnsa/national-nuclear-security-administration | OK | 200 | yes | 9932 | 6 | 0 | 0 | 12 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: link-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/region, navigable/link-name |
| https://energy.gov/OMEI/office-civil-rights-and-equal-employment-opportunity | https://energy.gov/OMEI/office-civil-rights-and-equal-employment-opportunity | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/science/department-energy-nobel-laureates | https://energy.gov/science/department-energy-nobel-laureates | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/science/office-science-funding-opportunities | https://energy.gov/science/office-science-funding-opportunities | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/2025-doe-403-orders | https://energy.gov/topics/2025-doe-403-orders | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments | https://www.energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments | OK | 200 | yes | 11447 | 1 | 0 | 0 | 5 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/topics/american-manufacturing | https://www.energy.gov/topics/american-manufacturing | OK | 200 | yes | 12938 | 2 | 0 | 0 | 5 | 43 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name, image-alt |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/topics/artificial-intelligence | https://www.energy.gov/topics/artificial-intelligence | OK | 200 | yes | 10674 | 0 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/region, text-alternatives/image-alt-words |
| https://energy.gov/topics/cybersecurity | https://energy.gov/topics/cybersecurity | FAIL | - | no | 266 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/earth-systems-modeling | https://www.energy.gov/topics/earth-systems-modeling | OK | 200 | yes | 11199 | 1 | 0 | 0 | 5 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/topics/energy-security | https://energy.gov/topics/energy-security | FAIL | - | no | 252 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/energy-workforce | https://www.energy.gov/topics/energy-workforce | OK | 200 | yes | 12352 | 1 | 0 | 0 | 6 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region, text-alternatives/image-alt-words |
| https://energy.gov/topics/environmental-and-legacy-management | https://www.energy.gov/topics/environmental-and-legacy-management | OK | 200 | yes | 9709 | 0 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/about-us/web-policies/privacy | https://www.energy.gov/about-us/web-policies/privacy | OK | 200 | yes | 9407 | 0 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/cio/articles/vulnerability-disclosure-policy | https://energy.gov/cio/articles/vulnerability-disclosure-policy | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/eere/funding/eere-funding-opportunities | https://www.energy.gov/cmei/funding/cmei-funding-opportunities | OK | 200 | yes | 10126 | 1 | 0 | 0 | 8 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/label-content-mismatch, landmarks/region, navigable/heading-order |
| https://energy.gov/scep/wap/weatherization-assistance-program | https://www.energy.gov/cmei/scep/wap/weatherization-assistance-program | OK | 200 | yes | 9731 | 0 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/topics/national-science-bowl | https://energy.gov/topics/national-science-bowl | FAIL | - | no | 271 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/grid-deployment-and-transmission | https://www.energy.gov/topics/grid-deployment-and-transmission | OK | 200 | yes | 13887 | 3 | 0 | 0 | 5 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, landmarks/region |
| https://energy.gov/topics/puerto-rico-grid-resilience-and-modernization | https://energy.gov/topics/puerto-rico-grid-resilience-and-modernization | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/tribal-energy-access | https://www.energy.gov/topics/tribal-energy-access | FAIL | 403 | yes | 6837 | 5 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, readable/html-has-lang |
| https://energy.gov/topics/research-technology-and-economic-security | https://www.energy.gov/topics/research-technology-and-economic-security | FAIL | 403 | yes | 6888 | 5 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: html-has-lang, landmark-one-main, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, readable/html-has-lang |
| https://energy.gov/topics/extreme-weather-resiliency | https://energy.gov/topics/extreme-weather-resiliency | FAIL | - | no | 253 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://energy.gov/topics/nuclear-security | https://energy.gov/topics/nuclear-security | FAIL | - | no | 251 | 0 | 0 | 0 | 0 | 0 | fetch failed |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://energy.gov/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="field__item splide__slide is-active is-visible" id="main-carousel-slide01" role="group" aria-roledescription="slide" aria-label="1 of 4" style="width: calc(100%);">`
- XPath: `#main-carousel-slide01`

**Failure 2:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-active is-visible" id="thumbnail-carousel-slide01" role="button" aria-label="Go to slide 1" aria-current="true" tabindex="0" aria-controls="main-carousel-slide01">`
- XPath: `#thumbnail-carousel-slide01`

**Failure 3:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible is-next" id="thumbnail-carousel-slide02" role="button" aria-label="Go to slide 2" tabindex="0" aria-controls="main-carousel-slide02">`
- XPath: `#thumbnail-carousel-slide02`

**Failure 4:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible" id="thumbnail-carousel-slide03" role="button" aria-label="Go to slide 3" tabindex="0" aria-controls="main-carousel-slide03">`
- XPath: `#thumbnail-carousel-slide03`

**Failure 5:**
- First identified: 2026-04-07
- Message: ARIA role should be appropriate for the element
- HTML: `<li class="splide__slide is-visible" id="thumbnail-carousel-slide04" role="button" aria-label="Go to slide 4" tabindex="0" aria-controls="main-carousel-slide04">`
- XPath: `#thumbnail-carousel-slide04`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/57fefa84/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\38 56600975`

### https://energy.gov/budget-performance

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h3><a href="/cfo/listings/budget-justification-supporting-documents" data-once="links">More Budget Requests</a></h3>`
- XPath: `.layout-breakout.layout-float.layout-right > .field--text_default.field--body.field--name-body > h3`

**Failure 2:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h4><a aria-label="Read more about More Annual Performance Reports" href="/cfo/listings/annual-performance-reports" title="Read more about More Annual Performance Reports" data-once="links">More Annual Performance Reports</a></h4>`
- XPath: `h4`

### https://energy.gov/genesis

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Document should have one main landmark
- HTML: `<html lang="en" class="bg-main-dark" style="color-scheme:dark">`
- XPath: `html`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<div id="faq-answer-0" class="overflow-hidden" role="region" aria-labelledby="faq-question-0" style="height:0px;opacity:0">`
- XPath: `#faq-answer-0`

#### Rule: [nested-interactive](https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Interactive controls must not be nested
- HTML: `<div class="absolute inset-0 z-40 flex cursor-pointer items-center justify-center" role="button" tabindex="0" aria-label="Play Genesis Mission announcement video">`
- XPath: `.z-40`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: All page content should be contained by landmarks
- HTML: `<div class="hidden md:absolute md:left-6 md:flex md:items-center">`
- XPath: `.md\:left-6`

**Failure 2:**
- First identified: 2026-04-07
- Message: All page content should be contained by landmarks
- HTML: `<div class="hidden md:flex md:items-center md:gap-4" data-name="wrapper">`
- XPath: `.md\:gap-4`

**Failure 3:**
- First identified: 2026-04-07
- Message: All page content should be contained by landmarks
- HTML: `<div class="hidden md:absolute md:right-6 md:flex md:items-center"><p class="font-mono text-[12px] leading-4 font-normal tracking-[0.72px] text-neutral-50 uppercase whitespace-pre">22:12:16 UTC</p></div>`
- XPath: `.md\:right-6`

**Failure 4:**
- First identified: 2026-04-07
- Message: All page content should be contained by landmarks
- HTML: `<section class="relative" aria-labelledby="section-security">`
- XPath: `section[aria-labelledby="section-security"]`

### https://energy.gov/mission

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Form elements must have labels
- HTML: `<input type="text" name="keywords" class="usa-input" value="" data-once="searchSuggestion">`
- XPath: `input`

### https://energy.gov/open-government

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h4>CUSTOMER SERVICE</h4>`
- XPath: `.tablet-lg\:grid-col-6:nth-child(1) > .block-layout-builder.block-inline-blockbasic.block > .field--text_default.field--body.field--name-body > h4:nth-child(1)`

### https://energy.gov/state-american-energy-promises-made-promises-kept

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/57fefa84/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\31 93287440`

### https://energy.gov/articles/energy-department-approves-export-expansion-corpus-christi-lng

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h3>Media Inquiries:</h3>`
- XPath: `.group-section__item--start > h3`

### https://energy.gov/articles/fact-sheet-president-trump-restoring-prosperity-safety-and-security-united-states-and

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h3><strong>PRESIDENT TRUMP ANNOUNCES A HISTORIC US-VENEZUELA ENERGY DEAL TO SAFEGUARD AMERICA</strong></h3>`
- XPath: `.field--text_default > h3:nth-child(1)`

### https://energy.gov/femp/federal-energy-management-program-funding-opportunities

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h5>`
- XPath: `.layout--50-50.blade-section--white.blade-section--boxed:nth-child(2) > .grid-container > .blade-color > .grid-row > .tablet-lg\:grid-col-6:nth-child(1) > .block-inline-blockbasic.block-layout-builder.block > .field--body.field--name-body.field--type-text-with-summary > h5`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Links must have discernible text
- HTML: `<a href="/cmei/femp/federal-energy-management-program-legacy" data-entity-type="node" data-entity-uuid="d5b7971e-461c-4dd6-a523-f44e158d469a" data-entity-substitution="canonical" data-once="links"> </a>`
- XPath: `.field--field_text > p:nth-child(1) > a[data-entity-type="node"][data-entity-substitution="canonical"][data-once="links"]:nth-child(1)`

### https://energy.gov/lm/history

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h5><a href="/management/articles/gosling-manhattan-project-making-atomic-bomb" data-once="links">The Manhattan Project: Making the Atomic Bomb&nbsp;</a></h5>`
- XPath: `#energy-accordion--2-1 > .paragraph--type--text-field.paragraph.paragraph--view-mode--default > .paragraph__column > .field--field_text.field--name-field-text.field--text_default > h5:nth-child(1)`

### https://energy.gov/nnsa/national-nuclear-security-administration

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Links must have discernible text
- HTML: `<a href="https://www.facebook.com/NNSANews/" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `div:nth-child(1) > .paragraph--type--button.paragraph.paragraph--view-mode--default > .field--link.field--field_button_link.field--name-field-button-link > .usa-button--blue[aria-label=" "][data-extlink=""]`

**Failure 2:**
- First identified: 2026-04-07
- Message: Links must have discernible text
- HTML: `<a href="https://www.instagram.com/nnsanews/" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `div:nth-child(2) > .paragraph--type--button.paragraph.paragraph--view-mode--default > .field--link.field--field_button_link.field--name-field-button-link > .usa-button--blue[aria-label=" "][data-extlink=""]`

**Failure 3:**
- First identified: 2026-04-07
- Message: Links must have discernible text
- HTML: `<a href="https://www.linkedin.com/company/national-nuclear-security-administration/posts/?feedView=articles" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `div:nth-child(3) > .paragraph--type--button.paragraph.paragraph--view-mode--default > .field--link.field--field_button_link.field--name-field-button-link > .usa-button--blue[aria-label=" "][data-extlink=""]`

**Failure 4:**
- First identified: 2026-04-07
- Message: Links must have discernible text
- HTML: `<a href="https://www.youtube.com/nnsanews" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `div:nth-child(4) > .paragraph--type--button.paragraph.paragraph--view-mode--default > .field--link.field--field_button_link.field--name-field-button-link > .usa-button--blue[aria-label=" "][data-extlink=""]`

**Failure 5:**
- First identified: 2026-04-07
- Message: Links must have discernible text
- HTML: `<a href="https://www.x.com/NNSANews" class="usa-button usa-button--blue ext" aria-label=" " data-once="links" data-extlink="" target="_blank" rel="noopener nofollow noreferrer">`
- XPath: `a[href$="NNSANews"]`

*... and 1 more failures for this rule*

### https://energy.gov/topics/advancing-innovation-technology-transitions-and-early-investments

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-small-mode" tabindex="" id="movie_player" data-version="/s/player/57fefa84/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\34 20602971`

### https://energy.gov/topics/american-manufacturing

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/57fefa84/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\33 68579368`

#### Rule: [image-alt](https://dequeuniversity.com/rules/axe/4.11/image-alt?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Images must have alternative text
- HTML: `<img class="leaflet-tile leaflet-tile-loaded" src="https://a.tiles.mapbox.com/styles/v1/energy/cll411cfu006v01qlevja70n1/tiles/3/1/2?access_token=pk.eyJ1IjoiZW5lcmd5IiwiYSI6IkozTG9BZDQifQ.1WKh4U0kKCdknF3gxBOF7Q" style="height: 512px; width: 512px; left: 180px; top: -219px;">`
- XPath: `iframe[width="100%"]`

### https://energy.gov/topics/earth-systems-modeling

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/2430d1b0/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\36 95905121`

### https://energy.gov/topics/energy-workforce

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/57fefa84/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\38 28995484`

### https://energy.gov/eere/funding/eere-funding-opportunities

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Heading levels should only increase by one
- HTML: `<h5>`
- XPath: `h5`

### https://energy.gov/topics/grid-deployment-and-transmission

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/57fefa84/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\32 27620473`

**Failure 2:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/57fefa84/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\33 41240147`

**Failure 3:**
- First identified: 2026-04-07
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode" tabindex="" id="movie_player" data-version="/s/player/57fefa84/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\35 56676670`

### https://energy.gov/topics/tribal-energy-access

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: All page content should be contained by landmarks
- HTML: `<h1>403 ERROR</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-07
- Message: All page content should be contained by landmarks
- HTML: `<h2>The request could not be satisfied.</h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-04-07
- Message: All page content should be contained by landmarks
- HTML: `<pre>Generated by cloudfront (CloudFront) Request ID: 3iy7X1vNAX2LOn-oPFaUYH39-WCZh-IAcATTsHRhqVfB-qhm86jWyQ== </pre>`
- XPath: `pre`

### https://energy.gov/topics/research-technology-and-economic-security

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**WCAG**: [SC 3.1.1](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page) (Level A)

**Failure 1:**
- First identified: 2026-04-07
- Message: <html> element must have a lang attribute
- HTML: `<html>`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: Document should have one main landmark
- HTML: `<html>`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-07
- Message: All page content should be contained by landmarks
- HTML: `<h1>403 ERROR</h1>`
- XPath: `h1`

**Failure 2:**
- First identified: 2026-04-07
- Message: All page content should be contained by landmarks
- HTML: `<h2>The request could not be satisfied.</h2>`
- XPath: `h2`

**Failure 3:**
- First identified: 2026-04-07
- Message: All page content should be contained by landmarks
- HTML: `<pre>Generated by cloudfront (CloudFront) Request ID: ykcyq-_8QxAsljCGS_a7tRF9adTtKF3fATyw5iy_N2X4A0qe2KQUDw== </pre>`
- XPath: `pre`

