/**
 * Assisted collector model: accessible names, signals, stable item ids, caps and
 * artifact validation.
 *
 * Everything here is pure: no browser, no filesystem, no network. The browser
 * extractor captures facts; this module turns those facts into an
 * `a11y-assisted-collectors/1` artifact.
 *
 * A collector inventories. It never evaluates a criterion, assigns severity or
 * creates a record. Nothing in the artifact says that an element passes or fails;
 * signals describe markup and carry a "does not mean" line.
 *
 * @module assessment/collectors/model
 */
import { createHash } from "node:crypto";

export const COLLECTOR_SCHEMA = "a11y-assisted-collectors/1";
export const COLLECTOR_SCHEMA_VERSION = 1;
export const ARTIFACT_FILE = "assessment-collectors.json";

export const ITEM_KINDS = Object.freeze(["heading", "image", "link"]);
export const PAGE_STATUSES = Object.freeze(["captured", "failed", "not-captured"]);
export const CAPTURE_STATUSES = Object.freeze(["complete", "partial", "not-run"]);
export const NAME_SOURCES = Object.freeze([
  "aria-labelledby",
  "aria-label",
  "img-alt",
  "img-alt-descendant",
  "text-content",
  "title",
  "depth-limit",
  "not-captured",
  "none"
]);

export const DEFAULT_CAPS = Object.freeze({
  maxPages: 25,
  maxItemsPerKindPerPage: 300,
  maxItemsTotal: 3000,
  maxSnippetChars: 300,
  maxNameChars: 200
});

export const HARD_CAPS = Object.freeze({
  maxPages: 100,
  maxItemsPerKindPerPage: 500,
  maxItemsTotal: 5000,
  maxSnippetChars: 500,
  maxNameChars: 400
});

const ITEM_ID_RE = /^col_[a-f0-9]{16}$/;

/**
 * Keys that would turn an inventory into a verdict. The validator rejects them
 * anywhere in the artifact, including nested objects.
 */
const BANNED_KEYS = Object.freeze([
  "outcome",
  "severity",
  "verdict",
  "wcag",
  "conformance",
  "score",
  "percentage",
  "priority"
]);

const GENERIC_LINK_TEXT = Object.freeze([
  "click here",
  "here",
  "read more",
  "learn more",
  "more",
  "details",
  "link"
]);

const FILENAME_LIKE_RE = /\.(png|jpe?g|gif|svg|webp|avif|bmp|tiff?)$/i;

const NEW_WINDOW_TEXT_RE = /new (window|tab)|opens in/i;

/**
 * Every signal carries its definition and what it does not mean. A signal id used
 * in the artifact but missing here is a validation error.
 */
export const SIGNAL_CATALOGUE = Object.freeze([
  Object.freeze({
    id: "image-alt-missing",
    title: "Image has no alt attribute",
    definition:
      "An img element has no alt attribute, no role of presentation or none, and is not aria-hidden.",
    doesNotMean:
      "That the image lacks a text alternative: a background image, an inline SVG or an ancestor label may provide one, and none of those is captured."
  }),
  Object.freeze({
    id: "image-alt-empty",
    title: "Image has an empty alt attribute",
    definition: "An img element has alt=\"\".",
    doesNotMean: "That the image is decorative, or that it is not. The author's intent is not captured."
  }),
  Object.freeze({
    id: "image-alt-filename-like",
    title: "Image alternative looks like a file name",
    definition: "A non-empty alt attribute matches a file-extension pattern.",
    doesNotMean: "That the author intended a file name, or that the alternative is useless in context."
  }),
  Object.freeze({
    id: "image-alt-repeats-caption",
    title: "Image alternative repeats its caption",
    definition: "A non-empty alt attribute equals the normalised text of the nearest figcaption.",
    doesNotMean: "That the repetition is wrong; it may be deliberate."
  }),
  Object.freeze({
    id: "link-name-empty",
    title: "Link has no computed name",
    definition: "The computed accessible name of an a[href] element is empty.",
    doesNotMean: "That the link has no purpose: an icon, CSS background or generated content may supply a label that this capture does not compute."
  }),
  Object.freeze({
    id: "link-text-generic",
    title: "Link text is generic",
    definition:
      "The normalised visible text is one of a fixed list: click here, here, read more, learn more, more, details, link.",
    doesNotMean: "That the purpose is unclear in context; 2.4.4 is judged in context, not from link text alone."
  }),
  Object.freeze({
    id: "link-image-only",
    title: "Link contains only an image",
    definition: "The link's only element child is an img or svg element and it has no text.",
    doesNotMean: "That the link name is missing; the image alternative may contribute it."
  }),
  Object.freeze({
    id: "link-new-window-unannounced",
    title: "Link opens a new window without saying so in its name",
    definition:
      "The link has target=\"_blank\" and neither its visible text nor its computed name mentions a new window or tab.",
    doesNotMean: "That the behaviour must be announced in every context, or that opening a new window is a failure."
  }),
  Object.freeze({
    id: "heading-empty",
    title: "Heading is empty",
    definition: "A heading element has no non-whitespace text and no computed accessible name.",
    doesNotMean: "That the heading was intended to be empty; it may be populated by script after capture."
  }),
  Object.freeze({
    id: "heading-level-skip",
    title: "Heading level jumps by more than one",
    definition: "A heading's level is more than one greater than the previous heading's level in DOM order.",
    doesNotMean: "That the outline is broken; visual structure may not follow the outline, and the first heading is never judged."
  }),
  Object.freeze({
    id: "aria-label-overrides-visible-text",
    title: "Accessible name does not contain the visible text",
    definition:
      "An element has an aria-label, non-empty visible text, and the label does not contain that visible text case-insensitively.",
    doesNotMean: "That the label is wrong; it is a candidate for a review of label-in-name, not a finding."
  })
]);

const SIGNAL_IDS = new Set(SIGNAL_CATALOGUE.map((signal) => signal.id));

export class CollectorValidationError extends Error {
  constructor(issues) {
    super(`Collector artifact is invalid: ${issues.join("; ")}`);
    this.name = "CollectorValidationError";
    this.issues = issues;
  }
}

/** Collapse whitespace and apply Unicode NFC. Never lowercases. */
export function normaliseText(value) {
  return String(value ?? "")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .normalize("NFC")
    .replace(/\s+/g, " ")
    .trim();
}

/** Truncate on a code-point boundary so a surrogate pair is never split. */
export function truncate(value, max) {
  const text = String(value ?? "");
  if (!Number.isFinite(max) || max <= 0) return "";
  if (text.length <= max) return text;
  return Array.from(text).slice(0, max).join("");
}

/** Clamp requested caps to the hard maximum and fill defaults. */
export function resolveCaps(overrides = {}) {
  const caps = {};
  for (const key of Object.keys(DEFAULT_CAPS)) {
    const requested = Number(overrides?.[key]);
    const max = HARD_CAPS[key];
    caps[key] = Number.isFinite(requested) && requested > 0 ? Math.min(Math.floor(requested), max) : DEFAULT_CAPS[key];
  }
  return Object.freeze(caps);
}

/**
 * Resolve an accessible name from a captured node graph.
 *
 * Precedence: aria-labelledby, aria-label, the kind's native source, title. The
 * graph is depth-limited and cycle-safe. This is a documented subset of AccName
 * 1.2, not an implementation of it: generated content, aria-owns, hidden-node
 * pruning and the browser's accessibility tree are not modelled.
 */
export function resolveAccessibleName({ graph, nodeId, kind }, { maxDepth = 5 } = {}) {
  const nodes = graph instanceof Map ? graph : new Map(Object.entries(graph ?? {}));
  const start = nodes.get(nodeId);
  if (!start) {
    return { value: "", source: "not-captured", branches: [], empty: true, captured: false };
  }

  function fromNode(node, depth, visited) {
    if (!node) return null;
    if (depth > maxDepth) {
      return { value: "", source: "depth-limit", branches: ["depth-limit"], empty: true };
    }
    const branches = [];

    // AccName concatenates every referenced node's name in document order. A
    // single inaccessible reference must not stop the later ones resolving.
    const parts = [];
    for (const refId of node.labelledBy ?? []) {
      if (visited.has(refId)) {
        branches.push("cycle-skipped");
        continue;
      }
      const refNode = nodes.get(refId);
      if (!refNode) continue;
      const nextVisited = new Set(visited);
      nextVisited.add(refId);
      const resolved = fromNode(refNode, depth + 1, nextVisited);
      if (!resolved) continue;
      branches.push(...resolved.branches);
      if (resolved.value) parts.push(resolved.value);
    }
    if (parts.length > 0) {
      return {
        value: parts.join(" "),
        source: "aria-labelledby",
        branches: ["aria-labelledby", ...branches],
        empty: false
      };
    }

    const labelled = normaliseText(node.ariaLabel);
    if (labelled) {
      return { value: labelled, source: "aria-label", branches: ["aria-label"], empty: false };
    }

    // An <img> node's alt is a name input wherever that node is referenced. An
    // empty alt contributes nothing except for the image item itself, whose
    // resolved state is an empty img-alt.
    if (node.alt !== null && node.alt !== undefined) {
      const alt = normaliseText(node.alt);
      if (alt) {
        return { value: alt, source: "img-alt", branches: ["img-alt"], empty: false };
      }
      if (kind === "image") {
        return { value: "", source: "img-alt", branches: ["img-alt"], empty: true };
      }
    }

    if (kind === "link" || kind === "heading") {
      const text = normaliseText(node.text);
      if (text) {
        return { value: text, source: "text-content", branches: ["text-content"], empty: false };
      }
      if (kind === "link" && node.nativeAlt !== null && node.nativeAlt !== undefined) {
        const alt = normaliseText(node.nativeAlt);
        if (alt) {
          return { value: alt, source: "img-alt-descendant", branches: ["img-alt-descendant"], empty: false };
        }
      }
    }

    const title = normaliseText(node.title);
    if (title) {
      return { value: title, source: "title", branches: ["title"], empty: false };
    }

    // Keep the branches collected on the way down so a cycle or depth stop is
    // visible even when the name resolves to empty.
    return { value: "", source: "none", branches, empty: true };
  }

  const resolved = fromNode(start, 0, new Set([nodeId]));
  return { ...(resolved ?? { value: "", source: "none", branches: [], empty: true }), captured: true };
}

/** Stable item id: same page, same element, same id across runs. */
export function buildItemId({ reportId, pageUrl, kind, ordinal, locator, name }) {
  const material = [reportId, pageUrl, kind, ordinal, locator, normaliseText(name)].join("\u0000");
  return `col_${createHash("sha256").update(material).digest("hex").slice(0, 16)}`;
}

/** Deterministic signals for one item. Absence means "not detected", never "passed". */
export function detectItemSignals(item) {
  const signals = [];
  const attrs = item.attributes ?? {};

  if (item.kind === "image") {
    const hasAlt = item.alt !== null && item.alt !== undefined;
    const presentationRole = attrs.role === "presentation" || attrs.role === "none";
    if (!hasAlt && !presentationRole && !attrs.ariaHidden) {
      signals.push({ id: "image-alt-missing", detail: "img has no alt attribute" });
    }
    if (hasAlt && normaliseText(item.alt) === "") {
      signals.push({ id: "image-alt-empty", detail: "alt=\"\"" });
    }
    if (hasAlt && FILENAME_LIKE_RE.test(normaliseText(item.alt))) {
      signals.push({ id: "image-alt-filename-like", detail: `alt looks like a file name: ${normaliseText(item.alt)}` });
    }
    const caption = normaliseText(item.captionText);
    if (caption && hasAlt && normaliseText(item.alt).toLowerCase() === caption.toLowerCase()) {
      signals.push({ id: "image-alt-repeats-caption", detail: "alt equals the adjacent figcaption" });
    }
  }

  if (item.kind === "link") {
    // "Not captured" and "depth limit" are not empty names: the item's own
    // name node always exists now, but a future cap regression must not turn
    // an uncomputed name into a finding-shaped signal.
    const nameUnavailable = ["not-captured", "depth-limit"].includes(item.accessibleName.source);
    if (item.accessibleName.empty && !nameUnavailable) {
      signals.push({ id: "link-name-empty", detail: "computed name is empty" });
    }
    const text = normaliseText(item.text).toLowerCase();
    if (text && GENERIC_LINK_TEXT.includes(text)) {
      signals.push({ id: "link-text-generic", detail: `link text: ${normaliseText(item.text)}` });
    }
    if (item.imageOnly) {
      signals.push({ id: "link-image-only", detail: "link contains only an image" });
    }
    if (item.target === "_blank") {
      const mentioned = NEW_WINDOW_TEXT_RE.test(normaliseText(item.text)) || NEW_WINDOW_TEXT_RE.test(item.accessibleName.value);
      if (!mentioned) {
        signals.push({ id: "link-new-window-unannounced", detail: "target=\"_blank\" with no new-window wording" });
      }
    }
  }

  if (
    item.kind === "heading" &&
    item.accessibleName.empty &&
    !["not-captured", "depth-limit"].includes(item.accessibleName.source) &&
    normaliseText(item.text) === ""
  ) {
    signals.push({ id: "heading-empty", detail: "heading has no text and no computed name" });
  }

  const ariaLabel = normaliseText(attrs.ariaLabel);
  const visibleText = normaliseText(item.text);
  if (ariaLabel && visibleText && !ariaLabel.toLowerCase().includes(visibleText.toLowerCase())) {
    signals.push({
      id: "aria-label-overrides-visible-text",
      detail: `aria-label "${ariaLabel}" does not contain visible text "${visibleText}"`
    });
  }

  return signals;
}

function buildAttributes(raw = {}) {
  return {
    role: raw.role ?? null,
    ariaHidden: raw.ariaHidden === true,
    ariaLabel: normaliseText(raw.ariaLabel) || null,
    displayNone: raw.displayNone === true,
    visibilityHidden: raw.visibilityHidden === true,
    tabIndex: Number.isFinite(raw.tabIndex) ? raw.tabIndex : null
  };
}

function buildItem(rawItem, { reportId, pageUrl, kind, caps, graph }) {
  const text = normaliseText(rawItem.text);
  const accessibleName = resolveAccessibleName({ graph, nodeId: rawItem.nameNodeId, kind });
  const nameValue = truncate(accessibleName.value, caps.maxNameChars);
  const nameTruncated = Array.from(accessibleName.value).length > caps.maxNameChars;
  const locator = String(rawItem.locator ?? "");
  const itemId = buildItemId({
    reportId,
    pageUrl,
    kind,
    ordinal: rawItem.ordinal,
    locator,
    name: nameValue
  });

  const item = {
    itemId,
    kind,
    ordinal: rawItem.ordinal,
    locator,
    locatorType: "css",
    htmlSnippet: truncate(normaliseText(rawItem.htmlSnippet), caps.maxSnippetChars),
    text: {
      raw: truncate(String(rawItem.text ?? ""), caps.maxNameChars),
      normalised: truncate(text, caps.maxNameChars),
      length: Array.from(text).length
    },
    accessibleName: {
      value: nameValue,
      source: accessibleName.source,
      branches: [...accessibleName.branches],
      empty: accessibleName.empty,
      captured: accessibleName.captured !== false,
      truncated: nameTruncated,
      length: Array.from(accessibleName.value).length
    },
    attributes: buildAttributes(rawItem.attributes)
  };

  if (kind === "heading") {
    item.heading = {
      level: Number.isFinite(rawItem.level) ? rawItem.level : null,
      parentItemId: null,
      outlineIndex: null
    };
  }
  if (kind === "image") {
    item.image = {
      src: rawItem.src ?? null,
      renderedWidth: Number.isFinite(rawItem.renderedWidth) ? rawItem.renderedWidth : null,
      renderedHeight: Number.isFinite(rawItem.renderedHeight) ? rawItem.renderedHeight : null,
      captionText: truncate(normaliseText(rawItem.captionText), caps.maxNameChars) || null
    };
  }
  if (kind === "link") {
    item.link = {
      href: rawItem.href ?? null,
      target: rawItem.target ?? null,
      rel: rawItem.rel ?? null,
      imageOnly: rawItem.imageOnly === true
    };
  }

  // Signals read the resolved name, so they are computed after it.
  const signalInput = {
    ...item,
    alt: rawItem.alt,
    captionText: rawItem.captionText,
    text: item.text.raw,
    imageOnly: rawItem.imageOnly,
    target: rawItem.target
  };
  item.signals = detectItemSignals(signalInput);
  return item;
}

function assignHeadingOutline(headings) {
  const stack = [];
  headings.forEach((heading, index) => {
    heading.heading.outlineIndex = index;
    while (stack.length > 0 && stack[stack.length - 1].heading.level >= heading.heading.level) {
      stack.pop();
    }
    heading.heading.parentItemId = stack.length > 0 ? stack[stack.length - 1].itemId : null;
    stack.push(heading);
  });
}

function applyOutlineSignals(headings) {
  for (let index = 1; index < headings.length; index += 1) {
    const previous = headings[index - 1].heading.level;
    const current = headings[index].heading.level;
    if (Number.isFinite(previous) && Number.isFinite(current) && current - previous > 1) {
      headings[index].signals.push({
        id: "heading-level-skip",
        detail: `h${previous} followed by h${current}`
      });
    }
  }
}

/**
 * Turn one captured page into inventory items, applying per-kind caps.
 *
 * @param {object} rawPage facts returned by the browser extractor
 * @param {{reportId: string, caps: ReturnType<typeof resolveCaps>}} options
 */
export function buildPageInventory(rawPage, { reportId, caps } = {}) {
  const resolvedCaps = caps ?? DEFAULT_CAPS;
  const pageUrl = String(rawPage?.finalUrl ?? rawPage?.url ?? "");
  const graph = new Map((rawPage?.nameGraph ?? []).map((node) => [node.id, node]));
  const truncated = { headings: false, images: false, links: false };
  const built = { headings: [], images: [], links: [] };

  for (const kind of ITEM_KINDS) {
    const key = `${kind}s`;
    const rawItems = Array.isArray(rawPage?.[key]) ? rawPage[key] : [];
    const limit = resolvedCaps.maxItemsPerKindPerPage;
    if (rawItems.length > limit) truncated[key] = true;
    built[key] = rawItems
      .slice(0, limit)
      .map((rawItem) => buildItem(rawItem, { reportId, pageUrl, kind, caps: resolvedCaps, graph }));
  }

  assignHeadingOutline(built.headings);
  applyOutlineSignals(built.headings);

  return {
    url: String(rawPage?.url ?? pageUrl),
    finalUrl: pageUrl,
    status: rawPage?.status === "failed" ? "failed" : "captured",
    httpStatus: Number.isFinite(rawPage?.httpStatus) ? rawPage.httpStatus : null,
    title: rawPage?.title ?? null,
    capturedAt: rawPage?.capturedAt ?? null,
    iframesSkipped: Number.isFinite(rawPage?.iframesSkipped) ? rawPage.iframesSkipped : 0,
    shadowRootsSkipped: Number.isFinite(rawPage?.shadowRootsSkipped) ? rawPage.shadowRootsSkipped : 0,
    nameGraphCapped: rawPage?.nameGraphCapped === true,
    truncated,
    error: rawPage?.error ?? null,
    counts: {
      headings: built.headings.length,
      images: built.images.length,
      links: built.links.length,
      signals: [...built.headings, ...built.images, ...built.links].reduce((total, item) => total + item.signals.length, 0)
    },
    ...built
  };
}

/**
 * Trim a page's items so the run does not exceed the total item cap. The page
 * keeps its captured status and records which kinds were cut.
 */
export function trimPageToTotal(page, remaining) {
  let budget = Math.max(0, remaining);
  const trimmed = { ...page, headings: [], images: [], links: [] };
  const truncated = { ...(page.truncated ?? {}) };
  for (const kind of ITEM_KINDS) {
    const key = `${kind}s`;
    const items = Array.isArray(page?.[key]) ? page[key] : [];
    if (budget <= 0 && items.length > 0) {
      truncated[key] = true;
      continue;
    }
    if (items.length > budget) {
      truncated[key] = true;
      trimmed[key] = items.slice(0, budget);
      budget = 0;
      continue;
    }
    trimmed[key] = items;
    budget -= items.length;
  }
  trimmed.truncated = truncated;
  trimmed.counts = {
    headings: trimmed.headings.length,
    images: trimmed.images.length,
    links: trimmed.links.length,
    signals: [...trimmed.headings, ...trimmed.images, ...trimmed.links].reduce(
      (total, item) => total + item.signals.length,
      0
    )
  };
  return trimmed;
}

/** A page that could not be captured, with the error bounded and no items. */
export function buildFailedPage({ url, error, capturedAt = null }) {
  const message = String(error ?? "capture failed")
    .split("\n")[0]
    .slice(0, 200);
  return {
    url,
    finalUrl: url,
    status: "failed",
    httpStatus: null,
    title: null,
    capturedAt,
    iframesSkipped: 0,
    shadowRootsSkipped: 0,
    nameGraphCapped: false,
    truncated: { headings: false, images: false, links: false },
    error: message,
    counts: { headings: 0, images: 0, links: 0, signals: 0 },
    headings: [],
    images: [],
    links: []
  };
}

export function buildNotCapturedPage({ url, reason }) {
  const page = buildFailedPage({ url, error: reason });
  return { ...page, status: "not-captured" };
}

function walkForBannedKeys(value, path, issues) {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) {
    value.forEach((entry, index) => walkForBannedKeys(entry, `${path}[${index}]`, issues));
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    if (BANNED_KEYS.includes(key)) {
      issues.push(`${path}.${key} is not allowed in a collector artifact`);
    }
    walkForBannedKeys(child, `${path}.${key}`, issues);
  }
}

/**
 * Validate every invariant the contract states. Throws
 * CollectorValidationError with the full issue list; returns true otherwise.
 */
export function validateCollectorArtifact(artifact) {
  const issues = [];
  const fail = (message) => issues.push(message);

  if (!artifact || typeof artifact !== "object") {
    throw new CollectorValidationError(["artifact must be an object"]);
  }
  if (artifact.schema !== COLLECTOR_SCHEMA) fail(`schema must be ${COLLECTOR_SCHEMA}`);
  if (artifact.schemaVersion !== COLLECTOR_SCHEMA_VERSION) fail("schemaVersion must be 1");

  const association = artifact.reportAssociation ?? {};
  if (typeof association.reportId !== "string" || !association.reportId) fail("reportAssociation.reportId is required");
  if (!("issueNumber" in association)) fail("reportAssociation.issueNumber is required");
  if (typeof association.scannedAt !== "string" || !association.scannedAt) fail("reportAssociation.scannedAt is required");

  const catalogue = artifact.catalogue ?? {};
  if (typeof catalogue.catalogueVersion !== "string" || !catalogue.catalogueVersion) {
    fail("catalogue.catalogueVersion is required");
  }
  if (!("contentSha256" in catalogue)) fail("catalogue.contentSha256 is required");

  const capture = artifact.capture ?? {};
  if (!CAPTURE_STATUSES.includes(capture.status)) fail(`capture.status must be one of ${CAPTURE_STATUSES.join(", ")}`);
  if (typeof capture.browser !== "string" || !capture.browser) fail("capture.browser is required");
  if (!capture.viewport || !Number.isFinite(capture.viewport.width) || !Number.isFinite(capture.viewport.height)) {
    fail("capture.viewport width and height are required");
  }
  if (!Number.isInteger(capture.navigationCount) || capture.navigationCount < 0) fail("capture.navigationCount must be a non-negative integer");
  if (!Number.isInteger(capture.pagesRequested) || capture.pagesRequested < 0) fail("capture.pagesRequested must be a non-negative integer");
  if (!Number.isInteger(capture.pagesCaptured) || capture.pagesCaptured < 0) fail("capture.pagesCaptured must be a non-negative integer");
  if (!Number.isInteger(capture.pagesFailed) || capture.pagesFailed < 0) fail("capture.pagesFailed must be a non-negative integer");
  if (!capture.caps || typeof capture.caps !== "object") fail("capture.caps is required");
  if (!("reason" in capture)) fail("capture.reason is required (null when the run completed)");

  const signalCatalogue = Array.isArray(artifact.signalCatalogue) ? artifact.signalCatalogue : null;
  if (!signalCatalogue) {
    fail("signalCatalogue must be an array");
  } else {
    const seen = new Set();
    for (const [index, signal] of signalCatalogue.entries()) {
      for (const field of ["id", "title", "definition", "doesNotMean"]) {
        if (typeof signal?.[field] !== "string" || !signal[field]) fail(`signalCatalogue[${index}].${field} is required`);
      }
      if (signal?.id) {
        if (seen.has(signal.id)) fail(`signalCatalogue has a duplicate id: ${signal.id}`);
        seen.add(signal.id);
      }
    }
    for (const id of SIGNAL_IDS) {
      if (!seen.has(id)) fail(`signalCatalogue is missing the built-in signal: ${id}`);
    }
  }

  const pages = Array.isArray(artifact.pages) ? artifact.pages : null;
  if (!pages) {
    fail("pages must be an array");
  } else {
    const knownSignals = new Set((signalCatalogue ?? []).map((signal) => signal?.id).filter(Boolean));
    const seenIds = new Set();
    for (const [pageIndex, page] of pages.entries()) {
      const where = `pages[${pageIndex}]`;
      if (typeof page?.url !== "string" || !page.url) fail(`${where}.url is required`);
      if (!PAGE_STATUSES.includes(page?.status)) fail(`${where}.status must be one of ${PAGE_STATUSES.join(", ")}`);
      if (!page?.truncated || typeof page.truncated !== "object") fail(`${where}.truncated is required`);
      if ("nameGraphCapped" in (page ?? {}) && typeof page.nameGraphCapped !== "boolean") {
        fail(`${where}.nameGraphCapped must be a boolean when present`);
      }
      if (!("error" in (page ?? {}))) fail(`${where}.error is required (null when captured)`);
      for (const key of ["headings", "images", "links"]) {
        if (!Array.isArray(page?.[key])) {
          fail(`${where}.${key} must be an array`);
          continue;
        }
        if ((page?.counts?.[key] ?? -1) !== page[key].length) fail(`${where}.counts.${key} does not match the array length`);
        for (const [itemIndex, item] of page[key].entries()) {
          const itemWhere = `${where}.${key}[${itemIndex}]`;
          if (!ITEM_ID_RE.test(String(item?.itemId ?? ""))) fail(`${itemWhere}.itemId must match col_<16 hex>`);
          if (seenIds.has(item?.itemId)) fail(`${itemWhere}.itemId is duplicated: ${item?.itemId}`);
          seenIds.add(item?.itemId);
          if (item?.kind !== key.slice(0, -1)) fail(`${itemWhere}.kind must be "${key.slice(0, -1)}"`);
          if (!Number.isInteger(item?.ordinal)) fail(`${itemWhere}.ordinal must be an integer`);
          if (typeof item?.locator !== "string" || !item.locator) fail(`${itemWhere}.locator is required`);
          if (item?.locatorType !== "css") fail(`${itemWhere}.locatorType must be "css"`);
          if (typeof item?.htmlSnippet !== "string") fail(`${itemWhere}.htmlSnippet must be a string`);
          if (typeof item?.text?.normalised !== "string") fail(`${itemWhere}.text.normalised must be a string`);
          if (typeof item?.accessibleName?.value !== "string") fail(`${itemWhere}.accessibleName.value must be a string`);
          if (!NAME_SOURCES.includes(item?.accessibleName?.source)) {
            fail(`${itemWhere}.accessibleName.source is not a known source`);
          }
          if (typeof item?.accessibleName?.empty !== "boolean") fail(`${itemWhere}.accessibleName.empty must be a boolean`);
          if ("captured" in (item.accessibleName ?? {}) && typeof item.accessibleName.captured !== "boolean") {
            fail(`${itemWhere}.accessibleName.captured must be a boolean when present`);
          }
          if (item?.accessibleName?.captured === false && item?.accessibleName?.source !== "not-captured") {
            fail(`${itemWhere}.accessibleName.captured false requires source "not-captured"`);
          }
          if (item?.accessibleName?.captured !== false && item?.accessibleName?.source === "not-captured") {
            fail(`${itemWhere}.accessibleName.source "not-captured" requires captured false`);
          }
          if ("truncated" in (item.accessibleName ?? {}) && typeof item.accessibleName.truncated !== "boolean") {
            fail(`${itemWhere}.accessibleName.truncated must be a boolean when present`);
          }
          if ("length" in (item.accessibleName ?? {}) && (!Number.isInteger(item.accessibleName.length) || item.accessibleName.length < 0)) {
            fail(`${itemWhere}.accessibleName.length must be a non-negative integer when present`);
          }
          if (!item?.attributes || typeof item.attributes !== "object") fail(`${itemWhere}.attributes is required`);
          if (!Array.isArray(item?.signals)) {
            fail(`${itemWhere}.signals must be an array`);
            continue;
          }
          for (const signal of item.signals) {
            if (!knownSignals.has(signal?.id)) fail(`${itemWhere}.signals uses an unknown id: ${signal?.id}`);
            if (typeof signal?.detail !== "string" || !signal.detail) fail(`${itemWhere}.signals[].detail is required`);
          }
        }
      }
      if ((page?.counts?.signals ?? -1) !== [...(page?.headings ?? []), ...(page?.images ?? []), ...(page?.links ?? [])].reduce(
        (total, item) => total + (Array.isArray(item?.signals) ? item.signals.length : 0),
        0
      )) {
        fail(`${where}.counts.signals does not match the item signal counts`);
      }
    }

    const captured = pages.filter((page) => page?.status === "captured").length;
    const failed = pages.filter((page) => page?.status === "failed").length;
    if (capture.pagesCaptured !== captured) fail("capture.pagesCaptured does not match the captured pages");
    if (capture.pagesFailed !== failed) fail("capture.pagesFailed does not match the failed pages");
    if (capture.navigationCount !== captured + failed) fail("capture.navigationCount must equal captured + failed pages");
    if (capture.status === "complete" && (failed > 0 || pages.some((page) => page?.status === "not-captured"))) {
      fail("capture.status is complete but some pages were not captured");
    }
    if (capture.status === "complete" && pages.length !== capture.pagesRequested) {
      fail("capture.status is complete but the page count does not match pagesRequested");
    }
    if (capture.status === "not-run" && (pages.length > 0 || !capture.reason)) {
      fail("capture.status is not-run but pages exist or no reason was recorded");
    }
  }

  walkForBannedKeys(artifact, "artifact", issues);

  if (issues.length > 0) throw new CollectorValidationError(issues);
  return true;
}

/**
 * Assemble and validate the artifact. The caller supplies capture facts; this
 * function owns the shape, the signal catalogue and the invariants.
 */
export function buildCollectorArtifact({
  reportAssociation,
  catalogue,
  capture,
  pages,
  generatedAt
}) {
  const artifact = {
    schema: COLLECTOR_SCHEMA,
    schemaVersion: COLLECTOR_SCHEMA_VERSION,
    generatedAt: generatedAt ?? new Date().toISOString(),
    reportAssociation: {
      reportId: reportAssociation?.reportId ?? null,
      issueNumber: reportAssociation?.issueNumber ?? null,
      scannedAt: reportAssociation?.scannedAt ?? null
    },
    catalogue: {
      catalogueVersion: catalogue?.identity?.catalogueVersion ?? "unknown",
      contentSha256: catalogue?.identity?.contentSha256 ?? null
    },
    capture: {
      mode: "assisted",
      status: capture?.status ?? "not-run",
      browser: capture?.browser ?? "unknown",
      browserVersion: capture?.browserVersion ?? null,
      viewport: capture?.viewport ?? { width: 0, height: 0 },
      colorScheme: capture?.colorScheme ?? "light",
      startedAt: capture?.startedAt ?? null,
      finishedAt: capture?.finishedAt ?? null,
      durationMs: Number.isFinite(capture?.durationMs) ? capture.durationMs : null,
      navigationCount: capture?.navigationCount ?? 0,
      pagesRequested: capture?.pagesRequested ?? 0,
      pagesCaptured: capture?.pagesCaptured ?? 0,
      pagesFailed: capture?.pagesFailed ?? 0,
      caps: capture?.caps ?? DEFAULT_CAPS,
      reason: capture?.reason ?? null
    },
    signalCatalogue: SIGNAL_CATALOGUE.map((signal) => ({ ...signal })),
    pages: Array.isArray(pages) ? pages : []
  };
  validateCollectorArtifact(artifact);
  return artifact;
}

/** Limits repeated in the artifact and the report. */
export const COLLECTOR_LIMITATIONS = Object.freeze([
  "Top document only: iframes and shadow roots are counted, not captured.",
  "No interaction, scrolling, typing or hovering; content that appears later is not captured.",
  "Accessible names come from a DOM subset of AccName 1.2, not from the browser's accessibility tree.",
  "Caps truncate the inventory; check capture.caps and each page's truncated flags.",
  "A captured element is not evidence that a criterion was evaluated."
]);
