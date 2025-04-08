import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './components/Auth'
import { setCounterToDb } from './controllers/counter/setCounter'
import { listenToCounter } from './controllers/counter/getCounter'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const unsubscribe = listenToCounter(setCount)
    return () => unsubscribe()
  }, [])

  const handleCountChange = (value: number) => {
    setCount(value)
    setCounterToDb(value)
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <input 
        type="number" 
        value={count} 
        onChange={(e) => handleCountChange(Number(e.target.value))} 
      />
    </div>
  )
}

export default App
