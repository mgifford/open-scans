import test from "node:test";
import assert from "node:assert/strict";
import { parseSitemapXml, filterSameOriginUrls, decodeHtmlEntities, selectStableUrls, parseRobotsForSitemaps, crawlPageLinks, crawlSiteForUrls } from "../../scanner/crawl-urls.mjs";

// --- parseSitemapXml ---

test("parseSitemapXml extracts URLs from a regular sitemap", () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://example.com/</loc></url>
  <url><loc>https://example.com/about</loc></url>
  <url><loc>https://example.com/contact</loc></url>
</urlset>`;

  const { urls, isSitemapIndex } = parseSitemapXml(xml);
  assert.equal(isSitemapIndex, false);
  assert.deepEqual(urls, [
    "https://example.com/",
    "https://example.com/about",
    "https://example.com/contact"
  ]);
});

test("parseSitemapXml detects sitemap index", () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://example.com/sitemap-pages.xml</loc></sitemap>
  <sitemap><loc>https://example.com/sitemap-posts.xml</loc></sitemap>
</sitemapindex>`;

  const { urls, isSitemapIndex } = parseSitemapXml(xml);
  assert.equal(isSitemapIndex, true);
  assert.deepEqual(urls, [
    "https://example.com/sitemap-pages.xml",
    "https://example.com/sitemap-posts.xml"
  ]);
});

test("parseSitemapXml ignores non-http loc values", () => {
  const xml = `<urlset>
  <url><loc>https://example.com/page</loc></url>
  <url><loc>ftp://files.example.com/doc.pdf</loc></url>
  <url><loc>   </loc></url>
</urlset>`;

  const { urls } = parseSitemapXml(xml);
  assert.deepEqual(urls, ["https://example.com/page"]);
});

test("parseSitemapXml returns empty for malformed XML with no loc tags", () => {
  const { urls, isSitemapIndex } = parseSitemapXml("<html><body>Not a sitemap</body></html>");
  assert.deepEqual(urls, []);
  assert.equal(isSitemapIndex, false);
});

// --- filterSameOriginUrls ---

test("filterSameOriginUrls keeps only same-origin URLs", () => {
  const urls = [
    "https://example.com/",
    "https://example.com/about",
    "https://other.com/page",
    "https://sub.example.com/page",
    "http://example.com/oldpage"
  ];
  const result = filterSameOriginUrls(urls, "https://example.com/");
  assert.deepEqual(result, [
    "https://example.com/",
    "https://example.com/about"
  ]);
});

test("filterSameOriginUrls removes non-web documents", () => {
  const urls = [
    "https://example.com/",
    "https://example.com/file.pdf",
    "https://example.com/image.jpg",
    "https://example.com/page"
  ];
  const result = filterSameOriginUrls(urls, "https://example.com/");
  assert.deepEqual(result, [
    "https://example.com/",
    "https://example.com/page"
  ]);
});

test("filterSameOriginUrls returns empty for invalid base URL", () => {
  const result = filterSameOriginUrls(["https://example.com/"], "not-a-url");
  assert.deepEqual(result, []);
});

test("filterSameOriginUrls handles invalid URLs in the list", () => {
  const urls = [
    "https://example.com/page",
    "not-a-url",
    "https://example.com/about"
  ];
  const result = filterSameOriginUrls(urls, "https://example.com/");
  assert.deepEqual(result, [
    "https://example.com/page",
    "https://example.com/about"
  ]);
});

// --- selectStableUrls ---

test("selectStableUrls returns all items when count >= array length", () => {
  const items = ["a", "b", "c"];
  assert.deepEqual(selectStableUrls(items, 10), ["a", "b", "c"]);
});

test("selectStableUrls takes the first maxCount items in order", () => {
  const items = Array.from({ length: 100 }, (_, i) => `https://example.com/page-${i}`);
  const result = selectStableUrls(items, 20);
  assert.equal(result.length, 20);
  assert.deepEqual(result, items.slice(0, 20));
});

test("selectStableUrls is deterministic and does not modify the input", () => {
  const items = ["a", "b", "c", "d"];
  const first = selectStableUrls(items, 2);
  const second = selectStableUrls(items, 2);
  assert.deepEqual(first, second);
  assert.deepEqual(items, ["a", "b", "c", "d"]);
});

// --- decodeHtmlEntities ---

test("decodeHtmlEntities decodes entities that appear in URL attributes", () => {
  assert.equal(decodeHtmlEntities("/paca/?role=valid&amp;shadow=open"), "/paca/?role=valid&shadow=open");
  assert.equal(decodeHtmlEntities("?a=1&amp;b=2&#38;c=3"), "?a=1&b=2&c=3");
  assert.equal(decodeHtmlEntities("&#x26;x"), "&x");
  assert.equal(decodeHtmlEntities("plain"), "plain");
});

// --- parseRobotsForSitemaps ---

test("parseRobotsForSitemaps extracts sitemap URLs from robots.txt", () => {
  const robots = [
    "User-agent: *",
    "Disallow: /private/",
    "",
    "Sitemap: https://example.com/sitemap.xml",
    "Sitemap: https://example.com/sitemap-news.xml"
  ].join("\n");
  const result = parseRobotsForSitemaps(robots);
  assert.deepEqual(result, [
    "https://example.com/sitemap.xml",
    "https://example.com/sitemap-news.xml"
  ]);
});

test("parseRobotsForSitemaps is case-insensitive for the Sitemap: directive", () => {
  const robots = [
    "SITEMAP: https://example.com/sitemap.xml",
    "sitemap: https://example.com/other.xml"
  ].join("\n");
  const result = parseRobotsForSitemaps(robots);
  assert.deepEqual(result, [
    "https://example.com/sitemap.xml",
    "https://example.com/other.xml"
  ]);
});

test("parseRobotsForSitemaps returns empty array when no sitemaps are listed", () => {
  const robots = "User-agent: *\nDisallow: /admin/\n";
  const result = parseRobotsForSitemaps(robots);
  assert.deepEqual(result, []);
});

test("parseRobotsForSitemaps returns empty array for empty input", () => {
  assert.deepEqual(parseRobotsForSitemaps(""), []);
});

test("parseRobotsForSitemaps ignores non-http sitemap entries", () => {
  const robots = [
    "Sitemap: https://example.com/sitemap.xml",
    "Sitemap: ftp://example.com/other.xml"
  ].join("\n");
  const result = parseRobotsForSitemaps(robots);
  // Only the https URL should be returned
  assert.deepEqual(result, ["https://example.com/sitemap.xml"]);
});

test("crawlPageLinks follows anchors only, not stylesheet or icon links", async () => {
  const html = `<!doctype html><html><head>
    <link rel="stylesheet" href="/style.css">
    <link rel="icon" href="/favicon.ico">
    <script src="/app.js"></script>
  </head><body>
    <a href="/about">About</a>
    <a href="/contact#team">Contact</a>
    <a href="#top">Top</a>
    <a href="https://other.example/">Elsewhere</a>
    <form action="/submit-step/"><button>Continue</button></form>
  </body></html>`;

  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => ({ ok: true, status: 200, text: async () => html });

  try {
    const links = await crawlPageLinks("https://example.com/", 1000);
    assert.deepEqual(links.sort(), [
      "https://example.com/about",
      "https://example.com/contact",
      "https://example.com/submit-step/"
    ]);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("crawlSiteForUrls follows links beyond the landing page", async () => {
  const pages = {
    "https://example.com/": '<a href="/step-1/">one</a><a href="/extra/">extra</a>',
    "https://example.com/step-1/": '<a href="/step-2/">two</a>',
    "https://example.com/step-2/": "done",
    "https://example.com/extra/": "done"
  };

  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url) => ({
    ok: true,
    status: 200,
    text: async () => pages[String(url)] ?? "not found"
  });

  try {
    const urls = await crawlSiteForUrls("https://example.com/", 10, 1000);
    assert.deepEqual(urls, [
      "https://example.com/",
      "https://example.com/step-1/",
      "https://example.com/extra/",
      "https://example.com/step-2/"
    ]);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("crawlPageLinks decodes HTML entities in href and form actions", async () => {
  const html = '<a href="/paca/?role=valid&amp;shadow=open">one</a><form action="/submit?a=1&amp;b=2"></form>';
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async () => ({ ok: true, status: 200, text: async () => html });
  try {
    const urls = await crawlPageLinks("https://example.com/", 1000);
    assert.ok(urls.includes("https://example.com/paca/?role=valid&shadow=open"), urls.join(","));
    assert.ok(urls.includes("https://example.com/submit?a=1&b=2"), urls.join(","));
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("crawlSiteForUrls is deterministic for the same site", async () => {
  const pages = {
    "https://example.com/": '<a href="/a/">a</a><a href="/b/">b</a>',
    "https://example.com/a/": "done",
    "https://example.com/b/": "done"
  };
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url) => ({
    ok: true,
    status: 200,
    text: async () => pages[String(url)] ?? "not found"
  });
  try {
    const first = await crawlSiteForUrls("https://example.com/", 3, 1000);
    const second = await crawlSiteForUrls("https://example.com/", 3, 1000);
    assert.deepEqual(first, second);
  } finally {
    globalThis.fetch = originalFetch;
  }
});
