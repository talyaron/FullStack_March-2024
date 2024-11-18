import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import funnyCat from './assets/funnyCat.jpg'
import canaanDog from './assets/canaanDog.jpg'
import sugerGlider from './assets/sugerGlider.jpg'
import blueParrot from './assets/blueParrot.jpg'
import petSelectionLogo from './assets/petSelectionLogo.png'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={petSelectionLogo} className="logo" alt="Vite logo" />
        </a> 
      </div>
      <h1>Maya's pets selection </h1>
      <div className="card">
        <h2>
          select your pet:
        </h2>
        <a href="https://react.dev" target="_blank">
          <img src={canaanDog} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={funnyCat} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={sugerGlider} className="logo react" alt="React logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={blueParrot} className="logo react" alt="React logo" />
        </a>
      </div>
     
    </>
  )
}

export default App
