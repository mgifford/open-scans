# Scan Report: .gov

- Issue: https://github.com/mgifford/open-scans/issues/89
- Submitted by: saz33m1
- Scanned at: 2026-03-06T15:10:14.845Z
- Engines used: All engines (AXE, ALFA, Equal Access, AccessLint, QualWeb)
- Scan duration: 0.8 minutes
- Total URLs submitted: 3
- Accepted public URLs: 3
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 2710 passed, 134 failed, 20 cantTell, 146 inapplicable
- axe outcomes: 1806 passed, 3 failed, 69 cantTell, 133 inapplicable
- Equal Access outcomes: 4605 passed, 78 failed (48 unique, 30 duplicate), 58 cantTell, 0 inapplicable
- AccessLint outcomes: 268 passed, 8 failed (8 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 1014 passed, 40 failed, 276 cantTell, 3 inapplicable
- Duplicate findings caught by later scanners: 180

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---:|---|
| [View Page](https://businessexpress.maryland.gov/) | 3 | 9 | 26 | 6 | 18 | **62** | Maryland Business Express |
| [View Page](https://www.maryland.gov/) | 0 | 6 | 17 | 0 | 15 | **38** | Maryland.gov |
| [View Page](https://onestop.md.gov/) | 0 | 5 | 5 | 2 | 7 | **19** | Home \| Maryland OneStop |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R111](https://alfa.siteimprove.com/rules/sia-r111): Interactive elements have a sufficient target size | **3** of 3 | [View Rule](https://alfa.siteimprove.com/rules/sia-r111) |
| [SIA-R73](https://alfa.siteimprove.com/rules/sia-r73): Text spacing can be adjusted without loss of content | **2** of 3 | [View Rule](https://alfa.siteimprove.com/rules/sia-r73) |
| [SIA-R66](https://alfa.siteimprove.com/rules/sia-r66): Text has enhanced contrast with its background | **2** of 3 | [View Rule](https://alfa.siteimprove.com/rules/sia-r66) |
| [SIA-R14](https://alfa.siteimprove.com/rules/sia-r14): Images have an accessible name or are decorative | **1** of 3 | [View Rule](https://alfa.siteimprove.com/rules/sia-r14) |
| [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74) | **1** of 3 | [View Rule](https://alfa.siteimprove.com/rules/sia-r74) |
| [SIA-R56](https://alfa.siteimprove.com/rules/sia-r56): Landmarks with the same role are distinguishable | **1** of 3 | [View Rule](https://alfa.siteimprove.com/rules/sia-r56) |
| [SIA-R57](https://alfa.siteimprove.com/rules/sia-r57): Landmarks don't repeat the same content | **1** of 3 | [View Rule](https://alfa.siteimprove.com/rules/sia-r57) |
| [SIA-R68](https://alfa.siteimprove.com/rules/sia-r68): Accessible name contains the visible label text | **1** of 3 | [View Rule](https://alfa.siteimprove.com/rules/sia-r68) |
| [SIA-R78](https://alfa.siteimprove.com/rules/sia-r78): Headings of same level have text content between them | **1** of 3 | [View Rule](https://alfa.siteimprove.com/rules/sia-r78) |
| [SIA-R85](https://alfa.siteimprove.com/rules/sia-r85) | **1** of 3 | [View Rule](https://alfa.siteimprove.com/rules/sia-r85) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-no-duplicate-banner | **1** of 3 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-no-duplicate-banner) |
| list | **1** of 3 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/list) |
| region | **1** of 3 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://maryland.gov | https://www.maryland.gov/ | OK | 200 | yes | 13893 | 0 | 6 | 17 | 0 | 57 | Maryland.gov |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R14 (Images have an accessible name or are decorative), SIA-R73 (Text spacing can be adjusted without loss of content) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_content_in_landmark, aria_role_redundant, element_tabbable_visible, figure_label_exists, input_label_visible, label_name_visible, page_title_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading, text_quoted_correctly, text_sensory_misuse |
| https://onestop.md.gov | https://onestop.md.gov/ | OK | 200 | no | 19954 | 0 | 5 | 5 | 2 | 65 | Home \| Maryland OneStop |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R66 (Text has enhanced contrast with its background), SIA-R73 (Text spacing can be adjusted without loss of content), SIA-R74 |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: input_label_visible, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-role, landmarks/region |
| https://businessexpress.maryland.gov/ | https://businessexpress.maryland.gov/ | OK | 200 | no | 15806 | 3 | 9 | 26 | 6 | 58 | Maryland Business Express |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R57 (Landmarks don't repeat the same content), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text), SIA-R78 (Headings of same level have text content between them), SIA-R85 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-no-duplicate-banner, list, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_banner_label_unique, aria_child_valid, aria_content_in_landmark, aria_descendant_valid, aria_landmark_name_unique, aria_role_redundant, element_attribute_deprecated, frame_src_valid, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable, text_block_heading |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, landmarks/banner-is-top-level, landmarks/landmark-unique |

## Detailed Failure Information (ALFA)

### https://maryland.gov

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a href="https://translate.google.com/translate?u=https://www.maryland.gov/welcome-maryland" class="usa-banner__additional-link">...</a>`
- XPath: `/a[@class="usa-banner__additional-link"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.maryland.gov/services/driving-and-transportation/drivers-and-motor-vehicles">Drivers and Motor Vehicles</a>`
- XPath: `/a`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.visitmaryland.org/" class="ext" data-extlink="" rel="nofollow noreferrer">...</a>`
- XPath: `/a[@class="ext"]`

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)

**Failure 1:**
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<a href="https://dnr.maryland.gov/publiclands/Pages/Miles-for-Maryland.aspx" class="maryland-card__link" aria-label=" - To commemorate the MARYLAND 250, Maryland State Parks is challenging you to hike 250 miles in State Parks this year!">...</a>`
- XPath: `/a[@class="maryland-card__link"]`

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p class="usa-banner__header-text">           An official website of the State of Mar...</p>`
- XPath: `/p[@class="usa-banner__header-text"]`

**Failure 2:**
- Message: The line height of the paragraph is `normal` which will result in a line height of less than 1.5
- HTML: `<p>Get the support you need to live well in Maryland.</p>`
- XPath: `/p`

### https://onestop.md.gov

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<a class="btn blue outline login-btn" data-remote="true" href="/sign_in">Log in</a>`
- XPath: `/a[@class="btn blue outline login-btn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a target="_blank" rel="noopener" class="btn-link" href="http://www.maryland.gov/pages/privacy_security.aspx">Privacy</a>`
- XPath: `/a[@class="btn-link"]`

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 4.53:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R73: Text spacing can be adjusted without loss of content](https://alfa.siteimprove.com/rules/sia-r73)

**Failure 1:**
- Message: The line height of the paragraph is less than 1.5
- HTML: `<p>OneStop is the central hub for Maryland State lice...</p>`
- XPath: `/p`

#### Rule: [SIA-R74](https://alfa.siteimprove.com/rules/sia-r74)

**Failure 1:**
- Message: The font size is specified using an absolute unit
- HTML: `<p>OneStop is the central hub for Maryland State lice...</p>`
- XPath: `/p`

### https://businessexpress.maryland.gov/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="ewf-headerbanner__btn" aria-expanded="false" aria-controls="official-banner">...</button>`
- XPath: `/button[@class="ewf-headerbanner__btn"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button id="mdg-mainNavToggle" class="mdg-entNav__btn" aria-controls="mdg-leftNav" aria-expanded="false">...</button>`
- XPath: `/button[@id="mdg-mainNavToggle"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="/contact">Contact Us</a>`
- XPath: `/a`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `banner` have the same name.

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 5.87:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)

**Failure 1:**
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="mdg-list">...</ul>`
- XPath: `/ul[@class="mdg-list"]`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h3 class="mdg-tile__heading">...</h3>`
- XPath: `/h3[@class="mdg-tile__heading"]`

#### Rule: [SIA-R85](https://alfa.siteimprove.com/rules/sia-r85)

**Failure 1:**
- Message: The text of the paragraph is all italic
- HTML: `<p class="mbe-tileCaption">Turn your great idea into a great business</p>`
- XPath: `/p[@class="mbe-tileCaption"]`

## Detailed Failure Information (axe)

### https://businessexpress.maryland.gov/

#### Rule: [landmark-no-duplicate-banner](https://dequeuniversity.com/rules/axe/4.11/landmark-no-duplicate-banner?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Document should not have more than one banner landmark
- HTML: `<header class="mdg-entNav">`
- XPath: `header`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="mdg-list">             <p>No notices at this time.</p> </ul>`
- XPath: `.mdg-list`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="p-3 bg-white border-top">`
- XPath: `.p-3`

