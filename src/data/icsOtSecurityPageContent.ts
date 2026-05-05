/**
 * ICS / OT security program page.
 * PDF: public/servicedocumentfolder/technieum-ics-ot-security.pdf
 * Route slug: technieum-ics-ot-security
 */

export const ICS_OT_PDF_HREF = '/servicedocumentfolder/technieum-ics-ot-security.pdf' as const

export const ICS_OT_HERO = {
  eyebrow: 'ICS and OT',
  title: 'ICS OT security',
  lead:
    'Industrial assessments that respect safety and uptime while surfacing segmentation, access, protocol, and IT–OT pivot risks — with evidence plant and enterprise teams can act on together.',
  sub:
    'Grounded in the ICT / OT security datasheet: staged methods, explicit no-go zones, freeze windows with engineering sign-off, and reporting PAS leads can use without translating from generic IT pentest style.',
} as const

export const ICS_OT_KEY_BENEFITS = {
  title: 'Key benefits',
  subtitle: 'Why this matters',
  items: [
    {
      title: 'Safety-first execution',
      body: 'Non-disruptive techniques, agreed abort criteria, and scope boundaries that respect process and vendor constraints.',
    },
    {
      title: 'Plant-credible evidence',
      body: 'Protocol, device, and zone context so remediation conversations stay in engineering language.',
    },
    {
      title: 'IT–OT narrative',
      body: 'Clear lateral stories from enterprise compromise into control environments with blast-radius framing.',
    },
  ],
} as const

export const ICS_OT_CHALLENGE = {
  title: 'Your challenge',
  intro: 'OT environments carry unique constraints alongside real-world attacker interest:',
  bullets: [
    'How do you test without risking process safety or unplanned downtime?',
    'Are IT–DMZ–OT boundaries and remote access paths defensible under stress?',
    'Which industrial protocols and field devices expose weak authentication or cleartext?',
    'Can leadership and auditors trace findings to operational impact, not CVSS alone?',
  ],
} as const

export const ICS_OT_PARTNER = {
  title: 'Why Technieum as your trusted partner',
  body:
    'Technieum brings six proprietary AI platforms, an in-house R&D team actively hunting zero-days, and AI-powered methodologies that deliver validated, exploitable findings with a zero false positives commitment — enabling your team to focus remediation effort where it matters most.',
} as const

export const ICS_OT_SOLUTION_INTRO = {
  title: 'Our solution',
  subtitle: 'Services overview',
  intro:
    'Technieum delivers ICS and OT assessments tailored to your sites, vendors, and maintenance reality — combining segmentation review, protocol-aware testing where safe, and IT–OT pivot analysis.',
} as const

export const ICS_OT_SERVICE_CATALOG = [
  {
    step: '1',
    title: 'Scope and safety framing',
    body:
      'Rules of engagement aligned to PAS, vendor maintenance windows, and explicit no-go zones. Asset inventory alignment and communication plans so operations stay in control.',
  },
  {
    step: '2',
    title: 'Segmentation and access review',
    body:
      'Firewalling, jump hosts, remote access, and zone boundaries between IT, DMZ, and OT layers — including third-party and vendor connectivity paths.',
  },
  {
    step: '3',
    title: 'Protocols and field devices',
    body:
      'Industrial protocols and device classes reviewed for authentication gaps, cleartext exposure, and misconfiguration — always within agreed safety envelopes.',
  },
  {
    step: '4',
    title: 'IT–OT pivot assessment',
    body:
      'Narrated paths from enterprise compromise into control networks, with blast-radius commentary for board and engineering stakeholders.',
  },
  {
    step: '5',
    title: 'Hardening and remediation matrix',
    body:
      'Priorities ordered by safety and operational impact, with engineering-oriented notes and maintenance-window guidance — not textbook-only recommendations.',
  },
  {
    step: '6',
    title: 'Portal and program continuity',
    body:
      'Optional tracking in the OffSec Management Portal when combined with broader Technieum streams for one operating rhythm.',
  },
] as const

export const ICS_OT_EDGE = {
  title: 'The Technieum edge',
  subtitle: 'Why Technieum for ICS / OT',
  methodologyLead:
    'Safety-coupled methodology, protocol depth, IT–OT storytelling, and remediation that respects how plants actually patch and change.',
  pillars: [
    {
      title: 'Operations partnership',
      body: 'Freeze windows, vendor constraints, and PAS engagement baked into planning — not bolted on after findings land.',
    },
    {
      title: 'Evidence operators trust',
      body: 'Diagrams, protocol context, and device-class notes that map to how engineers defend the floor.',
    },
    {
      title: 'Standards-aware',
      body: 'Alignment to IEC 62443 themes and audit-support artifacts when regulatory or insurance follow-up matters.',
    },
    {
      title: 'Unified portfolio',
      body: 'Same portal scoring, retest discipline, and executive narrative patterns as infrastructure and cloud programs.',
    },
  ],
} as const

export const ICS_OT_METHODOLOGY = {
  title: 'How we deliver results',
  subtitle: 'Our methodology',
  intro:
    'Technieum follows a staged ICS / OT methodology: align on safety and scope first, then assess segmentation, protocols, and IT–OT pivots — closing with a remediation matrix engineering can schedule.',
  phases: [
    {
      step: '1',
      title: 'Discover',
      body:
        'Asset and zone baseline, vendor constraints, maintenance calendars, and threat context for your industry and site topology.',
    },
    {
      step: '2',
      title: 'Analyze',
      body:
        'Architecture review of IT–DMZ–OT paths, remote access, and jump patterns; protocol and device risk hypotheses within ROE.',
    },
    {
      step: '3',
      title: 'Assess',
      body:
        'Controlled, safety-reviewed testing and validation — segmentation stress, credential and access paths, and protocol findings where non-disruptive.',
    },
    {
      step: '4',
      title: 'Report',
      body:
        'Plant-credible write-ups with diagrams, blast-radius narratives, and prioritization by safety and operational impact.',
    },
    {
      step: '5',
      title: 'Remediate',
      body:
        'Engineering-oriented remediation matrix, optional retest windows, and portal tracking when part of a broader program.',
    },
  ],
} as const

export const ICS_OT_DELIVERABLE_REPORTS = {
  title: 'What you receive',
  subtitle: 'Deliverables',
  intro:
    'Every engagement produces deliverables for PAS, IT, and leadership — plus optional portal visibility consistent with the rest of the Technieum portfolio.',
  pdfCore: [
    {
      title: 'Technical report',
      body:
        'Detailed findings with CVSS where applicable, CWE mapping, proof-oriented evidence, and reproduction notes sized for engineering tickets.',
    },
    {
      title: 'Management report',
      body:
        'Executive risk summary with business and safety impact framing, prioritized recommendations, and strategic remediation themes.',
    },
    {
      title: 'Threat model report',
      body:
        'Attack vectors and adversary profiles mapped to MITRE ATT&CK and OT-relevant TTPs where they strengthen prioritization.',
    },
    {
      title: 'Technieum OffSec Intelligence Portal playbook document',
      body:
        'Target-specific intelligence playbooks from our RAG-powered engine to contextualize industry-relevant OT and IT–OT threats.',
    },
  ],
} as const

export const ICS_OT_DELIVERABLES_PROGRAM_EXTRA = [
  'Milestone-driven tracking with immediate escalation of critical findings via the OffSec Management Portal — you do not wait for the final report to learn about urgent risks.',
] as const

export const ICS_OT_STANDARDS = {
  title: 'Standards alignment',
  intro:
    'Every Technieum engagement aligns with globally recognized security frameworks including OWASP Top 10, OWASP API Top 10, OWASP LLM Top 10, PTES, NIST CSF, NIST AI RMF, MITRE ATT&CK, CIS Benchmarks, IEC 62443, and ISO 27001:2022.',
  certifications:
    'Our team holds OSCP, OSEP, CRTE, CRTP, eWPTX, eCPPT, and CEH certifications. Technieum is ISO 9001:2015 and ISO 27001:2022 certified.',
} as const

export const ICS_OT_CTA = {
  title: 'Ready to secure your organization?',
  body: 'Partner with Technieum for AI-powered offensive security with validated, actionable findings.',
  contacts: [
    { label: 'robert.a@technieum.com', href: 'mailto:robert.a@technieum.com' },
    { label: 'syam.s@technieum.com', href: 'mailto:syam.s@technieum.com' },
  ],
} as const
