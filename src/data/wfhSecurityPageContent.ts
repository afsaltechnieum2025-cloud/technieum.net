/**
 * WFH / distributed workforce security program page.
 * PDF: public/servicedocumentfolder/technieum-wfh-security.pdf
 */

export const WFH_SEC_PDF_HREF = '/servicedocumentfolder/technieum-wfh-security.pdf' as const

export const WFH_SEC_HERO = {
  eyebrow: 'Workforce and remote',
  title: 'WFH security',
  lead:
    'Distributed workforce assurance: remote identity and access, endpoint and collaboration posture, and phishing resilience at scale — with metrics that steer investment without unnecessary surveillance.',
  sub:
    'Structured per the WFH security datasheet: ethical campaign options where approved, human-centered reporting, retest evidence for closure, and portal visibility when combined with other offensive streams.',
} as const

export const WFH_SEC_KEY_BENEFITS = {
  title: 'Key benefits',
  subtitle: 'Why this matters',
  items: [
    {
      title: 'Identity you can trust',
      body: 'Conditional access, device trust, MFA, and break-glass paths reviewed for how people actually work from home.',
    },
    {
      title: 'Endpoint reality',
      body: 'Patching, EDR, and configuration for laptops and mobile used off corporate networks — BYOD and COPE patterns included.',
    },
    {
      title: 'Measurable resilience',
      body: 'Aggregate phishing and control metrics that drive training and MFA investment — not blame-oriented scorecards.',
    },
  ],
} as const

export const WFH_SEC_CHALLENGE = {
  title: 'Your challenge',
  intro: 'Remote work expanded the surface area security teams must defend:',
  bullets: [
    'Are conditional access and device trust enforcing consistently outside the office?',
    'Do collaboration tools expose risky guest access, oversharing, or privileged sprawl?',
    'Can you demonstrate improvement to leadership after awareness and control changes?',
    'How do HR, IT, and security stay aligned on acceptable use and incident response for remote staff?',
  ],
} as const

export const WFH_SEC_PARTNER = {
  title: 'Why Technieum as your trusted partner',
  body:
    'Technieum brings six proprietary AI platforms, an in-house R&D team actively hunting zero-days, and AI-powered methodologies that deliver validated, exploitable findings with a zero false positives commitment — enabling your team to focus remediation effort where it matters most.',
} as const

export const WFH_SEC_SOLUTION_INTRO = {
  title: 'Our solution',
  subtitle: 'Services overview',
  intro:
    'Technieum scopes WFH programs around your regions, populations, and approved test types — combining identity and endpoint assessment, SaaS collaboration review, and optional ethical social engineering.',
} as const

export const WFH_SEC_SERVICE_CATALOG = [
  {
    step: '1',
    title: 'Remote identity and access',
    body:
      'SSO, MFA, conditional access, device compliance, and privileged paths for staff working from home or hybrid locations.',
  },
  {
    step: '2',
    title: 'Endpoint posture',
    body:
      'Configuration baselines, patching discipline, and EDR alignment for corporate and approved personal devices where in scope.',
  },
  {
    step: '3',
    title: 'Collaboration and SaaS',
    body:
      'File sharing, guest access, admin roles, and data-exfiltration patterns in chat and productivity platforms.',
  },
  {
    step: '4',
    title: 'Phishing and social engineering',
    body:
      'Pre-approved simulations with aggregate metrics — designed to improve MFA adoption and reporting culture, not to single individuals out.',
  },
  {
    step: '5',
    title: 'Remediation and awareness',
    body:
      'Cross-functional recommendations spanning IT, HR, and security awareness — tied to observed gaps.',
  },
  {
    step: '6',
    title: 'Retest and portal tracking',
    body:
      'Re-validation after control changes plus optional OffSec Management Portal tracking alongside other Technieum programs.',
  },
] as const

export const WFH_SEC_EDGE = {
  title: 'The Technieum edge',
  subtitle: 'Why Technieum for WFH security',
  methodologyLead:
    'Human-centered metrics, ethical campaign design, and the same portal and retest rigor as enterprise-wide offensive programs.',
  pillars: [
    {
      title: 'Distributed-first mindset',
      body: 'Assumptions match home networks, split tunneling, and real device diversity — not only office LAN models.',
    },
    {
      title: 'Collaboration depth',
      body: 'SaaS and chat surfaces reviewed the way attackers abuse links, guests, and over-permissioned apps.',
    },
    {
      title: 'Aligned with simulations',
      body: 'Optional pairing with threat simulation streams for cohesive human-risk reporting.',
    },
    {
      title: 'Leadership-ready',
      body: 'Trend narratives and remediation plans IT and HR can co-own — with retest proof for closure.',
    },
  ],
} as const

export const WFH_SEC_METHODOLOGY = {
  title: 'How we deliver results',
  subtitle: 'Our methodology',
  intro:
    'Technieum follows a phased WFH methodology: scope populations and regions, assess identity and endpoints, review collaboration risk, optionally run approved simulations, then report and retest.',
  phases: [
    {
      step: '1',
      title: 'Discover',
      body:
        'Population and region scope, identity stack inventory, endpoint estate, collaboration footprint, and approved campaign types.',
    },
    {
      step: '2',
      title: 'Analyze',
      body:
        'Attack paths for credential theft, device compromise, and SaaS abuse from off-network contexts; campaign design if in scope.',
    },
    {
      step: '3',
      title: 'Assess',
      body:
        'Technical validation of access controls, device posture, and collaboration settings; ethical phishing execution per ROE.',
    },
    {
      step: '4',
      title: 'Report',
      body:
        'Assessment and campaign reporting with leadership narrative, aggregate metrics, and prioritized remediation themes.',
    },
    {
      step: '5',
      title: 'Remediate',
      body:
        'Joint IT / HR / security plan, optional retest memo, and portal tracking when part of a broader program.',
    },
  ],
} as const

export const WFH_SEC_DELIVERABLE_REPORTS = {
  title: 'What you receive',
  subtitle: 'Deliverables',
  intro:
    'Deliverables span technical detail and executive narrative — plus optional policy addenda and sales materials for stakeholder packs when needed.',
  pdfCore: [
    {
      title: 'Technical report',
      body:
        'Detailed findings with CVSS scoring, CWE mapping, proof-of-concept evidence, and step-by-step reproduction instructions.',
    },
    {
      title: 'Management report',
      body:
        'Executive risk summary with business impact analysis, prioritized recommendations, and a strategic remediation roadmap.',
    },
    {
      title: 'Threat model report',
      body:
        'Remote-work attack vectors and adversary profiles mapped to MITRE ATT&CK where it strengthens prioritization.',
    },
    {
      title: 'Technieum OffSec Management Portal playbook document',
      body:
        'Target-specific playbooks from our RAG-powered intelligence engine contextualizing workforce-targeted TTPs.',
    },
  ],
} as const

export const WFH_SEC_DELIVERABLES_PROGRAM_EXTRA = [
  'Milestone-driven tracking with immediate escalation of critical findings via the OffSec Management Portal — you do not wait for the final report to learn about urgent risks.',
] as const

export const WFH_SEC_STANDARDS = {
  title: 'Standards alignment',
  intro:
    'Every Technieum engagement aligns with globally recognized security frameworks including OWASP Top 10, OWASP API Top 10, OWASP LLM Top 10, PTES, NIST CSF, NIST AI RMF, MITRE ATT&CK, CIS Benchmarks, IEC 62443, and ISO 27001:2022.',
  certifications:
    'Our team holds OSCP, OSEP, CRTE, CRTP, eWPTX, eCPPT, and CEH certifications. Technieum is ISO 9001:2015 and ISO 27001:2022 certified.',
} as const

export const WFH_SEC_CTA = {
  title: 'Ready to secure your organization?',
  body: 'Partner with Technieum for AI-powered offensive security with validated, actionable findings.',
  contacts: [
    { label: 'robert.a@technieum.com', href: 'mailto:robert.a@technieum.com' },
    { label: 'syam.s@technieum.com', href: 'mailto:syam.s@technieum.com' },
  ],
} as const
