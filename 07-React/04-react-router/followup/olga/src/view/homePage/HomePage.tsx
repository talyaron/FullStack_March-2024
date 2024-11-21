import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='home'>
        <h1>Welcome to HomePage</h1>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
    </div>
  )
}

export default HomePage