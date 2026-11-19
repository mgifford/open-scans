/**
 * Deterministic DOM index and locator resolution.
 *
 * Engines report locators in their own dialect (CSS, XPath, HTML snippets).
 * A locator is evidence about a target, not the target itself: the same XPath
 * can match many elements, and a missing locator identifies nothing.
 *
 * This module builds a stable, deterministic index over one HTML snapshot and
 * answers a narrow question: does this locator identify exactly one element,
 * several candidates, or nothing — and which structural path is it?
 *
 * Scope and limits (recorded, not hidden):
 * - Static HTML only. No JavaScript is executed here.
 * - Open shadow roots are only resolvable if the snapshot already contains
 *   them as a composed tree; static HTML cannot reach inside a shadow root.
 * - Document state must be comparable before two resolutions are treated as
 *   the same target; `documentHash` is what makes that checkable.
 *
 * @module dom-index
 */
import { createHash } from "node:crypto";

import { parse } from "parse5";

export const DOM_INDEX_SCHEMA_VERSION = "dom-index/1";

const MAX_HTML_BYTES = 5_000_000;

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function attributesOf(node) {
  const attrs = {};
  for (const attr of node.attrs ?? []) {
    attrs[attr.name] = attr.value;
  }
  return attrs;
}

function normalizeText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function serializeAttributes(attrs) {
  return Object.entries(attrs)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, value]) => ` ${name}="${value}"`)
    .join("");
}

/**
 * Build an index over one HTML document.
 *
 * @param {string|null} html
 * @param {{url?: string|null}} [options]
 * @returns {object} index
 */
export function buildDomIndex(html, { url = null } = {}) {
  if (typeof html !== "string" || html.trim() === "") {
    return {
      schemaVersion: DOM_INDEX_SCHEMA_VERSION,
      available: false,
      url,
      documentHash: null,
      reason: "no-html",
      nodes: [],
      root: null
    };
  }

  const truncated = html.length > MAX_HTML_BYTES;
  const source = truncated ? html.slice(0, MAX_HTML_BYTES) : html;
  const document = parse(source);

  const nodes = [];
  const byPath = new Map();

  function walk(node, parent, parentPath, depth) {
    const children = node.childNodes ?? [];
    const siblingCounts = new Map();

    for (const child of children) {
      if (!child.tagName) {
        if (child.nodeName === "#text" || child.nodeName === "#comment") {
          // Text nodes matter for HTML-snippet comparison.
          if (child.nodeName === "#text") {
            node.__textNodes = node.__textNodes ?? [];
            node.__textNodes.push({ parentPath, text: child.value ?? "" });
          }
        }
        continue;
      }

      const tag = child.tagName.toLowerCase();
      const ordinal = (siblingCounts.get(tag) ?? 0) + 1;
      siblingCounts.set(tag, ordinal);

      const path = `${parentPath}/${tag}[${ordinal}]`;
      const attrs = attributesOf(child);
      const record = {
        index: nodes.length,
        tag,
        attrs,
        id: attrs.id ?? null,
        classes: attrs.class ? attrs.class.split(/\s+/).filter(Boolean) : [],
        path,
        parentPath,
        depth,
        text: normalizeText((child.childNodes ?? []).filter((entry) => entry.nodeName === "#text").map((entry) => entry.value).join(" "))
      };
      nodes.push(record);
      byPath.set(path, record);
      walk(child, record, path, depth + 1);
    }
  }

  const documentNode = document;
  walk(documentNode, null, "", 0);

  const root = nodes.find((node) => node.path === "/html[1]") ?? nodes[0] ?? null;

  return {
    schemaVersion: DOM_INDEX_SCHEMA_VERSION,
    available: true,
    url,
    documentHash: sha256(source),
    truncated,
    root,
    nodes,
    byPath: null
  };
}

/** Look up a node by structural path. */
export function getNodeByPath(index, path) {
  return (index?.nodes ?? []).find((node) => node.path === path) ?? null;
}

/** All element nodes in document order. */
export function elementsOf(index) {
  return index?.nodes ?? [];
}

function parseCompoundSelector(compound) {
  const match = compound.match(/^([a-zA-Z][\w-]*|\*)?((?:[#.][\w-]+|\[[^\]]+\])*)$/);
  if (!match) return null;
  const tag = match[1] && match[1] !== "*" ? match[1].toLowerCase() : null;
  const rest = match[2] ?? "";
  const tokens = [...rest.matchAll(/([#.])([\w-]+)|\[([^\]]+)\]/g)].map((entry) => {
    if (entry[1] === "#") return { type: "id", value: entry[2] };
    if (entry[1] === ".") return { type: "class", value: entry[2] };
    const body = entry[3];
    const attrMatch = body.match(/^([\w:-]+)(?:\s*([~|^$*]?=)\s*"?([^"\]]*)"?)?$/);
    if (!attrMatch) return { type: "invalid" };
    return { type: "attr", name: attrMatch[1].toLowerCase(), operator: attrMatch[2] || null, value: attrMatch[3] ?? "" };
  });
  return { tag, tokens };
}

function matchesCompound(node, compound) {
  if (!compound) return false;
  if (compound.tag && node.tag !== compound.tag) return false;

  for (const token of compound.tokens) {
    if (token.type === "id" && node.id !== token.value) return false;
    if (token.type === "class" && !node.classes.includes(token.value)) return false;
    if (token.type === "attr") {
      const actual = node.attrs?.[token.name];
      if (actual === undefined) return false;
      if (!token.operator) continue;
      if (token.operator === "=" && actual !== token.value) return false;
      if (token.operator === "~=" && !actual.split(/\s+/).includes(token.value)) return false;
      if (token.operator === "^=" && !actual.startsWith(token.value)) return false;
      if (token.operator === "$=" && !actual.endsWith(token.value)) return false;
      if (token.operator === "*=" && !actual.includes(token.value)) return false;
      if (token.operator === "invalid") return false;
    }
  }
  return true;
}

function parseCssSelector(selector) {
  const compact = selector.replace(/\s*([>])\s*/g, "$1").trim();
  if (!compact) return null;

  const parts = compact.split(/(\s+|\>)/).filter((entry) => entry !== "" && !/^\s+$/.test(entry));
  const steps = [];
  let combinator = " ";
  for (const part of parts) {
    if (part === ">") {
      combinator = ">";
      continue;
    }
    steps.push({ compound: parseCompoundSelector(part), combinator });
    combinator = " ";
  }
  return steps;
}

/**
 * Evaluate a CSS selector subset against the index.
 * Supported: tag, *, #id, .class, [attr], [attr=v], [attr~=v], [attr^=v],
 * [attr$=v], [attr*=v], descendant and child combinators.
 */
export function queryCss(index, selector) {
  const steps = parseCssSelector(String(selector ?? ""));
  if (!steps || steps.some((step) => !step.compound)) return [];

  const results = [];
  for (const node of elementsOf(index)) {
    if (matchSteps(index, node, steps, steps.length - 1)) results.push(node);
  }
  return results;
}

function matchSteps(index, node, steps, position) {
  const step = steps[position];
  if (!matchesCompound(node, step.compound)) return false;
  if (position === 0) return true;

  const parent = node.parentPath ? getNodeByPath(index, node.parentPath) : null;
  if (step.combinator === ">") {
    return parent ? matchSteps(index, parent, steps, position - 1) : false;
  }

  let ancestor = parent;
  while (ancestor) {
    if (matchSteps(index, ancestor, steps, position - 1)) return true;
    ancestor = ancestor.parentPath ? getNodeByPath(index, ancestor.parentPath) : null;
  }
  return false;
}

// ── XPath subset ───────────────────────────────────────────────────────────
// Supported: absolute paths (/html[1]/body[1]/img[1]), descendant (//img),
// relative-looking engine paths (/img[@class="x"] treated as a descendant
// search), predicates [n], [@attr], [@attr="v"], [contains(@attr,"v")].

function splitXPath(path) {
  const steps = [];
  let index = 0;
  let combinator = path.startsWith("//") ? "//" : "/";
  if (path.startsWith("//")) index = 2;
  else if (path.startsWith("/")) index = 1;
  else if (path.startsWith(".//")) {
    combinator = "//";
    index = 3;
  }

  while (index < path.length) {
    const start = index;
    while (index < path.length && path[index] !== "/" && path[index] !== "[") index += 1;
    let name = path.slice(start, index);
    const predicates = [];
    while (path[index] === "[") {
      let depth = 0;
      const predicateStart = index + 1;
      let cursor = index;
      for (; cursor < path.length; cursor += 1) {
        if (path[cursor] === "[") depth += 1;
        else if (path[cursor] === "]") {
          depth -= 1;
          if (depth === 0) break;
        }
      }
      predicates.push(path.slice(predicateStart, cursor));
      index = cursor + 1;
    }
    steps.push({ name: name.replace(/^\./, "").toLowerCase() || null, predicates, combinator });
    if (path.startsWith("//", index)) {
      combinator = "//";
      index += 2;
    } else if (path[index] === "/") {
      combinator = "/";
      index += 1;
    } else {
      break;
    }
  }

  return steps;
}

function predicatesMatch(node, predicates, position) {
  for (const predicate of predicates) {
    const trimmed = predicate.trim();
    if (/^\d+$/.test(trimmed)) {
      if (position !== Number(trimmed)) return false;
      continue;
    }
    if (trimmed === "last()") continue;

    const attrEquals = trimmed.match(/^@([\w:-]+)\s*=\s*["']([^"']*)["']$/);
    if (attrEquals) {
      if (node.attrs?.[attrEquals[1].toLowerCase()] !== attrEquals[2]) return false;
      continue;
    }

    const attrExists = trimmed.match(/^@([\w:-]+)$/);
    if (attrExists) {
      if (node.attrs?.[attrExists[1].toLowerCase()] === undefined) return false;
      continue;
    }

    const contains = trimmed.match(/^contains\(\s*@([\w:-]+)\s*,\s*["']([^"']*)["']\s*\)$/);
    if (contains) {
      if (!String(node.attrs?.[contains[1].toLowerCase()] ?? "").includes(contains[2])) return false;
      continue;
    }

    // Unsupported predicate: fail closed rather than guess.
    return false;
  }
  return true;
}

function applyStep(index, contextNodes, step, isFirst) {
  const candidates = step.combinator === "//"
    ? elementsOf(index)
    : contextNodes.flatMap((node) => elementsOf(index).filter((entry) => entry.parentPath === node.path));

  const filtered = candidates.filter((node) => {
    if (step.name && node.tag !== step.name) return false;
    if (step.name === "text()") return false;
    return true;
  });

  const results = [];
  const counts = new Map();
  for (const node of filtered) {
    counts.set(node.parentPath, (counts.get(node.parentPath) ?? 0) + 1);
    const position = counts.get(node.parentPath);
    if (predicatesMatch(node, step.predicates, position)) {
      results.push({ node, position });
    }
  }
  return results.map((entry) => entry.node);
}

/**
 * Evaluate an XPath subset against the index.
 *
 * @returns {{nodes: object[], method: string, fallback: boolean}}
 */
export function queryXPath(index, xpath) {
  const steps = splitXPath(String(xpath ?? ""));
  if (steps.length === 0) return { nodes: [], method: "xpath-subset", fallback: false };

  const root = index?.root;
  if (!root) return { nodes: [], method: "xpath-subset", fallback: false };

  const absolute = String(xpath).trim().startsWith("/") && !String(xpath).trim().startsWith("//");
  const firstIsRoot = steps[0]?.name === root.tag;

  if (absolute && firstIsRoot) {
    // The first step names the root element itself, not a child of it.
    if (!predicatesMatch(root, steps[0].predicates, 1)) {
      return { nodes: [], method: "xpath-absolute", fallback: false };
    }
    let context = [root];
    for (let position = 1; position < steps.length; position += 1) {
      const step = steps[position];
      context = applyStep(index, context, step, false);
      if (context.length === 0) break;
    }
    return { nodes: context, method: "xpath-absolute", fallback: false };
  }

  // Engine paths such as /a[@class="govuk-link"] are not valid absolute paths
  // from the document root. Treat them as a descendant search and say so.
  let context = [root];
  for (let position = 0; position < steps.length; position += 1) {
    const step = steps[position];
    const combinator = position === 0 ? "//" : step.combinator;
    context = applyStep(index, context, { ...step, combinator }, position === 0);
    if (context.length === 0) break;
  }
  return { nodes: context.slice(), method: "xpath-descendant-search", fallback: true };
}

function normalizeHtmlSnippet(html) {
  return normalizeText(
    String(html ?? "")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ")
  );
}

/**
 * Compare a failure's HTML snippet against indexed nodes by tag and text.
 * This is weak evidence: identical snippets are common, so more than one
 * candidate is reported as ambiguous rather than guessed.
 */
export function queryHtmlSnippet(index, html) {
  const snippet = String(html ?? "").trim();
  if (!snippet) return [];

  const tagMatch = snippet.match(/^<([a-zA-Z][\w-]*)/);
  if (!tagMatch) return [];
  const tag = tagMatch[1].toLowerCase();
  const wantedAttributes = {};
  for (const match of snippet.matchAll(/([\w:-]+)\s*=\s*"([^"]*)"/g)) {
    wantedAttributes[match[1].toLowerCase()] = match[2];
  }
  const wantedText = normalizeHtmlSnippet(snippet.replace(/^<[^>]+>/, "").replace(/<\/[^>]+>$/, ""));

  return elementsOf(index).filter((node) => {
    if (node.tag !== tag) return false;
    for (const [name, value] of Object.entries(wantedAttributes)) {
      if (name === "class" || name === "id") continue;
      if (node.attrs?.[name] !== value) return false;
    }
    if (wantedText && node.text && node.text !== wantedText) return false;
    return true;
  });
}
