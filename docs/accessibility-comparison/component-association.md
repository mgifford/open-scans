# Component and semantic-region evidence

**Module:** [`scanner/component-association.mjs`](../../scanner/component-association.mjs)
**Format:** `component-association/1`, embedded in `accessibility-comparison/1`
**Scope:** Phase C — make existing findings easier to associate without building a component graph.

---

## 1. What it does

Every comparison finding now carries a `componentContext`:

```json
{
  "componentId": null,
  "componentTypeId": null,
  "componentLabel": null,
  "semanticRegion": "navigation",
  "basis": "selector-token",
  "confidence": "low",
  "ownershipEstablished": false,
  "uncertainty": [
    "The semantic region is a selector-derived candidate, not a claim that a component owns this finding."
  ]
}
```

The comparison also exposes `componentAssociations`:

- `bySemanticRegion`: region → comparison finding ids;
- `byComponentId`: explicit component id → finding ids;
- `byPage`: logical page → finding ids;
- `summary`: counts, basis counts, `ownershipEstablished: false`.

## 2. Evidence hierarchy

1. **Explicit component identifier** — `componentId`, `componentTypeId` or `component.label` already present on the source finding. Preserved as `basis: "explicit-component"`, `confidence: "high"`. Open Scans does **not** independently verify ownership.
2. **Semantic region from stable selector/element evidence** — for example `nav a.icon`, `button.menu`, `img.hero`, `header.site-header`, `role="navigation"`. Recorded as `basis: "selector-token"`, `confidence: "low"`.
3. **No association** — `basis: "none"`, `confidence: "unknown"`, with an explicit uncertainty.

Class-name lookalikes such as `.nav-link` are not treated as semantic navigation. Labels are never used as identity.

## 3. Semantic regions

`navigation`, `banner`, `contentinfo`, `main`, `complementary`, `search`, `form`, `table`, `list`, `heading`, `link`, `button`, `image`, `frame`, `dialog`, `live-region`, `document`.

These are coverage/navigation aids. They are not a component graph, not component ownership, and not proof that a finding belongs to the element a developer is changing.

## 4. Preserved evidence

Comparison findings preserve:

- canonical page URL and logical page id;
- original occurrence and pattern identifiers;
- engine and rule id;
- WCAG success criteria and level;
- ACT Rule ids from the existing ACT mapping (`getActRuleIds`);
- locator, HTML evidence and evidence reference;
- colour scheme and first-seen date;
- semantic region / explicit component id with basis and uncertainty.

Explicit component ids are only indexed by id. Two components with the same label remain separate; no label-based merge occurs.

## 5. Exports

- JSON: `componentContext` on every finding and `componentAssociations` at the top level.
- CSV: `semantic_region`, `component_id`, `association_basis`, `association_confidence`, `act_rule_ids`.
- Markdown/HTML: a **Component and semantic-region evidence** section with region, finding count, page count, basis and confidence, plus explicit component ids when present.
- Optimization investigation finding tables also show the semantic region.

## 6. Boundaries

- No Firefox Energy Scanner `component-graph/1` is copied or reimplemented.
- No visual-proximity ownership is inferred.
- No component label is used as identity.
- Selector-derived regions are low-confidence candidates.
- A finding may appear in a region without belonging to the component being optimized.
- Phase D adds optional external investigation references; Phase C does not depend on those.
- No combined accessibility/performance score and no conformance claim.

## 7. Example

A navigation optimization can group findings such as:

```text
navigation  link-name  2 pages  selector-token  low
button      button-name 1 page  selector-token  low
image       image-alt   1 page  selector-token  low
```

The `navigation` group is useful for review; it does not establish that the navigation component causes the findings or that fixing it will resolve them.

## 8. Tests

- `tests/unit/component-association.test.mjs` — region inference, class lookalikes, explicit ids, label identity, unassociated counts.
- `tests/unit/compare-scans.test.mjs` — end-to-end component context, indexes, ACT ids, exports and backward compatibility.
- `tests/unit/optimization-investigation.test.mjs` — region and ACT context in optimization findings.
