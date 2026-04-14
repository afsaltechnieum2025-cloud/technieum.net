/**
 * Marketing / product page copy aligned to public/docs/TOIP.pdf (Technical Overview).
 * ASCII-only strings for the UI.
 */

export const TOIP_PAGE_META = {
  confidentialNote:
    'Overview for client and stakeholder use. Formal statements of work govern delivery.',
} as const

export const TOIP_HERO = {
  lead:
    'Technieum OffSec Intelligence Portal is a searchable, AI-assisted vulnerability intelligence platform that draws from tens of thousands of real vulnerability reports and authoritative sources (NVD, CISA KEV, Nuclei, PayloadsAllTheThings) to deliver structured, citation-backed analysis, ready-to-use payloads, and attack scenarios derived from real-world reports, powered by a flexible external LLM integration.',
  preparedBy: 'TECHNIEUM Technologies LLC',
} as const

export const TOIP_EXECUTIVE = {
  title: 'Executive summary',
  body:
    'Technieum OffSec Intelligence Portal is an enterprise-grade web application that enables security researchers, penetration testers, and offensive security professionals to discover, analyse, and validate vulnerabilities. It combines a large, curated database of disclosed vulnerability reports, CVEs, and security payloads with a state-of-the-art external LLM using RAG (Retrieval-Augmented Generation).',
  differentiators: [
    'Purpose-built for offensive security and vulnerability research: every answer is grounded in a verified intelligence database.',
    'Explicit citations to disclosed reports and CVEs: findings can be verified, traced, and included in client deliverables.',
    'Ready payloads validated in real-world vulnerability disclosures and public reports.',
    'Attack scenarios from actual reported problems and exploitation chains, not generic synthetic examples.',
  ],
} as const

export const TOIP_INTERACTION = {
  title: 'How users interact with Technieum OffSec Intelligence Portal',
  intro:
    'Users submit natural-language queries (for example, XSS filter bypass for Cloudflare WAF, or blind SQLi time-based payload for MySQL). The system then:',
  steps: [
    'Searches a vector database of vulnerability reports, CVEs, and payload collections in parallel across five distinct sources.',
    'Reranks and weights results by relevance, impact, and freshness so high-impact, recent intelligence is prioritised.',
    'Builds structured context from multiple data sources so the external LLM receives both methodology and authoritative references.',
    'Streams an AI-generated analysis that cites specific reports and includes ready payloads and attack scenarios from real-world reports.',
  ],
  exampleQueries: [
    'XSS filter bypass for Cloudflare WAF',
    'Blind SQLi time-based payload for MySQL',
    'SSRF to cloud metadata on AWS',
    'JWT algorithm confusion',
  ],
} as const

export const TOIP_PIPELINE = {
  title: 'Complete working architecture',
  subtitle: 'A clear pipeline from raw data to final answer.',
  phases: [
    {
      step: '1',
      name: 'Query expansion and intent',
      detail:
        "The user's question is expanded with synonyms and classified by intent (payload, exploit, methodology, and more).",
    },
    {
      step: '2',
      name: 'HyDE embedding',
      detail:
        "A short ideal answer is generated and embedded, retrieving stronger chunks than embedding the raw query alone.",
    },
    {
      step: '3',
      name: 'Parallel multi-source search',
      detail:
        'Five searches run in parallel against ChromaDB: general reports, PayloadsAllTheThings, Nuclei templates, NVD CVEs, and CISA KEV.',
    },
    {
      step: '4',
      name: 'Reranking and weighting',
      detail: 'Cross-encoder reranker improves precision. Results are weighted by impact and freshness.',
    },
    {
      step: '5',
      name: 'Context assembly and LLM',
      detail:
        'A single context block is built from five sections. The external LLM streams a structured answer with citations and payloads.',
    },
  ],
} as const

export const TOIP_DATA_MODEL = {
  title: 'How we get data and data sources',
  intro:
    'Technieum OffSec Intelligence Portal does not scrape the internet in real time. It uses a curated, pre-processed intelligence database built once (or periodically) and then queried at runtime. This ensures consistent quality, fast retrieval, and full control, which is critical for professional and compliance-sensitive use.',
  sources: [
    {
      name: 'Disclosed vulnerability reports',
      description: 'Public vulnerability disclosure reports with title, severity, reward, programme.',
      role: 'Ready payloads and attack scenarios from real-world problems; citations and methodology.',
    },
    {
      name: 'PayloadsAllTheThings',
      description: 'Curated payload and bypass lists.',
      role: 'Ready payloads, WAF bypass, and encoding variants.',
    },
    {
      name: 'Nuclei templates',
      description: 'Detection and exploit templates.',
      role: 'Automation commands, scanning, PoC, and real exploitation scenarios.',
    },
    {
      name: 'NVD (National Vulnerability Database)',
      description: 'Official CVE details.',
      role: 'Authoritative CVE information, references, and real-world vulnerability scenarios.',
    },
    {
      name: 'CISA KEV',
      description: 'Known Exploited Vulnerabilities catalog.',
      role: 'Prioritisation of actively exploited issues and attack scenarios from real incidents.',
    },
  ],
} as const

export const TOIP_SCALE = {
  title: 'Scale of the intelligence database',
  intro: 'The system is designed to work with large corpora. A typical deployment includes:',
  metrics: [
    { value: '90,000+', label: 'Vulnerability reports in the database' },
    { value: 'Hundreds of thousands', label: 'Searchable chunks in ChromaDB' },
    { value: '5', label: 'Sources queried in parallel at answer time' },
    { value: '800 + 150', label: 'Chunk size and overlap (characters); code blocks kept intact so payloads are never broken' },
  ],
} as const

export const TOIP_RAG = {
  title: "How it is trained: RAG, not traditional training",
  intro:
    "There is no custom training of a model on your data. The system is intelligent because the knowledge base is built from your chosen sources and the pipeline (retrieval plus prompting) is fixed. Improving performance means improving data quality, coverage, and pipeline design, not running gradient updates.",
  points: [
    'Embedding model (sentence-transformers): pre-trained all-MiniLM-L6-v2 converts text into 384-dimensional vectors. Used as-is; no fine-tuning in Technieum OffSec Intelligence Portal.',
    'Reranker (cross-encoder): pre-trained ms-marco-MiniLM-L-6-v2 scores (query, chunk) pairs for relevance. Used as-is.',
    'Retrieval design: query expansion, HyDE, parallel multi-source search, reranking, and impact and freshness weighting.',
    'External LLM: state-of-the-art large language model accessed via API provides reasoning; Technieum OffSec Intelligence Portal augments it with retrieved context so every answer is grounded in the intelligence database.',
  ],
} as const

export const TOIP_OUTPUTS = {
  title: 'Output quality and what the user sees',
  intro:
    'The platform produces structured, citation-backed, actionable answers suitable for professional security work.',
  rows: [
    { section: 'Summary', contains: 'Concise, direct answer to the query.' },
    {
      section: 'Detailed analysis',
      contains:
        'How the vulnerability works, step-by-step exploitation, ready payloads in code blocks, bypass techniques, and chaining opportunities.',
    },
    {
      section: 'Tools and payloads',
      contains:
        'Specific tools (Burp, Nuclei, sqlmap) with commands; ready-to-use payloads and attack scenarios in code blocks.',
    },
    {
      section: 'From the intelligence database',
      contains:
        'Explicit citations to reports (title, programme, severity, reward, URL) so users can verify and trace the source of each payload.',
    },
    { section: 'Next steps', contains: 'Actionable testing steps and attack surfaces.' },
    {
      section: 'Payload variant generator',
      contains:
        'Encoded and obfuscated variants of a payload (URL, double-URL, Base64, HTML entity, and more) for WAF bypass testing.',
    },
    {
      section: 'Attack chain suggestions',
      contains:
        'Common attack progressions and impact scoring, helping analysts think in terms of full attack chains.',
    },
    {
      section: 'Export',
      contains:
        'Analysis exported as Markdown for inclusion in reports or internal documentation, preserving structure and citations.',
    },
  ],
} as const

export const TOIP_TECH_STACK = {
  title: 'Technical stack',
  rows: [
    { layer: 'Web app', technology: 'Flask (Python), Gunicorn' },
    { layer: 'Vector database', technology: 'ChromaDB (persistent)' },
    { layer: 'Embedding', technology: 'Sentence-transformers (all-MiniLM-L6-v2)' },
    { layer: 'Reranker', technology: 'Cross-encoder (ms-marco-MiniLM-L-6-v2)' },
    { layer: 'LLM', technology: 'External LLM (API)' },
    { layer: 'Ingest and chunking', technology: 'LangChain text splitter, payload-aware chunking' },
    { layer: 'Deployment', technology: 'Docker, optional pre-built ChromaDB image' },
  ],
} as const

export const TOIP_USE_CASES = {
  title: 'Example use cases',
  cases: [
    {
      query: 'XSS WAF bypass',
      outcome:
        'How do I bypass Cloudflare for XSS? Ready payloads and methodology from disclosed reports, plus attack scenarios from real programmes.',
    },
    {
      query: 'SQL injection',
      outcome:
        'Blind SQLi time-based payload for MySQL: exact ready payloads and tool commands with scenario-specific notes from real-world problems.',
    },
    {
      query: 'Cloud SSRF',
      outcome:
        'SSRF to cloud metadata on AWS: step-by-step exploitation, attack scenarios from real reports, and Nuclei or tool references for automation.',
    },
    {
      query: 'JWT attacks',
      outcome:
        'JWT algorithm confusion: clear explanation, PoC, ready payloads, and references to CVEs and public reports.',
    },
    {
      query: 'IDOR chains',
      outcome:
        'Attack chains for IDOR: suggested progressions (for example IDOR to PII to account takeover) based on real-world reports, plus impact scoring.',
    },
  ],
} as const

export const TOIP_CLOSING = {
  paragraph:
    'Technieum OffSec Intelligence Portal combines a curated multi-source intelligence database with a flexible external LLM and a retrieval pipeline tuned for offensive security and vulnerability research. The platform delivers detailed, citation-backed, actionable answers that analysts can trust and use immediately.',
} as const
