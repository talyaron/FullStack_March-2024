import { useState } from 'react'
import './App.css'
import Component1 from './view/components/component1/Component1'
import Component2 from './view/components/component2/Component2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
     <Component1 />
     <Component2 />
     </div>
  </>
)
}


export default App
