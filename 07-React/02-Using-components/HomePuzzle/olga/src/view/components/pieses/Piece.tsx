import whitePawn from './../../../assets/images/chess-pieces/whitePawn.png';
import whiteRook from './../../../assets/images/chess-pieces/whiteRook.png';
import whiteKnight from './../../../assets/images/chess-pieces/whiteKnight.png';
import whiteBishop from './../../../assets/images/chess-pieces/whiteBishop.png';
import whiteQueen from './../../../assets/images/chess-pieces/whiteQueen.png';
import whiteKing from './../../../assets/images/chess-pieces/whiteKing.png';
import blackPawn from './../../../assets/images/chess-pieces/blackPawn.png';
import blackRook from './../../../assets/images/chess-pieces/blackRook.png';
import blackKnight from './../../../assets/images/chess-pieces/blackKnight.png';
import blackBishop from './../../../assets/images/chess-pieces/blackBishop.png';
import blackQueen from './../../../assets/images/chess-pieces/blackQueen.png';
import blackKing from './../../../assets/images/chess-pieces/blackKing.png';
import {FC} from 'react';
import './Piece.scss';

type PieceProps = {
  type: 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
  color: 'white' | 'black';
};

const Piece: FC<PieceProps> = ({ type, color }) => {
  const pieceSymbols: Record<string, string | JSX.Element> = {
    pawn: color === 'white' ? <img src={whitePawn} alt="white-pawn" /> : <img src={blackPawn} alt="white-pawn" />,
    rook: color === 'white' ? <img src={whiteRook} alt="white-rook" /> : <img src={blackRook} alt="black-rook" />,
    knight: color === 'white' ? <img src={whiteKnight} alt="white-knight" /> : <img src={blackKnight} alt="black-knight" />,
    bishop: color === 'white' ? <img src={whiteBishop} alt="white-bishop" /> : <img src={blackBishop} alt="black-bishop" />,
    queen: color === 'white' ? <img src={whiteQueen} alt="white-queen" /> : <img src={blackQueen} alt="black-queen" />,
    king: color === 'white' ? <img src={whiteKing} alt="white-king" /> : <img src={blackKing} alt="black-king" />,
  };

  return <span className="chess-piece">{pieceSymbols[type]}</span>;
};

export default Piece;