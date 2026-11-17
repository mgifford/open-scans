import test from "node:test";
import assert from "node:assert/strict";
import { extractEqualAccessXPath } from "../../scanner/run-scan.mjs";

test("Equal Access path.dom is retained as the finding XPath", () => {
  assert.equal(
    extractEqualAccessXPath({ path: { dom: "/html[1]/body[1]/nav[1]/a[1]", aria: "link" } }),
    "/html[1]/body[1]/nav[1]/a[1]"
  );
});

test("Equal Access path.xpath and legacy xpath remain supported", () => {
  assert.equal(extractEqualAccessXPath({ path: { xpath: "//nav/a" } }), "//nav/a");
  assert.equal(extractEqualAccessXPath({ xpath: "//a" }), "//a");
  assert.equal(extractEqualAccessXPath({ path: { aria: "link" } }), null);
  assert.equal(extractEqualAccessXPath(null), null);
});
