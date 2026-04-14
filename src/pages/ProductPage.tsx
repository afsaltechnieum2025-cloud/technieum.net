import { Navigate, useParams } from 'react-router-dom'
import { getProductByRouteSlug } from '../data/productDocuments'
import { AdProductPage } from './AdProductPage'
import { AsmProductPage } from './AsmProductPage'
import { LlmProductPage } from './LlmProductPage'
import { SastProductPage } from './SastProductPage'
import { ToipProductPage } from './ToipProductPage'

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const doc = slug ? getProductByRouteSlug(slug) : undefined
  if (!doc) return <Navigate to="/" replace />

  if (doc.id === 'toip') {
    return <ToipProductPage doc={doc} />
  }
  if (doc.id === 'asm') {
    return <AsmProductPage doc={doc} />
  }
  if (doc.id === 'llm') {
    return <LlmProductPage doc={doc} />
  }
  if (doc.id === 'sast') {
    return <SastProductPage doc={doc} />
  }
  if (doc.id === 'ad') {
    return <AdProductPage doc={doc} />
  }

  return <Navigate to="/" replace />
}
