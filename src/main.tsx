import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

declare global {
  /*  example
  interface Window {
    elecPlanit?: {
      bucket: any;
      todo: any;
    };
  }*/

  const _WEB_BASE_PATH_: string;
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
