import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isSelected, setIsSelected] = useState(false)

  const handleClick = () => {
    setIsSelected(!isSelected);

  };

  return (
    <>
    <div onClick={handleClick}>
      <img src= {isSelected ? "https://i.ibb.co/BBmsWRV/A-black-chess-piece-is-concise-black-and-white-checkerboard-264504-wh1200-removebg-preview.png" : "https://as2.ftcdn.net/jpg/02/25/11/79/220_F_225117933_uTlXqSmohndeDOuSLbyMneMXAhy7wCth.jpg"} alt="" />
      
      </div>
    </>
  )
}

export default App
