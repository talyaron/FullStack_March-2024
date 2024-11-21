import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div className="page">
      <p>Page2</p>
      <Link to="/">Go to Page1</Link>
    </div>
  );
};

export default Page2;
