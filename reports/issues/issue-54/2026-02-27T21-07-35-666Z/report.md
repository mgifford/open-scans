# Scan Report: Nova Scotia

- Issue: https://github.com/mgifford/alfa-scan/issues/54
- Submitted by: mgifford
- Scanned at: 2026-02-27T21:06:46.093Z
- Engines used: All engines (AXE, ALFA, Equal Access, AccessLint)
- Scan duration: 5.6 minutes
- Total URLs submitted: 23
- Accepted public URLs: 23
- Rejected URLs: 0
- ALFA outcomes: 3649 passed, 294 failed, 100 cantTell, 307 inapplicable
- axe outcomes: 3762 passed, 9 failed, 93 cantTell, 319 inapplicable
- Equal Access outcomes: 11866 passed, 124 failed (104 unique, 20 duplicate), 100 cantTell, 0 inapplicable
- AccessLint outcomes: 175 passed, 9 failed (9 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 282

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---|
| [View Page](https://news.novascotia.ca/) | 3 | 10 | 40 | 5 | **58** | News \| Government of Nova Scotia News Releases |
| [View Page](https://www.novascotia.ca/) | 2 | 6 | 22 | 0 | **30** | Government of Nova Scotia |
| [View Page](https://novascotia.ca/tariffs/) | 3 | 0 | 16 | 4 | **23** | Tariff response - Government of Nova Scotia, Canada |
| [View Page](https://www.novascotia.ca/programs-and-services) | 1 | 5 | 7 | 0 | **13** | Programs and Services - Government of Nova Scotia |
| [View Page](https://www.novascotia.ca/terms) | 0 | 4 | 7 | 0 | **11** | Terms of Use - Government of Nova Scotia |
| [View Page](https://www.novascotia.ca/copyright) | 0 | 4 | 6 | 0 | **10** | Copyright - Government of Nova Scotia |
| [View Page](https://www.novascotia.ca/contact-us) | 0 | 3 | 6 | 0 | **9** | Contact us - Government of Nova Scotia |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R111](https://alfa.siteimprove.com/rules/sia-r111): Interactive elements have a sufficient target size | **6** of 23 | [View Rule](https://alfa.siteimprove.com/rules/sia-r111) |
| [SIA-R18](https://alfa.siteimprove.com/rules/sia-r18): ARIA states are consistent with element semantics | **6** of 23 | [View Rule](https://alfa.siteimprove.com/rules/sia-r18) |
| [SIA-R57](https://alfa.siteimprove.com/rules/sia-r57): Landmarks don't repeat the same content | **1** of 23 | [View Rule](https://alfa.siteimprove.com/rules/sia-r57) |
| [SIA-R78](https://alfa.siteimprove.com/rules/sia-r78): Headings of same level have text content between them | **1** of 23 | [View Rule](https://alfa.siteimprove.com/rules/sia-r78) |
| [SIA-R53](https://alfa.siteimprove.com/rules/sia-r53): Headings follow a logical hierarchy | **1** of 23 | [View Rule](https://alfa.siteimprove.com/rules/sia-r53) |
| [SIA-R3](https://alfa.siteimprove.com/rules/sia-r3): lang attribute has a valid language code | **1** of 23 | [View Rule](https://alfa.siteimprove.com/rules/sia-r3) |
| [SIA-R56](https://alfa.siteimprove.com/rules/sia-r56): Landmarks with the same role are distinguishable | **1** of 23 | [View Rule](https://alfa.siteimprove.com/rules/sia-r56) |
| [SIA-R66](https://alfa.siteimprove.com/rules/sia-r66): Text has enhanced contrast with its background | **1** of 23 | [View Rule](https://alfa.siteimprove.com/rules/sia-r66) |
| [SIA-R68](https://alfa.siteimprove.com/rules/sia-r68): Accessible name contains the visible label text | **1** of 23 | [View Rule](https://alfa.siteimprove.com/rules/sia-r68) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| region | **2** of 23 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| landmark-unique | **2** of 23 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| heading-order | **1** of 23 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| list | **1** of 23 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/list) |
| button-name | **1** of 23 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/button-name) |
| link-name | **1** of 23 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/link-name) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<button class="search-box-button">Search</button>
```

**XPath** (use in browser DevTools):
```
/button[@class="search-box-button"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/button[@class="search-box-button"]')`
5. The element will be highlighted

**Affected Pages**:
- https://novascotia.ca/
- https://novascotia.ca/programs-and-services/registry-joint-stock-companies
- https://novascotia.ca/contact-us
- https://novascotia.ca/copyright
- https://novascotia.ca/terms

---

#### Pattern 2: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.x.com/nsgov" hreflang="en">X (formerly Twitter)</a>
```

**XPath** (use in browser DevTools):
```
/a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a')`
5. The element will be highlighted

**Affected Pages**:
- https://novascotia.ca/
- https://novascotia.ca/programs-and-services/registry-joint-stock-companies
- https://novascotia.ca/contact-us
- https://novascotia.ca/copyright
- https://novascotia.ca/terms

---

#### Pattern 3: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.youtube.com/nsgov" hreflang="en">YouTube</a>
```

**XPath** (use in browser DevTools):
```
/a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a')`
5. The element will be highlighted

**Affected Pages**:
- https://novascotia.ca/
- https://novascotia.ca/programs-and-services/registry-joint-stock-companies
- https://novascotia.ca/contact-us
- https://novascotia.ca/copyright
- https://novascotia.ca/terms

---

#### Pattern 4: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://www.facebook.com/nsgov" hreflang="en">Facebook</a>
```

**XPath** (use in browser DevTools):
```
/a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a')`
5. The element will be highlighted

**Affected Pages**:
- https://novascotia.ca/
- https://novascotia.ca/programs-and-services/registry-joint-stock-companies
- https://novascotia.ca/contact-us
- https://novascotia.ca/copyright
- https://novascotia.ca/terms

---

#### Pattern 5: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/privacy">Privacy</a>
```

**XPath** (use in browser DevTools):
```
/a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a')`
5. The element will be highlighted

**Affected Pages**:
- https://novascotia.ca/
- https://novascotia.ca/programs-and-services/registry-joint-stock-companies
- https://novascotia.ca/contact-us
- https://novascotia.ca/copyright
- https://novascotia.ca/terms

---

#### Pattern 6: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/terms">Terms</a>
```

**XPath** (use in browser DevTools):
```
/a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a')`
5. The element will be highlighted

**Affected Pages**:
- https://novascotia.ca/
- https://novascotia.ca/programs-and-services/registry-joint-stock-companies
- https://novascotia.ca/contact-us
- https://novascotia.ca/copyright
- https://novascotia.ca/terms

---

#### Pattern 7: Affects 5 page(s) - 5 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="/copyright">Crown copyright © Government of Nova Scotia</a>
```

**XPath** (use in browser DevTools):
```
/a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a')`
5. The element will be highlighted

**Affected Pages**:
- https://novascotia.ca/
- https://novascotia.ca/programs-and-services/registry-joint-stock-companies
- https://novascotia.ca/contact-us
- https://novascotia.ca/copyright
- https://novascotia.ca/terms

---

#### Pattern 8: Affects 2 page(s) - 2 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)
**Issue**: Target has insufficient size

**HTML Pattern**:
```html
<a href="https://data.novascotia.ca/">Open Data</a>
```

**XPath** (use in browser DevTools):
```
/a
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/a')`
5. The element will be highlighted

**Affected Pages**:
- https://novascotia.ca/
- https://novascotia.ca/programs-and-services/registry-joint-stock-companies

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://novascotia.ca/ | https://www.novascotia.ca/ | OK | 200 | yes | 10300 | 2 | 6 | 22 | 0 | 30 | page.addScriptTag: Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self' https://novascotia.ca https://*.googletagmanager.com www.google-analytics.com https://static.cloudflareinsights.com". Either the 'unsafe-inline' keyword, a hash ('sha256-JKiJbq2l9mNMJ8t/GHj+7opGZGnqUf1+Evy3YGkopGM='), or a nonce ('nonce-...') is required to enable inline execution.  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics), SIA-R57 (Landmarks don't repeat the same content), SIA-R78 (Headings of same level have text content between them) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_content_in_landmark, aria_role_redundant, element_id_unique, element_tabbable_unobscured, element_tabbable_visible, form_submit_button_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible, svg_graphics_labelled, target_spacing_sufficient, text_sensory_misuse |
| https://novascotia.ca/programs-and-services | https://novascotia.ca/programs-and-services | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://novascotia.ca/programs-and-services/registry-joint-stock-companies | https://www.novascotia.ca/programs-and-services | OK | 200 | yes | 13580 | 1 | 5 | 7 | 0 | 152 | page.addScriptTag: Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self' https://novascotia.ca https://*.googletagmanager.com www.google-analytics.com https://static.cloudflareinsights.com". Either the 'unsafe-inline' keyword, a hash ('sha256-JKiJbq2l9mNMJ8t/GHj+7opGZGnqUf1+Evy3YGkopGM='), or a nonce ('nonce-...') is required to enable inline execution.  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics), SIA-R53 (Headings follow a logical hierarchy) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: heading-order |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_role_redundant, element_tabbable_visible, form_submit_button_exists, style_color_misuse, style_highcontrast_visible |
| https://novascotia.ca/budget/ | https://novascotia.ca/budget/ | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://novascotia.ca/contact-us | https://www.novascotia.ca/contact-us | OK | 200 | yes | 6525 | 0 | 3 | 6 | 0 | 19 | page.addScriptTag: Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self' https://novascotia.ca https://*.googletagmanager.com www.google-analytics.com https://static.cloudflareinsights.com". Either the 'unsafe-inline' keyword, a hash ('sha256-JKiJbq2l9mNMJ8t/GHj+7opGZGnqUf1+Evy3YGkopGM='), or a nonce ('nonce-...') is required to enable inline execution.  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_role_redundant, element_tabbable_visible, form_submit_button_exists, style_color_misuse, style_highcontrast_visible |
| https://novascotia.ca/copyright | https://www.novascotia.ca/copyright | OK | 200 | yes | 5531 | 0 | 4 | 6 | 0 | 5 | page.addScriptTag: Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self' https://novascotia.ca https://*.googletagmanager.com www.google-analytics.com https://static.cloudflareinsights.com". Either the 'unsafe-inline' keyword, a hash ('sha256-JKiJbq2l9mNMJ8t/GHj+7opGZGnqUf1+Evy3YGkopGM='), or a nonce ('nonce-...') is required to enable inline execution.  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_role_redundant, element_tabbable_visible, form_submit_button_exists, style_color_misuse, style_highcontrast_visible |
| https://novascotia.ca/government | https://novascotia.ca/government | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://novascotia.ca/news/ | https://news.novascotia.ca/ | OK | 200 | yes | 42015 | 3 | 10 | 40 | 5 | 68 | News \| Government of Nova Scotia News Releases |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics), SIA-R3 (lang attribute has a valid language code), SIA-R56 (Landmarks with the same role are distinguishable), SIA-R66 (Text has enhanced contrast with its background), SIA-R68 (Accessible name contains the visible label text) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique, list, region |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_child_valid, aria_content_in_landmark, aria_landmark_name_unique, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_role_valid, element_tabbable_unobscured, element_tabbable_visible, input_label_visible, style_color_misuse, style_focus_visible, style_highcontrast_visible, style_viewport_resizable |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: adaptable/list-children, keyboard-accessible/focus-order |
| https://novascotia.ca/privacy | https://novascotia.ca/privacy | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://novascotia.ca/residential-tenancies-tenants-and-landlords/ | https://novascotia.ca/residential-tenancies-tenants-and-landlords/ | FAIL | - | no | 60002 | 0 | 0 | 0 | 0 | 0 | URL scan exceeded 60s timeout |
| https://novascotia.ca/tariffs/ | https://novascotia.ca/tariffs/ | OK | 200 | no | 34652 | 3 | 0 | 16 | 4 | 0 | Timeout exceeded while navigating to the page |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: button-name, landmark-unique, link-name |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: a_text_purpose, aria_navigation_label_unique, aria_role_redundant, element_attribute_deprecated, element_tabbable_visible, form_submit_button_exists, input_label_exists, input_label_visible, label_content_exists, style_color_misuse, style_focus_visible, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: keyboard-accessible/tabindex, labels-and-names/button-name, navigable/link-name |
| https://novascotia.ca/terms | https://www.novascotia.ca/terms | OK | 200 | yes | 6057 | 0 | 4 | 7 | 0 | 8 | page.addScriptTag: Refused to execute inline script because it violates the following Content Security Policy directive: "script-src 'self' https://novascotia.ca https://*.googletagmanager.com www.google-analytics.com https://static.cloudflareinsights.com". Either the 'unsafe-inline' keyword, a hash ('sha256-JKiJbq2l9mNMJ8t/GHj+7opGZGnqUf1+Evy3YGkopGM='), or a nonce ('nonce-...') is required to enable inline execution.  |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R111 (Interactive elements have a sufficient target size), SIA-R18 (ARIA states are consistent with element semantics) |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: aria_attribute_valid, aria_role_redundant, element_tabbable_visible, form_submit_button_exists, style_color_misuse, style_highcontrast_visible, text_sensory_misuse |
| https://novascotia.ca/topics | https://novascotia.ca/topics | FAIL | - | no | 10495 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://novascotia.ca/documents/budget-documents-2026-2027 | https://novascotia.ca/documents/budget-documents-2026-2027 | FAIL | - | no | 10495 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://novascotia.ca/topic/births-deaths-marriage-and-identity | https://novascotia.ca/topic/births-deaths-marriage-and-identity | FAIL | - | no | 10492 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://novascotia.ca/topic/business-non-profit-and-self-employed | https://novascotia.ca/topic/business-non-profit-and-self-employed | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://novascotia.ca/topic/education-training-and-skills | https://novascotia.ca/topic/education-training-and-skills | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://novascotia.ca/topic/housing-property-and-community | https://novascotia.ca/topic/housing-property-and-community | FAIL | - | no | 10495 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://novascotia.ca/topic/how-government-works | https://novascotia.ca/topic/how-government-works | FAIL | - | no | 10495 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://novascotia.ca/topic/industry-and-economy | https://novascotia.ca/topic/industry-and-economy | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://novascotia.ca/topic/law-justice-and-safety | https://novascotia.ca/topic/law-justice-and-safety | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://novascotia.ca/topic/money-tax-and-benefits | https://novascotia.ca/topic/money-tax-and-benefits | FAIL | - | no | 10494 | 0 | 0 | 0 | 0 | 0 | fetch failed |
| https://novascotia.ca/just/regulations/consregs.htm | https://novascotia.ca/just/regulations/consregs.htm | FAIL | - | no | 10493 | 0 | 0 | 0 | 0 | 0 | fetch failed |

## Detailed Failure Information (ALFA)

### https://novascotia.ca/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="search-box-button">Search</button>`
- XPath: `/button[@class="search-box-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="/documents/budget-documents-2026-2027">Budget documents 2026-2027</a>`
- XPath: `/a`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<button class="floating-dialog-close" aria-label="Close" type="button">×</button>`
- XPath: `/button[@class="floating-dialog-close"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R57: Landmarks don't repeat the same content](https://alfa.siteimprove.com/rules/sia-r57)

**Failure 1:**
- Message: The text is not included in a landmark region

#### Rule: [SIA-R78: Headings of same level have text content between them](https://alfa.siteimprove.com/rules/sia-r78)

**Failure 1:**
- Message: There is no content between this heading and the next
- HTML: `<h2>What government is doing</h2>`
- XPath: `/h2`

### https://novascotia.ca/programs-and-services/registry-joint-stock-companies

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="search-box-button">Search</button>`
- XPath: `/button[@class="search-box-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="/fr/programmes-et-services" class="language-link" hreflang="fr" data-drupal-link-system-path="programs-and-services">Français</a>`
- XPath: `/a[@class="language-link"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="/programs-and-services/911-emergency" hreflang="en">911 Emergency</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R53: Headings follow a logical hierarchy](https://alfa.siteimprove.com/rules/sia-r53)

**Failure 1:**
- Message: The heading skips one or more levels
- HTML: `<h3>More programs and services</h3>`
- XPath: `/h3`

### https://novascotia.ca/contact-us

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="search-box-button">Search</button>`
- XPath: `/button[@class="search-box-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="/contact/emergency-management">Department of Emergency Management</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

### https://novascotia.ca/copyright

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="search-box-button">Search</button>`
- XPath: `/button[@class="search-box-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="/fr/droit-dauteur" class="language-link" hreflang="fr" data-drupal-link-system-path="node/1187">Français</a>`
- XPath: `/a[@class="language-link"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.x.com/nsgov" hreflang="en">X (formerly Twitter)</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

### https://novascotia.ca/news/

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button data-drupal-selector="edit-submit-search-results-all-content" type="submit" id="edit-submit-search-results-all-content" value="Search" class="button js-form-submit form-submit btn btn-primary">Search</button>`
- XPath: `/button[@id="edit-submit-search-results-all-content"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<button class="navbar-toggler navbar-toggler-right news-link-filter" type="button" data-bs-toggle="collapse" data-bs-target="#CollapsingNavbarFilter" aria-controls="CollapsingNavbarFilter" aria-expanded="false" aria-label="Toggle navigation">...</button>`
- XPath: `/button[@class="navbar-toggler navbar-toggler-right news-link-filter"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="/en/2026/02/23/budget-2026-27-defending-nova-scotia">...</a>`
- XPath: `/a`

**Failure 4:**
- Message: Target has insufficient size
- HTML: `<a href="https://beta.novascotia.ca/privacy" class="nav-link nav-link-https--betanovascotiaca-privacy">Privacy</a>`
- XPath: `/a[@class="nav-link nav-link-https--betanovascotiaca-privacy"]`

**Failure 5:**
- Message: Target has insufficient size
- HTML: `<a href="https://beta.novascotia.ca/terms" class="nav-link nav-link-https--betanovascotiaca-terms">Terms</a>`
- XPath: `/a[@class="nav-link nav-link-https--betanovascotiaca-terms"]`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

#### Rule: [SIA-R3: lang attribute has a valid language code](https://alfa.siteimprove.com/rules/sia-r3)

**Failure 1:**
- Message: The element does not have a unique ID
- HTML: `<form action="/search/all" method="get" id="views-exposed-form-search-results-all-content-page-1" accept-charset="UTF-8" data-once="form-updated advancedSearchFilters" data-drupal-form-fields="edit-search-keyword,edit-created,edit-created-1,edit-field-language,edit-field-category,edit-field-topics,edit-field-article-type-15,edit-field-article-type-215,edit-field-article-type-214,edit-field-article-type-17,edit-field-article-type-14,edit-field-article-type-18,edit-field-article-type-16">...</form>`
- XPath: `/form[@id="views-exposed-form-search-results-all-content-page-1"]`

#### Rule: [SIA-R56: Landmarks with the same role are distinguishable](https://alfa.siteimprove.com/rules/sia-r56)

**Failure 1:**
- Message: Some `navigation` have the same name.

#### Rule: [SIA-R66: Text has enhanced contrast with its background](https://alfa.siteimprove.com/rules/sia-r66)

**Failure 1:**
- Message: The highest possible contrast of the text is 6.86:1 which is         below the required contrast of 7:1

#### Rule: [SIA-R68: Accessible name contains the visible label text](https://alfa.siteimprove.com/rules/sia-r68)

**Failure 1:**
- Message: The element owns no elements as required by its semantic role
- HTML: `<ul class="footer-statement-links">...</ul>`
- XPath: `/ul[@class="footer-statement-links"]`

### https://novascotia.ca/terms

#### Rule: [SIA-R111: Interactive elements have a sufficient target size](https://alfa.siteimprove.com/rules/sia-r111)

**Failure 1:**
- Message: Target has insufficient size
- HTML: `<button class="search-box-button">Search</button>`
- XPath: `/button[@class="search-box-button"]`

**Failure 2:**
- Message: Target has insufficient size
- HTML: `<a href="/fr/conditions-dutilisation" class="language-link" hreflang="fr" data-drupal-link-system-path="node/600">Français</a>`
- XPath: `/a[@class="language-link"]`

**Failure 3:**
- Message: Target has insufficient size
- HTML: `<a href="https://www.x.com/nsgov" hreflang="en">X (formerly Twitter)</a>`
- XPath: `/a`

#### Rule: [SIA-R18: ARIA states are consistent with element semantics](https://alfa.siteimprove.com/rules/sia-r18)

**Failure 1:**
- Message: The attribute is prohibited for the element on which it is specified

## Detailed Failure Information (axe)

### https://novascotia.ca/

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="floating-dialog-content">Try Scottie, our new virtual assistant.</div>`
- XPath: `.floating-dialog-content`

**Failure 2:**
- Message: All page content should be contained by landmarks
- HTML: `<span>Ask a question</span>`
- XPath: `.floating-dialog-button > span`

### https://novascotia.ca/programs-and-services/registry-joint-stock-companies

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h3>More programs and services</h3>`
- XPath: `h3`

### https://novascotia.ca/news/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="navbar navbar-top sticky-top" id="navbar-top">`
- XPath: `#navbar-top`

#### Rule: [list](https://dequeuniversity.com/rules/axe/4.11/list?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: <ul> and <ol> must only directly contain <li>, <script> or <template> elements
- HTML: `<ul class="footer-statement-links">`
- XPath: `.footer-statement-links`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<a href="#main-content" class="visually-hidden focusable skip-link">       Skip to main content     </a>`
- XPath: `.focusable`

### https://novascotia.ca/tariffs/

#### Rule: [button-name](https://dequeuniversity.com/rules/axe/4.11/button-name?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Buttons must have discernible text
- HTML: `<button class="search-box-button" name="btnG"></button>`
- XPath: `button`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav class="skip-links"> 	<a href="#main" class="skip-to-link">Skip to main content</a> </nav>`
- XPath: `.skip-links`

#### Rule: [link-name](https://dequeuniversity.com/rules/axe/4.11/link-name?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Links must have discernible text
- HTML: `<a href="https://nsloyal.ca" style="padding:0; margin:0;"><img src="img/nsloyal.png" style="display: block; width: 45%; margin-left: 2rem;" alt=""></a>`
- XPath: `.secondary-content:nth-child(2) > a[href$="nsloyal.ca"]`

