import { Navigate, useParams } from 'react-router-dom'
import { getProgramHubConfig } from '../data/programHubRegistry'
import { ApplicationSecurityPage } from './ApplicationSecurityPage'
import { AiSecurityPage } from './AiSecurityPage'
import { CloudSecurityPage } from './CloudSecurityPage'
import { ThreatSimulationsPage } from './ThreatSimulationsPage'
import { GenericServiceProgramPage } from './GenericServiceProgramPage'
import { IcsOtSecurityPage } from './IcsOtSecurityPage'
import { InfrastructureNetworkPage } from './InfrastructureNetworkPage'
import { MasterOffsecPage } from './MasterOffsecPage'
import { SecurityConsultingPage } from './SecurityConsultingPage'
import { WfhSecurityPage } from './WfhSecurityPage'

export function ServiceProgramRouter() {
  const { programSlug } = useParams<{ programSlug: string }>()
  if (!programSlug) return <Navigate to="/services" replace />

  if (programSlug === 'technieum-master-offsec') return <MasterOffsecPage />
  if (programSlug === 'technieum-infrastructure-network') return <InfrastructureNetworkPage />
  if (programSlug === 'technieum-application-security') return <ApplicationSecurityPage />
  if (programSlug === 'technieum-cloud-security') return <CloudSecurityPage />
  if (programSlug === 'technieum-ai-security') return <AiSecurityPage />
  if (programSlug === 'technieum-threat-simulations') return <ThreatSimulationsPage />
  if (programSlug === 'technieum-ics-ot-security') return <IcsOtSecurityPage />
  if (programSlug === 'technieum-security-consulting') return <SecurityConsultingPage />
  if (programSlug === 'technieum-wfh-security') return <WfhSecurityPage />

  const config = getProgramHubConfig(programSlug)
  if (!config) return <Navigate to="/services" replace />

  return <GenericServiceProgramPage config={config} />
}
