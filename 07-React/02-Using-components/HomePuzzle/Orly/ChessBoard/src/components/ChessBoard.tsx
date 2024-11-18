import React, { useState } from "react";
import Tile from "./Tile";

interface SelectedTile {
  row: number | null;
  col: number | null;
}

const Chessboard: React.FC = () => {
  const boardSize = 8;
  const [selectedTile, setSelectedTile] = useState<SelectedTile>({
    row: null,
    col: null,
  });

  // Handle tile click
  const handleTileClick = (row: number, col: number) => {
    setSelectedTile({ row, col });
  };

  const board = [];
  for (let row = 0; row < boardSize; row++) {
    const rowTiles = [];
    for (let col = 0; col < boardSize; col++) {
      const isBlack = (row + col) % 2 === 1;
      const color = isBlack ? "black" : "white";
      const isSelected = selectedTile.row === row && selectedTile.col === col;

      rowTiles.push(
        <Tile
          key={`${row}-${col}`}
          color={color}
          selected={isSelected}
          onClick={() => handleTileClick(row, col)}
        />
      );
    }
    board.push(
      <div className="row" key={row}>
        {rowTiles}
      </div>
    );
  }

  return <div className="chessboard">{board}</div>;
};

export default Chessboard;