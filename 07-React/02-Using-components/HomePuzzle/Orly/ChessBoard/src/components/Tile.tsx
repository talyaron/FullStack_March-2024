import React from "react";


interface TileProps {
  color: "black" | "white";
  selected: boolean;
  onClick: () => void;
}

const Tile: React.FC<TileProps> = ({ color, selected, onClick }) => {
  return (
    <div
      className={`tile ${color} ${selected ? "selected" : ""}`}
      onClick={onClick}
    ></div>
  );
};

export default Tile;