import { useState } from 'react'

import './App.scss'
import Input from './views/Components/inputs/Input'

function App() {
  const [count, setCount] = useState(0)
  const [number, setNumber] = useState([])
  console.log(number)

  const [list, setList]=useState([])
function handleSubmit(event:any){
  event.preventDefault();
  console.log(event)

  const form=event.target;
  form.forEach((element: any) => {
    console.log(element.value)
  });
}


  return (
    <>
    <form onSubmit={handleSubmit}>
    <Input setNumber={setNumber} number={number}/>
    <Input setNumber={setNumber} number={number}/>
    <Input setNumber={setNumber} number={number}/>
    <Input setNumber={setNumber} number={number}/>
    <button type="submit" >pop</button>
    </form>
    </>
  )
}

export default App
