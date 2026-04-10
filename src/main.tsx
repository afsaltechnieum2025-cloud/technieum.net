import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import faviconUrl from './assets/technieum-logo.png'
import './styles/index.css'
import App from './App.tsx'

let faviconLink = document.querySelector<HTMLLinkElement>("link[rel='icon']")
if (!faviconLink) {
  faviconLink = document.createElement('link')
  faviconLink.rel = 'icon'
  document.head.appendChild(faviconLink)
}
faviconLink.type = 'image/png'
faviconLink.href = faviconUrl

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
