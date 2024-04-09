import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './theme/themeProwider.tsx'
import {BrowserRouter} from 'react-router-dom'
import { AuthContentProvider } from './components/authContent.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <AuthContentProvider>
    <App />
    </AuthContentProvider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
