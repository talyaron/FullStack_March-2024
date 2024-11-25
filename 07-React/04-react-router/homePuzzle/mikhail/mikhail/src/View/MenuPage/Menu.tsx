import React, { useState, useEffect } from "react";
import SidePanel from "../Components/SidePanel/SidePanel";
import FoodCard from "../Components/FoodCards/FoodCard";
import "./Menu.scss";

const Menu: React.FC = () => {
    const [category, setCategory] = useState<"breakfast" | "lunch" | "dinner">("breakfast");
    const [foodImage, setFoodImage] = useState<string>("");
  
    // Fetch an image from the Foodish API when the category changes
    useEffect(() => {
      const fetchFoodImage = async () => {
        try {
          const response = await fetch("https://foodish-api.com/api/");
          const data = await response.json();
          setFoodImage(data.image); // Update the food image with the URL
        } catch (error) {
          console.error("Error fetching food image:", error);
          setFoodImage(""); // Handle error by setting an empty image
        }
      };
  
      fetchFoodImage();
    }, [category]); // Run this effect whenever the category changes
  
    return (
      <div className="menuContainer">
        {/* Side Panel to select categories */}
        <SidePanel setCategory={setCategory} />
  
        {/* Food Panel */}
        <div className="foodPanel">
          <FoodCard image={foodImage} />
        </div>
      </div>
    );
  };
  
  export default Menu;
