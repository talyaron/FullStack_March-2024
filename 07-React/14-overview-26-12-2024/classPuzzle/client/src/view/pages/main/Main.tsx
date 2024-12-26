import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/register">Register</Link>
    </div>
  )
}

export default Main