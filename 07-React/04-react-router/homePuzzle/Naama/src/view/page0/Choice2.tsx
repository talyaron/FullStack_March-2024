import { Link, Outlet } from "react-router-dom";

const Choice2 = () => {
  return (
    <div className="subPage">
      <h2>run and hide in the house!</h2>
      <div className="subelement">
        <p>
            you run as fast as you can, reaching the house.
            apon entering you realize you disturbed someone watching the tv.
            he is a humanoid white tiger with blue stripes, sitting upside down on the couch in the middle of the room.
            he looks at you and let out a "great..." and return to watch tv.
        </p>
        <div className="kaftorim">
          <Link to="choice0">freeze</Link>
          <Link to="choice0">sit with him and watch tv</Link>
          <Link to="choice0">ask him questions</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Choice2;
