import React from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './contextApi/AuthContext'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
