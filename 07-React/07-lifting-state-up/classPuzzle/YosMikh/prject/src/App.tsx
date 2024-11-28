import { useState } from 'react'

import './App.scss'
import Input from './views/Components/inputs/Input'

function App() {
  const [number, setNumber] = useState(0)
  console.log(number)

  const [list, setList] = useState<number[]>([])


  function handleSubmit(event: any) {
    event.preventDefault();
    const form = event.target.input;
    form.forEach((element : any) => {
      const { valueAsNumber } = element;
      list.push(valueAsNumber)
      // setList([...list, valueAsNumber])
      console.log(list)
    });
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input setNumber={setNumber} />
        <Input setNumber={setNumber} />
        <Input setNumber={setNumber} />
        <Input setNumber={setNumber} />
        <button type="submit" >pop</button>
      </form>
    </>
  )
}

export default App
