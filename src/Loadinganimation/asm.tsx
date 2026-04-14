import { useLocation } from 'react-router-dom'
import SuiteLaunchOverlay from '../components/SuiteLaunchOverlay'

const ASM_URL = 'http://43.205.213.93:8000/'

export default function ASM() {
  const { key } = useLocation()
  return <SuiteLaunchOverlay key={key} variant="fullscreen-redirect" targetUrl={ASM_URL} />
}
