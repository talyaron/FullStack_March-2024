import { Link } from "react-router-dom";
import Button from "../view/components/Buttons/buttons";

const Page1 = () => {
  return (
    <div className="page" style={{backgroundColor:"pink"}}>
      <h1>Hello world</h1>
      <Button />
      <Button isBigButton={true} />
      <Link to="/page2">Go to Page2</Link>
    </div>
  );
};

export default Page1;
