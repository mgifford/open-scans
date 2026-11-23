import test from "node:test";
import assert from "node:assert/strict";

import {
  buildUpdatedOverlays,
  diffVerifiedMappings,
  extractReportMappings,
  extractReportedVersion,
  fetchReport,
  formatDiff,
  loadReportData
} from "../../scanner/build-act-mappings-from-reports.mjs";

const ALFA_REPORT = `<!doctype html>
<html>
  <body>
    <aside class="box">
      <header class="box-h">Implementation Summary</header>
      <div class="box-i">
        <p><a href="https://alfa.siteimprove.com/">Alfa (fully automated)</a>
          version 0.118.0 is an Automated tool.</p>
      </div>
    </aside>
    <h2>Implementation Details</h2>
    <h3 id="breakdown-674b10">Role attribute has valid value</h3>
    <p>
      This rule is implemented by Alfa (fully automated) using the
      <code>sia-r110</code> procedure.
    </p>
  </body>
</html>`;

// The real pages wrap headings and code contents across lines. The extractor
// must not depend on a single-line regex over raw markup.
const MULTILINE_ACCESSLINT_REPORT = `<html>
  <body>
    <h3
      id="breakdown-m6b1q3"
    >Menuitem has non-empty accessible name</h3>
    <p>
      This rule is implemented by
      @accesslint/core
      using the
      <code>
        labels-and-names/aria-command-name
      </code>
      procedure.
    </p>
  </body>
</html>`;

const EQUAL_ACCESS_SUFFIX_REPORT = `<html>
  <body>
    <h3 id="breakdown-674b10">Role attribute has valid value</h3>
    <p>
      This rule is implemented by Equal Access Accessibility Checker using the
      <code>aria_role_allowed:Pass_0,Fail_2,Potential_1</code> procedure.
    </p>
  </body>
</html>`;

const ACCESSLINT_MULTI_PROCEDURE_REPORT = `<html>
  <body>
    <h3 id="breakdown-23a2a8">Image has non-empty accessible name</h3>
    <p>
      This rule is implemented by @accesslint/core using the
      <code>text-alternatives/img-alt</code>, and
      <code>text-alternatives/role-img-alt</code> procedures.
    </p>
  </body>
</html>`;

const NO_MATCH_REPORT = `<html>
  <body>
    <h3 id="breakdown-674b10">Role attribute has valid value</h3>
    <p>This paragraph says nothing about an implementation.</p>
    <h3 id="not-a-breakdown">Another heading</h3>
    <p>This rule is implemented by an engine using the ghost procedure.</p>
  </body>
</html>`;

const ALFA_URL = "https://www.w3.org/WAI/standards-guidelines/act/implementations/alfa/";
const ACCESSLINT_URL =
  "https://www.w3.org/WAI/standards-guidelines/act/implementations/accesslint-core/";

function report(engine, mappings, reportedEngineVersion = null) {
  return { engine, mappings, reportedEngineVersion };
}

test("extracts a normal implementation row", () => {
  assert.deepEqual(extractReportMappings(ALFA_REPORT), [
    { actRuleId: "674b10", ruleId: "sia-r110" }
  ]);
});

test("reads the reported engine version from the implementation summary", () => {
  assert.equal(extractReportedVersion(ALFA_REPORT), "0.118.0");
  assert.equal(extractReportedVersion("<html><body>no summary</body></html>"), null);
});

test("extracts a row whose markup and code contents span lines", () => {
  assert.deepEqual(extractReportMappings(MULTILINE_ACCESSLINT_REPORT), [
    { actRuleId: "m6b1q3", ruleId: "labels-and-names/aria-command-name" }
  ]);
});

test("strips the Equal Access test-list suffix from the rule id", () => {
  assert.deepEqual(
    extractReportMappings(EQUAL_ACCESS_SUFFIX_REPORT, {
      engine: "equalAccess",
      stripTestSuffix: true
    }),
    [{ actRuleId: "674b10", ruleId: "aria_role_allowed" }]
  );
});

test("records the first procedure when a report names several", () => {
  assert.deepEqual(extractReportMappings(ACCESSLINT_MULTI_PROCEDURE_REPORT), [
    { actRuleId: "23a2a8", ruleId: "text-alternatives/img-alt" }
  ]);
});

test("returns no mappings for a page without implementation rows", () => {
  assert.deepEqual(extractReportMappings(NO_MATCH_REPORT), []);
});

test("only adds Alfa procedures missing from the generated mapping file", () => {
  const overlays = {
    schemaVersion: "act-registry-overlays/1",
    verifiedMappings: {
      "674b10": {
        alfa: [
          {
            ruleId: "sia-r110",
            source: ALFA_URL,
            verifiedAt: "2026-11-20",
            engineVersion: "0.84.2",
            reportedEngineVersion: "0.118.0",
            versionAligned: false,
            notes: "kept"
          }
        ]
      }
    }
  };
  const mapping = {
    byActRuleId: { "674b10": { alfa: ["sia-r21"] } },
    engineVersions: { alfa: { scannedVersion: "0.84.2" } }
  };
  const reports = {
    alfa: report("alfa", [
      { actRuleId: "674b10", ruleId: "sia-r21" },
      { actRuleId: "674b10", ruleId: "sia-r110" }
    ], "0.118.0"),
    accesslint: report("accesslint", []),
    equalAccess: report("equalAccess", [])
  };

  const updated = buildUpdatedOverlays({
    overlays,
    mapping,
    reports,
    verifiedAt: "2026-11-23"
  });

  assert.deepEqual(updated.verifiedMappings["674b10"].alfa, [
    {
      ruleId: "sia-r110",
      source: ALFA_URL,
      verifiedAt: "2026-11-20",
      engineVersion: "0.84.2",
      reportedEngineVersion: "0.118.0",
      versionAligned: false,
      notes: "kept"
    }
  ]);
});

test("adds new mappings with provenance, keeps Sa11y, and sorts keys", () => {
  const overlays = {
    schemaVersion: "act-registry-overlays/1",
    rules: { "97a4e1": { title: "Button has accessible name" } },
    verifiedMappings: {
      "97a4e1": {
        sa11y: [
          {
            ruleId: "BTN_EMPTY",
            source: "https://github.com/ryersondmp/sa11y/blob/master/conformance/mapping/act-rule-mapping.js",
            verifiedAt: "2026-11-20",
            engineVersion: "5.1.0",
            reportedEngineVersion: null,
            versionAligned: false,
            notes: "upstream"
          }
        ],
        alfa: [
          {
            ruleId: "sia-r12",
            source: ALFA_URL,
            verifiedAt: "2026-11-20",
            engineVersion: "0.84.2",
            reportedEngineVersion: "0.111.0",
            versionAligned: false,
            notes: "old report"
          }
        ]
      }
    }
  };
  const mapping = {
    byActRuleId: {},
    engineVersions: {
      alfa: { scannedVersion: "0.84.2" },
      accesslint: { scannedVersion: "0.17.0" },
      equalAccess: { scannedVersion: "4.0.30" }
    }
  };
  const reports = {
    alfa: report("alfa", [{ actRuleId: "97a4e1", ruleId: "sia-r12" }], "0.118.0"),
    accesslint: report("accesslint", [{ actRuleId: "97a4e1", ruleId: "labels-and-names/button-name" }], "0.21.0"),
    equalAccess: report("equalAccess", [{ actRuleId: "97a4e1", ruleId: "input_label_exists" }], "3.1.42-rc.0")
  };

  const updated = buildUpdatedOverlays({
    overlays,
    mapping,
    reports,
    verifiedAt: "2026-11-23"
  });

  assert.deepEqual(Object.keys(updated.verifiedMappings), ["97a4e1"]);
  assert.deepEqual(Object.keys(updated.verifiedMappings["97a4e1"]), [
    "accesslint",
    "alfa",
    "equalAccess",
    "sa11y"
  ]);

  const alfa = updated.verifiedMappings["97a4e1"].alfa[0];
  assert.equal(alfa.verifiedAt, "2026-11-20", "existing verification date is preserved");
  assert.equal(alfa.reportedEngineVersion, "0.111.0", "existing reported version is preserved");
  assert.equal(alfa.notes, "old report");

  const accesslint = updated.verifiedMappings["97a4e1"].accesslint[0];
  assert.equal(accesslint.source, ACCESSLINT_URL);
  assert.equal(accesslint.verifiedAt, "2026-11-23");
  assert.equal(accesslint.engineVersion, "0.17.0");
  assert.equal(accesslint.reportedEngineVersion, "0.21.0");
  assert.equal(accesslint.versionAligned, false);

  assert.deepEqual(updated.verifiedMappings["97a4e1"].sa11y, overlays.verifiedMappings["97a4e1"].sa11y);
  assert.deepEqual(updated.rules, overlays.rules);
});

test("removing a mapping from a report removes it from the overlay and reports the diff", () => {
  const existing = {
    ruleId: "sia-r94",
    source: ALFA_URL,
    verifiedAt: "2026-11-20",
    engineVersion: "0.84.2",
    reportedEngineVersion: "0.118.0",
    versionAligned: false,
    notes: "old"
  };
  const overlays = { verifiedMappings: { m6b1q3: { alfa: [existing] } } };
  const mapping = { byActRuleId: {}, engineVersions: { alfa: { scannedVersion: "0.84.2" } } };
  const reports = {
    alfa: report("alfa", [], "0.118.0"),
    accesslint: report("accesslint", []),
    equalAccess: report("equalAccess", [])
  };

  const updated = buildUpdatedOverlays({ overlays, mapping, reports, verifiedAt: "2026-11-23" });
  const diff = diffVerifiedMappings(overlays.verifiedMappings, updated.verifiedMappings);

  assert.deepEqual(updated.verifiedMappings, {});
  assert.deepEqual(diff.alfa.removed, ["m6b1q3|sia-r94"]);
  assert.equal(diff.alfa.added.length, 0);
  assert.match(formatDiff(diff), /alfa: 0 added, 1 removed, 0 unchanged/);
  assert.match(formatDiff(diff), /- m6b1q3 -> sia-r94/);
});

test("the same reports produce byte-identical overlays", () => {
  const overlays = { schemaVersion: "act-registry-overlays/1", verifiedMappings: {} };
  const mapping = { byActRuleId: {}, engineVersions: {} };
  const reports = {
    alfa: report("alfa", [{ actRuleId: "674b10", ruleId: "sia-r110" }], "0.118.0"),
    accesslint: report("accesslint", [{ actRuleId: "97a4e1", ruleId: "labels-and-names/button-name" }], "0.21.0"),
    equalAccess: report("equalAccess", [{ actRuleId: "674b10", ruleId: "aria_role_allowed" }], "3.1.42-rc.0")
  };

  const first = buildUpdatedOverlays({ overlays, mapping, reports, verifiedAt: "2026-11-23" });
  const second = buildUpdatedOverlays({ overlays, mapping, reports, verifiedAt: "2026-11-23" });

  assert.equal(JSON.stringify(first), JSON.stringify(second));
});

test("a failed report fetch names the URL and aborts the refresh", async () => {
  const fetchImpl = async (url) => {
    if (url === ACCESSLINT_URL) {
      return { ok: false, status: 503, statusText: "Service Unavailable" };
    }
    return { ok: true, status: 200, text: async () => ALFA_REPORT };
  };

  await assert.rejects(
    () => loadReportData({ fetchImpl, onWarning: () => {} }),
    /could not fetch https:\/\/www\.w3\.org\/.*accesslint-core\/: HTTP 503 Service Unavailable/
  );
});

test("an empty report aborts the refresh instead of clearing mappings", async () => {
  const fetchImpl = async () => ({ ok: true, status: 200, text: async () => NO_MATCH_REPORT });

  await assert.rejects(
    () => loadReportData({ fetchImpl, onWarning: () => {} }),
    /no ACT mappings were found in .*alfa/
  );
});

test("fetchReport rejects non-OK responses with a clear message", async () => {
  const fetchImpl = async () => ({ ok: false, status: 404, statusText: "Not Found" });

  await assert.rejects(
    () => fetchReport(ALFA_URL, { fetchImpl }),
    /could not fetch .*alfa\/: HTTP 404 Not Found/
  );
});
