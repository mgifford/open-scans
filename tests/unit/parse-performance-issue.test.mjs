import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  ACCESSIBILITY_ENGINES,
  CONSENT_STATES,
  EVIDENCE_SOURCE_TYPES,
  PERFORMANCE_LIMIT_DEFAULTS,
  PERFORMANCE_MODES,
  PERFORMANCE_REQUEST_SCHEMA_VERSION,
  formatPerformanceParseSummary,
  isSameSiteHost,
  parsePerformanceIssue,
  validatePerformanceRequest
} from "../../scanner/parse-performance-issue.mjs";

const fixture = (name) => JSON.parse(readFileSync(new URL(`../fixtures/${name}`, import.meta.url), "utf8"));
const schema = JSON.parse(
  readFileSync(new URL("../../scanner/schemas/performance-request.schema.json", import.meta.url), "utf8")
);

function issueEvent({ title = "PERF: example.gov", body = "### Domain\nexample.gov", number = 600 } = {}) {
  return {
    issue: {
      number,
      html_url: `https://github.com/mgifford/open-scans/issues/${number}`,
      title,
      created_at: "2026-11-16T12:00:00Z",
      user: { login: "octocat" },
      body
    }
  };
}

function parse(body, title) {
  return parsePerformanceIssue(issueEvent({ body, title }));
}

function assertValid(result) {
  assert.equal(result.ok, true, result.errors.join("\n"));
  assert.ok(result.value);
  return result.value;
}

function assertInvalid(result, messagePart) {
  assert.equal(result.ok, false);
  assert.equal(result.value, null);
  if (messagePart) {
    assert.ok(
      result.errors.some((message) => message.includes(messagePart)),
      `Expected an error containing "${messagePart}", received:\n${result.errors.join("\n")}`
    );
  }
  return result;
}

test("reuse fixture parses without requesting any browser measurement", () => {
  const result = parsePerformanceIssue(fixture("performance-issue-reuse.json"));
  const value = assertValid(result);

  assert.equal(value.schemaVersion, PERFORMANCE_REQUEST_SCHEMA_VERSION);
  assert.equal(value.mode, "reuse");
  assert.equal(value.site.origin, "https://example.gov");
  assert.equal(value.site.host, "example.gov");
  assert.deepEqual(value.site.urls, [
    "https://example.gov/",
    "https://www.example.gov/services"
  ]);
  assert.equal(value.evidenceSources.length, 2);
  assert.deepEqual(value.evidenceSources.map((source) => source.type), ["vital-core", "firefox-energy-scanner"]);
  assert.deepEqual(value.limits, { maxPagesToInspect: 12, maxLighthouseAudits: 0, maxSitespeedPages: 0 });
  assert.equal(value.measurement.browser, "chromium");
  assert.equal(value.measurement.profile, "desktop");
  assert.deepEqual(value.measurement.viewport, { width: 1280, height: 800 });
  assert.equal(value.consent.state, "not-needed");
  assert.equal(value.maxEvidenceAgeDays, 14);
  assert.equal(value.accessibility, undefined);
  assert.equal(result.requiresBrowserMeasurements, false);
  assert.equal(result.requiresAccessibility, false);
  assert.equal(result.requiresSitespeed, false);
  assert.match(value.requestId, /^501-perf-[0-9a-f]{12}$/);
  assert.match(value.provenance.inputDigest, /^sha256:[0-9a-f]{64}$/);
  assert.equal(value.provenance.modeSource, "body");
  assert.ok(value.provenance.defaultedFields.includes("browser"));
});

test("re-parsing the same issue revision produces the same request identity", () => {
  const first = parsePerformanceIssue(fixture("performance-issue-reuse.json"));
  const second = parsePerformanceIssue(fixture("performance-issue-reuse.json"));
  assert.equal(first.value.requestId, second.value.requestId);
  assert.equal(first.value.provenance.inputDigest, second.value.provenance.inputDigest);
});

test("SCAN: issues are never reinterpreted as performance requests", () => {
  const result = assertInvalid(
    parsePerformanceIssue(issueEvent({ title: "SCAN: example.gov accessibility", body: "### URLs\nhttps://example.gov" })),
    "Not a PERF: issue"
  );
  assert.equal(result.isPerformanceIssue, false);
  assert.equal(result.triggerType, null);
  assert.equal(result.requiresAccessibility, false);
});

test("engine keywords in a PERF title are not interpreted as accessibility engines", () => {
  const result = parse("### Domain\nexample.gov", "PERF: AXE example.gov homepage");
  const value = assertValid(result);
  assert.equal(result.scanTitle, "AXE example.gov homepage");
  assert.equal(result.requiresAccessibility, false);
  assert.equal(value.accessibility, undefined);
  assert.ok(!Object.hasOwn(value, "engines"));
});

test("mode defaults to reuse when an evidence source is supplied", () => {
  const body = "### Domain\nexample.gov\n\n### Evidence sources\nvital-core: https://vital.example.gov/api/v1/example.gov/snapshot.json";
  const result = parse(body, "PERF: example.gov");
  const value = assertValid(result);
  assert.equal(value.mode, "reuse");
  assert.equal(value.provenance.modeSource, "default");
  assert.deepEqual(value.limits, { maxPagesToInspect: 20, maxLighthouseAudits: 0, maxSitespeedPages: 0 });
  assert.equal(result.requiresBrowserMeasurements, false);
  assert.ok(result.warnings.some((warning) => warning.includes("'reuse' is the default")));
});

test("mode defaults to light when no evidence source is supplied", () => {
  const result = parse("### Domain\nexample.gov", "PERF: example.gov");
  const value = assertValid(result);
  assert.equal(value.mode, "light");
  assert.deepEqual(value.limits, { maxPagesToInspect: 20, maxLighthouseAudits: 5, maxSitespeedPages: 0 });
  assert.equal(result.requiresBrowserMeasurements, true);
  assert.equal(result.requiresAccessibility, false);
});

test("reuse mode rejects a request for Lighthouse audits", () => {
  const body = "### Performance mode\nreuse\n\n### Domain\nexample.gov\n\n### Limits\nMax Lighthouse audits: 5";
  assertInvalid(parse(body, "PERF: example.gov"), "reuse mode cannot request Lighthouse audits");
});

test("light mode rejects Sitespeed pages", () => {
  const body = "### Performance mode\nlight\n\n### Domain\nexample.gov\n\n### Limits\nMax Sitespeed pages: 2";
  assertInvalid(parse(body, "PERF: example.gov"), "light mode cannot request Sitespeed pages");
});

test("deep mode selects bounded Sitespeed and Lighthouse budgets", () => {
  const body = "### Performance mode\ndeep\n\n### Domain\nexample.gov";
  const result = parse(body, "PERF: example.gov");
  const value = assertValid(result);
  assert.deepEqual(value.limits, { maxPagesToInspect: 20, maxLighthouseAudits: 5, maxSitespeedPages: 3 });
  assert.equal(result.requiresSitespeed, true);
  assert.equal(result.requiresBrowserMeasurements, true);
  assert.equal(value.accessibility, undefined);
});

test("combined mode requires an explicit accessibility engine selection", () => {
  const body = "### Performance mode\ncombined\n\n### Domain\nexample.gov";
  assertInvalid(parse(body, "PERF: example.gov"), "Combined mode requires an explicit 'Accessibility engines' selection");
});

test("combined fixture carries an explicit accessibility selection and performance budgets", () => {
  const result = parsePerformanceIssue(fixture("performance-issue-combined.json"));
  const value = assertValid(result);
  assert.equal(value.mode, "combined");
  assert.deepEqual(value.accessibility, { engines: ["axe", "alfa"] });
  assert.deepEqual(value.limits, { maxPagesToInspect: 10, maxLighthouseAudits: 2, maxSitespeedPages: 2 });
  assert.equal(value.measurement.profile, "mobile");
  assert.deepEqual(value.measurement.viewport, { width: 390, height: 844 });
  assert.equal(value.consent.state, "accepted");
  assert.equal(result.requiresAccessibility, true);
  assert.equal(result.requiresSitespeed, true);
});

test("accessibility engines are rejected outside combined mode", () => {
  const body = "### Performance mode\nlight\n\n### Domain\nexample.gov\n\n### Accessibility engines\nalfa";
  assertInvalid(parse(body, "PERF: example.gov"), "only valid in combined mode");
});

test("combined mode must include at least one performance measurement", () => {
  const body = "### Performance mode\ncombined\n\n### Domain\nexample.gov\n\n### Accessibility engines\naxe\n\n"
    + "### Limits\nMax Lighthouse audits: 0\nMax Sitespeed pages: 0";
  assertInvalid(parse(body, "PERF: example.gov"), "must include at least one performance measurement");
});

test("MCP sources are refused with an actionable error", () => {
  const body = "### Domain\nexample.gov\n\n### Evidence sources\nmcp: https://tools.example.gov/mcp";
  const result = assertInvalid(parse(body, "PERF: example.gov"), "MCP sources are not supported");
  assert.ok(result.errors.some((message) => message.includes("Supported evidence sources")));
  assert.ok(result.errors.some((message) => message.includes("vital-core")));
});

test("unknown evidence source types are refused", () => {
  const body = "### Domain\nexample.gov\n\n### Evidence sources\nscreaming-frog: https://reports.example.gov/crawl.json";
  assertInvalid(parse(body, "PERF: example.gov"), "Unsupported evidence source type");
});

test("evidence sources must be https or a bounded Open Scans report path", () => {
  assertInvalid(
    parse("### Domain\nexample.gov\n\n### Evidence sources\nvital-core: http://vital.example.gov/snapshot.json", "PERF: example.gov"),
    "requires an https:// location"
  );
  assertInvalid(
    parse("### Domain\nexample.gov\n\n### Evidence sources\nvital-core: file:///etc/passwd", "PERF: example.gov"),
    "requires an https:// location"
  );
  assertInvalid(
    parse("### Domain\nexample.gov\n\n### Evidence sources\nopen-scans-report: reports/issues/../secret.json", "PERF: example.gov"),
    "must not contain '..'"
  );
});

test("evidence locations are bounded in length", () => {
  const longLocation = `https://vital.example.gov/${"a".repeat(2100)}.json`;
  assertInvalid(
    parse(`### Domain\nexample.gov\n\n### Evidence sources\nvital-core: ${longLocation}`, "PERF: example.gov"),
    "longer than 2048 characters"
  );
});

test("evidence source URLs cannot carry credentials", () => {
  assertInvalid(
    parse(
      "### Domain\nexample.gov\n\n### Evidence sources\nvital-core: https://user:pass@vital.example.gov/snapshot.json",
      "PERF: example.gov"
    ),
    "must not contain a username or password"
  );
  assertInvalid(
    parse(
      "### Domain\nexample.gov\n\n### Evidence sources\nvital-core: https://vital.example.gov/snapshot.json?token=abc123",
      "PERF: example.gov"
    ),
    "credential-like query parameter 'token'"
  );
});

test("Open Scans report repository paths are accepted", () => {
  const body = "### Performance mode\nreuse\n\n### Domain\nexample.gov\n\n"
    + "### Evidence sources\nopen-scans-report: reports/issues/issue-42/2026-11-01T00-00-00-000Z/report.json";
  const value = assertValid(parse(body, "PERF: example.gov"));
  assert.deepEqual(value.evidenceSources, [{
    type: "open-scans-report",
    location: "reports/issues/issue-42/2026-11-01T00-00-00-000Z/report.json",
    locationKind: "repo-path"
  }]);
});

test("page URLs use the existing private-network and document policy", () => {
  const localhost = parse("### URLs\nhttps://localhost/admin", "PERF: example.gov");
  assert.equal(localhost.ok, false);
  assert.ok(localhost.errors.some((message) => message.includes("localhost targets are blocked")));

  const pdf = parse("### URLs\nhttps://example.gov/report.pdf", "PERF: example.gov");
  assert.equal(pdf.ok, false);
  assert.ok(pdf.errors.some((message) => message.includes("cannot be performance-inspected")));
});

test("page URLs must stay on the requested site", () => {
  const body = "### Domain\nexample.gov\n\n### URLs\nhttps://other.example.org/";
  assertInvalid(parse(body, "PERF: example.gov"), "is outside the requested site");
});

test("page URLs cannot carry credentials or credential-like query parameters", () => {
  assertInvalid(
    parse("### Domain\nexample.gov\n\n### URLs\nhttps://user:pass@example.gov/", "PERF: example.gov"),
    "must not contain a username or password"
  );
  assertInvalid(
    parse("### Domain\nexample.gov\n\n### URLs\nhttps://example.gov/?session=abc123", "PERF: example.gov"),
    "credential-like query parameter 'session'"
  );
});

test("priority URLs are held to the same site and safety rules", () => {
  const crossSite = "### Domain\nexample.gov\n\n### Priority URLs\nhttps://other.example.org/apply";
  assertInvalid(parse(crossSite, "PERF: example.gov"), "Priority URLs line 1");
});

test("subdomains and www variants of the requested site are allowed", () => {
  assert.equal(isSameSiteHost("www.example.gov", "example.gov"), true);
  assert.equal(isSameSiteHost("apply.example.gov", "example.gov"), true);
  assert.equal(isSameSiteHost("example.gov.evil.test", "example.gov"), false);

  const body = "### Domain\nexample.gov\n\n### URLs\nhttps://apply.example.gov/\nhttps://www.example.gov/about";
  const value = assertValid(parse(body, "PERF: example.gov"));
  assert.deepEqual(value.site.urls, ["https://apply.example.gov/", "https://www.example.gov/about"]);
});

test("a domain with a path becomes an exact URL with a warning", () => {
  const result = parse("### Domain\nexample.gov/apply", "PERF: example.gov");
  const value = assertValid(result);
  assert.equal(value.site.origin, "https://example.gov");
  assert.deepEqual(value.site.urls, ["https://example.gov/apply"]);
  assert.ok(result.warnings.some((warning) => warning.includes("treated as an exact URL")));
});

test("a site origin can be derived from the first URL", () => {
  const result = parse("### URLs\nhttps://example.gov/services", "PERF: example.gov");
  const value = assertValid(result);
  assert.equal(value.site.origin, "https://example.gov");
  assert.equal(value.site.host, "example.gov");
  assert.ok(result.warnings.some((warning) => warning.includes("derived from the first URL")));
});

test("invalid viewports are rejected with a bounded range", () => {
  const body = "### Domain\nexample.gov\n\n### Viewport\n999x99999";
  assertInvalid(parse(body, "PERF: example.gov"), "between 200 and 10000");
});

test("Firefox requests cannot silently include Chromium-only Lighthouse audits", () => {
  const body = "### Performance mode\nlight\n\n### Domain\nexample.gov\n\n### Browser\nfirefox";
  assertInvalid(parse(body, "PERF: example.gov"), "Lighthouse is Chromium-only");
});

test("WebKit and random browsers are rejected for reproducible performance evidence", () => {
  assertInvalid(
    parse("### Domain\nexample.gov\n\n### Browser\nwebkit", "PERF: example.gov"),
    "WebKit is not a supported performance-measurement browser"
  );
  assertInvalid(
    parse("### Domain\nexample.gov\n\n### Browser\nrandom browser", "PERF: example.gov"),
    "random browser"
  );
});

test("page limits are bounded", () => {
  assertInvalid(
    parse("### Domain\nexample.gov\n\n### Limits\nMax pages to inspect: 0", "PERF: example.gov"),
    "at least 1"
  );
  assertInvalid(
    parse("### Domain\nexample.gov\n\n### Limits\nMax pages to inspect: 501", "PERF: example.gov"),
    "between 0 and 500"
  );
});

test("reuse mode cannot disable reuse of the supplied source reports", () => {
  const body = "### Performance mode\nreuse\n\n### Domain\nexample.gov\n\n### Reuse source reports\nno";
  assertInvalid(parse(body, "PERF: example.gov"), "requires reuseSourceReports to be true");
});

test("more than ten evidence sources are refused", () => {
  const sources = Array.from({ length: 11 }, (_, index) => `vital-core: https://vital.example.gov/${index}.json`).join("\n");
  const body = `### Domain\nexample.gov\n\n### Evidence sources\n${sources}`;
  assertInvalid(parse(body, "PERF: example.gov"), "at most 10 sources");
});

test("more than 500 site URLs are refused", () => {
  const urls = Array.from({ length: 501 }, (_, index) => `https://example.gov/page-${index}`).join("\n");
  const body = `### Domain\nexample.gov\n\n### URLs\n${urls}`;
  const result = parse(body, "PERF: example.gov");
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((message) => message.includes("at most 500 URLs")));
});

test("unknown body sections do not become request fields", () => {
  const body = "### Domain\nexample.gov\n\n### MCP URL\nhttps://tools.example.gov/mcp\n\n### Shell command\nrm -rf /";
  const result = parse(body, "PERF: example.gov");
  const value = assertValid(result);
  assert.deepEqual(
    Object.keys(value).sort(),
    [...Object.keys(schema.properties)].filter((key) => key !== "accessibility").sort()
  );
  assert.ok(!Object.hasOwn(value, "mcpUrl"));
  assert.ok(!Object.hasOwn(value, "commands"));
});

test("combined mode reports reject and never create accessibility fields outside combined mode", () => {
  const value = assertValid(parse("### Domain\nexample.gov", "PERF: example.gov"));
  assert.equal(Object.hasOwn(value, "accessibility"), false);
  assert.equal(Object.hasOwn(value, "engines"), false);
  assert.equal(value.mode, "light");
});

test("validatePerformanceRequest rejects unknown fields and malformed modes", () => {
  const value = assertValid(parsePerformanceIssue(fixture("performance-issue-reuse.json")));
  const withUnknown = validatePerformanceRequest({ ...value, commands: ["curl", "example.gov"] });
  assert.equal(withUnknown.ok, false);
  assert.ok(withUnknown.errors.some((message) => message.includes("Unexpected field: commands")));

  const badMode = validatePerformanceRequest({ ...value, mode: "run-everything" });
  assert.equal(badMode.ok, false);
  assert.ok(badMode.errors.some((message) => message.includes("mode must be one of")));
});

test("validatePerformanceRequest rejects nested unknown fields", () => {
  const value = assertValid(parsePerformanceIssue(fixture("performance-issue-reuse.json")));
  const nested = validatePerformanceRequest({
    ...value,
    site: { ...value.site, shell: "rm -rf /" },
    limits: { ...value.limits, mcpUrl: "https://tools.example.gov/mcp" },
    measurement: { ...value.measurement, executable: "calc.exe" }
  });
  assert.equal(nested.ok, false);
  assert.ok(nested.errors.some((message) => message.includes("site has unexpected field: shell")));
  assert.ok(nested.errors.some((message) => message.includes("limits has unexpected field: mcpUrl")));
  assert.ok(nested.errors.some((message) => message.includes("measurement has unexpected field: executable")));
});

test("validatePerformanceRequest rejects unknown provenance default fields", () => {
  const value = assertValid(parsePerformanceIssue(fixture("performance-issue-reuse.json")));
  const result = validatePerformanceRequest({
    ...value,
    provenance: { ...value.provenance, defaultedFields: ["browser", "arbitraryCommand"] }
  });
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((message) => message.includes("defaultedFields contains unknown field 'arbitraryCommand'")));
});

test("the published schema agrees with the parser constants", () => {
  assert.equal(schema.$schema, "https://json-schema.org/draft/2020-12/schema");
  assert.equal(schema.properties.schemaVersion.const, PERFORMANCE_REQUEST_SCHEMA_VERSION);
  assert.deepEqual(schema.$defs.mode.enum, [...PERFORMANCE_MODES]);
  assert.deepEqual(schema.$defs.evidenceSource.properties.type.enum, [...EVIDENCE_SOURCE_TYPES]);
  assert.deepEqual(
    schema.properties.measurement.properties.browser.enum,
    ["chromium", "firefox"]
  );
  assert.deepEqual(
    schema.properties.limits.required,
    Object.keys(PERFORMANCE_LIMIT_DEFAULTS.reuse)
  );
  assert.deepEqual(schema.properties.measurement.properties.profile.enum, ["mobile", "desktop"]);
  assert.deepEqual(
    schema.properties.consent.properties.state.enum,
    [...CONSENT_STATES]
  );
  assert.equal(schema.properties.accessibility.additionalProperties, false);
  assert.deepEqual(schema.properties.accessibility.properties.engines.items.enum, [...ACCESSIBILITY_ENGINES]);
  assert.equal(schema.additionalProperties, false);
  assert.ok(schema.allOf.length >= 5);
});

test("missing issue payload fails clearly", () => {
  const result = parsePerformanceIssue({});
  assert.equal(result.ok, false);
  assert.deepEqual(result.errors, ["Missing issue payload."]);
});

test("a request needs a public domain or at least one exact URL", () => {
  assertInvalid(parse("### Performance mode\nreuse", "PERF: empty"), "needs a public Domain");
});

test("summary output reports budgets and whether a browser is required", () => {
  const reuse = parsePerformanceIssue(fixture("performance-issue-reuse.json"));
  const reuseSummary = formatPerformanceParseSummary(reuse);
  assert.match(reuseSummary, /Status:\*\* validated/);
  assert.match(reuseSummary, /reuse/);
  assert.match(reuseSummary, /New browser measurements required:\*\* no/);

  const rejected = parse("### Domain\nlocalhost", "PERF: bad");
  const rejectedSummary = formatPerformanceParseSummary(rejected);
  assert.match(rejectedSummary, /Status:\*\* rejected/);
  assert.match(rejectedSummary, /No scan was started/);
});

test("the parser module contains no browser automation or process execution", () => {
  const source = readFileSync(new URL("../../scanner/parse-performance-issue.mjs", import.meta.url), "utf8");
  assert.equal(/playwright|puppeteer|child_process|execSync|spawnSync/.test(source), false);
});
