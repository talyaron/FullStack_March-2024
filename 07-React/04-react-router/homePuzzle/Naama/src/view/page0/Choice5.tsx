import { Link, Outlet } from "react-router-dom";

const Choice5 = () => {
  return (
    <div className="subPage">
      <h2>ask her questions!</h2>
      <div className="subelement">
        <p>
            you flod her with questions. she stops you "wait wait! too much! too much for my small brain!"
            she shake her head and breath "ok, first im Crocodama, second you asking me who am i? who are you! what are you doing in my property? oh and those potetos are for fries, i love fat food!"
            she says and now its her turn to overwhelm you "you look wierd, what kind of animal are you? are you a hybread? oh shoot! im late! Israel is gonna be mad at me again!"
            she runs twords the house and scream "Israel I brought the potatos dont make me eat salad!!!"
        </p>
        <div className="kaftorim">
          <Link to="choice0">follow her</Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Choice5;
