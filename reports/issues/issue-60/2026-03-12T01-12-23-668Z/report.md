# Scan Report: Ottawa.ca —

- Issue: https://github.com/mgifford/open-scans/issues/60
- Submitted by: mgifford
- Scanned at: 2026-03-12T01:11:27.351Z
- Engines used: ALFA, AXE
- Scan duration: 3.4 minutes
- Total URLs submitted: 53
- Accepted public URLs: 53
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 1643 passed, 530 failed, 53 cantTell, 4187 inapplicable
- axe outcomes: 2544 passed, 477 failed, 53 cantTell, 3922 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 212

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://ottawa.ca/) | 9 | 6 | **15** | https://ottawa.ca/ |
| [View Page](https://ottawa.ca/en/terms-use/accessibility) | 9 | 6 | **15** | https://ottawa.ca/en/terms-use/accessibility |
| [View Page](https://ottawa.ca/en/family-and-social-services) | 9 | 6 | **15** | https://ottawa.ca/en/family-and-social-services |
| [View Page](https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person) | 9 | 6 | **15** | https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person |
| [View Page](https://ottawa.ca/en/client-services/city-ottawa-client-service-centres) | 9 | 6 | **15** | https://ottawa.ca/en/client-services/city-ottawa-client-service-centres |
| [View Page](https://ottawa.ca/en/3-1-1/report-or-request/garbage-and-recycling) | 9 | 6 | **15** | https://ottawa.ca/en/3-1-1/report-or-request/garbage-and-recycling |
| [View Page](https://ottawa.ca/en/3-1-1/report-or-request/parking) | 9 | 6 | **15** | https://ottawa.ca/en/3-1-1/report-or-request/parking |
| [View Page](https://ottawa.ca/en/3-1-1/report-or-request/property-damage-or-maintenance) | 9 | 6 | **15** | https://ottawa.ca/en/3-1-1/report-or-request/property-damage-or-maintenance |
| [View Page](https://ottawa.ca/en) | 9 | 6 | **15** | https://ottawa.ca/en |
| [View Page](https://ottawa.ca/fr) | 9 | 6 | **15** | https://ottawa.ca/fr |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R1](https://alfa.siteimprove.com/rules/sia-r1): id attributes are unique within the document | **53** of 53 | [View Rule](https://alfa.siteimprove.com/rules/sia-r1) |
| [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13) | **53** of 53 | [View Rule](https://alfa.siteimprove.com/rules/sia-r13) |
| [SIA-R4](https://alfa.siteimprove.com/rules/sia-r4): Page has a descriptive title | **53** of 53 | [View Rule](https://alfa.siteimprove.com/rules/sia-r4) |
| [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59) | **53** of 53 | [View Rule](https://alfa.siteimprove.com/rules/sia-r59) |
| [SIA-R66](https://alfa.siteimprove.com/rules/sia-r66): Text has enhanced contrast with its background | **53** of 53 | [View Rule](https://alfa.siteimprove.com/rules/sia-r66) |
| [SIA-R69](https://alfa.siteimprove.com/rules/sia-r69): Text has sufficient contrast with its background | **53** of 53 | [View Rule](https://alfa.siteimprove.com/rules/sia-r69) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| color-contrast | **53** of 53 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| document-title | **53** of 53 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/document-title) |
| frame-title | **53** of 53 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/frame-title) |
| html-has-lang | **53** of 53 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/html-has-lang) |
| landmark-one-main | **53** of 53 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-one-main) |
| page-has-heading-one | **53** of 53 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/page-has-heading-one) |
| region | **53** of 53 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 53 page(s) - 53 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)
**Issue**: The `lang` attribute is either missing, empty, or only whitespace

**HTML Pattern**:
```html
<html style="height:100%">...</html>
```

**XPath** (use in browser DevTools):
```
/html
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/html')`
5. The element will be highlighted

**Affected Pages**:
- https://ottawa.ca/
- https://ottawa.ca/en/terms-use/accessibility
- https://ottawa.ca/en/family-and-social-services
- https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person
- https://ottawa.ca/en/client-services/city-ottawa-client-service-centres
- *...and 48 more page(s)*

---

#### Pattern 2: Affects 53 page(s) - 53 occurrence(s)

**Scanner**: axe
**Rule**: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious
**Issue**: Documents must have <title> element to aid in navigation

**HTML Pattern**:
```html
<html style="height:100%">
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
- https://ottawa.ca/
- https://ottawa.ca/en/terms-use/accessibility
- https://ottawa.ca/en/family-and-social-services
- https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person
- https://ottawa.ca/en/client-services/city-ottawa-client-service-centres
- *...and 48 more page(s)*

---

#### Pattern 3: Affects 53 page(s) - 53 occurrence(s)

**Scanner**: axe
**Rule**: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious
**Issue**: Frames must have an accessible name

**HTML Pattern**:
```html
<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">
```

**XPath** (use in browser DevTools):
```
#main-iframe
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#main-iframe')`
5. The element will be highlighted

**Affected Pages**:
- https://ottawa.ca/
- https://ottawa.ca/en/terms-use/accessibility
- https://ottawa.ca/en/family-and-social-services
- https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person
- https://ottawa.ca/en/client-services/city-ottawa-client-service-centres
- *...and 48 more page(s)*

---

#### Pattern 4: Affects 53 page(s) - 53 occurrence(s)

**Scanner**: axe
**Rule**: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious
**Issue**: <html> element must have a lang attribute

**HTML Pattern**:
```html
<html style="height:100%">
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
- https://ottawa.ca/
- https://ottawa.ca/en/terms-use/accessibility
- https://ottawa.ca/en/family-and-social-services
- https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person
- https://ottawa.ca/en/client-services/city-ottawa-client-service-centres
- *...and 48 more page(s)*

---

#### Pattern 5: Affects 53 page(s) - 53 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate
**Issue**: Document should have one main landmark

**HTML Pattern**:
```html
<html style="height:100%">
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
- https://ottawa.ca/
- https://ottawa.ca/en/terms-use/accessibility
- https://ottawa.ca/en/family-and-social-services
- https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person
- https://ottawa.ca/en/client-services/city-ottawa-client-service-centres
- *...and 48 more page(s)*

---

#### Pattern 6: Affects 53 page(s) - 53 occurrence(s)

**Scanner**: axe
**Rule**: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate
**Issue**: Document should have one main landmark

**HTML Pattern**:
```html
<html lang="en">
```

**XPath** (use in browser DevTools):
```
#main-iframe
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#main-iframe')`
5. The element will be highlighted

**Affected Pages**:
- https://ottawa.ca/
- https://ottawa.ca/en/terms-use/accessibility
- https://ottawa.ca/en/family-and-social-services
- https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person
- https://ottawa.ca/en/client-services/city-ottawa-client-service-centres
- *...and 48 more page(s)*

---

#### Pattern 7: Affects 53 page(s) - 53 occurrence(s)

**Scanner**: axe
**Rule**: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate
**Issue**: Page should contain a level-one heading

**HTML Pattern**:
```html
<html style="height:100%">
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
- https://ottawa.ca/
- https://ottawa.ca/en/terms-use/accessibility
- https://ottawa.ca/en/family-and-social-services
- https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person
- https://ottawa.ca/en/client-services/city-ottawa-client-service-centres
- *...and 48 more page(s)*

---

#### Pattern 8: Affects 53 page(s) - 53 occurrence(s)

**Scanner**: axe
**Rule**: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate
**Issue**: Page should contain a level-one heading

**HTML Pattern**:
```html
<html lang="en">
```

**XPath** (use in browser DevTools):
```
#main-iframe
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#main-iframe')`
5. The element will be highlighted

**Affected Pages**:
- https://ottawa.ca/
- https://ottawa.ca/en/terms-use/accessibility
- https://ottawa.ca/en/family-and-social-services
- https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person
- https://ottawa.ca/en/client-services/city-ottawa-client-service-centres
- *...and 48 more page(s)*

---

#### Pattern 9: Affects 53 page(s) - 53 occurrence(s)

**Scanner**: axe
**Rule**: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate
**Issue**: All page content should be contained by landmarks

**HTML Pattern**:
```html
<div class="container">
```

**XPath** (use in browser DevTools):
```
#main-iframe
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#main-iframe')`
5. The element will be highlighted

**Affected Pages**:
- https://ottawa.ca/
- https://ottawa.ca/en/terms-use/accessibility
- https://ottawa.ca/en/family-and-social-services
- https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person
- https://ottawa.ca/en/client-services/city-ottawa-client-service-centres
- *...and 48 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://ottawa.ca/ | https://ottawa.ca/ | FAIL | 403 | no | 4619 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/terms-use/accessibility | https://ottawa.ca/en/terms-use/accessibility | FAIL | 403 | no | 3970 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/family-and-social-services | https://ottawa.ca/en/family-and-social-services | FAIL | 403 | no | 4137 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person | https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person | FAIL | 403 | no | 4023 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/client-services/city-ottawa-client-service-centres | https://ottawa.ca/en/client-services/city-ottawa-client-service-centres | FAIL | 403 | no | 3944 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/3-1-1/report-or-request/garbage-and-recycling | https://ottawa.ca/en/3-1-1/report-or-request/garbage-and-recycling | FAIL | 403 | no | 3972 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/3-1-1/report-or-request/parking | https://ottawa.ca/en/3-1-1/report-or-request/parking | FAIL | 403 | no | 3881 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/3-1-1/report-or-request/property-damage-or-maintenance | https://ottawa.ca/en/3-1-1/report-or-request/property-damage-or-maintenance | FAIL | 403 | no | 3931 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en | https://ottawa.ca/en | FAIL | 403 | no | 3961 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/fr | https://ottawa.ca/fr | FAIL | 403 | no | 3926 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/3-1-1 | https://ottawa.ca/en/3-1-1 | FAIL | 403 | no | 3941 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/arts-heritage-and-events | https://ottawa.ca/en/arts-heritage-and-events | FAIL | 403 | no | 3901 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/fr/form/feedback | https://ottawa.ca/fr/form/feedback | FAIL | 403 | no | 3923 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/fr/forms/feedback | https://ottawa.ca/fr/forms/feedback | FAIL | 403 | no | 3851 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/fr/3-1-1/signaler-ou-demander/dechets-et-recyclage | https://ottawa.ca/fr/3-1-1/signaler-ou-demander/dechets-et-recyclage | FAIL | 403 | no | 4200 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/fr/3-1-1/signaler-ou-demander/entretien-de-propriete | https://ottawa.ca/fr/3-1-1/signaler-ou-demander/entretien-de-propriete | FAIL | 403 | no | 4039 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/fr/3-1-1/signaler-ou-demander/entretien-des-routes-et-trottoirs | https://ottawa.ca/fr/3-1-1/signaler-ou-demander/entretien-des-routes-et-trottoirs | FAIL | 403 | no | 3906 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/recreation-and-parks | https://ottawa.ca/en/recreation-and-parks | FAIL | 403 | no | 3933 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/planning-development-and-construction | https://ottawa.ca/en/planning-development-and-construction | FAIL | 403 | no | 3896 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/terms-use/privacy | https://ottawa.ca/en/terms-use/privacy | FAIL | 403 | no | 3927 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/city-hall/city-news/newsroom/was-ottawa-1826-just-wild-west | https://ottawa.ca/en/city-hall/city-news/newsroom/was-ottawa-1826-just-wild-west | FAIL | 403 | no | 4031 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/city-hall/city-news/newsroom/complete-your-vacant-unit-tax-declaration-march-19 | https://ottawa.ca/en/city-hall/city-news/newsroom/complete-your-vacant-unit-tax-declaration-march-19 | FAIL | 403 | no | 3954 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/node/3000156 | https://ottawa.ca/en/node/3000156 | FAIL | 403 | no | 3906 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/node/3000146 | https://ottawa.ca/en/node/3000146 | FAIL | 403 | no | 4315 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/garbage-and-recycling | https://ottawa.ca/en/garbage-and-recycling | FAIL | 403 | no | 3852 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/city-hall/council-committees-and-boards/agendas-minutes-and-videos | https://ottawa.ca/en/city-hall/council-committees-and-boards/agendas-minutes-and-videos | FAIL | 403 | no | 3858 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/health-and-public-safety | https://ottawa.ca/en/health-and-public-safety | FAIL | 403 | no | 3897 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/terms-use/disclaimer | https://ottawa.ca/en/terms-use/disclaimer | FAIL | 403 | no | 4071 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/city-hall/city-news/newsroom/your-waste-collection-day-may-change-starting-march-30 | https://ottawa.ca/en/city-hall/city-news/newsroom/your-waste-collection-day-may-change-starting-march-30 | FAIL | 403 | no | 3933 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/forms/feedback | https://ottawa.ca/en/forms/feedback | FAIL | 403 | no | 3865 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/city-hall/city-news/newsroom/city-seeking-public-input-commemorative-naming-proposals-1 | https://ottawa.ca/en/city-hall/city-news/newsroom/city-seeking-public-input-commemorative-naming-proposals-1 | FAIL | 403 | no | 3885 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/living-ottawa | https://ottawa.ca/en/living-ottawa | FAIL | 403 | no | 3935 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/node/3000176 | https://ottawa.ca/en/node/3000176 | FAIL | 403 | no | 3774 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/mayor-and-city-councillors | https://ottawa.ca/en/mayor-and-city-councillors | FAIL | 403 | no | 3843 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/node/3000126 | https://ottawa.ca/en/node/3000126 | FAIL | 403 | no | 3700 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/city-hall/city-news/newsroom/celebrating-black-history-month-ottawa | https://ottawa.ca/en/city-hall/city-news/newsroom/celebrating-black-history-month-ottawa | FAIL | 403 | no | 3728 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/city-hall/council-committees-and-boards/committees-and-boards | https://ottawa.ca/en/city-hall/council-committees-and-boards/committees-and-boards | FAIL | 403 | no | 3728 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/business | https://ottawa.ca/en/business | FAIL | 403 | no | 3731 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/mayors-corner | https://ottawa.ca/en/mayors-corner | FAIL | 403 | no | 3961 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/city-hall/city-news/protocols | https://ottawa.ca/en/city-hall/city-news/protocols | FAIL | 403 | no | 3695 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/city-hall/city-news/newsroom/para-transpo-talk-sessions-march-2-4 | https://ottawa.ca/en/city-hall/city-news/newsroom/para-transpo-talk-sessions-march-2-4 | FAIL | 403 | no | 3741 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/city-hall | https://ottawa.ca/en/city-hall | FAIL | 403 | no | 3757 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/fr/3-1-1/signaler-ou-demander/stationnement | https://ottawa.ca/fr/3-1-1/signaler-ou-demander/stationnement | FAIL | 403 | no | 3758 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/city-hall/city-news/newsroom/make-difference-where-you-live-become-waste-reduction-champion-0 | https://ottawa.ca/en/city-hall/city-news/newsroom/make-difference-where-you-live-become-waste-reduction-champion-0 | FAIL | 403 | no | 3744 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/3-1-1/report-or-request/road-and-sidewalk-maintenance | https://ottawa.ca/en/3-1-1/report-or-request/road-and-sidewalk-maintenance | FAIL | 403 | no | 3709 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/node/3000166 | https://ottawa.ca/en/node/3000166 | FAIL | 403 | no | 3749 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/node/3000196 | https://ottawa.ca/en/node/3000196 | FAIL | 403 | no | 3761 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/node/3000296 | https://ottawa.ca/en/node/3000296 | FAIL | 403 | no | 3789 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/city-hall/city-news/newsroom/ottawa-public-health-reminds-families-update-routine-childhood-vaccination-records | https://ottawa.ca/en/city-hall/city-news/newsroom/ottawa-public-health-reminds-families-update-routine-childhood-vaccination-records | FAIL | 403 | no | 3783 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/parking-roads-and-travel | https://ottawa.ca/en/parking-roads-and-travel | FAIL | 403 | no | 3738 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/newsroom | https://ottawa.ca/en/newsroom | FAIL | 403 | no | 4024 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/form/feedback | https://ottawa.ca/en/form/feedback | FAIL | 403 | no | 3772 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
| https://ottawa.ca/en/jobs-city | https://ottawa.ca/en/jobs-city | FAIL | 403 | no | 3703 | 9 | 6 | 0 | 0 | 4 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |

## Detailed Failure Information (ALFA)

### https://ottawa.ca/

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=13-31941556-0%20NNNY%20RT%281773277684599%2019%29%20q%280%20-1%20-1%200%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096400437-165258826831433485&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/terms-use/accessibility

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=14-34647931-0%20NNNN%20RT%281773277688556%2019%29%20q%280%20-1%20-1%200%29%20r%281%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096402174-174210938835635982&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/family-and-social-services

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=54-35584430-0%20PNNN%20RT%281773277692575%2022%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-180721525173195126&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=13-31943345-0%20PNNN%20RT%281773277696710%2024%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-165267442535829261&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/client-services/city-ottawa-client-service-centres

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=37-21938918-0%20NNNN%20RT%281773277700677%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-115666050677674341&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/3-1-1/report-or-request/garbage-and-recycling

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=4-9996145-0%20NNNN%20RT%281773277704609%2020%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-52004069699030788&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/3-1-1/report-or-request/parking

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=39-24019036-0%20PNNN%20RT%281773277708576%2020%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-126505225282851175&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/3-1-1/report-or-request/property-damage-or-maintenance

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=46-31644357-0%20PNNN%20RT%281773277712449%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-162698364930429294&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=47-32958876-0%20NNNN%20RT%281773277716412%2025%29%20q%280%20-1%20-1%20-1%29%20r%281%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-169078594683212143&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/fr

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=9-20832766-0%20NNNN%20RT%281773277720343%2025%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-107517273619107593&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/3-1-1

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=6-14116404-0%20NNNY%20RT%281773277724309%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-73171377930702598&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/arts-heritage-and-events

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=43-28336228-0%20NNNY%20RT%281773277728248%2027%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-146618943677075819&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/fr/form/feedback

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=7-16374437-0%20NNNY%20RT%281773277732102%2036%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-86280060499726087&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/fr/forms/feedback

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=5-12340693-0%20NNNY%20RT%281773277736053%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-63449788175683333&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/fr/3-1-1/signaler-ou-demander/dechets-et-recyclage

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=38-22927989-0%20NNNY%20RT%281773277740113%2029%29%20q%280%20-1%20-1%20-1%29%20r%281%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-120764821103120742&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/fr/3-1-1/signaler-ou-demander/entretien-de-propriete

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=12-30991155-0%20NNNY%20RT%281773277744151%2019%29%20q%280%20-1%20-1%20-1%29%20r%281%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-175495018093022988&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/fr/3-1-1/signaler-ou-demander/entretien-des-routes-et-trottoirs

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=9-20835727-0%20PNNN%20RT%281773277748109%2020%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-107531567270268681&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/recreation-and-parks

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=43-28341423-0%20NNNN%20RT%281773277752025%2023%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-146643699868569963&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/planning-development-and-construction

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=9-20836405-0%20NNNN%20RT%281773277755957%2025%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-107535333956587273&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/terms-use/privacy

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=36-20849404-0%20NNNY%20RT%281773277759841%2021%29%20q%280%20-1%20-1%20-1%29%20r%281%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-110571940291744100&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/city-hall/city-news/newsroom/was-ottawa-1826-just-wild-west

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=13-31954485-0%20NNNY%20RT%281773277763908%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-165325961465237261&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/city-hall/city-news/newsroom/complete-your-vacant-unit-tax-declaration-march-19

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=14-34662744-0%20NNNY%20RT%281773277767863%2020%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-174284228157574926&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/node/3000156

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=13-31955457-0%20NNNY%20RT%281773277771770%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-165331600757296909&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/node/3000146

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=10-24678379-0%20NNNY%20RT%281773277776088%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-125825099999285002&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/garbage-and-recycling

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=9-20838612-0%20NNNY%20RT%281773277779982%2029%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-107547647627824905&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/city-hall/council-committees-and-boards/agendas-minutes-and-videos

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=4-9998614-0%20NNNY%20RT%281773277783843%2020%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-52015893743996676&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/health-and-public-safety

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=11-27163217-0%20NNNY%20RT%281773277787674%2020%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-137607346343448331&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/terms-use/disclaimer

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=12-30998459-0%20PNNN%20RT%281773277791589%2030%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-175539333565583116&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/city-hall/city-news/newsroom/your-waste-collection-day-may-change-starting-march-30

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=9-20840437-0%20PNNN%20RT%281773277795693%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-107556877512544009&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/forms/feedback

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=12-30999675-0%20NNNY%20RT%281773277799571%2020%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-175546033714564876&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/city-hall/city-news/newsroom/city-seeking-public-input-commemorative-naming-proposals-1

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=48-33836852-0%20NNNY%20RT%281773277803520%2020%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-173123427378860400&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/living-ottawa

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=10-24681862-0%20PNNN%20RT%281773277807328%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-125844096639635210&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/node/3000176

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=42-27690893-0%20NNNY%20RT%281773277811268%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-154529139564941674&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/mayor-and-city-councillors

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=30-13881309-0%20NNNY%20RT%281773277815021%2032%29%20q%280%20-1%20-1%20-1%29%20r%281%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-75046453310329182&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/node/3000126

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=12-31002322-0%20NNNY%20RT%281773277818791%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-175561937978461964&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/city-hall/city-news/newsroom/celebrating-black-history-month-ottawa

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=39-24037562-0%20PNNN%20RT%281773277822533%2025%29%20q%280%20-1%20-1%20-1%29%20r%281%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-126609524268667239&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/city-hall/council-committees-and-boards/committees-and-boards

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=51-35560181-0%20NNNY%20RT%281773277826273%2025%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-179864498809016691&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/business

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=30-13882415-0%20NNNY%20RT%281773277829979%2026%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-75052101192323422&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/mayors-corner

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=14-34673422-0%20NNNY%20RT%281773277833727%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-174340213056278286&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/city-hall/city-news/protocols

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=14-34674087-0%20NNNN%20RT%281773277837667%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-174344044167106318&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/city-hall/city-news/newsroom/para-transpo-talk-sessions-march-2-4

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=11-27169442-0%20NNNY%20RT%281773277841363%2021%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-137637389639683851&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/city-hall

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=11-27169766-0%20NNNN%20RT%281773277845149%2018%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-137638931532943115&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/fr/3-1-1/signaler-ou-demander/stationnement

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=8-16589461-0%20NNNY%20RT%281773277848883%2027%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-86232047060324104&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/city-hall/city-news/newsroom/make-difference-where-you-live-become-waste-reduction-champion-0

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=36-20861279-0%20NNNN%20RT%281773277852659%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-110635140735504740&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/3-1-1/report-or-request/road-and-sidewalk-maintenance

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=10-24687334-0%20NNNY%20RT%281773277856358%2020%29%20q%280%20-1%20-1%20-1%29%20r%281%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-125873375431692042&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/node/3000166

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=42-27702133-0%20NNNY%20RT%281773277860100%2018%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-154586846745530730&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/node/3000196

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=9-20847030-0%20PNNN%20RT%281773277863832%2018%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-107590781984378633&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/node/3000296

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=39-24045009-0%20NNNY%20RT%281773277867619%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-126650871918825831&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/city-hall/city-news/newsroom/ottawa-public-health-reminds-families-update-routine-childhood-vaccination-records

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=45-31212943-0%20NNNY%20RT%281773277871413%2021%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-160330747028640109&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/parking-roads-and-travel

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=52-35711853-0%20PNNN%20RT%281773277875124%2033%29%20q%280%20-1%20-1%20-1%29%20r%281%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-181173574776066420&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/newsroom

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=51-35574219-0%20NNNY%20RT%281773277878884%2018%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1847000690262319117-179930297707991411&edet=15&cinfo=0e000000763d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18470...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/form/feedback

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=7-16386478-0%20NNNY%20RT%281773277882920%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-86340533639253767&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

### https://ottawa.ca/en/jobs-city

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=7-16386671-0%20PNNN%20RT%281773277886693%2019%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1353000600096404246-86341581611273991&edet=15&cinfo=0e0000008e3d&rpinfo=0&cip=135.232.176.178&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 13530...</iframe>`
- XPath: `/iframe[@id="main-iframe"]`

#### Rule: [SIA-R4: Page has a descriptive title](https://alfa.siteimprove.com/rules/sia-r4)

**Failure 1:**
- Message: The `lang` attribute is either missing, empty, or only whitespace
- HTML: `<html style="height:100%">...</html>`
- XPath: `/html`

#### Rule: [SIA-R59](https://alfa.siteimprove.com/rules/sia-r59)

**Failure 1:**
- Message: The document does not have a heading element

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R69: Text has sufficient contrast with its background](https://alfa.siteimprove.com/rules/sia-r69)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.34:1 which is         below the required contrast of 4.5:1

## Detailed Failure Information (axe)

### https://ottawa.ca/

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:01 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/terms-use/accessibility

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:05 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/family-and-social-services

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:09 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:13 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/client-services/city-ottawa-client-service-centres

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:17 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/3-1-1/report-or-request/garbage-and-recycling

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:21 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/3-1-1/report-or-request/parking

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:25 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/3-1-1/report-or-request/property-damage-or-maintenance

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:29 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:33 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/fr

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:37 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/3-1-1

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:41 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/arts-heritage-and-events

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:45 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/fr/form/feedback

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:49 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/fr/forms/feedback

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:53 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/fr/3-1-1/signaler-ou-demander/dechets-et-recyclage

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:08:57 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/fr/3-1-1/signaler-ou-demander/entretien-de-propriete

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:01 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/fr/3-1-1/signaler-ou-demander/entretien-des-routes-et-trottoirs

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:05 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/recreation-and-parks

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:09 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/planning-development-and-construction

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:13 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/terms-use/privacy

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:17 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/city-hall/city-news/newsroom/was-ottawa-1826-just-wild-west

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:21 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/city-hall/city-news/newsroom/complete-your-vacant-unit-tax-declaration-march-19

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:25 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/node/3000156

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:28 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/node/3000146

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:32 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/garbage-and-recycling

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:37 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/city-hall/council-committees-and-boards/agendas-minutes-and-videos

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:41 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/health-and-public-safety

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:44 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/terms-use/disclaimer

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:48 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/city-hall/city-news/newsroom/your-waste-collection-day-may-change-starting-march-30

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:52 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/forms/feedback

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:09:56 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/city-hall/city-news/newsroom/city-seeking-public-input-commemorative-naming-proposals-1

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:00 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/living-ottawa

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:04 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/node/3000176

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:08 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/mayor-and-city-councillors

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:12 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/node/3000126

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:16 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/city-hall/city-news/newsroom/celebrating-black-history-month-ottawa

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:19 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/city-hall/council-committees-and-boards/committees-and-boards

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:23 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/business

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:27 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/mayors-corner

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:30 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/city-hall/city-news/protocols

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:34 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/city-hall/city-news/newsroom/para-transpo-talk-sessions-march-2-4

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:38 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/city-hall

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:42 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/fr/3-1-1/signaler-ou-demander/stationnement

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:46 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/city-hall/city-news/newsroom/make-difference-where-you-live-become-waste-reduction-champion-0

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:49 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/3-1-1/report-or-request/road-and-sidewalk-maintenance

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:53 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/node/3000166

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:10:57 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/node/3000196

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:11:01 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/node/3000296

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:11:04 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/city-hall/city-news/newsroom/ottawa-public-health-reminds-families-update-routine-childhood-vaccination-records

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:11:08 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/parking-roads-and-travel

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:11:12 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/newsroom

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:11:16 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/form/feedback

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:11:20 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

### https://ottawa.ca/en/jobs-city

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<div class="date">2026-03-12 01:11:23 UTC</div>`
- XPath: `#main-iframe`

#### Rule: [document-title](https://dequeuniversity.com/rules/axe/4.11/document-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Documents must have <title> element to aid in navigation
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [frame-title](https://dequeuniversity.com/rules/axe/4.11/frame-title?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames must have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource..." frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">`
- XPath: `#main-iframe`

#### Rule: [html-has-lang](https://dequeuniversity.com/rules/axe/4.11/html-has-lang?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <html> element must have a lang attribute
- HTML: `<html style="height:100%">`
- XPath: `html`

#### Rule: [landmark-one-main](https://dequeuniversity.com/rules/axe/4.11/landmark-one-main?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should have one main landmark
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Document should have one main landmark
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [page-has-heading-one](https://dequeuniversity.com/rules/axe/4.11/page-has-heading-one?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Page should contain a level-one heading
- HTML: `<html style="height:100%">`
- XPath: `html`

**Failure 2:**
- Message: Page should contain a level-one heading
- HTML: `<html lang="en">`
- XPath: `#main-iframe`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="container">`
- XPath: `#main-iframe`

