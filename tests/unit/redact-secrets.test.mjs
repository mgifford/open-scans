import test from "node:test";
import assert from "node:assert/strict";
import { redactSecrets, redactStringsDeep } from "../../scanner/redact-secrets.mjs";

// --- redactSecrets: known secret formats ---

test("redactSecrets masks a Mapbox secret access token embedded in an HTML snippet", () => {
  const html = '<img src="https://a.tiles.mapbox.com/tiles/4/0/0?access_token=sk.eyJ1IjoiZW5lcmd5IiwiYSI6IkozTG9BZDQifQ.1WKh4U0kKCdknF3gxBOF7Q">';
  const out = redactSecrets(html);
  assert.ok(!out.includes("sk.eyJ1IjoiZW5lcmd5"), "Mapbox token should be masked");
  assert.ok(out.includes("[REDACTED:mapbox-token]"), "redaction marker present");
  assert.ok(out.includes('<img src="'), "surrounding HTML preserved");
});

test("redactSecrets masks a Mapbox public token too", () => {
  const url = "https://tiles.mapbox.com/tiles?access_token=pk.eyJ1IjoiZW5lcmd5IiwiYSI6IkozTG9BZDQifQ.1WKh4U0kKCdknF3gxBOF7Q";
  const out = redactSecrets(url);
  assert.ok(!out.includes("pk.eyJ1IjoiZW5lcmd5"));
  assert.ok(out.includes("[REDACTED:mapbox-token]"));
});

test("redactSecrets does not corrupt similar-looking non-secret strings", () => {
  // Image names that start with "sk." must survive untouched (they are not JWT tokens)
  assert.equal(redactSecrets("sk.tmb-xs.png"), "sk.tmb-xs.png");
  // Ordinary text without secrets is unchanged
  assert.equal(redactSecrets("No secrets here, just plain report text."), "No secrets here, just plain report text.");
  // Short sk- prefixed strings (not OpenAI keys) are unchanged
  assert.equal(redactSecrets("report sk-3 lines"), "report sk-3 lines");
});

test("redactSecrets masks GitHub personal access tokens and fine-grained tokens", () => {
  // Real classic PATs are exactly 36 chars after the ghp_/gho_/ghu_/ghs_/ghr_ prefix
  const ghp = "token ghp_0123456789abcdef0123456789abcdef0123 in text";
  assert.ok(!redactSecrets(ghp).includes("ghp_0123456789abcdef"));

  const fine = "github_pat_0123456789abcdef0123456789abcdef0123456789abcdef";
  const out = redactSecrets(fine);
  assert.ok(!out.includes("github_pat_"));
  assert.ok(out.includes("[REDACTED:github-token]"));
});

test("redactSecrets masks AWS, Google, Stripe, OpenAI and Slack credential formats", () => {
  // Fixtures are assembled at runtime so the literal credential-shaped
  // strings never appear in this file (GitHub push protection blocks
  // commits containing recognized secret-format patterns).
  const aws = `AKIA${"IOSFODNN7EXAMPLE"}`;
  const google = `AIza${"SyD-abcdefghijklmnopqrstuvwxyzABCDE"}`;
  const stripe = `sk_${"live_0123456789abcdef0123456789"}`;
  const openai = `sk-${"0123456789abcdef0123456789abcdef"}`;
  const slack = `xoxb-${"123456789012-123456789012-abcdefghij"}`;
  assert.ok(redactSecrets(aws).includes("[REDACTED:aws-access-key]"));
  assert.ok(redactSecrets(google).includes("[REDACTED:google-api-key]"));
  assert.ok(redactSecrets(stripe).includes("[REDACTED:stripe-key]"));
  assert.ok(redactSecrets(openai).includes("[REDACTED:openai-key]"));
  assert.ok(redactSecrets(slack).includes("[REDACTED:slack-token]"));
});

test("redactSecrets drops private key blocks entirely", () => {
  const pem = "-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEA\n-----END RSA PRIVATE KEY-----";
  const out = redactSecrets(pem);
  assert.ok(!out.includes("MIIEowIBAAKCAQEA"));
  assert.ok(out.includes("[REDACTED:private-key]"));
});

test("redactSecrets masks bearer tokens but keeps the prefix", () => {
  const raw = "Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.abcdefghijklmnopqrstuvwxyz";
  const out = redactSecrets(raw);
  assert.ok(out.startsWith("Authorization: Bearer "));
  assert.ok(out.includes("[REDACTED:bearer-token]"));
  assert.ok(!out.includes("eyJhbGciOiJIUzI1NiJ9"));
});

test("redactSecrets masks secret-bearing query parameters", () => {
  const url = "https://example.com/map?v=2&access_token=super-secret-value-123&theme=dark";
  const out = redactSecrets(url);
  assert.ok(!out.includes("super-secret-value-123"));
  assert.ok(out.includes("access_token=[REDACTED:query-token]"));
  assert.ok(out.includes("theme=dark"), "non-secret query params preserved");
  assert.ok(!out.includes("their=own"), "no false match on plain text");
});

test("redactSecrets is idempotent", () => {
  const input = "k=a&token=abc123def456ghi789jkl012mno345pqr678stu901vwx &also pk.eyJ1IjoiZW5lcmd5IiwiYSI6IkozTG9BZDQifQ.1WKh4U0kKCdknF3gxBOF7Q";
  const once = redactSecrets(input);
  const twice = redactSecrets(once);
  assert.equal(twice, once);
});

test("redactSecrets handles non-string inputs defensively", () => {
  assert.equal(redactSecrets(undefined), undefined);
  assert.equal(redactSecrets(null), null);
  assert.equal(redactSecrets(123), 123);
  assert.equal(redactSecrets(""), "");
});

// --- redactStringsDeep: recursive walk ---

test("redactStringsDeep redacts nested strings across objects and arrays", () => {
  const data = {
    issueNumber: 308,
    scanTitle: "CMS.gov scan",
    results: [
      {
        url: "https://cms.gov/",
        failures: [
          {
            rule: "image-alt",
            html: 'src="https://tiles.mapbox.com/x?access_token=pk.eyJ1IjoiZW5lcmd5IiwiYSI6IkozTG9BZDQifQ.1WKh4U0kKCdknF3gxBOF7Q"',
            message: "Image missing alt text"
          }
        ]
      }
    ],
    metadata: null,
    flags: [true, false]
  };

  const stats = { changed: 0 };
  const out = redactStringsDeep(data, stats);

  assert.equal(out.results[0].failures[0].html.includes("pk.eyJ"), false);
  assert.ok(out.results[0].failures[0].html.includes("[REDACTED:mapbox-token]"));
  assert.equal(out.results[0].failures[0].message, "Image missing alt text");
  assert.ok(stats.changed >= 1);
  assert.equal(out.metadata, null);
  assert.equal(data.results[0].failures[0].html, out.results[0].failures[0].html, "mutates in place");
});

test("redactStringsDeep leaves clean structures untouched", () => {
  const data = { a: ["hello", { b: "world" }], c: 42 };
  const stats = { changed: 0 };
  redactStringsDeep(data, stats);
  assert.deepEqual(data, { a: ["hello", { b: "world" }], c: 42 });
  assert.equal(stats.changed, 0);
});