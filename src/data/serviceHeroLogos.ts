/**
 * Hero / hub artwork for service lanes. Marks live in `public/png/` (URL-encoded filenames where needed).
 */

function png(name: string): string {
  return `/png/${encodeURIComponent(name)}`
}

/** Shared artwork for threat-style lanes until each has its own mark. */
const THREAT_SIMULATIONS_PNG = png('Threat simulations.png')

const BY_SLUG: Partial<Record<string, string>> = {
  'technieum-infrastructure-network': png('Infrastructure network.png'),
  'technieum-application-security': png('Application security.png'),
  'technieum-cloud-security': png('Cloud security.png'),
  'technieum-ai-security': png('AI security.png'),
  'technieum-ics-ot-security': THREAT_SIMULATIONS_PNG,
}

/** Program-only slugs or aliases mapped to shared hero art. */
const PROGRAM_HERO_EXTRA: Partial<Record<string, string>> = {
  'technieum-threat-simulations': THREAT_SIMULATIONS_PNG,
  'technieum-security-consulting': THREAT_SIMULATIONS_PNG,
  'technieum-wfh-security': THREAT_SIMULATIONS_PNG,
}

/**
 * Program hero, services catalog column, and capabilities hub icons.
 */
export function getServiceProgramHeroLogoSrc(slug: string): string | undefined {
  return PROGRAM_HERO_EXTRA[slug] ?? BY_SLUG[slug]
}
