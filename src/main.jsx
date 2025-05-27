import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import router from './Root/Router.jsx'
import { RouterProvider } from 'react-router'
import AUthProvider from './AuthContext/AUthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <AUthProvider>
    <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
  </AUthProvider>
)
