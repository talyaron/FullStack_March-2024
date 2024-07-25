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
        const pieceX = x;
        const pieceY = y;
        function addMove(a: number, b: number) {
            
            if (a >= 0 && a < 8 && b >= 0 && b < 8) {
                const square = document.querySelector(`#pos-${b}${a}`);

                if (!square) throw new Error("no square")
                if (!square.innerHTML || !square.children[0].classList.contains(piece!.color)) {
                    const position = new Position(a, b)
                    moves.push(position);
                    return true};
            //         if (board[x][y]) return true; // stop if there's a piece
                } else {
                    return false; // stop if it's a piece of the same color
                }
            // }
            // return false;
        }
    // }

        for (let moveX = pieceX + 1; moveX < 8; moveX++) {
            if (!addMove(moveX, pieceY)) break;
        }
        // left direction
        for (let moveX = pieceX - 1; moveX >= 0; moveX--) {
            if (!addMove(moveX, pieceY)) break;
        }
        // down direction
        for (let moveY = pieceY + 1; moveY < 8; moveY++) {
            if (!addMove(pieceX, moveY)) break;
        }
        // up direction
        for (let moveY = pieceY - 1; moveY >= 0; moveY--) {
            if (!addMove(pieceX, moveY)) break;
        }

        return moves
    } catch (error) {
        console.error(error);
        return []
    }
}
