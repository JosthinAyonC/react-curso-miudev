import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> {/* React.StrictMode es un componente que nos 
              permite detectar problemas en nuestra aplicación */}
    <App />
  </React.StrictMode>,
)
