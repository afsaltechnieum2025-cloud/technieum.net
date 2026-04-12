import { SERVICE_GROUPS } from './salesPitchSite'

export type ServiceMethodology = {
  slug: string
  title: string
  group: string
  summary: string
  steps: string[]
}

export function slugifyServiceLine(title: string): string {
  return title
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const DEFAULT_STEPS = [
  'Kickoff, scope, and rules of engagement aligned to your environment, risk appetite, and compliance context.',
  'Execution combining manual offensive techniques with Technieum platforms where they improve coverage and repeatability.',
  'Structured reporting with severity, reproduction evidence, and remediation guidance; optional retest after fixes.',
] as const

function defaultSummary(title: string, group: string): string {
  return `${title} is delivered under our ${group} practice. Programs emphasize safe testing windows, evidence-backed findings, and actionable outcomes for technical and leadership stakeholders.`
}

/** Richer methodology copy for high-traffic lines; others use defaults. */
const METHODOLOGY_DETAIL: Record<string, { summary: string; steps: string[] }> = {
  'web-application-penetration-testing': {
    summary:
      'Web application penetration testing evaluates browser-delivered applications end to end: authentication, session handling, business logic, injection classes, and modern client-side risks. Technieum aligns test cases to OWASP and your threat model, with manual validation so findings reflect real exploitability.',
    steps: [
      'Map URLs, roles, workflows, and integrations; confirm test accounts, data handling rules, and freeze windows.',
      'Authenticated and unauthenticated testing across access control, input handling, logic flaws, and API-backed features.',
      'Deliver prioritized findings with clear reproduction, impact, and stack-aware remediation; optional retest.',
    ],
  },
  'api-penetration-testing-rest-graphql-soap': {
    summary:
      'API testing targets REST, GraphQL, and SOAP surfaces with emphasis on schema abuse, authorization boundaries, rate limits, and data exposure. We correlate API behavior with web and mobile clients where they share backends.',
    steps: [
      'Inventory endpoints, versions, auth schemes, and trust boundaries from OpenAPI, GraphQL introspection, or traffic capture.',
      'Test IDOR, broken object level authorization, injection, mass assignment, and protocol-specific abuse patterns.',
      'Report with example requests and responses, schema or contract references, and developer-ready fix guidance.',
    ],
  },
  'mobile-application-penetration-testing': {
    summary:
      'Mobile assessments cover local storage, transport, reverse engineering resistance, jailbreak or root scenarios, and backend API trust. iOS and Android are tested with attention to platform guidelines and store readiness.',
    steps: [
      'Clarify build type, MDM constraints, and whether server-side scope is included.',
      'Static and dynamic analysis of binaries, storage, IPC, and network traffic with certificate pinning where present.',
      'Summarize issues with device-specific reproduction and links to OWASP MASVS-aligned remediation.',
    ],
  },
  'external-infrastructure-testing-asm': {
    summary:
      'External infrastructure and attack surface work discovers exposed assets, misconfigurations, and vulnerabilities from an attacker perspective. It feeds prioritization for deeper penetration testing and continuous monitoring.',
    steps: [
      'Validate in-scope hosts and domains; align discovery with ASM tooling and manual corroboration.',
      'Enumerate services, technologies, and exposures; chain findings where they increase impact.',
      'Produce an actionable surface map with severity-ranked issues and integration paths to broader programs.',
    ],
  },
  'internal-network-penetration-testing': {
    summary:
      'Internal network testing simulates an attacker with foothold or insider-level access: lateral movement, privilege escalation, segmentation weaknesses, and critical asset paths.',
    steps: [
      'Define assumed compromise model, VLANs, and crown-jewel targets; agree on safe exploitation rules.',
      'Credential handling, protocol abuse, relay and delegation issues, and service exploitation as appropriate.',
      'Narrate attack paths with evidence, blast-radius commentary, and network-hardening priorities.',
    ],
  },
  'active-directory-security-audit': {
    summary:
      'Active Directory reviews map identity risk: Kerberos, delegation, tiering, GPO, ADCS, and hybrid paths. Technieum uses evidence-first PowerShell telemetry aligned to how red teams actually abuse AD.',
    steps: [
      'Scope domains, trusts, and privileged accounts; confirm read-only versus controlled-change boundaries.',
      'Run structured checks with parallel evidence capture and weighted scoring for leadership dashboards.',
      'Deliver heatmaps, finding tables, and remediation snippets mapped to MITRE and common hardening guides.',
    ],
  },
  'ai-and-llm-penetration-testing': {
    summary:
      'LLM and AI application testing probes prompt injection, data leakage, tool use, and unsafe agent behavior using exhaustive and targeted prompt suites, with responses recorded as evidence.',
    steps: [
      'Model deployment context, tools, and data classes; set safety rails for destructive or privacy-sensitive probes.',
      'Run category-based attack streams with manual escalation on promising leads.',
      'Report with literal triggers, framework mapping (OWASP LLM Top 10, ATLAS), and safer design patterns.',
    ],
  },
  'phishing-impact-testing-including-mfa-bypass-scenarios': {
    summary:
      'Phishing impact exercises measure human and technical controls: credential capture resistance, MFA effectiveness, and post-click pathways. Scenarios are agreed in advance and executed with measured blast radius.',
    steps: [
      'Design benign but realistic lures and landing pages; obtain written approval and recipient scope.',
      'Execute the campaign with metrics on delivery, interaction, and credential or token outcomes.',
      'Debrief with awareness metrics, control gaps, and hardening recommendations without shaming individuals.',
    ],
  },
  'cloud-penetration-testing-multi-cloud': {
    summary:
      'Cloud penetration testing evaluates IAM, network exposure, storage policies, serverless edges, and control-plane misconfigurations across major providers using a combination of native tooling and offensive playbooks.',
    steps: [
      'Onboard to accounts with least-privilege roles; inventory projects, subscriptions, or accounts in scope.',
      'Test privilege paths, metadata abuse, storage exposure, and cross-service trust assumptions.',
      'Report with cloud-native remediation references and architecture diagrams where helpful.',
    ],
  },
  'container-and-kubernetes-security-assessment': {
    summary:
      'Container and Kubernetes assessments review cluster RBAC, network policies, secrets, workload identities, and supply chain hooks from both API and workload perspectives.',
    steps: [
      'Scope clusters, namespaces, and deployment models; confirm kubectl or CI access paths.',
      'Review manifests, admission controls, runtime posture, and escalation from compromised workloads.',
      'Prioritize findings by exploitability in multi-tenant or production contexts.',
    ],
  },
  'red-team-and-assumed-breach-simulation': {
    summary:
      'Red team engagements simulate realistic adversaries with defined objectives, timelines, and purple-team touchpoints. Focus stays on demonstrating impact paths rather than checklist scanning.',
    steps: [
      'Align on threat actor profile, objectives, and rules of engagement including scope and communication cadence.',
      'Execute chained objectives with operator tradecraft and logging for defender visibility exercises.',
      'Executive and technical outbrief with timeline, detection opportunities, and control investments.',
    ],
  },
}

export const SERVICE_METHODOLOGY_LIST: ServiceMethodology[] = SERVICE_GROUPS.flatMap((g) =>
  g.items.map((title) => {
    const slug = slugifyServiceLine(title)
    const custom = METHODOLOGY_DETAIL[slug]
    return {
      slug,
      group: g.heading,
      title,
      summary: custom?.summary ?? defaultSummary(title, g.heading),
      steps: custom?.steps ?? [...DEFAULT_STEPS],
    }
  }),
)

export function getServiceMethodology(slug: string): ServiceMethodology | undefined {
  return SERVICE_METHODOLOGY_LIST.find((m) => m.slug === slug)
}

export function serviceMethodologyPath(slug: string): string {
  return `/services/methodology/${slug}`
}
