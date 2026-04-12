import { Navigate, useParams } from 'react-router-dom'
import { getProgramHubConfig } from '../data/programHubRegistry'
import { GenericServiceProgramPage } from './GenericServiceProgramPage'
import { InfrastructureNetworkPage } from './InfrastructureNetworkPage'
import { MasterOffsecPage } from './MasterOffsecPage'

export function ServiceProgramRouter() {
  const { programSlug } = useParams<{ programSlug: string }>()
  if (!programSlug) return <Navigate to="/services" replace />

  if (programSlug === 'technieum-master-offsec') return <MasterOffsecPage />
  if (programSlug === 'technieum-infrastructure-network') return <InfrastructureNetworkPage />

  const config = getProgramHubConfig(programSlug)
  if (!config) return <Navigate to="/services" replace />

  return <GenericServiceProgramPage slug={programSlug} config={config} />
}
