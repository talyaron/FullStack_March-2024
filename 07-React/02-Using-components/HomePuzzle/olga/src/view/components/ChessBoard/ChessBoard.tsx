import {FC} from 'react';
import Tile from './../Tile/Tile';
import './ChessBoard.scss';

const ChessBoard: FC = () => {
  const board = [];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const isBlack = (row + col) % 2 === 1;
      board.push(<Tile black={isBlack} />);
    }
  }

  return <div className="chessboard">{board}</div>;
};

export default ChessBoard;
