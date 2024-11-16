import { FC } from 'react';
import './Tile.scss';

export interface Props {
    color: 'black' | 'white';
    selected: boolean;
    onClick: () => void;

  }
  
  const Tile: React.FC<Props> = ({ color, selected, onClick }) => {
    return (
      <div
      className={`tile ${color} ${selected ? 'selected' : ''}`}
      onClick={onClick}
    ></div>
  );
};

  
  export default Tile;