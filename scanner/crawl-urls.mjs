import { isNonWebDocument } from "./validate-targets.mjs";

const DEFAULT_CRAWL_TIMEOUT = 30000; // 30 seconds
const DEFAULT_MAX_URLS = 50;
const MAX_SITEMAP_URLS = 500;

// Use a Googlebot-style user-agent so sites that block generic bots still allow crawling.
// Many CDNs and WAFs whitelist well-known crawlers; the project URL in the comment token
// ensures transparency about the tool's identity.
const CRAWL_USER_AGENT =
  "Mozilla/5.0 (compatible; open-scans/1.0; +https://github.com/mgifford/open-scans)";

const CRAWL_HEADERS = {
  "User-Agent": CRAWL_USER_AGENT,
  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "Accept-Language": "en-US,en;q=0.5"
};

/**
 * Creates an AbortController-based timeout signal.
 * @param {number} ms - Timeout in milliseconds
 * @returns {AbortSignal}
 */
function createTimeoutSignal(ms) {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), ms);
  return controller.signal;
}

/**
 * Parse URLs from a sitemap XML string.
 * Handles both regular sitemaps (<urlset>) and sitemap indexes (<sitemapindex>).
 * @param {string} xml - Sitemap XML content
 * @returns {{ urls: string[], isSitemapIndex: boolean }}
 */
export function parseSitemapXml(xml) {
  const urls = [];

  // Check if it's a sitemap index (contains sub-sitemap references)
  const isSitemapIndex = /<sitemapindex/i.test(xml);

  // Extract all <loc> values
  const locPattern = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let match;
  while ((match = locPattern.exec(xml)) !== null) {
    const url = match[1].trim();
    if (url.startsWith("http://") || url.startsWith("https://")) {
      urls.push(url);
    }
  }

  return { urls, isSitemapIndex };
}

/**
 * Filter URLs to same-origin, valid (non-document) HTML pages.
 * @param {string[]} urls
 * @param {string} baseUrl
 * @returns {string[]}
 */
export function filterSameOriginUrls(urls, baseUrl) {
  let origin;
  try {
    origin = new URL(baseUrl).origin;
  } catch {
    return [];
  }
  return urls.filter((url) => {
    try {
      const parsed = new URL(url);
      return parsed.origin === origin && !isNonWebDocument(parsed);
    } catch {
      return false;
    }
  });
}

/**
 * Decode the HTML entities that appear in href and action attributes.
 *
 * A crawl that keeps `&amp;` produces URLs such as
 * `/paca/?role=valid&amp;shadow=open`, which the server treats as a different
 * query string: the page is fetched, but the intended state is never applied.
 * Only the entities that legitimately appear in URL attributes are decoded.
 *
 * @param {string} value
 * @returns {string}
 */
export function decodeHtmlEntities(value) {
  return String(value ?? "")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

/**
 * Take the first maxCount URLs in document order.
 *
 * Selection is deterministic on purpose: a scan that samples a random subset
 * of a sitemap cannot be reproduced, cannot be compared with the previous run,
 * and cannot back a "complete audit" claim.
 *
 * @param {string[]} items
 * @param {number} maxCount
 * @returns {string[]}
 */
export function selectStableUrls(items, maxCount) {
  return items.slice(0, Math.max(0, maxCount));
}

/**
 * Fetch and parse a sitemap at the given URL.
 * Returns an empty array on any error (network, parse, etc.).
 * @param {string} sitemapUrl
 * @param {number} timeout
 * @returns {Promise<string[]>}
 */
async function fetchOneSitemap(sitemapUrl, timeout) {
  try {
    const response = await fetch(sitemapUrl, {
      headers: CRAWL_HEADERS,
      signal: createTimeoutSignal(timeout)
    });
    if (!response.ok) return [];
    const xml = await response.text();
    const { urls } = parseSitemapXml(xml);
    return urls;
  } catch {
    return [];
  }
}

/**
 * Fetch URLs from a site's sitemap.xml.
 * Handles sitemap index files by fetching up to 3 sub-sitemaps.
 * Returns an empty array if the sitemap is not found or an error occurs.
 *
 * @param {string} baseUrl - The base URL of the site (origin used to locate sitemap.xml)
 * @param {number} timeout - Request timeout in milliseconds
 * @returns {Promise<string[]>} Array of URLs found in the sitemap
 */
export async function fetchSitemapUrls(baseUrl, timeout = DEFAULT_CRAWL_TIMEOUT) {
  let origin;
  try {
    origin = new URL(baseUrl).origin;
  } catch {
    return [];
  }
  const sitemapUrl = `${origin}/sitemap.xml`;
  console.error(`[crawl] Fetching sitemap: ${sitemapUrl}`);

  try {
    const response = await fetch(sitemapUrl, {
      headers: CRAWL_HEADERS,
      signal: createTimeoutSignal(timeout)
    });

    if (!response.ok) {
      console.error(`[crawl] Sitemap not found (${response.status}): ${sitemapUrl}`);
      return [];
    }

    const xml = await response.text();
    const { urls, isSitemapIndex } = parseSitemapXml(xml);

    if (isSitemapIndex && urls.length > 0) {
      console.error(`[crawl] Found sitemap index with ${urls.length} sub-sitemaps`);
      const allUrls = [];
      // Fetch sub-sitemaps (limit to first 3 to avoid excessive requests)
      for (const subSitemapUrl of urls.slice(0, 3)) {
        const subUrls = await fetchOneSitemap(subSitemapUrl, timeout);
        allUrls.push(...subUrls);
        if (allUrls.length >= MAX_SITEMAP_URLS) break;
      }
      console.error(`[crawl] Found ${allUrls.length} URLs across sub-sitemaps`);
      return allUrls;
    }

    console.error(`[crawl] Found ${urls.length} URLs in sitemap`);
    return urls;
  } catch (err) {
    console.error(`[crawl] Error fetching sitemap: ${err.message}`);
    return [];
  }
}

/**
 * Parse sitemap URLs from a robots.txt body.
 * Extracts all "Sitemap: <url>" directives (case-insensitive).
 * @param {string} robotsTxt - The robots.txt content
 * @returns {string[]} Array of sitemap URLs found
 */
export function parseRobotsForSitemaps(robotsTxt) {
  const urls = [];
  const pattern = /^sitemap:\s*(https?:\/\/\S+)/gim;
  let match;
  while ((match = pattern.exec(robotsTxt)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

/**
 * Fetch and parse robots.txt to discover sitemap URLs.
 * Returns an empty array if robots.txt is not found or has no sitemap directives.
 *
 * @param {string} baseUrl - The base URL of the site
 * @param {number} timeout - Request timeout in milliseconds
 * @returns {Promise<string[]>} Sitemap URLs found in robots.txt
 */
export async function fetchRobotsSitemaps(baseUrl, timeout = DEFAULT_CRAWL_TIMEOUT) {
  let origin;
  try {
    origin = new URL(baseUrl).origin;
  } catch {
    return [];
  }
  const robotsUrl = `${origin}/robots.txt`;
  console.error(`[crawl] Checking robots.txt for sitemaps: ${robotsUrl}`);

  try {
    const response = await fetch(robotsUrl, {
      headers: CRAWL_HEADERS,
      signal: createTimeoutSignal(timeout)
    });
    if (!response.ok) {
      console.error(`[crawl] robots.txt not found (${response.status})`);
      return [];
    }
    const text = await response.text();
    const sitemapUrls = parseRobotsForSitemaps(text);
    console.error(`[crawl] Found ${sitemapUrls.length} sitemap(s) in robots.txt`);
    return sitemapUrls;
  } catch (err) {
    console.error(`[crawl] Error fetching robots.txt: ${err.message}`);
    return [];
  }
}

/**
 * Fetch a page's HTML and extract same-origin anchor links.
 * Returns an empty array on any error.
 *
 * @param {string} url - The URL to fetch
 * @param {number} timeout - Request timeout in milliseconds
 * @returns {Promise<string[]>} Array of same-origin URLs found on the page
 */
export async function crawlPageLinks(url, timeout = DEFAULT_CRAWL_TIMEOUT) {
  console.error(`[crawl] Crawling page for links: ${url}`);
  let origin;
  try {
    origin = new URL(url).origin;
  } catch {
    return [];
  }

  try {
    const response = await fetch(url, {
      headers: CRAWL_HEADERS,
      signal: createTimeoutSignal(timeout)
    });

    if (!response.ok) {
      console.error(`[crawl] Page not accessible (${response.status}): ${url}`);
      return [];
    }

    const html = await response.text();

    // Extract href values from anchor tags only. Matching every href would also
    // pick up stylesheet, preload and icon URLs, which are not pages to scan.
    // The leading [^"'#] intentionally excludes pure fragment anchors
    // (href="#section") which would resolve to the current page URL.
    const hrefPattern = /<a\b[^>]*?\bhref=["']([^"'#][^"']*?)["']/gi;
    const seen = new Set();
    let match;

    while ((match = hrefPattern.exec(html)) !== null) {
      try {
        const parsed = new URL(decodeHtmlEntities(match[1]), url);
        parsed.hash = "";
        const normalized = parsed.toString();
        const assetLike = /\.(css|js|mjs|json|xml|svg|png|jpe?g|gif|webp|ico|woff2?|ttf|pdf|zip|md|txt|csv)$/i
          .test(parsed.pathname);

        if (
          parsed.origin === origin &&
          !isNonWebDocument(parsed) &&
          !assetLike &&
          !seen.has(normalized)
        ) {
          seen.add(normalized);
        }
      } catch {
        // Ignore invalid URLs
      }
    }

    // Form actions are the only navigation on the exercise's step pages, so an
    // anchor-only crawl stops before the later steps. Include same-origin form
    // actions as page links.
    const formPattern = /<form\b[^>]*?\baction=["']([^"'#][^"']*?)["']/gi;

    while ((match = formPattern.exec(html)) !== null) {
      try {
        const parsed = new URL(decodeHtmlEntities(match[1]), url);
        parsed.hash = "";
        const normalized = parsed.toString();
        const assetLike = /\.(css|js|mjs|json|xml|svg|png|jpe?g|gif|webp|ico|woff2?|ttf|pdf|zip|md|txt|csv)$/i
          .test(parsed.pathname);

        if (
          parsed.origin === origin &&
          !isNonWebDocument(parsed) &&
          !assetLike &&
          !seen.has(normalized)
        ) {
          seen.add(normalized);
        }
      } catch {
        // Ignore invalid URLs
      }
    }

    const result = [...seen];
    console.error(`[crawl] Found ${result.length} same-origin links on page`);
    return result;
  } catch (err) {
    console.error(`[crawl] Error crawling page: ${err.message}`);
    return [];
  }
}

/**
 * Crawl a site for URLs to scan.
 * Strategy:
 *   1. Try fetching {origin}/sitemap.xml — use a random sample if found.
 *   2. Try sitemaps listed in {origin}/robots.txt — use the first one that yields URLs.
 *   3. Fall back to extracting anchor links from the homepage.
 * Always includes the base URL itself as the first entry.
 *
 * @param {string} baseUrl - The base URL of the site to crawl
 * @param {number} maxUrls - Maximum number of URLs to return (default: 50)
 * @param {number} timeout - HTTP request timeout in milliseconds
 * @returns {Promise<string[]>} Array of discovered URLs
 */
export async function crawlSiteForUrls(baseUrl, maxUrls = DEFAULT_MAX_URLS, timeout = DEFAULT_CRAWL_TIMEOUT) {
  console.error(`[crawl] Starting crawl for ${baseUrl} (max ${maxUrls} URLs)`);

  // Step 1: Try sitemap.xml
  const sitemapUrls = await fetchSitemapUrls(baseUrl, timeout);
  if (sitemapUrls.length > 0) {
    const filtered = filterSameOriginUrls(sitemapUrls, baseUrl);
    console.error(`[crawl] Sitemap: ${filtered.length} same-origin HTML URLs after filtering`);

    if (filtered.length > 0) {
      // Ensure base URL is included; take the remaining slots in sitemap order.
      const others = filtered.filter((u) => u !== baseUrl);
      const selected = selectStableUrls(others, maxUrls - 1);
      const result = [baseUrl, ...selected].slice(0, maxUrls);
      if (filtered.length > result.length) {
        console.error(`[crawl] Sitemap lists ${filtered.length} URLs; scanning ${result.length} (cap). Raise the URL limit to cover the rest.`);
      }
      console.error(`[crawl] Selected ${result.length} URLs from sitemap`);
      return result;
    }
  }

  // Step 2: Try sitemaps listed in robots.txt
  console.error(`[crawl] Trying robots.txt for sitemap discovery`);
  const robotsSitemaps = await fetchRobotsSitemaps(baseUrl, timeout);
  for (const robotsSitemapUrl of robotsSitemaps) {
    const urls = await fetchOneSitemap(robotsSitemapUrl, timeout);
    if (urls.length > 0) {
      const filtered = filterSameOriginUrls(urls, baseUrl);
      console.error(`[crawl] robots.txt sitemap ${robotsSitemapUrl}: ${filtered.length} same-origin URLs`);
      if (filtered.length > 0) {
        const others = filtered.filter((u) => u !== baseUrl);
        const selected = selectStableUrls(others, maxUrls - 1);
        const result = [baseUrl, ...selected].slice(0, maxUrls);
        if (filtered.length > result.length) {
          console.error(`[crawl] robots.txt sitemap lists ${filtered.length} URLs; scanning ${result.length} (cap). Raise the URL limit to cover the rest.`);
        }
        console.error(`[crawl] Selected ${result.length} URLs from robots.txt sitemap`);
        return result;
      }
    }
  }

  // Step 3: Breadth-first crawl from the homepage. Following links one level
  // deep only finds pages linked from the landing page; the exercise's later
  // steps are only reachable from earlier steps.
  console.error(`[crawl] Falling back to page crawl`);
  const result = [baseUrl];
  const seen = new Set([baseUrl]);
  const queue = [baseUrl];

  while (queue.length > 0 && result.length < maxUrls) {
    const current = queue.shift();
    const pageUrls = await crawlPageLinks(current, timeout);

    for (const url of pageUrls) {
      if (seen.has(url)) continue;
      seen.add(url);
      result.push(url);
      queue.push(url);
      if (result.length >= maxUrls) break;
    }
  }

  console.error(`[crawl] Final URL list: ${result.length} URLs after breadth-first crawl`);
  return result.slice(0, maxUrls);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const baseUrl = process.argv[2];
  const maxUrls = parseInt(process.argv[3] || "50", 10);
  if (!baseUrl) {
    console.error("Usage: node scanner/crawl-urls.mjs <base-url> [max-urls]");
    process.exitCode = 1;
  } else {
    const urls = await crawlSiteForUrls(baseUrl, maxUrls);
    process.stdout.write(JSON.stringify(urls, null, 2) + "\n");
  }
}
