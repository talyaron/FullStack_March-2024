import React from 'react';
import { Link } from 'react-router-dom';

const Page2 = () => {
return (
<div className =  "page" style={{backgroundColor:"yellow"}}>
    <h1>Page2</h1>
    <Link to="/page1"> Go to page1</Link>
</div>
);
};

export default Page2;   