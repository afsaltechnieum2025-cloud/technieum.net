/**
 * Program hub pages for service PDFs under public/servicedocumentfolder/
 * Default PDF: `${slug}.pdf`
 */

export function serviceProgramPath(slug: string): string {
  return `/services/${slug}`
}

export type ProgramHubVisualNode = { t1: string; t2: string }

export type ProgramHubConfig = {
  visualAriaLabel: string
  hero: { eyebrow: string; title: string; lead: string; sub: string }
  pillars: readonly { id: string; title: string; accent: string; body: string }[]
  outcomes: readonly { title: string; body: string }[]
  deliverables: readonly string[]
  visualNodes: readonly [ProgramHubVisualNode, ProgramHubVisualNode, ProgramHubVisualNode, ProgramHubVisualNode]
}

/** Used by ApplicationSecurityPage and the generic program hub map. */
export const applicationSecurityHubConfig: ProgramHubConfig = {
  visualAriaLabel:
    'Diagram: web and thick client, API, mobile, and code assurance streams consolidating in the OffSec Management Portal.',
  hero: {
    eyebrow: 'Application security',
    title: 'Application security',
    lead:
      'Browser, API, mobile, architecture, and code-level testing with exploitability you can defend in sprint planning and release gates.',
    sub:
      'Structured to align with the application security datasheet: OWASP-aligned cases, AI-assisted SAST and SCA where they help, and human validation before severity hits your backlog.',
  },
  visualNodes: [
    { t1: 'Web / client', t2: 'Browser apps' },
    { t1: 'API', t2: 'REST / GraphQL' },
    { t1: 'Mobile', t2: 'iOS / Android' },
    { t1: 'Code', t2: 'SAST / SCA' },
  ],
  pillars: [
    {
      id: 'web',
      title: 'Web and thick client',
      accent: 'OWASP ASVS',
      body: 'Authentication, session handling, business logic, injection classes, and client-side risks tested with evidence your developers can reproduce.',
    },
    {
      id: 'api',
      title: 'API penetration testing',
      accent: 'Schema and auth',
      body: 'REST, GraphQL, and SOAP surfaces stressed for broken object level authorization, schema abuse, and backend trust assumptions.',
    },
    {
      id: 'mobile',
      title: 'Mobile applications',
      accent: 'MASVS themes',
      body: 'Storage, transport, reverse-engineering resistance, and API-backed trust paths for builds you intend to ship or already have in production.',
    },
    {
      id: 'architecture',
      title: 'Architecture review',
      accent: 'Design phase',
      body: 'Trust boundaries, data flows, and control selection before code hardens in the wrong direction.',
    },
    {
      id: 'code',
      title: 'AI SAST and SCA',
      accent: 'Triage',
      body: 'Static and composition findings correlated with dynamic proof so engineering effort lands on real chains, not rule noise.',
    },
  ],
  outcomes: [
    {
      title: 'Developer-ready findings',
      body: 'Requests, responses, code pointers, and fix patterns sized for tickets and CI annotations where you want them.',
    },
    {
      title: 'One backlog story',
      body: 'Web, API, mobile, and code issues scored consistently and visible in the OffSec Management Portal.',
    },
    {
      title: 'Board-safe narrative',
      body: 'Executive framing plus technical traceability for risk and compliance stakeholders.',
    },
  ],
  deliverables: [
    'Scope and rules of engagement aligned to environments, roles, and release cadence.',
    'Technical report with CVSS, CWE, and reproduction bundles for critical issues.',
    'Architecture memo when design-phase review is in scope.',
    'SAST or SCA summary with deduplicated priorities when code streams apply.',
    'Portal access for tracking, retest, and closure evidence.',
  ],
}

/** Used by CloudSecurityPage and the generic program hub map. */
export const cloudSecurityHubConfig: ProgramHubConfig = {
  visualAriaLabel:
    'Diagram: IAM, workloads, pipeline, and secrets streams consolidating in the OffSec Management Portal.',
  hero: {
    eyebrow: 'Cloud and platform',
    title: 'Cloud security',
    lead:
      'Multi-cloud and hybrid assessments that follow identity, workload, and pipeline trust the way cloud breakouts actually unfold.',
    sub:
      'Matches the cloud security datasheet: provider-native checks, Kubernetes and container depth where in scope, and reporting operators can patch against.',
  },
  visualNodes: [
    { t1: 'IAM', t2: 'Roles / federation' },
    { t1: 'Workloads', t2: 'K8s / VMs' },
    { t1: 'Pipeline', t2: 'CI / CD' },
    { t1: 'Secrets', t2: 'Stores / keys' },
  ],
  pillars: [
    {
      id: 'iam',
      title: 'Identity and access',
      accent: 'Blast radius',
      body: 'Federation, service accounts, privilege paths, and misconfigurations that expand impact across accounts and subscriptions.',
    },
    {
      id: 'workloads',
      title: 'Workloads and containers',
      accent: 'Runtime',
      body: 'Cluster posture, admission controls, workload identity, and breakout patterns from app to control plane where applicable.',
    },
    {
      id: 'pipeline',
      title: 'CI/CD and supply chain',
      accent: 'Build integrity',
      body: 'Pipelines, artifacts, signing, and dependency paths that could tamper with what you deploy.',
    },
    {
      id: 'secrets',
      title: 'Secrets and configuration',
      accent: 'Sprawl control',
      body: 'Secret stores, rotation gaps, and leaked credentials across build and runtime estates.',
    },
    {
      id: 'hybrid',
      title: 'Hybrid connectivity',
      accent: 'Trust bridges',
      body: 'On-prem to cloud paths, VPNs, and peering that change where an attacker can pivot after initial access.',
    },
  ],
  outcomes: [
    {
      title: 'Provider-aware fixes',
      body: 'Remediation references your stacks (Terraform, ARM, console patterns) instead of generic cloud slogans.',
    },
    {
      title: 'Single program view',
      body: 'IAM, workload, and pipeline findings correlated in the portal with shared severity.',
    },
    {
      title: 'Executive clarity',
      body: 'Narratives that translate technical cloud risk for committees funding remediation.',
    },
  ],
  deliverables: [
    'Cloud-focused technical report with IAM and exposure summaries where relevant.',
    'Kubernetes or pipeline hardening notes with evidence when in scope.',
    'Secrets and rotation recommendations tied to observed misuse.',
    'Executive summary suitable for risk forums.',
    'Portal dashboards, retest workflow, and closure trails.',
  ],
}

/** Used by AiSecurityPage and the generic program hub map. */
export const aiSecurityHubConfig: ProgramHubConfig = {
  visualAriaLabel:
    'Diagram: model endpoints, tools and MCP, prompt testing, and governance hooks consolidating in the OffSec Management Portal.',
  hero: {
    eyebrow: 'AI and LLM',
    title: 'AI security',
    lead:
      'LLM applications, agents, and integrations tested for prompt abuse, unsafe tool use, and data handling with probes staged under your governance rules.',
    sub:
      'Aligned to the AI security datasheet: coverage mapped to OWASP LLM themes and NIST AI RMF-friendly language for policy teams.',
  },
  visualNodes: [
    { t1: 'Endpoints', t2: 'LLM APIs' },
    { t1: 'Tools', t2: 'MCP / plugins' },
    { t1: 'Prompts', t2: 'Attack suites' },
    { t1: 'Governance', t2: 'Guardrails' },
  ],
  pillars: [
    {
      id: 'llm',
      title: 'LLM and agentic testing',
      accent: 'Prompt and tool',
      body: 'Injection, exfiltration, and escalation paths exercised with reproducible transcripts suitable for model owners.',
    },
    {
      id: 'mcp',
      title: 'MCP and integrations',
      accent: 'Trust boundaries',
      body: 'Model Context Protocol and plugin surfaces reviewed for confused deputy and lateral access into internal systems.',
    },
    {
      id: 'rag',
      title: 'RAG and data exposure',
      accent: 'Data paths',
      body: 'Retrieval and grounding paths assessed for leakage and unauthorized context where architecture allows.',
    },
    {
      id: 'threat',
      title: 'AI-enhanced threat modelling',
      accent: 'Workshops',
      body: 'Facilitated scenarios with breadth from AI assistance and prioritization from your operators.',
    },
    {
      id: 'remediation',
      title: 'Remediation guidance',
      accent: 'Safe patterns',
      body: 'Guardrails, monitoring, and human-in-the-loop patterns instead of generic model-swap advice.',
    },
  ],
  outcomes: [
    {
      title: 'Responsible evidence',
      body: 'Sanitized deliverables that avoid leaking sensitive prompts or customer content.',
    },
    {
      title: 'Framework vocabulary',
      body: 'Findings mapped to language risk and security committees already use for AI programs.',
    },
    {
      title: 'Portal tracking',
      body: 'Issues, owners, and retest states visible alongside traditional app and cloud streams when combined.',
    },
  ],
  deliverables: [
    'Rules of engagement covering prohibited probes and escalation for AI systems.',
    'Technical findings with prompts, tool traces, or integration notes as appropriate.',
    'Threat modelling readout when workshop scope applies.',
    'Executive summary for AI governance stakeholders.',
    'Portal access for lifecycle tracking.',
  ],
}

/** Used by ThreatSimulationsPage and the generic program hub map. */
export const threatSimulationsHubConfig: ProgramHubConfig = {
  visualAriaLabel:
    'Diagram: red team, purple team, tabletop, and BAS streams consolidating in the OffSec Management Portal.',
  hero: {
    eyebrow: 'Threat simulations',
    title: 'Threat simulations',
    lead:
      'Red team, purple team, tabletops, and BAS-style programs scoped to objectives, detection goals, and leadership reporting you can reuse quarter to quarter.',
    sub:
      'Built from the threat simulations datasheet: safe execution, clear abort criteria, and outcomes that improve detection and response, not just slide decks.',
  },
  visualNodes: [
    { t1: 'Red team', t2: 'Objectives' },
    { t1: 'Purple', t2: 'Joint detect' },
    { t1: 'Tabletop', t2: 'Crisis' },
    { t1: 'BAS', t2: 'Program' },
  ],
  pillars: [
    {
      id: 'red',
      title: 'Red team and assumed breach',
      accent: 'Full chain',
      body: 'Adversary emulation aligned to your threat model with controlled scope and comms cadence for leadership.',
    },
    {
      id: 'purple',
      title: 'Purple team exercises',
      accent: 'Detect and tune',
      body: 'Operator actions paired with defenders to turn telemetry into concrete detection and playbook improvements.',
    },
    {
      id: 'tabletop',
      title: 'Incident response tabletops',
      accent: 'Crisis play',
      body: 'Facilitated scenarios for executives and technical teams with clear after-action themes.',
    },
    {
      id: 'bas',
      title: 'BAS program support',
      accent: 'Continuous',
      body: 'Structure, metrics, and purple tie-ins so simulation investments show measurable uplift.',
    },
    {
      id: 'governance',
      title: 'Governance and safety',
      accent: 'ROE',
      body: 'Legal, third-party, and production safety captured up front with documented abort paths.',
    },
  ],
  outcomes: [
    {
      title: 'Detection engineering payoff',
      body: 'Concrete backlog items for rules, playbooks, and visibility gaps validated during exercise windows.',
    },
    {
      title: 'Leadership-ready outbriefs',
      body: 'Strategic and technical layers separated so investment decisions stay traceable.',
    },
    {
      title: 'Portal continuity',
      body: 'Artifacts and follow-ups tracked like any other offensive stream when you want one operating rhythm.',
    },
  ],
  deliverables: [
    'Rules of engagement and communications plan.',
    'Operator timeline and detection notes for purple or red engagements.',
    'Executive outbrief and technical annex.',
    'Tabletop after-action summary when applicable.',
    'BAS roadmap or metrics pack when BAS support is in scope.',
  ],
}

export const icsOtSecurityHubConfig: ProgramHubConfig = {
  visualAriaLabel:
    'Diagram: safety scope, OT segmentation, protocols, and IT-OT bridge consolidating in the OffSec Management Portal.',
  hero: {
    eyebrow: 'ICS and OT',
    title: 'ICS OT Security',
    lead:
      'Industrial assessments that respect safety and uptime while still surfacing segmentation, access, and protocol risks that matter to plant and enterprise teams.',
    sub:
      'Grounded in the ICS OT datasheet: staged methods, explicit no-go zones, and evidence operators can reconcile with PAS and engineering reality.',
  },
  visualNodes: [
    { t1: 'Safety', t2: 'Scope / ROE' },
    { t1: 'OT zone', t2: 'Segmentation' },
    { t1: 'Protocols', t2: 'Field / SCADA' },
    { t1: 'IT-OT', t2: 'Bridge' },
  ],
  pillars: [
    {
      id: 'safety',
      title: 'Safety-aware testing',
      accent: 'Non-disruptive',
      body: 'Methods chosen to avoid process impact with freeze windows and engineering sign-off where required.',
    },
    {
      id: 'segmentation',
      title: 'Segmentation and access',
      accent: 'Zones',
      body: 'Firewalling, remote access, and jump paths reviewed between IT, DMZ, and OT layers.',
    },
    {
      id: 'protocols',
      title: 'Protocols and devices',
      accent: 'Field gear',
      body: 'Relevant industrial protocols and asset classes reviewed for weak authentication, cleartext, and misconfiguration.',
    },
    {
      id: 'bridge',
      title: 'IT-OT pivot risk',
      accent: 'Lateral story',
      body: 'Paths from enterprise compromise into control environments narrated with blast-radius context.',
    },
    {
      id: 'remediation',
      title: 'Hardening priorities',
      accent: 'Practical',
      body: 'Recommendations aligned to maintenance windows and vendor constraints, not textbook-only advice.',
    },
  ],
  outcomes: [
    {
      title: 'Plant-credible reporting',
      body: 'Language and evidence that PAS and engineering leads can use without translating from pure IT pentest style.',
    },
    {
      title: 'Risk prioritization',
      body: 'Issues ordered by safety and operational impact, not generic CVSS alone.',
    },
    {
      title: 'Audit support',
      body: 'Artifacts suitable for regulatory or insurance follow-up when you need them.',
    },
  ],
  deliverables: [
    'OT-specific scope and safety acknowledgements.',
    'Network and segmentation diagrams for complex environments.',
    'Technical findings with protocol or device context.',
    'Remediation matrix with engineering-oriented notes.',
    'Portal tracking when combined with broader programs.',
  ],
}

export const securityConsultingHubConfig: ProgramHubConfig = {
  visualAriaLabel:
    'Diagram: strategy, architecture, program design, and compliance narrative consolidating in the OffSec Management Portal.',
  hero: {
    eyebrow: 'Security consulting',
    title: 'Security consulting',
    lead:
      'Strategy, architecture, and program design that connect offensive investment to business risk, compliance asks, and how your teams actually operate.',
    sub:
      'Matches the security consulting datasheet: workshops, roadmaps, and board-ready materials without replacing hands-on testing when you still need it.',
  },
  visualNodes: [
    { t1: 'Strategy', t2: 'Roadmap' },
    { t1: 'Architecture', t2: 'Controls' },
    { t1: 'Program', t2: 'Operating model' },
    { t1: 'Compliance', t2: 'Narrative' },
  ],
  pillars: [
    {
      id: 'strategy',
      title: 'Offensive strategy',
      accent: 'Investment',
      body: 'Prioritization of testing types, frequency, and coverage based on threat and regulatory context.',
    },
    {
      id: 'architecture',
      title: 'Security architecture',
      accent: 'Design',
      body: 'Control selection, trust zones, and technology choices reviewed before major spend locks in.',
    },
    {
      id: 'program',
      title: 'Program operating model',
      accent: 'Run',
      body: 'Roles, vendor orchestration, and metrics so offensive work stops being ad hoc.',
    },
    {
      id: 'compliance',
      title: 'Compliance alignment',
      accent: 'Evidence',
      body: 'Mapping testing and outcomes to frameworks your auditors and regulators expect.',
    },
    {
      id: 'workshops',
      title: 'Executive and board workshops',
      accent: 'Enablement',
      body: 'Sessions that translate technical risk into decisions non-technical stakeholders can own.',
    },
  ],
  outcomes: [
    {
      title: 'Fundable roadmaps',
      body: 'Backlogs and timelines leadership can attach budget and owners to.',
    },
    {
      title: 'Aligned narratives',
      body: 'Security story consistent from board slides through engineering execution.',
    },
    {
      title: 'Bridge to delivery',
      body: 'Clear handoff into Technieum testing lines or your internal teams when execution starts.',
    },
  ],
  deliverables: [
    'Workshop readouts and decision logs.',
    'Architecture assessment memo or diagram set.',
    'Program playbook for recurring offensive activity.',
    'Compliance mapping appendix when required.',
    'Optional portal templates for ongoing tracking.',
  ],
}

export const wfhSecurityHubConfig: ProgramHubConfig = {
  visualAriaLabel:
    'Diagram: remote identity, endpoints, collaboration, and phishing resilience consolidating in the OffSec Management Portal.',
  hero: {
    eyebrow: 'Workforce and remote',
    title: 'WFH security',
    lead:
      'Distributed workforce assurance: identity and access for home offices, endpoint and collaboration posture, and phishing resilience at scale.',
    sub:
      'Structured per the WFH security datasheet: metrics that inform control investment, ethical social-engineering options where approved, and retest evidence for closure.',
  },
  visualNodes: [
    { t1: 'Identity', t2: 'Remote IAM' },
    { t1: 'Endpoints', t2: 'Device posture' },
    { t1: 'Collab', t2: 'SaaS / chat' },
    { t1: 'Phishing', t2: 'Resilience' },
  ],
  pillars: [
    {
      id: 'identity',
      title: 'Remote identity and access',
      accent: 'MFA / SSO',
      body: 'Conditional access, device trust, and break-glass paths reviewed for how staff actually work from home.',
    },
    {
      id: 'endpoints',
      title: 'Endpoint posture',
      accent: 'BYOD / COPE',
      body: 'Configuration, patching, and EDR alignment for laptops and mobile used off corporate networks.',
    },
    {
      id: 'collab',
      title: 'Collaboration tools',
      accent: 'SaaS',
      body: 'File sharing, guest access, and admin roles in platforms that replaced the hallway conversation.',
    },
    {
      id: 'phishing',
      title: 'Phishing and social engineering',
      accent: 'Ethical tests',
      body: 'Pre-approved campaigns with metrics that drive MFA and training investment, not blame.',
    },
    {
      id: 'retest',
      title: 'Retest and closure',
      accent: 'Proof',
      body: 'Validation after control changes so distributed risk programs show progress to leadership.',
    },
  ],
  outcomes: [
    {
      title: 'Human-centered metrics',
      body: 'Aggregate trends that steer budget without unnecessary individual surveillance.',
    },
    {
      title: 'IT and HR alignment',
      body: 'Recommendations that reference identity, endpoint, and awareness stacks together.',
    },
    {
      title: 'Portal-ready tracking',
      body: 'Campaign and finding lifecycle visible alongside other offensive streams if you combine programs.',
    },
  ],
  deliverables: [
    'Scope covering regions, populations, and approved campaign types.',
    'Assessment or campaign report with leadership narrative.',
    'Remediation plan across technology and process.',
    'Retest memo when re-validation is in scope.',
    'Sales pitch or policy addenda for stakeholder packs when needed.',
  ],
}

export const GENERIC_PROGRAM_HUB_CONFIGS: Record<string, ProgramHubConfig> = {
  'technieum-application-security': applicationSecurityHubConfig,
  'technieum-cloud-security': cloudSecurityHubConfig,
  'technieum-ai-security': aiSecurityHubConfig,
  'technieum-threat-simulations': threatSimulationsHubConfig,
  'technieum-ics-ot-security': icsOtSecurityHubConfig,
  'technieum-security-consulting': securityConsultingHubConfig,
  'technieum-wfh-security': wfhSecurityHubConfig,
}

export function getProgramHubConfig(slug: string): ProgramHubConfig | undefined {
  return GENERIC_PROGRAM_HUB_CONFIGS[slug]
}
