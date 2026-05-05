import { ServiceProgramHeroVisual } from '../program-hub/ServiceProgramHeroVisual'
import type { ProgramHubVisualNode } from '../../data/programHubRegistry'
import {
  aiSecurityHubConfig,
  applicationSecurityHubConfig,
  cloudSecurityHubConfig,
  icsOtSecurityHubConfig,
  securityConsultingHubConfig,
  threatSimulationsHubConfig,
  wfhSecurityHubConfig,
} from '../../data/programHubRegistry'
import { ServiceHubConvergeVisual } from './ServiceHubConvergeVisual'

type Props = {
  slug: string
}

const INFRA_NODES = [
  { t1: 'External', t2: 'ASM / edge' },
  { t1: 'Perimeter', t2: 'Net test' },
  { t1: 'Internal', t2: 'Lateral' },
  { t1: 'Identity', t2: 'AD / hybrid' },
] as const satisfies readonly [
  ProgramHubVisualNode,
  ProgramHubVisualNode,
  ProgramHubVisualNode,
  ProgramHubVisualNode,
]

const PIPELINE_BY_SLUG: Record<string, { visualNodes: typeof applicationSecurityHubConfig.visualNodes; visualAriaLabel: string }> = {
  'technieum-application-security': applicationSecurityHubConfig,
  'technieum-cloud-security': cloudSecurityHubConfig,
  'technieum-ai-security': aiSecurityHubConfig,
  'technieum-threat-simulations': threatSimulationsHubConfig,
  'technieum-ics-ot-security': icsOtSecurityHubConfig,
  'technieum-security-consulting': securityConsultingHubConfig,
  'technieum-wfh-security': wfhSecurityHubConfig,
}

function FallbackVisual() {
  const nodes: readonly [
    ProgramHubVisualNode,
    ProgramHubVisualNode,
    ProgramHubVisualNode,
    ProgramHubVisualNode,
  ] = [
    { t1: 'Discover', t2: 'Scope' },
    { t1: 'Assess', t2: 'Validate' },
    { t1: 'Report', t2: 'Evidence' },
    { t1: 'Retest', t2: 'Closure' },
  ]
  return (
    <ServiceHubConvergeVisual
      nodes={nodes}
      ariaLabel="Diagram: delivery streams consolidating in the OffSec Management Portal."
    />
  )
}

export function ServiceCatalogRowVisual({ slug }: Props) {
  if (slug === 'technieum-infrastructure-network') {
    return (
      <ServiceProgramHeroVisual
        layout="catalog"
        serviceSlug={slug}
        ariaLabel="Diagram: external attack surface through perimeter and internal testing into identity, consolidating in the OffSec Management Portal."
        pipelineFallback={
          <ServiceHubConvergeVisual
            nodes={INFRA_NODES}
            ariaLabel="Diagram: external attack surface through perimeter and internal testing into identity, consolidating in the OffSec Management Portal."
          />
        }
      />
    )
  }
  const cfg = PIPELINE_BY_SLUG[slug]
  if (!cfg) return <FallbackVisual />
  return (
    <ServiceProgramHeroVisual
      layout="catalog"
      serviceSlug={slug}
      ariaLabel={cfg.visualAriaLabel}
      pipelineFallback={<ServiceHubConvergeVisual nodes={cfg.visualNodes} ariaLabel={cfg.visualAriaLabel} />}
    />
  )
}
