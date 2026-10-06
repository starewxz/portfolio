import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/jetbrains-mono'
import './styles/index.css'
import Router from './router.jsx'

createRoot(document.getElementById('root')).render(<Router />)
