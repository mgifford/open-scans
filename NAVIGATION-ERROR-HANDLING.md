# Navigation Error Handling

## Problem

During accessibility scans, pages may navigate (redirects, JavaScript navigation, single-page app transitions) while browser automation tools (Puppeteer, Playwright) are evaluating JavaScript. This causes "Execution context was destroyed" errors that fail the entire scan.

Example error:
```
Error: Execution context was destroyed, most likely because of a navigation.
    at rewriteError (node_modules/puppeteer-core/lib/esm/puppeteer/cdp/ExecutionContext.js:448:15)
    at async #evaluate (node_modules/puppeteer-core/lib/esm/puppeteer/cdp/ExecutionContext.js:381:60)
```

## Solution

Added automatic retry logic for navigation-related errors in scanner functions.

### Key Components

1. **`isNavigationError(error)`** - Detects navigation-related errors by checking for these patterns:
   - "Execution context was destroyed"
   - "Protocol error"
   - "Target closed"
   - "Session closed"
   - "Navigation timeout"

2. **`retryOnNavigationError(fn, maxRetries=2, baseDelay=1000)`** - Wraps async functions with retry logic:
   - Automatically retries on navigation errors only (non-navigation errors throw immediately)
   - Uses exponential backoff (1s, 2s delays)
   - Maximum 2 retries (3 total attempts)
   - Logs retry attempts to stderr for debugging

3. **Scanner Updates**:
   - `runEqualAccessAudit()` - Wraps `checker.getCompliance()` with retry logic
   - `runQualWebAudit()` - Wraps entire evaluation with retry logic + adds `waitUntil: ['networkidle2']` to reduce navigation races

### Usage Example

```javascript
// Wrap any browser operation that might fail due to navigation
const result = await retryOnNavigationError(async () => {
  return await browserTool.evaluate(page, script);
});
```

### Benefits

- **Robustness**: Scans now succeed even when pages navigate during evaluation
- **Transparency**: Retry attempts are logged for debugging
- **Efficiency**: Only retries navigation errors, not general failures
- **Simplicity**: Minimal code changes, focused on the problem

## Testing

Added `tests/unit/run-scan-retry.test.mjs` to validate:
- Navigation error pattern detection
- Module importability after changes

To test in production, monitor scan logs for:
```
Navigation error detected, retrying in 1000ms (retry 1 of 2)...
Navigation error detected, retrying in 2000ms (retry 2 of 2)...
```

## Configuration

Retry behavior can be tuned by modifying these parameters in `retryOnNavigationError()`:
- `maxRetries` - Number of retry attempts (default: 2)
- `baseDelay` - Base delay in milliseconds for exponential backoff (default: 1000)

## References

- Issue: GitHub Actions run 22556468577 (cloudscape.design scan failure)
- Implementation: scanner/run-scan.mjs lines 201-252, 815-870, 894-1013
- Tests: tests/unit/run-scan-retry.test.mjs
