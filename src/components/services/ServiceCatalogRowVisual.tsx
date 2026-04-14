import { GenericPipelineVisual } from '../program-hub/GenericPipelineVisual'
import { InfrastructureNetworkVisual } from '../infrastructure-network/InfrastructureNetworkVisual'
import {
  aiSecurityHubConfig,
  applicationSecurityHubConfig,
  cloudSecurityHubConfig,
  icsOtSecurityHubConfig,
  securityConsultingHubConfig,
  threatSimulationsHubConfig,
  wfhSecurityHubConfig,
} from '../../data/programHubRegistry'

type Props = {
  slug: string
}

const PIPELINE_BY_SLUG: Record<string, { visualNodes: typeof applicationSecurityHubConfig.visualNodes; visualAriaLabel: string }> = {
  'technieum-application-security': applicationSecurityHubConfig,
  'technieum-cloud-security': cloudSecurityHubConfig,
  'technieum-ai-security': aiSecurityHubConfig,
  'technieum-threat-simulations': threatSimulationsHubConfig,
  'technieum-ics-ot-security': icsOtSecurityHubConfig,
  'technieum-security-consulting': securityConsultingHubConfig,
  'technieum-wfh-security': wfhSecurityHubConfig,
}

/** Decorative fallback if a slug is missing from the map */
function FallbackVisual() {
  return (
    <div
      className="relative mx-auto flex aspect-[4/3] w-full max-w-md items-center justify-center overflow-hidden rounded-2xl border border-border-strong/50 bg-panel/20 shadow-[inset_0_1px_0_rgb(255_255_255/0.04)]"
      aria-hidden
    >
      <div className="absolute inset-0 opacity-[0.06] hero-cyber-scan" />
      <svg viewBox="0 0 200 160" className="relative z-[1] h-auto w-[85%] text-brand/35" fill="none" aria-hidden>
        <rect x="24" y="28" width="152" height="104" rx="12" stroke="currentColor" strokeWidth="1" />
        <path d="M60 70h80M60 90h56M60 110h72" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 4" />
        <circle cx="100" cy="52" r="10" stroke="currentColor" strokeWidth="1.2" className="text-brand/55" />
      </svg>
    </div>
  )
}

export function ServiceCatalogRowVisual({ slug }: Props) {
  if (slug === 'technieum-infrastructure-network') {
    return <InfrastructureNetworkVisual />
  }
  const cfg = PIPELINE_BY_SLUG[slug]
  if (!cfg) return <FallbackVisual />
  return <GenericPipelineVisual nodes={cfg.visualNodes} ariaLabel={cfg.visualAriaLabel} />
}
