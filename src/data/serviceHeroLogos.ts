/**
 * Hero / hub artwork for service lanes. Marks live in `public/png/` (URL-encoded filenames where needed).
 *
 * For faster loads: compress PNGs (e.g. oxipng, TinyPNG), export WebP/AVIF alongside and serve via
 * `<picture>` or a CDN with automatic format negotiation; keep display dimensions modest vs. file pixels.
 */

function png(name: string): string {
  return `/png/${encodeURIComponent(name)}`
}

const THREAT_SIMULATIONS_PNG = png('Threat simulations.png')

const BY_SLUG: Partial<Record<string, string>> = {
  'technieum-infrastructure-network': png('Infrastructure network.png'),
  'technieum-application-security': png('Application security.png'),
  'technieum-cloud-security': png('Cloud security.png'),
  'technieum-ai-security': png('AI security.png'),
  'technieum-threat-simulations': THREAT_SIMULATIONS_PNG,
  'technieum-ics-ot-security': png('ICS.png'),
  'technieum-security-consulting': png('SC.png'),
  'technieum-wfh-security': png('WFH.png'),
}

/**
 * Program hero, services catalog column, and capabilities hub icons.
 */
export function getServiceProgramHeroLogoSrc(slug: string): string | undefined {
  return BY_SLUG[slug]
}
