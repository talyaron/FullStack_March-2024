import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import scaredCat from './assets/cat.jpg'
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
    </>
  )
}

export default App
