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

export const WHY_TECHNIEUM = [
  {
    title: 'AI at every layer',
    body:
      'From agentic recon (100+ tools in the ASM stack) to RAG-based intelligence (15,000+ disclosed vulnerability reports in ToIP) to AI-assisted remediation guidance, AI amplifies every stage without replacing expert judgment.',
  },
  {
    title: 'Timely delivery',
    body:
      'Milestone-driven engagements with daily updates, weekly reviews, and instant critical escalation. Structured communication reduces drift and keeps leadership informed.',
  },
  {
    title: 'Accurate, actionable remediation',
    body:
      'Context-aware fix guidance tailored to your technology stack, not generic scanner output. Remediation that developers and operators can implement.',
  },
  {
    title: 'In-house R and D',
    body:
      'Dedicated researchers hunting zero-days and publishing CVEs. Research feeds directly into tooling and every client engagement.',
  },
  {
    title: 'Six proprietary AI capabilities',
    body:
      'ToIP, LLM Attack Suite, AD Suite, AI-based ASM, AI SAST, and AI SCA, built in-house and orchestrated alongside commercial tools where needed.',
  },
  {
    title: '360 coverage per engagement',
    body:
      'Every project can include SAST plus SCA plus ASM plus AD plus AI or LLM testing, cross-correlated. One engagement, complete visibility across the attack surface you define.',
  },
  {
    title: 'Zero false positives commitment',
    body:
      'AI accelerates discovery; human experts validate every finding. You prioritize and remediate confirmed risk, not scanner noise.',
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
  subtitle: 'Central command for multi-stream testing',
  bullets: [
    'Unifies every delivery stream: shared intelligence, consistent scoring, and one operational picture.',
    'Multi-tester collaboration with role-appropriate views and workflow.',
    'CVSS scoring, CWE mapping, one-click reporting, and real-time dashboards.',
    'Retest tracking and evidence trails from first finding through closure.',
    'Typical outcome: roughly 30 to 40 percent reduction in administrative overhead versus ad-hoc reporting.',
  ],
} as const

export const OFFENSIVE_WORKFLOW = {
  title: 'The Technieum offensive workflow',
  subtitle: 'Five parallel lanes. One portal.',
  intro:
    'Intel, scanners, and LLM testing feed shared ToIP intelligence, then validated findings roll into the OffSec Management Portal.',
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
