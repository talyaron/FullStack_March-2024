import { useState } from 'react'
import './App.css'
import Input from './view/components/input/Input'
import Output from './view/components/output/Output'

function App() {

  const [numbers, setNumber] = useState<number[]>([0, 0, 0, 0])

  const handelInputChange = (index: number, value: number) => {
    const updatedNumber = [...numbers]
    updatedNumber[index] = value
    setNumber(updatedNumber)
  }

  return (
    <>
     <div>
      {numbers.map((num, index) => (
        <Input key={index} value={num} onChange={(value) => handelInputChange(index, value)} />
      ))}
      <Output highestNumber={Math.max(...numbers)} />
     </div>

    </>
  )
}

export default App
