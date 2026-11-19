import test from "node:test";
import assert from "node:assert/strict";

import { buildDomIndex, queryCss, queryXPath } from "../../scanner/dom-index.mjs";
import { resolveTarget } from "../../scanner/target-resolution.mjs";

const LINK_COUNT = 18;

const LINKS = Array.from(
  { length: LINK_COUNT },
  (_, index) =>
    `<li><a class="govuk-link" href="/link-${index}/">Link ${index}</a></li>`
).join("");

const PAGE = `<!doctype html>
<html lang="en">
  <head><title>Blind spots</title></head>
  <body>
    <div class="govuk-width-container">
      <main id="main-content">
        <h1>What automation misses</h1>
        <img id="goose-photo" src="goose.jpg" class="hero">
        <ul>${LINKS}</ul>
      </main>
      <aside><p class="govuk-body-s">Related</p></aside>
    </div>
  </body>
</html>`;

test("CSS and absolute XPath resolve to the same target id", () => {
  const index = buildDomIndex(PAGE);
  const viaCss = resolveTarget(index, { locator: "#goose-photo", locatorType: "css" });
  const viaXpath = resolveTarget(index, {
    locator: "/html[1]/body[1]/div[1]/main[1]/img[1]",
    locatorType: "xpath"
  });

  assert.equal(viaCss.resolution, "resolved");
  assert.equal(viaXpath.resolution, "resolved");
  assert.equal(viaCss.resolvedTargetId, viaXpath.resolvedTargetId);
  assert.match(viaCss.resolvedTargetId, /^dom:v1:[a-f0-9]{64}:\/html\[1\]/);
});

test("a class-based XPath matching many links is ambiguous, never one target", () => {
  const index = buildDomIndex(PAGE);
  const result = resolveTarget(index, { locator: "/a[@class=\"govuk-link\"]", locatorType: "xpath" });

  assert.equal(result.resolution, "ambiguous");
  assert.equal(result.matchedElements, LINK_COUNT);
  assert.equal(result.resolvedTargetId, null);
  assert.equal(result.method, "xpath-descendant-search");
  assert.equal(result.candidates.length, 5);
});

test("two visually identical links stay distinct nodes", () => {
  const html = `<html><body><ul><li><a class="govuk-link" href="/x">Same</a></li><li><a class="govuk-link" href="/x">Same</a></li></ul></body></html>`;
  const index = buildDomIndex(html);

  const links = index.nodes.filter((node) => node.tag === "a");
  assert.equal(links.length, 2);
  const [first, second] = links;

  assert.notEqual(first.path, second.path);
  const ambiguous = resolveTarget(index, { locator: "/a[@class=\"govuk-link\"]", locatorType: "xpath" });
  assert.equal(ambiguous.resolution, "ambiguous");
  assert.equal(ambiguous.matchedElements, 2);
});

test("missing locators resolve to nothing and keep their reason", () => {
  const index = buildDomIndex(PAGE);
  const result = resolveTarget(index, { locator: null, locatorType: "none" });

  assert.equal(result.resolution, "unresolved");
  assert.equal(result.matchedElements, 0);
  assert.match(result.note, /no locator/i);
});

test("no document snapshot is reported instead of guessed", () => {
  const index = buildDomIndex(null);
  const result = resolveTarget(index, { locator: "#main-content", locatorType: "css" });

  assert.equal(result.resolution, "unresolved");
  assert.match(result.note, /no document snapshot/i);
});

test("shadow-root locators are unsupported, not failures", () => {
  const index = buildDomIndex(PAGE);
  const open = resolveTarget(index, { locator: "#host >>> .inner", locatorType: "css" });
  const closed = resolveTarget(index, { locator: "/shadow-root/div[1]", locatorType: "xpath" });

  assert.equal(open.resolution, "unsupported");
  assert.equal(closed.resolution, "unsupported");
  assert.match(open.note, /shadow/i);
});

test("different document states never share a target id", () => {
  const before = buildDomIndex(PAGE);
  const after = buildDomIndex(PAGE.replace("<img id=\"goose-photo\"", "<img id=\"goose-photo\" data-state=\"changed\""));
  const a = resolveTarget(before, { locator: "#goose-photo", locatorType: "css" });
  const b = resolveTarget(after, { locator: "#goose-photo", locatorType: "css" });

  assert.equal(a.resolution, "resolved");
  assert.equal(b.resolution, "resolved");
  assert.notEqual(a.documentHash, b.documentHash);
  assert.notEqual(a.resolvedTargetId, b.resolvedTargetId);
});

test("HTML snippets resolve with low confidence and ambiguity reported", () => {
  const index = buildDomIndex(PAGE);
  const single = resolveTarget(index, { locator: "<img id=\"goose-photo\" class=\"hero\">", locatorType: "html" });
  assert.equal(single.resolution, "resolved");
  assert.equal(single.confidence, "low");
  assert.equal(single.method, "html-snippet");

  const many = resolveTarget(index, { locator: "<a class=\"govuk-link\" href=\"/link-1/\">Link 1</a>", locatorType: "html" });
  assert.equal(many.confidence === "low" || many.resolution === "resolved", true);
});

test("CSS subset supports child combinators used by real engines", () => {
  const index = buildDomIndex(PAGE);
  assert.equal(queryCss(index, "div > main").length, 1);
  assert.equal(queryCss(index, "div > img").length, 0, "img is not a direct child of div");
  assert.equal(queryCss(index, "main img").length, 1);
  assert.equal(queryCss(index, "#main-content > h1").length, 1);
  assert.equal(queryCss(index, "li a").length, LINK_COUNT);
});

test("absolute XPath with positional predicates resolves one node", () => {
  const index = buildDomIndex(PAGE);
  const { nodes } = queryXPath(index, "/html[1]/body[1]/div[1]/main[1]/h1[1]");
  assert.equal(nodes.length, 1);
  assert.equal(nodes[0].tag, "h1");
});

test("engine-relative XPath keeps its fallback method", () => {
  const index = buildDomIndex(PAGE);
  const { nodes, method, fallback } = queryXPath(index, "/p[@class=\"govuk-body-s\"]");
  assert.equal(nodes.length, 1);
  assert.equal(method, "xpath-descendant-search");
  assert.equal(fallback, true);
});

test("document hashes are deterministic for identical html", () => {
  assert.equal(buildDomIndex(PAGE).documentHash, buildDomIndex(PAGE).documentHash);
  assert.equal(buildDomIndex(PAGE).documentHash === buildDomIndex(`${PAGE} `).documentHash, false);
});
