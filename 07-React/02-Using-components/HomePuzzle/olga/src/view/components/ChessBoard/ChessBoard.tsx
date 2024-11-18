import {FC, useState} from 'react';
import Tile from './../Tile/Tile';
import './ChessBoard.scss';

const ChessBoard: FC = () => {
  // const [selectedTile, setSelectedTile] = useState<string | null>(null);
  const initialBoard = [
    ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
    ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
    ...Array(4).fill(Array(8).fill(null)),
    ['pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn', 'pawn'],
    ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'],
  ];

  const initialPieces = initialBoard.map((row, rowIndex) =>
    row.map((piece: any) => {
      if (!piece) return null;
      const isWhite = rowIndex < 2;
      return { type: piece, color: isWhite ? 'white' : 'black' };
    })
  );

  const [board, setBoard] = useState(initialPieces);
  const [selectedTile, setSelectedTile] = useState<{ row: number; col: number } | null>(null);

  const handleTileClick = (row: number, col: number) => {
    if (selectedTile) {
      movePiece(selectedTile.row, selectedTile.col, row, col);
      setSelectedTile(null);
    } else {
      if (board[row][col]) {
        setSelectedTile({ row, col });
      }
    }
  };

  const movePiece = (fromRow: number, fromCol: number, toRow: number, toCol: number) => {
    const newBoard = board.map((row, rowIndex) =>
      row.map((tile: any, colIndex: number) => {
        if (rowIndex === toRow && colIndex === toCol) {
          return board[fromRow][fromCol];
        }
        if (rowIndex === fromRow && colIndex === fromCol) {
          return null;
        }
        return tile;
      })
    );
    setBoard(newBoard);
  };

  return (
    <div className="chessboard">
      {board.map((row, rowIndex) =>
        row.map((piece: any, colIndex: number) => {
          // const key = `${rowIndex}-${colIndex}`;
          const isBlack = (rowIndex + colIndex) % 2 === 1;
          const isSelected = selectedTile?.row === rowIndex && selectedTile?.col === colIndex;
          return (
            <Tile
              key={`${rowIndex}-${colIndex}`}
              black={isBlack}
              piece={piece}
              selected={isSelected}
              onClick={() => { handleTileClick(rowIndex, colIndex); console.log(`Clicked on ${rowIndex}-${colIndex}`)}}
            />
          );
        })
      )}
    </div>
  );
};
// const ChessBoard: FC = () => {
//   const [selectedTile, setSelectedTile] = useState<string | null>(null);
//   const board = [];

//   for (let row = 0; row < 8; row++) {
//     for (let col = 0; col < 8; col++) {
//       const key = `${row}-${col}`;
//       const isBlack = (row + col) % 2 === 1;
//       const isSelected = selectedTile === key;

//       board.push(<Tile 
//         key={key} 
//         selected={isSelected} 
//         onClick={() => setSelectedTile(key)} 
//         black={isBlack} />);
//     }
//   }

//   return <div className="chessboard">{board}</div>;
// };

export default ChessBoard;
