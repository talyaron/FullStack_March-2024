import React from "react";
import { Link, Outlet } from "react-router-dom";


const Page2 = () => {
    return (
        <div className="page">
            <p>Page2</p>
            <Link to="/">Go to Page1</Link>
            <nav>
                <Link to="element-home"></Link>
                <Link to="element-about"></Link>
                <Link to="element-contents"></Link>
            </nav>
            <div className="element">
        <Outlet />
      </div>
        </div>
    );
};

export default Page2;
