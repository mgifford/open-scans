# Scan Report: Bob's first try

- Issue: https://github.com/mgifford/open-scans/issues/92
- Submitted by: bobdodd
- Scanned at: 2026-03-06T16:37:56.561Z
- Engines used: All engines (AXE, ALFA, Equal Access, AccessLint, QualWeb)
- Scan duration: 0.4 minutes
- Total URLs submitted: 1
- Accepted public URLs: 1
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 1100 passed, 64 failed, 9 cantTell, 44 inapplicable
- axe outcomes: 922 passed, 2 failed, 6 cantTell, 41 inapplicable
- Equal Access outcomes: 3085 passed, 34 failed (33 unique, 1 duplicate), 21 cantTell, 0 inapplicable
- AccessLint outcomes: 76 passed, 16 failed (14 unique, 2 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 606 passed, 10 failed, 106 cantTell, 7 inapplicable
- Duplicate findings caught by later scanners: 51

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---:|---|
| [View Page](https://www.cnib.ca/en) | 2 | 21 | 33 | 14 | 10 | **80** | Home \| CNIB |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R111](https://alfa.siteimprove.com/rules/sia-r111): Interactive elements have a sufficient target size | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r111) |
| [SIA-R12](https://alfa.siteimprove.com/rules/sia-r12): Links have an accessible name | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r12) |
| [SIA-R14](https://alfa.siteimprove.com/rules/sia-r14): Images have an accessible name or are decorative | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r14) |
| [SIA-R18](https://alfa.siteimprove.com/rules/sia-r18): ARIA states are consistent with element semantics | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r18) |
| [SIA-R3](https://alfa.siteimprove.com/rules/sia-r3): lang attribute has a valid language code | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r3) |
| [SIA-R64](https://alfa.siteimprove.com/rules/sia-r64) | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r64) |
| [SIA-R78](https://alfa.siteimprove.com/rules/sia-r78): Headings of same level have text content between them | **1** of 1 | [View Rule](https://alfa.siteimprove.com/rules/sia-r78) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| button-name | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |
| empty-heading | **1** of 1 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-heading) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

✅ No recurring HTML patterns found across multiple pages. Each issue appears to be page-specific.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://cnib.ca | https://www.cnib.ca/en | OK | 200 | yes | 23620 | 2 | 21 | 33 | 14 | 51 | Home \| CNIB |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R12 (Links have an accessible name), SIA-R14 (Images have an accessible name or are decorative), SIA-R18 (ARIA states are consistent with element semantics), SIA-R3 (lang attribute has a valid language code), SIA-R64, SIA-R78 (Headings of same level have text content between them) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, empty-heading |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_accessiblename_exists, aria_attribute_valid, aria_child_tabbable, aria_complementary_labelled, aria_content_in_landmark, aria_keyboard_handler_exists, aria_role_redundant, element_tabbable_unobscured, heading_content_exists, input_label_visible, label_name_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, text_block_heading |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: distinguishable/color-contrast, labels-and-names/button-name, labels-and-names/duplicate-id-aria, labels-and-names/label-content-mismatch, labels-and-names/multiple-labels, landmarks/landmark-unique, navigable/empty-heading, navigable/page-has-heading-one |

## Detailed Failure Information (ALFA)

### https://cnib.ca

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button id="show-hide" class="flc-slidingPanel-toggleButton fl-prefsEditor-showHide" role="button" aria-controls="fluid-id-8ci5kgjj-598" aria-label="Show Display Preferences" aria-pressed="false">+ Show Preferences</button>`
- XPath: `/button[@id="show-hide"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="tel:18005632642" aria-label="Phone us by number: 1-800-563-2642">...</a>`
- XPath: `/a`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="/fr" class="language-link" lang="fr" aria-current="false" hreflang="fr" data-drupal-link-system-path="<front>">Français</a>`
- XPath: `/a[@class="language-link"]`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a class="button btn-lg" href="https://secure.cnib.ca/ui/GNdonate/donations/start">Donate</a>`
- XPath: `/a[@class="button btn-lg"]`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="/en" class="menu__link menu__link-level-0 is-active" target="_self" data-drupal-link-system-path="<front>" aria-current="page">Home</a>`
- XPath: `/a[@class="menu__link menu__link-level-0 is-active"]`

*... and 3 more failures for this rule*

#### Rule: [SIA-R12: Links have an accessible name](https://alfa.siteimprove.com/rules/sia-r12)

**Failure 1:**
- Message: The button does not have an accessible name
- HTML: `<button data-twig-suggestion="header_search_form" data-drupal-selector="edit-submit" type="submit" id="edit-submit" value="Search" class="button js-form-submit form-submit">...</button>`
- XPath: `/button[@id="edit-submit"]`

#### Rule: [SIA-R14: Images have an accessible name or are decorative](https://alfa.siteimprove.com/rules/sia-r14)

**Failure 1:**
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<button id="show-hide" class="flc-slidingPanel-toggleButton fl-prefsEditor-showHide" role="button" aria-controls="fluid-id-8ci5kgjj-598" aria-label="Show Display Preferences" aria-pressed="false">+ Show Preferences</button>`
- XPath: `/button[@id="show-hide"]`

**Failure 2:**
- Message: The visible text content of the element is not included within its accessible name
- HTML: `<a class="button-primary-cta " role="link" aria-label=" Reading Room" href="/en/node/34142">Read more</a>`
- XPath: `/a[@class="button-primary-cta "]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is not allowed for the element on which it is specified

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<form block="block-searchform" action="/en/search/node" method="get" id="search-block-form" accept-charset="UTF-8">...</form>`
- XPath: `/form[@id="search-block-form"]`

**Failure 2:**
- Message: The element does not have a unique ID
- HTML: `<input placeholder="Search..." data-drupal-selector="edit-keys" type="search" id="edit-keys" name="keys" value="" size="15" maxlength="128" class="form-search" />`
- XPath: `/input[@id="edit-keys"]`

**Failure 3:**
- Message: The element does not have a unique ID
- HTML: `<div data-drupal-selector="edit-actions" class="form-actions js-form-wrapper form-wrapper" id="edit-actions">...</div>`
- XPath: `/div[@id="edit-actions"]`

**Failure 4:**
- Message: The element does not have a unique ID
- HTML: `<button data-twig-suggestion="header_search_form" data-drupal-selector="edit-submit" type="submit" id="edit-submit" value="Search" class="button js-form-submit form-submit">...</button>`
- XPath: `/button[@id="edit-submit"]`

**Failure 5:**
- Message: The element does not have a unique ID
- HTML: `<div class="navbar navbar-expand-xl navbar-light" id="utility-nav-toggle">...</div>`
- XPath: `/div[@id="utility-nav-toggle"]`

*... and 2 more failures for this rule*

#### Rule: [SIA-R64](https://alfa.siteimprove.com/rules/sia-r64)

**Failure 1:**
- Message: The heading does not have an accessible name
- HTML: `<h1 class="page-title --section--100" />`
- XPath: `/h1[@class="page-title --section--100"]`

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h2 class="visually-hidden" id="block-octheme-footer-social-links">Social media links</h2>`
- XPath: `/h2[@id="block-octheme-footer-social-links"]`

## Detailed Failure Information (axe)

### https://cnib.ca

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button data-twig-suggestion="header_search_form" data-drupal-selector="edit-submit" type="submit" id="edit-submit" value="Search" class="button js-form-submit form-submit">`
- XPath: `form[block="block-searchform"] > .form-actions.js-form-wrapper.form-wrapper > .js-form-submit.form-submit[data-twig-suggestion="header_search_form"]`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h1 class="page-title --section--100"></h1>`
- XPath: `h1`

