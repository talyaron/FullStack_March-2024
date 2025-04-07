import { useEffect, useState } from 'react'
import './App.css'
import { listenCounter } from './controllers/db/counter/getCounter'
import { setCounterTODB } from './controllers/db/counter/setCounter'

function App() {
  const [count, setCount] = useState(0)
  console.log('count', count)
  useEffect(() => {
    listenCounter(setCount)
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.valueAsNumber;
    if (value) {
      setCounterTODB(value);
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
