/** Site-wide marketing copy aligned to Technieum_Sales_Pitch_Dark.pdf (ASCII only). */

export const SALES_PITCH_PDF = '/salespitch/Technieum_Sales_Pitch_Dark.pdf'

export const HOME_HERO = {
  eyebrow: 'Offensive security',
  title: '360 coverage. Human-validated. AI where it actually helps.',
  lead:
    'We run adversary-grade testing across applications, cloud, identity, and AI-enabled systems with tooling most firms only resell. One program can combine ASM, intelligence from the Technieum OffSec Intelligence Portal, LLM red teaming, AD assessments, and AI-validated SAST and SCA so leadership sees one story and engineering gets evidence they can ship against.',
  sublead:
    'Milestone delivery, daily visibility, and fast escalation on criticals. AI speeds recon and triage; senior testers sign off on what hits your backlog so you prioritize real risk, not scanner noise.',
  proofPoints: [
    'Findings validated by operators, not checklists alone',
    'OffSec Management Portal for scoring, retest, and audit trails',
    'In-house ASM, Technieum OffSec Intelligence Portal, LLM suite, AD framework, and AI-validated SAST',
  ],
  primaryCta: { label: 'Talk to our team', to: '/contact' as const },
  tertiaryCta: { label: 'Explore services', to: '/services' as const },
} as const

/** Home: two-column coverage hub (replaces old "services at a glance" grid). No "services" wording in the eyebrow. */
export const HOME_CAPABILITIES_HUB = {
  eyebrow: 'Offensive security coverage',
  headline: 'Uncover Material Risk Before Adversaries Exploit It',
  body:
    'We run adversary-grade testing across applications, cloud, identity, and AI-enabled systems with tooling most firms only resell. One program can combine ASM, intelligence from the Technieum OffSec Intelligence Portal, LLM red teaming, AD assessments, and AI-validated SAST and SCA so leadership sees one story and engineering gets evidence they can ship against.',
  sublead: HOME_HERO.sublead,
  primaryCta: { label: 'Get started', to: '/contact' as const },
} as const

/** Standalone /why-technieum page (no longer on home). */
export const WHY_TECHNIEUM_PAGE = {
  eyebrow: 'Why Technieum',
  headline: 'One program. Validated findings. Platforms we build in-house.',
  lead:
    'Teams come to us when they need adversary-grade coverage without scanner noise: proprietary AI and ASM tooling, senior testers who validate severities, and one OffSec Management Portal so leadership and engineering share the same evidence.',
  subLead:
    'Daily visibility, fast critical escalation, and remediation guidance written for your stack—not generic checklist output.',
} as const

export const WHY_TECHNIEUM = [
  {
    title: 'AI at every layer',
    body:
      'Agentic recon, RAG-backed intelligence in Technieum OffSec Intelligence Portal, and AI-assisted remediation guidance. Automation widens coverage; experts decide what ships to your backlog.',
  },
  {
    title: 'Timely delivery',
    body:
      'Milestone-driven work, daily updates, weekly reviews when you need them, and rapid escalation on criticals. Structured communication keeps security and leadership aligned.',
  },
  {
    title: 'Accurate, actionable remediation',
    body:
      'Fix guidance tailored to your stack and architecture—not anonymous scanner text. Written so developers and operators can ship fixes with confidence.',
  },
  {
    title: 'In-house R&D',
    body:
      'Researchers hunting zero-days and publishing CVEs. That research feeds our platforms and sharpens every client engagement.',
  },
  {
    title: 'Six proprietary AI capabilities',
    body:
      'Technieum OffSec Intelligence Portal, LLM Attack Suite, AD Suite, AI ASM, AI-validated SAST, and SCA—built at Technieum and run alongside commercial tools when they add value.',
  },
  {
    title: '360 coverage per engagement',
    body:
      'AI-validated SAST, SCA, ASM, Active Directory, and AI or LLM testing in one coordinated program, cross-correlated across the attack surface you define.',
  },
  {
    title: 'Zero false positives commitment',
    body:
      'AI accelerates discovery; humans validate every finding before it hits your queue. You prioritize confirmed risk, not noise.',
  },
] as const

export const HOME_TOIP = {
  title: 'Technieum OffSec Intelligence Portal',
  subtitle: 'RAG-backed vulnerability intelligence at query speed',
} as const

export const HOME_ASM = {
  title: 'Technieum-X (external attack surface management)',
  subtitle: 'Orchestrated recon, intel, and portal-ready reporting',
  intro:
    'Technieum-X is how Technieum maps what the internet sees before and during an engagement: phased discovery, DNS and stack intelligence, vulnerability correlation, and threat enrichment that lands in dashboards and the OffSec Management Portal instead of orphaned scan files.',
  bullets: [
    '100+ integrated tools sequenced across discovery, analysis, enrichment, and baseline reporting.',
    'CVE, EPSS, and KEV-aware prioritization beside reputation and abuse signals for defensible triage.',
    'Webhooks, APIs, and live progress streams so ASM events stay tied to owners, retests, and Technieum OffSec Intelligence Portal context.',
  ],
} as const

export const HOME_LLM = {
  title: 'LLM Attack Suite',
  subtitle: 'Recursive red-team pressure with evidence in every finding',
  intro:
    'The suite runs parallel adversarial streams against your LLM APIs and features: adaptive prompts, streaming telemetry, and literal response fragments in confirmed issues so AppSec and governance teams share one defensible story.',
  bullets: [
    '1,005+ curated prompts across ten OWASP LLM-style category lanes with twelve parallel streams.',
    'Probe-escalate-refine loops guided by live model output, with SSRF-aware validation and early exit on critical severity.',
    'Exports mapped to OWASP LLM, MITRE ATLAS, and NIST AI RMF; findings flow into the OffSec Management Portal taxonomy.',
  ],
} as const

export const HOME_SAST = {
  title: 'AI-validated SAST + SCA',
  subtitle: 'Multi-engine static analysis with reachability-aware dependency risk',
  intro:
    'Technieum merges Semgrep, Bandit, Trivy-class scanning, secrets, proprietary rules, and LLM validation with graph taint and a dedicated business-logic agent. SCA layers exploitability and reachability on dependencies so the same backlog covers code flaws and the vulnerable packages that actually execute in your paths.',
  bullets: [
    'Seven agents, 350+ rules, six scanner families, SARIF 2.1.0 for GitHub Actions and GitLab CI.',
    '0-100 priority scores across AI-validated SAST and SCA; CWE mapping and portal-native owners and retests.',
    'PoC-oriented snippets and plain-language fixes so developers ship remediations instead of reopening static reports.',
  ],
} as const

export const HOME_AD = {
  title: 'AD Suite',
  subtitle: 'PowerShell-native Active Directory assessment at assessor depth',
  intro:
    'AD Suite runs 600+ checks across Kerberos, delegation, tiers, GPO, ADCS, trusts, and hybrid Azure AD with parallel runspaces, ADSI-native evidence, and a weighted domain score. Heatmaps, baselines, and MITRE, CIS, and STIG mappings keep identity risk in the same retest cadence as the rest of your OffSec program.',
  bullets: [
    '600+ checks and 20+ categories with raw proof per finding, not anonymous LDAP dumps.',
    'Air-gapped friendly: no cloud callbacks at runtime; JSON, CSV, and HTML for engineering and audit.',
    'Attack-path narratives and PowerShell remediation snippets so directory admins close gaps faster.',
  ],
} as const

export const OFFSEC_PORTAL = {
  title: 'OffSec Management Portal',
  /** One-line label for compact blocks on service program pages */
  tagline: 'Central command for multi-stream testing',
  /** Home section: eyebrow (reference-style category line) */
  eyebrow: 'An offensive security Engine',
  /** Home section: primary headline (platform + what it combines + who operates it) */
  headline:
    'Technieum OffSec Management Portal',
  /** Home section: outcome paragraph (reference-style "Together, they..." line) */
  body:
    'Together, they keep validated findings visible, scoring consistent, and remediation traceable so you close exploitable gaps before they spread across email threads and ad-hoc reports.',
  bullets: [
    'Unifies every delivery stream: shared intelligence, consistent scoring, and one operational picture.',
    'Multi-tester collaboration with role-appropriate views and workflow.',
    'CVSS scoring, CWE mapping, one-click reporting, and real-time dashboards.',
    'Retest tracking and evidence trails from first finding through closure.',
    'Typical outcome: roughly 30 to 40 percent reduction in administrative overhead versus ad-hoc reporting.',
  ],
} as const

/** /why-technieum: hero snapshot (same proof lines as home hero). */
export const WHY_TECHNIEUM_SNAPSHOT = {
  title: 'What stakeholders see first',
  points: HOME_HERO.proofPoints,
} as const

/** /why-technieum: portal highlights (curated from OFFSEC_PORTAL.bullets). */
export const WHY_TECHNIEUM_PORTAL_FOCUS = [
  OFFSEC_PORTAL.bullets[0],
  OFFSEC_PORTAL.bullets[2],
  OFFSEC_PORTAL.bullets[3],
  OFFSEC_PORTAL.bullets[4],
] as const

export const OFFENSIVE_WORKFLOW = {
  /** Section label (nav / outline); engine name */
  title: 'The Technieum Offensive Engine',
  eyebrow: 'Your All-in-One Continuous Offensive Security Platform',
  meetHeadline: 'Meet the Technieum Offensive Engine',
  intro:
    'The Technieum Offensive Engine provides unified offensive coverage by combining attack surface management, vulnerability intelligence and AI-augmented testing, continuous penetration streams, breach and adversary simulation, and Technieum OffSec intelligence portal–backed exploit intelligence into a single coordinated program with portal-native scoring, reporting, and retest.',
  /** Short value props under the intro */
  highlights: [
    'Five coordinated workstreams',
    'Technieum OffSec intelligence portal–backed exploit intelligence',
    'Validated into one portal',
  ],
} as const

export const PROJECT_CYCLE = {
  title: 'The Technieum project cycle',
  subtitle: 'From onboarding to delivery',
  intro:
    'Milestone-driven delivery with daily visibility, weekly reviews when you need them, and instant escalation for critical findings. No black-box engagements.',
  diagramEyebrow: '',
  phases: [
    {
      step: '1',
      title: 'Scoping and planning',
      body: 'Objectives, ROE, scope, formal plan. PM plus lead pentester.',
    },
    {
      step: '2',
      title: 'Automated reconnaissance',
      body: '100+ tools: subdomains, DNS, web probing, initial scanning.',
    },
    {
      step: '3',
      title: 'Intelligence integration',
      body: 'Technieum OffSec Intelligence Portal scenarios, AI-validated SAST logic, ASM playbooks.',
    },
    {
      step: '4',
      title: 'Collaborative testing',
      body: 'Parallel testers in OffSec Portal. Daily updates, criticals escalated fast.',
    },
    {
      step: '5',
      title: 'Deep vulnerability analysis',
      body: 'Business logic, priv-esc chains, chaining. Validated before report.',
    },
    {
      step: '6',
      title: 'Reporting and documentation',
      body: 'Exec summary, technical report (CVSS, CWE), playbooks, PoCs.',
    },
    {
      step: '7',
      title: 'AI-powered remediation',
      body: 'Stack-aware fix guidance, not generic advice.',
    },
    {
      step: '8',
      title: 'Retesting and validation',
      body: 'Verify fixes, update dashboard, evidence-backed sign-off.',
    },
  ],
} as const

export const STANDARDS_STRIP =
  'Aligned to OWASP Top 10, OWASP API Top 10, OWASP LLM Top 10, PTES, NIST, NIST AI RMF, CIS, and common certification bodies. Team certifications include OSCP, OSEP, CRT, CRTP, ISO 9001:2015, ISO 27001:2022, eWPTX, eCPPT, CEH, and related credentials.'

/** Services page: standards showcase (structured chips + copy). */
export const STANDARDS_SHOWCASE = {
  eyebrow: 'Credibility you can cite',
  title: 'Standards and certifications that hold up in the room',
  lead:
    'Frameworks your risk committee already knows, mapped to how we actually test. Credentials on the team, not just a logo strip.',
  frameworksLabel: 'Frameworks and methodologies',
  frameworks: [
    'OWASP Top 10',
    'OWASP API Top 10',
    'OWASP LLM Top 10',
    'PTES',
    'NIST',
    'NIST AI RMF',
    'CIS',
    'Common certification bodies',
  ],
  teamLabel: 'Team certifications',
  teamCerts: [
    'OSCP',
    'OSEP',
    'CRT',
    'CRTP',
    'ISO 9001:2015',
    'ISO 27001:2022',
    'eWPTX',
    'eCPPT',
    'CEH',
  ],
  closing:
    'Whether you need board-ready language or deep technical traceability, delivery stays aligned from kickoff through report.',
} as const

export const CONTACT_SALES = {
  offensive: {
    name: 'Robert Aaron',
    role: 'Manager, Offensive Security',
    email: 'robert.a@technieum.com',
    phone: '+971-525284648',
  },
  commercial: {
    name: 'Syam Nair',
    role: 'Manager, Commercial and Partner Alliances',
    email: 'syam.s@technieum.com',
    phone: '+971-508995142',
  },
  companyLine: 'Technieum Technologies LLC, P.O. Box 22908, Dubai, UAE. WWW.TECHNIEUM.COM',
} as const

/** Contact page hero and value props (industry-standard intake narrative). */
export const CONTACT_PAGE = {
  eyebrow: 'Contact',
  /** Primary H1 on the contact layout */
  headline: 'Contact Us',
  lead:
    'From red-team objectives and cloud attack-surface reviews to application and AI testing under one delivery model, we help you move from question to plan quickly.',
  subLead:
    'Technical programs route to offensive leadership. Commercial, procurement, and alliance topics go to our partnerships desk.',
  formTitle: 'Reach Our Sales Team',
  formSubtitle: 'Please provide your contact information',
  formSubmitLabel: 'Speak with an Expert',
  formAgreementBeforePrivacy:
    'By checking this box and submitting, I agree to the',
  formPrivacyLinkLabel: 'Privacy Policy',
  formPrivacyHref: '#',
  responseLine: 'We aim to respond within one business day (Gulf timezone).',
  ctaSecondary: 'Browse services',
} as const
