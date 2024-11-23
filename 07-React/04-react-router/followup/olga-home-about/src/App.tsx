import { Link, RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './router'

function App() {

  return (
    <div>
        <nav style={navStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
          <Link to="/contact" style={linkStyle}>
            Contact Us
          </Link>
        </nav>

        <RouterProvider router={router} />
    </div>
  )
}

const navStyle = {
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: "#282c34",
  padding: "10px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
};

export default App
