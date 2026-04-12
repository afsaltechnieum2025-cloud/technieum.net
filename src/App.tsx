import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/layout/SiteLayout'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { ProductPage } from './pages/ProductPage'
import { MasterOffsecPage } from './pages/MasterOffsecPage'
import { ServicesPage } from './pages/ServicesPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="platform/:slug" element={<ProductPage />} />
          <Route path="services/technieum-master-offsec" element={<MasterOffsecPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
