import { useState, useEffect } from "react";
import "./App.css";
import Card from "./card/Card";

function App() {
  const [cats, setCats] = useState<{ url: string }[]>([]);
  const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setCats(data);
      })
      .catch((error) => console.error("Error fetching cat images:", error));
  }, []);

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="app">
      {cats.map((cat, index) => (
        <Card key={index} url={cat.url} color={getRandomColor()} />
      ))}
    </div>
  );
}

export default App;