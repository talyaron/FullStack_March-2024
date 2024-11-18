
import { FC } from 'react';
import React, { useState } from 'react';
 

const Tile = () => {
    const [isWhite, setIsWhite] = useState(true);
  
    const toggleColor = () => {
      setIsWhite((prevIsWhite) => !prevIsWhite);
    };
  
    const backgroundColor = isWhite ? 'white' : 'black';
  
    return (
      <div
        onClick={toggleColor}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: backgroundColor,
          border: '1px solid black',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      ></div>
    );
  };
  
  export default Tile;