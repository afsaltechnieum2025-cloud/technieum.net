import { Navigate, useParams } from 'react-router-dom'
import { ApplicationSecurityPage } from './ApplicationSecurityPage'
import { AiSecurityPage } from './AiSecurityPage'
import { CloudSecurityPage } from './CloudSecurityPage'
import { ThreatSimulationsPage } from './ThreatSimulationsPage'
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

  return <Navigate to="/services" replace />
}
