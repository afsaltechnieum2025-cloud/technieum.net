/** Site-wide marketing copy aligned to Technieum_Sales_Pitch_Dark.pdf (ASCII only). */

export const SALES_PITCH_PDF = '/salespitch/Technieum_Sales_Pitch_Dark.pdf'

export const HOME_HERO = {
  eyebrow: 'Offensive security',
  title: '360 coverage. Human-validated. AI where it actually helps.',
  lead:
    'We run adversary-grade testing across applications, cloud, identity, and AI-enabled systems with tooling most firms only resell. One program can combine ASM, ToIP-backed intelligence, LLM red teaming, AD assessments, and AI-validated SAST and SCA so leadership sees one story and engineering gets evidence they can ship against.',
  sublead:
    'Milestone delivery, daily visibility, and fast escalation on criticals. AI speeds recon and triage; senior testers sign off on what hits your backlog so you prioritize real risk, not scanner noise.',
  proofPoints: [
    'Findings validated by operators, not checklists alone',
    'OffSec Management Portal for scoring, retest, and audit trails',
    'In-house ASM, ToIP, LLM suite, AD framework, and AI SAST',
  ],
  primaryCta: { label: 'Talk to our team', to: '/contact' as const },
  secondaryCta: { label: 'Download sales pitch (PDF)', href: SALES_PITCH_PDF },
  tertiaryCta: { label: 'Explore services', to: '/services' as const },
} as const

/** Home: two-column coverage hub (replaces old "services at a glance" grid). No "services" wording in the eyebrow. */
export const HOME_CAPABILITIES_HUB = {
  eyebrow: 'Offensive security coverage',
  headline: 'Uncover Material Risk Before Adversaries Exploit It',
  body:
    'Technieum offensive engineers go beyond commodity scanning: in-house ASM, TOIP intelligence, LLM red teaming, AI-augmented SAST and SCA, and AD assessments validate and prioritize what actually matters across your attack surface.',
  primaryCta: { label: 'Get started', to: '/contact' as const },
} as const

export const WHY_TECHNIEUM = [
  {
    title: 'AI at every layer',
    body:
      'Agentic recon, RAG-backed intel in ToIP, and AI-assisted remediation guidance. AI amplifies each stage; experts still decide.',
  },
  {
    title: 'Timely delivery',
    body:
      'Milestone-driven work, daily updates, weekly reviews, and fast critical escalation. Structured comms so leadership stays aligned.',
  },
  {
    title: 'Accurate, actionable remediation',
    body:
      'Fix guidance tailored to your stack, not generic scanner output. Written so developers and operators can ship changes.',
  },
  {
    title: 'In-house R and D',
    body:
      'Researchers hunting zero-days and publishing CVEs. That work feeds our tooling and every client engagement.',
  },
  {
    title: 'Six proprietary AI capabilities',
    body:
      'ToIP, LLM Attack Suite, AD Suite, AI ASM, AI SAST, and AI SCA, built here and run alongside commercial tools when needed.',
  },
  {
    title: '360 coverage per engagement',
    body:
      'SAST, SCA, ASM, AD, and AI or LLM testing in one program, cross-correlated across the attack surface you define.',
  },
  {
    title: 'Zero false positives commitment',
    body:
      'AI speeds discovery; humans validate every finding. Your backlog stays focused on confirmed risk, not noise.',
  },
] as const

export const HOME_TOIP = {
  title: 'TOIP (Technieum Offsec Intelligence Portal)',
  subtitle: 'RAG-backed vulnerability intelligence at query speed',
  intro:
    'ToIP is the research layer behind Technieum engagements: curated disclosure narratives, retrieval-augmented answers with citations, and operator-style playbooks so testers align cases to what broke in the field.',
  bullets: [
    'Semantic search across 15,000+ real-world disclosed vulnerabilities with grounded citations.',
    'Attack playbooks with payloads, bypass notes, and chain logic drawn from disclosed cases.',
    'Supports scoping and validation workflows; intelligence rolls forward into the OffSec Management Portal.',
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

export const OFFENSIVE_WORKFLOW = {
  /** Section label (nav / outline); engine name */
  title: 'The Technieum Offensive Engine',
  eyebrow: 'Your All-in-One Continuous Offensive Security Platform',
  meetHeadline: 'Meet the Technieum Offensive Engine',
  intro:
    'The Technieum Offensive Engine provides unified offensive coverage by combining attack surface management, vulnerability intelligence and AI-augmented testing, continuous penetration streams, breach and adversary simulation, and ToIP-backed exploit intelligence into a single coordinated program with portal-native scoring, reporting, and retest.',
} as const

export const PROJECT_CYCLE = {
  title: 'The Technieum project cycle',
  subtitle: 'From onboarding to delivery',
  intro:
    'Milestone-driven delivery with daily visibility, weekly reviews when you need them, and instant escalation for critical findings. No black-box engagements.',
  diagramEyebrow: 'Animated overview',
  diagramCaption:
    'The ring walks through all eight phases in order. Hover this overview or any step card to pause and explore.',
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
      body: 'ToIP scenarios, AI SAST logic, ASM playbooks.',
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
  headline: "Let's scope your next offensive security program",
  lead:
    'From red-team objectives and cloud attack-surface reviews to application and AI testing under one delivery model, we help you move from question to plan quickly.',
  subLead:
    'Technical programs route to offensive leadership. Commercial, procurement, and alliance topics go to our partnerships desk.',
  pillars: [
    {
      title: 'Structured technical intake',
      body:
        'Share goals, environments, and constraints. We map streams, tooling overlap, and reporting so procurement and engineering see the same plan.',
    },
    {
      title: 'Confidential by default',
      body:
        'Operate under NDA when you need it. Scoping stays with named stakeholders; we do not circulate details beyond your engagement team.',
    },
    {
      title: 'Clear next steps',
      body:
        'Expect a short acknowledgment, clarifying questions where useful, and proposed call times. Formal proposals or SOW drafts follow alignment on scope.',
    },
  ],
  responseLine: 'We aim to respond within one business day (Gulf timezone).',
  ctaSecondary: 'Browse services',
} as const
