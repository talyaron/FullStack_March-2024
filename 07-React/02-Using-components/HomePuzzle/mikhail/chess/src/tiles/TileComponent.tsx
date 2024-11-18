import React, { FC } from 'react';
import './TileComponent.scss';

interface Props {
  color: string; 
  isSelected: boolean; 
  piece?: string; 
  onClick: () => void; 
}

const TileComponent: FC<Props> = ({ color, isSelected, piece, onClick }) => {
  return (
    <div
      className={`tile ${color} ${isSelected ? 'glow' : ''}`} 
      onClick={onClick} 
    >
      {piece && <span className={`piece ${piece}`}></span>} {}
    </div>
  );
};

export default TileComponent;
