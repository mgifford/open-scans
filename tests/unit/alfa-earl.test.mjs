import test from "node:test";
import assert from "node:assert/strict";

import { findPointerExpression, parseAlfaEarl } from "../../scanner/alfa-earl.mjs";

const RULE = "https://alfa.siteimprove.com/rules/sia-r66";

function assertion({ outcome, pointer, info = null, rule = RULE }) {
  return {
    "@type": "earl:Assertion",
    "earl:mode": "earl:automatic",
    "earl:test": { "@id": rule },
    "earl:result": {
      "earl:outcome": { "@id": `earl:${outcome}` },
      ...(info ? { "earl:info": info } : {}),
      ...(pointer ? { "earl:pointer": pointer } : {})
    }
  };
}

test("parses counts, rules and failure messages from EARL", () => {
  const earl = {
    "@graph": [
      { "@type": "earl:Assertor" },
      assertion({ outcome: "passed" }),
      assertion({ outcome: "failed", pointer: { "ptr:expression": "/html[1]/body[1]/p[1]" }, info: "contrast 3.1:1 below 4.5:1" }),
      assertion({ outcome: "cantTell" }),
      assertion({ outcome: "inapplicable" })
    ]
  };

  const parsed = parseAlfaEarl(earl);
  assert.deepEqual(parsed.counts, { passed: 1, failed: 1, cantTell: 1, inapplicable: 1 });
  assert.equal(parsed.outcomeCount, 4);
  assert.deepEqual(parsed.failedRules, [RULE]);
  assert.deepEqual(parsed.passedRules, [RULE]);
  assert.equal(parsed.failures.length, 1);
  assert.equal(parsed.failures[0].xpath, "/html[1]/body[1]/p[1]");
  assert.match(parsed.failures[0].message, /contrast 3\.1:1/);
});

test("reads text-node pointers, which the JSON formatter dropped entirely", () => {
  const earl = {
    "@graph": [
      assertion({
        outcome: "failed",
        pointer: { "ptr:expression": "/html[1]/body[1]/p[2]/node()[3]" },
        info: "The highest possible contrast of the text is 5.17:1"
      })
    ]
  };

  const parsed = parseAlfaEarl(earl);
  assert.equal(parsed.failures[0].xpath, "/html[1]/body[1]/p[2]/node()[3]");
});

test("finds the pointer inside grouped pointers", () => {
  const pointer = {
    "@type": ["ptr:Pointer", "ptr:PointersGroup"],
    "ptr:groupPointer": {
      "@list": [
        { "ptr:expression": "/html[1]/body[1]" },
        { "ptr:expression": "/html[1]/body[1]/main[1]" }
      ]
    }
  };
  assert.equal(findPointerExpression(pointer), "/html[1]/body[1]");
  assert.equal(findPointerExpression(null), null);
  assert.equal(findPointerExpression({}), null);
});

test("survives compacted ids and missing pointers", () => {
  const earl = {
    "@graph": [
      { "earl:test": RULE, "earl:result": { "earl:outcome": "earl:failed" } }
    ]
  };
  const parsed = parseAlfaEarl(earl);
  assert.equal(parsed.failures.length, 1);
  assert.equal(parsed.failures[0].xpath, null);
  assert.equal(parsed.failures[0].rule, RULE);
});

test("ignores nodes without an assertion result", () => {
  const parsed = parseAlfaEarl({ "@graph": [{ "@type": "earl:Assertor" }, { foo: "bar" }] });
  assert.equal(parsed.outcomeCount, 0);
  assert.deepEqual(parsed.failures, []);
});

test("handles the compacted key shape ALFA actually emits", () => {
  // Real ALFA EARL output compacts `earl:result` to `result`, `earl:test` to
  // `test`, and keeps `earl:pointer` inside result.
  const real = {
    "@context": { "@vocab": "http://www.w3.org/ns/earl#" },
    "@graph": [
      {
        "@type": "Assertion",
        "earl:mode": "earl:automatic",
        result: {
          "@type": "TestResult",
          info: "The highest possible contrast of the text is 5.17:1",
          outcome: "earl:failed",
          "earl:pointer": {
            "@type": ["ptr:Pointer", "ptr:XPathPointer"],
            "ptr:expression": "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/p[2]/a[1]"
          }
        },
        test: { "@id": "https://alfa.siteimprove.com/rules/sia-r66" }
      },
      {
        "@type": "Assertion",
        result: { outcome: "earl:inapplicable" },
        test: { "@id": "https://alfa.siteimprove.com/rules/sia-r71" }
      }
    ]
  };

  const parsed = parseAlfaEarl(real);
  assert.deepEqual(parsed.counts, { passed: 0, failed: 1, cantTell: 0, inapplicable: 1 });
  assert.equal(parsed.failures[0].rule, "https://alfa.siteimprove.com/rules/sia-r66");
  assert.equal(parsed.failures[0].xpath, "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/p[2]/a[1]");
  assert.match(parsed.failures[0].message, /5\.17:1/);
});
