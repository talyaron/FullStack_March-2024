import React from "react";
import { Link, Outlet } from "react-router-dom";

const Page2 = () => {
  return (
    <div className="page">
      <h1>page2</h1>
      <div className="linkim">
        <Link to="/">to main page</Link>
        <Link to="/page1">to page1</Link>
      </div>
      <nav>
        <Link to="">Home</Link>
        <Link to="element-a">About</Link>
        <Link to="element-b">Contact Us</Link>
      </nav>
      <div className="element">
        <Outlet />
      </div>
    </div>
  );
};

export default Page2;
