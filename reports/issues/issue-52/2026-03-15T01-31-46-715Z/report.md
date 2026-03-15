# Scan Report: Alberta

- Issue: https://github.com/mgifford/open-scans/issues/52
- Submitted by: mgifford
- Scanned at: 2026-03-15T01:30:46.817Z
- Engines used: AXE, QUALWEB
- Scan duration: 3.1 minutes
- Total URLs submitted: 59
- Accepted public URLs: 59
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
  - ⚡ Reduced motion: None of the scanned URLs support `prefers-reduced-motion: reduce`
  - 🔍 High contrast: None of the scanned URLs support `prefers-contrast: more`
  - 🖥️ Forced colors: None of the scanned URLs support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 10039 passed, 61 failed, 293 cantTell, 1142 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 5355 passed, 316 failed, 2462 cantTell, 91 inapplicable
- Duplicate findings caught by later scanners: 289

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.alberta.ca/alberta-ca-account) | 38 | 98 | **136** | Alberta.ca Account \| Alberta.ca |
| [View Page](https://www.alberta.ca/release.cfm?xID=95735120C00EF-B4D2-523E-653AFC3B7691D90A) | 1 | 33 | **34** | Budget 2026: Strengthening what matters \| Budget 2026 : Renforcer ce qui compte  \| alberta.ca |
| [View Page](https://www.alberta.ca/vehicle-registration-renewal) | 1 | 29 | **30** | Renew your vehicle registration \| Alberta.ca |
| [View Page](https://www.alberta.ca/ahcip) | 1 | 20 | **21** | Alberta Health Care Insurance Plan (AHCIP) \| Alberta.ca |
| [View Page](https://www.alberta.ca/usingthissite) | 1 | 17 | **18** | Using Alberta.ca \| Alberta.ca |
| [View Page](https://www.alberta.ca/public-engagement) | 1 | 16 | **17** | Public engagement \| Alberta.ca |
| [View Page](https://www.alberta.ca/find-a-job) | 1 | 14 | **15** | Find a job \| Alberta.ca |
| [View Page](https://www.alberta.ca/open-government-program) | 1 | 14 | **15** | Open Government program \| Alberta.ca |
| [View Page](https://www.alberta.ca/acute-care-action-plan) | 1 | 8 | **9** | Acute Care Action Plan \| Alberta.ca |
| [View Page](https://www.alberta.ca/schools-now) | 1 | 8 | **9** | Schools Now \| Alberta.ca |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-unique | **22** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| region | **2** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| color-contrast | **1** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<nav role="navigation" id="goa-quicklinks" class="goa-list">
```

**XPath** (use in browser DevTools):
```
.goa-list:nth-child(1) > nav[role="navigation"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.goa-list:nth-child(1) > nav[role="navigation"]')`
5. The element will be highlighted

**Affected Pages**:
- https://alberta.ca/find-a-job
- https://alberta.ca/vehicle-registration-renewal
- https://alberta.ca/about-government
- https://alberta.ca/acute-care-action-plan
- https://alberta.ca/alberta-ca-account
- *...and 15 more page(s)*

---

#### Pattern 2: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate
**Issue**: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination

**HTML Pattern**:
```html
<nav>
```

**XPath** (use in browser DevTools):
```
.goa-languages > nav
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.goa-languages > nav')`
5. The element will be highlighted

**Affected Pages**:
- https://alberta.ca/ahcip
- https://alberta.ca/schools-now

---

#### Pattern 3: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="ab-footer">
```

**XPath** (use in browser DevTools):
```
.ab-footer
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.ab-footer')`
5. The element will be highlighted

**Affected Pages**:
- https://alberta.ca/announcements.cfm?xID=95735120C00EF-B4D2-523E-653AFC3B7691D90A
- https://alberta.ca/release.cfm?xID=956393BF7AAE1-FC58-0121-F6ACBF2A8BCD7A5B

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://alberta.ca/ | https://alberta.ca/ | FAIL | - | no | 278 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/accessibility | https://alberta.ca/accessibility | FAIL | - | no | 254 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/find-a-job | https://www.alberta.ca/find-a-job | OK | 200 | yes | 8150 | 1 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/all-services | https://alberta.ca/all-services | FAIL | - | no | 165 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/canada-post-service-interruption | https://alberta.ca/canada-post-service-interruption | FAIL | - | no | 167 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/vehicle-registration-renewal | https://www.alberta.ca/vehicle-registration-renewal | OK | 200 | yes | 7328 | 1 | 0 | 0 | 0 | 28 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/family-and-social-supports-topic | https://alberta.ca/family-and-social-supports-topic | FAIL | - | no | 195 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/about-government | https://www.alberta.ca/about-government | OK | 200 | yes | 7009 | 1 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/acute-care-action-plan | https://www.alberta.ca/acute-care-action-plan | OK | 200 | yes | 11666 | 1 | 0 | 0 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/agriculture | https://alberta.ca/agriculture | FAIL | - | no | 226 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/ahcip | https://www.alberta.ca/ahcip | OK | 200 | yes | 7274 | 1 | 0 | 0 | 0 | 19 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/aish | https://alberta.ca/aish | FAIL | - | no | 304 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/alberta-advantage-immigration-program | https://alberta.ca/alberta-advantage-immigration-program | FAIL | - | no | 170 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/alberta-ca-account | https://www.alberta.ca/alberta-ca-account | OK | 200 | yes | 8077 | 38 | 0 | 0 | 0 | 95 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique |
| https://alberta.ca/announcements.cfm?xID=957330F7B921A-EEA9-EE49-575132BCF2B4A8E4 | https://alberta.ca/announcements.cfm?xID=957330F7B921A-EEA9-EE49-575132BCF2B4A8E4 | FAIL | - | no | 167 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/announcements.cfm?xID=9573410ED1AD8-DE7F-DF66-A798654D0700135F | https://alberta.ca/announcements.cfm?xID=9573410ED1AD8-DE7F-DF66-A798654D0700135F | FAIL | - | no | 222 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/announcements.cfm?xID=95735120C00EF-B4D2-523E-653AFC3B7691D90A | https://www.alberta.ca/release.cfm?xID=95735120C00EF-B4D2-523E-653AFC3B7691D90A | OK | 200 | yes | 8361 | 1 | 0 | 0 | 0 | 32 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://alberta.ca/birth-adoption-death-marriage-and-divorce-topic | https://www.alberta.ca/birth-adoption-death-marriage-and-divorce-topic | OK | 200 | yes | 7027 | 1 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/budget | https://alberta.ca/budget | FAIL | - | no | 166 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/business-and-economic-development | https://alberta.ca/business-and-economic-development | FAIL | - | no | 165 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/contact-government | https://www.alberta.ca/contact-government | OK | 200 | yes | 6982 | 1 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/contact.cfm | https://www.alberta.ca/contact-government | OK | 200 | yes | 6953 | 1 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/culture-topic | https://www.alberta.ca/culture-topic | OK | 200 | yes | 6906 | 1 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/cut-red-tape | https://alberta.ca/cut-red-tape | FAIL | - | no | 182 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/disclaimer | https://alberta.ca/disclaimer | FAIL | - | no | 182 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/driving-safety-topic | https://www.alberta.ca/driving-safety-topic | OK | 200 | yes | 6841 | 1 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/education-and-training-topic | https://alberta.ca/education-and-training-topic | FAIL | - | no | 248 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/emergency | https://alberta.ca/emergency | FAIL | - | no | 166 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/emergency-preparedness-disaster-response-and-public-safety-topic | https://alberta.ca/emergency-preparedness-disaster-response-and-public-safety-topic | FAIL | - | no | 221 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/employment-topic | https://www.alberta.ca/employment-topic | OK | 200 | yes | 6886 | 1 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/energy-topic | https://www.alberta.ca/energy-topic | OK | 200 | yes | 6952 | 1 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/environment-natural-resources | https://www.alberta.ca/environment-natural-resources | OK | 200 | yes | 6936 | 1 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/fish-and-wildlife-topic | https://www.alberta.ca/fish-and-wildlife-topic | OK | 200 | yes | 7076 | 1 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/government-of-alberta | https://alberta.ca/government-of-alberta | FAIL | - | no | 166 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/health-wellness | https://alberta.ca/health-wellness | FAIL | - | no | 164 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/housing-topic | https://alberta.ca/housing-topic | FAIL | - | no | 167 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/indigenous-relations-topic | https://alberta.ca/indigenous-relations-topic | FAIL | - | no | 170 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/infrastructure-topic | https://www.alberta.ca/infrastructure-topic | OK | 200 | yes | 6919 | 1 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/justice-topic | https://alberta.ca/justice-topic | FAIL | - | no | 167 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/key-initiatives | https://alberta.ca/key-initiatives | FAIL | - | no | 166 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/ministries | https://www.alberta.ca/ministries | OK | 200 | yes | 7207 | 1 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/moving-to-alberta-topic | https://alberta.ca/moving-to-alberta-topic | FAIL | - | no | 271 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/municipalities-topic | https://alberta.ca/municipalities-topic | FAIL | - | no | 173 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/news | https://alberta.ca/news | FAIL | - | no | 166 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/non-profit-and-charitable-organizations-topic | https://alberta.ca/non-profit-and-charitable-organizations-topic | FAIL | - | no | 165 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/open-government-program | https://www.alberta.ca/open-government-program | OK | 200 | yes | 7127 | 1 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/premier.aspx | https://alberta.ca/premier.aspx | FAIL | - | no | 171 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/privacystatement | https://alberta.ca/privacystatement | FAIL | - | no | 164 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/public-engagement | https://www.alberta.ca/public-engagement | OK | 200 | yes | 7116 | 1 | 0 | 0 | 0 | 14 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/release.cfm?xID=956393BF7AAE1-FC58-0121-F6ACBF2A8BCD7A5B | https://www.alberta.ca/release.cfm?xID=956393BF7AAE1-FC58-0121-F6ACBF2A8BCD7A5B | OK | 200 | yes | 6869 | 1 | 0 | 0 | 0 | 6 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
| https://alberta.ca/release.cfm?xID=956403CB2A273-BB32-5FB1-CF2920F98FFC9B8A | https://alberta.ca/release.cfm?xID=956403CB2A273-BB32-5FB1-CF2920F98FFC9B8A | FAIL | - | no | 167 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65 | https://alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65 | FAIL | - | no | 166 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/schools-now | https://www.alberta.ca/schools-now | OK | 200 | yes | 7227 | 1 | 0 | 0 | 0 | 7 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/social-media-directory | https://alberta.ca/social-media-directory | FAIL | - | no | 166 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/staff-directory.cfm | https://alberta.ca/staff-directory.cfm | FAIL | - | no | 166 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/tax-information-topic | https://alberta.ca/tax-information-topic | FAIL | - | no | 168 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/tourism-sport-and-outdoor-recreation | https://www.alberta.ca/tourism-sport-and-outdoor-recreation | OK | 200 | yes | 6882 | 1 | 0 | 0 | 0 | 3 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/usingthissite | https://www.alberta.ca/usingthissite | OK | 200 | yes | 7071 | 1 | 0 | 0 | 0 | 16 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://alberta.ca/west-coast-oil-pipeline | https://alberta.ca/west-coast-oil-pipeline | FAIL | - | no | 167 | 0 | 0 | 0 | 0 | 0 | fetch failed |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://alberta.ca/find-a-job

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/vehicle-registration-renewal

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/about-government

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/acute-care-action-plan

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/ahcip

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.goa-languages > nav`

### https://alberta.ca/alberta-ca-account

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Request an ante-mortem inspection by video</button>`
- XPath: `#accordion6309 > h3 > button`

**Failure 2:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Develop nutrient management plans for crop production</button>`
- XPath: `#accordion6310 > h3 > button`

**Failure 3:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Agriculture and forestry</button>`
- XPath: `#accordion49347 > h3 > button`

**Failure 4:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Digital services and applications</button>`
- XPath: `#accordion49348 > h3 > button`

**Failure 5:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Environmental services</button>`
- XPath: `#accordion49349 > h3 > button`

*... and 32 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/announcements.cfm?xID=95735120C00EF-B4D2-523E-653AFC3B7691D90A

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="ab-footer">`
- XPath: `.ab-footer`

### https://alberta.ca/birth-adoption-death-marriage-and-divorce-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/contact-government

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/contact.cfm

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/culture-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/driving-safety-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/employment-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/energy-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/environment-natural-resources

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/fish-and-wildlife-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/infrastructure-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/ministries

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/open-government-program

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/public-engagement

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/release.cfm?xID=956393BF7AAE1-FC58-0121-F6ACBF2A8BCD7A5B

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="ab-footer">`
- XPath: `.ab-footer`

### https://alberta.ca/schools-now

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.goa-languages > nav`

### https://alberta.ca/tourism-sport-and-outdoor-recreation

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/usingthissite

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

