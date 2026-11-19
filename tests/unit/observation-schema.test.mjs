import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

import { buildObservationArtifact } from "../../scanner/observations.mjs";

const schema = JSON.parse(
  readFileSync(new URL("../../scanner/schemas/a11y-observation.schema.json", import.meta.url), "utf8")
);

/**
 * Minimal validator for the JSON Schema subset this project's schemas use:
 * $ref to #/$defs, type, required, properties, additionalProperties, items,
 * enum, const, anyOf, minimum and pattern.
 *
 * It is intentionally small: tests only need to prove that the artifact
 * satisfies the documented contract, not to replace a full validator.
 */
function validate(value, node, root, path = "$") {
  const errors = [];

  if (node.$ref) {
    const target = node.$ref.replace(/^#\//, "").split("/").reduce((acc, key) => acc?.[key], root);
    return validate(value, target, root, path);
  }

  if (node.anyOf) {
    const results = node.anyOf.map((option) => validate(value, option, root, path));
    if (results.some((entry) => entry.length === 0)) return [];
    errors.push(`${path}: no anyOf variant matched`);
    return errors;
  }

  if (value === null) {
    if (node.type && !node.type.includes("null")) {
      errors.push(`${path}: expected ${node.type}, found null`);
    }
    return errors;
  }

  if (node.type) {
    const types = Array.isArray(node.type) ? node.type : [node.type];
    const actual = Array.isArray(value) ? "array" : value === null ? "null" : typeof value;
    if (!types.includes(actual) && !(actual === "number" && types.includes("integer"))) {
      errors.push(`${path}: expected ${types.join("|")}, found ${actual}`);
      return errors;
    }
  }

  if (node.const !== undefined && value !== node.const) {
    errors.push(`${path}: expected const ${JSON.stringify(node.const)}`);
  }

  if (node.enum && !node.enum.includes(value)) {
    errors.push(`${path}: ${JSON.stringify(value)} not in enum`);
  }

  if (typeof value === "number" && node.minimum !== undefined && value < node.minimum) {
    errors.push(`${path}: below minimum ${node.minimum}`);
  }

  if (typeof value === "string" && node.pattern && !new RegExp(node.pattern).test(value)) {
    errors.push(`${path}: does not match ${node.pattern}`);
  }

  if (Array.isArray(value) && node.items) {
    value.forEach((entry, index) => errors.push(...validate(entry, node.items, root, `${path}[${index}]`)));
  }

  if (value && typeof value === "object" && !Array.isArray(value)) {
    for (const key of node.required ?? []) {
      if (!(key in value)) errors.push(`${path}: missing required ${key}`);
    }
    for (const [key, entry] of Object.entries(value)) {
      const child = node.properties?.[key];
      if (child) {
        errors.push(...validate(entry, child, root, `${path}.${key}`));
      } else if (node.additionalProperties === false) {
        errors.push(`${path}: unexpected property ${key}`);
      }
    }
  }

  return errors;
}

test("observation artifact validates against the documented schema", () => {
  const artifact = buildObservationArtifact({
    issueNumber: 1,
    scanTitle: "schema fixture",
    engines: ["all"],
    results: [
      {
        finalUrl: "https://example.org/",
        scanContext: { browser: "chromium", viewport: { width: 1280, height: 800 }, colorScheme: "light" },
        axe: {
          failures: [
            {
              rule: "image-alt",
              selector: "#goose-photo",
              html: "<img id=\"goose-photo\" src=\"goose.jpg\">",
              message: "Images must have alternative text",
              wcagSc: ["wcag111"],
              impact: "critical"
            }
          ]
        },
        alfa: {
          failures: [
            {
              rule: "https://alfa.siteimprove.com/rules/sia-r2",
              selector: "#goose-photo",
              html: "<img id=\"goose-photo\" src=\"goose.jpg\">",
              message: "Image has no accessible name"
            }
          ]
        },
        equalAccess: { failures: [] },
        accesslint: { failures: [] },
        qualweb: { failures: [] }
      }
    ]
  });

  const errors = validate(artifact, schema, schema);
  assert.deepEqual(errors, []);
});

test("schema rejects an observation id that is not a full digest", () => {
  const artifact = buildObservationArtifact({
    results: [
      {
        finalUrl: "https://example.org/",
        scanContext: {},
        alfa: { failures: [{ rule: "x", message: "m" }] },
        axe: { failures: [] },
        equalAccess: { failures: [] },
        accesslint: { failures: [] },
        qualweb: { failures: [] }
      }
    ]
  });
  artifact.observations[0].observationId = "A11Y-1234abcd";

  const errors = validate(artifact, schema, schema);
  assert.equal(errors.some((message) => message.includes("does not match")), true);
});
