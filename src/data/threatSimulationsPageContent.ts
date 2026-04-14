/**
 * Threat simulations program page.
 * PDF on disk: public/servicedocumentfolder/technieum-threat-simulations.pdf
 * (Service slug remains technieum-threat-simulations.)
 */

export const THREAT_SIM_PDF_HREF = '/servicedocumentfolder/technieum-threat-simulations.pdf' as const

export const THREAT_SIM_HERO = {
  eyebrow: 'Threat simulations',
  title: 'Threat simulations and social engineering',
  lead:
    'APT-grade phishing, MFA bypass testing, and vishing — measuring your human firewall with real adversary TTPs. Red team, purple team, tabletops, and BAS-style programs scoped to objectives, detection goals, and leadership reporting you can reuse quarter to quarter.',
  sub:
    'Built from the threat simulations datasheet: safe execution, clear abort criteria, OSINT-driven campaigns where in scope, and outcomes that improve detection and response — not just slide decks.',
} as const

export const THREAT_SIM_KEY_BENEFITS = {
  title: 'Key benefits',
  subtitle: 'Why this matters',
  items: [
    {
      title: 'APT-grade campaigns',
      body:
        'Real threat actor TTPs: OSINT-driven recon, custom pretexts, and multi-stage attack chains.',
    },
    {
      title: 'MFA bypass expertise',
      body:
        'Push fatigue, adversary-in-the-middle token theft, and practical MFA circumvention techniques.',
    },
    {
      title: 'Actionable metrics',
      body:
        'Click rates, credential submissions, MFA bypass success — data for targeted improvement.',
    },
  ],
} as const

export const THREAT_SIM_CHALLENGE = {
  title: 'Your challenge',
  intro: 'Your employees are the first and last line of defense against social engineering:',
  bullets: [
    'How susceptible are employees to targeted phishing?',
    'Can attackers bypass MFA through push fatigue or token theft?',
    'Which departments are highest risk?',
    'How quickly do employees report suspicious communications?',
  ],
} as const

export const THREAT_SIM_PARTNER = {
  title: 'Why Technieum as your trusted partner',
  body:
    'Technieum brings six proprietary AI platforms, an in-house R&D team actively hunting zero-days, and AI-powered methodologies that deliver validated, exploitable findings with a zero false positives commitment — enabling your team to focus remediation effort where it matters most.',
} as const

export const THREAT_SIM_SOLUTION_INTRO = {
  title: 'Our solution',
  subtitle: 'Services overview',
  intro:
    'Technieum designs custom campaigns tailored to your industry, organization structure, and threat landscape — simulating real APT-style tactics alongside broader simulation programs.',
} as const

export const THREAT_SIM_SERVICE_CATALOG = [
  {
    step: '1',
    title: 'Phishing impact testing',
    body:
      'Custom phishing campaigns targeting specific employee groups with APT-grade pretexts: executive spear-phishing, department-wide awareness, new-hire testing, and targeted credential harvesting. Includes MFA bypass techniques (push fatigue, AiTM proxy), custom landing pages replicating internal SSO portals, and real-time tracking of open, click, submission, and report rates.',
  },
  {
    step: '2',
    title: 'Business email compromise',
    body: 'CEO fraud, vendor impersonation, and invoice redirection to test financial controls.',
  },
  {
    step: '3',
    title: 'Vishing campaigns',
    body:
      'Voice phishing targeting IT helpdesk, finance, and HR via pretexting and impersonation.',
  },
  {
    step: '4',
    title: 'MFA fatigue attacks',
    body:
      'Push notification abuse, adversary-in-the-middle session token theft, and authentication flow manipulation.',
  },
  {
    step: '5',
    title: 'Credential harvesting',
    body: 'Realistic clone portals measuring submission rates and control effectiveness.',
  },
  {
    step: '6',
    title: 'Physical social engineering',
    body:
      'Tailgating, badge cloning, pretexting, USB drops, and physical security testing where scoped.',
  },
] as const

export const THREAT_SIM_EDGE = {
  title: 'The Technieum edge',
  subtitle: 'Why Technieum for threat simulations',
  methodologyLead:
    'OSINT recon, custom pretext development, multi-vector campaign execution, real-time metrics, department analysis, and training recommendations.',
  pillars: [
    {
      title: 'APT-grade design',
      body: 'OSINT-driven, custom pretexts — not generic commodity templates.',
    },
    {
      title: 'MFA bypass testing',
      body: 'Push fatigue and AiTM token theft — real MFA circumvention scenarios.',
    },
    {
      title: 'Technieum OffSec Intelligence Portal social intel',
      body: 'RAG-powered research on industry-specific social engineering TTPs.',
    },
    {
      title: 'Comprehensive metrics',
      body:
        'Click, submission, and bypass rates with department breakdowns and repeat-offender visibility.',
    },
  ],
} as const

export const THREAT_SIM_METHODOLOGY = {
  title: 'How we deliver results',
  subtitle: 'Our methodology',
  intro:
    "Technieum's threat simulation methodology follows a structured five-phase approach for social engineering campaigns — combining OSINT reconnaissance with APT-grade attack simulation and comprehensive metrics collection.",
  phases: [
    {
      step: '1',
      title: 'Discover',
      body:
        'OSINT gathers organizational intelligence: email formats, org charts, technology stack, employee social profiles, recent news, and industry-specific threat actor TTPs. Target selection and grouping by department, role, and seniority.',
    },
    {
      step: '2',
      title: 'Analyze',
      body:
        'Campaign design with custom pretexts, clone portals for credential harvesting, vishing scripts, MFA bypass technique selection (push fatigue, AiTM). Technieum OffSec Intelligence Portal social intelligence improves pretext credibility.',
    },
    {
      step: '3',
      title: 'Attack',
      body:
        'Multi-vector execution: phishing with custom templates, vishing, MFA fatigue pushes, credential harvesting via clone portals, and physical social engineering where in scope. Real-time tracking of interactions.',
    },
    {
      step: '4',
      title: 'Report',
      body:
        'Click rates, credential submission rates, MFA bypass success, time-to-report metrics, and department-level breakdowns. Trend analysis against benchmarks and repeat-offender identification.',
    },
    {
      step: '5',
      title: 'Remediate',
      body:
        'Targeted awareness recommendations by department and role, email security tuning, MFA implementation improvements, phishing reporting process optimization, and custom training content from campaign results.',
    },
  ],
} as const

export const THREAT_SIM_DELIVERABLE_REPORTS = {
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

export const THREAT_SIM_DELIVERABLES_PROGRAM_EXTRA = [
  'Milestone-driven tracking with immediate escalation of critical findings via the OffSec Management Portal — you do not wait for the final report to learn about urgent risks.',
] as const

export const THREAT_SIM_STANDARDS = {
  title: 'Standards alignment',
  intro:
    'Every Technieum engagement aligns with globally recognized security frameworks including OWASP Top 10, OWASP API Top 10, OWASP LLM Top 10, PTES, NIST CSF, NIST AI RMF, MITRE ATT&CK, CIS Benchmarks, IEC 62443, and ISO 27001:2022.',
  certifications:
    'Our team holds OSCP, OSEP, CRTE, CRTP, eWPTX, eCPPT, and CEH certifications. Technieum is ISO 9001:2015 and ISO 27001:2022 certified.',
} as const

export const THREAT_SIM_CTA = {
  title: 'Ready to secure your organization?',
  body: 'Partner with Technieum for AI-powered offensive security with validated, actionable findings.',
  contacts: [
    { label: 'robert.a@technieum.com', href: 'mailto:robert.a@technieum.com' },
    { label: 'syam.s@technieum.com', href: 'mailto:syam.s@technieum.com' },
  ],
} as const
