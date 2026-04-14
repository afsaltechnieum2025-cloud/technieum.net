/**
 * Extra layout copy for Services catalog rows (tags).
 * Titles and summaries come from SERVICE_TOPICS.
 */

export const SERVICES_CATALOG_INTRO = {
  title: 'Offensive security across your attack surface',
  lead:
    'Expert-led programs for every domain you operate — applications, cloud, identity, AI, OT, simulations, consulting, and distributed workforce — with one delivery standard, portal visibility, and datasheet depth when you need procurement-ready briefs.',
  sub:
    'Open a service for the full program hub, pillars, and PDF. Each stream below mirrors how we scope, execute, and report in the field.',
} as const

export type ServiceCatalogRowMeta = {
  slug: string
  eyebrow: string
  tags: readonly string[]
}

/** Order matches SERVICE_TOPICS */
export const SERVICE_CATALOG_ROW_META: readonly ServiceCatalogRowMeta[] = [
  {
    slug: 'technieum-infrastructure-network',
    eyebrow: 'External & internal',
    tags: [
      'Perimeter & exposure testing',
      'Internal lateral movement',
      'Active Directory & identity paths',
      'Segmentation validation',
      'Asset & attack-surface mapping',
    ],
  },
  {
    slug: 'technieum-application-security',
    eyebrow: 'Web, API & mobile',
    tags: [
      'Web & thick client testing',
      'API & GraphQL review',
      'Mobile application security',
      'Business logic & abuse cases',
      'AI-assisted SAST & SCA',
    ],
  },
  {
    slug: 'technieum-cloud-security',
    eyebrow: 'Multi-cloud & hybrid',
    tags: [
      'IAM & privilege escalation',
      'Kubernetes & workloads',
      'CI/CD & supply chain',
      'Secrets & key management',
      'Cross-account pivot paths',
    ],
  },
  {
    slug: 'technieum-ai-security',
    eyebrow: 'Models, agents & pipelines',
    tags: [
      'Prompt injection & jailbreaks',
      'Tool & MCP abuse',
      'RAG & data-exfiltration paths',
      'LLM supply chain & governance',
      'Red teaming & guardrail stress tests',
    ],
  },
  {
    slug: 'technieum-threat-simulations',
    eyebrow: 'Red, purple & tabletops',
    tags: [
      'Phishing & social engineering',
      'Purple team exercises',
      'Tabletop simulations',
      'BAS-style attack simulation',
      'Detection & response validation',
    ],
  },
  {
    slug: 'technieum-ics-ot-security',
    eyebrow: 'Safety-aware OT',
    tags: [
      'IT–OT segmentation review',
      'Industrial protocols & devices',
      'Remote access & jump paths',
      'Non-disruptive assessment methods',
      'Engineering-aligned remediation',
    ],
  },
  {
    slug: 'technieum-security-consulting',
    eyebrow: 'Strategy & architecture',
    tags: [
      'Offensive roadmap & investment',
      'Security architecture review',
      'Program operating model',
      'Compliance mapping',
      'Executive & board workshops',
    ],
  },
  {
    slug: 'technieum-wfh-security',
    eyebrow: 'Remote workforce',
    tags: [
      'Identity & conditional access',
      'Endpoint & BYOD posture',
      'Collaboration & SaaS exposure',
      'Phishing resilience testing',
      'Retest & closure evidence',
    ],
  },
] as const
