import React from 'react'
import { Link } from 'react-router-dom';

const Page1 = () => {
  return (
    <div className='page'>page1
    <Link to="/">to home page</Link>
    <Link to="/page2">to page2</Link></div>
    
  )
}

export default Page1;