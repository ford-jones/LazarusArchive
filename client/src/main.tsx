
import { StrictMode } from "react"
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router'

import App from './App.tsx'

const root = createRoot(document.getElementById('root')!)

root.render(
  <Router>
    <StrictMode>
      <App />
    </StrictMode>
  </Router>
)
