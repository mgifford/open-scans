# Scan Report: Sweden's Government

- Issue: https://github.com/mgifford/open-scans/issues/66
- Submitted by: mgifford
- Scanned at: 2026-03-08T01:51:55.422Z
- Engines used: All engines (AXE, ALFA, Equal Access, AccessLint, QualWeb)
- Scan duration: 13.4 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🌙 **Dark mode tested: 100 of 100 URLs (100%) support `prefers-color-scheme: dark`**
- ALFA outcomes: 6602 passed, 200 failed, 100 cantTell, 6100 inapplicable
- axe outcomes: 12400 passed, 200 failed, 0 cantTell, 12200 inapplicable
- Equal Access outcomes: 17883 passed, 600 failed (600 unique, 0 duplicate), 300 cantTell, 0 inapplicable
- AccessLint outcomes: 8994 passed, 206 failed (206 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 3400 passed, 200 failed, 200 cantTell, 100 inapplicable
- Duplicate findings caught by later scanners: 0

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---:|---|
| [View Page](https://government.se/reports/) | 2 | 2 | 6 | 3 | 2 | **15** | Just a moment... |
| [View Page](https://government.se/government-policy/) | 2 | 2 | 6 | 3 | 2 | **15** | Just a moment... |
| [View Page](https://government.se/government-of-sweden/ministry-of-employment/) | 2 | 2 | 6 | 3 | 2 | **15** | Just a moment... |
| [View Page](https://government.se/government-policy/adult-education/) | 2 | 2 | 6 | 3 | 2 | **15** | Just a moment... |
| [View Page](https://government.se/tx/2634) | 2 | 2 | 6 | 3 | 2 | **15** | Just a moment... |
| [View Page](https://government.se/statements/2026/02/joint-ministerial-statement-on-protection-of-civilians-and-humanitarian-operations-in-sudan/) | 2 | 2 | 6 | 3 | 2 | **15** | Just a moment... |
| [View Page](https://government.se/) | 2 | 2 | 6 | 2 | 2 | **14** | Just a moment... |
| [View Page](https://government.se/government-policy/social-services/) | 2 | 2 | 6 | 2 | 2 | **14** | Just a moment... |
| [View Page](https://government.se/government-policy/swedens-support-to-ukraine/) | 2 | 2 | 6 | 2 | 2 | **14** | Just a moment... |
| [View Page](https://government.se/articles/2026/02/four-years-of-war-support-to-ukraine-remains-governments-foremost-foreign-policy-priority/) | 2 | 2 | 6 | 2 | 2 | **14** | Just a moment... |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9) | **100** of 100 | [View Rule](https://alfa.siteimprove.com/rules/sia-r9) |
| [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96) | **100** of 100 | [View Rule](https://alfa.siteimprove.com/rules/sia-r96) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue.


## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| meta-refresh | **100** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/meta-refresh) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 100 page(s) - 200 occurrence(s)

**Scanner**: axe
**Rule**: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical
**Issue**: Delayed refresh under 20 hours must not be used

**HTML Pattern**:
```html
<meta http-equiv="refresh" content="360">
```

**XPath** (use in browser DevTools):
```
meta[http-equiv="refresh"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('meta[http-equiv="refresh"]')`
5. The element will be highlighted

**Affected Pages**:
- https://government.se/
- https://government.se/reports/
- https://government.se/government-policy/social-services/
- https://government.se/government-policy/swedens-support-to-ukraine/
- https://government.se/articles/2026/02/four-years-of-war-support-to-ukraine-remains-governments-foremost-foreign-policy-priority/
- *...and 95 more page(s)*

---

#### Pattern 2: Affects 100 page(s) - 100 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R9: No description](https://alfa.siteimprove.com/rules/sia-r9)
**Issue**: The refresh or redirect is delayed

**HTML Pattern**:
```html
<meta http-equiv="refresh" content="360" />
```

**XPath** (use in browser DevTools):
```
/meta
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/meta')`
5. The element will be highlighted

**Affected Pages**:
- https://government.se/
- https://government.se/reports/
- https://government.se/government-policy/social-services/
- https://government.se/government-policy/swedens-support-to-ukraine/
- https://government.se/articles/2026/02/four-years-of-war-support-to-ukraine-remains-governments-foremost-foreign-policy-priority/
- *...and 95 more page(s)*

---

#### Pattern 3: Affects 100 page(s) - 100 occurrence(s)

**Scanner**: ALFA
**Rule**: [SIA-R96: No description](https://alfa.siteimprove.com/rules/sia-r96)
**Issue**: The refresh or redirect is delayed

**HTML Pattern**:
```html
<meta http-equiv="refresh" content="360" />
```

**XPath** (use in browser DevTools):
```
/meta
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('/meta')`
5. The element will be highlighted

**Affected Pages**:
- https://government.se/
- https://government.se/reports/
- https://government.se/government-policy/social-services/
- https://government.se/government-policy/swedens-support-to-ukraine/
- https://government.se/articles/2026/02/four-years-of-war-support-to-ukraine-remains-governments-foremost-foreign-policy-priority/
- *...and 95 more page(s)*

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://government.se/ | https://government.se/ | FAIL | 403 | no | 9866 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/reports/ | https://government.se/reports/ | FAIL | 403 | no | 8573 | 2 | 2 | 6 | 3 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception, navigable/page-has-heading-one |
| https://government.se/government-policy/social-services/ | https://government.se/government-policy/social-services/ | FAIL | 403 | no | 8276 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/swedens-support-to-ukraine/ | https://government.se/government-policy/swedens-support-to-ukraine/ | FAIL | 403 | no | 8301 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/articles/2026/02/four-years-of-war-support-to-ukraine-remains-governments-foremost-foreign-policy-priority/ | https://government.se/articles/2026/02/four-years-of-war-support-to-ukraine-remains-governments-foremost-foreign-policy-priority/ | FAIL | 403 | no | 8748 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/press-releases/2026/02/government-proposes-swedish-loan-guarantee-to-world-bank-to-enable-sek-2.5-billion-in-new-budget-support-to-ukraine | https://government.se/press-releases/2026/02/government-proposes-swedish-loan-guarantee-to-world-bank-to-enable-sek-2.5-billion-in-new-budget-support-to-ukraine | FAIL | 403 | no | 7986 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/press-releases/2026/02/new-large-support-package-to-ukraine-focused-on-air-defence/ | https://government.se/press-releases/2026/02/new-large-support-package-to-ukraine-focused-on-air-defence/ | FAIL | 403 | no | 8597 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/press-releases/2026/02/sek-230-million-in-humanitarian-support-to-ukraine/ | https://government.se/press-releases/2026/02/sek-230-million-in-humanitarian-support-to-ukraine/ | FAIL | 403 | no | 8032 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/about-the-website/ | https://government.se/about-the-website/ | FAIL | 403 | no | 7862 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/contact-information/ | https://government.se/contact-information/ | FAIL | 403 | no | 7845 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/contacts/ | https://government.se/contacts/ | FAIL | 403 | no | 8084 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-of-sweden/ | https://government.se/government-of-sweden/ | FAIL | 403 | no | 7798 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/ | https://government.se/government-policy/ | FAIL | 403 | no | 8094 | 2 | 2 | 6 | 3 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception, navigable/page-has-heading-one |
| https://government.se/how-sweden-is-governed/ | https://government.se/how-sweden-is-governed/ | FAIL | 403 | no | 7967 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/information-material/ | https://government.se/information-material/ | FAIL | 403 | no | 8014 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/international-development-cooperation-strategies/ | https://government.se/international-development-cooperation-strategies/ | FAIL | 403 | no | 7816 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/legal-documents/ | https://government.se/legal-documents/ | FAIL | 403 | no | 8240 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/press-images/ | https://government.se/press-images/ | FAIL | 403 | no | 8066 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/press-releases/ | https://government.se/press-releases/ | FAIL | 403 | no | 7963 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/press-room/ | https://government.se/press-room/ | FAIL | 403 | no | 7895 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/subscribe-via-email/ | https://government.se/subscribe-via-email/ | FAIL | 403 | no | 8075 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/sweden-in-the-eu/ | https://government.se/sweden-in-the-eu/ | FAIL | 403 | no | 7868 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/swedish-treaty-series/ | https://government.se/swedish-treaty-series/ | FAIL | 403 | no | 7995 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/the-government-offices/ | https://government.se/the-government-offices/ | FAIL | 403 | no | 7919 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/webcasts/ | https://government.se/webcasts/ | FAIL | 403 | no | 7928 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-of-sweden/ministry-for-foreign-affairs/ | https://government.se/government-of-sweden/ministry-for-foreign-affairs/ | FAIL | 403 | no | 9107 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-of-sweden/ministry-of-climate-and-enterprise/ | https://government.se/government-of-sweden/ministry-of-climate-and-enterprise/ | FAIL | 403 | no | 8103 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-of-sweden/ministry-of-culture/ | https://government.se/government-of-sweden/ministry-of-culture/ | FAIL | 403 | no | 8149 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-of-sweden/ministry-of-defence/ | https://government.se/government-of-sweden/ministry-of-defence/ | FAIL | 403 | no | 7968 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-of-sweden/ministry-of-education-and-research/ | https://government.se/government-of-sweden/ministry-of-education-and-research/ | FAIL | 403 | no | 7782 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-of-sweden/ministry-of-employment/ | https://government.se/government-of-sweden/ministry-of-employment/ | FAIL | 403 | no | 7769 | 2 | 2 | 6 | 3 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception, navigable/page-has-heading-one |
| https://government.se/government-of-sweden/ministry-of-finance/ | https://government.se/government-of-sweden/ministry-of-finance/ | FAIL | 403 | no | 7782 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-of-sweden/ministry-of-health-and-social-affairs/ | https://government.se/government-of-sweden/ministry-of-health-and-social-affairs/ | FAIL | 403 | no | 8263 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-of-sweden/ministry-of-justice/ | https://government.se/government-of-sweden/ministry-of-justice/ | FAIL | 403 | no | 8169 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/adult-education/ | https://government.se/government-policy/adult-education/ | FAIL | 403 | no | 7937 | 2 | 2 | 6 | 3 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception, navigable/page-has-heading-one |
| https://government.se/government-policy/care-for-older-people/ | https://government.se/government-policy/care-for-older-people/ | FAIL | 403 | no | 7865 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/central-government-administration/ | https://government.se/government-policy/central-government-administration/ | FAIL | 403 | no | 7859 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/childrens-rights/ | https://government.se/government-policy/childrens-rights/ | FAIL | 403 | no | 8089 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/civil-defence/ | https://government.se/government-policy/civil-defence/ | FAIL | 403 | no | 7916 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/civil-society-and-sport/ | https://government.se/government-policy/civil-society-and-sport/ | FAIL | 403 | no | 8072 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/combating-terrorism/ | https://government.se/government-policy/combating-terrorism/ | FAIL | 403 | no | 8003 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/how-sweden-is-governed/committees/ | https://government.se/how-sweden-is-governed/committees/ | FAIL | 403 | no | 8054 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/how-sweden-is-governed/general-elections-and-referendums/ | https://government.se/how-sweden-is-governed/general-elections-and-referendums/ | FAIL | 403 | no | 8075 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/how-sweden-is-governed/public-agencies-and-how-they-are-governed/ | https://government.se/how-sweden-is-governed/public-agencies-and-how-they-are-governed/ | FAIL | 403 | no | 8089 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/how-sweden-is-governed/state-owned-enterprises/ | https://government.se/how-sweden-is-governed/state-owned-enterprises/ | FAIL | 403 | no | 8114 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/how-sweden-is-governed/swedish-legislation---how-laws-are-made/ | https://government.se/how-sweden-is-governed/swedish-legislation---how-laws-are-made/ | FAIL | 403 | no | 7807 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/how-sweden-is-governed/the-constitution/ | https://government.se/how-sweden-is-governed/the-constitution/ | FAIL | 403 | no | 7837 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/how-sweden-is-governed/the-principle-of-public-access-to-official-documents/ | https://government.se/how-sweden-is-governed/the-principle-of-public-access-to-official-documents/ | FAIL | 403 | no | 8150 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/how-sweden-is-governed/the-swedish-model-of-government-administration/ | https://government.se/how-sweden-is-governed/the-swedish-model-of-government-administration/ | FAIL | 403 | no | 7752 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/press-room/government-offices-press-information-officers/ | https://government.se/press-room/government-offices-press-information-officers/ | FAIL | 403 | no | 7873 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/press-room/ministry-for-foreign-affairs-press-office/ | https://government.se/press-room/ministry-for-foreign-affairs-press-office/ | FAIL | 403 | no | 8453 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/press-room/press-contacts/ | https://government.se/press-room/press-contacts/ | FAIL | 403 | no | 7997 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/tx/2079 | https://government.se/tx/2079 | FAIL | 403 | no | 7797 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/tx/2078 | https://government.se/tx/2078 | FAIL | 403 | no | 7695 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/tx/2077 | https://government.se/tx/2077 | FAIL | 403 | no | 8155 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/tx/2634 | https://government.se/tx/2634 | FAIL | 403 | no | 7813 | 2 | 2 | 6 | 3 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception, navigable/page-has-heading-one |
| https://government.se/tx/2636 | https://government.se/tx/2636 | FAIL | 403 | no | 8121 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/tx/2640 | https://government.se/tx/2640 | FAIL | 403 | no | 8050 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/tx/2643 | https://government.se/tx/2643 | FAIL | 403 | no | 8123 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/tx/2649 | https://government.se/tx/2649 | FAIL | 403 | no | 8003 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/tx/2650 | https://government.se/tx/2650 | FAIL | 403 | no | 7864 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/tx/2652 | https://government.se/tx/2652 | FAIL | 403 | no | 7928 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/articles/2026/02/egypt-visit-characterised-by-impactful-meetings-and-deepened-cooperation/ | https://government.se/articles/2026/02/egypt-visit-characterised-by-impactful-meetings-and-deepened-cooperation/ | FAIL | 403 | no | 7986 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/articles/2026/02/minister-johan-britz-given-temporary-responsibility-for-climate-and-environment-issues/ | https://government.se/articles/2026/02/minister-johan-britz-given-temporary-responsibility-for-climate-and-environment-issues/ | FAIL | 403 | no | 7966 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/information-material/2026/02/swedens-ai-strategy/ | https://government.se/information-material/2026/02/swedens-ai-strategy/ | FAIL | 403 | no | 7808 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/speeches/2025/09/statement-of-government-policy-2025/ | https://government.se/speeches/2025/09/statement-of-government-policy-2025/ | FAIL | 403 | no | 8298 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/speeches/2025/11/statement-of-government-eu-policy/ | https://government.se/speeches/2025/11/statement-of-government-eu-policy/ | FAIL | 403 | no | 7882 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/speeches/2026/02/statement-of-foreign-policy-2026/ | https://government.se/speeches/2026/02/statement-of-foreign-policy-2026/ | FAIL | 403 | no | 8022 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/statements/2026/02/joint-likeminded-statement-on-the-occasion-of-the-second-anniversary-of-alexei-navalnys-death-on-16-february-2024/ | https://government.se/statements/2026/02/joint-likeminded-statement-on-the-occasion-of-the-second-anniversary-of-alexei-navalnys-death-on-16-february-2024/ | FAIL | 403 | no | 8043 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/statements/2026/02/joint-ministerial-statement-on-protection-of-civilians-and-humanitarian-operations-in-sudan/ | https://government.se/statements/2026/02/joint-ministerial-statement-on-protection-of-civilians-and-humanitarian-operations-in-sudan/ | FAIL | 403 | no | 8266 | 2 | 2 | 6 | 3 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception, navigable/page-has-heading-one |
| https://government.se/government-policy/nordic-affairs/ | https://government.se/government-policy/nordic-affairs/ | FAIL | 403 | no | 7959 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/education-for-children-and-young-people/ | https://government.se/government-policy/education-for-children-and-young-people/ | FAIL | 403 | no | 7985 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/youth-policy/ | https://government.se/government-policy/youth-policy/ | FAIL | 403 | no | 7888 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/innovation/ | https://government.se/government-policy/innovation/ | FAIL | 403 | no | 7887 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/rural-affairs-agriculture-and-food-production/ | https://government.se/government-policy/rural-affairs-agriculture-and-food-production/ | FAIL | 403 | no | 8125 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/transport-and-infrastructure/ | https://government.se/government-policy/transport-and-infrastructure/ | FAIL | 403 | no | 7729 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/press-releases/2026/02/new-strategy-for-reform-cooperation-with-eastern-europe-the-western-balkans-and-turkiye/ | https://government.se/press-releases/2026/02/new-strategy-for-reform-cooperation-with-eastern-europe-the-western-balkans-and-turkiye/ | FAIL | 403 | no | 8019 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/press-releases/2026/02/swedens-first-comprehensive-ai-strategy-aims-for-top-10-ranking/ | https://government.se/press-releases/2026/02/swedens-first-comprehensive-ai-strategy-aims-for-top-10-ranking/ | FAIL | 403 | no | 7973 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-of-sweden/ministry-of-employment/nina-larsson/ | https://government.se/government-of-sweden/ministry-of-employment/nina-larsson/ | FAIL | 403 | no | 7999 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/public-procurement/ | https://government.se/government-policy/public-procurement/ | FAIL | 403 | no | 8330 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/higher-education-research-and-space/ | https://government.se/government-policy/higher-education-research-and-space/ | FAIL | 403 | no | 7947 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/international-law/ | https://government.se/government-policy/international-law/ | FAIL | 403 | no | 8127 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/articles/2026/02/swedens-ai-strategy-in-five-minutes/ | https://government.se/articles/2026/02/swedens-ai-strategy-in-five-minutes/ | FAIL | 403 | no | 7849 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/culture/ | https://government.se/government-policy/culture/ | FAIL | 403 | no | 7846 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/mental-health-and-mental-health-care/ | https://government.se/government-policy/mental-health-and-mental-health-care/ | FAIL | 403 | no | 7939 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/state-owned-enterprises/ | https://government.se/government-policy/state-owned-enterprises/ | FAIL | 403 | no | 7880 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/gender-equality/ | https://government.se/government-policy/gender-equality/ | FAIL | 403 | no | 7997 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/protecting-the-2026-elections/ | https://government.se/government-policy/protecting-the-2026-elections/ | FAIL | 403 | no | 8128 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/economic-policy/ | https://government.se/government-policy/economic-policy/ | FAIL | 403 | no | 8071 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/medical-care/ | https://government.se/government-policy/medical-care/ | FAIL | 403 | no | 8087 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/judicial-system/ | https://government.se/government-policy/judicial-system/ | FAIL | 403 | no | 7947 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/gambling-policy/ | https://government.se/government-policy/gambling-policy/ | FAIL | 403 | no | 7821 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/the-constitution-of-sweden-and-personal-privacy/ | https://government.se/government-policy/the-constitution-of-sweden-and-personal-privacy/ | FAIL | 403 | no | 8109 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/press-releases/2026/02/ebba-busch-to-take-part-in-high-level-ai-meeting-in-india/ | https://government.se/press-releases/2026/02/ebba-busch-to-take-part-in-high-level-ai-meeting-in-india/ | FAIL | 403 | no | 7906 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-of-sweden/ministry-for-foreign-affairs/maria-malmer-stenergard/ | https://government.se/government-of-sweden/ministry-for-foreign-affairs/maria-malmer-stenergard/ | FAIL | 403 | no | 7884 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/labour-market/ | https://government.se/government-policy/labour-market/ | FAIL | 403 | no | 8059 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/the-governments-priorities/migration-and-integration/ | https://government.se/government-policy/the-governments-priorities/migration-and-integration/ | FAIL | 403 | no | 7813 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-policy/digital-policy/ | https://government.se/government-policy/digital-policy/ | FAIL | 403 | no | 7948 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/government-of-sweden/prime-ministers-office/ulf-kristersson/ | https://government.se/government-of-sweden/prime-ministers-office/ulf-kristersson/ | FAIL | 403 | no | 7929 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |
| https://government.se/tx/2757 | https://government.se/tx/2757 | FAIL | 403 | no | 7948 | 2 | 2 | 6 | 2 | 0 | Just a moment... |
|  |  |  |  |  |  |  |  |  |  | ALFA failed rules: SIA-R9, SIA-R96 |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: meta-refresh |
|  |  |  |  |  |  |  |  |  |  | Equal Access failed rules: element_attribute_deprecated, meta_refresh_delay, style_color_misuse, style_highcontrast_visible |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: enough-time/meta-refresh, enough-time/meta-refresh-no-exception |

## Detailed Failure Information (ALFA)

### https://government.se/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/reports/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/social-services/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/swedens-support-to-ukraine/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/articles/2026/02/four-years-of-war-support-to-ukraine-remains-governments-foremost-foreign-policy-priority/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/press-releases/2026/02/government-proposes-swedish-loan-guarantee-to-world-bank-to-enable-sek-2.5-billion-in-new-budget-support-to-ukraine

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/press-releases/2026/02/new-large-support-package-to-ukraine-focused-on-air-defence/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/press-releases/2026/02/sek-230-million-in-humanitarian-support-to-ukraine/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/about-the-website/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/contact-information/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/contacts/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-of-sweden/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/how-sweden-is-governed/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/information-material/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/international-development-cooperation-strategies/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/legal-documents/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/press-images/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/press-releases/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/press-room/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/subscribe-via-email/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/sweden-in-the-eu/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/swedish-treaty-series/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/the-government-offices/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/webcasts/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-of-sweden/ministry-for-foreign-affairs/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-of-sweden/ministry-of-climate-and-enterprise/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-of-sweden/ministry-of-culture/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-of-sweden/ministry-of-defence/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-of-sweden/ministry-of-education-and-research/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-of-sweden/ministry-of-employment/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-of-sweden/ministry-of-finance/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-of-sweden/ministry-of-health-and-social-affairs/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-of-sweden/ministry-of-justice/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/adult-education/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/care-for-older-people/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/central-government-administration/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/childrens-rights/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/civil-defence/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/civil-society-and-sport/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/combating-terrorism/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/how-sweden-is-governed/committees/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/how-sweden-is-governed/general-elections-and-referendums/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/how-sweden-is-governed/public-agencies-and-how-they-are-governed/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/how-sweden-is-governed/state-owned-enterprises/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/how-sweden-is-governed/swedish-legislation---how-laws-are-made/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/how-sweden-is-governed/the-constitution/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/how-sweden-is-governed/the-principle-of-public-access-to-official-documents/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/how-sweden-is-governed/the-swedish-model-of-government-administration/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/press-room/government-offices-press-information-officers/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/press-room/ministry-for-foreign-affairs-press-office/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/press-room/press-contacts/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/tx/2079

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/tx/2078

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/tx/2077

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/tx/2634

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/tx/2636

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/tx/2640

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/tx/2643

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/tx/2649

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/tx/2650

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/tx/2652

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/articles/2026/02/egypt-visit-characterised-by-impactful-meetings-and-deepened-cooperation/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/articles/2026/02/minister-johan-britz-given-temporary-responsibility-for-climate-and-environment-issues/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/information-material/2026/02/swedens-ai-strategy/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/speeches/2025/09/statement-of-government-policy-2025/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/speeches/2025/11/statement-of-government-eu-policy/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/speeches/2026/02/statement-of-foreign-policy-2026/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/statements/2026/02/joint-likeminded-statement-on-the-occasion-of-the-second-anniversary-of-alexei-navalnys-death-on-16-february-2024/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/statements/2026/02/joint-ministerial-statement-on-protection-of-civilians-and-humanitarian-operations-in-sudan/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/nordic-affairs/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/education-for-children-and-young-people/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/youth-policy/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/innovation/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/rural-affairs-agriculture-and-food-production/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/transport-and-infrastructure/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/press-releases/2026/02/new-strategy-for-reform-cooperation-with-eastern-europe-the-western-balkans-and-turkiye/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/press-releases/2026/02/swedens-first-comprehensive-ai-strategy-aims-for-top-10-ranking/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-of-sweden/ministry-of-employment/nina-larsson/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/public-procurement/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/higher-education-research-and-space/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/international-law/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/articles/2026/02/swedens-ai-strategy-in-five-minutes/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/culture/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/mental-health-and-mental-health-care/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/state-owned-enterprises/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/gender-equality/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/protecting-the-2026-elections/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/economic-policy/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/medical-care/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/judicial-system/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/gambling-policy/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/the-constitution-of-sweden-and-personal-privacy/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/press-releases/2026/02/ebba-busch-to-take-part-in-high-level-ai-meeting-in-india/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-of-sweden/ministry-for-foreign-affairs/maria-malmer-stenergard/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/labour-market/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/the-governments-priorities/migration-and-integration/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-policy/digital-policy/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/government-of-sweden/prime-ministers-office/ulf-kristersson/

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

### https://government.se/tx/2757

#### Rule: [SIA-R9](https://alfa.siteimprove.com/rules/sia-r9)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

#### Rule: [SIA-R96](https://alfa.siteimprove.com/rules/sia-r96)

**Failure 1:**
- Message: The refresh or redirect is delayed
- HTML: `<meta http-equiv="refresh" content="360" />`
- XPath: `/meta`

## Detailed Failure Information (axe)

### https://government.se/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/reports/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/social-services/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/swedens-support-to-ukraine/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/articles/2026/02/four-years-of-war-support-to-ukraine-remains-governments-foremost-foreign-policy-priority/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/press-releases/2026/02/government-proposes-swedish-loan-guarantee-to-world-bank-to-enable-sek-2.5-billion-in-new-budget-support-to-ukraine

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/press-releases/2026/02/new-large-support-package-to-ukraine-focused-on-air-defence/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/press-releases/2026/02/sek-230-million-in-humanitarian-support-to-ukraine/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/about-the-website/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/contact-information/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/contacts/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-of-sweden/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/how-sweden-is-governed/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/information-material/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/international-development-cooperation-strategies/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/legal-documents/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/press-images/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/press-releases/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/press-room/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/subscribe-via-email/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/sweden-in-the-eu/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/swedish-treaty-series/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/the-government-offices/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/webcasts/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-of-sweden/ministry-for-foreign-affairs/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-of-sweden/ministry-of-climate-and-enterprise/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-of-sweden/ministry-of-culture/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-of-sweden/ministry-of-defence/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-of-sweden/ministry-of-education-and-research/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-of-sweden/ministry-of-employment/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-of-sweden/ministry-of-finance/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-of-sweden/ministry-of-health-and-social-affairs/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-of-sweden/ministry-of-justice/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/adult-education/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/care-for-older-people/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/central-government-administration/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/childrens-rights/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/civil-defence/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/civil-society-and-sport/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/combating-terrorism/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/how-sweden-is-governed/committees/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/how-sweden-is-governed/general-elections-and-referendums/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/how-sweden-is-governed/public-agencies-and-how-they-are-governed/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/how-sweden-is-governed/state-owned-enterprises/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/how-sweden-is-governed/swedish-legislation---how-laws-are-made/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/how-sweden-is-governed/the-constitution/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/how-sweden-is-governed/the-principle-of-public-access-to-official-documents/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/how-sweden-is-governed/the-swedish-model-of-government-administration/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/press-room/government-offices-press-information-officers/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/press-room/ministry-for-foreign-affairs-press-office/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/press-room/press-contacts/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/tx/2079

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/tx/2078

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/tx/2077

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/tx/2634

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/tx/2636

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/tx/2640

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/tx/2643

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/tx/2649

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/tx/2650

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/tx/2652

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/articles/2026/02/egypt-visit-characterised-by-impactful-meetings-and-deepened-cooperation/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/articles/2026/02/minister-johan-britz-given-temporary-responsibility-for-climate-and-environment-issues/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/information-material/2026/02/swedens-ai-strategy/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/speeches/2025/09/statement-of-government-policy-2025/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/speeches/2025/11/statement-of-government-eu-policy/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/speeches/2026/02/statement-of-foreign-policy-2026/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/statements/2026/02/joint-likeminded-statement-on-the-occasion-of-the-second-anniversary-of-alexei-navalnys-death-on-16-february-2024/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/statements/2026/02/joint-ministerial-statement-on-protection-of-civilians-and-humanitarian-operations-in-sudan/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/nordic-affairs/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/education-for-children-and-young-people/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/youth-policy/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/innovation/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/rural-affairs-agriculture-and-food-production/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/transport-and-infrastructure/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/press-releases/2026/02/new-strategy-for-reform-cooperation-with-eastern-europe-the-western-balkans-and-turkiye/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/press-releases/2026/02/swedens-first-comprehensive-ai-strategy-aims-for-top-10-ranking/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-of-sweden/ministry-of-employment/nina-larsson/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/public-procurement/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/higher-education-research-and-space/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/international-law/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/articles/2026/02/swedens-ai-strategy-in-five-minutes/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/culture/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/mental-health-and-mental-health-care/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/state-owned-enterprises/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/gender-equality/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/protecting-the-2026-elections/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/economic-policy/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/medical-care/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/judicial-system/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/gambling-policy/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/the-constitution-of-sweden-and-personal-privacy/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/press-releases/2026/02/ebba-busch-to-take-part-in-high-level-ai-meeting-in-india/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-of-sweden/ministry-for-foreign-affairs/maria-malmer-stenergard/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/labour-market/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/the-governments-priorities/migration-and-integration/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-policy/digital-policy/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/government-of-sweden/prime-ministers-office/ulf-kristersson/

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

### https://government.se/tx/2757

#### Rule: [meta-refresh](https://dequeuniversity.com/rules/axe/4.11/meta-refresh?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

**Failure 2:**
- Message: Delayed refresh under 20 hours must not be used
- HTML: `<meta http-equiv="refresh" content="360">`
- XPath: `meta[http-equiv="refresh"]`

