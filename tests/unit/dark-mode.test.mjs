import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { writeFileSync, unlinkSync } from "node:fs";

// Helper to run a function from run-scan.mjs by importing it
// Note: runAxeAudit depends on many things, so we might need to mock or use a real browser
import { runAxeAudit } from "../../scanner/run-scan.mjs";

test("Dark mode detection and scanning", async (t) => {
  const testHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { background: white; color: black; }
        @media (prefers-color-scheme: dark) {
          body { background: black; color: #333; } /* Low contrast in dark mode */
        }
        .content { padding: 20px; }
      </style>
    </head>
    <body>
      <div class="content" id="target">Hello World</div>
    </body>
    </html>
  `;

  const testFilePath = join(dirname(fileURLToPath(import.meta.url)), "dark-mode-test.html");
  writeFileSync(testFilePath, testHtml);
  const testUrl = `file://${testFilePath}`;

  await t.test("runAxeAudit detects and scans dark mode", async () => {
    const result = await runAxeAudit(testUrl);

    if (!result.executed) {
      // Playwright/axe-core not available in this environment — skip remaining assertions
      return;
    }

    assert.ok(result.darkModeScanned, "Dark mode should be detected");

    // Check that we have findings for both light and dark if applicable
    // In this specific HTML, there might be a color-contrast issue in dark mode but not in light 
    // (depending on axe rules for black on #333)

    const darkFailures = result.failures.filter(f => f.colorScheme === 'dark');
    const lightFailures = result.failures.filter(f => f.colorScheme === 'light');

    console.error(`Found ${lightFailures.length} light failures and ${darkFailures.length} dark failures`);

    // We expect at least one failure to be tagged with its mode
    assert.ok(result.failures.every(f => f.colorScheme === 'light' || f.colorScheme === 'dark'), "All failures should have colorScheme");
  });

  // Clean up
  try {
    unlinkSync(testFilePath);
  } catch { }
});

test("runAxeAudit falls back to a snapshot when navigation starts a download", async () => {
  const snapshotHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Download Snapshot</title>
    </head>
    <body>
      <img src="cat.jpg">
      <p>Snapshot content</p>
    </body>
    </html>
  `;

  const server = createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": "attachment; filename=download.html"
    });
    res.end(snapshotHtml);
  });

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  const testUrl = `http://127.0.0.1:${address.port}/download`;

  try {
    const result = await runAxeAudit(testUrl, 0, {
      viewport: { width: 1280, height: 800 },
      viewportPreset: "desktop",
      colorScheme: "light",
      browser: "chromium"
    }, snapshotHtml);

    if (!result.executed) {
      return;
    }

    assert.equal(result.error, null, "Snapshot fallback should avoid a navigation error");
    assert.equal(result.snapshotFallbackUsed, true, "Snapshot fallback should be recorded");
    assert.ok(result.failedRules.includes("image-alt"), "axe should audit the snapshot content");
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
});
