import { useState } from 'react'
import './App.css'
import Joke from './view/Joke';

function App() {
  return (
    <>      
      <div>
        <p>
          <h1>Random Joke Generator</h1>
        </p>
      </div>
      <Joke />

    </>
  )
}

export default App
