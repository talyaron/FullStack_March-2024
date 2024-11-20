import { useState } from 'react'
import './tile.scss'


//Create a Tile, like in the previous chess game. At the begging it will be white, and on click it will change to black.//

const Tile = () => {
  const [color, setColor] = useState('white');
  const handleClick = () => {
    setColor(color === 'white' ? 'black' : 'white');
  }
  return (
    <div className={`tile ${color}`} onClick={handleClick}></div>
  );
};
  

export default Tile;