import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './model/store.ts'
import { BrowserRouter, Routes, Route } from "react-router";
import Pokemon from './view/components/pokemon/Pokemon.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pokemon/:pokemonName" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </Provider>,
  </StrictMode>,
)
