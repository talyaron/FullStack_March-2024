
import { useState } from 'react'
import './App.css'
import { Popup } from './view/components/popup/Popup'


function App() {

  const [isOpen, setIsOpen] = useState(false)

  function handleShowPopup() {
    setIsOpen(true)
  }

  return (
    <>
      <div>
        {isOpen && <Popup  setIsOpen={setIsOpen} />}
          <button onClick={handleShowPopup}>Click me!</button>
      </div>
    </>
  )
}

export default App
