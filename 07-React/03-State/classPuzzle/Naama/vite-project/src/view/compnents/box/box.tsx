import "./box.scss"
import { useState } from 'react'
const Box = () => {
    const [color, setColor] = useState<string>("box_white")
    return (
      <div onClick={() => {if(color === "box_white")setColor((color) => "box_black"); else setColor((color) => "box_white");}} className={color}></div>
    )
  }
  
export default Box