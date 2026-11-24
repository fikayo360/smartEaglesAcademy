import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Tooltip,TooltipProvider} from "./components/ui/tooltip"
import { ThemeProvider } from './components/theme-provider'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme"> 
    <TooltipProvider>
    <App />
    </TooltipProvider>
    </ThemeProvider>
  </StrictMode>,
)
