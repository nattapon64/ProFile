import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/index.css'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <AuthContextProvider>
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>,
  // </AuthContextProvider>
)
