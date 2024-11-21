import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
    return (
        <div className="page">
            <h1>Page 2</h1>
            <Link to="/">Go to Page1</Link>
        </div>
    )
}

export default Page2;