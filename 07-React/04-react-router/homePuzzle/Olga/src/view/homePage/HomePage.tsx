import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
        <h1>Welcome to our restaurant</h1>
        <Link to = "/menu" className='btn'>Open Menu</Link>
    </div>
  )
}

export default HomePage