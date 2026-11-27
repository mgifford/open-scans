/**
 * Browser-side page extractor for the assisted collectors.
 *
 * `collectPageFacts()` is passed to `page.evaluate`, so Playwright serialises its
 * source into the page. It must stay self-contained: no imports, no references
 * to module scope, no Node APIs. It captures facts only — accessible names,
 * signals and item ids are computed in `model.mjs` so they are unit-testable.
 *
 * It records what the DOM contains, not what it means. Nothing here decides
 * whether an element is accessible.
 *
 * @module assessment/collectors/extract
 */

export function collectPageFacts(options = {}) {
  const maxSnippetChars = Number(options.maxSnippetChars) > 0 ? Number(options.maxSnippetChars) : 300;
  // This cap applies only to nodes first discovered through aria-labelledby.
  // Every collected heading, image and link always gets its own graph node, so
  // the cap can never blank the name of an item the inventory contains.
  const maxReferencedNodes = Number(options.maxReferencedNodes ?? options.maxGraphNodes) > 0
    ? Number(options.maxReferencedNodes ?? options.maxGraphNodes)
    : 200;
  const maxDepth = 5;

  const normalise = (value) =>
    String(value ?? "")
      .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
      .normalize("NFC")
      .replace(/\s+/g, " ")
      .trim();

  const truncate = (value, max) => {
    const text = String(value ?? "");
    return text.length <= max ? text : Array.from(text).slice(0, max).join("");
  };

  const cssPath = (el) => {
    const parts = [];
    let node = el;
    while (node && node.nodeType === 1 && node !== document.documentElement) {
      let part = node.tagName.toLowerCase();
      const parent = node.parentElement;
      if (parent) {
        const siblings = Array.from(parent.children).filter((child) => child.tagName === node.tagName);
        if (siblings.length > 1) part += `:nth-of-type(${siblings.indexOf(node) + 1})`;
      }
      parts.unshift(part);
      node = parent;
    }
    parts.unshift("html");
    return parts.join(" > ");
  };

  const snippet = (el) => truncate(el.outerHTML || "", maxSnippetChars);

  const elementIds = new WeakMap();
  const graph = new Map();
  let sequence = 0;
  let referencedNodes = 0;
  let nameGraphCapped = false;

  // Resolve aria-labelledby references into graph nodes, depth-limited and
  // cycle-safe (the WeakMap returns the existing id instead of recursing).
  // Item nodes (depth 0) are never refused: a missing node would otherwise be
  // indistinguishable from an element with no name.
  const ensureNode = (el, depth) => {
    if (!el) return null;
    const existing = elementIds.get(el);
    if (existing) return existing;
    if (depth > 0) {
      if (referencedNodes >= maxReferencedNodes) {
        nameGraphCapped = true;
        return null;
      }
      referencedNodes += 1;
    }
    const id = `n${sequence++}`;
    elementIds.set(el, id);
    const rawRefs = String(el.getAttribute("aria-labelledby") || "")
      .split(/\s+/)
      .filter(Boolean);
    const node = {
      id,
      ariaLabel: el.getAttribute("aria-label"),
      title: el.getAttribute("title"),
      alt: el.tagName === "IMG" ? (el.hasAttribute("alt") ? el.getAttribute("alt") : null) : null,
      text: normalise(el.textContent || ""),
      labelledBy: []
    };
    graph.set(id, node);
    if (depth < maxDepth) {
      for (const refId of rawRefs) {
        const ref = document.getElementById(refId);
        const refNodeId = ref ? ensureNode(ref, depth + 1) : null;
        if (refNodeId) node.labelledBy.push(refNodeId);
      }
    }
    return id;
  };

  const attributesFor = (el) => {
    const computed = getComputedStyle(el);
    const hiddenByAncestor = el.closest('[aria-hidden="true"]') !== null;
    const tabIndexAttr = el.getAttribute("tabindex");
    return {
      role: el.getAttribute("role"),
      ariaHidden: el.getAttribute("aria-hidden") === "true" || hiddenByAncestor,
      ariaLabel: el.getAttribute("aria-label"),
      displayNone: computed.display === "none",
      visibilityHidden: computed.visibility === "hidden",
      tabIndex: tabIndexAttr !== null && Number.isFinite(Number(tabIndexAttr)) ? Number(tabIndexAttr) : null
    };
  };

  const visibleText = (el) =>
    typeof el.innerText === "string" && el.innerText !== "" ? el.innerText : el.textContent || "";

  const headings = Array.from(document.querySelectorAll("h1,h2,h3,h4,h5,h6")).map((el, ordinal) => ({
    ordinal,
    locator: cssPath(el),
    htmlSnippet: snippet(el),
    level: Number(el.tagName.slice(1)),
    text: visibleText(el),
    nameNodeId: ensureNode(el, 0),
    attributes: attributesFor(el)
  }));

  const images = Array.from(document.querySelectorAll("img")).map((el, ordinal) => {
    const rect = el.getBoundingClientRect();
    const figure = el.closest("figure");
    const caption = figure ? figure.querySelector("figcaption") : null;
    return {
      ordinal,
      locator: cssPath(el),
      htmlSnippet: snippet(el),
      src: el.getAttribute("src"),
      alt: el.hasAttribute("alt") ? el.getAttribute("alt") : null,
      renderedWidth: Math.round(rect.width),
      renderedHeight: Math.round(rect.height),
      captionText: caption ? normalise(caption.textContent || "") : "",
      text: "",
      nameNodeId: ensureNode(el, 0),
      attributes: attributesFor(el)
    };
  });

  const links = Array.from(document.querySelectorAll("a[href]")).map((el, ordinal) => {
    const elementChildren = Array.from(el.children);
    const soleChild = elementChildren.length === 1 ? elementChildren[0] : null;
    const soleIsGraphic = Boolean(soleChild) && ["IMG", "svg", "SVG"].includes(soleChild.tagName);
    const text = normalise(el.textContent || "");
    const imageOnly = soleIsGraphic && text === "";
    const nativeAlt =
      imageOnly && soleChild.tagName === "IMG" && soleChild.hasAttribute("alt")
        ? soleChild.getAttribute("alt")
        : null;
    const nodeId = ensureNode(el, 0);
    if (nodeId && nativeAlt !== null) {
      const node = graph.get(nodeId);
      if (node) node.nativeAlt = nativeAlt;
    }
    return {
      ordinal,
      locator: cssPath(el),
      htmlSnippet: snippet(el),
      href: el.href || null,
      target: el.getAttribute("target"),
      rel: el.getAttribute("rel"),
      imageOnly,
      nativeAlt,
      text: visibleText(el),
      nameNodeId: nodeId,
      attributes: attributesFor(el)
    };
  });

  const shadowRootsSkipped = Array.from(document.querySelectorAll("*")).filter((el) => el.shadowRoot).length;

  return {
    url: location.href,
    title: document.title,
    capturedAt: new Date().toISOString(),
    iframesSkipped: document.querySelectorAll("iframe").length,
    shadowRootsSkipped,
    nameGraphCapped,
    nameGraph: Array.from(graph.values()),
    headings,
    images,
    links
  };
}
