import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={{ fontSize: "20px", color: "blue" }}>
        Go Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
