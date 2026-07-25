/**
 * ALFA rule metadata mapping
 *
 * This file provides human-readable descriptions for ALFA accessibility rules.
 * Descriptions are based on WCAG success criteria and best practices.
 *
 * Note: Descriptions are manually curated as the Alfa rule metadata doesn't
 * always include user-friendly descriptions in the package.
 *
 * Verified against @siteimprove/alfa-rules 0.111.0 (installed) and the
 * published rule descriptions at https://alfa.siteimprove.com/rules on 2026-07-25.
 */

export const alfaRuleMetadata = {
  // Common rules seen in reports
  "https://alfa.siteimprove.com/rules/sia-r111": {
    name: "Target Size (enhanced)",
    description: "Interactive elements have a sufficient target size",
    wcagCriteria: ["2.5.5"],
    conformanceLevel: "AAA"
  },
  "https://alfa.siteimprove.com/rules/sia-r56": {
    name: "Landmarks of same type have a unique accessible name",
    description: "Landmarks with the same role are distinguishable by their accessible name",
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "https://alfa.siteimprove.com/rules/sia-r57": {
    name: "Perceivable text content is included in a landmark",
    description: "Visible text content on the page is contained within a landmark region",
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "https://alfa.siteimprove.com/rules/sia-r66": {
    name: "Text has enhanced contrast",
    description: "Text has enhanced contrast with its background",
    wcagCriteria: ["1.4.6"],
    conformanceLevel: "AAA"
  },
  "https://alfa.siteimprove.com/rules/sia-r78": {
    name: "Headings of same level have text content between them",
    description: "Headings of the same level are not immediately adjacent without intervening content",
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "https://alfa.siteimprove.com/rules/sia-r18": {
    name: "aria-* states and properties are allowed",
    description: "ARIA states and properties are allowed for the element on which they are specified",
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },

  // Additional common ALFA rules
  "https://alfa.siteimprove.com/rules/sia-r1": {
    name: "Documents have a <title> element",
    description: "The document has a non-empty <title> element",
    wcagCriteria: ["2.4.2"],
    conformanceLevel: "A"
  },
  "https://alfa.siteimprove.com/rules/sia-r2": {
    name: "Images have an accessible name",
    description: "Images have an accessible name or are marked as decorative",
    wcagCriteria: ["1.1.1"],
    conformanceLevel: "A"
  },
  "https://alfa.siteimprove.com/rules/sia-r3": {
    name: "id attributes have a unique value (deprecated)",
    description: "id attributes are unique within the document. Deprecated by Siteimprove in favor of newer rules.",
    wcagCriteria: ["4.1.1"],
    conformanceLevel: "A",
    deprecated: true
  },
  "https://alfa.siteimprove.com/rules/sia-r4": {
    name: "<html> document elements have a lang attribute",
    description: "The html element has a non-empty lang attribute",
    wcagCriteria: ["3.1.1"],
    conformanceLevel: "A"
  },
  "https://alfa.siteimprove.com/rules/sia-r5": {
    name: "<html> document elements have a valid lang attribute",
    description: "The html element's lang attribute has a valid language code",
    wcagCriteria: ["3.1.1"],
    conformanceLevel: "A"
  },
  "https://alfa.siteimprove.com/rules/sia-r7": {
    name: "lang attributes within the <body> element have a valid value",
    description: "lang attributes on descendants of the body element have a valid primary language subtag",
    wcagCriteria: ["3.1.2"],
    conformanceLevel: "A"
  },
  "https://alfa.siteimprove.com/rules/sia-r8": {
    name: "Form fields have an accessible name",
    description: "Form fields have an accessible name",
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  },
  "https://alfa.siteimprove.com/rules/sia-r11": {
    name: "Links have an accessible name",
    description: "Link elements have an accessible name",
    wcagCriteria: ["2.4.4", "2.4.9", "4.1.2"],
    conformanceLevel: "A"
  },
  "https://alfa.siteimprove.com/rules/sia-r12": {
    name: "Buttons have an accessible name",
    description: "Button elements have an accessible name",
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  },
  "https://alfa.siteimprove.com/rules/sia-r14": {
    name: "Visible labels are included in accessible names",
    description: "The visible label text of an element is included in its accessible name",
    wcagCriteria: ["2.5.3"],
    conformanceLevel: "A"
  },
  "https://alfa.siteimprove.com/rules/sia-r42": {
    name: "Elements with a role have required parent",
    description: "Elements with an explicit ARIA role have the required parent element",
    wcagCriteria: ["1.3.1"],
    conformanceLevel: "A"
  },
  "https://alfa.siteimprove.com/rules/sia-r53": {
    name: "Headings are structured",
    description: "Headings do not skip heading levels in the document outline",
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "https://alfa.siteimprove.com/rules/sia-r59": {
    name: "Documents have headings",
    description: "Document has at least one heading to identify its main content",
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "https://alfa.siteimprove.com/rules/sia-r61": {
    name: "Documents start with a level 1 heading",
    description: "The first heading in the document is a level 1 heading",
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "https://alfa.siteimprove.com/rules/sia-r64": {
    name: "Heading has non-empty accessible name",
    description: "Heading elements have a non-empty accessible name",
    wcagCriteria: ["1.3.1"],
    conformanceLevel: "A"
  },
  "https://alfa.siteimprove.com/rules/sia-r71": {
    name: "Paragraphs of text are not justified",
    description: "Paragraphs of text are not fully justified",
    wcagCriteria: ["1.4.8"],
    conformanceLevel: "AAA"
  },
  "https://alfa.siteimprove.com/rules/sia-r85": {
    name: "Paragraphs of text are not all italics",
    description: "Paragraphs of text are not entirely italicized",
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "https://alfa.siteimprove.com/rules/sia-r62": {
    name: "Links in blocks of text are distinguishable",
    description: "Links within blocks of text are visually distinguishable from surrounding text",
    wcagCriteria: ["1.4.1"],
    conformanceLevel: "A"
  },
  "https://alfa.siteimprove.com/rules/sia-r65": {
    name: "Element in sequential focus order has visible focus",
    description: "Elements that receive keyboard focus display a visible focus indicator",
    wcagCriteria: ["2.4.7"],
    conformanceLevel: "AA"
  },
  "https://alfa.siteimprove.com/rules/sia-r68": {
    name: "Elements with a role have required children",
    description: "Elements with an explicit ARIA role have the required owned/child elements",
    wcagCriteria: ["1.3.1"],
    conformanceLevel: "A"
  },
  "https://alfa.siteimprove.com/rules/sia-r69": {
    name: "Text has minimum contrast",
    description: "Text has sufficient contrast with its background",
    wcagCriteria: ["1.4.3", "1.4.6"],
    conformanceLevel: "AA"
  },
  "https://alfa.siteimprove.com/rules/sia-r73": {
    name: "Paragraphs of text have sufficient line height",
    description: "Paragraphs of text have a line height that is not too small",
    wcagCriteria: ["1.4.8"],
    conformanceLevel: "AAA"
  },
  "https://alfa.siteimprove.com/rules/sia-r80": {
    name: "Paragraphs of text do not have line heights defined in absolute units",
    description: "Line heights of paragraphs of text are not defined using absolute units",
    wcagCriteria: ["1.4.8"],
    conformanceLevel: "AAA"
  },
  "https://alfa.siteimprove.com/rules/sia-r83": {
    name: "Text nodes are not clipped when text is resized (deprecated)",
    description: "Text can be resized to 200% without loss of content. Deprecated by Siteimprove: based on a too-strict interpretation of WCAG 1.4.4 that has since been clarified.",
    wcagCriteria: ["1.4.4"],
    conformanceLevel: "AA",
    deprecated: true
  },
  "https://alfa.siteimprove.com/rules/sia-r86": {
    name: "Elements that are marked as decorative are not exposed to assistive technologies",
    description: "Elements marked as decorative (e.g. via alt=\"\" or role=\"presentation\") are not exposed in the accessibility tree",
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "https://alfa.siteimprove.com/rules/sia-r87": {
    name: "First focusable element is link to main content",
    description: "The first focusable element on the page is a skip link to the main content",
    wcagCriteria: [],
    conformanceLevel: "best-practice"
  },
  "https://alfa.siteimprove.com/rules/sia-r90": {
    name: "Element with presentational children has no focusable content",
    description: "Elements whose children are presentational do not contain focusable content",
    wcagCriteria: ["4.1.2"],
    conformanceLevel: "A"
  }
};

/**
 * Get metadata for an ALFA rule URL
 * @param {string} ruleUrl - The full ALFA rule URL (e.g., "https://alfa.siteimprove.com/rules/sia-r78")
 * @returns {{ name: string, description: string } | null} Rule metadata or null if not found
 */
export function getAlfaRuleMetadata(ruleUrl) {
  return alfaRuleMetadata[ruleUrl] || null;
}

/**
 * Extract rule ID from ALFA rule URL
 * @param {string} ruleUrl - The full ALFA rule URL
 * @returns {string | null} The rule ID (e.g., "SIA-R78") or null
 */
export function extractAlfaRuleId(ruleUrl) {
  const match = ruleUrl.match(/sia-r(\d+)$/);
  return match ? `SIA-R${match[1]}` : null;
}

/**
 * Format an ALFA rule for display in reports
 * @param {string} ruleUrl - The full ALFA rule URL
 * @returns {{ id: string, name: string | null, description: string | null, url: string, wcagCriteria: string[], conformanceLevel: string | null }} Formatted rule info
 */
export function formatAlfaRule(ruleUrl) {
  const id = extractAlfaRuleId(ruleUrl) || "Unknown Rule";
  const metadata = getAlfaRuleMetadata(ruleUrl);

  return {
    id,
    name: metadata?.name || null,
    description: metadata?.description || null,
    url: ruleUrl,
    wcagCriteria: metadata?.wcagCriteria || [],
    conformanceLevel: metadata?.conformanceLevel || null
  };
}
