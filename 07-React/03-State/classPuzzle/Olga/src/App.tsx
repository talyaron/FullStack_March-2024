import { useState } from 'react'
import './App.css'

function App() {
  const [isWhite, setIsWhite] = useState(true);

  return (
    <div className={`tile ${isWhite ? 'white' : 'black'}`} onClick={() => setIsWhite(!isWhite)}></div>
  )
}

export default App
