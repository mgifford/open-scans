import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import {
  ARTIFACT_FILE,
  COLLECTOR_LIMITATIONS,
  COLLECTOR_SCHEMA,
  DEFAULT_CAPS,
  SIGNAL_CATALOGUE,
  buildCollectorArtifact,
  buildItemId,
  buildPageInventory,
  detectItemSignals,
  normaliseText,
  resolveAccessibleName,
  resolveCaps,
  trimPageToTotal,
  truncate,
  validateCollectorArtifact
} from "../../scanner/assessment/collectors/model.mjs";
import {
  maybeRunAssistedCollectors,
  resolveScanArgs
} from "../../scanner/assessment/collectors/capture.mjs";

const REPO_ROOT = fileURLToPath(new URL("../..", import.meta.url));

const REPORT_ASSOCIATION = {
  reportId: "open-scans/issue-42/2026-11-26T12:00:00.000Z",
  issueNumber: 42,
  scannedAt: "2026-11-26T12:00:00.000Z"
};

const CATALOGUE = {
  identity: {
    catalogueVersion: "wcag-spine-2.2-2026-11-26",
    contentSha256: "0fa9693e"
  }
};

function attributes(overrides = {}) {
  return {
    role: null,
    ariaHidden: false,
    ariaLabel: null,
    displayNone: false,
    visibilityHidden: false,
    tabIndex: null,
    ...overrides
  };
}

function nameNode(overrides = {}) {
  return {
    ariaLabel: null,
    title: null,
    alt: null,
    text: "",
    labelledBy: [],
    ...overrides
  };
}

function rawPage(overrides = {}) {
  return {
    url: "https://example.com/",
    finalUrl: "https://example.com/",
    title: "Example",
    capturedAt: "2026-11-26T12:00:00.000Z",
    iframesSkipped: 0,
    shadowRootsSkipped: 0,
    nameGraph: [
      { id: "n0", ...nameNode({ text: "Main heading" }) },
      { id: "n1", ...nameNode({ alt: "Rate card" }) },
      { id: "n2", ...nameNode({ text: "Read more" }) }
    ],
    headings: [
      {
        ordinal: 0,
        locator: "html > body > h1",
        htmlSnippet: "<h1>Main heading</h1>",
        level: 1,
        text: "Main heading",
        nameNodeId: "n0",
        attributes: attributes()
      }
    ],
    images: [
      {
        ordinal: 0,
        locator: "html > body > img",
        htmlSnippet: '<img src="/rates.png" alt="Rate card">',
        src: "/rates.png",
        alt: "Rate card",
        renderedWidth: 640,
        renderedHeight: 480,
        captionText: "",
        text: "",
        nameNodeId: "n1",
        attributes: attributes()
      }
    ],
    links: [
      {
        ordinal: 0,
        locator: "html > body > a",
        htmlSnippet: '<a href="/docs">Read more</a>',
        href: "https://example.com/docs",
        target: null,
        rel: null,
        imageOnly: false,
        nativeAlt: null,
        text: "Read more",
        nameNodeId: "n2",
        attributes: attributes()
      }
    ],
    ...overrides
  };
}

function artifactFromPages(pages, captureOverrides = {}) {
  return buildCollectorArtifact({
    reportAssociation: REPORT_ASSOCIATION,
    catalogue: CATALOGUE,
    capture: {
      status: "complete",
      browser: "chromium",
      browserVersion: "145.0",
      viewport: { width: 1280, height: 800 },
      colorScheme: "light",
      navigationCount: pages.filter((page) => page.status !== "not-captured").length,
      pagesRequested: pages.length,
      pagesCaptured: pages.filter((page) => page.status === "captured").length,
      pagesFailed: pages.filter((page) => page.status === "failed").length,
      caps: DEFAULT_CAPS,
      reason: null,
      ...captureOverrides
    },
    pages,
    generatedAt: "2026-11-26T12:00:00.000Z"
  });
}

test("accessible name precedence follows the documented subset", () => {
  const graph = {
    n0: { id: "n0", ...nameNode({ ariaLabel: "Label", text: "Visible text" }) },
    n1: { id: "n1", ...nameNode({ text: "Referenced text" }) }
  };
  assert.equal(
    resolveAccessibleName({ graph: new Map(Object.entries({ ...graph, n0: { ...graph.n0, labelledBy: ["n1"] } })), nodeId: "n0", kind: "link" }).value,
    "Referenced text"
  );
  assert.equal(resolveAccessibleName({ graph: new Map(Object.entries(graph)), nodeId: "n0", kind: "link" }).source, "aria-label");
  assert.equal(
    resolveAccessibleName({ graph: new Map(Object.entries({ n2: { id: "n2", ...nameNode({ alt: "Alt text" }) } })), nodeId: "n2", kind: "image" }).source,
    "img-alt"
  );
  assert.equal(
    resolveAccessibleName({ graph: new Map(Object.entries({ n3: { id: "n3", ...nameNode({ nativeAlt: "Icon alt" }) } })), nodeId: "n3", kind: "link" }).source,
    "img-alt-descendant"
  );
  const none = resolveAccessibleName({ graph: new Map(Object.entries({ n4: { id: "n4", ...nameNode() } })), nodeId: "n4", kind: "heading" });
  assert.equal(none.empty, true);
  assert.equal(none.source, "none");
});

test("accessible name resolution is cycle-safe and depth-limited", () => {
  const cyclic = new Map([
    ["a", { id: "a", ...nameNode({ labelledBy: ["b"] }) }],
    ["b", { id: "b", ...nameNode({ labelledBy: ["a"] }) }]
  ]);
  const resolved = resolveAccessibleName({ graph: cyclic, nodeId: "a", kind: "heading" }, { maxDepth: 5 });
  assert.equal(resolved.empty, true, "a cycle must not invent a name");
  assert.ok(resolved.branches.includes("cycle-skipped"));

  const chain = new Map([
    ["a", { id: "a", ...nameNode({ labelledBy: ["b"] }) }],
    ["b", { id: "b", ...nameNode({ labelledBy: ["c"] }) }],
    ["c", { id: "c", ...nameNode({ text: "Deep" }) }]
  ]);
  const limited = resolveAccessibleName({ graph: chain, nodeId: "a", kind: "heading" }, { maxDepth: 0 });
  assert.equal(limited.empty, true);
  assert.ok(limited.branches.includes("depth-limit"), "the depth cap must be visible in the branches");
});

test("text handling is normalised, control-stripped and truncated on code points", () => {
  assert.equal(normaliseText("  a\n\t b\u0007  "), "a b");
  assert.equal(truncate("😀😀😀", 2), "😀😀");
  assert.equal(truncate("abc", 10), "abc");
  assert.equal(truncate("abc", 0), "");
});

test("each signal fires on its own case and not on the well-formed control", () => {
  const imageBase = {
    kind: "image",
    text: "",
    accessibleName: { value: "Rate card", empty: false },
    attributes: attributes(),
    alt: "Rate card",
    captionText: ""
  };

  assert.deepEqual(detectItemSignals(imageBase), []);

  const cases = [
    {
      label: "image-alt-missing",
      input: { ...imageBase, alt: null, accessibleName: { value: "", empty: true } },
      expected: "image-alt-missing"
    },
    {
      label: "image-alt-missing suppressed by presentation role",
      input: { ...imageBase, alt: null, attributes: attributes({ role: "presentation" }) },
      expected: null
    },
    {
      label: "image-alt-missing suppressed by aria-hidden",
      input: { ...imageBase, alt: null, attributes: attributes({ ariaHidden: true }) },
      expected: null
    },
    { label: "image-alt-empty", input: { ...imageBase, alt: "" }, expected: "image-alt-empty" },
    { label: "image-alt-filename-like", input: { ...imageBase, alt: "rates.png" }, expected: "image-alt-filename-like" },
    {
      label: "image-alt-repeats-caption",
      input: { ...imageBase, alt: "Rate card", captionText: "rate card" },
      expected: "image-alt-repeats-caption"
    }
  ];

  for (const testCase of cases) {
    const ids = detectItemSignals(testCase.input).map((signal) => signal.id);
    if (testCase.expected === null) {
      assert.ok(!ids.includes("image-alt-missing"), testCase.label);
    } else {
      assert.ok(ids.includes(testCase.expected), testCase.label);
    }
  }

  const linkBase = {
    kind: "link",
    text: "Read more",
    accessibleName: { value: "Read more", empty: false },
    attributes: attributes(),
    imageOnly: false,
    target: null
  };
  assert.deepEqual(
    detectItemSignals(linkBase).map((signal) => signal.id),
    ["link-text-generic"]
  );
  assert.ok(detectItemSignals({ ...linkBase, target: "_blank" }).some((signal) => signal.id === "link-new-window-unannounced"));
  assert.ok(
    !detectItemSignals({ ...linkBase, text: "Docs (opens in a new tab)", target: "_blank" }).some(
      (signal) => signal.id === "link-new-window-unannounced"
    ),
    "announced new-window wording suppresses the signal"
  );
  assert.ok(
    detectItemSignals({ ...linkBase, text: "", accessibleName: { value: "", empty: true } }).some(
      (signal) => signal.id === "link-name-empty"
    )
  );
  assert.ok(detectItemSignals({ ...linkBase, imageOnly: true }).some((signal) => signal.id === "link-image-only"));

  assert.deepEqual(
    detectItemSignals({ kind: "heading", text: "", accessibleName: { value: "", empty: true }, attributes: attributes() }),
    [{ id: "heading-empty", detail: "heading has no text and no computed name" }]
  );

  assert.ok(
    detectItemSignals({
      kind: "heading",
      text: "Visible",
      accessibleName: { value: "Different name", empty: false },
      attributes: attributes({ ariaLabel: "Different name" })
    }).some((signal) => signal.id === "aria-label-overrides-visible-text")
  );
  assert.ok(
    !detectItemSignals({
      kind: "heading",
      text: "Visible",
      accessibleName: { value: "Visible heading", empty: false },
      attributes: attributes({ ariaLabel: "Visible heading" })
    }).some((signal) => signal.id === "aria-label-overrides-visible-text")
  );
});

test("page inventory assigns outline structure and a heading level skip", () => {
  const page = rawPage({
    nameGraph: [
      { id: "n0", ...nameNode({ text: "Title" }) },
      { id: "n1", ...nameNode({ text: "Section" }) },
      { id: "n2", ...nameNode({ text: "Jumped" }) }
    ],
    headings: [
      { ordinal: 0, locator: "h1", htmlSnippet: "<h1>Title</h1>", level: 1, text: "Title", nameNodeId: "n0", attributes: attributes() },
      { ordinal: 1, locator: "h2", htmlSnippet: "<h2>Section</h2>", level: 2, text: "Section", nameNodeId: "n1", attributes: attributes() },
      { ordinal: 2, locator: "h4", htmlSnippet: "<h4>Jumped</h4>", level: 4, text: "Jumped", nameNodeId: "n2", attributes: attributes() }
    ]
  });
  const built = buildPageInventory(page, { reportId: REPORT_ASSOCIATION.reportId, caps: resolveCaps() });
  assert.equal(built.headings.length, 3);
  assert.equal(built.headings[1].heading.parentItemId, built.headings[0].itemId);
  assert.equal(built.headings[2].heading.parentItemId, built.headings[1].itemId);
  const skip = built.headings[2].signals.find((signal) => signal.id === "heading-level-skip");
  assert.ok(skip, "h2 followed by h4 must record the level skip");
  assert.equal(skip.detail, "h2 followed by h4");
  assert.ok(built.counts.signals >= 1);
});

test("item ids are stable for an unchanged page and change with the element", () => {
  const id = buildItemId({
    reportId: "open-scans/issue-1/a",
    pageUrl: "https://example.com/",
    kind: "image",
    ordinal: 0,
    locator: "html > body > img",
    name: "Rate card"
  });
  assert.match(id, /^col_[a-f0-9]{16}$/);
  assert.equal(
    id,
    buildItemId({
      reportId: "open-scans/issue-1/a",
      pageUrl: "https://example.com/",
      kind: "image",
      ordinal: 0,
      locator: "html > body > img",
      name: "Rate card"
    })
  );
  assert.notEqual(
    id,
    buildItemId({
      reportId: "open-scans/issue-1/a",
      pageUrl: "https://example.com/",
      kind: "image",
      ordinal: 0,
      locator: "html > body > figure > img",
      name: "Rate card"
    })
  );
});

test("per-kind caps truncate and every truncation is recorded", () => {
  const page = rawPage({
    nameGraph: [
      { id: "n0", ...nameNode({ text: "One" }) },
      { id: "n1", ...nameNode({ text: "Two" }) },
      { id: "n2", ...nameNode({ text: "Three" }) }
    ],
    headings: [0, 1, 2].map((index) => ({
      ordinal: index,
      locator: `h2:nth-of-type(${index + 1})`,
      htmlSnippet: `<h2>${index}</h2>`,
      level: 2,
      text: ["One", "Two", "Three"][index],
      nameNodeId: `n${index}`,
      attributes: attributes()
    }))
  });
  const built = buildPageInventory(page, {
    reportId: REPORT_ASSOCIATION.reportId,
    caps: resolveCaps({ maxItemsPerKindPerPage: 2 })
  });
  assert.equal(built.headings.length, 2);
  assert.equal(built.truncated.headings, true);
  assert.equal(built.truncated.images, false);
  assert.equal(built.counts.headings, 2);
  assert.equal(built.counts.signals >= 0, true);
});

test("the total item cap trims later kinds and marks them truncated", () => {
  const built = buildPageInventory(rawPage(), { reportId: REPORT_ASSOCIATION.reportId, caps: resolveCaps() });
  assert.equal(built.links.length, 1);
  const trimmed = trimPageToTotal(built, 2);
  assert.equal(trimmed.headings.length, 1);
  assert.equal(trimmed.images.length, 1);
  assert.equal(trimmed.links.length, 0);
  assert.equal(trimmed.truncated.links, true);
  assert.equal(trimmed.counts.links, 0);
  assert.equal(trimmed.counts.signals, [...trimmed.headings, ...trimmed.images, ...trimmed.links].reduce(
    (total, item) => total + item.signals.length,
    0
  ));
});

test("the artifact validates and carries every built-in signal definition", () => {
  const page = buildPageInventory(rawPage(), { reportId: REPORT_ASSOCIATION.reportId, caps: resolveCaps() });
  const artifact = artifactFromPages([page]);
  assert.equal(artifact.schema, COLLECTOR_SCHEMA);
  assert.equal(artifact.pages.length, 1);
  const ids = new Set(artifact.signalCatalogue.map((signal) => signal.id));
  for (const signal of SIGNAL_CATALOGUE) assert.ok(ids.has(signal.id), signal.id);
  for (const signal of artifact.signalCatalogue) {
    assert.ok(signal.doesNotMean, `${signal.id} must say what it does not mean`);
  }
  assert.equal(COLLECTOR_LIMITATIONS.length >= 4, true);
  assert.equal(validateCollectorArtifact(artifact), true);
});

test("the validator rejects verdict fields, unknown signals, bad ids and false completion", () => {
  const page = buildPageInventory(rawPage(), { reportId: REPORT_ASSOCIATION.reportId, caps: resolveCaps() });
  const artifact = artifactFromPages([page]);

  const withOutcome = structuredClone(artifact);
  withOutcome.pages[0].outcome = "failed";
  assert.throws(() => validateCollectorArtifact(withOutcome), /not allowed in a collector artifact/);

  const withUnknownSignal = structuredClone(artifact);
  withUnknownSignal.pages[0].headings[0].signals.push({ id: "made-up", detail: "x" });
  withUnknownSignal.pages[0].counts.signals += 1;
  assert.throws(() => validateCollectorArtifact(withUnknownSignal), /unknown id: made-up/);

  const withBadId = structuredClone(artifact);
  withBadId.pages[0].headings[0].itemId = "col_NOTHEX";
  assert.throws(() => validateCollectorArtifact(withBadId), /itemId must match/);

  const completeWithFailure = structuredClone(artifact);
  completeWithFailure.pages.push({
    ...structuredClone(artifact.pages[0]),
    status: "failed",
    error: "navigation failed",
    counts: { headings: 0, images: 0, links: 0, signals: 0 },
    headings: [],
    images: [],
    links: []
  });
  assert.throws(() => validateCollectorArtifact(completeWithFailure), /capture.status is complete/);

  const notRunWithPages = structuredClone(artifact);
  notRunWithPages.capture.status = "not-run";
  notRunWithPages.capture.reason = "browser missing";
  assert.throws(() => validateCollectorArtifact(notRunWithPages), /not-run but pages exist/);

  const completeWithMissingPages = structuredClone(artifact);
  completeWithMissingPages.capture.pagesRequested += 2;
  assert.throws(
    () => validateCollectorArtifact(completeWithMissingPages),
    /page count does not match pagesRequested/
  );
});

test("long text is truncated while the original length is kept", () => {
  const longText = "A".repeat(400);
  const page = rawPage({
    nameGraph: [{ id: "n0", ...nameNode({ text: longText }) }],
    links: [
      {
        ordinal: 0,
        locator: "html > body > a",
        htmlSnippet: `<a href="/x">${longText}</a>`,
        href: "https://example.com/x",
        target: null,
        rel: null,
        imageOnly: false,
        nativeAlt: null,
        text: longText,
        nameNodeId: "n0",
        attributes: attributes()
      }
    ],
    headings: [],
    images: []
  });
  const built = buildPageInventory(page, {
    reportId: REPORT_ASSOCIATION.reportId,
    caps: resolveCaps({ maxNameChars: 20, maxSnippetChars: 40 })
  });
  assert.equal(built.links[0].text.raw.length, 20);
  assert.equal(built.links[0].text.length, 400);
  assert.equal(built.links[0].accessibleName.value.length, 20);
  assert.ok(built.links[0].htmlSnippet.length <= 40);
});

test("resolveScanArgs keeps positional arguments and gates on flag or environment", () => {
  assert.deepEqual(resolveScanArgs(["event.json", "out"], {}), {
    issueEventPath: "event.json",
    outputDir: "out",
    assisted: false,
    assistedSource: null,
    warnings: []
  });
  assert.equal(resolveScanArgs(["event.json", "out", "--assisted"], {}).assisted, true);
  assert.equal(resolveScanArgs(["event.json", "out", "--assisted"], {}).assistedSource, "flag");
  assert.equal(resolveScanArgs(["event.json", "out"], { OPEN_SCANS_ASSISTED: "1" }).assisted, true);
  assert.equal(resolveScanArgs(["event.json", "out"], { OPEN_SCANS_ASSISTED: "true" }).assistedSource, "env");
  assert.equal(resolveScanArgs(["event.json", "out"], { OPEN_SCANS_ASSISTED: "0" }).assisted, false);
  assert.equal(resolveScanArgs(["event.json", "out"], { OPEN_SCANS_ASSISTED: "no" }).assisted, false);

  const withUnknown = resolveScanArgs(["--unknown", "event.json"], {});
  assert.equal(withUnknown.issueEventPath, "event.json");
  assert.equal(withUnknown.assisted, false);
  assert.deepEqual(withUnknown.warnings, ["Unknown flag ignored: --unknown"]);

  const defaults = resolveScanArgs([], {});
  assert.equal(defaults.issueEventPath, null);
  assert.equal(defaults.outputDir, ".scan-output");
});

test("an automated-only scan never calls the collector capture", async () => {
  const directory = mkdtempSync(join(tmpdir(), "open-scans-collectors-"));
  let called = 0;
  const stub = async () => {
    called += 1;
    return { status: "complete" };
  };
  try {
    const outcome = await maybeRunAssistedCollectors(
      { requested: false, outputDir: directory, pages: [] },
      { capture: stub }
    );
    assert.equal(outcome.skipped, true);
    assert.equal(outcome.status, "not-run");
    assert.equal(called, 0, "capture must not be called when collection is not requested");
    assert.deepEqual(readdirSync(directory), [], "the default scan must write no collector artifact");
    assert.ok(!readdirSync(directory).includes(ARTIFACT_FILE));
  } finally {
    rmSync(directory, { recursive: true, force: true });
  }
});

test("a requested run delegates to the injected capture", async () => {
  let received = null;
  const outcome = await maybeRunAssistedCollectors(
    { requested: true, pages: [{ url: "https://example.com/" }] },
    {
      capture: async (options) => {
        received = options;
        return { status: "complete", artifact: { capture: { status: "complete" } } };
      }
    }
  );
  assert.equal(outcome.status, "complete");
  assert.equal(received.requested, true);
});

test("run-scan reaches collectors only through the gated helper", () => {
  const source = readFileSync(join(REPO_ROOT, "scanner/run-scan.mjs"), "utf8");
  assert.ok(source.includes("maybeRunAssistedCollectors"), "run-scan must use the gated helper");
  assert.ok(!source.includes("runAssistedCapture("), "run-scan must not call the capture pass directly");
  assert.ok(source.includes("if (assistedRequested)"), "the collector step must stay behind the opt-in flag");
});
