# Scan Report: Alberta

- Issue: https://github.com/mgifford/open-scans/issues/52
- Submitted by: mgifford
- Scanned at: 2026-04-26T02:31:51.989Z
- Engines used: AXE, EQUALACCESS
- Scan duration: 2.5 minutes
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
- axe outcomes: 11395 passed, 68 failed, 242 cantTell, 940 inapplicable
- Equal Access outcomes: 32353 passed, 1035 failed (487 unique, 548 duplicate), 430 cantTell, 0 inapplicable
- AccessLint outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 550

## 🎯 Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | Equal Access Unique | Total Unique | Page Title |
|---|---:|---:|---:|---|
| [View Page](https://www.alberta.ca/alberta-ca-account) | 38 | 26 | **64** | Alberta.ca Account \| Alberta.ca |
| [View Page](https://www.alberta.ca/west-coast-oil-pipeline) | 9 | 40 | **49** | West Coast Oil Pipeline \| Alberta.ca |
| [View Page](https://www.alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65) | 2 | 30 | **32** | A bold investment in student success \| Un investissement audacieux dans la réussite des élèves \| alberta.ca |
| [View Page](https://www.alberta.ca/schools-now) | 1 | 28 | **29** | Schools Now \| Alberta.ca |
| [View Page](https://www.alberta.ca/public-engagement) | 1 | 27 | **28** | Public engagement \| Alberta.ca |
| [View Page](https://www.alberta.ca/acute-care-action-plan) | 1 | 26 | **27** | Acute Care Action Plan \| Alberta.ca |
| [View Page](https://www.alberta.ca/usingthissite) | 1 | 26 | **27** | Using Alberta.ca \| Alberta.ca |
| [View Page](https://www.alberta.ca/open-government-program) | 1 | 24 | **25** | Open Government program \| Alberta.ca |
| [View Page](https://www.alberta.ca/disclaimer) | 1 | 23 | **24** | Disclaimer and copyright \| Alberta.ca |
| [View Page](https://www.alberta.ca/social-media-directory) | 1 | 23 | **24** | Social media directory \| Alberta.ca |

## 🔧 Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-unique | **18** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| color-contrast | **2** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/color-contrast) |
| region | **2** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| aria-prohibited-attr | **2** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-prohibited-attr) |
| button-name | **2** of 59 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 17 page(s) - 17 occurrence(s)

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
- https://alberta.ca/all-services
- https://alberta.ca/family-and-social-supports-topic
- https://alberta.ca/about-government
- https://alberta.ca/acute-care-action-plan
- https://alberta.ca/alberta-ca-account
- *...and 12 more page(s)*

---

#### Pattern 2: Affects 2 page(s) - 2 occurrence(s)

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
- https://alberta.ca/announcements.cfm?xID=957330F7B921A-EEA9-EE49-575132BCF2B4A8E4
- https://alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65

---

#### Pattern 3: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: axe
**Rule**: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**Issue**: Elements must only use permitted ARIA attributes

**HTML Pattern**:
```html
<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/8456c9de/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">
```

**XPath** (use in browser DevTools):
```
#\39 17392684
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#\39 17392684')`
5. The element will be highlighted

**Affected Pages**:
- https://alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65
- https://alberta.ca/west-coast-oil-pipeline

---

#### Pattern 4: Affects 2 page(s) - 2 occurrence(s)

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
#\39 17392684
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#\39 17392684')`
5. The element will be highlighted

**Affected Pages**:
- https://alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65
- https://alberta.ca/west-coast-oil-pipeline

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://alberta.ca/ | https://alberta.ca/ | FAIL | - | no | 276 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/accessibility | https://alberta.ca/accessibility | FAIL | - | no | 316 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/find-a-job | https://alberta.ca/find-a-job | FAIL | - | no | 280 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/all-services | https://www.alberta.ca/all-services | OK | 200 | yes | 7653 | 1 | 0 | 22 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/canada-post-service-interruption | https://alberta.ca/canada-post-service-interruption | FAIL | - | no | 303 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/vehicle-registration-renewal | https://alberta.ca/vehicle-registration-renewal | FAIL | - | no | 241 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/family-and-social-supports-topic | https://www.alberta.ca/family-and-social-supports-topic | OK | 200 | yes | 6146 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/about-government | https://www.alberta.ca/about-government | OK | 200 | yes | 6091 | 1 | 0 | 22 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://alberta.ca/acute-care-action-plan | https://www.alberta.ca/acute-care-action-plan | OK | 200 | yes | 6343 | 1 | 0 | 26 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://alberta.ca/agriculture | https://alberta.ca/agriculture | FAIL | - | no | 223 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/ahcip | https://alberta.ca/ahcip | FAIL | - | no | 292 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/aish | https://alberta.ca/aish | FAIL | - | no | 222 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/alberta-advantage-immigration-program | https://alberta.ca/alberta-advantage-immigration-program | FAIL | - | no | 241 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/alberta-ca-account | https://www.alberta.ca/alberta-ca-account | OK | 200 | yes | 6922 | 38 | 0 | 26 | 0 | 9 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: color-contrast, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, label_name_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://alberta.ca/announcements.cfm?xID=957330F7B921A-EEA9-EE49-575132BCF2B4A8E4 | https://www.alberta.ca/release.cfm?xID=957330F7B921A-EEA9-EE49-575132BCF2B4A8E4 | OK | 200 | yes | 7690 | 1 | 0 | 22 | 0 | 2 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_complementary_labelled, aria_content_in_landmark, aria_role_redundant, blockquote_cite_exists, element_attribute_deprecated, element_tabbable_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_sensory_misuse |
| https://alberta.ca/announcements.cfm?xID=9573410ED1AD8-DE7F-DF66-A798654D0700135F | https://alberta.ca/announcements.cfm?xID=9573410ED1AD8-DE7F-DF66-A798654D0700135F | FAIL | - | no | 271 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/announcements.cfm?xID=95735120C00EF-B4D2-523E-653AFC3B7691D90A | https://alberta.ca/announcements.cfm?xID=95735120C00EF-B4D2-523E-653AFC3B7691D90A | FAIL | - | no | 373 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/birth-adoption-death-marriage-and-divorce-topic | https://alberta.ca/birth-adoption-death-marriage-and-divorce-topic | FAIL | - | no | 246 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/budget | https://alberta.ca/budget | FAIL | - | no | 293 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/business-and-economic-development | https://alberta.ca/business-and-economic-development | FAIL | - | no | 298 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/contact-government | https://alberta.ca/contact-government | FAIL | - | no | 404 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/contact.cfm | https://alberta.ca/contact.cfm | FAIL | - | no | 222 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/culture-topic | https://alberta.ca/culture-topic | FAIL | - | no | 301 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/cut-red-tape | https://alberta.ca/cut-red-tape | FAIL | - | no | 295 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/disclaimer | https://www.alberta.ca/disclaimer | OK | 200 | yes | 6380 | 1 | 0 | 23 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/driving-safety-topic | https://alberta.ca/driving-safety-topic | FAIL | - | no | 223 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/education-and-training-topic | https://alberta.ca/education-and-training-topic | FAIL | - | no | 229 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/emergency | https://alberta.ca/emergency | FAIL | - | no | 304 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/emergency-preparedness-disaster-response-and-public-safety-topic | https://www.alberta.ca/emergency-preparedness-disaster-response-and-public-safety-topic | OK | 200 | yes | 6019 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/employment-topic | https://www.alberta.ca/employment-topic | OK | 200 | yes | 6951 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/energy-topic | https://www.alberta.ca/energy-topic | OK | 200 | yes | 5935 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/environment-natural-resources | https://alberta.ca/environment-natural-resources | FAIL | - | no | 222 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/fish-and-wildlife-topic | https://www.alberta.ca/fish-and-wildlife-topic | OK | 200 | yes | 6164 | 1 | 0 | 22 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://alberta.ca/government-of-alberta | https://alberta.ca/government-of-alberta | FAIL | - | no | 235 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/health-wellness | https://alberta.ca/health-wellness | FAIL | - | no | 241 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/housing-topic | https://www.alberta.ca/housing-topic | OK | 200 | yes | 5912 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/indigenous-relations-topic | https://alberta.ca/indigenous-relations-topic | FAIL | - | no | 230 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/infrastructure-topic | https://alberta.ca/infrastructure-topic | FAIL | - | no | 223 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/justice-topic | https://alberta.ca/justice-topic | FAIL | - | no | 224 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/key-initiatives | https://alberta.ca/key-initiatives | FAIL | - | no | 222 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/ministries | https://alberta.ca/ministries | FAIL | - | no | 222 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/moving-to-alberta-topic | https://alberta.ca/moving-to-alberta-topic | FAIL | - | no | 300 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/municipalities-topic | https://alberta.ca/municipalities-topic | FAIL | - | no | 222 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/news | https://alberta.ca/news | FAIL | - | no | 236 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/non-profit-and-charitable-organizations-topic | https://alberta.ca/non-profit-and-charitable-organizations-topic | FAIL | - | no | 222 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/open-government-program | https://www.alberta.ca/open-government-program | OK | 200 | yes | 6208 | 1 | 0 | 24 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/premier.aspx | https://alberta.ca/premier.aspx | FAIL | - | no | 224 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/privacystatement | https://alberta.ca/privacystatement | FAIL | - | no | 221 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/public-engagement | https://www.alberta.ca/public-engagement | OK | 200 | yes | 6125 | 1 | 0 | 27 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, label_name_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |
| https://alberta.ca/release.cfm?xID=956393BF7AAE1-FC58-0121-F6ACBF2A8BCD7A5B | https://alberta.ca/release.cfm?xID=956393BF7AAE1-FC58-0121-F6ACBF2A8BCD7A5B | FAIL | - | no | 226 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/release.cfm?xID=956403CB2A273-BB32-5FB1-CF2920F98FFC9B8A | https://alberta.ca/release.cfm?xID=956403CB2A273-BB32-5FB1-CF2920F98FFC9B8A | FAIL | - | no | 221 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65 | https://www.alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65 | OK | 200 | yes | 11942 | 2 | 0 | 30 | 0 | 522 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, blockquote_cite_exists, element_attribute_deprecated, element_tabbable_visible, frame_src_valid, heading_markup_misuse, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, table_headers_exists, table_headers_related, text_block_heading, text_sensory_misuse |
| https://alberta.ca/schools-now | https://www.alberta.ca/schools-now | OK | 200 | yes | 10532 | 1 | 0 | 28 | 0 | 1 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_background_decorative, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/social-media-directory | https://www.alberta.ca/social-media-directory | OK | 200 | yes | 6618 | 1 | 0 | 23 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/staff-directory.cfm | https://alberta.ca/staff-directory.cfm | FAIL | - | no | 227 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/tax-information-topic | https://alberta.ca/tax-information-topic | FAIL | - | no | 242 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://alberta.ca/tourism-sport-and-outdoor-recreation | https://www.alberta.ca/tourism-sport-and-outdoor-recreation | OK | 200 | yes | 5972 | 1 | 0 | 21 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_contrast_sufficient, widget_tabbable_exists |
| https://alberta.ca/usingthissite | https://www.alberta.ca/usingthissite | OK | 200 | yes | 6099 | 1 | 0 | 26 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_visible, form_submit_button_exists, input_label_visible, style_color_misuse, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_quoted_correctly, text_sensory_misuse, widget_tabbable_exists |
| https://alberta.ca/west-coast-oil-pipeline | https://www.alberta.ca/west-coast-oil-pipeline | OK | 200 | yes | 7870 | 9 | 0 | 40 | 0 | 14 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-prohibited-attr, button-name, color-contrast, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_content_in_landmark, aria_id_unique, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_id_unique, element_tabbable_role_valid, element_tabbable_visible, form_submit_button_exists, frame_src_valid, html_lang_exists, html_skipnav_exists, input_label_visible, style_background_decorative, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_contrast_sufficient, text_sensory_misuse, widget_tabbable_exists |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://alberta.ca/all-services

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/family-and-social-supports-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/about-government

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/acute-care-action-plan

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/alberta-ca-account

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-26
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Request an ante-mortem inspection by video</button>`
- XPath: `#accordion6309 > h3 > button`

**Failure 2:**
- First identified: 2026-04-26
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Develop nutrient management plans for crop production</button>`
- XPath: `#accordion6310 > h3 > button`

**Failure 3:**
- First identified: 2026-04-26
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Agriculture and forestry</button>`
- XPath: `#accordion49347 > h3 > button`

**Failure 4:**
- First identified: 2026-04-26
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Digital services and applications</button>`
- XPath: `#accordion49348 > h3 > button`

**Failure 5:**
- First identified: 2026-04-26
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Environmental services</button>`
- XPath: `#accordion49349 > h3 > button`

*... and 32 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/announcements.cfm?xID=957330F7B921A-EEA9-EE49-575132BCF2B4A8E4

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="ab-footer">`
- XPath: `.ab-footer`

### https://alberta.ca/disclaimer

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/emergency-preparedness-disaster-response-and-public-safety-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/employment-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/energy-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/fish-and-wildlife-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/housing-topic

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/open-government-program

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/public-engagement

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/release.cfm?xID=9564141722588-FFA6-400D-B388DB636D18FB65

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-26
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/8456c9de/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `#\39 17392684`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: All page content should be contained by landmarks
- HTML: `<div class="ab-footer">`
- XPath: `.ab-footer`

### https://alberta.ca/schools-now

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.goa-languages > nav`

### https://alberta.ca/social-media-directory

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/tourism-sport-and-outdoor-recreation

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/usingthissite

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

### https://alberta.ca/west-coast-oil-pipeline

#### Rule: [aria-prohibited-attr](https://dequeuniversity.com/rules/axe/4.11/aria-prohibited-attr?application=playwright)
**Impact**: serious
**WCAG**: [SC 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value) (Level A)

**Failure 1:**
- First identified: 2026-04-26
- Message: Elements must only use permitted ARIA attributes
- HTML: `<div class="html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-livebadge-color unstarted-mode ytp-large-width-mode" tabindex="" id="movie_player" data-version="/s/player/8456c9de/player_embed.vflset/en_US/base.js" aria-label="YouTube Video Player">`
- XPath: `iframe`

#### Rule: [color-contrast](https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright)
**Impact**: serious
**WCAG**: [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum) (Level AA)

**Failure 1:**
- First identified: 2026-04-26
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Myth: Construction is beginning on a pipeline</button>`
- XPath: `#accordion69610 > h3 > button`

**Failure 2:**
- First identified: 2026-04-26
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Myth: Alberta’s government is paying for the pipeline</button>`
- XPath: `#accordion69611 > h3 > button`

**Failure 3:**
- First identified: 2026-04-26
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Myth: A route for the pipeline has already been decided</button>`
- XPath: `#accordion69612 > h3 > button`

**Failure 4:**
- First identified: 2026-04-26
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Myth: This project will be no different than previous failed ones</button>`
- XPath: `#accordion69613 > h3 > button`

**Failure 5:**
- First identified: 2026-04-26
- Message: Elements must meet minimum color contrast ratio thresholds
- HTML: `<button class="" aria-expanded="false">Myth: The "tanker ban" makes this project a non-starter</button>`
- XPath: `#accordion69614 > h3 > button`

*... and 2 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- First identified: 2026-04-26
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav role="navigation" id="goa-quicklinks" class="goa-list">`
- XPath: `.goa-list:nth-child(1) > nav[role="navigation"]`

