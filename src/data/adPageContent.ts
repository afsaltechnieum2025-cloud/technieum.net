/**
 * Marketing / product page copy for Technieum AD Suite.
 * Aligned to public/docs/AD.pdf themes and productPitchPages.ad.
 * ASCII-only strings for the UI.
 */

export const AD_PAGE_META = {
  confidentialNote:
    'Overview for client and stakeholder use. Formal statements of work govern delivery.',
} as const

export const AD_HERO = {
  lead:
    'AD Suite is a modular PowerShell framework for on-premises Active Directory modeled on how professional assessors walk a forest. More than six hundred checks span Kerberos, delegation, privilege tiers, password policy, Group Policy, ADCS, trusts, and hybrid Azure AD contexts. Parallel runspaces execute independent checks at speed; every finding retains ADSI-native evidence; weighted scoring rolls up to a domain score leadership can track before and after remediation waves. Runtime is air-gapped friendly with no cloud dependency.',
  preparedBy: 'TECHNIEUM Technologies LLC',
} as const

export const AD_EXECUTIVE = {
  title: 'Executive summary',
  body:
    'Identity is the backbone of most enterprise breaches. AD Suite automates the repetitive evidence collection and correlation that senior testers perform manually: Kerberoasting and related credential abuse patterns, DCSync-class replication exposure, Golden Ticket scenario preconditions, tiering violations, dangerous delegations, weak certificate templates, and trust relationships that expand blast radius. Outputs map cleanly to MITRE ATT&CK v14, CIS Controls v8, and DISA STIG-style expectations so blue teams, auditors, and executives share one vocabulary.',
  differentiators: [
    'Attack paths and escalation narratives, not flat LDAP dumps: findings chain the way decision-makers reason about identity risk.',
    'Air-gapped operation: no internet callbacks at runtime, suitable for regulated and isolated forests.',
    'Raw evidence per finding: attributes, ACL summaries, delegation flags, and policy values your AD team can remediate.',
    'Transparent weights and category multipliers aligned to real exploitation impact, not opaque pass/fail tallies.',
    'HTML heatmaps, JSON, CSV, delta baselines, and remediation playbooks with PowerShell snippets for repeatable hardening.',
  ],
} as const

export const AD_INTERACTION = {
  title: 'How teams run AD Suite',
  intro:
    'Operators scope domain context, credentials, and category sets, then let the framework orchestrate parallel checks and roll up results. A typical engagement flow:',
  steps: [
    'Select forest and domain context, service account or assessor credentials, and which modules to emphasize (for example ADCS ESC patterns or Kerberos hygiene).',
    'The runspace pool dispatches hundreds of independent check functions without serial bottlenecks.',
    'Each check collects LDAP and ADSI-backed proof: the same artifacts a consultant would screenshot, stored structurally for diffing and retest.',
    'Category multipliers and per-check weights feed a weighted domain score from 0-100 so progress is measurable across remediation waves.',
    'Reports surface HTML heatmaps, sortable evidence tables, framework appendices, and optional delta baselines against a prior run.',
    'Remediation playbooks include PowerShell-oriented snippets so directory admins can close gaps without translating prose into commands.',
  ],
  exampleEngagements: [
    'Pre-pentest AD baseline and merger diligence',
    'ADCS focused review (ESC1-ESC8 class patterns)',
    'Kerberos and delegation hardening before audit',
    'Post-remediation score comparison',
  ],
} as const

export const AD_PIPELINE = {
  title: 'From scope to evidence-backed report',
  subtitle: 'Five stages that mirror assessor workflow.',
  phases: [
    {
      step: '1',
      name: 'Scope and auth',
      detail:
        'Domain context, credentials, trust boundaries, and category selection define what the run will prove.',
    },
    {
      step: '2',
      name: 'Parallel dispatch',
      detail:
        'Runspace pools execute independent checks concurrently for throughput on large directories.',
    },
    {
      step: '3',
      name: 'ADSI evidence capture',
      detail:
        'Every check persists native directory proof: attributes, ACLs, delegation bits, and policy values.',
    },
    {
      step: '4',
      name: 'Scoring rollup',
      detail:
        'Transparent weights and multipliers produce finding severity and an overall domain health score.',
    },
    {
      step: '5',
      name: 'Heatmaps and exports',
      detail:
        'HTML heatmaps, JSON, CSV, baselines, and framework-mapped appendices for MITRE, CIS, and STIG readers.',
    },
  ],
} as const

export const AD_DATA_MODEL = {
  title: 'Check domains and evidence types',
  intro:
    'Checks are grouped into more than twenty categories. Each category targets failure modes that offensive teams exploit and auditors ask about.',
  sources: [
    {
      name: 'Kerberos and authentication',
      description: 'SPN exposure, encryption weaknesses, and credential abuse preconditions.',
      role: 'Surfaces paths toward Kerberoasting-style and related attacks before operators weaponize them.',
    },
    {
      name: 'Delegation and abuse primitives',
      description: 'Unconstrained, constrained, and resource-based delegation misconfigurations.',
      role: 'Maps where a single compromised account can pivot without touching application payloads.',
    },
    {
      name: 'Privilege tiers and admin paths',
      description: 'Tier model violations, protected users gaps, and excessive domain admin reach.',
      role: 'Shows how close an ordinary user is to domain dominance.',
    },
    {
      name: 'Password and account policy',
      description: 'Fine-grained password policy, lockout, and aging settings versus organizational standard.',
      role: 'Feeds compliance narratives and quick win remediation lists.',
    },
    {
      name: 'GPO and configuration drift',
      description: 'Group Policy objects and links that weaken workstation or server hardening.',
      role: 'Connects directory policy to endpoint exposure stories.',
    },
    {
      name: 'ADCS, trusts, hybrid',
      description: 'Certificate template abuse patterns, trust relationships, and hybrid Azure AD touchpoints.',
      role: 'Covers ESC-class reviews and forest-wide trust expansion in one program.',
    },
  ],
} as const

export const AD_SCALE = {
  title: 'Scale and operating model',
  intro: 'Dimensions teams use when planning identity assessments:',
  metrics: [
    { value: '600+', label: 'Security checks' },
    { value: '20+', label: 'Check categories' },
    { value: '0-100', label: 'Weighted domain score' },
    { value: 'Offline', label: 'No cloud runtime dependency' },
  ],
} as const

export const AD_EVIDENCE = {
  title: 'Evidence-first, not checkbox-first',
  intro:
    'Assessors defend conclusions with artifacts. AD Suite stores the same class of proof for every finding so retest and dispute resolution do not require rerunning the entire framework.',
  points: [
    'Structured capture of LDAP attributes and ADSI queries behind each result.',
    'ACL summaries and delegation flags where relevant so admins see exactly what to tighten.',
    'Policy values for password, lockout, and certificate settings compared to organizational expectations.',
    'Evidence tables sort and filter for working sessions with identity engineering.',
    'Delta baselines highlight what changed between runs after remediation sprints.',
  ],
} as const

export const AD_SCORING = {
  title: 'Transparent weighted scoring',
  intro:
    'A single opaque grade hides progress. AD Suite exposes how categories contribute to the domain score so teams can prioritize waves that move the number meaningfully.',
  points: [
    'Per-check weights reflect exploitation relevance, not equal noise across six hundred rows.',
    'Category multipliers emphasize systemic issues such as tier violations or dangerous templates.',
    'Rollup produces a 0-100 domain score suitable for before-and-after board or audit updates.',
    'Scores complement narrative attack paths: leadership sees both the story and the metric.',
    'Framework mappings attach MITRE, CIS, and STIG references without losing technical depth.',
  ],
} as const

export const AD_OUTPUTS = {
  title: 'Deliverables and formats',
  intro:
    'Outputs serve identity engineers, AppSec program leads, and compliance readers from the same run.',
  rows: [
    { section: 'HTML heatmaps', contains: 'Visual concentration of risk by category for executive and engineering readouts.' },
    { section: 'JSON and CSV', contains: 'Machine-readable exports for SOAR, ticketing, and custom analytics.' },
    { section: 'Evidence tables', contains: 'Sortable proof aligned to each finding for working sessions.' },
    { section: 'Framework appendix', contains: 'MITRE ATT&CK v14, CIS Controls v8, and DISA STIG-style cross-references.' },
    { section: 'Delta baselines', contains: 'Compare current run to a prior baseline to prove remediation progress.' },
    { section: 'Remediation playbooks', contains: 'PowerShell-oriented snippets directory teams can adapt immediately.' },
    { section: 'Attack-path narratives', contains: 'Chained escalation stories beyond isolated LDAP lines.' },
    { section: 'Portal cadence', contains: 'Identity findings align with retest and reporting timelines alongside app and cloud issues.' },
  ],
} as const

export const AD_TECH_STACK = {
  title: 'Technical stack',
  rows: [
    { layer: 'Runtime', technology: 'PowerShell on Windows assessor or jump host with directory connectivity' },
    { layer: 'Directory API', technology: 'ADSI and LDAP queries; no proprietary cloud middle tier' },
    { layer: 'Concurrency', technology: 'Runspace pool dispatches independent check functions in parallel' },
    { layer: 'Modularity', technology: 'Category-scoped modules for Kerberos, delegation, ADCS, trusts, hybrid, and more' },
    { layer: 'Scoring engine', technology: 'Configurable weights and category multipliers with documented rationale' },
    { layer: 'Reporting', technology: 'HTML, JSON, CSV generators plus heatmap and baseline diff logic' },
    { layer: 'Air gap', technology: 'Offline-capable execution without internet dependency at scan time' },
  ],
} as const

export const AD_USE_CASES = {
  title: 'Example use cases',
  cases: [
    {
      query: 'Pre-engagement baselines',
      outcome:
        'Establish a scored snapshot before penetration testing or purple team events so findings are comparable afterward.',
    },
    {
      query: 'Kerberos and delegation hardening',
      outcome:
        'Validate that remediation waves reduced delegation abuse surface and moved the domain score measurably.',
    },
    {
      query: 'ADCS reviews',
      outcome:
        'Focus on ESC1-ESC8 class certificate template and enrollment issues with evidence for PKI owners.',
    },
    {
      query: 'Merger and acquisition diligence',
      outcome:
        'Rapidly assess an acquired forest trust posture and tier violations before integration deadlines.',
    },
    {
      query: 'Audit and compliance packs',
      outcome:
        'Deliver CIS, STIG, and MITRE-aligned appendices without maintaining separate manual spreadsheets.',
    },
    {
      query: 'With internal network testing',
      outcome:
        'Pair AD Suite output with lateral movement testing when tiering and identity paths are in scope.',
    },
  ],
} as const

export const AD_CLOSING = {
  paragraph:
    'AD Suite brings assessor-grade identity coverage, evidence depth, and framework language into a repeatable PowerShell program. Parallel execution, transparent scoring, and air-gapped operation make it suitable for the same forests where a single mis-tiered delegation can undo millions in application security spend.',
} as const
