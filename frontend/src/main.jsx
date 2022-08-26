import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { GlobalContextProvider } from './contexts/globalContext'
import { PartyContextProvider } from './contexts/PartyContext'

import './assets/index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <PartyContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PartyContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>
)
