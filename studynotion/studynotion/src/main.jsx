import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Toaster } from 'react-hot-toast'



// CALL IT ONCE IN YOUR APP



ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
  <App />
  <Toaster  position="top-right"
  reverseOrder={false}/>
  <ToastContainer/>
  </>
    
 
)
