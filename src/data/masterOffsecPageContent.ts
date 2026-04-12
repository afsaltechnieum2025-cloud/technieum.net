/** Master Offsec program page: streams mirror the Technieum offensive workflow documentation. */

export const MASTER_OFFSEC_PATH = '/services/technieum-master-offsec' as const

export const MASTER_OFFSEC_HERO = {
  eyebrow: 'Unified offensive program',
  title: 'Technieum Master Offsec',
  lead:
    'One engagement model that orchestrates intelligence, parallel testing lanes, and the OffSec Management Portal so leadership sees one story and engineering gets evidence they can act on.',
  sub:
    'Aligned to the Master Offsec datasheet: shared ToIP intelligence, multi-stream validation, human sign-off on material risk, and milestone delivery from kickoff through retest.',
} as const

/** Five parallel lanes (matches workflow diagram rows). */
export const MASTER_OFFSEC_STREAMS = [
  {
    id: 'business-logic',
    title: 'Business logic',
    accent: 'SAST intel',
    body:
      'Source code and logic flow into extraction and auth or transaction paths, enriched with ToIP scenarios and target-specific playbooks before validation.',
  },
  {
    id: 'sast-validation',
    title: 'SAST validation',
    accent: 'Shared intel',
    body:
      'Static findings are triaged against ToIP-backed context and exploit-matched playbooks so only credible chains reach your backlog.',
  },
  {
    id: 'attack-surface',
    title: 'Attack surface intel',
    accent: 'ASM',
    body:
      'Subdomains, APIs, and external exposure feed the same intelligence core, then surface-specific playbooks guide manual confirmation.',
  },
  {
    id: 'tech-stack',
    title: 'Tech stack scan',
    accent: 'Curated engines',
    body:
      'Stack fingerprinting from ASM and SAST output drives curated template runs (for example Nuclei-style workflows) into validated, prioritized findings.',
  },
  {
    id: 'llm-security',
    title: 'AI / LLM security',
    accent: 'LLM Attack Suite',
    body:
      'LLM endpoints and prompts move through exhaustive prompt suites and escalation paths until bypass-class issues are captured with reproduction evidence.',
  },
] as const

export const MASTER_OFFSEC_DELIVERABLES = [
  'Rules of engagement and formal program plan with named PM and lead operator.',
  'Executive summary and technical report with CVSS, CWE mapping, and reproduction evidence.',
  'Playbooks and PoCs where in scope; correlation notes across streams when findings chain.',
  'OffSec Management Portal access with dashboards, retest workflow, and closure evidence.',
  'AI-assisted remediation guidance aligned to your stack; optional retest window.',
] as const

export const MASTER_OFFSEC_OUTCOMES = [
  {
    title: 'Single operational picture',
    body: 'Every stream rolls into the OffSec Management Portal: CVSS, CWE, dashboards, retest, and audit-friendly trails.',
  },
  {
    title: 'Human-validated signal',
    body: 'Automation and AI accelerate discovery; operators validate what matters so you remediate confirmed risk, not noise.',
  },
  {
    title: 'Procurement-ready artifacts',
    body: 'Executive and technical reporting, playbooks, and PoCs map to frameworks your risk committee already recognizes.',
  },
] as const
