import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MorningMenu from "./view/components/MorningMenu";
import BrunchMenu from "./view/components/BrunchMenu";
import DinnerMenu from "./view/components/DinnerMenu";
import "./App.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div>
       
          <header style={{ backgroundColor: "purple", padding: "20px", textAlign: "center" }}>
          <h1 style={{ color: "#ffffff", margin: "0", fontSize: "4rem" }}>The TastyFood Spot</h1>
        </header>

        {/* Navigation Bar */}
        <nav style={{ display: "flex", gap: "20px", margin: "20px" }}>
          <Link to="/morning" style={{ textDecoration: "none" }}>Morning Menu</Link>
          <Link to="/brunch" style={{ textDecoration: "none" }}>Brunch Menu</Link>
          <Link to="/dinner" style={{ textDecoration: "none" }}>Dinner Menu</Link>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/morning" element={<MorningMenu />} />
          <Route path="/brunch" element={<BrunchMenu />} />
          <Route path="/dinner" element={<DinnerMenu />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



