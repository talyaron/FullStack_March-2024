import React from "react";
import { Link, Outlet } from "react-router-dom";
import './page2.scss'


const Page2 = () => {
    return (
        <div className="page">
            
            <nav>
                <Link to="element-pasta">Pastas</Link>
                <Link to="element-pizzas">Pizzas</Link>
                <Link to="element-soups">Soups</Link>
            </nav>
            <div className="element">
        <Outlet />
      </div>
        </div>
    );
};

export default Page2;
