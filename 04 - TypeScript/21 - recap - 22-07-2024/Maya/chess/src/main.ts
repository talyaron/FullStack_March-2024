import './View/styels/global.scss';
import { renderBoard } from './View/board/boardView.ts'
import { pieces } from './Model/Pieces/piecesModel.ts';
import { renderPiece } from './View/piece/pieceView.ts';

const app = document.querySelector<HTMLDivElement>('#app')


if (app) {
  renderBoard(app);
 

  pieces.forEach(piece => {
    renderPiece(piece)
  })
} 
