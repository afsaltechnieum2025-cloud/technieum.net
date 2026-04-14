/**
 * Marketing / product page copy for AI-validated SAST + SCA (single product: Technieum AI-validated SAST).
 * Aligned to public/docs/SAST.pdf themes and productPitchPages.sast.
 * ASCII-only strings for the UI.
 */

export const SAST_HERO = {
  lead:
    'Technieum AI-validated SAST merges multiple static analysis engines, secret and dependency signals, and a proprietary rule set with graph-style taint reasoning and LLM validation. SCA sits in the same pipeline story: dependency findings inherit exploitability and reachability scoring so engineering upgrades what is actually exposed in code paths, not every CVE in a lockfile. The outcome is one ranked backlog that fits GitHub, GitLab, SARIF gates, and the OffSec Management Portal.',
} as const

export const SAST_EXECUTIVE = {
  title: 'Executive summary',
  body:
    'Traditional SAST drowns teams in noise; traditional SCA triggers "upgrade everything" panic. Technieum combines six integrated scanners (including Semgrep, Bandit, and Trivy-class coverage), more than 350 detection rules, and seven coordinated agents that filter, scan, validate, deduplicate, hunt business-logic flaws, and produce sandboxed proof-of-concept hints. Dependency risk is scored with reachability and exploitability context so the same sprint backlog addresses code-level flaws and the subset of vulnerable dependencies that matter for your application.',
  differentiators: [
    'LLM validation confirms or downgrades static candidates and explains risk in plain language with before-and-after fix hints.',
    'Business-logic hunting targets authorization, IDOR, race, and workflow gaps that pattern matchers routinely miss.',
    'SCA treats dependencies as the twin of SAST: reachability-aware prioritization prevents dependency churn without security gain.',
    'SARIF 2.1.0 and native GitHub / GitLab security tab workflows so gates live where developers already work.',
    'Priority scores (0-100) blend severity, confidence, and exploitability for a single triage language across SAST and SCA.',
  ],
} as const

export const SAST_INTERACTION = {
  title: 'How teams run AI-validated SAST and SCA',
  intro:
    'Security and engineering share one ingest, one dashboard, and one export path. A typical program flow:',
  steps: [
    'Ingest from ZIP upload, Git URL, or local tree with intelligent file selection per language and framework.',
    'Run parallel external scanners plus the proprietary AI-validated SAST engine with graph-based taint tracing across the selected corpus.',
    'Feed candidates to the validation agent: duplicates merge, false positives drop, and each retained issue gains narrative context.',
    'Invoke the business-logic agent for auth bypass, IDOR, race, and workflow-class problems that pure signatures skip.',
    'Run dependency and SCA analysis with reachability and exploitability overlays so upgrade work tracks real call paths and exposure.',
    'Export SARIF for CI gates, JSON / Markdown / HTML for portals, and PoC-oriented snippets so testers reproduce without re-running the whole scan.',
  ],
  exampleWorkflows: [
    'PR checks: SARIF to GitHub Actions with branch protection',
    'Release train: SAST + SCA on the same tag as LLM features',
    'Legacy monorepo: 500+ files, 15-30 minute typical window',
    'Executive readout: top risks across code and dependencies',
  ],
} as const

export const SAST_PIPELINE = {
  title: 'Unified analysis pipeline',
  subtitle: 'Six stages from code arrival to developer-ready backlog.',
  phases: [
    {
      step: '1',
      name: 'Ingest and scoping',
      detail:
        'Upload, clone, or attach a workspace; languages and entry points are detected so the right engines and files activate.',
    },
    {
      step: '2',
      name: 'Multi-engine static scan',
      detail:
        'Parallel Semgrep, Bandit, Trivy-style, secret scanning, dependency audit, and proprietary AI-validated SAST rules execute together.',
    },
    {
      step: '3',
      name: 'Taint and structure',
      detail:
        'Graph-based taint and structural analysis connect sources to sinks so findings carry data-flow context, not isolated lines.',
    },
    {
      step: '4',
      name: 'AI validation and dedup',
      detail:
        'An LLM validates or downgrades candidates, merges duplicates, and attaches remediation language engineers can act on.',
    },
    {
      step: '5',
      name: 'Business-logic hunt',
      detail:
        'Dedicated attention to authorization, IDOR, race, and workflow flaws with PoC-oriented output for validation teams.',
    },
    {
      step: '6',
      name: 'SCA scoring and export',
      detail:
        'Dependencies are scored for exploitability and reachability; SARIF, dashboard, and document exports align to portal taxonomy.',
    },
  ],
} as const

export const SAST_DATA_MODEL = {
  title: 'Engines, graphs, and dependency signals',
  intro:
    'The platform fuses third-party scanners, first-party rules, and dependency intelligence into one evidence model so SAST and SCA issues sort together.',
  sources: [
    {
      name: 'Multi-engine SAST',
      description: 'Semgrep, Bandit, Trivy-class analysis, secret detection, and 350+ proprietary signatures.',
      role: 'Broad coverage with overlapping engines triangulated by validation and deduplication.',
    },
    {
      name: 'Taint and program structure',
      description: 'Graph-style reasoning across sources, sinks, and framework-specific sinks.',
      role: 'Explains why a line matters and reduces context-free alerts.',
    },
    {
      name: 'AI validation agent',
      description: 'LLM confirms severity, merges clones, and writes plain-language risk and fix guidance.',
      role: 'Cuts noise without hiding issues that need human review.',
    },
    {
      name: 'Business-logic agent',
      description: 'Focused passes for auth bypass, IDOR, race, and workflow abuse patterns.',
      role: 'Finds flaws that ast-grep style rules alone rarely prove.',
    },
    {
      name: 'Dependency graph and SCA',
      description: 'Lockfiles and manifests correlated to resolved versions and known CVEs.',
      role: 'Feeds reachability and exploitability scoring for SCA prioritization.',
    },
    {
      name: 'Portal and CI fabric',
      description: 'SARIF 2.1.0, CWE mapping, GitHub and GitLab security tab compatibility.',
      role: 'Same scoring and owners as ASM and LLM streams inside the OffSec Management Portal.',
    },
  ],
} as const

export const SAST_SCALE = {
  title: 'Scale and throughput',
  intro: 'Dimensions teams use when planning scans and pipeline budgets:',
  metrics: [
    { value: '350+', label: 'Detection rules' },
    { value: '7', label: 'Coordinated analysis agents' },
    { value: '6', label: 'Integrated scanner families' },
    { value: '15-30 min', label: 'Typical window for 500+ files' },
  ],
} as const

export const SAST_AI = {
  title: 'AI-validated SAST: validation and business logic',
  intro:
    'The LLM is not a replacement for static engines; it is the filter and explainer on top of them. Candidates that survive have consistent severity language, merged duplicates, and remediation hints developers recognize.',
  points: [
    'Validation confirms or downgrades each candidate with rationale, reducing alert fatigue on legacy codebases.',
    'Natural-language explanations pair with before-and-after fix hints suitable for PR comments.',
    'Deduplication across engines means one issue in the backlog even when three tools fired.',
    'Business-logic agent dedicates cycles to authorization, IDOR, race, and workflow flaws outside pure taint templates.',
    'Sandboxed PoC snippets help AppSec reproduce without rerunning the full multi-engine scan.',
  ],
} as const

export const SAST_SCA = {
  title: 'SCA: composable dependency risk',
  intro:
    'SCA is positioned as the dependency twin of SAST: the same program surfaces vulnerable packages, but reachability and exploitability prevent "patch the entire npm tree" exercises that do not change actual risk.',
  points: [
    'Reachability scoring ties CVEs to call paths and usage so upgrades target dependencies that execute in your product.',
    'Exploitability context separates theoretical registry issues from what attackers can leverage given your build and deploy model.',
    'Unified 0-100 style priority language lets SCA items sort next to SAST findings in one triage queue.',
    'Works alongside static results so a single sprint can close a SQLi class issue and the reachable driver that enables it.',
    'Exports and portal fields mirror SAST so owners, retests, and gates behave consistently across issue types.',
  ],
} as const

export const SAST_OUTPUTS = {
  title: 'What engineering and AppSec receive',
  intro:
    'Deliverables support developers in the IDE and PR, AppSec in the portal, and compliance in structured exports.',
  rows: [
    { section: 'SARIF 2.1.0', contains: 'Pipeline gates for GitHub Actions, GitLab CI, and other SARIF consumers.' },
    { section: 'GitHub / GitLab security tabs', contains: 'Native annotations without forcing teams off existing review flows.' },
    { section: 'Prioritized unified backlog', contains: 'SAST and SCA issues in one scored list with CWE mapping.' },
    { section: 'Developer remediation text', contains: 'Plain-language explanations and fix hints per finding.' },
    { section: 'SCA upgrade guidance', contains: 'Reachability-aware dependency priorities instead of flat CVE counts.' },
    { section: 'Dashboard trends', contains: 'Volume, severity, and category trends for program metrics.' },
    { section: 'JSON, Markdown, HTML', contains: 'Reporting and portal ingestion outside SARIF-only tools.' },
    { section: 'Portal sync', contains: 'Owners, retest states, and severity aligned with ASM and LLM programs.' },
  ],
} as const

export const SAST_USE_CASES = {
  title: 'Example use cases',
  cases: [
    {
      query: 'Developer-friendly triage',
      outcome:
        'Engineers see fewer, clearer issues with fix hints and SARIF in the PR instead of a static PDF attachment.',
    },
    {
      query: 'CI/CD gates',
      outcome:
        'Block merges on high-confidence SAST or reachable high-risk dependencies without tuning six separate tools.',
    },
    {
      query: 'Large monorepos',
      outcome:
        'Typical 15-30 minute runs on 500+ files with predictable AI validation cost.',
    },
    {
      query: 'SCA without panic',
      outcome:
        'Upgrade sprints focus on reachable, exploitable dependencies tied to application entry points.',
    },
    {
      query: 'Cross-program alignment',
      outcome:
        'Static and dependency findings share portal scoring with ASM and LLM for one operational picture.',
    },
    {
      query: 'Same sprint as ASM',
      outcome:
        'Connect code-level flaws to what the external surface actually exposes in one program narrative.',
    },
  ],
} as const
