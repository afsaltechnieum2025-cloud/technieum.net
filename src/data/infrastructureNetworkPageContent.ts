/** Technieum Infrastructure network program page. Source: public/servicedocumentfolder/technieum-infrastructure-network.pdf */

export const INFRA_NETWORK_PATH = '/services/technieum-infrastructure-network' as const

export const INFRA_NETWORK_PDF_HREF = '/servicedocumentfolder/technieum-infrastructure-network.pdf' as const

export const INFRA_NETWORK_HERO = {
  eyebrow: 'Infrastructure and network',
  title: 'Infrastructure & network security',
  lead:
    'AI-powered assessment of your network perimeter, internal infrastructure, and Active Directory environments. Perimeter-to-core offensive testing with attack-surface intelligence, controlled exploitation, and reporting your NOC and leadership can act on while keeping one thread from external exposure through internal blast radius.',
  sub:
    'Structured to match the Infrastructure network datasheet in your service library: clear scope boundaries, evidence-first narratives, cross-correlated ASM, AD Suite, Technieum OffSec Intelligence Portal, and portal-backed tracking from first finding through retest.',
} as const

export const INFRA_NETWORK_KEY_BENEFITS = {
  title: 'Key benefits',
  subtitle: 'Why this matters',
  items: [
    {
      title: '360° attack surface visibility',
      body:
        'AI-based ASM maps external assets using 100+ orchestrated reconnaissance tools across four phases: discovery, DNS resolution, deep analysis, and vulnerability validation.',
    },
    {
      title: 'Attack path intelligence',
      body:
        'Individual vulnerabilities are chained into multi-step compromise paths that demonstrate real business impact, not isolated scanner rows.',
    },
    {
      title: 'Zero false positives commitment',
      body:
        'AI accelerates discovery; human experts validate every finding before it hits your backlog. You act on real, exploitable risk only.',
    },
  ],
} as const

export const INFRA_NETWORK_CHALLENGE = {
  title: 'Your challenge',
  intro:
    'Your enterprise infrastructure spans external perimeters, internal networks, Active Directory, wireless access points, and cloud boundaries. This creates:',
  bullets: [
    'Expanding attack surfaces with shadow IT and forgotten assets',
    'Complex AD environments with hidden privilege escalation paths',
    'Segmentation gaps between security zones',
    'Configuration drift across servers and network devices',
    'The need for a partner who validates real exploitability, not scanner noise',
  ],
} as const

export const INFRA_NETWORK_PARTNER = {
  title: 'Why Technieum as your trusted partner',
  body:
    'Technieum brings six proprietary AI platforms, an in-house R&D team actively hunting zero-days, and AI-powered methodologies that deliver validated, exploitable findings with a zero false positives commitment — enabling your team to focus remediation effort where it matters most.',
} as const

export const INFRA_NETWORK_SOLUTION_INTRO = {
  title: 'Our solution',
  subtitle: 'Services overview',
  intro:
    'Technieum deploys AI-powered reconnaissance, cross-correlated testing pipelines, and human-validated exploitation across every infrastructure layer.',
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

/** Numbered catalog aligned to the Infrastructure network PDF (eight services). */
export const INFRA_NETWORK_SERVICE_CATALOG = [
  {
    step: '1',
    title: 'Attack surface management',
    body:
      'Continuous discovery and monitoring of external-facing digital assets using our AI-based ASM platform. 100+ orchestrated tools map subdomains, IP ranges, exposed APIs, cloud resources, shadow IT, and forgotten infrastructure across four phases: discovery, DNS resolution, deep analysis, and vulnerability validation.',
  },
  {
    step: '2',
    title: 'Internal network testing',
    body:
      'Simulates an insider threat or compromised endpoint within your internal environment. Tests lateral movement across VLANs, service exploitation, credential harvesting via Responder and MITM-style techniques, privilege escalation toward domain admin, and how far an attacker can move once inside the perimeter.',
  },
  {
    step: '3',
    title: 'External network testing',
    body:
      'Evaluates internet-facing infrastructure — firewalls, VPNs, web servers — for exploitable vulnerabilities and misconfigurations.',
  },
  {
    step: '4',
    title: 'Active Directory audit',
    body:
      "Comprehensive AD assessment using Technieum's AD Suite: Kerberoasting, AS-REP roasting, DCSync, Golden and Silver Ticket scenarios, GPO abuse, ACL exploitation, delegation attacks, certificate service abuse (ESC1–ESC8), and full privilege escalation chain mapping from standard user to domain admin.",
  },
  {
    step: '5',
    title: 'Wireless security testing',
    body:
      'Rogue AP detection, WPA2 and WPA3 testing, evil twin attacks, PMKID capture, and guest network isolation validation.',
  },
  {
    step: '6',
    title: 'Build and configuration review',
    body:
      'Systematic review against CIS Benchmarks: OS hardening, service configurations, patch levels, and policy enforcement.',
  },
  {
    step: '7',
    title: 'Segmentation testing',
    body:
      'Validates network segmentation between PCI, OT and IT, guest, and critical asset zones.',
  },
  {
    step: '8',
    title: 'Attack path mapping',
    body:
      'Chains vulnerabilities into multi-step attack paths from perimeter exposure through to critical asset compromise.',
  },
] as const

export const INFRA_NETWORK_EDGE = {
  title: 'The Technieum edge',
  subtitle: 'Why Technieum for infrastructure',
  methodologyLead:
    'Every engagement runs five converging pipelines — ASM, SAST, AD Suite, Technieum OffSec Intelligence Portal, and Nuclei — all cross-correlated via the OffSec Management Portal.',
  pillars: [
    {
      title: 'AI-based ASM platform',
      body: '100+ recon tools across four phases — breadth orchestrated as one program, not a disconnected export.',
    },
    {
      title: 'AD Suite',
      body:
        'Purpose-built AD assessment: Kerberoasting, DCSync, Golden Ticket class paths, and domain compromise narratives with evidence.',
    },
    {
      title: 'Technieum OffSec Intelligence Portal engine',
      body: '15,000+ real-world exploit contexts via RAG search — playbooks with payloads aligned to what broke in the field.',
    },
    {
      title: '360° cross-correlation',
      body: 'ASM, SAST, AD, and network findings unified so remediation does not silo by tool or vendor.',
    },
    {
      title: 'Zero false positives commitment',
      body: 'AI finds; humans validate every finding before reporting.',
    },
    {
      title: 'OffSec Management Portal',
      body: 'Real-time dashboards, multi-tester collaboration, and one-click reporting.',
    },
  ],
} as const

/** Five-phase methodology from the Infrastructure network PDF (distinct from the generic project cycle). */
export const INFRA_NETWORK_METHODOLOGY = {
  title: 'How we deliver results',
  subtitle: 'Our methodology',
  intro:
    "Technieum's infrastructure security methodology follows a structured five-phase approach tailored to network and infrastructure environments — comprehensive coverage from perimeter to Active Directory core.",
  phases: [
    {
      step: '1',
      title: 'Discover',
      body:
        'AI-based ASM deploys 100+ reconnaissance tools for external asset discovery. Internal enumeration maps VLAN structures, IP ranges, and service endpoints. AD enumeration identifies domain controllers, trust relationships, and GPO configurations.',
    },
    {
      step: '2',
      title: 'Analyze',
      body:
        'Technieum OffSec Intelligence Portal generates infrastructure-specific attack playbooks. AD Suite maps privilege escalation paths and domain compromise chains. Network topology analysis surfaces segmentation weaknesses and lateral movement opportunities.',
    },
    {
      step: '3',
      title: 'Attack',
      body:
        'Manual exploitation of network services, AD attack chains (Kerberoasting, DCSync, Golden Ticket), wireless testing, VPN bypass attempts where in scope, and segmentation validation through controlled lateral movement.',
    },
    {
      step: '4',
      title: 'Report',
      body:
        'Technical reports with network diagrams, AD attack path visualizations, CVSS-scored findings with PoC evidence, and infrastructure-specific risk heatmaps. Management summaries contextualize risk for leadership.',
    },
    {
      step: '5',
      title: 'Remediate',
      body:
        'Infrastructure-specific guidance: AD hardening, segmentation rules, firewall policy recommendations, and CIS Benchmark alignment. Followed by retest validation.',
    },
  ],
} as const

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

export const INFRA_NETWORK_DELIVERABLE_REPORTS = {
  title: 'What you receive',
  subtitle: 'Deliverables',
  intro:
    'Every engagement produces comprehensive deliverables for technical teams through executives — plus program artifacts that keep urgency visible before the final report.',
  pdfCore: [
    {
      title: 'Technical report',
      body:
        'Detailed findings with CVSS scoring, CWE mapping, proof-of-concept evidence, and step-by-step reproduction instructions.',
    },
    {
      title: 'Management report',
      body:
        'Executive-level risk summary with business impact analysis, prioritized recommendations, and a strategic remediation roadmap.',
    },
    {
      title: 'Threat model report',
      body:
        'Threat landscape analysis for your environment: attack vectors and adversary profiles mapped to MITRE ATT&CK.',
    },
    {
      title: 'Technieum OffSec Intelligence Portal playbook document',
      body:
        'Target-specific attack playbooks from 15,000+ real-world disclosed vulnerabilities via our RAG-powered intelligence engine.',
    },
  ],
} as const

export const INFRA_NETWORK_DELIVERABLES_PROGRAM = [
  'Rules of engagement, scope matrix, and escalation paths agreed before testing begins.',
  'Milestone-driven tracking with immediate escalation of critical findings via the OffSec Management Portal — you do not wait for the final report to learn about urgent risks.',
  'Attack-path or lateral-movement summary for high-impact chains.',
  'Remediation matrix with suggested owners and retest hooks.',
  'OffSec Management Portal visibility for findings, retest, and closure evidence.',
] as const

export const INFRA_NETWORK_STANDARDS = {
  title: 'Standards alignment',
  intro:
    'Every Technieum engagement aligns with globally recognized security frameworks including OWASP Top 10, OWASP API Top 10, OWASP LLM Top 10, PTES, NIST CSF, NIST AI RMF, MITRE ATT&CK, CIS Benchmarks, IEC 62443, and ISO 27001:2022.',
  certifications:
    'Our team holds OSCP, OSEP, CRTE, CRTP, eWPTX, eCPPT, and CEH certifications. Technieum is ISO 9001:2015 and ISO 27001:2022 certified.',
} as const

export const INFRA_NETWORK_CTA = {
  title: 'Ready to secure your organization?',
  body: 'Partner with Technieum for AI-powered offensive security with validated, actionable findings.',
  contacts: [
    { label: 'robert.a@technieum.com', href: 'mailto:robert.a@technieum.com' },
    { label: 'syam.s@technieum.com', href: 'mailto:syam.s@technieum.com' },
  ],
} as const
