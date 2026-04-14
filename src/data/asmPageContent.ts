/**
 * Marketing / product page copy aligned to Technieum-X (ASM) positioning and public/docs/ASM.pdf themes.
 * ASCII-only strings for the UI.
 */

export const ASM_PAGE_META = {
  confidentialNote:
    'Overview for client and stakeholder use. Formal statements of work govern delivery.',
} as const

export const ASM_HERO = {
  lead:
    'Technieum-X is an AI-assisted external attack surface management platform that orchestrates a large library of reconnaissance, analysis, and validation tools across a disciplined multi-phase pipeline. It turns raw internet-facing signals into correlated assets, prioritized vulnerabilities, threat context, and compliance-ready narratives that feed the OffSec Management Portal and TOIP-backed testing, instead of stopping at a flat scanner export.',
  preparedBy: 'TECHNIEUM Technologies LLC',
} as const

export const ASM_EXECUTIVE = {
  title: 'Executive summary',
  body:
    'Technieum-X (Technieum-X ASM) is the external visibility engine for organizations that need one authoritative picture of what the internet can see, what changed since the last baseline, and which exposures deserve executive attention. Discovery through DNS and technology intelligence, deep exposure analysis, and validation-oriented workflows are orchestrated as a single program so offensive teams spend time on exploitable conditions while risk teams receive defensible prioritization and framework language.',
  differentiators: [
    'Breadth with narrative: 100+ tools are correlated so high signal rises above noise for both testers and leadership.',
    'Threat and abuse context sits beside technical findings: reputation, enrichment, and CVE-oriented prioritization (CVSS, EPSS, KEV) in one place.',
    'Built to close the loop: webhooks, APIs, and streaming progress integrate with ticketing, downstream testing, and portal dashboards.',
    'Compliance-aware output: mappings to NIST CSF, PCI-DSS, HIPAA, GDPR, and SOC 2 help translate exposure into control gaps.',
  ],
} as const

export const ASM_INTERACTION = {
  title: 'How teams run Technieum-X',
  intro:
    'Operators define scope and targets, then the platform sequences discovery, analysis, enrichment, and reporting. A typical engagement flow:',
  steps: [
    'Validate targets, workspaces, and which integrated tools and API keys are available so runs degrade gracefully when optional sources are offline.',
    'Execute phased discovery: subdomains, DNS, ports, technologies, APIs, and secrets-style signals expand and then narrow the candidate surface.',
    'Run vulnerability-oriented analysis with scanner output correlated to CVEs, TLS posture, and configuration weaknesses.',
    'Enrich with threat intelligence and reputation feeds so prioritization reflects real-world abuse and known exploited conditions.',
    'Produce dashboards and exports for attack surface, vulnerabilities, attack paths, and compliance views; stream events over webhooks or SSE into the OffSec portal.',
  ],
  exampleScopes: [
    'New acquisition baseline vs. last quarter',
    'Critical business unit external perimeter',
    'API and cloud edge after major release',
    'Executive readout: top ten material exposures',
  ],
} as const

export const ASM_PIPELINE = {
  title: 'End-to-end ASM architecture',
  subtitle: 'From scope to portal-ready evidence in five coordinated stages.',
  phases: [
    {
      step: '1',
      name: 'Scope and orchestration',
      detail:
        'Targets, rate limits, and tool availability are validated. Jobs are scheduled across the integrated toolchain with progress visible to operators.',
    },
    {
      step: '2',
      name: 'Discovery and OSINT',
      detail:
        'Subdomain enumeration, DNS resolution, and OSINT-style expansion build the candidate asset graph before deeper probing.',
    },
    {
      step: '3',
      name: 'Exposure analysis',
      detail:
        'Ports, services, technologies, and vulnerability checks reduce the surface to fragile configurations and misconfigurations worth human review.',
    },
    {
      step: '4',
      name: 'Intel and CVE correlation',
      detail:
        'Reputation and abuse signals join scanner output; CVSS, EPSS, and KEV data prioritize what attackers are likely to use first.',
    },
    {
      step: '5',
      name: 'Baseline, compliance, and paths',
      detail:
        'Change detection against prior runs, control mapping for major frameworks, and attack-path storytelling feed reports and portal sync.',
    },
  ],
} as const

export const ASM_DATA_MODEL = {
  title: 'Signals, intel, and correlation',
  intro:
    'Technieum-X is not a single black-box scanner. It fuses technical reconnaissance with enrichment layers so each finding carries context suitable for triage, retest, and board-level discussion.',
  sources: [
    {
      name: 'Asset and DNS intelligence',
      description: 'Subdomains, records, resolution chains, and infrastructure relationships.',
      role: 'Defines what belongs to the program and how exposure evolves over time.',
    },
    {
      name: 'Service and technology fingerprinting',
      description: 'Ports, banners, stacks, and API-shaped endpoints.',
      role: 'Focuses tester time on technologies that match your threat model and playbook library.',
    },
    {
      name: 'Vulnerability and configuration findings',
      description: 'Scanner output correlated to CVEs, TLS issues, and fragile defaults.',
      role: 'Feeds validation workflows and TOIP-aligned exploitation narratives where appropriate.',
    },
    {
      name: 'Threat reputation and abuse feeds',
      description: 'Integrations such as GreyNoise, OTX, Abuse.ch, CrowdSec, DeHashed, and AbuseIPDB where enabled.',
      role: 'Separates internet noise from activity that implies real targeting or commodity abuse.',
    },
    {
      name: 'Prioritization signals',
      description: 'CVSS, EPSS, CISA KEV, and organizational severity policy.',
      role: 'Keeps backlogs ordered by exploitable impact rather than raw issue count.',
    },
    {
      name: 'Portal and ticketing fabric',
      description: 'Webhooks, REST APIs, and SSE streams into the OffSec Management Portal and third-party systems.',
      role: 'Owners, retests, and trends stay visible from kickoff through sign-off.',
    },
  ],
} as const

export const ASM_SCALE = {
  title: 'Scale and coverage',
  intro: 'Technieum-X is designed for recurring external programs and large candidate surfaces:',
  metrics: [
    { value: '100+', label: 'Integrated recon and analysis tools' },
    { value: '4', label: 'Core ASM phases in the hero program model' },
    { value: '10', label: 'Underlying scan and analysis phases in the technical pipeline' },
    { value: '5+', label: 'Compliance frameworks supported in mapping views' },
  ],
} as const

export const ASM_AI = {
  title: 'AI-assisted correlation, not a black box',
  intro:
    'Technieum-X uses AI where it accelerates triage and storytelling: deduplication across tools, narrative summaries for leadership, and ranking suggestions that remain tied to evidence your team can inspect. The goal is faster understanding of a noisy external surface, not undocumented scores.',
  points: [
    'Correlation across tool outputs reduces duplicate tickets and highlights compound risk (for example exposure plus known exploited CVE).',
    'Executive-friendly summaries reference the same underlying findings as operator dashboards so there is no parallel truth.',
    'Prioritization suggestions are explainable against CVE, EPSS, KEV, and intel context rather than opaque model-only scores.',
    'Human validation remains central: AI speeds sorting; testers and ASM leads confirm material risk before it becomes a commitment.',
  ],
} as const

export const ASM_OUTPUTS = {
  title: 'What stakeholders see',
  intro:
    'Deliverables are tuned for operators, program managers, and compliance stakeholders from a single run of record.',
  rows: [
    { section: 'Attack surface dashboard', contains: 'Live inventory of assets, technologies, and exposure trends across runs.' },
    {
      section: 'Vulnerability and validation views',
      contains: 'Correlated findings with severity, evidence, and state through retest.',
    },
    {
      section: 'Attack graph and path narratives',
      contains: 'Storylines from public entry points to critical issues for leadership briefings.',
    },
    {
      section: 'Compliance mapping',
      contains: 'Control-oriented views aligned to NIST CSF, PCI-DSS, HIPAA, GDPR, and SOC 2 where applicable.',
    },
    {
      section: 'Reports and exports',
      contains: 'Structured reports suitable for client deliverables and internal archives.',
    },
    {
      section: 'Streaming and APIs',
      contains: 'Webhooks, APIs, and SSE for portal sync, ticketing, and custom automation.',
    },
    {
      section: 'Change detection',
      contains: 'Baselines and alerts when new hosts, services, or critical findings appear.',
    },
    {
      section: 'TOIP handoff',
      contains: 'Surface-specific context can feed TOIP and manual testing with consistent language.',
    },
  ],
} as const

export const ASM_TECH_STACK = {
  title: 'Technical stack (representative)',
  rows: [
    { layer: 'Orchestration', technology: 'Multi-phase job engine with tool adapters and queue-backed workers' },
    { layer: 'Data store', technology: 'Relational metadata for assets, findings, runs, and baselines' },
    { layer: 'Integrations', technology: '100+ tool and API connectors with graceful degradation when keys are absent' },
    { layer: 'Real-time', technology: 'Webhooks and server-sent events for live progress and portal consumption' },
    { layer: 'APIs', technology: 'REST surfaces for automation, export, and third-party SOAR-style hooks' },
    { layer: 'AI layer', technology: 'Correlation, summarization, and ranking assistance over structured finding data' },
    { layer: 'Deployment', technology: 'Container-friendly deployment patterns for dedicated ASM infrastructure' },
  ],
} as const

export const ASM_USE_CASES = {
  title: 'Example use cases',
  cases: [
    {
      query: 'Executive visibility',
      outcome:
        'A single pane for how the organization looks from the internet right now, with top risks and trend lines suitable for board updates.',
    },
    {
      query: 'Attack-path storytelling',
      outcome:
        'Narratives from exposed assets through chained weaknesses so red and purple teams align on the same critical paths.',
    },
    {
      query: 'Compliance evidence',
      outcome:
        'Map failing technical controls to exposed or unpatched systems with framework language risk teams already use.',
    },
    {
      query: 'Post-M&A baseline',
      outcome:
        'Rapid union of acquired domains and infrastructure into one correlated surface before integration deadlines.',
    },
    {
      query: 'Continuous external monitoring',
      outcome:
        'Scheduled baselines with alerts when new high-risk services or KEV-linked issues appear on the perimeter.',
    },
    {
      query: 'Portal-integrated retests',
      outcome:
        'Findings sync to the OffSec Management Portal with owners and retest states visible through sign-off.',
    },
  ],
} as const

export const ASM_CLOSING = {
  paragraph:
    'Technieum-X combines broad external reconnaissance with threat context, CVE-aware prioritization, and portal-native workflows. It is the visibility layer that keeps ASM, validation, and TOIP-backed intelligence aligned on one story about your real attack surface.',
} as const
