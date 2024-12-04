import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './views/components/header/Header.tsx'
import UserDetails from './views/components/user-details/UserDetails.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <App />
    <UserDetails  />
  </StrictMode>,
)
