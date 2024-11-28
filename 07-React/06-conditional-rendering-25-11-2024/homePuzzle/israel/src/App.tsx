import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import User from './view/components/user/User'
import Chip from './view/components/chip/Chip'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='user'>
        <User name='Ronen' />
        <Chip chip='admin'/>
        
      </div>

      <div className='user'>
        <User name='David' />
        <Chip chip='user'/>
      </div>

      <div className='user'>
        <User name='Ron' />
        <Chip chip='user'/>
      </div>

      <div className='user'>
        <User name='Yael' />
        <Chip chip='user'/>
      </div>

      <div className='user'>
        <User name='Noa' />
        <Chip chip='user'/>
      </div>
    </>
  )
}

export default App
