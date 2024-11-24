import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to Our Restaurant</h1>
      <Link to="/dishes">
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          View Our Menu
        </button>
      </Link>
    </div>
  );
}

export default App;
