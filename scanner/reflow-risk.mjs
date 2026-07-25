/**
 * Run a native Playwright reflow-risk check based on CWAC's ReflowAudit.
 *
 * Tests WCAG 1.4.10 Reflow by:
 * 1. Setting viewport width to 320 CSS pixels
 * 2. Waiting for page to stabilize
 * 3. Attempting horizontal scroll
 * 4. Recording scroll position changes and measurements
 * 5. Resetting scroll position
 * 6. Identifying contributing elements where possible
 *
 * @param {import("playwright").Page} page - Playwright page instance
 * @param {number} timeoutMs - Timeout for operations
 * @param {object} options - Configuration options
 * @returns {{result: object, measurements: object, elementInfo: object}|null} Test result
 */
export async function runReflowRisk(page, timeoutMs = 30000, options = {}) {
  const viewportHeight = options.viewportHeight || 800;
  const waitForNetworkIdleMs = options.waitForNetworkIdleMs || 10000;
  const recordScreenshot = options.recordScreenshot || false;
  const helpUrl = options.helpUrl || "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html";

  try {
    // Set viewport to 320xviewportHeight for reflow testing
    await page.setViewportSize({ width: 320, height: viewportHeight });

    // Wait for network to become idle
    try {
      await page.waitForLoadState("networkidle", { timeout: waitForNetworkIdleMs });
    } catch (err) {
      // Continue on timeout - this is expected on pages that never reach network idle
      console.warn("[reflow-risk] Network did not reach idle for 320px width, proceeding with test");
    }

    // Wait a bit more for any animations or JS-driven layout changes
    await page.waitForTimeout(1000);

    // Capture initial scroll state
    const initialScroll = await page.evaluate(() => {
      return {
        scrollX: window.scrollX,
        scrollY: window.scrollY,
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
        overflowX: document.documentElement.style.overflowX || '',
        overflowY: document.documentElement.style.overflowY || ''
      };
    });

    // Attempt to scroll horizontally
    await page.evaluate(() => {
      window.scrollTo(100, 0);
    });

    // Wait a moment for any scrolling animation
    await page.waitForTimeout(500);

    // Capture scrolled state
    const scrolledScroll = await page.evaluate(() => {
      return {
        scrollX: window.scrollX,
        scrollY: window.scrollY,
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        bodyScrollWidth: document.body.scrollWidth,
        maxScrollX: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
        detectedOverflow: window.scrollX > 0 || document.documentElement.scrollWidth > document.documentElement.clientWidth
      };
    });

    // Calculate overflow amount
    const overflowAmount = Math.max(0, scrolledScroll.scrollX - initialScroll.scrollX);
    const hasHorizontalOverflow = scrolledScroll.detectedOverflow || scrolledScroll.maxScrollX > 0;

    // Record measurements
    const measurements = {
      viewport: {
        width: 320,
        height: viewportHeight
      },
      initial: initialScroll,
      afterScroll: scrolledScroll,
      overflowAmountPx: overflowAmount,
      hasHorizontalOverflow: hasHorizontalOverflow,
      scrollDifferenceX: scrolledScroll.scrollX - initialScroll.scrollX
    };

    // Try to identify elements causing overflow
    let elementInfo = null;
    if (hasHorizontalOverflow) {
      try {
        elementInfo = await page.evaluate(() => {
          const elements = [];

          // Get all scrollable containers
          const scrollableElements = Array.from(document.querySelectorAll("*"))
            .filter(el => {
              const style = window.getComputedStyle(el);
              return (
                el.scrollWidth > el.clientWidth &&
                style.overflowX === 'auto' ||
                style.overflowX === 'scroll' ||
                style.overflow === 'auto' ||
                style.overflow === 'scroll'
              );
            });

          // Get elements with overflow content
          const overflowElements = Array.from(document.querySelectorAll("*"))
            .filter(el => {
              return el.scrollWidth > el.clientWidth;
            });

          // Add the top-level candidates
          elements.push(...overflowElements.slice(0, 5));

          // Get computed styles for each element
          return elements.map(el => ({
            tagName: el.tagName.toLowerCase(),
            id: el.id || null,
            className: el.className || null,
            clientWidth: el.clientWidth,
            scrollWidth: el.scrollWidth,
            overflowX: window.getComputedStyle(el).overflowX,
            overflowStyle: window.getComputedStyle(el).overflow,
            x: el.getBoundingClientRect().left + window.scrollX,
            y: el.getBoundingClientRect().top + window.scrollY,
            width: el.getBoundingClientRect().width,
            height: el.getBoundingClientRect().height
          }));
        });
      } catch (err) {
        console.warn("[reflow-risk] Failed to identify overflow elements:", err.message);
      }
    }

    // Reset scroll position
    await page.evaluate(() => {
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(100);

    // Capture final scroll state to ensure reset
    const finalScroll = await page.evaluate(() => {
      return {
        scrollX: window.scrollX,
        scrollY: window.scrollY
      };
    });

    // Take screenshot if requested
    let screenshot = null;
    if (recordScreenshot && hasHorizontalOverflow) {
      try {
        screenshot = await page.screenshot({ type: "png" });
      } catch (err) {
        console.warn("[reflow-risk] Failed to take screenshot:", err.message);
      }
    }

    // Determine result classification
    let result = "cantTell";
    let description = "";

    if (!hasHorizontalOverflow) {
      result = "passed";
      description = "No horizontal overflow detected at 320px width";
    } else if (overflowAmount > 0) {
      result = "failed";
      description = `Horizontal overflow detected: ${overflowAmount}px of content overflowed the viewport at 320px width`;
    } else {
      result = "potential";
      description = "Page may have horizontal overflow, but test inconclusive";
    }

    return {
      result,
      measurements,
      elementInfo,
      description,
      helpUrl,
      screenshot: screenshot ? screenshot.toString("base64") : null
    };

  } catch (error) {
    console.error("[reflow-risk] Test failed:", error instanceof Error ? error.message : String(error));
    return null;
  }
}

/**
 * Run reflow-risk check for multiple URLs
 * @param {string[]} urls - URLs to test
 * @param {object} config - Configuration options
 * @returns {Promise<Array<{url: string, result: object}>>} Test results
 */
export async function runReflowRiskForUrls(urls, config = {}) {
  const results = [];

  for (const url of urls) {
    try {
      const page = await config.browser.newPage();
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });

      const result = await runReflowRisk(page, config.timeoutMs, config);

      await page.close();

      if (result) {
        results.push({
          url,
          result
        });
      }
    } catch (error) {
      console.error(`[reflow-risk] Failed to scan ${url}:`, error instanceof Error ? error.message : String(error));
      results.push({
        url,
        result: {
          result: "failed",
          description: `Test error: ${error instanceof Error ? error.message : String(error)}`,
          helpUrl: config.helpUrl || "https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
        }
      });
    }
  }

  return results;
}
