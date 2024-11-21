import React, { useState, useEffect } from "react";
import Card from "./card";
import "./FoodList.scss";

const FoodList: React.FC = () => {
  const [foodImages, setFoodImages] = useState<string[]>([]);

  useEffect(() => {
    fetchFoodImages();
  }, []);

  const fetchFoodImages = async () => {
    try {
      const promises = Array.from({ length: 7 }, async () => {
        const response = await fetch("https://foodish-api.com/api/");
        const data = await response.json();
        return data.image;
      });

      const images = await Promise.all(promises);
      setFoodImages(images);
    } catch (error) {
      console.error("Error fetching food images:", error);
    }
  };

  const refreshFoodImage = async (index: number) => {
    try {
      const response = await fetch("https://foodish-api.com/api/");
      const data = await response.json();
      const newImages = [...foodImages];
      newImages[index] = data.image;
      setFoodImages(newImages);
    } catch (error) {
      console.error("Error refreshing food image:", error);
    }
  };

  return (
    <div className="food-list">
      <h2>Explore Delicious Foods</h2>
      <div className="card-container">
        {foodImages.map((image, index) => (
          <Card
            key={index}
            title={`Food ${index + 1}`}
            imageUrl={image}
            description="Click refresh to load a new image."
            onRefresh={() => refreshFoodImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
