/** AI security program page. Source: public/servicedocumentfolder/technieum-ai-security.pdf */

export const AI_SEC_PDF_HREF = '/servicedocumentfolder/technieum-ai-security.pdf' as const

export const AI_SEC_HERO = {
  eyebrow: 'AI and LLM',
  title: 'AI and LLM security assessment',
  lead:
    '1,005+ attack prompts across all ten OWASP LLM categories — plus MCP testing and adversarial red teaming. LLM applications, agents, and integrations tested for prompt abuse, unsafe tool use, and data handling with probes staged under your governance rules.',
  sub:
    'Aligned to the AI security datasheet: LLM Attack Suite coverage, MCP depth, OWASP LLM Top 10, NIST AI RMF, and MITRE ATLAS-friendly language for policy teams.',
} as const

export const AI_SEC_KEY_BENEFITS = {
  title: 'Key benefits',
  subtitle: 'Why this matters',
  items: [
    {
      title: '1,005+ LLM attack prompts',
      body:
        'Comprehensive adversarial testing across all ten OWASP LLM categories via the LLM Attack Suite.',
    },
    {
      title: 'MCP testing — industry first',
      body:
        'First-mover style assessment of Model Context Protocol server implementations before many vendors treat them as in-scope attack surface.',
    },
    {
      title: 'Exhaustive escalation',
      body:
        'We do not stop at the first bypass — escalation until complete compromise or confirmed resilience.',
    },
  ],
} as const

export const AI_SEC_CHALLENGE = {
  title: 'Your challenge',
  intro:
    'Your organization deploys AI and ML systems, LLMs, and agentic tools that introduce new attack surfaces:',
  bullets: [
    'Prompt injection and jailbreak vulnerabilities',
    'MCP tool chains creating privilege escalation vectors',
    'Training data poisoning and model supply chain risks',
    'Regulatory pressure from NIST AI RMF and the EU AI Act',
  ],
} as const

export const AI_SEC_PARTNER = {
  title: 'Why Technieum as your trusted partner',
  body:
    'Technieum brings six proprietary AI platforms, an in-house R&D team actively hunting zero-days, and AI-powered methodologies that deliver validated, exploitable findings with a zero false positives commitment — enabling your team to focus remediation effort where it matters most.',
} as const

export const AI_SEC_SOLUTION_INTRO = {
  title: 'Our solution',
  subtitle: 'Services overview',
  intro:
    "Technieum's AI security practice combines the LLM Attack Suite, MCP testing, and adversarial red teaming — aligned to OWASP LLM Top 10, NIST AI RMF, and MITRE ATLAS.",
} as const

export const AI_SEC_SERVICE_CATALOG = [
  {
    step: '1',
    title: 'AI and LLM penetration testing',
    body:
      "Comprehensive adversarial testing using Technieum's LLM Attack Suite — 1,005+ attack prompts across all ten OWASP LLM Top 10 categories. Covers direct and indirect prompt injection, jailbreaks, training data extraction, PII leakage, insecure output handling, excessive agency exploitation, and model denial of service, with exhaustive escalation until bypass or confirmed resilience.",
  },
  {
    step: '2',
    title: 'MCP security testing',
    body:
      'Evaluates Model Context Protocol server implementations: tool injection that manipulates agent behavior, privilege escalation through MCP tool chains, data exfiltration via tool access, resource manipulation, authentication and authorization weaknesses in the MCP layer, and rug-pull scenarios where trusted tools become malicious.',
  },
  {
    step: '3',
    title: 'AI systems audit',
    body:
      'NIST AI RMF-aligned audit across governance, data pipelines, model training, and deployment security.',
  },
  {
    step: '4',
    title: 'Adversarial red teaming',
    body:
      'Multi-modal attacks across text, image, audio, and API inputs to test real model robustness.',
  },
  {
    step: '5',
    title: 'AI threat modelling',
    body:
      'Maps AI attack surfaces: training data poisoning, model supply chain, and tool-use chain vulnerabilities.',
  },
  {
    step: '6',
    title: 'Security tooling guidance',
    body:
      'Guardrail implementation: input validation, output filtering, and prompt injection detection.',
  },
] as const

export const AI_SEC_EDGE = {
  title: 'The Technieum edge',
  subtitle: 'Why Technieum for AI security',
  methodologyLead:
    'LLM Attack Suite deployment, MCP testing, adversarial red teaming with escalation, NIST AI RMF-aligned risk assessment, and remediation guidance.',
  pillars: [
    {
      title: 'LLM Attack Suite',
      body: '1,005+ prompts, automated simulation, real-time scoring, and remediation-oriented reporting.',
    },
    {
      title: 'MCP testing',
      body:
        'First-mover testing of Model Context Protocol server implementations — tool chains, authentication, and rug-pull style tool abuse.',
    },
    {
      title: 'NIST AI RMF alignment',
      body: 'Governance-ready output mapped to Govern, Map, Measure, and Manage.',
    },
    {
      title: 'Adversarial red teaming',
      body: 'Multi-modal attacks that stress real robustness, not only basic injection strings.',
    },
    {
      title: 'Exhaustive escalation',
      body: 'Attack vectors pushed until compromise or confirmed resilience.',
    },
    {
      title: 'R&D-driven intelligence',
      body: 'Researchers tracking emerging AI attack techniques and toolchains.',
    },
  ],
} as const

export const AI_SEC_INDUSTRY_VERTICALS = {
  title: 'Industry-specific testing',
  subtitle: 'Vertical-specific AI security',
  intro:
    'Purpose-built scenarios tailored to sector risks, regulations, and threat models — with industry-aware prompt libraries, compliance-mapped cases, and vertical risk scoring.',
  verticals: [
    {
      title: 'Banking and financial services',
      body:
        'MNPI leakage testing, unauthorized investment advice detection, AML and KYC compliance gaps, proprietary trading strategy exposure, market manipulation facilitation, and fiduciary duty breach scenarios. Aligned with FINRA Rule 3110, SEC Regulation BI, and SR 11-7 model risk management expectations.',
    },
    {
      title: 'Telecommunications',
      body:
        'Voice AI agent hijacking, subscriber data exposure through conversational AI, SIM swap facilitation, call routing manipulation, network configuration disclosure, and customer PII extraction via voice and text assistants — inbound service AI and outbound AI-powered communications.',
    },
    {
      title: 'Real estate',
      body:
        'Fair housing compliance across seven federally protected classes: race, color, religion, national origin, sex, familial status, and disability. AI-driven steering, discriminatory listing language, lending bias in pre-qualification bots, valuation bias in automated models, and advertising exclusion. Aligned with the Fair Housing Act, ECOA, and HUD guidance.',
    },
    {
      title: 'E-commerce',
      body:
        'Dynamic pricing manipulation, fake review generation and detection bypass, payment fraud facilitation, inventory manipulation, competitor intelligence extraction, personalization exploitation, and recommendation bias — across AI search, recommendations, pricing, and customer service.',
    },
    {
      title: 'Healthcare and medical',
      body:
        'PHI exposure through clinical AI assistants, misdiagnosis risk from AI-assisted diagnostics, prescription error scenarios, patient data extraction via conversational interfaces, clinical trial data leakage, and HIPAA compliance gaps — EHR-integrated AI, telehealth bots, and clinical decision support.',
    },
    {
      title: 'Teen safety and child protection',
      body:
        'Predator grooming pattern facilitation, age verification bypass, harmful content generation (self-harm, substance abuse, violence), inappropriate relationship simulation, child data collection (COPPA), and parental control circumvention — for platforms accessible to minors including social, gaming, education, and messaging.',
    },
    {
      title: 'Airlines and aviation',
      body:
        'Safety protocol bypass in AI-assisted flight operations, booking manipulation, loyalty fraud facilitation, passenger data extraction, crew scheduling interference, and maintenance procedure circumvention via AI assistants — customer booking AI, operational support, and crew communication tools.',
    },
  ],
} as const

export const AI_SEC_METHODOLOGY = {
  title: 'How we deliver results',
  subtitle: 'Our methodology',
  intro:
    "Technieum's AI security methodology follows a structured five-phase approach for LLM applications, AI agents, MCP implementations, and machine learning systems — aligned to OWASP LLM Top 10 and NIST AI RMF.",
  phases: [
    {
      step: '1',
      title: 'Discover',
      body:
        'Maps LLM interfaces, API surfaces, MCP server configurations, RAG data sources, agent tool chains, and deployment architectures. Fingerprints models, frameworks, and guardrail implementations.',
    },
    {
      step: '2',
      title: 'Analyze',
      body:
        'NIST AI RMF-aligned assessment of governance, data pipeline security, training procedures, and deployment controls. Threat models cover prompt injection, data poisoning, and tool-use chain exploitation.',
    },
    {
      step: '3',
      title: 'Attack',
      body:
        'LLM Attack Suite runs 1,005+ adversarial prompts across all ten OWASP LLM categories. MCP tool injection and privilege escalation testing. Multi-modal attacks across text, image, and API inputs. Exhaustive escalation until bypass or resilience.',
    },
    {
      step: '4',
      title: 'Report',
      body:
        'AI-specific technical reports: OWASP LLM Top 10 categorization, MCP findings, adversarial red team results with bypass evidence, and NIST AI RMF compliance gap analysis for governance teams.',
    },
    {
      step: '5',
      title: 'Remediate',
      body:
        'Guardrail configuration, input validation, output filtering, prompt engineering improvements, MCP authentication hardening, and model monitoring. Retest validates each control.',
    },
  ],
} as const

export const AI_SEC_DELIVERABLE_REPORTS = {
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
      title: 'ToIP playbook document',
      body:
        'Target-specific attack playbooks from 15,000+ real-world disclosed vulnerabilities via our RAG-powered intelligence engine.',
    },
  ],
} as const

export const AI_SEC_DELIVERABLES_PROGRAM_EXTRA = [
  'Milestone-driven tracking with immediate escalation of critical findings via the OffSec Management Portal — you do not wait for the final report to learn about urgent risks.',
] as const

export const AI_SEC_STANDARDS = {
  title: 'Standards alignment',
  intro:
    'Every Technieum engagement aligns with globally recognized security frameworks including OWASP Top 10, OWASP API Top 10, OWASP LLM Top 10, PTES, NIST CSF, NIST AI RMF, MITRE ATT&CK, CIS Benchmarks, IEC 62443, and ISO 27001:2022.',
  certifications:
    'Our team holds OSCP, OSEP, CRTE, CRTP, eWPTX, eCPPT, and CEH certifications. Technieum is ISO 9001:2015 and ISO 27001:2022 certified.',
} as const

export const AI_SEC_CTA = {
  title: 'Ready to secure your organization?',
  body: 'Partner with Technieum for AI-powered offensive security with validated, actionable findings.',
  contacts: [
    { label: 'robert.a@technieum.com', href: 'mailto:robert.a@technieum.com' },
    { label: 'syam.s@technieum.com', href: 'mailto:syam.s@technieum.com' },
  ],
} as const
