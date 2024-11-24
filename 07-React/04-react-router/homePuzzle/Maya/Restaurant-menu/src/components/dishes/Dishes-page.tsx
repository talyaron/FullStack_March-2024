import React, { useState, useEffect } from "react";

interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
}

const dishesData: Dish[] = [
  {
    id: 1,
    name: "Pasta",
    description: "Creamy Alfredo pasta.",
    image:
      "https://th.bing.com/th/id/R.36d39c682c638a24b1f13ae1f42053ce?rik=%2flTM3o%2bGdEDQeQ&riu=http%3a%2f%2fwww.cookingclassy.com%2fwp-content%2fuploads%2f2012%2f12%2flight-fettucine-alfredo.jpg&ehk=WQR6%2fBo8xpilLZSmYhbE1dEtBDTEaMp%2bqlZWl5IJ0wc%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    name: "Pizza",
    description: "Cheesy Margherita pizza.",
    image:
      "https://th.bing.com/th/id/OIP.oWI38yAzSDcjDvT8xVFlcwHaFb?rs=1&pid=ImgDetMain.wZ9TIXABLaRIq6TLMm3rSwHaHa?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    name: "Burger",
    description: "Juicy beef burger.",
    image:
      "https://www.thereciperebel.com/wp-content/uploads/2020/07/best-burgers-www.thereciperebel.com-1200-13-of-18.jpg",
  },
  {
  id: 4,
  name: "caesar salad",
  description: "refreshing lattice, chesses and crotons salad.",
  image:
    "https://th.bing.com/th?id=OSK.HERObmQdIvafDSRT4xa-gSzpZi-HRjU6d3oOmtluHhZ4MWU&w=312&h=200&c=15&rs=2&o=6&dpr=1.5&pid=SANGAM",
},

];

function DishesPage() {
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setDishes(dishesData);
    }, 1000);
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(192,192,236,1) 35%, rgba(0,212,255,1) 100%)", 
        color: "#343a40",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Our Dishes
      </h2>
      {dishes.map((dish) => (
        <div
          key={dish.id}
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "20px",
            padding: "20px",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.02)";
            e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
          }}
        >
          <img
            src={dish.image}
            alt={dish.name}
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "8px",
              marginRight: "20px",
              objectFit: "cover",
            }}
          />
          <div>
            <h3 style={{ margin: "0 0 10px 0", color: "#007BFF" }}>
              {dish.name}
            </h3>
            <p style={{ margin: 0, color: "#555" }}>{dish.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DishesPage;