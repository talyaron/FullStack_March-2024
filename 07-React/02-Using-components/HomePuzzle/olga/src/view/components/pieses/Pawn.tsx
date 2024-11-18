import { Piece } from "../types";

export const getPawnMoves = (row: number, col: number, color: 'white' | 'black', board: ( Piece | null)[][]) => {
    const moves: { row: number; col: number }[] = [];
    const direction = color === 'white' ? -1 : 1;
  
    if (!board[row + direction][col]) {
      moves.push({ row: row + direction, col });
    }
  
    // Взятие по диагонали
    [-1, 1].forEach((offset) => {
      const targetCol = col + offset;
      if (targetCol >= 0 && targetCol < 8) {
        const targetPiece = board[row + direction]?.[targetCol];
        if (targetPiece && targetPiece.color !== color) {
          moves.push({ row: row + direction, col: targetCol });
        }
      }
    });
  
    return moves;
  };