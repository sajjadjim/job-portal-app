import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import AUthProvider from './AuthContext/AUthProvider.jsx'
import router from '../src/Root/Router.jsx'


createRoot(document.getElementById('root')).render(
  <AUthProvider>
    <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
  </AUthProvider>
)
