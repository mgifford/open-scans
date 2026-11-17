/**
 * Conservative component/semantic-region association for existing findings.
 *
 * This module does not build or copy a component graph. It only preserves
 * explicit component identifiers that already exist in a report and derives a
 * low-confidence semantic-region candidate from stable selector/element
 * evidence. It never establishes component ownership.
 */

export const COMPONENT_ASSOCIATION_SCHEMA_VERSION = "component-association/1";

function text(value) {
  return String(value ?? "").trim();
}

function lower(value) {
  return text(value).toLowerCase();
}

function elementToken(value, tag) {
  const source = lower(value);
  if (!source) return false;
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(^|[/>\\s<])${escaped}(?=[\\s.#:[>/]|$)`).test(source);
}

function roleToken(value, role) {
  const source = lower(value);
  return new RegExp(`role\\s*=\\s*["']?${role}["']?`).test(source);
}

function inferRegion(locator, html) {
  const source = `${lower(locator)} ${lower(html)}`;
  if (!source.trim()) return null;
  if (roleToken(source, "navigation") || elementToken(locator, "nav")) return "navigation";
  if (roleToken(source, "banner") || elementToken(locator, "header")) return "banner";
  if (roleToken(source, "contentinfo") || elementToken(locator, "footer")) return "contentinfo";
  if (roleToken(source, "main") || elementToken(locator, "main")) return "main";
  if (roleToken(source, "complementary") || elementToken(locator, "aside")) return "complementary";
  if (roleToken(source, "search")) return "search";
  if (elementToken(locator, "form")) return "form";
  if (roleToken(source, "table") || elementToken(locator, "table")) return "table";
  if (roleToken(source, "list") || elementToken(locator, "ul") || elementToken(locator, "ol")) return "list";
  if (/(^|[/>\s<])h[1-6](?=[\s.#:[>/]|$)/.test(lower(locator))) return "heading";
  if (elementToken(locator, "a")) return "link";
  if (elementToken(locator, "button")) return "button";
  if (elementToken(locator, "img")) return "image";
  if (elementToken(locator, "iframe")) return "frame";
  if (roleToken(source, "dialog") || elementToken(locator, "dialog")) return "dialog";
  if (/aria-live|role\s*=\s*["']?(?:status|alert|log)/.test(source)) return "live-region";
  if (elementToken(locator, "html") || elementToken(locator, "body")) return "document";
  return null;
}

function explicitComponent(finding) {
  const component = finding?.component ?? null;
  return {
    componentId: finding?.componentId ?? component?.id ?? null,
    componentTypeId: finding?.componentTypeId ?? component?.typeId ?? null,
    componentLabel: finding?.componentLabel ?? component?.label ?? null,
    explicitRegion: finding?.semanticRegion ?? component?.semanticRegion ?? null
  };
}

/**
 * Associate one comparison finding with explicit component evidence or a
 * selector-derived semantic-region candidate.
 *
 * @param {object} finding
 * @returns {object}
 */
export function associateFinding(finding) {
  const explicit = explicitComponent(finding);
  const inferred = explicit.explicitRegion ?? inferRegion(finding?.locator, finding?.html);
  const hasExplicit = Boolean(explicit.componentId || explicit.componentTypeId);
  const uncertainty = [];
  if (hasExplicit) {
    uncertainty.push("The component identifier came from source evidence; Open Scans does not independently verify component ownership.");
  } else if (inferred) {
    uncertainty.push("The semantic region is a selector-derived candidate, not a claim that a component owns this finding.");
  } else {
    uncertainty.push("No explicit component identifier or stable semantic selector was available.");
  }
  return {
    componentId: explicit.componentId,
    componentTypeId: explicit.componentTypeId,
    componentLabel: explicit.componentLabel,
    semanticRegion: inferred,
    basis: hasExplicit ? "explicit-component" : inferred ? "selector-token" : "none",
    confidence: hasExplicit ? "high" : inferred ? "low" : "unknown",
    ownershipEstablished: false,
    uncertainty
  };
}

/**
 * Build indexes over comparison findings. Only explicit component ids are
 * indexed as component ids; labels are never used as identity.
 *
 * @param {object[]} findings
 * @returns {object}
 */
export function buildComponentAssociations(findings) {
  const bySemanticRegion = {};
  const byComponentId = {};
  const byPage = {};
  const basisCounts = { "explicit-component": 0, "selector-token": 0, none: 0 };
  let withRegion = 0;
  let withComponentId = 0;

  const add = (index, key, finding) => {
    if (!key) return;
    const list = index[key] ?? [];
    if (!list.includes(finding.comparisonId)) list.push(finding.comparisonId);
    index[key] = list;
  };

  for (const finding of findings ?? []) {
    const context = finding.componentContext ?? associateFinding(finding);
    basisCounts[context.basis] = (basisCounts[context.basis] ?? 0) + 1;
    if (context.semanticRegion) {
      withRegion += 1;
      add(bySemanticRegion, context.semanticRegion, finding);
    }
    if (context.componentId) {
      withComponentId += 1;
      add(byComponentId, context.componentId, finding);
    }
    add(byPage, finding.page?.logicalPageId, finding);
  }

  return {
    schema: COMPONENT_ASSOCIATION_SCHEMA_VERSION,
    bySemanticRegion,
    byComponentId,
    byPage,
    summary: {
      findings: findings?.length ?? 0,
      withSemanticRegion: withRegion,
      withComponentId,
      unassociated: (findings?.length ?? 0) - withRegion,
      basisCounts,
      ownershipEstablished: false,
      note: "Selector-derived regions are candidates, not component ownership. Labels are never used as identity."
    }
  };
}
