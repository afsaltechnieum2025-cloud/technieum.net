import type { ProductDocId } from './productDocuments'

export type ProductPitchPage = {
  id: ProductDocId
  heroEyebrow: string
  heroTitle: string
  heroLead: string
  pitchMetrics: { value: string; label: string }[]
  elevator: string
  pillars: { title: string; body: string }[]
  deepDive: { title: string; paragraphs: string[] }[]
  portalFit: string
  ctaLine: string
}

export const PRODUCT_PITCH_PAGES: Record<ProductDocId, ProductPitchPage> = {
  toip: {
    id: 'toip',
    heroEyebrow: 'Technieum Offensive Security Intelligence Portal',
    heroTitle: 'ToIP: RAG-backed vulnerability intelligence at query speed',
    heroLead:
      'Semantic search across 15,000+ real-world disclosed vulnerabilities delivers instant attack playbooks with exact payloads, WAF bypass techniques, and chained exploit sequences. Hours of research collapse into one grounded query.',
    pitchMetrics: [
      { value: '15,000+', label: 'Disclosed vulnerability reports (corpus scale)' },
      { value: 'RAG', label: 'Semantic search and citations' },
      { value: 'Playbooks', label: 'Payloads, bypasses, chains' },
    ],
    elevator:
      'ToIP is the research brain behind Technieum engagements: it frames scenarios, surfaces proven tradecraft, and keeps deliverables aligned to what actually worked in the field.',
    pillars: [
      {
        title: 'Intel that reads like an operator wrote it',
        body:
          'Curated disclosure narratives, templates, and retrieval pipelines are tuned for offensive workflows, not generic search snippets.',
      },
      {
        title: 'From question to action',
        body:
          'Structured outputs support summaries, tooling notes, next steps, and client-ready markdown so teams move faster under deadline.',
      },
      {
        title: 'Feeds the OffSec Management Portal',
        body:
          'Findings and playbooks tie into centralized tracking, scoring, and retest so intelligence is not trapped in static documents.',
      },
    ],
    deepDive: [
      {
        title: 'How ToIP shows up on engagements',
        paragraphs: [
          'During scoping and testing, analysts use ToIP to align test cases to real disclosure patterns: same classes of flaws, same bypass families, same chain logic that showed up in production incidents.',
          'ToIP complements automated scanning by explaining why a finding matters, how others exploited similar conditions, and which payloads or sequences are most relevant to your stack.',
        ],
      },
      {
        title: 'Trust and evidence',
        paragraphs: [
          'Retrieval-augmented generation keeps answers anchored to the corpus you can cite in reports. That discipline matters when legal, compliance, or customer security teams scrutinize recommendations.',
          'For a full technical breakdown of pipelines, sources, and export formats, use the downloadable technical overview PDF from this page or the home overview cards.',
        ],
      },
    ],
    portalFit:
      'ToIP intelligence is designed to plug into the OffSec Management Portal: shared context, consistent CWE and CVSS language, and a single place for testers and stakeholders to consume updates.',
    ctaLine: 'Pair ToIP with ASM and validation services for end-to-end coverage from surface discovery to grounded exploitation narratives.',
  },
  asm: {
    id: 'asm',
    heroEyebrow: 'Technieum-X attack surface management',
    heroTitle: 'AI-based ASM: 100+ recon tools across four disciplined phases',
    heroLead:
      'Subdomain discovery, DNS resolution, deep analysis, and vulnerability validation are orchestrated as one program. ASM output feeds surface-specific playbooks and the broader OffSec portal instead of living in a disconnected scanner export.',
    pitchMetrics: [
      { value: '100+', label: 'Recon and analysis tools' },
      { value: '4', label: 'Core ASM phases' },
      { value: 'Intel', label: 'Feeds ToIP and testers' },
    ],
    elevator:
      'Technieum-X is the external visibility engine: it tells you what the internet can see, what is weak, and what changed since the last baseline.',
    pillars: [
      {
        title: 'Breadth without losing narrative',
        body:
          'High tool count is meaningless without correlation. Technieum-X prioritizes what matters for exploitation and for executive storytelling.',
      },
      {
        title: 'Threat context in one place',
        body:
          'Reputation, abuse, and enrichment sources sit next to technical findings so prioritization is defensible to leadership.',
      },
      {
        title: 'Built to close the loop',
        body:
          'Webhooks, APIs, and streaming progress signals integrate with downstream testing, ticketing, and the OffSec Management Portal.',
      },
    ],
    deepDive: [
      {
        title: 'Phased delivery',
        paragraphs: [
          'Discovery expands the candidate surface; DNS and technology intelligence narrow where testers should spend time; deep analysis finds fragile configurations; validation separates noise from exploitable conditions.',
          'That sequencing mirrors how senior offensive teams actually work, rather than dumping raw port scans on a spreadsheet.',
        ],
      },
      {
        title: 'Compliance and risk language',
        paragraphs: [
          'Mappings to frameworks such as NIST CSF, PCI-DSS, HIPAA, GDPR, and SOC 2 help risk teams translate technical exposure into control gaps.',
          'The technical PDF in the library documents the ten-phase pipeline and integration points in greater depth.',
        ],
      },
    ],
    portalFit:
      'ASM events and assets sync with portal dashboards so retests, ownership, and severity trends stay visible from kickoff through sign-off.',
    ctaLine: 'Combine Technieum-X with SAST and LLM testing when APIs and AI features expand your real external surface.',
  },
  llm: {
    id: 'llm',
    heroEyebrow: 'LLM Attack Suite',
    heroTitle: '1,005+ attack prompts across ten OWASP LLM categories',
    heroLead:
      'Automated simulation, real-time scoring, and evidence-first reporting for model endpoints and AI features. The suite operationalizes OWASP LLM Top 10 style coverage with depth that checklist scans cannot replicate.',
    pitchMetrics: [
      { value: '1,005+', label: 'Curated attack prompts' },
      { value: '10', label: 'OWASP LLM category lanes' },
      { value: 'Live', label: 'Streaming attack telemetry' },
    ],
    elevator:
      'LLM Attack Suite is how Technieum pressure-tests AI before attackers do: adaptive prompts, recursive escalation, and literal evidence fragments in every confirmed issue.',
    pillars: [
      {
        title: 'Parallel adversarial streams',
        body:
          'Multiple vulnerability streams run with configurable concurrency so teams see systemic weakness, not a single lucky prompt.',
      },
      {
        title: 'Safety and SSRF-aware design',
        body:
          'Validation guardrails reduce the chance that automated testing creates unintended side effects against production dependencies.',
      },
      {
        title: 'Reports leadership can defend',
        body:
          'Exports tie to OWASP LLM, MITRE ATLAS, and NIST AI RMF narratives for governance and third-party scrutiny.',
      },
    ],
    deepDive: [
      {
        title: 'Recursive attacker loop',
        paragraphs: [
          'The attacker agent probes, escalates, refines, extracts, and pivots based on target responses until a finding is confirmed or the budget is exhausted.',
          'That loop mirrors human red teaming while operating at machine scale for regression and CI-style gates.',
        ],
      },
      {
        title: 'When to deploy',
        paragraphs: [
          'Ideal before major model or prompt changes, after new tools or plugins ship, and whenever MCP or agentic features expand trust boundaries.',
          'See the technical overview PDF for deployment models, stream list, and export formats.',
        ],
      },
    ],
    portalFit:
      'LLM findings land in the same portal taxonomy as application and infrastructure issues so AI risk is not siloed from the rest of the program.',
    ctaLine: 'Pair LLM testing with AI SAST when prompts and server logic share the same release train.',
  },
  sast: {
    id: 'sast',
    heroEyebrow: 'AI SAST and AI SCA',
    heroTitle: 'Business-logic-aware static analysis plus composable dependency risk',
    heroLead:
      'AI SAST merges multiple static engines with AI validation, taint-style reasoning, and business-logic hunting. AI SCA layers dependency scanning with exploitability and reachability scoring so upgrades are prioritized on real exposure.',
    pitchMetrics: [
      { value: 'Multi-engine', label: 'SAST plus signatures' },
      { value: 'AI', label: 'Validation and deduplication' },
      { value: 'SCA', label: 'Reachability-aware deps' },
    ],
    elevator:
      'This is how Technieum turns noisy static output into a ranked backlog developers will actually fix.',
    pillars: [
      {
        title: 'Fewer false positives',
        body:
          'LLM validation confirms or downgrades candidates and explains risk in plain language with before-and-after fix hints.',
      },
      {
        title: 'Business logic is first-class',
        body:
          'Dedicated attention to authorization, IDOR, race, and workflow flaws that pattern matchers routinely miss.',
      },
      {
        title: 'CI-friendly artifacts',
        body:
          'SARIF and dashboard exports meet modern pipeline gates without forcing teams off GitHub or GitLab security tabs.',
      },
    ],
    deepDive: [
      {
        title: 'Pipeline overview',
        paragraphs: [
          'Ingest supports uploads, Git URLs, or local trees with intelligent file selection per language.',
          'Parallel scanners plus proprietary rules feed a validation agent; duplicates merge; PoC-oriented snippets help testers reproduce.',
        ],
      },
      {
        title: 'SCA in the same story',
        paragraphs: [
          'Sales positioning treats SCA as the dependency twin of SAST: reachability and exploitability prevent "upgrade everything" panic.',
          'Download the AI-SAST technical PDF for agent detail, rule counts, and timing guidance on large repositories.',
        ],
      },
    ],
    portalFit:
      'Static and dependency findings inherit portal scoring, owners, and retest states alongside ASM and LLM issues.',
    ctaLine: 'Run AI SAST and SCA in the same sprint as ASM to connect code-level flaws to what is actually exposed.',
  },
  ad: {
    id: 'ad',
    heroEyebrow: 'AD Suite',
    heroTitle: 'Automated attack-path discovery and privilege escalation mapping',
    heroLead:
      'Kerberoasting, DCSync, Golden Ticket class scenarios, and tier model violations are mapped with evidence-first PowerShell telemetry. AD Suite models how assessors actually walk forests: parallel checks, weighted scoring, and offline-capable operation.',
    pitchMetrics: [
      { value: '600+', label: 'Security checks' },
      { value: '20+', label: 'Check categories' },
      { value: 'Evidence', label: 'ADSI-native proof' },
    ],
    elevator:
      'AD Suite is the identity backbone assessment: where trust breaks, where delegation burns you, and which findings map to MITRE ATTACK, CIS, and DISA STIG language.',
    pillars: [
      {
        title: 'Attack paths, not flat lists',
        body:
          'Findings chain into escalation stories decision-makers understand, not anonymous LDAP attribute dumps.',
      },
      {
        title: 'Air-gapped ready',
        body:
          'Runtime does not depend on cloud callbacks, making it suitable for regulated and isolated directories.',
      },
      {
        title: 'Heatmaps and baselines',
        body:
          'HTML heatmaps, JSON and CSV exports, and delta baselines show progress before and after remediation waves.',
      },
    ],
    deepDive: [
      {
        title: 'Operational use',
        paragraphs: [
          'Use AD Suite for pre-engagement baselines, merger diligence, and focused reviews such as ADCS (ESC patterns) or Kerberos hygiene.',
          'Every finding retains raw proof: attributes, ACL summaries, delegation flags, and policy values your AD team can action.',
        ],
      },
      {
        title: 'Alignment',
        paragraphs: [
          'Mappings to MITRE ATTACK v14, CIS Controls v8, and DISA STIG expectations make outputs palatable to auditors and blue teams.',
          'The downloadable AD Suite technical overview documents modules, scoring, and export formats.',
        ],
      },
    ],
    portalFit:
      'Identity findings roll into the same retest and reporting cadence as application and cloud issues, preserving a single engagement timeline.',
    ctaLine: 'Combine AD Suite with internal network testing when lateral movement and tiering are in scope.',
  },
}
