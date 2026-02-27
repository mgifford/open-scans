/**
 * Accessibility Rule Metadata
 * 
 * Maps rules from various engines (Axe, Alfa, IBM) to:
 * - Roles: UX Designer, Visual Designer, Content Author, Front-End Developer
 * - Severity: Critical, Serious, Moderate, Minor
 * - Task Impact: Task-Blocking vs. Non-Blocking
 */

export const ROLES = {
  UX: "UX Designer",
  VISUAL: "Visual Designer",
  CONTENT: "Content Author",
  DEV: "Front-End Developer"
};

export const SEVERITY = {
  CRITICAL: "Critical",
  SERIOUS: "Serious",
  MODERATE: "Moderate",
  MINOR: "Minor"
};

// Default mappings for unknown rules
export const DEFAULT_MAPPING = {
  roles: [ROLES.DEV],
  severity: SEVERITY.MODERATE,
  blocking: false
};

/**
 * Mapping of Rule IDs to Metadata
 * We use prefix-based keys: 'axe:', 'alfa:', 'ibm:'
 */
export const ruleMapping = {
  // --- axe-core rules ---
  "axe:accesskeys": {
    roles: [ROLES.DEV],
    severity: SEVERITY.MINOR,
    blocking: false
  },
  "axe:area-alt": {
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.CRITICAL,
    blocking: true
  },
  "axe:aria-allowed-attr": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "axe:aria-hidden-focus": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: true
  },
  "axe:aria-input-field-name": {
    roles: [ROLES.DEV, ROLES.CONTENT],
    severity: SEVERITY.SERIOUS,
    blocking: true
  },
  "axe:aria-roles": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "axe:aria-valid-attr-value": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "axe:aria-valid-attr": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "axe:button-name": {
    roles: [ROLES.DEV, ROLES.CONTENT],
    severity: SEVERITY.CRITICAL,
    blocking: true
  },
  "axe:color-contrast": {
    roles: [ROLES.VISUAL],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "axe:document-title": {
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "axe:duplicate-id-active": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: true
  },
  "axe:duplicate-id": {
    roles: [ROLES.DEV],
    severity: SEVERITY.MINOR,
    blocking: false
  },
  "axe:form-field-multiple-labels": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false
  },
  "axe:frame-title": {
    roles: [ROLES.DEV, ROLES.CONTENT],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "axe:heading-order": {
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false
  },
  "axe:html-has-lang": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "axe:image-alt": {
    roles: [ROLES.CONTENT],
    severity: SEVERITY.CRITICAL,
    blocking: true
  },
  "axe:input-image-alt": {
    roles: [ROLES.CONTENT, ROLES.DEV],
    severity: SEVERITY.CRITICAL,
    blocking: true
  },
  "axe:label": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.CRITICAL,
    blocking: true
  },
  "axe:link-name": {
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.SERIOUS,
    blocking: true
  },
  "axe:list": {
    roles: [ROLES.CONTENT, ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "axe:listitem": {
    roles: [ROLES.CONTENT, ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "axe:meta-viewport": {
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.CRITICAL,
    blocking: true
  },
  "axe:tabindex": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: true
  },
  "axe:td-headers-attr": {
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "axe:valid-lang": {
    roles: [ROLES.CONTENT, ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "axe:video-caption": {
    roles: [ROLES.CONTENT],
    severity: SEVERITY.CRITICAL,
    blocking: true
  },

  // --- ALFA (SIA) rules ---
  "alfa:sia-r1": { // Unique IDs
    roles: [ROLES.DEV],
    severity: SEVERITY.MINOR,
    blocking: false
  },
  "alfa:sia-r2": { // lang attribute
    roles: [ROLES.DEV],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "alfa:sia-r4": { // Page title
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "alfa:sia-r8": { // Form elements labeled
    roles: [ROLES.DEV, ROLES.UX],
    severity: SEVERITY.CRITICAL,
    blocking: true
  },
  "alfa:sia-r11": { // Button has accessible name
    roles: [ROLES.DEV, ROLES.CONTENT],
    severity: SEVERITY.CRITICAL,
    blocking: true
  },
  "alfa:sia-r12": { // Link has accessible name
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.SERIOUS,
    blocking: true
  },
  "alfa:sia-r14": { // Image has accessible name
    roles: [ROLES.CONTENT],
    severity: SEVERITY.CRITICAL,
    blocking: true
  },
  "alfa:sia-r53": { // Heading hierarchy
    roles: [ROLES.CONTENT, ROLES.UX],
    severity: SEVERITY.MODERATE,
    blocking: false
  },
  "alfa:sia-r62": { // Links are distinguishable
    roles: [ROLES.VISUAL, ROLES.UX],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "alfa:sia-r66": { // Contrast (enhanced)
    roles: [ROLES.VISUAL],
    severity: SEVERITY.MODERATE,
    blocking: false
  },
  "alfa:sia-r69": { // Contrast (minimum)
    roles: [ROLES.VISUAL],
    severity: SEVERITY.SERIOUS,
    blocking: false
  },
  "alfa:sia-r111": { // Target size
    roles: [ROLES.UX, ROLES.VISUAL],
    severity: SEVERITY.SERIOUS,
    blocking: true
  }
};

/**
 * Get metadata for a rule from any engine
 * @param {string} engine - Engine name ('axe', 'alfa', 'equalAccess')
 * @param {string} ruleId - Rule ID
 * @returns {Object} Metadata object
 */
export function getRuleMetadata(engine, ruleId) {
  const normalizedEngine = engine.toLowerCase();
  const key = `${normalizedEngine}:${ruleId.toLowerCase()}`;
  
  // Try exact match
  if (ruleMapping[key]) {
    return ruleMapping[key];
  }
  
  // For ALFA, handle full URLs if passed
  if (normalizedEngine === 'alfa' && ruleId.startsWith('http')) {
    const match = ruleId.match(/sia-r(\d+)$/);
    if (match) {
      const siaKey = `alfa:sia-r${match[1]}`;
      if (ruleMapping[siaKey]) return ruleMapping[siaKey];
    }
  }

  return DEFAULT_MAPPING;
}
