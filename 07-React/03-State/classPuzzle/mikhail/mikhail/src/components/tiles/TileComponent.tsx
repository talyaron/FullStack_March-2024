import React, { useState } from 'react';
import './TileComponent.scss';

const TileComponent: React.FC = () => {
  const [isWhite, setIsWhite] = useState(true); 

  const handleClick = () => {
    setIsWhite(!isWhite); 
  };

  return (
    <div
      className={`tile ${isWhite ? 'white' : 'black'}`} 
      onClick={handleClick} 
    >
    </div>
  );
};

export default TileComponent;
