import React from "react";
import { Link, Outlet } from "react-router-dom";

const Page2 = () => {
    return (
        <div className="page">
            <h1>Page 2</h1>
            <Link to="/">Go to Page1</Link>
            <nav>
                <Link to="About">About</Link>
                <Link to="ContactUs">ContactUs</Link>
                <Link to="Home">Home</Link>
            </nav>
            <div className="element">
                <Outlet />
        </div>
        </div>
    );
};

export default Page2;