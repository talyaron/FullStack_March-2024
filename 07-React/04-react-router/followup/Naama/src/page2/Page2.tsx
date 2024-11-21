import React from 'react'
import { Link } from 'react-router-dom';

const Page2 = () => {
  return (
    <div className='page'>page2
    <Link to="/">to home page</Link>
    <Link to="/page1">to page1</Link>
    </div>
  )
}

export default Page2;