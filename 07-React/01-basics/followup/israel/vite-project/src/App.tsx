import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import myImg from'./assets/images (1).png';
import './App.scss'
import bicycle from './assets/Bicycle.jpg';
import london from './assets/london.jpg';
import Italy from './assets/Italy.jpg' ;
import rome from './assets/rome.jpg';
import makluba from './assets/makluba.jpg';
import donuts from './assets/donuts.jpg' ;
import baguette from './assets/baguette.jpg';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hi, i'm israel cohen</h1>
      <h3>I work in QA - quality assurance, in the development unit of the prison service</h3>
<h3>I am 30 years old and the father of three sweet daughters</h3>
<h3>likes to cook and travel </h3>
<div className='images'>
<img src={bicycle} alt="" />
<img src= {london} alt="" />
<img src={Italy} alt="" />
<img src= {rome} alt="" />
<img src={makluba} alt="" />
<img src={donuts} alt="" />
<img src={baguette} alt="" />
</div>


    </>
  )
}

export default App
