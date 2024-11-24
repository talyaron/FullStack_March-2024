import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(192,192,236,1) 35%, rgba(0,212,255,1) 100%)", 
        color: "#343a40",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>Our Restaurant</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "5px" }}>
        <strong>Working Hours:</strong> 9:00 AM - 10:00 PM
      </p>
      <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
        <strong>Options:</strong> Dine-In, Takeaway
      </p>
      <Link to="/dishes">
        <button
          style={{
            padding: "15px 30px",
            fontSize: "1rem",
            color: "#fff",
            backgroundColor: "#007BFF",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
          }}
        >
          View Our Menu
        </button>
      </Link>
    </div>
  );
}

export default MainPage;
