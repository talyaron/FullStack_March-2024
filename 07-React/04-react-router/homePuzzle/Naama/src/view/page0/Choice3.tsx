import { Link, Outlet } from "react-router-dom";

const Choice3 = () => {
  return (
    <div className="subPage">
      <h2>start to make a fishing rod and calmly ignor the sound!</h2>
      <div className="subelement">
        <p>
            you grab a long stick that was lying on the ground.
            you think making a fishing rod is easy, but you forgot you dont have a rope, so you sit at a log near the river.
            someone aproaches you, it is a humanoid crocodile wearing a hoodie and a skirt and holding a big basket full of potatos.
            "wow a human! are you joining us for launch?" she asked and pushed her glasses up.
        </p>
        <div className="kaftorim">
          <Link to="choice0">scream</Link>
          <Link to="choice0">"whats for launch?"</Link>
          <Link to="choice5">ask her questions</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Choice3;
