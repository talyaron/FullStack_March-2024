import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Square from "./view/chessBoard/chessBoard";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="chessBoard">
        <div className="line1">
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
        </div>
        <div className="line2">
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
        </div>

        <div className="line3">
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
        </div>

        <div className="line4">
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
        </div>

        <div className="line5">
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
        </div>

        <div className="line6">
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
        </div>

        <div className="line7">
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
        </div>

        <div className="line8">
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
          <Square color={"black"} />
          <Square color={"white"} />
        </div>

      </div>
    </>
  )
}

export default App
