import { FC } from "react";
import "./Tile.scss";
import Piece from "../pieses/Piece";

interface TileProps {
  black: boolean;
  piece?: {
    type: "pawn" | "rook" | "knight" | "bishop" | "queen" | "king";
    color: "white" | "black";
  };
  selected: boolean;
  onClick: () => void;
}

const Tile: FC<TileProps> = ({ black, selected, onClick, piece }) => {
  const tileClass = `tile ${black ? "black" : "white"} ${
    selected ? "selected" : ""
  }`;

  if (!piece) {
    return <div className={tileClass} onClick={onClick} />;
  } else {
    return (
      <div className={tileClass} onClick={onClick}>
        {piece && <Piece type={piece.type} color={piece.color} />}
      </div>
      );
  }
  
};

export default Tile;
