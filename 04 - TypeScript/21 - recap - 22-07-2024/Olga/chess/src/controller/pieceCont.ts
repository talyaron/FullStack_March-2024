import { Piece, pieces } from "../model/pieces/piecesModel";
import { Position } from "../model/types/typesModel";


export function movePiece(piece:Piece, position:Position){
    piece.position = position
}

export function allowedMoves(id:string):Position[]{
    try {
        const piece = pieces.find(piece => piece.id === id)
        const moves:Position[] = [];
        if (!piece) throw new Error("no piece")
        const { x, y } = piece.position
        console.log(x, y)
        function addMove(a: number, b: number) {
            
            if (a >= 0 && a < 8 && b >= 0 && b < 8) {
                // if (!board[x][y] || board[x][y].color !== board[startX][startY].color) {
                    const position = new Position(a, b)
                    moves.push(position);
                    return true;
            //         if (board[x][y]) return true; // stop if there's a piece
                } else {
                    return false; // stop if it's a piece of the same color
                }
            // }
            // return false;
        }
    // }

        for (let x2 = x + 1; x2 < 8; x2++) {
            if (!addMove(x2, y)) break;
        }
        // left direction
        for (let x2 = x - 1; x2 >= 0; x2--) {
            if (!addMove(x2, y)) break;
        }
        // down direction
        for (let y2 = y + 1; y2 < 8; y2++) {
            if (!addMove(x, y2)) break;
        }
        // up direction
        for (let y2 = y - 1; y2 >= 0; y2--) {
            if (!addMove(x, y2)) break;
        }

        console.log(moves)
        return moves
    } catch (error) {
        console.error(error);
        return []
    }
}
