/** Application security program page. Source: public/servicedocumentfolder/technieum-application-security.pdf */

export const APP_SEC_PDF_HREF = '/servicedocumentfolder/technieum-application-security.pdf' as const

export const APP_SEC_HERO = {
  eyebrow: 'Application security',
  title: 'Application security testing',
  lead:
    'Business logic-aware testing of web apps, APIs, mobile, and source code — powered by AI SAST and the Technieum OffSec Management Portal. Browser, API, mobile, architecture, and code-level testing with exploitability you can defend in sprint planning and release gates.',
  sub:
    'Structured to align with the application security datasheet: OWASP-aligned cases, AI-assisted SAST and SCA where they help, Technieum OffSec Management Portal–backed playbooks, and human validation before severity hits your backlog.',
} as const

export const APP_SEC_KEY_BENEFITS = {
  title: 'Key benefits',
  subtitle: 'Why this matters',
  items: [
    {
      title: 'Business logic intelligence',
      body:
        'We extract your application authentication, authorization, and transaction logic — then generate target-specific attack playbooks.',
    },
    {
      title: 'Agentic SAST pipeline',
      body:
        'Source code to logic extraction, Technieum OffSec Management Portal playbooks, and validated exploits: automated analysis, then human validation.',
    },
    {
      title: 'Zero false positives commitment',
      body:
        'Every SAST finding, dynamic test, and SCA alert is manually validated before reporting. You fix real bugs only.',
    },
  ],
} as const

export const APP_SEC_CHALLENGE = {
  title: 'Your challenge',
  intro: 'Your applications span web frontends, REST, GraphQL, and SOAP APIs, mobile clients, and complex business logic:',
  bullets: [
    'Business logic flaws that automated scanners miss',
    'Expanding API surfaces with complex authorization models',
    'Third-party dependency risks in your supply chain',
    'False positive noise consuming engineering time',
  ],
} as const

export const APP_SEC_PARTNER = {
  title: 'Why Technieum as your trusted partner',
  body:
    'Technieum brings six proprietary AI platforms, an in-house R&D team actively hunting zero-days, and AI-powered methodologies that deliver validated, exploitable findings with a zero false positives commitment — enabling your team to focus remediation effort where it matters most.',
} as const

export const APP_SEC_SOLUTION_INTRO = {
  title: 'Our solution',
  subtitle: 'Services overview',
  intro:
    'Technieum combines AI-powered static analysis with dynamic testing, manual code review, and SCA — all cross-correlated through the Technieum OffSec Management Portal.',
} as const

export const APP_SEC_SERVICE_CATALOG = [
  {
    step: '1',
    title: 'Web app penetration testing',
    body:
      'Comprehensive manual testing covering authentication mechanisms, session management, horizontal and vertical access control bypasses, business logic flaws (payment manipulation, workflow bypass, race conditions), file upload vulnerabilities, server-side request forgery, template injection, and application-specific attack scenarios beyond standard OWASP Top 10 coverage.',
  },
  {
    step: '2',
    title: 'API testing (REST, GraphQL, SOAP)',
    body:
      'Dedicated API security assessment covering BOLA and IDOR vulnerabilities, broken authentication and authorization, excessive data exposure, mass assignment, injection attacks, rate limiting bypass, GraphQL-specific attacks (introspection abuse, query depth and batching), SOAP XML injection, and API-specific business logic flaws with full request and response evidence.',
  },
  {
    step: '3',
    title: 'Mobile application testing',
    body:
      'iOS and Android: binary analysis, reverse engineering, certificate pinning bypass, insecure storage, and runtime manipulation.',
  },
  {
    step: '4',
    title: 'Thick client testing',
    body:
      'Desktop application security: binary reverse engineering, memory analysis, IPC exploitation, and local privilege escalation.',
  },
  {
    step: '5',
    title: 'Source code review (AI SAST)',
    body:
      'AI-powered static analysis beyond pattern matching: authentication flows, authorization models, transaction logic, and data handling. Identifies business logic vulnerabilities, tainted data flows, insecure cryptographic implementations, hardcoded secrets, and injection sinks with contextual exploitability scoring.',
  },
  {
    step: '6',
    title: 'Software composition analysis',
    body:
      'Dependency scanning with exploitability scoring and reachability analysis — which vulnerabilities are actually reachable in your code paths.',
  },
  {
    step: '7',
    title: 'Architecture security review',
    body:
      'Authentication and authorization patterns, data flows, API gateway configuration, microservices communication, and secrets management.',
  },
] as const

export const APP_SEC_EDGE = {
  title: 'The Technieum edge',
  subtitle: 'Why Technieum for application security',
  methodologyLead:
    'Agentic SAST pipeline: source code to AI analysis, business logic extraction, Technieum OffSec Management Portal playbooks, exploit creation, and human validation.',
  pillars: [
    {
      title: 'Business logic extraction',
      body: 'We understand your application authentication, authorization, and transaction logic before testing.',
    },
    {
      title: 'AI SAST and AI SCA',
      body: 'Proprietary static analysis with exploitability scoring and reachability analysis on dependencies.',
    },
    {
      title: 'Technieum OffSec Management Portal attack playbooks',
      body: '15,000+ vulnerability contexts — payloads, WAF bypasses, and exploit chains aligned to your stack.',
    },
    {
      title: 'Full stack coverage',
      body: 'Web, API, mobile, thick client, source code, and SCA in one engagement narrative.',
    },
    {
      title: 'Code to validated exploits',
      body: 'Pipeline from repository logic through playbooks to evidence-backed findings — automated depth, human sign-off.',
    },
    {
      title: 'Zero false positives commitment',
      body: 'Every finding manually validated. Real risk only in your backlog.',
    },
  ],
} as const

export const APP_SEC_METHODOLOGY = {
  title: 'How we deliver results',
  subtitle: 'Our methodology',
  intro:
    "Technieum's application security methodology follows a structured five-phase approach for web applications, APIs, mobile apps, and source code — combining AI-powered static analysis with deep manual testing.",
  phases: [
    {
      step: '1',
      title: 'Discover',
      body:
        'Application reconnaissance maps endpoints, authentication flows, API schemas (REST, GraphQL, SOAP), mobile binary analysis, and technology stack fingerprinting. AI SAST performs initial source analysis to extract business logic patterns.',
    },
    {
      step: '2',
      title: 'Analyze',
      body:
        'AI SAST extracts authentication, authorization, and transaction logic from source. The Technieum OffSec Management Portal generates application-specific attack playbooks. AI SCA maps dependency risks with exploitability scoring. Threat models reflect your architecture.',
    },
    {
      step: '3',
      title: 'Attack',
      body:
        'Manual exploitation of business logic flaws, authentication bypasses, authorization failures, injection chains, API-specific issues (BOLA, IDOR, mass assignment), mobile client-side attacks, and complex multi-step chains.',
    },
    {
      step: '4',
      title: 'Report',
      body:
        'Technical reports with API endpoint-specific findings, business logic test case documentation, SAST and SCA results, CVSS-scored issues with request and response PoC evidence, and application architecture risk assessment.',
    },
    {
      step: '5',
      title: 'Remediate',
      body:
        'Framework-specific guidance: React, Angular, Django, Spring, Node.js, iOS, and Android patterns. Code-level fix examples, secure coding recommendations, dependency upgrade paths, and retest on every fix.',
    },
  ],
} as const

export const APP_SEC_DELIVERABLE_REPORTS = {
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
      title: 'Technieum OffSec Management Portal playbook document',
      body:
        'Target-specific attack playbooks from 15,000+ real-world disclosed vulnerabilities via our RAG-powered intelligence engine.',
    },
  ],
} as const

/** Extends hub config deliverables with PDF program expectations. */
export const APP_SEC_DELIVERABLES_PROGRAM_EXTRA = [
  'Milestone-driven tracking with immediate escalation of critical findings via the OffSec Management Portal — you do not wait for the final report to learn about urgent risks.',
] as const

export const APP_SEC_STANDARDS = {
  title: 'Standards alignment',
  intro:
    'Every Technieum engagement aligns with globally recognized security frameworks including OWASP Top 10, OWASP API Top 10, OWASP LLM Top 10, PTES, NIST CSF, NIST AI RMF, MITRE ATT&CK, CIS Benchmarks, IEC 62443, and ISO 27001:2022.',
  certifications:
    'Our team holds OSCP, OSEP, CRTE, CRTP, eWPTX, eCPPT, and CEH certifications. Technieum is ISO 9001:2015 and ISO 27001:2022 certified.',
} as const

export const APP_SEC_CTA = {
  title: 'Ready to secure your organization?',
  body: 'Partner with Technieum for AI-powered offensive security with validated, actionable findings.',
  contacts: [
    { label: 'robert.a@technieum.com', href: 'mailto:robert.a@technieum.com' },
    { label: 'syam.s@technieum.com', href: 'mailto:syam.s@technieum.com' },
  ],
} as const
