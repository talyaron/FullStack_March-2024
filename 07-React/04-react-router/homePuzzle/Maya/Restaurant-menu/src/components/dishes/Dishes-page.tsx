import React, { useState, useEffect } from "react";

interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
}

const dishesData: Dish[] = [
  { id: 1, name: "Pasta", description: "Creamy Alfredo pasta.", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Pizza", description: "Cheesy Margherita pizza.", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Burger", description: "Juicy beef burger.", image: "https://via.placeholder.com/150" },
];

function DishesPage() {
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setDishes(dishesData);
    }, 1000);
  }, []);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <div style={{ flex: 1, paddingRight: "20px" }}>
        <h2>Our Dishes</h2>
        {dishes.map((dish) => (
          <div key={dish.id} style={{ marginBottom: "20px" }}>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        {dishes.map((dish) => (
          <div key={dish.id} style={{ marginBottom: "20px" }}>
            <img src={dish.image} alt={dish.name} style={{ width: "100%", borderRadius: "8px" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DishesPage;
