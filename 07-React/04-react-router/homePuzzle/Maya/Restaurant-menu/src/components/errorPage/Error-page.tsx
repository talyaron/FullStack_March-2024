import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f8f9fa",
        color: "#343a40",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "6rem", margin: "0" }}>404</h1>
      <p style={{ fontSize: "1.5rem", margin: "10px 0 20px" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          fontSize: "1.2rem",
          color: "#fff",
          backgroundColor: "#007BFF",
          padding: "10px 20px",
          textDecoration: "none",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#0056b3";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#007BFF";
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
