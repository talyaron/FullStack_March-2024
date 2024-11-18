import React, { useState } from 'react';
import Board from './chessBoard/ChessBoard';
import './App.scss';

const initialPieces = {
  '0-0': 'rook-black',
  '0-1': 'knight-black',
  '0-2': 'bishop-black',
  '0-3': 'queen-black',
  '0-4': 'king-black',
  '0-5': 'bishop-black',
  '0-6': 'knight-black',
  '0-7': 'rook-black',
  '1-0': 'pawn-black',
  '1-1': 'pawn-black',
  '1-2': 'pawn-black',
  '1-3': 'pawn-black',
  '1-4': 'pawn-black',
  '1-5': 'pawn-black',
  '1-6': 'pawn-black',
  '1-7': 'pawn-black',
  '6-0': 'pawn-white',
  '6-1': 'pawn-white',
  '6-2': 'pawn-white',
  '6-3': 'pawn-white',
  '6-4': 'pawn-white',
  '6-5': 'pawn-white',
  '6-6': 'pawn-white',
  '6-7': 'pawn-white',
  '7-0': 'rook-white',
  '7-1': 'knight-white',
  '7-2': 'bishop-white',
  '7-3': 'queen-white',
  '7-4': 'king-white',
  '7-5': 'bishop-white',
  '7-6': 'knight-white',
  '7-7': 'rook-white',
};

const App: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<{ row: number; col: number } | null>(null);

  const handleTileClick = (row: number, col: number) => {
    if (selectedTile?.row === row && selectedTile?.col === col) {
      setSelectedTile(null); 
    } else {
      setSelectedTile({ row, col });
    }
  };

  return (
    <div className="App">
      <div className="board-container">
        <Board selectedTile={selectedTile} onTileClick={handleTileClick} pieces={initialPieces} />
      </div>
    </div>
  );
};

export default App;
