# Component attribution policy for accessibility evidence

**Status:** decided 2026-11-18
**Scope:** Open Scans `a11y-accessibility-context/1` → FES `fes-accessibility-join/1`
**Review of record:** FES PR #62 (opt-in DOM-validated ancestors), FES PR #63
(same-viewport gate)

---

## 1. Decision

A selector-derived container is **evidence, not identity**. FES may associate an
accessibility observation with a recorded component instance, but it must not
call that ownership, attribution, or a component-level finding.

Three tiers are allowed, and only these:

| Tier | How the match is made | `basis` | Confidence | Honest description |
| :--- | :--- | :--- | :--- | :--- |
| 1 | CSS selector text equals one recorded instance selector | `exact-selector` | medium | "exact selector match" |
| 2 | Opt-in DOM pass, same viewport, semantic/explicit components only, nearest ancestor with enough owned nodes, selector resolves to one element | `ancestor-selector`, `domValidated: true` | medium at most | "DOM-validated ancestor association" |
| 3 | Opt-in DOM pass with structural class heuristics, or a different/unknown viewport explicitly allowed | `ancestor-selector`, `domValidated: true` | low | "broad association (preview)" |

No tier is ownership. "Owned by", "attributed to", "caused by" and
"component-level finding" are not used for any of them.

---

## 2. Why the line is here

The real issue #391 artifact measured the gap:

| Result | Count | What it is |
| :--- | ---: | :--- |
| Observations joined | 5,486 | All kept, none dropped |
| Exact CSS component matches | 8 | Text matches, 4 unique instances |
| DOM-validated ancestor matches, different viewport allowed | 4,838 | All `confidence: low` |
| Page-level after the DOM pass | 640 | Failures, ambiguity, cap, no selector |

Most of the 4,838 land on structural class heuristics such as
`class:relative`, `class:not-prose` and `class:blog-content`. Those are layout
wrappers, not components. Calling 4,838 observations "component-level" would
overstate coverage by roughly 600× against the 8 exact matches, and every one of
them came from a different viewport (1,024×768 source, 1,440×900 FES).

The honest statement for that artifact is: *4,838 observations are associated
with a nearest recorded ancestor, at low confidence, because the viewport
differs and most anchors are structural wrappers.*

---

## 3. Rules

1. **Identity first.** Component identity requires either exact CSS text that
   matches one instance, or a DOM-validated ancestor under a matching viewport
   with semantic or explicit identification. `--dom-semantic-only` is required
   for anything stronger than a preview.
2. **Generic wrappers are not identity.** A `class:*` heuristic can describe a
   container; it cannot name a component. `class:relative`, `class:not-prose`
   and `class:blog-content` are examples, not a complete list.
3. **Owned-node floor.** The default `--dom-min-own-nodes 2` exists to skip page
   containers and trivial wrappers. For a claim, a component should own
   meaningfully more than the wrapper baseline; record the value you used.
4. **Single element only.** A selector that resolves to several elements stays
   page-level (`ambiguous-selector`). A selector that resolves to the component
   element itself is not an ancestor match.
5. **No label matching.** Container labels are displayed, never used to choose a
   component. Pattern ids are Open Scans identities, not FES component ids.
6. **No CSS/XPath text comparison.** Compare CSS with CSS only; XPath is
   resolved only inside the DOM pass.
7. **Keep the leftovers.** HTML-only, XPath, unknown-selector, page-level,
   cap-exceeded and page-load-failure observations stay visible with a reason.
8. **Split the counts.** Exact and ancestor matches are reported separately.
   `summary.componentMatched` is a total and must not be quoted on its own.
9. **No combined score, no WCAG claim.** Accessibility stays separate from
   performance and energy.

---

## 4. What would allow a stronger claim

In priority order:

1. **A same-viewport pair.** Follow
   [same-viewport-protocol.md](same-viewport-protocol.md). This removes the
   viewport objection but still leaves tiers 1–3.
2. **An explicit shared component id.** If Open Scans publishes an additive
   `componentId` on observations and FES records the same id, that becomes
   `basis: component-id` and the only path to real ownership. It needs a
   coordinated schema change; a strict consumer breaks on additive fields, so
   publish it to FES first.
3. **A validated specificity rule.** Semantic/explicit only, an owned-node
   floor, and a wrapper-class denylist, checked on more than one site.

Until at least 1 plus 2, or a validated 3, the strongest permitted statement is
the association sentence in section 2.

---

## 5. Enforcement

- FES: `--validate-dom` is off by default; the DOM pass requires a same
  viewport unless `--dom-allow-different-viewport` is given; ancestor matches
  carry `basis: ancestor-selector`, `domValidated: true`, and low confidence
  outside a same-viewport pair.
- FES report: the accessibility section must name the basis of each match and
  must not claim that components are matched only by exact CSS when ancestor
  matches exist.
- Open Scans: the context keeps `container.ownershipEstablished: false` and
  records the container basis; it never publishes a component id it does not
  have.
- Tests: the join tests assert that a container candidate is never promoted,
  and the report test asserts basis wording.
