/** Cloud security program page. Source: public/servicedocumentfolder/technieum-cloud-security.pdf */

export const CLOUD_SEC_PDF_HREF = '/servicedocumentfolder/technieum-cloud-security.pdf' as const

export const CLOUD_SEC_HERO = {
  eyebrow: 'Cloud and platform',
  title: 'Cloud security assessment',
  lead:
    'Multi-cloud assessment across AWS, Azure, GCP, and M365 — beyond CIS benchmarks to real exploitation paths. Multi-cloud and hybrid assessments that follow identity, workload, and pipeline trust the way cloud breakouts actually unfold.',
  sub:
    'Matches the cloud security datasheet: provider-native checks, CIS benchmarking, Kubernetes and M365 depth where in scope, exploitation validation, and reporting operators can patch against.',
} as const

export const CLOUD_SEC_KEY_BENEFITS = {
  title: 'Key benefits',
  subtitle: 'Why this matters',
  items: [
    {
      title: 'Real exploitation, not just compliance',
      body:
        'We test actual IAM privilege escalation chains and cross-account pivots — not only CIS checkboxes.',
    },
    {
      title: 'Multi-cloud in one engagement',
      body: 'AWS, Azure, GCP, and hybrid environments assessed comprehensively together.',
    },
    {
      title: 'M365 deep dive',
      body:
        'Exchange, SharePoint, Teams, Entra ID, and Conditional Access — areas many assessments skip.',
    },
  ],
} as const

export const CLOUD_SEC_CHALLENGE = {
  title: 'Your challenge',
  intro: 'Your cloud spans multiple providers, M365 tenants, and hybrid environments:',
  bullets: [
    'IAM policy complexity with hidden privilege escalation paths',
    'Cross-account trust relationships enabling lateral movement',
    'M365 and Entra ID misconfigurations exposing sensitive data',
    'CIS benchmark gaps across multiple providers',
  ],
} as const

export const CLOUD_SEC_PARTNER = {
  title: 'Why Technieum as your trusted partner',
  body:
    'Technieum brings six proprietary AI platforms, an in-house R&D team actively hunting zero-days, and AI-powered methodologies that deliver validated, exploitable findings with a zero false positives commitment — enabling your team to focus remediation effort where it matters most.',
} as const

export const CLOUD_SEC_SOLUTION_INTRO = {
  title: 'Our solution',
  subtitle: 'Services overview',
  intro:
    'Technieum combines configuration review, CIS benchmarking, and real penetration testing — proving what is actually exploitable.',
} as const

export const CLOUD_SEC_SERVICE_CATALOG = [
  {
    step: '1',
    title: 'Cloud security reviews',
    body:
      'Comprehensive assessment of AWS, Azure, and GCP environments covering IAM policy chain analysis, network security group configurations, storage bucket permissions and encryption, logging and monitoring setup, secrets management, service-specific security controls, and cross-account trust relationship evaluation with exploitability validation.',
  },
  {
    step: '2',
    title: 'Office 365 security review',
    body:
      'Exchange, SharePoint, Teams, Entra ID, Conditional Access, MFA, and Defender settings.',
  },
  {
    step: '3',
    title: 'Cloud infrastructure testing',
    body:
      'IAM privilege escalation, cross-account pivoting, metadata attacks, and container escapes.',
  },
  {
    step: '4',
    title: 'CIS benchmark review',
    body: 'Systematic evaluation against CIS for AWS, Azure, GCP, Kubernetes, and M365.',
  },
  {
    step: '5',
    title: 'IAM and privilege escalation',
    body:
      'Role chaining, policy boundaries, cross-service permissions, and assume-role trust exploitation.',
  },
  {
    step: '6',
    title: 'Kubernetes security',
    body:
      'RBAC, network policies, pod security, secrets management, and container image security.',
  },
] as const

export const CLOUD_SEC_EDGE = {
  title: 'The Technieum edge',
  subtitle: 'Why Technieum for cloud security',
  methodologyLead:
    'CIS benchmark assessment, then real exploitation testing (IAM chains, cross-account pivots, metadata attacks), then compliance framework mapping.',
  pillars: [
    {
      title: 'Beyond CIS checks',
      body: 'Real IAM chain testing, cross-account pivots, and data exfiltration paths.',
    },
    {
      title: 'Multi-cloud expertise',
      body: 'AWS, Azure, GCP, and hybrid assessed in a single engagement narrative.',
    },
    {
      title: 'M365 security',
      body: 'Exchange, SharePoint, Teams, and Entra ID — deep assessment.',
    },
    {
      title: 'Technieum OffSec Intelligence Portal cloud intel',
      body: 'RAG-powered playbooks with cloud-specific exploit techniques.',
    },
    {
      title: 'Provider-specific remediation',
      body: 'Terraform, ARM, and CloudFormation fix templates.',
    },
    {
      title: 'Zero false positives commitment',
      body: 'Every misconfiguration validated for real exploitability.',
    },
  ],
} as const

export const CLOUD_SEC_METHODOLOGY = {
  title: 'How we deliver results',
  subtitle: 'Our methodology',
  intro:
    "Technieum's cloud security methodology follows a structured five-phase approach for AWS, Azure, GCP, and Microsoft 365 — moving beyond CIS benchmarks to real exploitation testing.",
  phases: [
    {
      step: '1',
      title: 'Discover',
      body:
        'Cloud enumeration across AWS, Azure, and GCP: IAM roles, policies, trust relationships, network security groups, storage buckets, serverless functions, container registries, and M365 tenant configurations.',
    },
    {
      step: '2',
      title: 'Analyze',
      body:
        'CIS benchmark assessment against provider baselines. IAM policy chain analysis for privilege escalation. Cross-account trust mapping. Technieum OffSec Intelligence Portal generates cloud-specific attack playbooks for identified technologies.',
    },
    {
      step: '3',
      title: 'Attack',
      body:
        'IAM privilege escalation chains, cross-account pivoting, metadata service attacks (IMDS), storage misconfiguration exploitation, container escape testing, and M365 Conditional Access bypass attempts where in scope.',
    },
    {
      step: '4',
      title: 'Report',
      body:
        'Cloud-specific technical reports with IAM analysis, CIS compliance scorecards, privilege escalation path visualizations, and provider-specific CVSS scoring. Management reports map findings to frameworks such as SOC 2 and ISO 27017.',
    },
    {
      step: '5',
      title: 'Remediate',
      body:
        'Provider-specific remediation: Terraform modules, CloudFormation templates, ARM templates, and Azure CLI commands. IAM policy rewrites, network security group rules, and M365 Conditional Access configurations. Retest confirms closure.',
    },
  ],
} as const

export const CLOUD_SEC_DELIVERABLE_REPORTS = {
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
      title: 'Technieum OffSec Intelligence Portal playbook document',
      body:
        'Target-specific attack playbooks from 15,000+ real-world disclosed vulnerabilities via our RAG-powered intelligence engine.',
    },
  ],
} as const

export const CLOUD_SEC_DELIVERABLES_PROGRAM_EXTRA = [
  'Milestone-driven tracking with immediate escalation of critical findings via the OffSec Management Portal — you do not wait for the final report to learn about urgent risks.',
] as const

export const CLOUD_SEC_STANDARDS = {
  title: 'Standards alignment',
  intro:
    'Every Technieum engagement aligns with globally recognized security frameworks including OWASP Top 10, OWASP API Top 10, OWASP LLM Top 10, PTES, NIST CSF, NIST AI RMF, MITRE ATT&CK, CIS Benchmarks, IEC 62443, and ISO 27001:2022.',
  certifications:
    'Our team holds OSCP, OSEP, CRTE, CRTP, eWPTX, eCPPT, and CEH certifications. Technieum is ISO 9001:2015 and ISO 27001:2022 certified.',
} as const

export const CLOUD_SEC_CTA = {
  title: 'Ready to secure your organization?',
  body: 'Partner with Technieum for AI-powered offensive security with validated, actionable findings.',
  contacts: [
    { label: 'robert.a@technieum.com', href: 'mailto:robert.a@technieum.com' },
    { label: 'syam.s@technieum.com', href: 'mailto:syam.s@technieum.com' },
  ],
} as const
