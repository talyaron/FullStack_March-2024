import { Link, Outlet } from "react-router-dom";

const Choice1 = () => {
  return (
    <div className="subPage">
      <h2>grab a stick and stand your ground!</h2>
      <div className="subelement">
        <p>
            you grab the closest stick to you and stand firm.
            if its a crocodile, you probably wont stand a chance...
            you hear the rustling sound coming closer and closer.
            something big is coming twords you!
        </p>
        <div className="kaftorim">
          <Link to="choice4">scream</Link>
          <Link to="choice0">hit it with the stick</Link>
          <Link to="choice0">run</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Choice1;
