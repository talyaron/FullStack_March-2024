import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div className="page" style={{backgroundColor:"pink"}}>
      <h1>Page1</h1>
      <Link to="/page2">Go to Page2</Link>
    </div>
  );
};

export default Page1;
