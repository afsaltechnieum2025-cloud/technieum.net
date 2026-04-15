/**
 * Hero / hub artwork for service lanes. Files live in `public/serviceslogo/`.
 */
const BY_SLUG: Partial<Record<string, string>> = {
  'technieum-infrastructure-network': '/serviceslogo/network-pen-testing-hero.svg',
  'technieum-application-security': '/serviceslogo/application-penetration-testing-hero-1.svg',
  'technieum-cloud-security': '/serviceslogo/cloud-hero.svg',
  'technieum-ai-security': `/serviceslogo/${encodeURIComponent('LLM Image.svg')}`,
  'technieum-ics-ot-security': '/serviceslogo/iot-3-2.svg',
}

export function getServiceHeroLogoSrc(slug: string): string | undefined {
  return BY_SLUG[slug]
}
