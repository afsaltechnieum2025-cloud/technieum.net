/**
 * ASM portal launch system log (canonical copy for suite redirect + product page preview).
 * ASCII-only.
 */
export const ASM_LAUNCH_SCAN_LINES = [
  'Initializing recon modules...',
  'Loading subdomain enumeration engine...',
  'Connecting to threat intelligence feeds...',
  'Bootstrapping vulnerability scanner...',
  'Syncing attack surface database...',
  'Calibrating passive recon pipeline...',
  'Establishing secure tunnel...',
  'Attack Surface Management ready.',
] as const

export const ASM_LAUNCH_PHASES = ['RECON', 'INTEL', 'SCAN', 'REPORT'] as const
