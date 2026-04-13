import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { ServiceProgramRouter } from './pages/ServiceProgramRouter'
import { ServicesPage } from './pages/ServicesPage'
import { WhyTechnieumPage } from './pages/WhyTechnieumPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="platform/:slug" element={<ProductPage />} />
          <Route path="services/:programSlug" element={<ServiceProgramRouter />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="why-technieum" element={<WhyTechnieumPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
