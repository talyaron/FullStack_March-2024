import { useState, useEffect } from "react";
import "./App.css";
import Card from "./view/components/card/Card";

function App() {
  const [images, setImages] = useState<string[]>([]);
  const colors = ["red", "blue", "green", "yellow", "black", "magenta", "pink", "orange", "brown", "purple"];

  useEffect(() => {
    console.log("Fetching cat images...");
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => response.json())
      .then((data) => {
        const fetchedImages = data.map((item: { url: string }) => item.url);
        setImages(fetchedImages);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <div className="wrapper">
      {images.map((url, index) => (
        <Card
          url={url}
          color={colors[index % colors.length]}
        />
      ))}
    </div>
  );
}

export default App;
