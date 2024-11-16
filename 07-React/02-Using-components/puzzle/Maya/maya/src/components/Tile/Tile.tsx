import { FC } from 'react';
import './Tile.css';

interface Props {
    color: 'black' | 'white';
  }
  
  const Tile: FC<Props> = ({ color }) => {
    return <div className={`tile ${color}`}></div>;
  };
  
  export default Tile;