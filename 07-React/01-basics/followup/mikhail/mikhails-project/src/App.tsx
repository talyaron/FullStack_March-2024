import { useState } from 'react'
import reactLogo from './assets/react.svg'
import scaredCat from './assets/cat.jpg'
import WhiteTileComponent from './chessTiles/WhiteTileComponent'
import BlackTileComponent from './chessTiles/BlackTileComponent'
import TileComponent from './chessTiles/TileComponent'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div>
    <h1 className='read-the-docs'>Good Morning Vietnam</h1>
    </div>
    <img className='logo' src={reactLogo} alt="React Logo" />
    <img className='logo' src={scaredCat} alt="scared cat" />
    <div className="container">
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    </div>
    <div className="container">
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    </div>
    <div className="container">
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    </div>
    <div className="container">
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    </div>
    <div className="container">
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    </div>
    <div className="container">
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    </div>
    <div className="container">
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    <TileComponent color="white"/>
    <TileComponent color="black"/>
    </div>

    </>
  )
}

export default App
