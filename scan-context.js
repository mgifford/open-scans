export const VIEWPORT_PRESETS = Object.freeze({
  desktop: { width: 1280, height: 800 },
  "tablet-portrait": { width: 768, height: 1024 },
  "tablet-landscape": { width: 1024, height: 768 },
  "mobile-portrait": { width: 390, height: 844 },
  "mobile-landscape": { width: 844, height: 390 }
});

export const DEFAULT_VIEWPORT_PRESET = "desktop";
export const DEFAULT_COLOR_SCHEME = "both";
export const DEFAULT_BROWSER = "chromium";
export const VIEWPORT_SIZE_RE = /^(\d{2,5})\s*[x×]\s*(\d{2,5})$/i;

const VIEWPORT_ALIASES = Object.freeze({
  mobile: "mobile-portrait",
  tablet: "tablet-portrait"
});

const VIEWPORT_LABEL_ALIASES = Object.freeze({
  "default (1280×800 desktop)": DEFAULT_VIEWPORT_PRESET,
  "default desktop (1280×800)": DEFAULT_VIEWPORT_PRESET,
  "tablet portrait (768×1024)": "tablet-portrait",
  "tablet landscape (1024×768)": "tablet-landscape",
  "mobile portrait (390×844)": "mobile-portrait",
  "mobile landscape (844×390)": "mobile-landscape"
});

const COLOR_SCHEME_ALIASES = Object.freeze({
  "auto-detect (run both if page supports dark mode)": "both",
  "light only": "light",
  "dark only": "dark"
});

const BROWSER_ALIASES = Object.freeze({
  "chromium (default)": "chromium",
  "webkit (safari-like)": "webkit"
});

function normalizeText(value) {
  return String(value ?? "").trim().toLowerCase();
}

function toTitleCase(value) {
  return String(value)
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function getViewportPresetName(viewport) {
  const width = Number(viewport?.width);
  const height = Number(viewport?.height);
  for (const [name, preset] of Object.entries(VIEWPORT_PRESETS)) {
    if (preset.width === width && preset.height === height) {
      return name;
    }
  }
  return null;
}

export function normalizeViewportPresetName(value) {
  const normalized = normalizeText(value);
  if (!normalized) return null;
  if (normalized.startsWith("default")) return DEFAULT_VIEWPORT_PRESET;
  if (VIEWPORT_LABEL_ALIASES[normalized]) return VIEWPORT_LABEL_ALIASES[normalized];
  const alias = VIEWPORT_ALIASES[normalized];
  if (alias) return alias;
  if (VIEWPORT_PRESETS[normalized]) return normalized;
  const dashed = normalized.replace(/\s+/g, "-");
  if (VIEWPORT_PRESETS[dashed]) return dashed;
  for (const [label, preset] of Object.entries(VIEWPORT_LABEL_ALIASES)) {
    if (normalized.includes(label.split(" (")[0])) {
      return preset;
    }
  }
  return null;
}

export function parseViewportSpec(value) {
  if (value && typeof value === "object") {
    const width = Number(value.width);
    const height = Number(value.height);
    if (Number.isInteger(width) && width > 0 && Number.isInteger(height) && height > 0) {
      return {
        width,
        height,
        preset: getViewportPresetName({ width, height }) || "custom"
      };
    }
    return null;
  }

  const normalized = normalizeText(value);
  if (!normalized) return null;

  const sizeMatch = normalized.match(VIEWPORT_SIZE_RE);
  if (sizeMatch) {
    const width = Number.parseInt(sizeMatch[1], 10);
    const height = Number.parseInt(sizeMatch[2], 10);
    if (width > 0 && height > 0) {
      return {
        width,
        height,
        preset: getViewportPresetName({ width, height }) || "custom"
      };
    }
  }

  const preset = normalizeViewportPresetName(normalized);
  if (!preset) return null;
  return {
    ...VIEWPORT_PRESETS[preset],
    preset
  };
}

export function normalizeColorScheme(value) {
  const normalized = normalizeText(value);
  if (!normalized) return null;
  return COLOR_SCHEME_ALIASES[normalized] || (["light", "dark", "both"].includes(normalized) ? normalized : null);
}

export function normalizeBrowser(value) {
  const normalized = normalizeText(value);
  if (!normalized) return null;
  return BROWSER_ALIASES[normalized] || (["chromium", "firefox", "webkit"].includes(normalized) ? normalized : null);
}

export function buildScanContext(raw = {}) {
  const viewport = parseViewportSpec(raw.viewport) || {
    ...VIEWPORT_PRESETS[DEFAULT_VIEWPORT_PRESET],
    preset: DEFAULT_VIEWPORT_PRESET
  };

  return {
    viewport: {
      width: viewport.width,
      height: viewport.height
    },
    viewportPreset: viewport.preset,
    colorScheme: normalizeColorScheme(raw.colorScheme) || DEFAULT_COLOR_SCHEME,
    browser: normalizeBrowser(raw.browser) || DEFAULT_BROWSER
  };
}

export function formatViewportToken(scanContext) {
  const context = buildScanContext(scanContext);
  if (context.viewportPreset && context.viewportPreset !== "custom") {
    return context.viewportPreset;
  }
  return `${context.viewport.width}x${context.viewport.height}`;
}

export function formatViewportSummary(scanContext) {
  const context = buildScanContext(scanContext);
  const dimensions = `${context.viewport.width}×${context.viewport.height}`;
  if (context.viewportPreset === "custom") {
    return `Custom (${dimensions})`;
  }
  return `${toTitleCase(context.viewportPreset)} (${dimensions})`;
}
