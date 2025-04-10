import { useEffect, useState } from 'react'
import './App.css'
import { setCounterToDB } from './controllers/db/counter/setCounter'
import { listenToCounter } from './controllers/db/counter/getCounter'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    listenToCounter(setCount);
  },[])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.valueAsNumber;
    if (value) {
    
      setCounterToDB(value);
    }
  }

  return (
    <div>
      {count}
      <input type="number" onChange={handleChange} />
    </div>
      
  )
}

export default App
