/**
 * Marketing / product page copy aligned to LLM Attack Suite positioning and public/docs/LLM.pdf themes.
 * ASCII-only strings for the UI.
 */

export const LLM_PAGE_META = {
  confidentialNote:
    'Overview for client and stakeholder use. Formal statements of work govern delivery.',
} as const

export const LLM_HERO = {
  lead:
    'Technieum LLM Attack Suite is a web and API testing platform that runs many parallel adversarial streams against your LLM application. An attacker agent follows a recursive loop (probe, escalate, refine, extract, pivot) guided by live model responses, with SSRF-aware validation and early exit when critical issues are confirmed. Every validated finding carries literal response fragments so security and governance teams can defend the result in audit, not just in a dashboard screenshot.',
} as const

export const LLM_EXECUTIVE = {
  title: 'Executive summary',
  body:
    'The suite operationalizes OWASP LLM Top 10 style coverage at depth that checklist scans cannot replicate: 1,005+ curated prompts organized across ten category lanes, twelve parallel vulnerability streams with configurable concurrency, and streaming telemetry so operators see systemic weakness instead of a single lucky jailbreak. Exports map cleanly to OWASP LLM, MITRE ATLAS, and NIST AI RMF narratives for third-party and board-level scrutiny.',
  differentiators: [
    'Parallel adversarial streams at configurable concurrency: regression-friendly pressure across the whole attack surface of the model interface.',
    'Safety and SSRF-aware guardrails so automated runs are less likely to create unintended side effects against production dependencies.',
    'Evidence-first reporting: deterministic detection layered with LLM-driven generation, with literal fragments in confirmed issues.',
    'Governance-ready exports: framework language leadership can stand behind alongside developer-actionable remediation guidance.',
  ],
} as const

export const LLM_INTERACTION = {
  title: 'How teams run the LLM Attack Suite',
  intro:
    'Operators configure targets and categories, launch orchestrated streams, and watch turn-by-turn progress while the attacker agent adapts. A typical workflow:',
  steps: [
    'Define target URL, enabled OWASP-style categories, iteration limits, and safety constraints from the dashboard or API.',
    'Start the Flask-backed orchestration layer: multiple streams run concurrently while Server-Sent Events expose live attack telemetry.',
    'Each stream executes a recursive loop: probe with adaptive prompts, escalate based on responses, refine payloads, attempt extraction or pivot paths until a finding is confirmed or the budget is exhausted.',
    'Layered detection combines regex and pattern rules with LLM-generated attack variants so both brittle and semantic failures surface.',
    'On critical findings the run can exit early; results roll into risk heatmaps, remediation text, and exports (PDF, JSON, HTML, CSV) mapped to OWASP, ATLAS, and NIST AI RMF.',
  ],
  exampleCampaigns: [
    'Pre-go-live model and system-prompt review',
    'CI regression after RAG or tool-calling changes',
    'MCP and agentic expansion: new trust boundaries',
    'Third-party audit pack for AI governance',
  ],
} as const

export const LLM_PIPELINE = {
  title: 'From configuration to evidence',
  subtitle: 'Five stages from scoped target to framework-mapped deliverables.',
  phases: [
    {
      step: '1',
      name: 'Scope and configuration',
      detail:
        'Target endpoints, category selection, concurrency, and iteration caps are set so runs match policy and environment risk.',
    },
    {
      step: '2',
      name: 'Stream orchestration',
      detail:
        'Twelve parallel vulnerability streams start under API control; SSE channels stream progress for dashboards and integrations.',
    },
    {
      step: '3',
      name: 'Recursive attacker loop',
      detail:
        'Probe, escalate, refine, extract, and pivot: the agent mirrors human red teaming at machine scale until confirmation or exhaustion.',
    },
    {
      step: '4',
      name: 'Detection and validation',
      detail:
        'Deterministic checks and LLM-authored payloads combine; SSRF-safe validation reduces collateral risk; early exit on critical severity.',
    },
    {
      step: '5',
      name: 'Reporting and handoff',
      detail:
        'Heatmaps, remediation steps, and exports align to OWASP LLM, MITRE ATLAS, and NIST AI RMF for portal and compliance consumers.',
    },
  ],
} as const

export const LLM_DATA_MODEL = {
  title: 'Streams, categories, and evidence',
  intro:
    'The suite is organized so technical depth and governance language stay tied to the same underlying run: streams parallelize work; categories align to industry taxonomies; every confirmed issue remains traceable to model output.',
  sources: [
    {
      name: 'Curated prompt library',
      description: '1,005+ attack prompts spanning jailbreak, injection, leakage, and behavior abuse patterns.',
      role: 'Repeatable coverage for regression and benchmark-style comparisons across releases.',
    },
    {
      name: 'Ten OWASP LLM category lanes',
      description: 'Lanes map to OWASP LLM Top 10 style concern areas for executive and auditor vocabulary.',
      role: 'Reporting rolls up to frameworks teams already use for AI risk conversations.',
    },
    {
      name: 'Twelve parallel streams',
      description: 'Concurrent vulnerability streams with tunable parallelism.',
      role: 'Surfaces correlated weakness across categories instead of isolated one-off prompts.',
    },
    {
      name: 'Attacker agent loop',
      description: 'Response-guided escalation and refinement until findings stabilize or limits hit.',
      role: 'Adapts like manual red teaming while remaining suitable for automated gates.',
    },
    {
      name: 'Layered detection',
      description: 'Regex and deterministic signals plus LLM-driven attack generation.',
      role: 'Catches both brittle misconfigurations and semantic safety failures.',
    },
    {
      name: 'Literal evidence fragments',
      description: 'Confirmed issues include the response text that triggered detection.',
      role: 'Defensible proof for retest, ticketing, and external review.',
    },
  ],
} as const

export const LLM_SCALE = {
  title: 'Scale and coverage',
  intro: 'Dimensions teams use to plan campaigns and compare releases:',
  metrics: [
    { value: '1,005+', label: 'Curated attack prompts' },
    { value: '10', label: 'OWASP LLM category lanes' },
    { value: '12', label: 'Parallel vulnerability streams' },
    { value: 'Live', label: 'SSE attack telemetry' },
  ],
} as const

export const LLM_AI = {
  title: 'Where the LLM is in the loop',
  intro:
    'The product tests your model with both deterministic checks and generative adversarial pressure. The testing LLM proposes and refines attacks; your system under test is the subject. Validation guardrails and SSRF-aware design keep that automation inside agreed boundaries.',
  points: [
    'Attacker-side LLM adapts prompts from each response, mirroring iterative human red teaming at higher throughput.',
    'Deterministic regex and pattern layers catch known failure modes without waiting for generative luck.',
    'Configurable concurrency trades speed against load so CI and staging runs stay predictable.',
    'Early exit on critical findings focuses attention on ship-stoppers before burning full iteration budgets.',
    'Deploy on-prem, Docker, or Vercel with a configurable LLM backend to match data residency and procurement rules.',
  ],
} as const

export const LLM_OUTPUTS = {
  title: 'What stakeholders receive',
  intro:
    'Outputs serve operators, AppSec leads, and compliance stakeholders from the same evidence base.',
  rows: [
    { section: 'Live dashboard', contains: 'Streaming telemetry and stream state during an active campaign.' },
    {
      section: 'Risk heatmaps',
      contains: 'Visual concentration of issues by category and severity for triage and executive readouts.',
    },
    {
      section: 'Remediation guidance',
      contains: 'Actionable steps tied to finding types so engineering can patch prompts, tools, or policy.',
    },
    {
      section: 'Framework-mapped reports',
      contains: 'PDF and structured exports aligned to OWASP LLM, MITRE ATLAS, and NIST AI RMF narratives.',
    },
    {
      section: 'Machine-readable export',
      contains: 'JSON, HTML, and CSV for SOAR, ticketing, and custom analytics pipelines.',
    },
    {
      section: 'Evidence packets',
      contains: 'Literal response fragments and reproduction context for each confirmed issue.',
    },
    {
      section: 'Portal taxonomy',
      contains: 'Findings land with the same scoring and workflow fabric as application and infrastructure issues.',
    },
    {
      section: 'Regression baselines',
      contains: 'Re-run after model or prompt changes to prove improvement or catch regressions.',
    },
  ],
} as const

export const LLM_TECH_STACK = {
  title: 'Technical stack (representative)',
  rows: [
    { layer: 'API and UI', technology: 'Web dashboard and Flask API for run control' },
    { layer: 'Real-time', technology: 'Server-Sent Events for turn-by-turn attack progress' },
    { layer: 'Orchestration', technology: 'Parallel stream engine with configurable concurrency and early exit' },
    { layer: 'Attacker agent', technology: 'Recursive probe-escalate-refine-extract-pivot loop driven by target responses' },
    { layer: 'Detection', technology: 'Deterministic rules layered with LLM-generated attack variants' },
    { layer: 'Reporting', technology: 'PDF, JSON, HTML, CSV and heatmap visualizations' },
    { layer: 'Deployment', technology: 'On-prem, Docker, or Vercel with configurable LLM backend' },
  ],
} as const

export const LLM_USE_CASES = {
  title: 'Example use cases',
  cases: [
    {
      query: 'Pre-production LLM audits',
      outcome:
        'Validate model, prompt, and tool-calling behavior before go-live with evidence mapped to OWASP and NIST AI RMF.',
    },
    {
      query: 'CI/CD regression',
      outcome:
        'Gate releases after fine-tunes, prompt changes, or new plugins so AI features do not silently widen trust boundaries.',
    },
    {
      query: 'Compliance packs',
      outcome:
        'Export bundles that speak ATLAS and AI RMF language for regulators, customers, and enterprise security review.',
    },
    {
      query: 'Agentic and MCP expansion',
      outcome:
        'Stress new agent surfaces when MCP servers or autonomous tool use increases blast radius.',
    },
    {
      query: 'Cross-program visibility',
      outcome:
        'LLM issues share portal taxonomy with ASM and SAST so AI risk is not siloed from the broader program.',
    },
    {
      query: 'Pair with AI-validated SAST',
      outcome:
        'When prompts and server logic ship together, align LLM testing with static analysis on the same release train.',
    },
  ],
} as const

export const LLM_CLOSING = {
  paragraph:
    'LLM Attack Suite delivers depth, parallelism, and evidence that checklist LLM scans cannot match. Recursive adversarial pressure, framework-aligned reporting, and portal-native handoff keep AI risk visible next to the rest of your offensive security program.',
} as const
