import React from 'react';
import { Link } from "react-router-dom";
import './page1.scss';

const Page1 = () => {
    return (
        <div className="page-container">
            <div className="page-content">
                <Link to="/page2" className="menu-link">
                    Menu
                </Link>
            </div>
        </div>
    );
};

export default Page1;