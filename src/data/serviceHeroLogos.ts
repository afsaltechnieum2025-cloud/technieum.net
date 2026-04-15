/**
 * Hero / hub artwork for service lanes. Files live in `public/serviceslogo/`.
 */

/** Standalone red line-art mark (same asset as ICS / OT program hero). */
const ICS_OT_LINE_MARK = '/serviceslogo/iot-3-2.svg' as const

const BY_SLUG: Partial<Record<string, string>> = {
  'technieum-infrastructure-network': '/serviceslogo/network-pen-testing-hero.svg',
  'technieum-application-security': '/serviceslogo/application-penetration-testing-hero-1.svg',
  'technieum-cloud-security': '/serviceslogo/cloud-hero.svg',
  'technieum-ai-security': `/serviceslogo/${encodeURIComponent('LLM Image.svg')}`,
  'technieum-ics-ot-security': ICS_OT_LINE_MARK,
}

/** Lanes without a dedicated mark yet: reuse ICS/OT line-art so hub + heroes match that treatment (not raster). */
const PROGRAM_HERO_EXTRA: Partial<Record<string, string>> = {
  'technieum-threat-simulations': ICS_OT_LINE_MARK,
  'technieum-security-consulting': ICS_OT_LINE_MARK,
  'technieum-wfh-security': ICS_OT_LINE_MARK,
}

/**
 * Program hero, services catalog column, and capabilities hub icons:
 * dedicated lane art in `public/serviceslogo/`, with a few lanes sharing the ICS/OT SVG until per-lane marks exist.
 */
export function getServiceProgramHeroLogoSrc(slug: string): string | undefined {
  return PROGRAM_HERO_EXTRA[slug] ?? BY_SLUG[slug]
}
