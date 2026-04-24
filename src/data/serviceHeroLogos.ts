/**
 * Hero / hub artwork for service lanes. Most marks live in `public/png/`; ICS/OT and a few shared lanes still use `public/serviceslogo/`.
 */

function png(name: string): string {
  return `/png/${encodeURIComponent(name)}`
}

/** Standalone red line-art mark (same asset as ICS / OT program hero). No matching PNG in `public/png/` yet. */
const ICS_OT_LINE_MARK = '/serviceslogo/iot-3-2.svg' as const

const BY_SLUG: Partial<Record<string, string>> = {
  'technieum-infrastructure-network': png('Infrastructure network.png'),
  'technieum-application-security': png('Application security.png'),
  'technieum-cloud-security': png('Cloud security.png'),
  'technieum-ai-security': png('AI security.png'),
  'technieum-ics-ot-security': ICS_OT_LINE_MARK,
}

/** Lanes without a dedicated PNG yet: reuse ICS/OT line-art so hub + heroes match that treatment. */
const PROGRAM_HERO_EXTRA: Partial<Record<string, string>> = {
  'technieum-threat-simulations': png('Threat simulations.png'),
  'technieum-security-consulting': ICS_OT_LINE_MARK,
  'technieum-wfh-security': ICS_OT_LINE_MARK,
}

/**
 * Program hero, services catalog column, and capabilities hub icons:
 * PNG marks in `public/png/` where available; otherwise shared SVG in `public/serviceslogo/`.
 */
export function getServiceProgramHeroLogoSrc(slug: string): string | undefined {
  return PROGRAM_HERO_EXTRA[slug] ?? BY_SLUG[slug]
}
