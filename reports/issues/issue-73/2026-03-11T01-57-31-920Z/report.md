# Scan Report: ASC CANADA

- Issue: https://github.com/mgifford/open-scans/issues/73
- Submitted by: mgifford
- Scanned at: 2026-03-11T01:56:36.163Z
- Engines used: AXE, ACCESSLINT
- Scan duration: 6.8 minutes
- Total URLs submitted: 100
- Accepted public URLs: 100
- Rejected URLs: 0
- 🌙 Dark mode: None of the scanned URLs support `prefers-color-scheme: dark`
- ALFA outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- axe outcomes: 104814 passed, 376 failed, 3917 cantTell, 3926 inapplicable
- Equal Access outcomes: 0 passed, 0 failed (0 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- AccessLint outcomes: 8910 passed, 290 failed (290 unique, 0 duplicate), 0 cantTell, 0 inapplicable
- QualWeb outcomes: 0 passed, 0 failed, 0 cantTell, 0 inapplicable
- Duplicate findings caught by later scanners: 0

## 🎯 Priority: Pages with Most Errors

Focus your efforts on these pages to make the biggest impact (combined scanner unique failures):

| Page | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | QualWeb | Total Unique | Page Title |
|---|---:|---:|---:|---:|---:|---:|---|
| [View Page](https://accessible.canada.ca/creating-accessibility-standards/summary-can-asc-112024-rev-2025-employment) | 18 | 0 | 0 | 10 | 0 | **28** | Summary of CAN/ASC-1.1:2024 (REV-2025)-Employment - Accessibility Standards Canada |
| [View Page](https://accessible.canada.ca/creating-accessibility-standards/accessible-and-equitable-artificial-intelligence-systems-technical-guide) | 7 | 0 | 0 | 7 | 0 | **14** | Accessible and Equitable Artificial Intelligence Systems - Accessibility Standards Canada |
| [View Page](https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/7-facilities-and-furniture) | 4 | 0 | 0 | 6 | 0 | **10** | 7. Facilities and furniture - Accessibility Standards Canada |
| [View Page](https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/10-structural-support-policy-and-leadership-systems-policies-and-practices) | 5 | 0 | 0 | 5 | 0 | **10** | 10. Structural support, policy, and leadership (systems, policies, and practices) - Accessibility Standards Canada |
| [View Page](https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage) | 5 | 0 | 0 | 4 | 0 | **9** | CAN-ASC-2.4 – Wayfinding and Signage - Accessibility Standards Canada |
| [View Page](https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/9-wayfinding-and-communicating-universal-information) | 4 | 0 | 0 | 5 | 0 | **9** | 9. Wayfinding and communicating universal information - Accessibility Standards Canada |
| [View Page](https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/10-support-person) | 4 | 0 | 0 | 4 | 0 | **8** | 10. Support person - Accessibility Standards Canada |
| [View Page](https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/16-emergency-signage-and-wayfinding) | 4 | 0 | 0 | 4 | 0 | **8** | 16. Emergency signage and wayfinding - Accessibility Standards Canada |
| [View Page](https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/10-general-requirements-lighting-and-contrast) | 4 | 0 | 0 | 4 | 0 | **8** | 10. General requirements for lighting and contrast - Accessibility Standards Canada |
| [View Page](https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/11-wayfinding) | 4 | 0 | 0 | 4 | 0 | **8** | 11. Wayfinding - Accessibility Standards Canada |

## 🔧 Priority: Most Common Issues (ALFA)

These ALFA accessibility issues appear most frequently across your pages:

✅ No ALFA failed rules detected!

## 🔧 Priority: Most Common Issues (axe)

These axe accessibility issues appear most frequently across your pages:

| Rule | Pages Affected | Documentation |
|---|---:|---|
| landmark-unique | **100** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/landmark-unique) |
| aria-allowed-attr | **99** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-attr) |
| aria-allowed-role | **99** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-allowed-role) |
| aria-required-children | **56** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/aria-required-children) |
| frame-focusable-content | **3** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/frame-focusable-content) |
| label-title-only | **3** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/label-title-only) |
| region | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/region) |
| heading-order | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/heading-order) |
| empty-heading | **1** of 100 | [View Rule](https://dequeuniversity.com/rules/axe/4.11.1/empty-heading) |

> 💡 **Tip**: Click on the rule documentation links to learn how to fix each issue. Consider fixing the most common issues first for maximum impact.

> 🤖 **Future Enhancement**: This report will soon include AI-powered fix suggestions for authenticated GitHub users (opt-in only, no auto-run AI).

## 🔍 Cross-Page Patterns: Common HTML Issues

These HTML patterns cause the same accessibility errors across multiple pages. **Fix the pattern once in your codebase to fix it everywhere!**

### 🎯 Top Patterns to Fix (Highest Impact)

#### Pattern 1: Affects 100 page(s) - 100 occurrence(s)

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
#nav-top > nav
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#nav-top > nav')`
5. The element will be highlighted

**Affected Pages**:
- https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/10-support-person
- https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/12-documentation-and-support-services
- https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage
- https://accessible.canada.ca/creating-accessibility-standards/overview-draft-standard-can-asc-24-wayfinding-and-signage
- https://accessible.canada.ca/
- *...and 95 more page(s)*

---

#### Pattern 2: Affects 99 page(s) - 99 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical
**Issue**: Elements must only use supported ARIA attributes

**HTML Pattern**:
```html
<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">
```

**XPath** (use in browser DevTools):
```
div[aria-labelledby="wb-auto-3"]
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('div[aria-labelledby="wb-auto-3"]')`
5. The element will be highlighted

**Affected Pages**:
- https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/10-support-person
- https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/12-documentation-and-support-services
- https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage
- https://accessible.canada.ca/creating-accessibility-standards/overview-draft-standard-can-asc-24-wayfinding-and-signage
- https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/9-wayfinding-and-communicating-universal-information
- *...and 94 more page(s)*

---

#### Pattern 3: Affects 76 page(s) - 76 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor
**Issue**: ARIA role should be appropriate for the element

**HTML Pattern**:
```html
<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">
```

**XPath** (use in browser DevTools):
```
#information
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#information')`
5. The element will be highlighted

**Affected Pages**:
- https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/10-support-person
- https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/12-documentation-and-support-services
- https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage
- https://accessible.canada.ca/creating-accessibility-standards/overview-draft-standard-can-asc-24-wayfinding-and-signage
- https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/9-wayfinding-and-communicating-universal-information
- *...and 71 more page(s)*

---

#### Pattern 4: Affects 56 page(s) - 56 occurrence(s)

**Scanner**: axe
**Rule**: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical
**Issue**: Certain ARIA roles must contain particular children

**HTML Pattern**:
```html
<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">
```

**XPath** (use in browser DevTools):
```
.generated
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.generated')`
5. The element will be highlighted

**Affected Pages**:
- https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/10-support-person
- https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/12-documentation-and-support-services
- https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage
- https://accessible.canada.ca/creating-accessibility-standards/overview-draft-standard-can-asc-24-wayfinding-and-signage
- https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/9-wayfinding-and-communicating-universal-information
- *...and 51 more page(s)*

---

#### Pattern 5: Affects 20 page(s) - 20 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor
**Issue**: ARIA role should be appropriate for the element

**HTML Pattern**:
```html
<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">
```

**XPath** (use in browser DevTools):
```
#information
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#information')`
5. The element will be highlighted

**Affected Pages**:
- https://accessible.canada.ca/research-project-database/accessibility-e-streaming-services
- https://accessible.canada.ca/research-project-database/accessibility-standards-commercial-audiobooks
- https://accessible.canada.ca/research-project-database/career-transitions-and-accessibility-canadian-federal-public-service
- https://accessible.canada.ca/research-project-database/web-accessibility-canadian-banking-financial-services
- https://accessible.canada.ca/research-project-database/accessible-skies-enhancing-accessibility-airport-experiences-passengers-cognitive-disabilities-and-their-support-networks
- *...and 15 more page(s)*

---

#### Pattern 6: Affects 3 page(s) - 9 occurrence(s)

**Scanner**: axe
**Rule**: [frame-focusable-content](https://dequeuniversity.com/rules/axe/4.11/frame-focusable-content?application=playwright)
**Impact**: serious
**Issue**: Frames with focusable content must not have tabindex=-1

**HTML Pattern**:
```html
<html lang="en" dir="ltr" data-cast-api-enabled="true">
```

**XPath** (use in browser DevTools):
```
#wb-auto-5-md
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#wb-auto-5-md')`
5. The element will be highlighted

**Affected Pages**:
- https://accessible.canada.ca/creating-accessibility-standards/overview-draft-standard-can-asc-24-wayfinding-and-signage
- https://accessible.canada.ca/creating-accessibility-standards/summary-can-asc-112024-rev-2025-employment
- https://accessible.canada.ca/creating-accessibility-standards/accessible-and-equitable-artificial-intelligence-systems-technical-guide

---

#### Pattern 7: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious
**Issue**: Form elements should have a visible label

**HTML Pattern**:
```html
<input type="range" class="volume" aria-controls="wb-auto-5-md" aria-labelledby="wb-auto-5-md" aria-describedby="wb-auto-5-md-vlm-lbl" title="Volume" min="0" max="100" value="100" step="5">
```

**XPath** (use in browser DevTools):
```
.volume
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('.volume')`
5. The element will be highlighted

**Affected Pages**:
- https://accessible.canada.ca/creating-accessibility-standards/overview-draft-standard-can-asc-24-wayfinding-and-signage
- https://accessible.canada.ca/creating-accessibility-standards/summary-can-asc-112024-rev-2025-employment
- https://accessible.canada.ca/creating-accessibility-standards/accessible-and-equitable-artificial-intelligence-systems-technical-guide

---

#### Pattern 8: Affects 3 page(s) - 3 occurrence(s)

**Scanner**: axe
**Rule**: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor
**Issue**: ARIA role should be appropriate for the element

**HTML Pattern**:
```html
<details id="information" data-webform-details-nosave="true" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk" data-once="details webform-details-save">
```

**XPath** (use in browser DevTools):
```
#information
```

**How to Replicate**:
1. Open any affected page in your browser
2. Press F12 to open DevTools
3. Go to Console tab
4. Run: `$x('#information')`
5. The element will be highlighted

**Affected Pages**:
- https://accessible.canada.ca/research-project-database/status-report-accessibility-child-care-canada-children-disabilities-aged-0-5
- https://accessible.canada.ca/research-project-database/accessibility-canadian-emergency-alerts-study-unmet-needs
- https://accessible.canada.ca/research-project-database/accessible-canada-accessible-world-co-creating-global-standards-community

---

> 💡 **Pro Tip**: These patterns likely come from shared components or templates in your codebase. Fix them in the component/template source, and the fix will propagate to all affected pages.

## 📊 Detailed Results

Complete scan results for all tested pages:

| Submitted URL | Final URL | Status | HTTP | Redirected | Time (ms) | axe Unique | ALFA Unique | Equal Access Unique | AccessLint Unique | Duplicates | Notes |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/10-support-person | https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/10-support-person | OK | 200 | no | 4784 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/12-documentation-and-support-services | https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/12-documentation-and-support-services | OK | 200 | no | 4803 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage | OK | 200 | no | 5816 | 5 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique, region |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/overview-draft-standard-can-asc-24-wayfinding-and-signage | https://accessible.canada.ca/creating-accessibility-standards/overview-draft-standard-can-asc-24-wayfinding-and-signage | OK | 200 | no | 3581 | 6 | 0 | 0 | 1 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, frame-focusable-content, label-title-only, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: time-based-media/video-captions |
| https://accessible.canada.ca/ | https://accessible.canada.ca/ | OK | 200 | no | 3454 | 1 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/9-wayfinding-and-communicating-universal-information | https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/9-wayfinding-and-communicating-universal-information | OK | 200 | no | 4188 | 4 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/16-emergency-signage-and-wayfinding | https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/16-emergency-signage-and-wayfinding | OK | 200 | no | 3884 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/10-general-requirements-lighting-and-contrast | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/10-general-requirements-lighting-and-contrast | OK | 200 | no | 4358 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/11-wayfinding | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/11-wayfinding | OK | 200 | no | 5360 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/12-signage | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/12-signage | OK | 200 | no | 6107 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/13-maps-non-tactile | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/13-maps-non-tactile | OK | 200 | no | 4484 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/14-annex-slip-resistance-measurement-informative | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/14-annex-slip-resistance-measurement-informative | OK | 200 | no | 4150 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/15-annex-b-bibliography-informative | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/15-annex-b-bibliography-informative | OK | 200 | no | 4498 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/2-standards-council-canada-statement | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/2-standards-council-canada-statement | OK | 200 | no | 3932 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/3-asc-legal-notice | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/3-asc-legal-notice | OK | 200 | no | 4203 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/4-technical-committee-members | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/4-technical-committee-members | OK | 200 | no | 4050 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/5-preface | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/5-preface | OK | 200 | no | 3979 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/6-introduction | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/6-introduction | OK | 200 | no | 3995 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/7-scope | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/7-scope | OK | 200 | no | 4234 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/8-references | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/8-references | OK | 200 | no | 3959 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/9-definitions-symbols-and-abbreviations | https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/9-definitions-symbols-and-abbreviations | OK | 200 | no | 4246 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/research-project-database/accessibility-e-streaming-services | https://accessible.canada.ca/research-project-database/accessibility-e-streaming-services | OK | 200 | no | 3454 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/research-project-database/accessibility-standards-commercial-audiobooks | https://accessible.canada.ca/research-project-database/accessibility-standards-commercial-audiobooks | OK | 200 | no | 3460 | 3 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role |
| https://accessible.canada.ca/research-project-database/career-transitions-and-accessibility-canadian-federal-public-service | https://accessible.canada.ca/research-project-database/career-transitions-and-accessibility-canadian-federal-public-service | OK | 200 | no | 3310 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/research-project-database/status-report-accessibility-child-care-canada-children-disabilities-aged-0-5 | https://accessible.canada.ca/research-project-database/status-report-accessibility-child-care-canada-children-disabilities-aged-0-5 | OK | 200 | no | 3397 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/research-project-database/web-accessibility-canadian-banking-financial-services | https://accessible.canada.ca/research-project-database/web-accessibility-canadian-banking-financial-services | OK | 200 | no | 3469 | 3 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role |
| https://accessible.canada.ca/research-project-database/accessible-skies-enhancing-accessibility-airport-experiences-passengers-cognitive-disabilities-and-their-support-networks | https://accessible.canada.ca/research-project-database/accessible-skies-enhancing-accessibility-airport-experiences-passengers-cognitive-disabilities-and-their-support-networks | OK | 200 | no | 3459 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/research-project-database/exploring-place-interpretive-support-information-and-communications-accessibility | https://accessible.canada.ca/research-project-database/exploring-place-interpretive-support-information-and-communications-accessibility | OK | 200 | no | 3305 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/research-project-database/access-city-digital-twin-city-visual-technology-tool-advancing-accessibility-standards | https://accessible.canada.ca/research-project-database/access-city-digital-twin-city-visual-technology-tool-advancing-accessibility-standards | OK | 200 | no | 3348 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/research-project-database/accessibility-and-inclusion-competencies-culture-building-tool-inclusive-workplaces | https://accessible.canada.ca/research-project-database/accessibility-and-inclusion-competencies-culture-building-tool-inclusive-workplaces | OK | 200 | no | 3255 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/research-project-database/accessibility-canadian-emergency-alerts-study-unmet-needs | https://accessible.canada.ca/research-project-database/accessibility-canadian-emergency-alerts-study-unmet-needs | OK | 200 | no | 3388 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/research-project-database/advancing-communication-through-signage-and-wayfinding | https://accessible.canada.ca/research-project-database/advancing-communication-through-signage-and-wayfinding | OK | 200 | no | 3222 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/research-project-database/developing-recommendations-standardization-wayfinding-technologies | https://accessible.canada.ca/research-project-database/developing-recommendations-standardization-wayfinding-technologies | OK | 200 | no | 3375 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/accessible-ready-modular-and-prefabricated-housing/2-about-technical-guide | https://accessible.canada.ca/creating-accessibility-standards/accessible-ready-modular-and-prefabricated-housing/2-about-technical-guide | OK | 200 | no | 4186 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/8-references | https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/8-references | OK | 200 | no | 4703 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/research-project-database/accessible-canada-accessible-world-co-creating-global-standards-community | https://accessible.canada.ca/research-project-database/accessible-canada-accessible-world-co-creating-global-standards-community | OK | 200 | no | 3424 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/5-preface | https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/5-preface | OK | 200 | no | 4967 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/summary-can-asc-112024-rev-2025-employment | https://accessible.canada.ca/creating-accessibility-standards/summary-can-asc-112024-rev-2025-employment | OK | 200 | no | 8801 | 18 | 0 | 0 | 10 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, frame-focusable-content, label-title-only, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, time-based-media/video-captions |
| https://accessible.canada.ca/creating-accessibility-standards/technical-guide-accessible-travel-journey/4-definitions | https://accessible.canada.ca/creating-accessibility-standards/technical-guide-accessible-travel-journey/4-definitions | OK | 200 | no | 3947 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/1-scope | https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/1-scope | OK | 200 | no | 4445 | 4 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/annex-e-informative-guidance-users-present-document | https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/annex-e-informative-guidance-users-present-document | OK | 200 | no | 5056 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/research-project-database/mapping-representation-and-barriers-participation-people-disabilities-screen-based-media-and-broadcasting-sectors | https://accessible.canada.ca/research-project-database/mapping-representation-and-barriers-participation-people-disabilities-screen-based-media-and-broadcasting-sectors | OK | 200 | no | 3415 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/design-and-delivery-accessible-programs-and-services-including-customer-services/5-links-other-accessibility-standards | https://accessible.canada.ca/creating-accessibility-standards/design-and-delivery-accessible-programs-and-services-including-customer-services/5-links-other-accessibility-standards | OK | 200 | no | 3481 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/7-facilities-and-furniture | https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/7-facilities-and-furniture | OK | 200 | no | 5587 | 4 | 0 | 0 | 6 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-719-accessible-travel-journey-built-environment-design-and-construction-passenger-rail-stations | https://accessible.canada.ca/creating-accessibility-standards/can-asc-719-accessible-travel-journey-built-environment-design-and-construction-passenger-rail-stations | OK | 200 | no | 3530 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-23-draft-version-model-standard-built-environment-accessibility-federally-regulated-entities-defined-accessible-canada-act/4-fundamental-design-components | https://accessible.canada.ca/creating-accessibility-standards/can-asc-23-draft-version-model-standard-built-environment-accessibility-federally-regulated-entities-defined-accessible-canada-act/4-fundamental-design-components | OK | 200 | no | 5775 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/15-elevators | https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/15-elevators | OK | 200 | no | 3698 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/research-project-database/inclusive-and-accessible-skilled-trades-employment-people-disabilities | https://accessible.canada.ca/research-project-database/inclusive-and-accessible-skilled-trades-employment-people-disabilities | OK | 200 | no | 3340 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/5-preface | https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/5-preface | OK | 200 | no | 4456 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/12-training | https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/12-training | OK | 200 | no | 4227 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/research-project-database/usability-digital-information-and-information-technology-intellectual-and-developmental-disabilities | https://accessible.canada.ca/research-project-database/usability-digital-information-and-information-technology-intellectual-and-developmental-disabilities | OK | 200 | no | 3304 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/10-maintenance-accessibility | https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/10-maintenance-accessibility | OK | 200 | no | 3730 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/2-standard-council-canada-statement | https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/2-standard-council-canada-statement | OK | 200 | no | 3959 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/10-audience | https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/10-audience | OK | 200 | no | 4080 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/12-structure | https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/12-structure | OK | 200 | no | 4222 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems | https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems | OK | 200 | no | 3603 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/14-illumination-and-emergency-power | https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/14-illumination-and-emergency-power | OK | 200 | no | 4045 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-27-heritage-buildings-and-sites | https://accessible.canada.ca/creating-accessibility-standards/can-asc-27-heritage-buildings-and-sites | OK | 200 | no | 3735 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/research-project-database/clearing-our-path-evidence-based-guidelines-accessibility-built-environment | https://accessible.canada.ca/research-project-database/clearing-our-path-evidence-based-guidelines-accessibility-built-environment | OK | 200 | no | 3383 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/research-project-database/advancing-equal-access-people-intellectual-disabilities-workplace | https://accessible.canada.ca/research-project-database/advancing-equal-access-people-intellectual-disabilities-workplace | OK | 200 | no | 3434 | 3 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role |
| https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/9-definitions | https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/9-definitions | OK | 200 | no | 4210 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/research-project-database/harmonizing-air-travel-advancing-global-accessibility-standards | https://accessible.canada.ca/research-project-database/harmonizing-air-travel-advancing-global-accessibility-standards | OK | 200 | no | 3448 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/annex-b-informative-development-design-principles | https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/annex-b-informative-development-design-principles | OK | 200 | no | 3876 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/7-scope | https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/7-scope | OK | 200 | no | 3658 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-715-accessible-travel-journey-built-environment-design-and-construction-subway-stations | https://accessible.canada.ca/creating-accessibility-standards/can-asc-715-accessible-travel-journey-built-environment-design-and-construction-subway-stations | OK | 200 | no | 3501 | 3 | 0 | 0 | 2 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role |
| https://accessible.canada.ca/research-project-database/assessing-accessibility-proactive-and-reactive-emergency-management-standards | https://accessible.canada.ca/research-project-database/assessing-accessibility-proactive-and-reactive-emergency-management-standards | OK | 200 | no | 3352 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-282025-accessible-ready-housing/9-definitions-and-abbreviations | https://accessible.canada.ca/creating-accessibility-standards/can-asc-282025-accessible-ready-housing/9-definitions-and-abbreviations | OK | 200 | no | 3622 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/8-digital-service-delivery | https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/8-digital-service-delivery | OK | 200 | no | 3907 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/4-functional-performance | https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/4-functional-performance | OK | 200 | no | 4082 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-282025-accessible-ready-housing/20-annex-c-informative | https://accessible.canada.ca/creating-accessibility-standards/can-asc-282025-accessible-ready-housing/20-annex-c-informative | OK | 200 | no | 4374 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/csa-asc-b651-accessible-design-built-environment | https://accessible.canada.ca/creating-accessibility-standards/csa-asc-b651-accessible-design-built-environment | OK | 200 | no | 3038 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/10-structural-support-policy-and-leadership-systems-policies-and-practices | https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/10-structural-support-policy-and-leadership-systems-policies-and-practices | OK | 200 | no | 5180 | 5 | 0 | 0 | 5 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, heading-order, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique, navigable/heading-order |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/17-annex-c-bibliography-informative | https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/17-annex-c-bibliography-informative | OK | 200 | no | 4490 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/13-accessible-education-training-and-literacy-ai | https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/13-accessible-education-training-and-literacy-ai | OK | 200 | no | 3619 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/technical-guide-accessible-travel-journey/9-communication-terminals | https://accessible.canada.ca/creating-accessibility-standards/technical-guide-accessible-travel-journey/9-communication-terminals | OK | 200 | no | 4236 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/14-design | https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/14-design | OK | 200 | no | 4650 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/accessible-and-equitable-artificial-intelligence-systems-technical-guide | https://accessible.canada.ca/creating-accessibility-standards/accessible-and-equitable-artificial-intelligence-systems-technical-guide | OK | 200 | no | 3785 | 7 | 0 | 0 | 7 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, empty-heading, frame-focusable-content, label-title-only, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique, navigable/empty-heading, time-based-media/video-captions |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-23-draft-version-model-standard-built-environment-accessibility-federally-regulated-entities-defined-accessible-canada-act/0-introduction | https://accessible.canada.ca/creating-accessibility-standards/can-asc-23-draft-version-model-standard-built-environment-accessibility-federally-regulated-entities-defined-accessible-canada-act/0-introduction | OK | 200 | no | 4264 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/4-scope | https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/4-scope | OK | 200 | no | 3995 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/7-scope | https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/7-scope | OK | 200 | no | 3595 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/research-project-database/advancing-accessibility-standards-through-inuit-qaujimajatuqangit | https://accessible.canada.ca/research-project-database/advancing-accessibility-standards-through-inuit-qaujimajatuqangit | OK | 200 | no | 3388 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/annex-informative-equipment-access-outdoor-activities | https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/annex-informative-equipment-access-outdoor-activities | OK | 200 | no | 4329 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-7112-accessible-travel-journey-built-environment-use-and-maintenance-ferry-ports | https://accessible.canada.ca/creating-accessibility-standards/can-asc-7112-accessible-travel-journey-built-environment-use-and-maintenance-ferry-ports | OK | 200 | no | 3603 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/15-annex-background-and-context-informative | https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/15-annex-background-and-context-informative | OK | 200 | no | 4238 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/accessible-and-equitable-artificial-intelligence-systems-technical-guide/2-about-technical-guide | https://accessible.canada.ca/creating-accessibility-standards/accessible-and-equitable-artificial-intelligence-systems-technical-guide/2-about-technical-guide | OK | 200 | no | 3352 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/4-technical-committee-members | https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/4-technical-committee-members | OK | 200 | no | 4020 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-23-draft-version-model-standard-built-environment-accessibility-federally-regulated-entities-defined-accessible-canada-act/9-occupancy-requirements | https://accessible.canada.ca/creating-accessibility-standards/can-asc-23-draft-version-model-standard-built-environment-accessibility-federally-regulated-entities-defined-accessible-canada-act/9-occupancy-requirements | OK | 200 | no | 5051 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/11-culture-engagement-and-education | https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/11-culture-engagement-and-education | OK | 200 | no | 4807 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-282025-accessible-ready-housing/8-references | https://accessible.canada.ca/creating-accessibility-standards/can-asc-282025-accessible-ready-housing/8-references | OK | 200 | no | 3651 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/procurement-accessible-goods/1-legal-disclaimer | https://accessible.canada.ca/creating-accessibility-standards/procurement-accessible-goods/1-legal-disclaimer | OK | 200 | no | 4214 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/11-equitable-ai | https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/11-equitable-ai | OK | 200 | no | 4022 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/7-communication | https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/7-communication | OK | 200 | no | 4142 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-23-draft-version-model-standard-built-environment-accessibility-federally-regulated-entities-defined-accessible-canada-act/5-paths-travel | https://accessible.canada.ca/creating-accessibility-standards/can-asc-23-draft-version-model-standard-built-environment-accessibility-federally-regulated-entities-defined-accessible-canada-act/5-paths-travel | OK | 200 | no | 5695 | 3 | 0 | 0 | 3 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/research-project-database/advancing-fire-and-life-safety-built-environment-all | https://accessible.canada.ca/research-project-database/advancing-fire-and-life-safety-built-environment-all | OK | 200 | no | 3456 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-522-part-2-design-and-delivery-accessible-programs-and-services-including-customer-service | https://accessible.canada.ca/creating-accessibility-standards/can-asc-522-part-2-design-and-delivery-accessible-programs-and-services-including-customer-service | OK | 200 | no | 3658 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/accessible-travel-journey | https://accessible.canada.ca/creating-accessibility-standards/accessible-travel-journey | OK | 200 | no | 3826 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/research-project-database/mapping-accessible-employment-pathways-youth-disabilities-national-and-international-best-practices | https://accessible.canada.ca/research-project-database/mapping-accessible-employment-pathways-youth-disabilities-national-and-international-best-practices | OK | 200 | no | 3489 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/technical-guide-procurement-accessible-services/1-legal-disclaimer | https://accessible.canada.ca/creating-accessibility-standards/technical-guide-procurement-accessible-services/1-legal-disclaimer | OK | 200 | no | 3734 | 3 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-7110-accessible-travel-journey-built-environment-use-and-maintenance-passenger-rail-stations | https://accessible.canada.ca/creating-accessibility-standards/can-asc-7110-accessible-travel-journey-built-environment-use-and-maintenance-passenger-rail-stations | OK | 200 | no | 3506 | 3 | 0 | 0 | 0 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, landmark-unique |
| https://accessible.canada.ca/creating-accessibility-standards/can-asc-282025-accessible-ready-housing/5-preface | https://accessible.canada.ca/creating-accessibility-standards/can-asc-282025-accessible-ready-housing/5-preface | OK | 200 | no | 4263 | 4 | 0 | 0 | 4 | 0 | Skipped (not requested) |
|  |  |  |  |  |  |  |  |  |  | axe failed rules: aria-allowed-attr, aria-allowed-role, aria-required-children, landmark-unique |
|  |  |  |  |  |  |  |  |  |  | AccessLint failed rules: aria/aria-allowed-attr, aria/aria-allowed-role, landmarks/landmark-unique |

## Detailed Failure Information (ALFA)

## Detailed Failure Information (axe)

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/10-support-person

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/12-documentation-and-support-services

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

#### Rule: [region](https://dequeuniversity.com/rules/axe/4.11/region?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: All page content should be contained by landmarks
- HTML: `<div class="region region-feedback-alert">`
- XPath: `.region-feedback-alert`

### https://accessible.canada.ca/creating-accessibility-standards/overview-draft-standard-can-asc-24-wayfinding-and-signage

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [frame-focusable-content](https://dequeuniversity.com/rules/axe/4.11/frame-focusable-content?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames with focusable content must not have tabindex=-1
- HTML: `<html lang="en" dir="ltr" data-cast-api-enabled="true">`
- XPath: `#wb-auto-5-md`

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Form elements should have a visible label
- HTML: `<input type="range" class="volume" aria-controls="wb-auto-5-md" aria-labelledby="wb-auto-5-md" aria-describedby="wb-auto-5-md-vlm-lbl" title="Volume" min="0" max="100" value="100" step="5">`
- XPath: `.volume`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/9-wayfinding-and-communicating-universal-information

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/16-emergency-signage-and-wayfinding

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/10-general-requirements-lighting-and-contrast

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/11-wayfinding

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/12-signage

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/13-maps-non-tactile

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/14-annex-slip-resistance-measurement-informative

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/15-annex-b-bibliography-informative

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/2-standards-council-canada-statement

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/3-asc-legal-notice

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/4-technical-committee-members

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/5-preface

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/6-introduction

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/7-scope

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/8-references

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-24-wayfinding-and-signage/9-definitions-symbols-and-abbreviations

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/research-project-database/accessibility-e-streaming-services

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/research-project-database/accessibility-standards-commercial-audiobooks

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/research-project-database/career-transitions-and-accessibility-canadian-federal-public-service

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/research-project-database/status-report-accessibility-child-care-canada-children-disabilities-aged-0-5

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk" data-once="details webform-details-save">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/research-project-database/web-accessibility-canadian-banking-financial-services

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/research-project-database/accessible-skies-enhancing-accessibility-airport-experiences-passengers-cognitive-disabilities-and-their-support-networks

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/research-project-database/exploring-place-interpretive-support-information-and-communications-accessibility

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/research-project-database/access-city-digital-twin-city-visual-technology-tool-advancing-accessibility-standards

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/research-project-database/accessibility-and-inclusion-competencies-culture-building-tool-inclusive-workplaces

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/research-project-database/accessibility-canadian-emergency-alerts-study-unmet-needs

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk" data-once="details webform-details-save">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/research-project-database/advancing-communication-through-signage-and-wayfinding

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/research-project-database/developing-recommendations-standardization-wayfinding-technologies

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/accessible-ready-modular-and-prefabricated-housing/2-about-technical-guide

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/8-references

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/research-project-database/accessible-canada-accessible-world-co-creating-global-standards-community

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk" data-once="details webform-details-save">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/5-preface

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/summary-can-asc-112024-rev-2025-employment

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [frame-focusable-content](https://dequeuniversity.com/rules/axe/4.11/frame-focusable-content?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames with focusable content must not have tabindex=-1
- HTML: `<html lang="en" dir="ltr" data-cast-api-enabled="true">`
- XPath: `#wb-auto-5-md`

**Failure 2:**
- Message: Frames with focusable content must not have tabindex=-1
- HTML: `<html lang="en" dir="ltr" data-cast-api-enabled="true">`
- XPath: `#wb-auto-6-md`

**Failure 3:**
- Message: Frames with focusable content must not have tabindex=-1
- HTML: `<html lang="en" dir="ltr" data-cast-api-enabled="true">`
- XPath: `#wb-auto-7-md`

**Failure 4:**
- Message: Frames with focusable content must not have tabindex=-1
- HTML: `<html lang="en" dir="ltr" data-cast-api-enabled="true">`
- XPath: `#wb-auto-8-md`

**Failure 5:**
- Message: Frames with focusable content must not have tabindex=-1
- HTML: `<html lang="en" dir="ltr" data-cast-api-enabled="true">`
- XPath: `#wb-auto-9-md`

*... and 2 more failures for this rule*

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Form elements should have a visible label
- HTML: `<input type="range" class="volume" aria-controls="wb-auto-5-md" aria-labelledby="wb-auto-5-md" aria-describedby="wb-auto-5-md-vlm-lbl" title="Volume" min="0" max="100" value="100" step="5">`
- XPath: `input[aria-describedby="wb-auto-5-md-vlm-lbl"]`

**Failure 2:**
- Message: Form elements should have a visible label
- HTML: `<input type="range" class="volume" aria-controls="wb-auto-6-md" aria-labelledby="wb-auto-6-md" aria-describedby="wb-auto-6-md-vlm-lbl" title="Volume" min="0" max="100" value="100" step="5">`
- XPath: `input[aria-describedby="wb-auto-6-md-vlm-lbl"]`

**Failure 3:**
- Message: Form elements should have a visible label
- HTML: `<input type="range" class="volume" aria-controls="wb-auto-7-md" aria-labelledby="wb-auto-7-md" aria-describedby="wb-auto-7-md-vlm-lbl" title="Volume" min="0" max="100" value="100" step="5">`
- XPath: `input[aria-describedby="wb-auto-7-md-vlm-lbl"]`

**Failure 4:**
- Message: Form elements should have a visible label
- HTML: `<input type="range" class="volume" aria-controls="wb-auto-8-md" aria-labelledby="wb-auto-8-md" aria-describedby="wb-auto-8-md-vlm-lbl" title="Volume" min="0" max="100" value="100" step="5">`
- XPath: `input[aria-describedby="wb-auto-8-md-vlm-lbl"]`

**Failure 5:**
- Message: Form elements should have a visible label
- HTML: `<input type="range" class="volume" aria-controls="wb-auto-9-md" aria-labelledby="wb-auto-9-md" aria-describedby="wb-auto-9-md-vlm-lbl" title="Volume" min="0" max="100" value="100" step="5">`
- XPath: `input[aria-describedby="wb-auto-9-md-vlm-lbl"]`

*... and 2 more failures for this rule*

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/technical-guide-accessible-travel-journey/4-definitions

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/1-scope

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/annex-e-informative-guidance-users-present-document

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/research-project-database/mapping-representation-and-barriers-participation-people-disabilities-screen-based-media-and-broadcasting-sectors

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/design-and-delivery-accessible-programs-and-services-including-customer-services/5-links-other-accessibility-standards

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/7-facilities-and-furniture

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-719-accessible-travel-journey-built-environment-design-and-construction-passenger-rail-stations

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-23-draft-version-model-standard-built-environment-accessibility-federally-regulated-entities-defined-accessible-canada-act/4-fundamental-design-components

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/15-elevators

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/research-project-database/inclusive-and-accessible-skilled-trades-employment-people-disabilities

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/5-preface

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/12-training

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/research-project-database/usability-digital-information-and-information-technology-intellectual-and-developmental-disabilities

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/10-maintenance-accessibility

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/2-standard-council-canada-statement

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/10-audience

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/12-structure

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/14-illumination-and-emergency-power

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-27-heritage-buildings-and-sites

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/research-project-database/clearing-our-path-evidence-based-guidelines-accessibility-built-environment

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/research-project-database/advancing-equal-access-people-intellectual-disabilities-workplace

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/9-definitions

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/research-project-database/harmonizing-air-travel-advancing-global-accessibility-standards

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/annex-b-informative-development-design-principles

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/7-scope

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-715-accessible-travel-journey-built-environment-design-and-construction-subway-stations

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/research-project-database/assessing-accessibility-proactive-and-reactive-emergency-management-standards

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-282025-accessible-ready-housing/9-definitions-and-abbreviations

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/8-digital-service-delivery

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/canasc-en-301-5492024-accessibility-requirements-ict-products-and-services/4-functional-performance

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-282025-accessible-ready-housing/20-annex-c-informative

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/csa-asc-b651-accessible-design-built-environment

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/10-structural-support-policy-and-leadership-systems-policies-and-practices

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [heading-order](https://dequeuniversity.com/rules/axe/4.11/heading-order?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Heading levels should only increase by one
- HTML: `<h4>10.7.1 Human Resource Information System</h4>`
- XPath: `.page-section:nth-child(7) > .page-section-content.clearfix > .no-padding-x.col-xs-12 > .column.no-bg.col-xs-12 > .field--name-field-column-content.field--type-text-long.field--label-hidden > h4`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/17-annex-c-bibliography-informative

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/13-accessible-education-training-and-literacy-ai

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/technical-guide-accessible-travel-journey/9-communication-terminals

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-312025-plain-language/14-design

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/accessible-and-equitable-artificial-intelligence-systems-technical-guide

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [empty-heading](https://dequeuniversity.com/rules/axe/4.11/empty-heading?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: Headings should not be empty
- HTML: `<h2 class="h4 no-toc">        </h2>`
- XPath: `#nav-top > nav > .h4.no-toc`

**Failure 2:**
- Message: Headings should not be empty
- HTML: `<h2 class="h4 no-toc">        </h2>`
- XPath: `#wb-auto-6 > nav > .h4.no-toc`

#### Rule: [frame-focusable-content](https://dequeuniversity.com/rules/axe/4.11/frame-focusable-content?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Frames with focusable content must not have tabindex=-1
- HTML: `<html lang="en" dir="ltr" data-cast-api-enabled="true">`
- XPath: `#wb-auto-5-md`

#### Rule: [label-title-only](https://dequeuniversity.com/rules/axe/4.11/label-title-only?application=playwright)
**Impact**: serious

**Failure 1:**
- Message: Form elements should have a visible label
- HTML: `<input type="range" class="volume" aria-controls="wb-auto-5-md" aria-labelledby="wb-auto-5-md" aria-describedby="wb-auto-5-md-vlm-lbl" title="Volume" min="0" max="100" value="100" step="5">`
- XPath: `.volume`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-23-draft-version-model-standard-built-environment-accessibility-federally-regulated-entities-defined-accessible-canada-act/0-introduction

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/4-scope

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/7-scope

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/research-project-database/advancing-accessibility-standards-through-inuit-qaujimajatuqangit

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-21-outdoor-spaces-draft/annex-informative-equipment-access-outdoor-activities

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-7112-accessible-travel-journey-built-environment-use-and-maintenance-ferry-ports

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/15-annex-background-and-context-informative

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/accessible-and-equitable-artificial-intelligence-systems-technical-guide/2-about-technical-guide

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-22-emergency-egress-exit/4-technical-committee-members

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-23-draft-version-model-standard-built-environment-accessibility-federally-regulated-entities-defined-accessible-canada-act/9-occupancy-requirements

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-112024-rev-2025-employment/11-culture-engagement-and-education

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-282025-accessible-ready-housing/8-references

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/procurement-accessible-goods/1-legal-disclaimer

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/asc-62-accessible-equitable-artificial-intelligence-systems/11-equitable-ai

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-521-design-and-delivery-accessible-programs-and-services/7-communication

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-23-draft-version-model-standard-built-environment-accessibility-federally-regulated-entities-defined-accessible-canada-act/5-paths-travel

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/research-project-database/advancing-fire-and-life-safety-built-environment-all

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-522-part-2-design-and-delivery-accessible-programs-and-services-including-customer-service

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/accessible-travel-journey

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/research-project-database/mapping-accessible-employment-pathways-youth-disabilities-national-and-international-best-practices

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `.tgl-panel`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-hidden="false" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/technical-guide-procurement-accessible-services/1-legal-disclaimer

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-7110-accessible-travel-journey-built-environment-use-and-maintenance-passenger-rail-stations

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `.container > nav`

### https://accessible.canada.ca/creating-accessibility-standards/can-asc-282025-accessible-ready-housing/5-preface

#### Rule: [aria-allowed-attr](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-attr?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Elements must only use supported ARIA attributes
- HTML: `<div class="tgl-panel" aria-labelledby="wb-auto-3" aria-expanded="true" aria-hidden="false">`
- XPath: `div[aria-labelledby="wb-auto-3"]`

#### Rule: [aria-allowed-role](https://dequeuniversity.com/rules/axe/4.11/aria-allowed-role?application=playwright)
**Impact**: minor

**Failure 1:**
- Message: ARIA role should be appropriate for the element
- HTML: `<details id="information" data-webform-details-nosave="true" data-once="details webform-details-save" open="open" class="wb-auto-2-grp fade in" role="tabpanel" aria-expanded="true" aria-labelledby="information-lnk">`
- XPath: `#information`

#### Rule: [aria-required-children](https://dequeuniversity.com/rules/axe/4.11/aria-required-children?application=playwright)
**Impact**: critical

**Failure 1:**
- Message: Certain ARIA roles must contain particular children
- HTML: `<ul role="tablist" aria-live="off" class="generated" aria-hidden="false">`
- XPath: `.generated`

#### Rule: [landmark-unique](https://dequeuniversity.com/rules/axe/4.11/landmark-unique?application=playwright)
**Impact**: moderate

**Failure 1:**
- Message: Landmarks should have a unique role or role/label/title (i.e. accessible name) combination
- HTML: `<nav>`
- XPath: `#nav-top > nav`

