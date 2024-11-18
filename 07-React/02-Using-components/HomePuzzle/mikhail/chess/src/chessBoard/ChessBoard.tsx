import React from 'react';
import TileComponent from '../tiles/TileComponent';
import './ChessBoard.scss';

interface BoardProps {
  selectedTile: { row: number; col: number } | null;
  onTileClick: (row: number, col: number) => void;
  pieces: { [key: string]: string }; 
}

const Board: React.FC<BoardProps> = ({ selectedTile, onTileClick, pieces }) => {
  const renderChessboard = () => {
    const board = [];
    for (let row = 0; row < 8; row++) {
      const tiles = [];
      for (let col = 0; col < 8; col++) {
        const color = (row + col) % 2 === 0 ? 'white' : 'black'; 
        const isSelected = selectedTile?.row === row && selectedTile?.col === col; 
        const piece = pieces[`${row}-${col}`]; 

        tiles.push(
          <TileComponent
            key={`${row}-${col}`}
            color={color}
            isSelected={isSelected}
            piece={piece} 
            onClick={() => onTileClick(row, col)} 
          />
        );
      }
      board.push(
        <div key={row} className="row">
          {tiles}
        </div>
      );
    }
    return board;
  };

  return <div className="chessboard">{renderChessboard()}</div>;
};

export default Board;
