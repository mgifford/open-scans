import test from "node:test";
import assert from "node:assert/strict";
import { buildActRuleIndex, collectActConsensusOverlaps, getActRuleIds, loadActMapping } from "../../scanner/act-mapping.mjs";

test("loadActMapping exposes the expected overlap counts", () => {
  const mapping = loadActMapping();
  const entries = Object.entries(mapping.byActRuleId || {});
  const shared = entries.filter(([, value]) => value?.axe?.length > 0 && value?.alfa?.length > 0);

  assert.equal(entries.length, 53);
  assert.equal(shared.length, 34);
});

test("getActRuleIds resolves shared axe and alfa mappings", () => {
  assert.deepEqual(getActRuleIds("axe", "image-alt"), ["23a2a8"]);
  assert.deepEqual(getActRuleIds("alfa", "https://alfa.siteimprove.com/rules/sia-r2"), ["23a2a8"]);
  assert.deepEqual(getActRuleIds("qualweb", "QW-ACT-R17"), ["23a2a8"]);
});

test("collectActConsensusOverlaps finds the same ACT rule for axe and QualWeb", () => {
  const summary = [
    {
      finalUrl: "https://example.com/page",
      axe: {
        failures: [
          {
            rule: "image-alt",
            html: "<img src=\"logo.png\">",
            xpath: "img.logo",
            message: "Images must have alternative text",
            isDuplicate: false
          }
        ]
      },
      alfa: {
        failures: []
      },
      qualweb: {
        failures: [
          {
            rule: "QW-ACT-R17",
            html: "<img src=\"logo.png\">",
            xpath: "img.logo",
            message: "Image has non-empty accessible name",
            isDuplicate: false
          }
        ]
      }
    }
  ];

  const overlap = collectActConsensusOverlaps(summary);
  assert.equal(overlap.overlapEntryCount, 1);
  assert.equal(overlap.overlapEntries[0].actRuleId, "23a2a8");
  assert.deepEqual(overlap.overlapEntries[0].scanners.sort(), ["axe", "qualweb"]);
});

test("buildActRuleIndex caches a rule lookup table", () => {
  const index = buildActRuleIndex();
  assert.ok(index instanceof Map);
  assert.ok(index.get("axe:image-alt") instanceof Set);
});