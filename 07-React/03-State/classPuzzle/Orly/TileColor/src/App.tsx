import React from "react";
import Tile from "./components/tile";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Toggle Tile Color</h1>
      <Tile />
    </div>
  );
};

export default App;