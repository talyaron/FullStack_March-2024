import { Piece } from "../../model/pieces/piecesModel";
import { Position } from "../../model/types/typesModel";
// import { numberToColumn } from "../board/boardView";

export function renderPiece(piece:Piece){
    try {
        const html = `<img class="piece" src="${piece.type.imageUrl}" alt="${piece.type.name}" id="${piece.id}">`;
        // const letter = numberToColumn(piece.position.x)
        // if(!letter) throw new Error("no letter")
        const positionElement:HTMLDivElement|null = document.querySelector(`#pos-${piece.position.y}${piece.position.x}`);

        if(!positionElement) throw new Error("No position element")
        
            positionElement.innerHTML = html

    } catch (error) {
        console.error(error)
    }
}

export function renderAllowedMoves(moves:Position[]){
    try {
        moves.forEach(move => {
            const moveElement:HTMLDivElement|null = document.querySelector(`#pos-${move.y}${move.x}`);
            // console.log(moveElement)
            if(!moveElement) throw new Error("No move element")
            moveElement.appendChild(document.createElement("div")).className = "move";
        })
    } catch (error) {
        console.error(error)
    }
}