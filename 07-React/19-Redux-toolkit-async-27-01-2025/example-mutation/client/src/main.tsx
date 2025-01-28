import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './model/store.ts'
import { BrowserRouter, Routes, Route } from "react-router";
import Pokemon from './view/components/pokemon/Pokemon.tsx'
import Products from './view/pages/products/Products.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pokemon/:pokemonName" element={<Pokemon />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </Provider>,
  </StrictMode>,
)
