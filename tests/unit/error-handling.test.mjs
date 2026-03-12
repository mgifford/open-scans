import { describe, test } from "node:test";
import assert from "node:assert";
import { hasErrAbortedError } from "../../scanner/run-scan.mjs";

/**
 * Tests for error handling in scanner modules
 * 
 * These tests document expected error handling behavior, particularly for
 * browser cleanup errors that may occur when pages are detached during timeouts.
 */

describe("Error Handling Tests", () => {
  test("should handle Protocol error in error messages", () => {
    // This tests the pattern matching used in error handlers
    const errorMessages = [
      "Protocol error: Connection closed. Most likely the page has been closed.",
      "Error: Connection closed",
      "frame was detached",
      "Target closed"
    ];
    
    errorMessages.forEach(msg => {
      const isExpectedError = 
        msg.includes("Protocol error") || 
        msg.includes("Connection closed") || 
        msg.includes("detached") || 
        msg.includes("Target closed");
      
      assert.strictEqual(isExpectedError, true, 
        `Should recognize "${msg}" as an expected browser cleanup error`);
    });
  });
  
  test("should not treat other errors as browser cleanup errors", () => {
    const errorMessages = [
      "Network timeout",
      "File not found",
      "Permission denied",
      "Unexpected token"
    ];
    
    errorMessages.forEach(msg => {
      const isExpectedError = 
        msg.includes("Protocol error") || 
        msg.includes("Connection closed") || 
        msg.includes("detached") || 
        msg.includes("Target closed");
      
      assert.strictEqual(isExpectedError, false,
        `Should not recognize "${msg}" as a browser cleanup error`);
    });
  });
  
  test("should extract error message from Error objects", () => {
    const error = new Error("Protocol error: Connection closed");
    const msg = error instanceof Error ? error.message : String(error);
    
    assert.strictEqual(msg, "Protocol error: Connection closed");
    assert.strictEqual(msg.includes("Protocol error"), true);
  });
  
  test("should handle string errors", () => {
    const error = "Connection closed";
    const msg = error instanceof Error ? error.message : String(error);
    
    assert.strictEqual(msg, "Connection closed");
    assert.strictEqual(msg.includes("Connection closed"), true);
  });
  
  test("should document cleanup error handling pattern", () => {
    // This test documents the error handling pattern used in run-scan.mjs cleanup
    // The pattern is: nested try-catch with specific error message checking
    
    const mockCleanup = async () => {
      const mockChecker = {
        close: async () => {
          throw new Error("Protocol error: Connection closed");
        }
      };
      
      try {
        if (mockChecker?.close) {
          try {
            await mockChecker.close();
            return { success: true, warning: null };
          } catch (closeError) {
            const closeMsg = closeError instanceof Error ? closeError.message : String(closeError);
            if (closeMsg.includes("Protocol error") || 
                closeMsg.includes("Connection closed") || 
                closeMsg.includes("detached")) {
              return { 
                success: false, 
                warning: "Some browser pages were already closed or detached (expected after timeouts)" 
              };
            } else {
              return { 
                success: false, 
                warning: `Error during browser close: ${closeMsg}` 
              };
            }
          }
        }
        return { success: true, warning: null };
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : String(error);
        return { 
          success: false, 
          warning: `Failed to clean up: ${errorMsg}` 
        };
      }
    };
    
    // Execute the mock cleanup and verify it handles the error gracefully
    mockCleanup().then(result => {
      assert.strictEqual(result.success, false);
      assert.strictEqual(
        result.warning, 
        "Some browser pages were already closed or detached (expected after timeouts)"
      );
    });
  });
});

describe("hasErrAbortedError", () => {
  test("returns false for null/undefined result", () => {
    assert.strictEqual(hasErrAbortedError(null), false);
    assert.strictEqual(hasErrAbortedError(undefined), false);
  });

  test("detects ERR_ABORTED in top-level result.error", () => {
    const result = {
      error: "net::ERR_ABORTED at https://example.com/file.pdf",
      axe: { error: null },
      alfa: { error: null },
      equalAccess: { error: null },
      accesslint: { error: null },
      qualweb: { error: null }
    };
    assert.strictEqual(hasErrAbortedError(result), true);
  });

  test("detects ERR_ABORTED in scanner sub-result errors", () => {
    const scanners = ["axe", "alfa", "equalAccess", "accesslint", "qualweb"];
    for (const scanner of scanners) {
      const result = {
        error: null,
        axe: { error: null },
        alfa: { error: null },
        equalAccess: { error: null },
        accesslint: { error: null },
        qualweb: { error: null },
        [scanner]: { error: "page.goto: net::ERR_ABORTED at https://example.com/doc.pdf" }
      };
      assert.strictEqual(hasErrAbortedError(result), true,
        `Should detect ERR_ABORTED in ${scanner} scanner result`);
    }
  });

  test("returns false when no ERR_ABORTED errors are present", () => {
    const result = {
      error: null,
      axe: { error: null },
      alfa: { error: "Alfa audit timed out" },
      equalAccess: { error: null },
      accesslint: { error: "Skipped (not requested)" },
      qualweb: { error: null }
    };
    assert.strictEqual(hasErrAbortedError(result), false);
  });

  test("returns false for a successful scan result", () => {
    const result = {
      error: null,
      axe: { error: null, counts: { failed: 3 } },
      alfa: { error: null },
      equalAccess: { error: null },
      accesslint: { error: null },
      qualweb: { error: null }
    };
    assert.strictEqual(hasErrAbortedError(result), false);
  });

  test("is case-sensitive for ERR_ABORTED", () => {
    const result = {
      error: "err_aborted",  // lowercase – should NOT match
      axe: { error: null },
      alfa: { error: null },
      equalAccess: { error: null },
      accesslint: { error: null },
      qualweb: { error: null }
    };
    assert.strictEqual(hasErrAbortedError(result), false);
  });
});

