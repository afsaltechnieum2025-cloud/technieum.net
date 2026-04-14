/**
 * Security consulting program page.
 * PDF: public/servicedocumentfolder/technieum-security-consulting.pdf
 */

export const SEC_CONS_PDF_HREF = '/servicedocumentfolder/technieum-security-consulting.pdf' as const

export const SEC_CONS_HERO = {
  eyebrow: 'Security consulting',
  title: 'Security consulting',
  lead:
    'Strategy, architecture, and program design that connect offensive investment to business risk, compliance asks, and how your teams actually operate — with roadmaps leadership can fund.',
  sub:
    'Matches the security consulting datasheet: workshops, architecture memos, program playbooks, and board-ready materials — without replacing hands-on testing when execution is still required.',
} as const

export const SEC_CONS_KEY_BENEFITS = {
  title: 'Key benefits',
  subtitle: 'Why this matters',
  items: [
    {
      title: 'Fundable roadmaps',
      body: 'Prioritized backlogs, timelines, and owners so security spend ties to measurable risk reduction.',
    },
    {
      title: 'One narrative',
      body: 'Consistent story from board slides through engineering — no more disconnected audit, architecture, and pentest threads.',
    },
    {
      title: 'Bridge to delivery',
      body: 'Clear handoff into Technieum testing lines or your internal teams when you move from design to execution.',
    },
  ],
} as const

export const SEC_CONS_CHALLENGE = {
  title: 'Your challenge',
  intro: 'Organizations often struggle to align advisory work with real operations:',
  bullets: [
    'How do you prioritize offensive and control investments against actual threat and regulatory pressure?',
    'Is security architecture keeping pace with cloud, identity, and vendor sprawl?',
    'Does recurring testing feel ad hoc instead of an operating model?',
    'Can executives and auditors hear the same risk story engineering is executing against?',
  ],
} as const

export const SEC_CONS_PARTNER = {
  title: 'Why Technieum as your trusted partner',
  body:
    'Technieum brings six proprietary AI platforms, an in-house R&D team actively hunting zero-days, and AI-powered methodologies that deliver validated, exploitable findings with a zero false positives commitment — enabling your team to focus remediation effort where it matters most.',
} as const

export const SEC_CONS_SOLUTION_INTRO = {
  title: 'Our solution',
  subtitle: 'Services overview',
  intro:
    'Technieum consulting engagements combine offensive strategy, security architecture review, program operating models, compliance mapping, and executive workshops — scoped to decisions you need to make next.',
} as const

export const SEC_CONS_SERVICE_CATALOG = [
  {
    step: '1',
    title: 'Offensive strategy and investment',
    body:
      'Coverage models, testing frequency, and stream selection (application, cloud, identity, OT, simulations) based on threat landscape and regulatory context.',
  },
  {
    step: '2',
    title: 'Security architecture',
    body:
      'Trust zones, control selection, and technology choices reviewed before major spend locks in — including hybrid and multi-cloud patterns.',
  },
  {
    step: '3',
    title: 'Program operating model',
    body:
      'Roles, vendor orchestration, intake, and metrics so offensive and assurance work runs on a calendar instead of reacting to incidents alone.',
  },
  {
    step: '4',
    title: 'Compliance alignment',
    body:
      'Mapping testing outcomes and control narratives to frameworks auditors and regulators expect — with evidence design that scales.',
  },
  {
    step: '5',
    title: 'Executive and board workshops',
    body:
      'Sessions that translate technical risk into decisions non-technical stakeholders own, with decision logs and readouts.',
  },
  {
    step: '6',
    title: 'Portal templates and handoff',
    body:
      'Optional portal templates and scoring alignment when consulting feeds directly into Technieum delivery or your internal SOC and GRC teams.',
  },
] as const

export const SEC_CONS_EDGE = {
  title: 'The Technieum edge',
  subtitle: 'Why Technieum for consulting',
  methodologyLead:
    'Consultants who also run offensive programs — strategy and architecture advice grounded in how findings actually land in backlogs.',
  pillars: [
    {
      title: 'Delivery-backed advice',
      body: 'Recommendations informed by real exploitation work across application, cloud, identity, and OT streams.',
    },
    {
      title: 'Portfolio coherence',
      body: 'Same reporting, portal, and retest patterns when you graduate from roadmap to hands-on testing.',
    },
    {
      title: 'Executive fluency',
      body: 'Workshops and memos sized for funding decisions, not generic maturity heatmaps.',
    },
    {
      title: 'Compliance without theater',
      body: 'Evidence and mapping that connect controls to tested risk — not checkbox-only narratives.',
    },
  ],
} as const

export const SEC_CONS_METHODOLOGY = {
  title: 'How we deliver results',
  subtitle: 'Our methodology',
  intro:
    'Technieum structures consulting in discover-analyze-design-handoff phases so workshops produce decisions, artifacts, and a clear path into execution.',
  phases: [
    {
      step: '1',
      title: 'Discover',
      body:
        'Stakeholder interviews, current-state architecture and program review, regulatory and threat drivers, and success criteria for the engagement.',
    },
    {
      step: '2',
      title: 'Analyze',
      body:
        'Gap analysis across strategy, architecture, and operating model; prioritization themes aligned to risk and budget reality.',
    },
    {
      step: '3',
      title: 'Design',
      body:
        'Target future state: roadmap, architecture options, program playbook outline, and compliance mapping where in scope.',
    },
    {
      step: '4',
      title: 'Validate',
      body:
        'Workshop cycles with leadership and technical owners; decision logs and revised artifacts before final delivery.',
    },
    {
      step: '5',
      title: 'Handoff',
      body:
        'Final readouts, optional portal templates, and scoped proposals for Technieum testing or internal runbooks for your teams.',
    },
  ],
} as const

export const SEC_CONS_DELIVERABLE_REPORTS = {
  title: 'What you receive',
  subtitle: 'Deliverables',
  intro:
    'Consulting outputs are tailored to scope — typically mixing strategic memos, diagrams, and program artifacts leadership can reuse.',
  pdfCore: [
    {
      title: 'Technical report',
      body:
        'Where assessments underpin consulting, detailed findings with evidence and reproduction notes consistent with Technieum delivery standards.',
    },
    {
      title: 'Management report',
      body:
        'Executive summaries with risk themes, investment recommendations, and sequencing guidance for the next 12–24 months.',
    },
    {
      title: 'Threat model report',
      body:
        'Context on adversary paths and control priorities mapped to MITRE ATT&CK and your industry when it informs roadmap choices.',
    },
    {
      title: 'ToIP playbook document',
      body:
        'Intelligence playbooks from our RAG-powered engine to ground prioritization in real disclosed weakness patterns.',
    },
  ],
} as const

export const SEC_CONS_DELIVERABLES_PROGRAM_EXTRA = [
  'Milestone-driven tracking with immediate escalation of critical findings via the OffSec Management Portal when consulting is paired with active testing — you do not wait for the final report to learn about urgent risks.',
] as const

export const SEC_CONS_STANDARDS = {
  title: 'Standards alignment',
  intro:
    'Every Technieum engagement aligns with globally recognized security frameworks including OWASP Top 10, OWASP API Top 10, OWASP LLM Top 10, PTES, NIST CSF, NIST AI RMF, MITRE ATT&CK, CIS Benchmarks, IEC 62443, and ISO 27001:2022.',
  certifications:
    'Our team holds OSCP, OSEP, CRTE, CRTP, eWPTX, eCPPT, and CEH certifications. Technieum is ISO 9001:2015 and ISO 27001:2022 certified.',
} as const

export const SEC_CONS_CTA = {
  title: 'Ready to secure your organization?',
  body: 'Partner with Technieum for AI-powered offensive security with validated, actionable findings.',
  contacts: [
    { label: 'robert.a@technieum.com', href: 'mailto:robert.a@technieum.com' },
    { label: 'syam.s@technieum.com', href: 'mailto:syam.s@technieum.com' },
  ],
} as const
