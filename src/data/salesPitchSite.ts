/** Site-wide marketing copy aligned to Technieum_Sales_Pitch_Dark.pdf (ASCII only). */

export const SALES_PITCH_PDF = '/salespitch/Technieum_Sales_Pitch_Dark.pdf'

export const HOME_HERO = {
  eyebrow: 'Offensive security services | March 2026 positioning',
  title: '360 coverage, human-validated results, AI at every layer.',
  lead:
    'Technieum delivers proprietary platforms and expert-led offensive security: from agentic reconnaissance and RAG-backed intelligence to LLM red teaming, AD path analysis, ASM, and AI-validated static analysis. One engagement can span SAST, SCA, ASM, Active Directory, and AI or LLM testing, cross-correlated in a single program.',
  sublead:
    'Milestone-driven delivery with daily updates, weekly reviews, and immediate escalation for critical findings. AI accelerates discovery; human experts validate every finding so you act on real risk.',
  primaryCta: { label: 'Explore platforms', to: '/#platform-suite' },
  secondaryCta: { label: 'Download sales pitch (PDF)', href: SALES_PITCH_PDF },
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
    title: 'Six proprietary AI platforms',
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

export const OFFSEC_PORTAL = {
  title: 'OffSec Management Portal',
  subtitle: 'Central command for multi-stream testing',
  bullets: [
    'Unifies all proprietary platforms: shared intelligence, consistent scoring, and one operational picture.',
    'Multi-tester collaboration with role-appropriate views and workflow.',
    'CVSS scoring, CWE mapping, one-click reporting, and real-time dashboards.',
    'Retest tracking and evidence trails from first finding through closure.',
    'Typical outcome: roughly 30 to 40 percent reduction in administrative overhead versus ad-hoc reporting.',
  ],
} as const

export const OFFENSIVE_WORKFLOW = {
  title: 'The Technieum offensive workflow',
  subtitle: 'Parallel workstreams. One unified pipeline.',
  intro:
    'Five converging intelligence pipelines are centrally managed in the OffSec Management Portal. Manual and automated techniques combine per workstream until findings are validated and ready for client action.',
  workstreams: [
    {
      name: 'Attack surface and ASM intel',
      detail:
        'Subdomains, APIs, technology stack fingerprinting, and ASM or SAST-driven surface discovery feed surface-specific playbooks.',
    },
    {
      name: 'SAST intel',
      detail:
        'Findings such as injection and XSS classes roll into exploit-matched and target-specific playbooks with business logic context.',
    },
    {
      name: 'LLM and AI security',
      detail:
        'Endpoint discovery, exhaustive and target-specific prompt testing, logic extraction for auth, authorization, and transactions.',
    },
    {
      name: 'ToIP intelligence engine',
      detail:
        '15,000+ curated reports, RAG semantic search, curated templates, and escalation paths from intel to validated findings.',
    },
    {
      name: 'Nuclei and scanner correlation',
      detail:
        'Template-backed validation aligned with ASM and portal tracking for consistent retest and evidence.',
    },
  ],
  footer:
    'Centralized tracking, real-time client dashboards, findings management, and retest workflow tie the streams together.',
} as const

export const PROJECT_CYCLE = {
  title: 'The Technieum project cycle',
  subtitle: 'From onboarding to delivery',
  intro:
    'Structured, milestone-driven delivery with daily updates and instant critical escalation. No unnecessary delays.',
  phases: [
    {
      step: '1',
      title: 'Scoping and planning',
      body:
        'Define objectives, rules of engagement, and target scope. Formal test plan with a dedicated project manager and lead penetration tester.',
    },
    {
      step: '2',
      title: 'Automated reconnaissance',
      body:
        'Agentic AI deploys 100+ tools: subdomain discovery, DNS resolution, web probing, and initial vulnerability scanning.',
    },
    {
      step: '3',
      title: 'Intelligence integration',
      body:
        'ToIP frames attack scenarios. AI SAST extracts business logic. ASM feeds surface-specific playbooks.',
    },
    {
      step: '4',
      title: 'Collaborative testing',
      body:
        'Multi-tester parallel execution through the OffSec Portal. Daily updates and immediate escalation for critical findings.',
    },
    {
      step: '5',
      title: 'Deep vulnerability analysis',
      body:
        'Business logic exploitation, privilege escalation chains, and complex chaining. Every finding is validated before report.',
    },
    {
      step: '6',
      title: 'Reporting and documentation',
      body:
        'Executive summary, technical report with CVSS and CWE, business logic test cases, playbook documentation, and proof-of-concept demonstrations.',
    },
    {
      step: '7',
      title: 'AI-powered remediation',
      body:
        'Accurate, context-aware fix guidance tailored to your stack rather than generic suggestions.',
    },
    {
      step: '8',
      title: 'Retesting and validation',
      body:
        'Verify every remediation, confirm closure, update the live dashboard, and close with evidence-backed sign-off.',
    },
  ],
} as const

export const SERVICE_GROUPS = [
  {
    heading: 'Infrastructure and network',
    items: [
      'External infrastructure testing (ASM)',
      'Internal network penetration testing',
      'External network penetration testing',
      'Active Directory security audit',
      'Wireless network security testing',
      'Build and configuration review',
      'Vulnerability assessment',
    ],
  },
  {
    heading: 'Application security',
    items: [
      'Web application penetration testing',
      'API penetration testing (REST, GraphQL, SOAP)',
      'Mobile application penetration testing',
      'Thick client penetration testing',
      'Source code review (AI SAST)',
      'Software composition analysis (AI SCA)',
      'Architecture security review',
    ],
  },
  {
    heading: 'AI and emerging technology',
    items: [
      'AI and LLM penetration testing',
      'MCP (Model Context Protocol) testing',
      'Threat modelling (AI-enhanced)',
      'AI-powered remediation guidance',
    ],
  },
  {
    heading: 'Social engineering and assurance',
    items: [
      'Phishing impact testing (including MFA bypass scenarios)',
      'End-to-end remediation guidance',
      'Retesting and validation',
    ],
  },
] as const

export const STANDARDS_STRIP =
  'Aligned to OWASP Top 10, OWASP API Top 10, OWASP LLM Top 10, PTES, NIST, NIST AI RMF, CIS, and common certification bodies. Team certifications include OSCP, OSEP, CRT, CRTP, ISO 9001:2015, ISO 27001:2022, eWPTX, eCPPT, CEH, and related credentials.'

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
  tagline: 'AI as a force multiplier, not a replacement. Human in the loop at every layer, every finding, every engagement.',
} as const
