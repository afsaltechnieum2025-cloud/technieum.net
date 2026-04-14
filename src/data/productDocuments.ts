export type ProductDocId = 'toip' | 'asm' | 'llm' | 'sast' | 'ad'

export type ProductDocument = {
  id: ProductDocId
  name: string
  subtitle: string
  /** Short line for home "Services at a glance" cards */
  glanceDescription: string
  pdfFile: string
  downloadName: string
  tagline: string
  summary: string
  stats: { value: string; label: string }[]
  highlights: string[]
  frameworks: string[]
  architecture: { phase: string; detail: string }[]
  useCases: string[]
}

/** Summaries derived from Technieum product PDFs in /docs (client-facing overviews). */
export const PRODUCT_DOCUMENTS: ProductDocument[] = [
  {
    id: 'toip',
    name: 'Technieum OffSec Intelligence Portal',
    subtitle: 'Technieum Offsec Intelligence Portal',
    glanceDescription:
      'Grounded answers from a large vulnerability corpus: citations, payloads, and scenarios your testers can run immediately.',
    pdfFile: 'TOIP.pdf',
    downloadName: 'Technieum-TOIP-Technical-Overview.pdf',
    tagline: 'Citation-backed vulnerability intelligence for offensive security teams.',
    summary:
      'Technieum OffSec Intelligence Portal is an enterprise-grade, AI-augmented research capability for penetration testers and disclosure programmes. It combines a curated corpus of tens of thousands of real vulnerability reports with retrieval-augmented generation (RAG) so every answer is grounded in NVD, CISA KEV, Nuclei templates, PayloadsAllTheThings, and disclosed reports, with explicit citations, ready payloads, and attack scenarios drawn from real-world cases.',
    stats: [
      { value: '90,000+', label: 'Vulnerability reports (typical corpus)' },
      { value: '5', label: 'Parallel intelligence sources' },
      { value: 'RAG', label: 'Grounded LLM answers' },
    ],
    highlights: [
      'Natural-language queries with query expansion, HyDE embedding, and cross-encoder reranking.',
      'Parallel search across reports, PAT, Nuclei, NVD, and CISA KEV with impact and freshness weighting.',
      'Structured outputs: summary, detailed analysis, tools and payloads, citations, next steps, payload variants, attack chains.',
      'Markdown export for client deliverables and internal documentation.',
      'No training on your data: intelligence comes from curated data quality and pipeline design.',
    ],
    frameworks: ['NVD', 'CISA KEV', 'Nuclei', 'PayloadsAllTheThings', 'Disclosure reports'],
    architecture: [
      { phase: 'Intent and expansion', detail: 'Classify query intent and expand with synonyms for better retrieval.' },
      { phase: 'HyDE embedding', detail: "Embed a synthetic 'ideal' answer to retrieve stronger chunks than raw queries alone." },
      { phase: 'Multi-source search', detail: 'Five parallel ChromaDB searches across the intelligence database.' },
      { phase: 'Rerank and assemble', detail: 'Cross-encoder scoring, weighting, and a single context block for the external LLM.' },
      { phase: 'Streamed answer', detail: 'Structured, citation-backed analysis with payloads and scenarios.' },
    ],
    useCases: [
      'WAF bypass research (e.g. Cloudflare XSS) with methodology from real programmes.',
      'Blind SQLi and time-based payloads with tool commands and scenario notes.',
      'Cloud SSRF to metadata, JWT attacks, and IDOR chain suggestions with impact scoring.',
    ],
  },
  {
    id: 'asm',
    name: 'Technieum-X',
    subtitle: 'External attack surface management',
    glanceDescription:
      'Discovery through reporting across DNS, ports, CVEs, and attack paths, with dashboards and compliance-friendly evidence.',
    pdfFile: 'ASM.pdf',
    downloadName: 'Technieum-X-ASM-Overview-v2.pdf',
    tagline: 'One engine to discover, assess, and manage your external attack surface.',
    summary:
      'Technieum-X orchestrates 50+ industry tools across a ten-phase pipeline: from discovery and OSINT through vulnerability testing, threat intel enrichment, CVE correlation (CVSS, EPSS, KEV), change detection, compliance mapping, and attack-graph analysis. It is designed to feed Technieum OffSec Intelligence Portal: scan, find, prioritize, act, and rescan in a closed loop.',
    stats: [
      { value: '50+', label: 'Integrated security tools' },
      { value: '10', label: 'Scan phases' },
      { value: '5+', label: 'Compliance frameworks' },
    ],
    highlights: [
      'Unified view of subdomains, DNS, ports, technologies, and vulnerabilities.',
      'Threat context from GreyNoise, OTX, Abuse.ch, CrowdSec, DeHashed, AbuseIPDB, and more.',
      'Dashboards for assessments, vulnerabilities, attack surface, attack graph, compliance, and reports.',
      'Webhooks, APIs, and SSE for live progress, ready for Technieum OffSec Intelligence Portal integration.',
      'Graceful degradation when optional tools or API keys are unavailable.',
    ],
    frameworks: ['NIST CSF', 'PCI-DSS', 'HIPAA', 'GDPR', 'SOC 2'],
    architecture: [
      { phase: 'Pre-scan', detail: 'Validate targets, tool availability, and workspace.' },
      { phase: 'Discovery to content', detail: 'Subdomains, DNS, ports, tech stack, APIs, and secrets discovery.' },
      { phase: 'Vulnerability', detail: 'Scanner output correlated to CVEs and TLS posture.' },
      { phase: 'Intel and CVE', detail: 'Reputation feeds plus CVSS, EPSS, and KEV prioritization.' },
      { phase: 'Change and compliance', detail: 'Baselines, alerts, control mapping, and attack-path graph.' },
    ],
    useCases: [
      'Executive visibility: how we look right now, with top findings and metrics.',
      'Attack-path storytelling from public assets to critical vulnerabilities.',
      'Compliance evidence: map failing controls to unpatched or exposed systems.',
    ],
  },
  {
    id: 'llm',
    name: 'LLM Suite',
    subtitle: 'LLM red team testing',
    glanceDescription:
      'Recursive red-team loops against LLM APIs with twelve parallel vulnerability streams and exportable proof for each finding.',
    pdfFile: 'LLM.pdf',
    downloadName: 'Technieum-LLM-Suite-Technical-Overview.pdf',
    tagline: 'Adaptive, multi-stream red teaming for LLM endpoints, with evidence in every finding.',
    summary:
      'Technieum LLM Suite is a web and API testing suite that runs twelve parallel vulnerability streams against your LLM application. An attacker agent uses a recursive loop (probe, escalate, refine, extract, pivot) guided by target responses, with SSRF-safe validation and early exit on critical findings. Every confirmed issue includes the literal response fragment that triggered detection.',
    stats: [
      { value: '12', label: 'Parallel vulnerability streams' },
      { value: 'SSE', label: 'Real-time attack dashboard' },
      { value: 'PDF', label: 'Exportable evidence reports' },
    ],
    highlights: [
      'Concurrent streams with configurable concurrency and streaming telemetry.',
      'Categories include prompt leakage, injection, jailbreak, credential leak, SSRF, SQLi, toxicity, bias, hallucination, and more.',
      'Deterministic regex detection layered with LLM-driven attack generation.',
      'Deploy on-prem, Docker, or Vercel with a configurable LLM backend.',
    ],
    frameworks: ['OWASP LLM Top 10', 'MITRE ATLAS', 'NIST AI RMF'],
    architecture: [
      { phase: 'Configuration', detail: 'Target URL, categories, and iteration limits from the dashboard.' },
      { phase: 'Orchestration', detail: 'Flask API starts streams; SSE exposes turn-by-turn progress.' },
      { phase: 'Recursive loop', detail: 'Attacker agent adapts payloads from each response until confirmed or exhausted.' },
      { phase: 'Reporting', detail: 'Risk heatmaps, remediation steps, and framework-mapped PDF / JSON / HTML / CSV.' },
    ],
    useCases: [
      'Pre-production LLM audits before go-live.',
      'Regression testing in CI/CD after model or prompt updates.',
      'Compliance packs mapping findings to OWASP, ATLAS, and NIST AI RMF.',
    ],
  },
  {
    id: 'sast',
    name: 'AI-validated SAST',
    subtitle: 'AI-Powered Static Application Security Testing',
    glanceDescription:
      'Seven agents merge SAST, secrets, dependencies, and AI validation into SARIF-ready priorities your developers can ship against.',
    pdfFile: 'SAST.pdf',
    downloadName: 'Technieum-AI-SAST-Product-Overview-v2.pdf',
    tagline: 'Six engines, graph-based taint analysis, and LLM validation: one prioritized backlog.',
    summary:
      'TECHNIEUM AI-validated SAST merges Semgrep, Bandit, Trivy, secret scanning, dependency audit, and a proprietary AI-validated SAST engine with 350+ rules. A seven-agent pipeline filters files, runs structural and semantic analysis, validates every candidate with an LLM, hunts business-logic flaws, generates sandboxed PoCs, and produces SARIF-ready output for modern CI/CD.',
    stats: [
      { value: '350+', label: 'Detection rules' },
      { value: '7', label: 'Analysis agents' },
      { value: '6', label: 'Integrated scanners' },
    ],
    highlights: [
      'AI validation reduces false positives and explains risk in plain language with before/after fixes.',
      'Priority scores (0-100) combine severity, confidence, and exploitability.',
      'Dedicated business-logic agent for auth bypass, IDOR, and race conditions.',
      'Scan from ZIP, Git URL, or local folder with intelligent file selection.',
    ],
    frameworks: ['SARIF 2.1.0', 'CWE mapping', 'GitHub / GitLab security tabs'],
    architecture: [
      { phase: 'Ingest', detail: 'Upload, Git clone, or connect a local tree; auto-detect languages.' },
      { phase: 'Multi-engine scan', detail: 'Parallel external scanners plus AI-validated SAST signatures and taint tracing.' },
      { phase: 'AI validation', detail: 'LLM confirms or downgrades candidates; merges duplicates.' },
      { phase: 'PoC and report', detail: 'Exploit snippets, dashboard trends, JSON / MD / HTML export.' },
    ],
    useCases: [
      'Developer-friendly triage with remediation snippets.',
      'Pipeline gates via SARIF for GitHub Actions or GitLab CI.',
      'Large codebases: typical 15-30 minutes for 500+ files with predictable AI cost.',
    ],
  },
  {
    id: 'ad',
    name: 'AD Suite',
    subtitle: 'Active Directory Security Auditing Framework',
    glanceDescription:
      'Six hundred plus directory checks with weighted scoring, raw evidence, and exports mapped to MITRE, CIS, and STIG-style controls.',
    pdfFile: 'AD.pdf',
    downloadName: 'Technieum-AD-Suite-Technical-Overview.pdf',
    tagline: 'PowerShell-native, evidence-first Active Directory assessments, offline capable.',
    summary:
      'AD Suite is a modular PowerShell framework for on-premises Active Directory modeled after professional assessor workflows. It runs 600+ checks across categories such as Kerberos, delegation, privilege tiers, password policy, GPO, ADCS, trusts, and hybrid Azure AD, using parallel runspaces, weighted scoring (0-100), and exports that map every finding to MITRE ATT&CK, CIS Controls, and DISA STIG.',
    stats: [
      { value: '600+', label: 'Security checks' },
      { value: '20+', label: 'Check categories' },
      { value: 'ADSI', label: 'Native directory queries' },
    ],
    highlights: [
      'Each finding stores raw evidence: attributes, ACLs, delegation flags, and policy values.',
      'HTML heatmaps, JSON, CSV, delta baselines, and remediation playbooks with PowerShell snippets.',
      'Air-gapped operation with no internet dependency at runtime.',
      'Transparent weights and category multipliers aligned to real exploitation impact.',
    ],
    frameworks: ['MITRE ATT&CK v14', 'CIS Controls v8', 'DISA STIG (AD)'],
    architecture: [
      { phase: 'Scope', detail: 'Select domain context, credentials, and categories.' },
      { phase: 'Orchestration', detail: 'Runspace pool dispatches independent check functions.' },
      { phase: 'Evidence and scoring', detail: 'Collect LDAP/ADSI proof; roll up weighted domain score.' },
      { phase: 'Reporting', detail: 'Heatmaps, evidence tables, framework appendix, and comparisons.' },
    ],
    useCases: [
      'Pre-engagement AD baselines for penetration tests.',
      'Kerberos and delegation hardening validation with before/after scores.',
      'ADCS (ESC1-ESC8) focused reviews and compliance evidence packs.',
    ],
  },
]

export const ROUTE_SLUG_BY_ID: Record<ProductDocId, string> = {
  toip: 'toip',
  asm: 'technieum-x',
  llm: 'llm-suite',
  sast: 'ai-sast',
  ad: 'ad-suite',
}

export function productPath(id: ProductDocId): string {
  return `/platform/${ROUTE_SLUG_BY_ID[id]}`
}

export function getProductById(id: ProductDocId): ProductDocument | undefined {
  return PRODUCT_DOCUMENTS.find((p) => p.id === id)
}

export function getProductByRouteSlug(slug: string): ProductDocument | undefined {
  const entry = Object.entries(ROUTE_SLUG_BY_ID).find(([, s]) => s === slug)
  if (!entry) return undefined
  return getProductById(entry[0] as ProductDocId)
}
