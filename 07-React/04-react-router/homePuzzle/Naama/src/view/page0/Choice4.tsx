import { Link, Outlet } from "react-router-dom";

const Choice4 = () => {
  return (
    <div className="subPage">
      <h2>scream!</h2>
      <div className="subelement">
        <p>
            you scream as loud as you can, to scare the creature.
            but then you here a startled voice, a girly voice.
            the rustling stops, and you hear "you scared me!" from behind the trees.
            then a crocodile standing on two legs aproaches you, she is wearing a hoodie and a skirt.
            "i almost dropped my potatos!" she pouts and lookes at the potatos basket she is holding.
        </p>
        <div className="kaftorim">
          <Link to="choice0">"sorry"</Link>
          <Link to="choice5">ask her questions</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Choice4;
