import React from "react";
import { Link, Outlet } from "react-router-dom";
import Page from "./Page.scss"

const Page1 = () => {
  return (
    <div className="page">
      <header>
        <h1>Page1</h1>
        <Link to="/page2">Go to Page2</Link>
        <nav className="nav-menu">
          <Link to="home">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </nav>
      </header>
      <main className="content">
        <div className="element">
          <Outlet />
        </div>
      </main>
      <footer>
        <p>© 2024 Maya. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Page1;
