const FOLDER = '/servicedocumentfolder'

export type ServiceTopic = {
  slug: string
  title: string
  summary: string
  pdfFile?: string
}

/**
 * Technieum service PDF briefs. Files live in `public/servicedocumentfolder/`.
 * Default file name: `${slug}.pdf`. Set `pdfFile` if your filename differs.
 */
export const SERVICE_TOPICS: readonly ServiceTopic[] = [
  {
    slug: 'technieum-master-offsec',
    title: 'Technieum master Offsec',
    summary:
      'End-to-end offensive programs: how we plan, execute, and report across streams with portal visibility, validated findings, and one coherent delivery rhythm.',
  },
  {
    slug: 'technieum-infrastructure-network',
    title: 'Technieum Infrastructure network',
    summary:
      'Perimeter and internal infrastructure testing, exposure and lateral-movement narratives, and hardening guidance aligned to how operators actually defend the estate.',
  },
  {
    slug: 'technieum-application-security',
    title: 'Technieum application security',
    summary:
      'Web, API, mobile, and related application testing with emphasis on real exploitability, business logic, and fixes your developers can ship.',
  },
  {
    slug: 'technieum-cloud-security',
    title: 'Technieum cloud security',
    summary:
      'Multi-cloud and hybrid reviews covering IAM, workloads, Kubernetes, pipelines, supply chain, and secrets, mapped to modern breakout and misconfiguration patterns.',
  },
  {
    slug: 'technieum-ai-security',
    title: 'Technieum AI security',
    summary:
      'LLM and AI-enabled systems: prompt and tool abuse, integration trust boundaries, and safe testing practices with remediation that fits your governance model.',
  },
  {
    slug: 'technieum-threat-simulations',
    title: 'Technieum threat simulations',
    summary:
      'Red team, purple team, tabletops, and attack-simulation style exercises scoped to your objectives, detection goals, and board-ready outcomes.',
  },
  {
    slug: 'technieum-ics-ot-security',
    title: 'Technieum ICS OT Security',
    summary:
      'Industrial and OT-focused assessments with safety-aware methods, segmentation and access review, and resilience priorities for control-system environments.',
  },
  {
    slug: 'technieum-security-consulting',
    title: 'Technieum Security consulting',
    summary:
      'Strategy, architecture, and program advisory so offensive investment, controls, and compliance narratives line up with how your organization actually operates.',
  },
  {
    slug: 'technieum-wfh-security',
    title: 'Technieum WFH security',
    summary:
      'Distributed workforce risk: identity and access for remote work, collaboration and endpoint posture, and phishing or social-engineering resilience at scale.',
  },
] as const

export function serviceTopicPdfHref(topic: ServiceTopic): string {
  const file = topic.pdfFile ?? `${topic.slug}.pdf`
  return `${FOLDER}/${encodeURIComponent(file)}`
}

export function serviceTopicAnchorPath(slug: string): string {
  return `/services#${slug}`
}
