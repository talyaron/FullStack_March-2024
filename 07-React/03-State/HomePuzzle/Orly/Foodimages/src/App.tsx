import React from "react";
import "./App.css";
import FoodList from "./view/components/FoodList";


const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Food Image Gallery</h1>
      </header>
      <main>
        <FoodList /> 
      </main>
    </div>
  );
};

export default App;