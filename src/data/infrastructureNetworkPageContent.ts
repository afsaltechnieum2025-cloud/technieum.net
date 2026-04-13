/** Technieum Infrastructure network program page. PDF: servicedocumentfolder/technieum-infrastructure-network.pdf */

export const INFRA_NETWORK_PATH = '/services/technieum-infrastructure-network' as const

export const INFRA_NETWORK_HERO = {
  eyebrow: 'Infrastructure and network',
  title: 'Infrastructure network',
  lead:
    'Perimeter-to-core offensive testing with attack-surface intelligence, controlled exploitation, and reporting your NOC and leadership can act on while keeping one thread from external exposure through internal blast radius.',
  sub:
    'Structured to match the Infrastructure network datasheet in your service library: clear scope boundaries, evidence-first narratives, and portal-backed tracking from first finding through retest.',
} as const

export const INFRA_NETWORK_PILLARS = [
  {
    id: 'external-asm',
    title: 'External and attack surface',
    accent: 'ASM + validation',
    body:
      'Continuous-style discovery and manual corroboration of internet-facing assets, misconfigurations, and entry points that actually change your risk picture.',
  },
  {
    id: 'perimeter',
    title: 'Perimeter and network testing',
    accent: 'Edge to DMZ',
    body:
      'External and internal network penetration testing with emphasis on segmentation, service exposure, and paths an adversary would chain before hitting critical tiers.',
  },
  {
    id: 'lateral',
    title: 'Lateral movement and privilege',
    accent: 'Path narratives',
    body:
      'Credential handling, protocol abuse, relay and delegation patterns where in scope, always tied to crown-jewel targets and agreed rules of engagement.',
  },
  {
    id: 'identity',
    title: 'Identity and Active Directory',
    accent: 'Where infra meets IAM',
    body:
      'AD and hybrid identity review aligned to how breakouts really happen: tiering, Kerberos, delegation, and paths that bridge network access to domain dominance.',
  },
  {
    id: 'wireless-build',
    title: 'Wireless, build, and baseline',
    accent: 'Supporting streams',
    body:
      'Wireless assessments, build and configuration review, and vulnerability baselines when you need recurring assurance or a clean foundation for deeper programs.',
  },
] as const

export const INFRA_NETWORK_OUTCOMES = [
  {
    title: 'One attack story',
    body: 'External findings, internal paths, and identity issues correlated so remediation does not silo by tool or vendor.',
  },
  {
    title: 'Operator-grade evidence',
    body: 'Reproduction steps, blast-radius commentary, and fix priors that network and identity teams can schedule, not reinterpret.',
  },
  {
    title: 'Governance-ready delivery',
    body: 'CVSS, CWE, executive narrative, and portal trails suitable for risk committees, insurers, and auditors.',
  },
] as const

export const INFRA_NETWORK_DELIVERABLES = [
  'Rules of engagement, scope matrix, and escalation paths agreed before testing begins.',
  'Technical report with severity, evidence, and network or identity diagrams where complexity demands it.',
  'Attack-path or lateral-movement summary for high-impact chains.',
  'Remediation matrix with suggested owners and retest hooks.',
  'OffSec Management Portal visibility for findings, retest, and closure evidence.',
] as const
