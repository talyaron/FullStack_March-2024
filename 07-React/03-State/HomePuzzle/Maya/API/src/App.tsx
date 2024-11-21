import { useState, useEffect } from "react";
import Card from "./components/cards/Card";
import "./App.css";

function App() {
  const [food, setFood] = useState<{ url: string }>({ url: "" });
  
  useEffect(() => {
    fetch("https://foodish-api.com/api/")
      .then((response) => response.json())
      .then((data) => {
        setFood({ url: data.image });
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <div className="app">
        <h1>Food Selection</h1> 
      {food.url ? (
        <Card url={food.url} />
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
}

export default App;
