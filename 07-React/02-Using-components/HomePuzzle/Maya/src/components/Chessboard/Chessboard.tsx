import Tile from '../Tile/Tile'
import './Chessboard.scss';
import React, { useState } from 'react';


function Chessboard() {
  const [selectedTile, setSelectedTile] = useState<{ row: number; col: number } | null>(null);

    const board = [];
  
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isBlack = (row + col) % 2 === 1;
        const isSelected = selectedTile?.row === row && selectedTile?.col === col;

        board.push(
          <Tile
            key={`${row}-${col}`}
            color={isBlack ? 'black' : 'white'}
            selected={isSelected}
            onClick={() => setSelectedTile({ row, col })}
          />
        );
      }
    }
  
    return (
      <div className="chessboard-container">
        <div className="chessboard">{board}</div>
      </div>
    );
  }
  
  export default Chessboard;