// Chessboard.js
import {fc} from 'react';
import Tile from './tile';
import './Chessboard.css';

const Chessboard = () => {
  const rows = 8;
  const cols = 8;
  const tiles = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Determine tile color based on row and col index
      const isBlack = (row + col) % 2 === 0;
      const color = isBlack ? 'black' : 'white';

      // Add Tile component with the correct color to the tiles array
      tiles.push(<Tile key={`${row}-${col}`} color={color} />);
    }
  }

  return <div className="chessboard">{tiles}</div>;
};

export default Chessboard;
