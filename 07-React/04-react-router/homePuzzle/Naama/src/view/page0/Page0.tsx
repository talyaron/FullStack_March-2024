import { Link, Outlet } from "react-router-dom";

const Page0 = () => {
  return (
    <div className="page">
      <h1>Croco Adventure</h1>
      <div className="element">
        <p>
            you are waking up in a swamp, with no memory of how you got here.
            You see a house, trees, and a river with no end.
            suddenly, you hear a rustling sound coming from the trees.
        </p>
        <div className="kaftorim">
          <Link to="choice1">grab a stick and stand your ground</Link>
          <Link to="choice2">run and hide in the house</Link>
          <Link to="choice3">start to make a fishing rod and calmly ignor the sound</Link>
        </div>
        <Outlet />
      </div>
      <p className="smol">all rights are mine (Naama Levi)</p>
    </div>
  );
};

export default Page0;
