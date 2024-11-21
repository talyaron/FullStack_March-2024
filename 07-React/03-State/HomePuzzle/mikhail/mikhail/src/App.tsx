import { useState, useEffect } from "react";
import "./App.scss";
import CardComponent from "./components/CardComponent";

function App() {
  const [cards, setCards] = useState<{ id: string; url: string }[]>([]);
  const [newCardUrl, setNewCardUrl] = useState<string | null>(null);


  useEffect(() => {
    if (newCardUrl === null) {
      fetch("https://api.thecatapi.com/v1/images/search")
        .then((response) => response.json())
        .then((data) => {
          setNewCardUrl(data[0].url); 
        })
        .catch((error) => console.error("Error fetching cat image:", error));
    }
  }, [newCardUrl]);

  const handleAddCard = () => {
    if (newCardUrl) {
      const newCard = {
        id: crypto.randomUUID(), 
        url: newCardUrl,
      };
      setCards((prevCards) => [...prevCards, newCard]);
      setNewCardUrl(null); 
    }
  };

  
  const handleClose = (id: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  };

  const handleChange = (id: string) => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => {
        const newUrl = data[0].url;
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === id ? { ...card, url: newUrl } : card
          )
        );
      })
      .catch((error) => console.error("Error fetching new cat image:", error));
  };

  return (
    <div className="app">
      <h1>Random Cat Cards</h1>
      <button onClick={handleAddCard}>Add Card</button>
      <div className="card-container">
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            url={card.url}
            onClose={() => handleClose(card.id)}
            onChange={() => handleChange(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
