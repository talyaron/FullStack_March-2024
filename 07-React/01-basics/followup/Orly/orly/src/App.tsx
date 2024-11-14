import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={"https://static.vecteezy.com/system/resources/thumbnails/022/448/291/small_2x/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg"} alt="Tree" />
        </a>
       
      </div>
      <h1>Importance and Value of trees.</h1>
      <div className="card">
      
        <p>
        Since the beginning, trees have furnished us with two of life’s essentials, food and oxygen. As we evolved, they provided additional necessities such as shelter, medicine, and tools. Today, their value continues to increase and more benefits of trees are being discovered as their role expands to satisfy the needs created by our modern lifestyles.
        </p>
      </div>
      
    </>
  )
}

export default App
