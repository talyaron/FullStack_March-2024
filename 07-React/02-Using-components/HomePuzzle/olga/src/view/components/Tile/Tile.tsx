import React from 'react';
import './Tile.scss';

interface TileProps {
  black: boolean;
};

const Tile: React.FC<TileProps> = ({ black }) => {
  const tileClass = black ? 'tile black' : 'tile white';
  return <div className={tileClass}></div>;
};

export default Tile;
