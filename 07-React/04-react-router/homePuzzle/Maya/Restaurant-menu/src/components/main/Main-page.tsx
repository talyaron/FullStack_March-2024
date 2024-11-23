import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Restaurant Name</h1>
      <p>Working Hours: 9:00 AM - 10:00 PM</p>
      <p>Options: Dine-In, Takeaway</p>
      <Link to="/dishes" style={{ fontSize: "20px", color: "blue" }}>
        View Our Menu
      </Link>
    </div>
  );
}

export default MainPage;
