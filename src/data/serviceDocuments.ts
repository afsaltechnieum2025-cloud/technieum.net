import { serviceProgramPath } from './programHubRegistry'

const FOLDER = '/servicedocumentfolder'

export type ServiceTopic = {
  slug: string
  title: string
  summary: string
  pdfFile?: string
  /** When set, services grid links here instead of opening the PDF directly. */
  detailPath?: string
}

/**
 * Technieum service PDF briefs. Files live in `public/servicedocumentfolder/`.
 * Default file name: `${slug}.pdf`. Set `pdfFile` if your filename differs.
 */
export const SERVICE_TOPICS: readonly ServiceTopic[] = [
  {
    slug: 'technieum-infrastructure-network',
    title: 'Infrastructure network',
    summary:
      'Perimeter and internal infrastructure testing, exposure and lateral-movement narratives, and hardening guidance aligned to how operators actually defend the estate.',
    detailPath: serviceProgramPath('technieum-infrastructure-network'),
  },
  {
    slug: 'technieum-application-security',
    title: 'Application security',
    summary:
      'Web, API, mobile, and related application testing with emphasis on real exploitability, business logic, and fixes your developers can ship.',
    detailPath: serviceProgramPath('technieum-application-security'),
  },
  {
    slug: 'technieum-cloud-security',
    title: 'Cloud security',
    summary:
      'Multi-cloud and hybrid reviews covering IAM, workloads, Kubernetes, pipelines, supply chain, and secrets, mapped to modern breakout and misconfiguration patterns.',
    detailPath: serviceProgramPath('technieum-cloud-security'),
  },
  {
    slug: 'technieum-ai-security',
    title: 'AI security',
    summary:
      'LLM and AI-enabled systems: prompt and tool abuse, integration trust boundaries, and safe testing practices with remediation that fits your governance model.',
    detailPath: serviceProgramPath('technieum-ai-security'),
  },
  {
    slug: 'technieum-threat-simulations',
    title: 'Threat simulations',
    summary:
      'Red team, purple team, tabletops, and attack-simulation style exercises scoped to your objectives, detection goals, and board-ready outcomes.',
    detailPath: serviceProgramPath('technieum-threat-simulations'),
  },
  {
    slug: 'technieum-ics-ot-security',
    title: 'ICS OT Security',
    summary:
      'Industrial and OT-focused assessments with safety-aware methods, segmentation and access review, and resilience priorities for control-system environments.',
    pdfFile: 'technieum-ict-ot-security.pdf',
    detailPath: serviceProgramPath('technieum-ics-ot-security'),
  },
  {
    slug: 'technieum-security-consulting',
    title: 'Security consulting',
    summary:
      'Strategy, architecture, and program advisory so offensive investment, controls, and compliance narratives line up with how your organization actually operates.',
    detailPath: serviceProgramPath('technieum-security-consulting'),
  },
  {
    slug: 'technieum-wfh-security',
    title: 'WFH security',
    summary:
      'Distributed workforce risk: identity and access for remote work, collaboration and endpoint posture, and phishing or social-engineering resilience at scale.',
    detailPath: serviceProgramPath('technieum-wfh-security'),
  },
] as const

export function serviceTopicPdfHref(topic: ServiceTopic): string {
  const file = topic.pdfFile ?? `${topic.slug}.pdf`
  return `${FOLDER}/${encodeURIComponent(file)}`
}

export function serviceTopicAnchorPath(slug: string): string {
  return `/services#${slug}`
}

export function serviceTopicNavHref(topic: ServiceTopic): string {
  return topic.detailPath ?? serviceTopicAnchorPath(topic.slug)
}
