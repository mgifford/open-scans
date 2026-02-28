# Scan Report: Ottawa.ca

- Issue: https://github.com/mgifford/alfa-scan/issues/60
- Submitted by: mgifford
- Scanned at: 2026-02-28T14:56:56.155Z
- Engines used: All engines (AXE, ALFA, Equal Access, AccessLint)
- Scan duration: 3.0 minutes
- Total URLs submitted: 53
- Accepted public URLs: 53
- Rejected URLs: 0
- ALFA outcomes: 1643 passed, 530 failed, 53 cantTell, 4187 inapplicable
- axe outcomes: 2544 passed, 477 failed, 53 cantTell, 3922 inapplicable
- Equal Access outcomes: 8323 passed, 1113 failed (1113 unique, 0 duplicate), 583 cantTell, 0 inapplicable
- AccessLint outcomes: 4558 passed, 318 failed (318 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 212

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---|
| [View Page](https://ottawa.ca/) | 9 | 6 | 21 | 6 | **42** | https://ottawa.ca/ |
| [View Page](https://ottawa.ca/en/terms-use/accessibility) | 9 | 6 | 21 | 6 | **42** | https://ottawa.ca/en/terms-use/accessibility |
| [View Page](https://ottawa.ca/en/family-and-social-services) | 9 | 6 | 21 | 6 | **42** | https://ottawa.ca/en/family-and-social-services |
| [View Page](https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person) | 9 | 6 | 21 | 6 | **42** | https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person |
| [View Page](https://ottawa.ca/en/client-services/city-ottawa-client-service-centres) | 9 | 6 | 21 | 6 | **42** | https://ottawa.ca/en/client-services/city-ottawa-client-service-centres |
| [View Page](https://ottawa.ca/en/3-1-1/report-or-request/garbage-and-recycling) | 9 | 6 | 21 | 6 | **42** | https://ottawa.ca/en/3-1-1/report-or-request/garbage-and-recycling |
| [View Page](https://ottawa.ca/en/3-1-1/report-or-request/parking) | 9 | 6 | 21 | 6 | **42** | https://ottawa.ca/en/3-1-1/report-or-request/parking |
| [View Page](https://ottawa.ca/en/3-1-1/report-or-request/property-damage-or-maintenance) | 9 | 6 | 21 | 6 | **42** | https://ottawa.ca/en/3-1-1/report-or-request/property-damage-or-maintenance |
| [View Page](https://ottawa.ca/en) | 9 | 6 | 21 | 6 | **42** | https://ottawa.ca/en |
| [View Page](https://ottawa.ca/fr) | 9 | 6 | 21 | 6 | **42** | https://ottawa.ca/fr |

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
| https://ottawa.ca/ | https://ottawa.ca/ | FAIL | 403 | no | 6613 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/terms-use/accessibility | https://ottawa.ca/en/terms-use/accessibility | FAIL | 403 | no | 3385 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/family-and-social-services | https://ottawa.ca/en/family-and-social-services | FAIL | 403 | no | 3902 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person | https://ottawa.ca/en/3-1-1/services-phone-e-mail-and-person | FAIL | 403 | no | 3447 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/client-services/city-ottawa-client-service-centres | https://ottawa.ca/en/client-services/city-ottawa-client-service-centres | FAIL | 403 | no | 3951 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/3-1-1/report-or-request/garbage-and-recycling | https://ottawa.ca/en/3-1-1/report-or-request/garbage-and-recycling | FAIL | 403 | no | 3320 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/3-1-1/report-or-request/parking | https://ottawa.ca/en/3-1-1/report-or-request/parking | FAIL | 403 | no | 3300 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/3-1-1/report-or-request/property-damage-or-maintenance | https://ottawa.ca/en/3-1-1/report-or-request/property-damage-or-maintenance | FAIL | 403 | no | 3378 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en | https://ottawa.ca/en | FAIL | 403 | no | 3337 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/fr | https://ottawa.ca/fr | FAIL | 403 | no | 3335 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/3-1-1 | https://ottawa.ca/en/3-1-1 | FAIL | 403 | no | 3418 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/arts-heritage-and-events | https://ottawa.ca/en/arts-heritage-and-events | FAIL | 403 | no | 3411 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/fr/form/feedback | https://ottawa.ca/fr/form/feedback | FAIL | 403 | no | 3353 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/fr/forms/feedback | https://ottawa.ca/fr/forms/feedback | FAIL | 403 | no | 3330 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/fr/3-1-1/signaler-ou-demander/dechets-et-recyclage | https://ottawa.ca/fr/3-1-1/signaler-ou-demander/dechets-et-recyclage | FAIL | 403 | no | 3299 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/fr/3-1-1/signaler-ou-demander/entretien-de-propriete | https://ottawa.ca/fr/3-1-1/signaler-ou-demander/entretien-de-propriete | FAIL | 403 | no | 3452 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/fr/3-1-1/signaler-ou-demander/entretien-des-routes-et-trottoirs | https://ottawa.ca/fr/3-1-1/signaler-ou-demander/entretien-des-routes-et-trottoirs | FAIL | 403 | no | 3627 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/recreation-and-parks | https://ottawa.ca/en/recreation-and-parks | FAIL | 403 | no | 3278 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/planning-development-and-construction | https://ottawa.ca/en/planning-development-and-construction | FAIL | 403 | no | 3344 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/terms-use/privacy | https://ottawa.ca/en/terms-use/privacy | FAIL | 403 | no | 3693 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/city-hall/city-news/newsroom/was-ottawa-1826-just-wild-west | https://ottawa.ca/en/city-hall/city-news/newsroom/was-ottawa-1826-just-wild-west | FAIL | 403 | no | 3256 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/city-hall/city-news/newsroom/complete-your-vacant-unit-tax-declaration-march-19 | https://ottawa.ca/en/city-hall/city-news/newsroom/complete-your-vacant-unit-tax-declaration-march-19 | FAIL | 403 | no | 3399 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/node/3000156 | https://ottawa.ca/en/node/3000156 | FAIL | 403 | no | 3329 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/node/3000146 | https://ottawa.ca/en/node/3000146 | FAIL | 403 | no | 3284 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/garbage-and-recycling | https://ottawa.ca/en/garbage-and-recycling | FAIL | 403 | no | 3356 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/city-hall/council-committees-and-boards/agendas-minutes-and-videos | https://ottawa.ca/en/city-hall/council-committees-and-boards/agendas-minutes-and-videos | FAIL | 403 | no | 3240 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/health-and-public-safety | https://ottawa.ca/en/health-and-public-safety | FAIL | 403 | no | 3342 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/terms-use/disclaimer | https://ottawa.ca/en/terms-use/disclaimer | FAIL | 403 | no | 3266 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/city-hall/city-news/newsroom/your-waste-collection-day-may-change-starting-march-30 | https://ottawa.ca/en/city-hall/city-news/newsroom/your-waste-collection-day-may-change-starting-march-30 | FAIL | 403 | no | 3310 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/forms/feedback | https://ottawa.ca/en/forms/feedback | FAIL | 403 | no | 3314 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/city-hall/city-news/newsroom/city-seeking-public-input-commemorative-naming-proposals-1 | https://ottawa.ca/en/city-hall/city-news/newsroom/city-seeking-public-input-commemorative-naming-proposals-1 | FAIL | 403 | no | 3308 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/living-ottawa | https://ottawa.ca/en/living-ottawa | FAIL | 403 | no | 3327 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/node/3000176 | https://ottawa.ca/en/node/3000176 | FAIL | 403 | no | 3498 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/mayor-and-city-councillors | https://ottawa.ca/en/mayor-and-city-councillors | FAIL | 403 | no | 3237 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/node/3000126 | https://ottawa.ca/en/node/3000126 | FAIL | 403 | no | 3326 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/city-hall/city-news/newsroom/celebrating-black-history-month-ottawa | https://ottawa.ca/en/city-hall/city-news/newsroom/celebrating-black-history-month-ottawa | FAIL | 403 | no | 3144 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/city-hall/council-committees-and-boards/committees-and-boards | https://ottawa.ca/en/city-hall/council-committees-and-boards/committees-and-boards | FAIL | 403 | no | 3162 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/business | https://ottawa.ca/en/business | FAIL | 403 | no | 3185 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/mayors-corner | https://ottawa.ca/en/mayors-corner | FAIL | 403 | no | 3351 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/city-hall/city-news/protocols | https://ottawa.ca/en/city-hall/city-news/protocols | FAIL | 403 | no | 3282 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/city-hall/city-news/newsroom/para-transpo-talk-sessions-march-2-4 | https://ottawa.ca/en/city-hall/city-news/newsroom/para-transpo-talk-sessions-march-2-4 | FAIL | 403 | no | 3233 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/city-hall | https://ottawa.ca/en/city-hall | FAIL | 403 | no | 3279 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/fr/3-1-1/signaler-ou-demander/stationnement | https://ottawa.ca/fr/3-1-1/signaler-ou-demander/stationnement | FAIL | 403 | no | 3173 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/city-hall/city-news/newsroom/make-difference-where-you-live-become-waste-reduction-champion-0 | https://ottawa.ca/en/city-hall/city-news/newsroom/make-difference-where-you-live-become-waste-reduction-champion-0 | FAIL | 403 | no | 3187 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/3-1-1/report-or-request/road-and-sidewalk-maintenance | https://ottawa.ca/en/3-1-1/report-or-request/road-and-sidewalk-maintenance | FAIL | 403 | no | 3150 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/node/3000166 | https://ottawa.ca/en/node/3000166 | FAIL | 403 | no | 3358 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/node/3000196 | https://ottawa.ca/en/node/3000196 | FAIL | 403 | no | 3191 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/node/3000296 | https://ottawa.ca/en/node/3000296 | FAIL | 403 | no | 3236 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/city-hall/city-news/newsroom/ottawa-public-health-reminds-families-update-routine-childhood-vaccination-records | https://ottawa.ca/en/city-hall/city-news/newsroom/ottawa-public-health-reminds-families-update-routine-childhood-vaccination-records | FAIL | 403 | no | 3177 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/parking-roads-and-travel | https://ottawa.ca/en/parking-roads-and-travel | FAIL | 403 | no | 3182 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/newsroom | https://ottawa.ca/en/newsroom | FAIL | 403 | no | 3130 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/form/feedback | https://ottawa.ca/en/form/feedback | FAIL | 403 | no | 3206 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |
| https://ottawa.ca/en/jobs-city | https://ottawa.ca/en/jobs-city | FAIL | 403 | no | 3270 | 9 | 6 | 21 | 6 | 4 |  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R1 (id attributes are unique within the document), SIA-R13, SIA-R4 (Page has a descriptive title), SIA-R59, SIA-R66 (Text has enhanced contrast with its background), SIA-R69 (Text has sufficient contrast with its background) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, document-title, frame-title, html-has-lang, landmark-one-main, page-has-heading-one, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, element_attribute_deprecated, frame_src_valid, frame_title_exists, html_lang_exists, html_skipnav_exists, page_title_exists, skip_main_exists, style_color_misuse, style_highcontrast_visible, text_block_heading, text_contrast_sufficient |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: landmarks/landmark-main, landmarks/region, navigable/bypass, navigable/document-title, navigable/page-has-heading-one, readable/html-has-lang |

## Detailed Failure Information (ALFA)

### https://ottawa.ca/

#### Rule: [SIA-R1: id attributes are unique within the document](https://alfa.siteimprove.com/rules/sia-r1)

**Failure 1:**
- Message: The document does not have a `<title>` element

#### Rule: [SIA-R13](https://alfa.siteimprove.com/rules/sia-r13)

**Failure 1:**
- Message: The `<iframe>` does not have an accessible name
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=58-80716617-0%20NNNY%20RT%281772290440841%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-414879963875119482&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=43-44960860-0%20NNNY%20RT%281772290445070%208%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-236987323327451499&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=9-25924554-0%20NNNY%20RT%281772290449023%205%29%20q%280%20-1%20-1%200%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050088998537-136340172020384073&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=10-30786542-0%20NNNY%20RT%281772290452358%205%29%20q%280%20-1%20-1%200%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050088999277-162550798354743626&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=36-27802053-0%20NNNN%20RT%281772290455832%206%29%20q%280%20-1%20-1%20-1%29%20r%281%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-151003465335968100&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=3-24844245-0%20NNNN%20RT%281772290459727%205%29%20q%280%20-1%20-1%201%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000768-128576958503321923&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=55-80673470-0%20NNNY%20RT%281772290463056%204%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-410573146764349815&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=10-30787408-0%20NNNY%20RT%281772290466450%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-162555733272166730&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=55-80675049-0%20NNNY%20RT%281772290469771%2010%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-410580448208753015&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=46-51486337-0%20NNNY%20RT%281772290473072%206%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-274897788468466030&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=5-29939992-0%20NNNY%20RT%281772290476414%2046%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-150734273876590917&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=55-80677490-0%20NNNY%20RT%281772290479915%2012%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-410592413987639671&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=9-25926605-0%20NNNY%20RT%281772290483298%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-136350492826796361&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=7-17977174-0%20PNNN%20RT%281772290486633%206%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-95750300121694535&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=4-29260448-0%20NNNY%20RT%281772290489929%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-147169158963134788&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=60-80790099-0%20NNNN%20RT%281772290493197%208%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-428625946576425340&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=8-21499198-0%20NNNN%20RT%281772290496703%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-112582199645307208&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=4-29261380-0%20PNNN%20RT%281772290500274%206%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-147173453930430788&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=48-57330744-0%20NNNY%20RT%281772290503606%204%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-302028134804623728&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=8-21499784-0%20PNNN%20RT%281772290506906%2023%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-112584566172287304&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=45-48752818-0%20NNNY%20RT%281772290510578%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-259788892385055085&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=2-24559269-0%20NNNY%20RT%281772290513901%207%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-127130873079529794&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=4-29262763-0%20NNNY%20RT%281772290517291%206%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-147180304403267908&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=49-60520701-0%20NNNN%20RT%281772290520546%208%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-316345665983877489&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=2-24559828-0%20NNNY%20RT%281772290523885%206%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-127133823722062146&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=0-18718930-0%20PNNN%20RT%281772290527271%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-110591413584134464&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=4-29263868-0%20NNNY%20RT%281772290530513%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-147185505608663364&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=0-18719199-0%20NNNN%20RT%281772290533786%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-110593015606935872&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=4-29264473-0%20PNNN%20RT%281772290537074%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-147188443366293828&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=55-80689933-0%20PNNN%20RT%281772290540406%207%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-410654222861996407&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=44-45115067-0%20NNNY%20RT%281772290543692%204%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-240184398198346092&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=10-30793137-0%20NNNN%20RT%281772290547001%206%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-162585286942130506&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=9-25929851-0%20NNNY%20RT%281772290550388%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-136367801544999241&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=7-17978680-0%20NNNY%20RT%281772290553810%206%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-95757442652307783&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=37-29444768-0%20NNNN%20RT%281772290557119%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-161708091500663141&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=2-24561868-0%20NNNN%20RT%281772290560394%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-127144011384488258&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=58-80741748-0%20NNNY%20RT%281772290563569%209%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-415004092724941178&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=5-29947202-0%20NNNY%20RT%281772290566643%207%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-150768332967248197&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=5-29947419-0%20NNNY%20RT%281772290569927%206%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-150769350874497349&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=7-17979172-0%20NNNN%20RT%281772290573243%206%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-95759980977979719&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=0-18720512-0%20NNNY%20RT%281772290576497%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-110602374340673856&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=45-48764895-0%20NNNY%20RT%281772290579766%206%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-259850198748238189&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=62-83663215-0%20PNNN%20RT%281772290583015%206%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-434585832174915966&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=45-48766061-0%20NNNY%20RT%281772290586197%208%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-259855911054741869&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=51-67827250-0%20PNNN%20RT%281772290589401%209%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-350369593743905139&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=4-29268460-0%20NNNY%20RT%281772290592525%206%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-147208286115201348&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=59-80936105-0%20NNNY%20RT%281772290595859%2013%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-415100149668516219&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=10-30796744-0%20NNNN%20RT%281772290599056%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-162603403114185034&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=52-73530453-0%20PNNN%20RT%281772290602289%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-376358406492262772&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=38-31991315-0%20NNNN%20RT%281772290605497%209%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-173755083923919206&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=41-38422154-0%20NNNY%20RT%281772290608696%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-206896078077038953&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=4-29269770-0%20NNNN%20RT%281772290611797%206%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=484000050089000963-147214591127191876&edet=15&cinfo=0e000000f63d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 48400...</iframe>`
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
- HTML: `<iframe id="main-iframe" src="/_Incapsula_Resource?CWUDNSAI=23&xinfo=61-83218559-0%20NNNY%20RT%281772290615049%205%29%20q%280%20-1%20-1%20-1%29%20r%280%20-1%29%20B15%2814%2c0%2c0%29%20U24&incident_id=1844000690812294059-421408747956736381&edet=15&cinfo=0e0000003e3d&rpinfo=0&cip=52.150.28.32&mth=GET" frameborder="0" width="100%" height="100%" marginheight="0px" marginwidth="0px">Request unsuccessful. Incapsula incident ID: 18440...</iframe>`
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
- HTML: `<div class="date">2026-02-28 14:53:57 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:03 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:06 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:10 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:13 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:17 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:21 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:24 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:27 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:31 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:34 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:37 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:41 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:44 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:47 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:51 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:54 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:54:58 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:01 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:04 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:08 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:11 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:15 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:18 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:21 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:25 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:28 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:31 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:35 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:38 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:41 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:45 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:48 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:51 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:55 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:55:58 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:01 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:04 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:07 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:11 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:14 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:17 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:21 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:24 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:27 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:30 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:33 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:37 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:40 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:43 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:46 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:49 UTC</div>`
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
- HTML: `<div class="date">2026-02-28 14:56:53 UTC</div>`
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

