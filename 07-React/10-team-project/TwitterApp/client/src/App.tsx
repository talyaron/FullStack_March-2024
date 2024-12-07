import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Router , useNavigate} from 'react-router-dom'
import './App.css'
import HomePage from './views/pages/HomePage'
import { Link } from 'react-router-dom';
import Header from './views/components/header/Header'
import UserDetails from './views/components/user-details/UserDetails'

function App() {
  const [count, setCount] = useState(0)

 


  return (
    <>
    <Header />
      <div>
        <h1>Twitter App</h1>
        <Link to="/HomePage">
          <button>Go to HomePage</button>
        </Link>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <UserDetails />
    </>
  )
}


export default App
