/**
 * SAST portal launch system log (canonical copy for product page preview and optional suite handoff).
 * ASCII-only.
 */
export const SAST_LAUNCH_SCAN_LINES = [
  'Initializing static analysis engine...',
  'Loading AST parser modules...',
  'Connecting to vulnerability databases...',
  'Bootstrapping taint analysis pipeline...',
  'Syncing OWASP Top 10 mappings...',
  'Calibrating data flow tracking...',
  'Loading semantic analysis classifiers...',
  'Static Application Security Testing ready.',
] as const

export const SAST_LAUNCH_PHASES = ['PARSE', 'TAINT', 'POLICY', 'EXPORT'] as const
