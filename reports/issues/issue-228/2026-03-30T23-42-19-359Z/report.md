# Scan Report: https://oregon.gov/

- Issue: https://github.com/mgifford/open-scans/issues/228
- Submitted by: mgifford
- Scanned at: 2026-03-30T23:41:31.789Z
- Engines used: AXE, QUALWEB
- Scan duration: 17.5 minutes
- Total URLs submitted: 81
- Accepted public URLs: 81
- Rejected URLs: 0
- 🎨 **Accessibility personalization (CSS media queries):**
  - 🌙 **Dark mode:** 1 of 81 URLs (1%) support `prefers-color-scheme: dark`
  - ⚡ **Reduced motion:** 21 of 81 URLs (26%) support `prefers-reduced-motion: reduce`
  - 🔍 **High contrast:** 2 of 81 URLs (2%) support `prefers-contrast: more`
  - 🖥️ **Forced colors:** 2 of 81 URLs (2%) support `forced-colors: active`
  - 🪟 Reduced transparency: None of the scanned URLs support `prefers-reduced-transparency: reduce`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 120835 passed, 392 failed, 732 cantTell, 3650 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 59610 passed, 2631 failed, 16483 cantTell, 392 inapplicable
- Duplicate findings caught by later scanners: 2424

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.oregon.gov/odva/Pages/default.aspx) | 44 | 87 | **131** | Oregon Department of Veterans' Affairs : Welcome Page : State of Oregon |
| [View Page](https://www.oregon.gov/odot/dmv/pages/offices/index.aspx) | 5 | 126 | **131** | Oregon Department of Transportation : DMV Offices : Oregon Driver & Motor Vehicle Services : State of Oregon |
| [View Page](https://www.oregon.gov/odva/Pages/default.aspx) | 44 | 87 | **131** | Oregon Department of Veterans' Affairs : Welcome Page : State of Oregon |
| [View Page](https://www.oregon.gov/ODVA/Services/Pages/County-Veteran-Services-Offices.aspx) | 6 | 119 | **125** | Oregon Department of Veterans' Affairs : County Veteran Services Offices : Locate a Veteran Services Office : State of Oregon |
| [View Page](https://www.oregon.gov/odot/dmv/pages/vehicle/titlereg.aspx) | 13 | 82 | **95** | Oregon Department of Transportation : Titling and Registering Your Vehicle : Oregon Driver & Motor Vehicle Services : State of Oregon |
| [View Page](https://www.oregon.gov/odva/Benefits/Pages/default.aspx) | 5 | 88 | **93** | Oregon Department of Veterans' Affairs : Benefits and Programs : Benefits & Programs : State of Oregon |
| [View Page](https://www.oregon.gov/odot/dmv/pages/driverid/licenseget.aspx) | 7 | 83 | **90** | Oregon Department of Transportation : Get a Driver License - Over 18 : Oregon Driver & Motor Vehicle Services : State of Oregon |
| [View Page](https://www.oregon.gov/Pages/index.aspx) | 0 | 75 | **75** | Oregon.gov : State of Oregon |
| [View Page](https://www.oregon.gov/odva/agency-programs/Pages/default.aspx) | 6 | 67 | **73** | Oregon Department of Veterans' Affairs : Agency Programs : Agency Programs : State of Oregon |
| [View Page](https://apps.oregon.gov/oregon-newsroom/or/posts) | 2 | 70 | **72** | Newsroom - Oregon |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| aria-allowed-role | **67** of 81 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| region | **38** of 81 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| color-contrast | **30** of 81 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| heading-order | **23** of 81 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| aria-dialog-name | **19** of 81 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-dialog-name) |
| list | **8** of 81 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/list) |
| aria-valid-attr-value | **8** of 81 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-valid-attr-value) |
| page-has-heading-one | **5** of 81 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/page-has-heading-one) |
| link-in-text-block | **4** of 81 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-in-text-block) |
| frame-title | **4** of 81 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/frame-title) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 67 page(s) - 68 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor
**Issue**: ARIA role should be appropriate for the element

**HTML Pattern**:
```html
<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>
```

**XPath** (use in browser DevTools):
```
button[aria-label="Section 508 Hidden Submit"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('button[aria-label="Section 508 Hidden Submit"]')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/ODVA/Connect/Pages/Public-Records-Request.aspx
- https://oregon.gov/odva/Connect/Pages/Request-Speaker.aspx
- https://oregon.gov/odva/Services/Pages/County-Services.aspx
- https://oregon.gov/ODVA/Services/Pages/County-Veteran-Services-Offices.aspx
- https://oregon.gov/odva/Services/Pages/default.aspx
- *...and 62 more page(s)*

---

#### Pattern 2: Affects 28 page(s) - 28 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<a class="or-navbar-brand" href="http://www.oregon.gov">
```

**XPath** (use in browser DevTools):
```
.or-navbar-brand
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.or-navbar-brand')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/ODVA/Connect/Pages/Public-Records-Request.aspx
- https://oregon.gov/odva/Connect/Pages/Request-Speaker.aspx
- https://oregon.gov/odva/Services/Pages/County-Services.aspx
- https://oregon.gov/ODVA/Services/Pages/County-Veteran-Services-Offices.aspx
- https://oregon.gov/odva/Services/Pages/default.aspx
- *...and 23 more page(s)*

---

#### Pattern 3: Affects 19 page(s) - 19 occurrence(s)

**Scanner**: axe
**Rule**: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious
**Issue**: ARIA dialog and alertdialog nodes should have an accessible name

**HTML Pattern**:
```html
<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">
```

**XPath** (use in browser DevTools):
```
#prefix-overlay-outer
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#prefix-overlay-outer')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/ODVA/Connect/Pages/Public-Records-Request.aspx
- https://oregon.gov/odva/Connect/Pages/Request-Speaker.aspx
- https://oregon.gov/odva/Services/Pages/County-Services.aspx
- https://oregon.gov/ODVA/Services/Pages/County-Veteran-Services-Offices.aspx
- https://oregon.gov/odva/Services/Pages/default.aspx
- *...and 14 more page(s)*

---

#### Pattern 4: Affects 19 page(s) - 19 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>
```

**XPath** (use in browser DevTools):
```
#prefix-dismissButton
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#prefix-dismissButton')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/ODVA/Connect/Pages/Public-Records-Request.aspx
- https://oregon.gov/odva/Connect/Pages/Request-Speaker.aspx
- https://oregon.gov/odva/Services/Pages/County-Services.aspx
- https://oregon.gov/ODVA/Services/Pages/County-Veteran-Services-Offices.aspx
- https://oregon.gov/odva/Services/Pages/default.aspx
- *...and 14 more page(s)*

---

#### Pattern 5: Affects 19 page(s) - 19 occurrence(s)

**Scanner**: axe
**Rule**: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**Issue**: Elements must meet minimum color contrast ratio thresholds

**HTML Pattern**:
```html
<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>
```

**XPath** (use in browser DevTools):
```
#prefix-laterButton
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#prefix-laterButton')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/ODVA/Connect/Pages/Public-Records-Request.aspx
- https://oregon.gov/odva/Connect/Pages/Request-Speaker.aspx
- https://oregon.gov/odva/Services/Pages/County-Services.aspx
- https://oregon.gov/ODVA/Services/Pages/County-Veteran-Services-Offices.aspx
- https://oregon.gov/odva/Services/Pages/default.aspx
- *...and 14 more page(s)*

---

#### Pattern 6: Affects 7 page(s) - 12 occurrence(s)

**Scanner**: axe
**Rule**: [aria-valid-attr-value](https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright)
**Impact**: critical
**Issue**: ARIA attributes must conform to valid values

**HTML Pattern**:
```html
<div class="alert alert-warning alert-dismissible" aria-live="alert" role="alert">
```

**XPath** (use in browser DevTools):
```
.alert-warning
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.alert-warning')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/boli
- https://oregon.gov/realid
- https://oregon.gov/odot/dmv/pages/offices/index.aspx
- https://oregon.gov/odot/dmv/pages/driverid/idget.aspx
- https://oregon.gov/odot/dmv/pages/driverid/licenseget.aspx
- *...and 2 more page(s)*

---

#### Pattern 7: Affects 6 page(s) - 7 occurrence(s)

**Scanner**: axe
**Rule**: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**Issue**: <ul> and <ol> must only directly contain <li>, <script> or <template> elements

**HTML Pattern**:
```html
<ul>
```

**XPath** (use in browser DevTools):
```
ul:nth-child(5)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('ul:nth-child(5)')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/pages/accessibility.aspx
- https://oregon.gov/odot/dmv/pages/driverid/idget.aspx
- https://oregon.gov/osmb/boater-info/pages/boater-education-cards.aspx
- https://oregon.gov/odot/dmv/pages/driverid/licenseget.aspx
- https://oregon.gov/treasury/invested-for-oregon/Pages/Oregon-Intermediate-Term-Investments.aspx
- *...and 1 more page(s)*

---

#### Pattern 8: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div id="welcome-popup">
    Hi! I'm a virtual assistant.<br>How can I help you?
  </div>
```

**XPath** (use in browser DevTools):
```
#welcome-popup
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#welcome-popup')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/realid
- https://oregon.gov/odot/dmv/pages/offices/index.aspx
- https://oregon.gov/odot/dmv/pages/driverid/idget.aspx
- https://oregon.gov/odot/dmv/pages/driverid/licenseget.aspx
- https://oregon.gov/odot/dmv/pages/vehicle/titlereg.aspx

---

#### Pattern 9: Affects 4 page(s) - 4 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<a class="oha-navbar-brand" href="/oha/">
        <img src="/oha/Style%20Library/Images/OHA-Full-Color.svg" alt="Oregon Health Authority logo">
    </a>
```

**XPath** (use in browser DevTools):
```
.oha-navbar-brand
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.oha-navbar-brand')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/oha/HSD/OHP/pages/Apply.aspx
- https://oregon.gov/oha/ph
- https://oregon.gov/oha/ph/diseasesconditions/chronicdisease/medicalmarijuanaprogram
- https://oregon.gov/OHA/ERD/Pages/News-Releases.aspx

---

#### Pattern 10: Affects 3 page(s) - 19 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**Issue**: Elements must only use supported ARIA attributes

**HTML Pattern**:
```html
<div class="panel-group" id="accordion" aria-multiselectable="true">
```

**XPath** (use in browser DevTools):
```
.wrapper.center-block:nth-child(2) > .panel-group[aria-multiselectable="true"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.wrapper.center-block:nth-child(2) > .panel-group[aria-multiselectable="true"]')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/treasury/invested-for-oregon/Pages/Sustainable-Investing-governance.aspx
- https://oregon.gov/treasury/invested-for-oregon/Pages/Climate-Positive-Investing.aspx
- https://oregon.gov/treasury/invested-for-oregon/Pages/Individual-Account-Program.aspx

---

#### Pattern 11: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate
**Issue**: Heading levels should only increase by one

**HTML Pattern**:
```html
<h4 class="or-portal-entity-card-heading">
                        Accountancy, Board of 
                    </h4>
```

**XPath** (use in browser DevTools):
```
a[href$="boa"] > .or-portal-entity-card-content > .or-portal-entity-card-heading
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('a[href$="boa"] > .or-portal-entity-card-content > .or-portal-entity-card-heading')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/pages/agencies.aspx
- https://oregon.gov/Pages/agencies.aspx
- https://oregon.gov/pages/agencies.aspx?branch=Executive

---

#### Pattern 12: Affects 3 page(s) - 3 occurrence(s)

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
iframe[width="400"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('iframe[width="400"]')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/realid
- https://oregon.gov/treasury/invested-for-oregon/Pages/Sustainable-Investing-governance.aspx
- https://oregon.gov/treasury/invested-for-oregon/Pages/Climate-Positive-Investing.aspx

---

#### Pattern 13: Affects 2 page(s) - 16 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a class="rssapp-card-social-i..." href="https://x.com/intent..." target="_blank" rel="noopener noreferrer" aria-label="" style="background: rgb(66, ...">
```

**XPath** (use in browser DevTools):
```
#ghwg29So2jJ5EbsW,.list-card.rssapp-list-card.rss-app-hover-card:nth-child(1) > .list-card-content > .list-card-body > .list-card-summary > div:nth-child(2) > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]:nth-child(2)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#ghwg29So2jJ5EbsW,.list-card.rssapp-list-card.rss-app-hover-card:nth-child(1) > .list-card-content > .list-card-body > .list-card-summary > div:nth-child(2) > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]:nth-child(2)')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/odva/
- https://oregon.gov/odva/Pages/default.aspx

---

#### Pattern 14: Affects 2 page(s) - 16 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a class="rssapp-card-social-i..." href="https://www.linkedin..." target="_blank" rel="noopener noreferrer" aria-label="" style="background: linear-g...">
```

**XPath** (use in browser DevTools):
```
#ghwg29So2jJ5EbsW,.list-card.rssapp-list-card.rss-app-hover-card:nth-child(1) > .list-card-content > .list-card-body > .list-card-summary > div:nth-child(2) > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]:nth-child(3)
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#ghwg29So2jJ5EbsW,.list-card.rssapp-list-card.rss-app-hover-card:nth-child(1) > .list-card-content > .list-card-body > .list-card-summary > div:nth-child(2) > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]:nth-child(3)')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/odva/
- https://oregon.gov/odva/Pages/default.aspx

---

#### Pattern 15: Affects 2 page(s) - 6 occurrence(s)

**Scanner**: axe
**Rule**: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**Issue**: Links must have discernible text

**HTML Pattern**:
```html
<a class="rssapp-card-social-i..." href="https://facebook.com..." target="_blank" rel="noopener noreferrer" aria-label="" style="background: rgb(60, ...">
```

**XPath** (use in browser DevTools):
```
#wLvAew1JsBC6qhOx,.RssGrid-col:nth-child(1) > .RssGrid-item:nth-child(1) > div > .rssapp-card-container.rssapp-card-container_modern.rss-app-hover-card > .rssapp-card > .rssapp-card-body > .rssapp-card-summary-container > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#wLvAew1JsBC6qhOx,.RssGrid-col:nth-child(1) > .RssGrid-item:nth-child(1) > div > .rssapp-card-container.rssapp-card-container_modern.rss-app-hover-card > .rssapp-card > .rssapp-card-body > .rssapp-card-summary-container > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]')`
5. The element will be highlighted

**Affected Pages**:
- https://oregon.gov/odva/
- https://oregon.gov/odva/Pages/default.aspx

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://oregon.gov/ | https://www.oregon.gov/Pages/index.aspx | OK | 200 | yes | 25527 | 0 | 0 | 0 | 0 | 72 | Skipped (not requested) |
| https://oregon.gov/pages/accessibility.aspx | https://www.oregon.gov/pages/accessibility.aspx | OK | 200 | yes | 10696 | 1 | 0 | 0 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: list |
| https://oregon.gov/pages/services.aspx | https://www.oregon.gov/pages/services.aspx | OK | 200 | yes | 14010 | 1 | 0 | 0 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
| https://oregon.gov/Pages/services.aspx | https://www.oregon.gov/Pages/services.aspx | OK | 200 | yes | 13877 | 1 | 0 | 0 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
| https://oregon.gov/pages/help.aspx | https://www.oregon.gov/pages/help.aspx | OK | 200 | yes | 11392 | 1 | 0 | 0 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
| https://oregon.gov/pages/supported-browsers.aspx | https://www.oregon.gov/pages/supported-browsers.aspx | OK | 200 | yes | 10429 | 2 | 0 | 0 | 0 | 10 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-valid-attr, color-contrast |
| https://oregon.gov/ODVA/Connect/Pages/Public-Records-Request.aspx | https://www.oregon.gov/ODVA/Connect/Pages/Public-Records-Request.aspx | OK | 200 | yes | 14972 | 6 | 0 | 0 | 0 | 35 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, list, region |
| https://oregon.gov/odva/Connect/Pages/Request-Speaker.aspx | https://www.oregon.gov/odva/Connect/Pages/Request-Speaker.aspx | OK | 200 | yes | 22628 | 6 | 0 | 0 | 0 | 28 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, label, region |
| https://oregon.gov/odva/Services/Pages/County-Services.aspx | https://www.oregon.gov/odva/Services/Pages/County-Services.aspx | OK | 200 | yes | 12800 | 5 | 0 | 0 | 0 | 28 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, region |
| https://oregon.gov/ODVA/Services/Pages/County-Veteran-Services-Offices.aspx | https://www.oregon.gov/ODVA/Services/Pages/County-Veteran-Services-Offices.aspx | OK | 200 | yes | 13795 | 6 | 0 | 0 | 0 | 117 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, link-in-text-block, region |
| https://oregon.gov/odva/Services/Pages/default.aspx | https://www.oregon.gov/odva/Services/Pages/default.aspx | OK | 200 | yes | 11230 | 5 | 0 | 0 | 0 | 26 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, region |
| https://oregon.gov/treasury/about-treasury/Pages/Invoice-Payments.aspx | https://www.oregon.gov/treasury/about-treasury/Pages/Invoice-Payments.aspx | OK | 200 | yes | 12403 | 2 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, heading-order |
| https://oregon.gov/treasury/public-financial-services/pages/default.aspx | https://www.oregon.gov/treasury/public-financial-services/pages/default.aspx | OK | 200 | yes | 12244 | 1 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role |
| https://oregon.gov/oha/HSD/OHP/pages/Apply.aspx | https://www.oregon.gov/oha/HSD/OHP/pages/Apply.aspx | OK | 200 | yes | 10410 | 3 | 0 | 0 | 0 | 14 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast, region |
| https://oregon.gov/boli | https://www.oregon.gov/boli/Pages/index.aspx | OK | 200 | yes | 10137 | 6 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-valid-attr-value, color-contrast, region |
| https://oregon.gov/newsroom | https://apps.oregon.gov/oregon-newsroom/or/posts | OK | 200 | yes | 11927 | 2 | 0 | 0 | 0 | 68 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: page-has-heading-one, region |
| https://oregon.gov/treasury | https://www.oregon.gov/treasury/Pages/index.aspx | OK | 200 | yes | 14328 | 3 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, page-has-heading-one |
| https://oregon.gov/osp/amberalert | https://www.oregon.gov/osp/amberalert/Pages/default.aspx | OK | 200 | yes | 11809 | 4 | 0 | 0 | 0 | 46 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, heading-order, list, region |
| https://oregon.gov/pages/agencies.aspx | https://www.oregon.gov/pages/agencies.aspx | OK | 200 | yes | 14207 | 1 | 0 | 0 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
| https://oregon.gov/Pages/agencies.aspx | https://www.oregon.gov/Pages/agencies.aspx | OK | 200 | yes | 14277 | 1 | 0 | 0 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
| https://oregon.gov/pages/government.aspx | https://www.oregon.gov/pages/government.aspx | OK | 200 | yes | 10596 | 0 | 0 | 0 | 0 | 15 | Skipped (not requested) |
| https://oregon.gov/pages/new-to-oregon.aspx | https://www.oregon.gov/pages/new-to-oregon.aspx | OK | 200 | yes | 10797 | 0 | 0 | 0 | 0 | 8 | Skipped (not requested) |
| https://oregon.gov/pages/terms-and-conditions.aspx | https://www.oregon.gov/pages/terms-and-conditions.aspx | OK | 200 | yes | 10418 | 0 | 0 | 0 | 0 | 8 | Skipped (not requested) |
| https://oregon.gov/odva/Resources/Pages/default.aspx | https://www.oregon.gov/odva/Resources/Pages/default.aspx | OK | 200 | yes | 11367 | 5 | 0 | 0 | 0 | 62 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, region |
| https://oregon.gov/odva/Resources/Pages/Family.aspx | https://www.oregon.gov/odva/Resources/Pages/Family.aspx | OK | 200 | yes | 15517 | 8 | 0 | 0 | 0 | 38 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, link-in-text-block, region |
| https://oregon.gov/gov | https://www.oregon.gov/gov/Pages/index.aspx | OK | 200 | yes | 13853 | 9 | 0 | 0 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-valid-attr-value |
| https://oregon.gov/odva/ | https://www.oregon.gov/odva/Pages/default.aspx | OK | 200 | yes | 15058 | 44 | 0 | 0 | 0 | 83 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, frame-title, image-redundant-alt, link-name, region |
| https://oregon.gov/realid | https://www.oregon.gov/ODOT/DMV/pages/realidtraveler.aspx | OK | 200 | yes | 11721 | 7 | 0 | 0 | 0 | 53 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-prohibited-attr, aria-valid-attr-value, button-name, heading-order, region |
| https://oregon.gov/dhs/assistance | https://www.oregon.gov/odhs/Pages/default.aspx | OK | 200 | yes | 16241 | 14 | 0 | 0 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast, page-has-heading-one, region |
| https://oregon.gov/oha/ph | https://www.oregon.gov/oha/ph/Pages/index.aspx | OK | 200 | yes | 10822 | 3 | 0 | 0 | 0 | 18 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-prohibited-attr, region |
| https://oregon.gov/oha/ph/diseasesconditions/chronicdisease/medicalmarijuanaprogram | https://www.oregon.gov/oha/ph/diseasesconditions/chronicdisease/medicalmarijuanaprogram/Pages/index.aspx | OK | 200 | yes | 10072 | 5 | 0 | 0 | 0 | 19 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast, region |
| https://oregon.gov/odva/Connect/Pages/Publications.aspx | https://www.oregon.gov/odva/Connect/Pages/Publications.aspx | OK | 200 | yes | 11215 | 5 | 0 | 0 | 0 | 33 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, region |
| https://oregon.gov/odva/Benefits/Pages/default.aspx | https://www.oregon.gov/odva/Benefits/Pages/default.aspx | OK | 200 | yes | 11683 | 5 | 0 | 0 | 0 | 86 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, region |
| https://oregon.gov/treasury/about-treasury/Pages/default.aspx | https://www.oregon.gov/treasury/about-treasury/Pages/default.aspx | OK | 200 | yes | 12315 | 1 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role |
| https://oregon.gov/odva/Connect/Pages/Connect.aspx | https://www.oregon.gov/odva/Connect/Pages/Connect.aspx | OK | 200 | yes | 12549 | 5 | 0 | 0 | 0 | 34 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, region |
| https://oregon.gov/odot/dmv/pages/offices/index.aspx | https://www.oregon.gov/odot/dmv/pages/offices/index.aspx | OK | 200 | yes | 10858 | 5 | 0 | 0 | 0 | 122 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-valid-attr-value, region |
| https://oregon.gov/treasury/financial-empowerment/Pages/default.aspx | https://www.oregon.gov/treasury/upward-oregon/pages/default.aspx | OK | 200 | yes | 12141 | 1 | 0 | 0 | 0 | 22 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role |
| https://oregon.gov/dsl/lands/pages/state-lands.aspx | https://www.oregon.gov/dsl/lands/pages/state-lands.aspx | OK | 200 | yes | 15881 | 3 | 0 | 0 | 0 | 56 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, page-has-heading-one, region |
| https://oregon.gov/odva/Pages/default.aspx | https://www.oregon.gov/odva/Pages/default.aspx | OK | 200 | yes | 14789 | 44 | 0 | 0 | 0 | 83 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, frame-title, image-redundant-alt, link-name, region |
| https://oregon.gov/treasury/invested-for-oregon/Pages/Oregon-Investment-Council.aspx | https://www.oregon.gov/treasury/invested-for-oregon/Pages/Oregon-Investment-Council.aspx | OK | 200 | yes | 14305 | 1 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role |
| https://oregon.gov/odot/dmv/pages/driverid/idget.aspx | https://www.oregon.gov/odot/dmv/pages/driverid/idget.aspx | OK | 200 | yes | 12006 | 6 | 0 | 0 | 0 | 61 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-valid-attr-value, list, region |
| https://oregon.gov/treasury/invested-for-oregon/Pages/Sustainable-Investing-governance.aspx | https://www.oregon.gov/treasury/invested-for-oregon/Pages/Sustainable-Investing-governance.aspx | OK | 200 | yes | 13920 | 11 | 0 | 0 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-prohibited-attr, button-name, frame-title |
| https://oregon.gov/treasury/invested-for-oregon/pages/default.aspx | https://www.oregon.gov/treasury/invested-for-oregon/pages/default.aspx | OK | 200 | yes | 12189 | 5 | 0 | 0 | 0 | 21 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast |
| https://oregon.gov/treasury/Pages/SiteMap.aspx | https://www.oregon.gov/treasury/Pages/SiteMap.aspx | OK | 200 | yes | 12338 | 1 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role |
| https://oregon.gov/treasury/invested-for-oregon/Pages/OPERF-Archive.aspx | https://www.oregon.gov/treasury/invested-for-oregon/Pages/OPERF-Archive.aspx | OK | 200 | yes | 11721 | 1 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role |
| https://oregon.gov/treasury/invested-for-oregon/Pages/Climate-Positive-Investing.aspx | https://www.oregon.gov/treasury/invested-for-oregon/Pages/Climate-Positive-Investing.aspx | OK | 200 | yes | 13829 | 11 | 0 | 0 | 0 | 23 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-prohibited-attr, button-name, frame-title |
| https://oregon.gov/treasury/Upward-Oregon/pages/default.aspx | https://www.oregon.gov/treasury/Upward-Oregon/pages/default.aspx | OK | 200 | yes | 12448 | 1 | 0 | 0 | 0 | 22 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role |
| https://oregon.gov/treasury/invested-for-oregon/Pages/default.aspx | https://www.oregon.gov/treasury/invested-for-oregon/Pages/default.aspx | OK | 200 | yes | 12066 | 5 | 0 | 0 | 0 | 21 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast |
| https://oregon.gov/osmb/boater-info/pages/boater-education-cards.aspx | https://www.oregon.gov/osmb/boater-info/pages/boater-education-cards.aspx | OK | 200 | yes | 16429 | 8 | 0 | 0 | 0 | 50 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, definition-list, heading-order, list, listitem, region |
| https://oregon.gov/treasury/Pages/About-Treasurer-Steiner.aspx | https://www.oregon.gov/treasury/Pages/About-Treasurer-Steiner.aspx | OK | 200 | yes | 11507 | 1 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role |
| https://oregon.gov/treasury/about-treasury/Pages/Budget.aspx | https://www.oregon.gov/treasury/about-treasury/Pages/Budget.aspx | OK | 200 | yes | 11716 | 2 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, heading-order |
| https://oregon.gov/treasury/news-data/Pages/default.aspx | https://www.oregon.gov/treasury/news-data/Pages/default.aspx | OK | 200 | yes | 14667 | 1 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role |
| https://oregon.gov/OHA/ERD/Pages/News-Releases.aspx | https://www.oregon.gov/OHA/ERD/Pages/News-Releases.aspx | OK | 200 | yes | 13438 | 2 | 0 | 0 | 0 | 11 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, region |
| https://oregon.gov/odva/agency-programs/Pages/default.aspx | https://www.oregon.gov/odva/agency-programs/Pages/default.aspx | OK | 200 | yes | 11822 | 6 | 0 | 0 | 0 | 65 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, heading-order, region |
| https://oregon.gov/treasury/about-treasury/Pages/Administrative-Rules.aspx | https://www.oregon.gov/treasury/about-treasury/Pages/Administrative-Rules.aspx | OK | 200 | yes | 12926 | 8 | 0 | 0 | 0 | 21 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-required-children, heading-order, nested-interactive |
| https://oregon.gov/treasury/unclaimed-property/Pages/default.aspx | https://www.oregon.gov/treasury/unclaimed-property/Pages/default.aspx | OK | 200 | yes | 12844 | 1 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role |
| https://oregon.gov/treasury/invested-for-oregon/Pages/Individual-Account-Program.aspx | https://www.oregon.gov/treasury/invested-for-oregon/Pages/Individual-Account-Program.aspx | OK | 200 | yes | 12606 | 3 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, heading-order |
| https://oregon.gov/treasury/oregon-bonds/pages/default.aspx | https://www.oregon.gov/treasury/oregon-bonds/pages/default.aspx | OK | 200 | yes | 12197 | 2 | 0 | 0 | 0 | 15 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast |
| https://oregon.gov/odva/Home-Loans/Pages/default.aspx | https://www.oregon.gov/odva/Home-Loans/Pages/default.aspx | OK | 200 | yes | 11564 | 5 | 0 | 0 | 0 | 27 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, region |
| https://oregon.gov/pages/search-results.aspx | https://www.oregon.gov/pages/search-results.aspx | OK | 200 | yes | 10675 | 2 | 0 | 0 | 0 | 12 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, heading-order |
| https://oregon.gov/ohcs/pages/oregon-bond-program-home-buying-resources.aspx | https://www.oregon.gov/ohcs/homeownership/pages/index.aspx | OK | 200 | yes | 16112 | 3 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, heading-order, region |
| https://oregon.gov/ccb/Pages/Consumer-Tools.aspx | https://www.oregon.gov/ccb/Pages/Consumer-Tools.aspx | OK | 200 | yes | 11480 | 2 | 0 | 0 | 0 | 59 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, region |
| https://oregon.gov/odva/Vets-Homes/Pages/default.aspx | https://www.oregon.gov/odva/Vets-Homes/Pages/default.aspx | OK | 200 | yes | 11457 | 6 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, heading-order, region |
| https://oregon.gov/treasury/invested-for-oregon/Pages/Performance-Holdings.aspx | https://www.oregon.gov/treasury/invested-for-oregon/Pages/Performance-Holdings.aspx | OK | 200 | yes | 14187 | 2 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, heading-order |
| https://oregon.gov/odot/dmv/pages/driverid/licenseget.aspx | https://www.oregon.gov/odot/dmv/pages/driverid/licenseget.aspx | OK | 200 | yes | 12248 | 7 | 0 | 0 | 0 | 79 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-valid-attr-value, heading-order, list, region |
| https://oregon.gov/treasury/news-data/pages/default.aspx | https://www.oregon.gov/treasury/news-data/pages/default.aspx | OK | 200 | yes | 14685 | 1 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role |
| https://oregon.gov/treasury/invested-for-oregon/Pages/Oregon-Intermediate-Term-Investments.aspx | https://www.oregon.gov/treasury/invested-for-oregon/Pages/Oregon-Intermediate-Term-Investments.aspx | OK | 200 | yes | 13002 | 3 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, heading-order, list |
| https://oregon.gov/odva/Connect/Pages/Careers-At-ODVA.aspx | https://www.oregon.gov/odva/Connect/Pages/Careers-At-ODVA.aspx | OK | 200 | yes | 11835 | 8 | 0 | 0 | 0 | 43 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, link-in-text-block, region |
| https://oregon.gov/boli/civil-rights/pages/default.aspx | https://www.oregon.gov/boli/civil-rights/pages/default.aspx | OK | 200 | yes | 10907 | 6 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-valid-attr-value, color-contrast, region |
| https://oregon.gov/pages/agencies.aspx?branch=Executive | https://www.oregon.gov/pages/agencies.aspx?branch=Executive | OK | 200 | yes | 14158 | 1 | 0 | 0 | 0 | 8 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
| https://oregon.gov/odva/pages/vetform.aspx | https://www.oregon.gov/odva/pages/vetform.aspx | OK | 200 | yes | 11784 | 5 | 0 | 0 | 0 | 36 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, region |
| https://oregon.gov/treasury/invested-for-oregon/Pages/Shareholder-Stewardship.aspx | https://www.oregon.gov/treasury/invested-for-oregon/Pages/Shareholder-Stewardship.aspx | OK | 200 | yes | 12184 | 2 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, heading-order |
| https://oregon.gov/ODVA/Connect/Pages/Careers-At-ODVA.aspx | https://www.oregon.gov/ODVA/Connect/Pages/Careers-At-ODVA.aspx | OK | 200 | yes | 12488 | 8 | 0 | 0 | 0 | 43 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, link-in-text-block, region |
| https://oregon.gov/treasury/about-treasury/Pages/Careers.aspx | https://www.oregon.gov/treasury/about-treasury/Pages/Careers.aspx | OK | 200 | yes | 11804 | 1 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role |
| https://oregon.gov/treasury/invested-for-oregon/Pages/OIC-Meeting-Archive.aspx | https://www.oregon.gov/treasury/invested-for-oregon/Pages/OIC-Meeting-Archive.aspx | OK | 200 | yes | 14329 | 2 | 0 | 0 | 0 | 15 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, color-contrast |
| https://oregon.gov/ODVA/Connect/Pages/Connect.aspx | https://www.oregon.gov/ODVA/Connect/Pages/Connect.aspx | OK | 200 | yes | 12164 | 5 | 0 | 0 | 0 | 34 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-dialog-name, color-contrast, region |
| https://oregon.gov/ohcs/pages/low_income_weatherization_assistance_oregon.aspx | https://www.oregon.gov/ohcs/energy-weatherization/pages/index.aspx | OK | 200 | yes | 16073 | 2 | 0 | 0 | 0 | 42 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, region |
| https://oregon.gov/treasury/pages/contact.aspx | https://www.oregon.gov/treasury/pages/contact.aspx | OK | 200 | yes | 12528 | 2 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, heading-order |
| https://oregon.gov/treasury/about-treasury/pages/default.aspx | https://www.oregon.gov/treasury/about-treasury/pages/default.aspx | OK | 200 | yes | 12203 | 1 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role |
| https://oregon.gov/treasury/Pages/index.aspx | https://www.oregon.gov/treasury/Pages/index.aspx | OK | 200 | yes | 14521 | 3 | 0 | 0 | 0 | 13 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, page-has-heading-one |
| https://oregon.gov/odot/dmv/pages/vehicle/titlereg.aspx | https://www.oregon.gov/odot/dmv/pages/vehicle/titlereg.aspx | OK | 200 | yes | 12524 | 13 | 0 | 0 | 0 | 78 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-role, aria-valid-attr-value, heading-order, list, region |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://oregon.gov/pages/accessibility.aspx

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `ul:nth-child(5)`

### https://oregon.gov/pages/services.aspx

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3 class="sr-only">Services List</h3>`
- XPath: `.container > h3`

### https://oregon.gov/Pages/services.aspx

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3 class="sr-only">Services List</h3>`
- XPath: `.container > h3`

### https://oregon.gov/pages/help.aspx

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3>Search Oregon.gov</h3>`
- XPath: `h3:nth-child(2)`

### https://oregon.gov/pages/supported-browsers.aspx

#### Rule: [aria-valid-attr](https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid names
- HTML: `<span aria-described-by="edgeDetail">Microsoft Edge*</span>`
- XPath: `span[aria-described-by="edgeDetail"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<b style="font-weight: bold;">                             Recommended <br>Version                         </b>`
- XPath: `.text-success > b`

### https://oregon.gov/ODVA/Connect/Pages/Public-Records-Request.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ol>`
- XPath: `#ctl00_MainContentPlaceHolder_PageContentPlaceHolder_RichHtmlField11__ControlWrapper_OregonRichHtmlField > ol`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/odva/Connect/Pages/Request-Speaker.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [label](https://dequeuniversity.com/rules/axe/4.11/label?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Form elements must have labels
- HTML: `<input type="file" name="formBuilderAttachments" multiple="" data-bind="attr: {id: $component.fileUploadElementId}" id="ec67735f-83d4-4337-ab57-f46df8624340">`
- XPath: `#ec67735f-83d4-4337-ab57-f46df8624340`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/odva/Services/Pages/County-Services.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/ODVA/Services/Pages/County-Veteran-Services-Offices.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="mailto:denisecody@coquilletribe.org">denisecody@coquilletribe.org</a>`
- XPath: `.odd:nth-child(7) > td:nth-child(3) > a:nth-child(4)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/odva/Services/Pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/treasury/about-treasury/Pages/Invoice-Payments.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3>             <a href="https://or.accessgov.com/treasury/Forms/Page/treasury/invoice-investments-reimbursable" target="_blank">Investment<br>Reimbursable Expenses</a></h3>`
- XPath: `article:nth-child(1) > h3`

### https://oregon.gov/treasury/public-financial-services/pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

### https://oregon.gov/oha/HSD/OHP/pages/Apply.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Apply at ONE.Oregon.gov</strong>`
- XPath: `.btn-warning > strong`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="oha-navbar-brand" href="/oha/">         <img src="/oha/Style%20Library/Images/OHA-Full-Color.svg" alt="Oregon Health Authority logo">     </a>`
- XPath: `.oha-navbar-brand`

### https://oregon.gov/boli

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-valid-attr-value](https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<div class="alert alert-warning alert-dismissible" aria-live="alert" role="alert">`
- XPath: `.alert-warning`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>BOLI protects all workers, regardless of immigration status.</strong>`
- XPath: `.alert-warning > strong`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>`
- XPath: `.ExternalClassE86D427BD981461280D1FCBE48259E3F > p`

**Failure 3:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/boli/workers/pages/immigrant-rights-on-the-job.aspx#%3a~%3atext=BOLI%20enforces%20civil%20rights%20protections%2ccolor%2c%20age%2c%20and%20gender.">here​</a>`
- XPath: `.ExternalClassE86D427BD981461280D1FCBE48259E3F > p > a`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="/boli/"> 	<img src="/boli/style%20library/images/oli-logo-blue-email.png" alt="OL&amp;I Logo" class="img-resonsive"></a>`
- XPath: `.or-navbar-brand`

### https://oregon.gov/newsroom

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Page should contain a level-one heading
- HTML: `<html lang="en" class="nr-admin-select-tenant" style="height: 100%;">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div b-ixk1guch9k="" class="col-md-6" style="margin-top:0.5em">`
- XPath: `.col-md-6[b-ixk1guch9k=""]:nth-child(1)`

### https://oregon.gov/treasury

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-us" class="js flexbox flexboxle..." xmlns:mso="urn:schemas-microsof..." xmlns:msdt="uuid:C2F41010-65B3-1..." style="height: 100%;">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-03-30
- Message: Page should contain a level-one heading
- HTML: `<html><head></head><body></body></html>`
- XPath: `iframe[name="faf247359e8b1f68c"]`

### https://oregon.gov/osp/amberalert

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3>`
- XPath: `#panel-fe808f44-44cc-47aa-94a6-2e7849fa98a2 > h3`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="list-unstyled">`
- XPath: `.ExternalClassFB637E2E3E9E49DCA8D4C666E2A71E60 > .list-unstyled`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/pages/agencies.aspx

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h4 class="or-portal-entity-card-heading">                         Accountancy, Board of                      </h4>`
- XPath: `a[href$="boa"] > .or-portal-entity-card-content > .or-portal-entity-card-heading`

### https://oregon.gov/Pages/agencies.aspx

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h4 class="or-portal-entity-card-heading">                         Accountancy, Board of                      </h4>`
- XPath: `a[href$="boa"] > .or-portal-entity-card-content > .or-portal-entity-card-heading`

### https://oregon.gov/odva/Resources/Pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/odva/Resources/Pages/Family.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/odva/Benefits/Pages/Healthcare.aspx">Healthcare</a>`
- XPath: `p:nth-child(7) > a`

**Failure 2:**
- First identified: 2026-03-30
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/odva/Benefits/Pages/Education.aspx">Education</a>`
- XPath: `p:nth-child(10) > a`

**Failure 3:**
- First identified: 2026-03-30
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/odva/Benefits/Pages/Burial.aspx">Burial</a>`
- XPath: `p:nth-child(13) > a`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/gov

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [aria-valid-attr-value](https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<a class="gov-carousel-sr-pause" href="#" data-bind="click: $component.pauseButtonClicked" aria-controls="#gov-carousel-content">`
- XPath: `.gov-carousel-sr-pause`

**Failure 2:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<button type="button" aria-controls="#gov-carousel-content" data-bind="click: $component.pauseButtonClicked, attr: {tabindex: $index() === $component.currentIndex ? 0 : -1}" tabindex="0">`
- XPath: `.gov-carousel-slide-active > .gov-carousel-pause > button[aria-controls="#gov-carousel-content"][type="button"]`

**Failure 3:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<a role="button" aria-controls="#gov-carousel-content" href="#" data-bind="css: {active: $component.currentIndex === $index()}, click: function() { $component.jumpToSlide($index()) }" class="active">`
- XPath: `.active`

**Failure 4:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<a role="button" aria-controls="#gov-carousel-content" href="#" data-bind="css: {active: $component.currentIndex === $index()}, click: function() { $component.jumpToSlide($index()) }">`
- XPath: `a[role="button"][aria-controls="#gov-carousel-content"][href="#"]:nth-child(2)`

**Failure 5:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<a role="button" aria-controls="#gov-carousel-content" href="#" data-bind="css: {active: $component.currentIndex === $index()}, click: function() { $component.jumpToSlide($index()) }">`
- XPath: `a[role="button"][aria-controls="#gov-carousel-content"][href="#"]:nth-child(3)`

*... and 3 more failures for this rule*

### https://oregon.gov/odva/

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Frames must have an accessible name
- HTML: `<iframe src="https://player.vimeo.com/video/1039812871?h=1d3bae2d5a" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>`
- XPath: `iframe[allow="autoplay; fullscreen"]`

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: Alternative text of images should not be repeated as text
- HTML: `<img class="img-fluid img-responsive" src="/ODVA/PublishingImages/Taskboxes/ODVATaskbox.jpg" alt="Connect With ODVA">`
- XPath: `img[alt="Connect With ODVA"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Links must have discernible text
- HTML: `<a class="rssapp-card-social-item" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnews.va.gov%2F145925%2Flive-whole-health-311-tips-healthier-workday%2F" target="_blank" rel="noopener noreferrer" aria-label="" style="background: rgb(60, 90, 154);">`
- XPath: `#ghwg29So2jJ5EbsW,.list-card.rssapp-list-card.rss-app-hover-card:nth-child(1) > .list-card-content > .list-card-body > .list-card-summary > div:nth-child(2) > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-30
- Message: Links must have discernible text
- HTML: `<a class="rssapp-card-social-i..." href="https://x.com/intent..." target="_blank" rel="noopener noreferrer" aria-label="" style="background: rgb(66, ...">`
- XPath: `#ghwg29So2jJ5EbsW,.list-card.rssapp-list-card.rss-app-hover-card:nth-child(1) > .list-card-content > .list-card-body > .list-card-summary > div:nth-child(2) > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]:nth-child(2)`

**Failure 3:**
- First identified: 2026-03-30
- Message: Links must have discernible text
- HTML: `<a class="rssapp-card-social-i..." href="https://www.linkedin..." target="_blank" rel="noopener noreferrer" aria-label="" style="background: linear-g...">`
- XPath: `#ghwg29So2jJ5EbsW,.list-card.rssapp-list-card.rss-app-hover-card:nth-child(1) > .list-card-content > .list-card-body > .list-card-summary > div:nth-child(2) > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]:nth-child(3)`

**Failure 4:**
- First identified: 2026-03-30
- Message: Links must have discernible text
- HTML: `<a class="rssapp-card-social-item" href="mailto:info@example.com?&subject=&body=https%3A%2F%2Fnews.va.gov%2F145925%2Flive-whole-health-311-tips-healthier-workday%2F" target="_blank" rel="noopener noreferrer" aria-label="" style="background: rgb(255, 0, 0);">`
- XPath: `#ghwg29So2jJ5EbsW,.list-card.rssapp-list-card.rss-app-hover-card:nth-child(1) > .list-card-content > .list-card-body > .list-card-summary > div:nth-child(2) > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]:nth-child(4)`

**Failure 5:**
- First identified: 2026-03-30
- Message: Links must have discernible text
- HTML: `<a class="rssapp-card-social-item" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnews.va.gov%2F145873%2Fwinners-2025-patient-experience-awards%2F" target="_blank" rel="noopener noreferrer" aria-label="" style="background: rgb(60, 90, 154);">`
- XPath: `#ghwg29So2jJ5EbsW,.list-card.rssapp-list-card.rss-app-hover-card:nth-child(2) > .list-card-content > .list-card-body > .list-card-summary > div:nth-child(2) > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]:nth-child(1)`

*... and 32 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/realid

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-small-mode" tabindex="" id="movie_player" data-version="/s/player/f85ea353/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `iframe[width="400"]`

#### Rule: [aria-valid-attr-value](https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<div class="alert alert-warning alert-dismissible" aria-live="alert" role="alert">`
- XPath: `.alert.alert-warning.alert-dismissible:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<div class="alert alert-warning alert-dismissible" aria-live="alert" role="alert">`
- XPath: `.alert.alert-warning.alert-dismissible:nth-child(2)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3>Get the REAL&nbsp;ID option next time you renew your license. Appointments may be available but are not required.</h3>`
- XPath: `#ctl00_ctl00_MainContentPlaceHolder_PageContentPlaceHolder_PageContentPlaceHolder_RichHtmlField1__ControlWrapper_OregonRichHtmlField > div > h3`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div id="welcome-popup">     Hi! I'm a virtual assistant.<br>How can I help you?   </div>`
- XPath: `#welcome-popup`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/dhs/assistance

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

**Failure 2:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h3 class="or-h4" data-bind="text: title">Opportunities to engage with ODHS</h3>`
- XPath: `.odhs-slide[aria-hidden="true"]:nth-child(3) > .odhs-featured-news-item > .or-h4[data-bind="text: title"]`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h4 class="or-h5" data-bind="text: subtitle">We want to hear from communities we serve</h4>`
- XPath: `.odhs-slide[aria-hidden="true"]:nth-child(3) > .odhs-featured-news-item > .or-h5[data-bind="text: subtitle"]`

**Failure 3:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>Visit our Community Engagement page&nbsp;to find ways you can share feedback ​with different program areas across ODHS.​</p>`
- XPath: `.ExternalClassFA0616A701A542C3BC474422741546FD > p`

**Failure 4:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h3 class="or-h4" data-bind="text: title">Opportunities to engage with ODHS</h3>`
- XPath: `.odhs-slide[aria-hidden="true"]:nth-child(3) > .odhs-featured-news-item > .or-h4[data-bind="text: title"]`

**Failure 5:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<h4 class="or-h5" data-bind="text: subtitle">We want to hear from communities we serve</h4>`
- XPath: `.odhs-slide[aria-hidden="true"]:nth-child(3) > .odhs-featured-news-item > .or-h5[data-bind="text: subtitle"]`

*... and 1 more failures for this rule*

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-us" class="js flexbox flexboxle..." style="height: 100%;">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-03-30
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-us" class="js flexbox flexboxle..." style="height: 100%;">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="odhs-navbar-brand" href="/odhs/">         <img src="/odhs/PublishingImages/odhs-logo-reverse.svg" alt="Oregon Department of Human Services">     </a>`
- XPath: `.odhs-navbar-brand`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<span class="sr-only">Search Site</span>`
- XPath: `.odhs-meganav-search > .sr-only`

**Failure 3:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="odhs-navbar-brand" href="/odhs/">         <img src="/odhs/PublishingImages/odhs-logo-reverse.svg" alt="Oregon Department of Human Services">     </a>`
- XPath: `.odhs-navbar-brand`

**Failure 4:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<span class="sr-only">Search Site</span>`
- XPath: `.odhs-meganav-search > .sr-only`

### https://oregon.gov/oha/ph

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-small-mode" tabindex="" id="movie_player" data-version="/s/player/ace4b2f8/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `iframe[width="560"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="oha-navbar-brand" href="/oha/">         <img src="/oha/Style%20Library/Images/OHA-Full-Color.svg" alt="Oregon Health Authority logo">     </a>`
- XPath: `.oha-navbar-brand`

### https://oregon.gov/oha/ph/diseasesconditions/chronicdisease/medicalmarijuanaprogram

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Sign-in online</strong>`
- XPath: `a[href$="ommpsystem.oregon.gov/"][target="_blank"]:nth-child(3) > strong`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Waiting for cards?</strong>`
- XPath: `tr:nth-child(2) > td[rowspan="1"][colspan="1"] > strong > a:nth-child(3) > strong`

**Failure 3:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>Questions?</strong>`
- XPath: `td:nth-child(2) > a:nth-child(3) > strong`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="oha-navbar-brand" href="/oha/">         <img src="/oha/Style%20Library/Images/OHA-Full-Color.svg" alt="Oregon Health Authority logo">     </a>`
- XPath: `.oha-navbar-brand`

### https://oregon.gov/odva/Connect/Pages/Publications.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/odva/Benefits/Pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/treasury/about-treasury/Pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

### https://oregon.gov/odva/Connect/Pages/Connect.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/odot/dmv/pages/offices/index.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [aria-valid-attr-value](https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<div class="alert alert-warning alert-dismissible" aria-live="alert" role="alert">`
- XPath: `.alert.alert-warning.alert-dismissible:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<div class="alert alert-warning alert-dismissible" aria-live="alert" role="alert">`
- XPath: `.alert.alert-warning.alert-dismissible:nth-child(2)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div id="welcome-popup">     Hi! I'm a virtual assistant.<br>How can I help you?   </div>`
- XPath: `#welcome-popup`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/treasury/financial-empowerment/Pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

### https://oregon.gov/dsl/lands/pages/state-lands.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Page should contain a level-one heading
- HTML: `<html lang="af" class=" js flexbox flexboxl..." style="height: 100%;">`
- XPath: `html`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/odva/Pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Frames must have an accessible name
- HTML: `<iframe src="https://player.vimeo.com/video/1039812871?h=1d3bae2d5a" frameborder="0" allow="autoplay; fullscreen" allowfullscreen=""></iframe>`
- XPath: `iframe[allow="autoplay; fullscreen"]`

#### Rule: [image-redundant-alt](https://dequeuniversity.com/rules/axe/4.11/image-redundant-alt?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: Alternative text of images should not be repeated as text
- HTML: `<img class="img-fluid img-responsive" src="/ODVA/PublishingImages/Taskboxes/ODVATaskbox.jpg" alt="Connect With ODVA">`
- XPath: `img[alt="Connect With ODVA"]`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious
**WCAG**: [SC 2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context), [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Links must have discernible text
- HTML: `<a class="rssapp-card-social-item" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnews.va.gov%2F145925%2Flive-whole-health-311-tips-healthier-workday%2F" target="_blank" rel="noopener noreferrer" aria-label="" style="background: rgb(60, 90, 154);">`
- XPath: `#ghwg29So2jJ5EbsW,.list-card.rssapp-list-card.rss-app-hover-card:nth-child(1) > .list-card-content > .list-card-body > .list-card-summary > div:nth-child(2) > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-30
- Message: Links must have discernible text
- HTML: `<a class="rssapp-card-social-i..." href="https://x.com/intent..." target="_blank" rel="noopener noreferrer" aria-label="" style="background: rgb(66, ...">`
- XPath: `#ghwg29So2jJ5EbsW,.list-card.rssapp-list-card.rss-app-hover-card:nth-child(1) > .list-card-content > .list-card-body > .list-card-summary > div:nth-child(2) > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]:nth-child(2)`

**Failure 3:**
- First identified: 2026-03-30
- Message: Links must have discernible text
- HTML: `<a class="rssapp-card-social-i..." href="https://www.linkedin..." target="_blank" rel="noopener noreferrer" aria-label="" style="background: linear-g...">`
- XPath: `#ghwg29So2jJ5EbsW,.list-card.rssapp-list-card.rss-app-hover-card:nth-child(1) > .list-card-content > .list-card-body > .list-card-summary > div:nth-child(2) > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]:nth-child(3)`

**Failure 4:**
- First identified: 2026-03-30
- Message: Links must have discernible text
- HTML: `<a class="rssapp-card-social-item" href="mailto:info@example.com?&subject=&body=https%3A%2F%2Fnews.va.gov%2F145925%2Flive-whole-health-311-tips-healthier-workday%2F" target="_blank" rel="noopener noreferrer" aria-label="" style="background: rgb(255, 0, 0);">`
- XPath: `#ghwg29So2jJ5EbsW,.list-card.rssapp-list-card.rss-app-hover-card:nth-child(1) > .list-card-content > .list-card-body > .list-card-summary > div:nth-child(2) > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]:nth-child(4)`

**Failure 5:**
- First identified: 2026-03-30
- Message: Links must have discernible text
- HTML: `<a class="rssapp-card-social-item" href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnews.va.gov%2F145873%2Fwinners-2025-patient-experience-awards%2F" target="_blank" rel="noopener noreferrer" aria-label="" style="background: rgb(60, 90, 154);">`
- XPath: `#ghwg29So2jJ5EbsW,.list-card.rssapp-list-card.rss-app-hover-card:nth-child(2) > .list-card-content > .list-card-body > .list-card-summary > div:nth-child(2) > .rssapp-card-social.rounded.small > .rssapp-card-social-item[aria-label=""][rel="noopener noreferrer"]:nth-child(1)`

*... and 32 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/treasury/invested-for-oregon/Pages/Oregon-Investment-Council.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

### https://oregon.gov/odot/dmv/pages/driverid/idget.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [aria-valid-attr-value](https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<div class="alert alert-warning alert-dismissible" aria-live="alert" role="alert">`
- XPath: `.alert.alert-warning.alert-dismissible:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<div class="alert alert-warning alert-dismissible" aria-live="alert" role="alert">`
- XPath: `.alert.alert-warning.alert-dismissible:nth-child(2)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `#ctl00_ctl00_MainContentPlaceHolder_PageContentPlaceHolder_PageContentPlaceHolder_RichHtmlField1__ControlWrapper_OregonRichHtmlField > ul:nth-child(6)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div id="welcome-popup">     Hi! I'm a virtual assistant.<br>How can I help you?   </div>`
- XPath: `#welcome-popup`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/treasury/invested-for-oregon/Pages/Sustainable-Investing-governance.aspx

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="panel-group" id="accordion" aria-multiselectable="true">`
- XPath: `.wrapper.center-block:nth-child(2) > .panel-group[aria-multiselectable="true"]`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="panel-group" id="accordion" aria-multiselectable="true">`
- XPath: `.wrapper.center-block:nth-child(3) > .panel-group[aria-multiselectable="true"]`

**Failure 3:**
- First identified: 2026-03-30
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="panel-group" id="accordion" aria-multiselectable="true">`
- XPath: `.wrapper.center-block:nth-child(4) > .panel-group[aria-multiselectable="true"]`

**Failure 4:**
- First identified: 2026-03-30
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="panel-group" id="accordion" aria-multiselectable="true">`
- XPath: `.wrapper.center-block:nth-child(5) > .panel-group[aria-multiselectable="true"]`

**Failure 5:**
- First identified: 2026-03-30
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="panel-group" id="accordion" aria-multiselectable="true">`
- XPath: `.wrapper.center-block:nth-child(6) > .panel-group[aria-multiselectable="true"]`

*... and 4 more failures for this rule*

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode" tabindex="" id="movie_player" data-version="/s/player/ace4b2f8/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `.iframe-sus-video`

### https://oregon.gov/treasury/invested-for-oregon/pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="text-link" href="/treasury/invested-for-oregon/pages/performance-holdings.aspx">Learn More</a>`
- XPath: `article:nth-child(1) > p:nth-child(4) > .text-link`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="text-link" href="/treasury/invested-for-oregon/pages/performance-holdings.aspx">Learn More</a>`
- XPath: `article:nth-child(2) > p:nth-child(4) > .text-link`

**Failure 3:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="text-link" href="/treasury/invested-for-oregon/pages/performance-holdings.aspx">Learn More</a>`
- XPath: `article:nth-child(3) > p:nth-child(4) > .text-link`

**Failure 4:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="text-link" href="https://viewpoint.glasslewis.com/wd/?siteId=OIC%20Main" target="_blank">Learn More</a>`
- XPath: `.text-link[target="_blank"]`

### https://oregon.gov/treasury/Pages/SiteMap.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

### https://oregon.gov/treasury/invested-for-oregon/Pages/OPERF-Archive.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

### https://oregon.gov/treasury/invested-for-oregon/Pages/Climate-Positive-Investing.aspx

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="panel-group" id="accordion" aria-multiselectable="true">`
- XPath: `.wrapper.center-block:nth-child(2) > .panel-group[aria-multiselectable="true"]`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="panel-group" id="accordion" aria-multiselectable="true">`
- XPath: `.wrapper.center-block:nth-child(3) > .panel-group[aria-multiselectable="true"]`

**Failure 3:**
- First identified: 2026-03-30
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="panel-group" id="accordion" aria-multiselectable="true">`
- XPath: `.wrapper.center-block:nth-child(4) > .panel-group[aria-multiselectable="true"]`

**Failure 4:**
- First identified: 2026-03-30
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="panel-group" id="accordion" aria-multiselectable="true">`
- XPath: `.wrapper.center-block:nth-child(5) > .panel-group[aria-multiselectable="true"]`

**Failure 5:**
- First identified: 2026-03-30
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="panel-group" id="accordion" aria-multiselectable="true">`
- XPath: `.wrapper.center-block:nth-child(6) > .panel-group[aria-multiselectable="true"]`

*... and 4 more failures for this rule*

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode" tabindex="" id="movie_player" data-version="/s/player/ace4b2f8/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `.iframe-sus-video`

### https://oregon.gov/treasury/Upward-Oregon/pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

### https://oregon.gov/treasury/invested-for-oregon/Pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="text-link" href="/treasury/invested-for-oregon/pages/performance-holdings.aspx">Learn More</a>`
- XPath: `article:nth-child(1) > p:nth-child(4) > .text-link`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="text-link" href="/treasury/invested-for-oregon/pages/performance-holdings.aspx">Learn More</a>`
- XPath: `article:nth-child(2) > p:nth-child(4) > .text-link`

**Failure 3:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="text-link" href="/treasury/invested-for-oregon/pages/performance-holdings.aspx">Learn More</a>`
- XPath: `article:nth-child(3) > p:nth-child(4) > .text-link`

**Failure 4:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="text-link" href="https://viewpoint.glasslewis.com/wd/?siteId=OIC%20Main" target="_blank">Learn More</a>`
- XPath: `.text-link[target="_blank"]`

### https://oregon.gov/osmb/boater-info/pages/boater-education-cards.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [definition-list](https://dequeuniversity.com/rules/axe/4.11/definition-list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements
- HTML: `<dl>`
- XPath: `dl`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3 class="ms-rteElement-Heading3">Here's who needs to take a boating safety course and carry a Boating Safety&nbsp;Education Card:<br></h3>`
- XPath: `.ms-rteElement-Heading3`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `#ctl00_MainContentPlaceHolder_PageContentPlaceHolder_RichHtmlField12__ControlWrapper_OregonRichHtmlField > ul:nth-child(3)`

#### Rule: [listitem](https://dequeuniversity.com/rules/axe/4.11/listitem?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><a href="https://oregon.gov/osmb/title-registration/Pages/Email-Marine-Board.aspx">General Agency Email</a> </li>`
- XPath: `dl > li:nth-child(4)`

**Failure 2:**
- First identified: 2026-03-30
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><a title="Report a Boater" href="https://oregon.gov/osmb/boater-info/Pages/Report-A-Boater.aspx">Report a Boater</a></li>`
- XPath: `dl > li:nth-child(5)`

**Failure 3:**
- First identified: 2026-03-30
- Message: <li> elements must be contained in a <ul> or <ol>
- HTML: `<li><a title="Turn In Poachers" href="https://www.protectoregonswildlife.com">Turn In Poachers</a></li>`
- XPath: `dl > li:nth-child(6)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/treasury/Pages/About-Treasurer-Steiner.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

### https://oregon.gov/treasury/about-treasury/Pages/Budget.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3>2023-25 Budget Request</h3>`
- XPath: `#ctl00_ctl00_MainContentPlaceHolder_PageContentPlaceHolder_PageContentPlaceHolder_RichHtmlField1__ControlWrapper_OregonRichHtmlField > div > h3`

### https://oregon.gov/treasury/news-data/Pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

### https://oregon.gov/OHA/ERD/Pages/News-Releases.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="oha-navbar-brand" href="/oha/">         <img src="/oha/Style%20Library/Images/OHA-Full-Color.svg" alt="Oregon Health Authority logo">     </a>`
- XPath: `.oha-navbar-brand`

### https://oregon.gov/odva/agency-programs/Pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h4 class="ms-rteElement-Heading4" style="text-decoration-line:underline;">Advocacy and Outreach&nbsp;Programs</h4>`
- XPath: `#ctl00_MainContentPlaceHolder_PageContentPlaceHolder_RichHtmlField1__ControlWrapper_OregonRichHtmlField > div:nth-child(3) > .ms-rteElement-Heading4`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/treasury/about-treasury/Pages/Administrative-Rules.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Certain ARIA roles must contain particular children
- HTML: `<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">`
- XPath: `#accordion`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3>Permanent Rulemaking in progress</h3>`
- XPath: `h3:nth-child(1)`

#### Rule: [nested-interactive](https://dequeuniversity.com/rules/axe/4.11/nested-interactive?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Interactive controls must not be nested
- HTML: `<div class="panel-heading" role="tab" id="heading6">`
- XPath: `.panel.panel-default:nth-child(2) > .panel-heading[role="tab"]`

**Failure 2:**
- First identified: 2026-03-30
- Message: Interactive controls must not be nested
- HTML: `<div class="panel-heading" role="tab" id="heading6">`
- XPath: `.panel.panel-default:nth-child(7) > .panel-heading[role="tab"]`

**Failure 3:**
- First identified: 2026-03-30
- Message: Interactive controls must not be nested
- HTML: `<div class="panel-heading" role="tab" id="heading3">`
- XPath: `#heading3`

**Failure 4:**
- First identified: 2026-03-30
- Message: Interactive controls must not be nested
- HTML: `<div class="panel-heading" role="tab" id="heading4">`
- XPath: `#heading4`

**Failure 5:**
- First identified: 2026-03-30
- Message: Interactive controls must not be nested
- HTML: `<div class="panel-heading" role="tab" id="heading0">`
- XPath: `#heading0`

### https://oregon.gov/treasury/unclaimed-property/Pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

### https://oregon.gov/treasury/invested-for-oregon/Pages/Individual-Account-Program.aspx

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="panel-group" id="accordion" aria-multiselectable="true">`
- XPath: `#accordion`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3>What are Target-Date Funds?<br></h3>`
- XPath: `#ctl00_ctl00_MainContentPlaceHolder_PageContentPlaceHolder_PageContentPlaceHolder_RichHtmlField11__ControlWrapper_OregonRichHtmlField > h3`

### https://oregon.gov/treasury/oregon-bonds/pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a class="text-link" href="https://bondtracker.oregon.gov/calendar" target="_blank">Learn More</a>`
- XPath: `.text-link`

### https://oregon.gov/odva/Home-Loans/Pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/pages/search-results.aspx

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="or-portal-search-powered-by-logo">                     Powered by <img src="https://www.google.com/cse/static/images/1x/googlelogo_grey_46x15dp.png" alt="Google"> Custom Search                 </div>`
- XPath: `.or-portal-search-powered-by-logo`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3 class="sr-only">Search Results</h3>`
- XPath: `.container > h3`

### https://oregon.gov/ohcs/pages/oregon-bond-program-home-buying-resources.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3 class="card-title text-xs-center text-center or-taskbox-title"> 					Homebuyers 				</h3>`
- XPath: `#ctl00_ctl00_ctl40_g_da6167bf_e90e_45b0_acd4_b81fb548b68d > .or-taskbox.card.panel > .card-img-top.or-taskbox-image > .card-title.text-xs-center.or-taskbox-title`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="ohcs-navbar-brand" href="/ohcs/"><img src="/ohcs/PublishingImages/OCHS-logo-web.png" alt="Oregon Housing and Community Services"></a>`
- XPath: `.ohcs-navbar-brand`

### https://oregon.gov/ccb/Pages/Consumer-Tools.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/odva/Vets-Homes/Pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3>Welcome to the Place Where Honor Lives<br></h3>`
- XPath: `#ctl00_MainContentPlaceHolder_PageContentPlaceHolder_RichHtmlField1__ControlWrapper_OregonRichHtmlField > h3`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/treasury/invested-for-oregon/Pages/Performance-Holdings.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3 id="OPERF">          <span style="font-size:2rem;">Oregon Public Employees Retirement Fund</span><br></h3>`
- XPath: `#OPERF`

### https://oregon.gov/odot/dmv/pages/driverid/licenseget.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [aria-valid-attr-value](https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<div class="alert alert-warning alert-dismissible" aria-live="alert" role="alert">`
- XPath: `.alert.alert-warning.alert-dismissible:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<div class="alert alert-warning alert-dismissible" aria-live="alert" role="alert">`
- XPath: `.alert.alert-warning.alert-dismissible:nth-child(2)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h4>`
- XPath: `#panel-new > h4`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `#ctl00_ctl00_MainContentPlaceHolder_PageContentPlaceHolder_PageContentPlaceHolder_RichHtmlField1__ControlWrapper_OregonRichHtmlField > ul:nth-child(2)`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div id="welcome-popup">     Hi! I'm a virtual assistant.<br>How can I help you?   </div>`
- XPath: `#welcome-popup`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/treasury/news-data/pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

### https://oregon.gov/treasury/invested-for-oregon/Pages/Oregon-Intermediate-Term-Investments.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3 id="OLGIF">For Local Government: Oregon Local Government Intermediate Fund (OLGIF)<br><br></h3>`
- XPath: `#OLGIF`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `ul:nth-child(41)`

### https://oregon.gov/odva/Connect/Pages/Careers-At-ODVA.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/pers/mem/pages/oregon-savings-growth-plan.aspx?utm_source=pers&amp;utm_medium=egov_redirect&amp;utm_campaign=https%3a//www.oregon.gov/pers/osgp/pages/index.aspx" target="_blank">deferred compensation savings program</a>`
- XPath: `li:nth-child(5) > a[target="_blank"]`

**Failure 2:**
- First identified: 2026-03-30
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="mailto:human.resources@ODVA.oregon.gov" target="_blank">human.resources@ODVA.oregon.gov</a>`
- XPath: `p:nth-child(16) > a[target="_blank"]`

**Failure 3:**
- First identified: 2026-03-30
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="mailto:human.resources@ODVA.oregon.gov" target="_blank">human.resources@ODVA.oregon.gov</a>`
- XPath: `#ctl00_MainContentPlaceHolder_PageContentPlaceHolder_RichHtmlField5__ControlWrapper_OregonRichHtmlField > p:nth-child(6) > a[target="_blank"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/boli/civil-rights/pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-valid-attr-value](https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<div class="alert alert-warning alert-dismissible" aria-live="alert" role="alert">`
- XPath: `.alert-warning`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<strong>BOLI protects all workers, regardless of immigration status.</strong>`
- XPath: `.alert-warning > strong`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<p>`
- XPath: `.ExternalClassE86D427BD981461280D1FCBE48259E3F > p`

**Failure 3:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<a href="/boli/workers/pages/immigrant-rights-on-the-job.aspx#%3a~%3atext=BOLI%20enforces%20civil%20rights%20protections%2ccolor%2c%20age%2c%20and%20gender.">here​</a>`
- XPath: `.ExternalClassE86D427BD981461280D1FCBE48259E3F > p > a`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="/boli/"> 	<img src="/boli/style%20library/images/oli-logo-blue-email.png" alt="OL&amp;I Logo" class="img-resonsive"></a>`
- XPath: `.or-navbar-brand`

### https://oregon.gov/pages/agencies.aspx?branch=Executive

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h4 class="or-portal-entity-card-heading">                         Accountancy, Board of                      </h4>`
- XPath: `a[href$="boa"] > .or-portal-entity-card-content > .or-portal-entity-card-heading`

### https://oregon.gov/odva/pages/vetform.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/treasury/invested-for-oregon/Pages/Shareholder-Stewardship.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3 class="sm-feature-title" style="color: white;">Investing Responsibly To Protect Beneficiaries<br></h3>`
- XPath: `.sm-feature-title`

### https://oregon.gov/ODVA/Connect/Pages/Careers-At-ODVA.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [link-in-text-block](https://dequeuniversity.com/rules/axe/4.11/link-in-text-block?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="/pers/mem/pages/oregon-savings-growth-plan.aspx?utm_source=pers&amp;utm_medium=egov_redirect&amp;utm_campaign=https%3a//www.oregon.gov/pers/osgp/pages/index.aspx" target="_blank">deferred compensation savings program</a>`
- XPath: `li:nth-child(5) > a[target="_blank"]`

**Failure 2:**
- First identified: 2026-03-30
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="mailto:human.resources@ODVA.oregon.gov" target="_blank">human.resources@ODVA.oregon.gov</a>`
- XPath: `p:nth-child(16) > a[target="_blank"]`

**Failure 3:**
- First identified: 2026-03-30
- Message: Links must be distinguishable without relying on color
- HTML: `<a href="mailto:human.resources@ODVA.oregon.gov" target="_blank">human.resources@ODVA.oregon.gov</a>`
- XPath: `#ctl00_MainContentPlaceHolder_PageContentPlaceHolder_RichHtmlField5__ControlWrapper_OregonRichHtmlField > p:nth-child(6) > a[target="_blank"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/treasury/about-treasury/Pages/Careers.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

### https://oregon.gov/treasury/invested-for-oregon/Pages/OIC-Meeting-Archive.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<td role="cell" style="width:40%;">Cancelled Meeting: August 7, 2019</td>`
- XPath: `tr:nth-child(16) > td:nth-child(1)`

### https://oregon.gov/ODVA/Connect/Pages/Connect.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [aria-dialog-name](https://dequeuniversity.com/rules/axe/4.11/aria-dialog-name?application=playwright)
**Impact**: serious

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA dialog and alertdialog nodes should have an accessible name
- HTML: `<div id="prefix-overlay-outer" tabindex="0" role="dialog" aria-modal="true" aria-describedby="prefix-overlay-step1" style="height: 340px;">`
- XPath: `#prefix-overlay-outer`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-dismiss" id="prefix-dismissButton">No Thanks</button>`
- XPath: `#prefix-dismissButton`

**Failure 2:**
- First identified: 2026-03-30
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="prefix-overlay-action-later" id="prefix-laterButton">Remind Me Later</button>`
- XPath: `#prefix-laterButton`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

### https://oregon.gov/ohcs/pages/low_income_weatherization_assistance_oregon.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="ohcs-navbar-brand" href="/ohcs/"><img src="/ohcs/PublishingImages/OCHS-logo-web.png" alt="Oregon Housing and Community Services"></a>`
- XPath: `.ohcs-navbar-brand`

### https://oregon.gov/treasury/pages/contact.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h3>Office Locations<br></h3>`
- XPath: `#ctl00_ctl00_MainContentPlaceHolder_PageContentPlaceHolder_PageContentPlaceHolder_RichHtmlField1__ControlWrapper_OregonRichHtmlField > h3:nth-child(1)`

### https://oregon.gov/treasury/about-treasury/pages/default.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

### https://oregon.gov/treasury/Pages/index.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[aria-label="Section 508 Hidden Submit"]`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Page should contain a level-one heading
- HTML: `<html lang="en-us" class="js flexbox flexboxle..." xmlns:mso="urn:schemas-microsof..." xmlns:msdt="uuid:C2F41010-65B3-1..." style="height: 100%;">`
- XPath: `html`

**Failure 2:**
- First identified: 2026-03-30
- Message: Page should contain a level-one heading
- HTML: `<html><head></head><body></body></html>`
- XPath: `iframe[name="fdfcfc9d0ef1f9b59"]`

### https://oregon.gov/odot/dmv/pages/vehicle/titlereg.aspx

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA role should be appropriate for the element
- HTML: `<button class="sr-only" disabled="" type="submit" role="region" aria-label="Section 508 Hidden Submit">Hidden Submit</button>`
- XPath: `button[type="submit"]`

#### Rule: [aria-valid-attr-value](https://dequeuniversity.com/rules/axe/4.11/aria-valid-attr-value?application=playwright)
**Impact**: critical
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<div class="alert alert-warning alert-dismissible" aria-live="alert" role="alert">`
- XPath: `.alert.alert-warning.alert-dismissible:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-30
- Message: ARIA attributes must conform to valid values
- HTML: `<div class="alert alert-warning alert-dismissible" aria-live="alert" role="alert">`
- XPath: `.alert.alert-warning.alert-dismissible:nth-child(2)`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h4 class="ms-rteElement-Heading4">Use the instructions above,     <strong>except</strong> if you need to:<br></h4>`
- XPath: `.ms-rteElement-Heading4:nth-child(1)`

**Failure 2:**
- First identified: 2026-03-30
- Message: Heading levels should only increase by one
- HTML: `<h4 class="ms-rteElement-Heading4" style="font-family:&quot;helvetica neue&quot;, helvetica, arial, sans-serif;color:#333333;">How to Submit Your Transaction<br></h4>`
- XPath: `.ms-rteElement-Heading4:nth-child(4)`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships) (Level A)

**Failure 1:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ol>`
- XPath: `div:nth-child(7) > ol`

**Failure 2:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `div:nth-child(7) > ol > ul`

**Failure 3:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>`
- XPath: `#ctl00_ctl00_MainContentPlaceHolder_PageContentPlaceHolder_PageContentPlaceHolder_RichHtmlField12__ControlWrapper_OregonRichHtmlField > div:nth-child(5) > ul`

**Failure 4:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>Oregon DMV</ul>`
- XPath: `ul > ul:nth-child(3)`

**Failure 5:**
- First identified: 2026-03-30
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul>1905 Lana Ave NE</ul>`
- XPath: `ul > ul:nth-child(4)`

*... and 1 more failures for this rule*

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<div id="welcome-popup">     Hi! I'm a virtual assistant.<br>How can I help you?   </div>`
- XPath: `#welcome-popup`

**Failure 2:**
- First identified: 2026-03-30
- Message: All page content should be contained by landmarks
- HTML: `<a class="or-navbar-brand" href="http://www.oregon.gov">`
- XPath: `.or-navbar-brand`

