import { useParams, Link, Outlet } from "react-router-dom";

const dishes = {
  appetizers: [
    { id: 1, name: "Spring Rolls" },
    { id: 2, name: "Garlic Bread" },
  ],
  "main course": [
    { id: 3, name: "Steak" },
    { id: 4, name: "Grilled Salmon" },
  ],
  desserts: [
    { id: 5, name: "Cheesecake" },
    { id: 6, name: "Brownie" },
  ],
  drinks: [
    { id: 7, name: "Mojito" },
    { id: 8, name: "Lemonade" },
  ],
};

function DishList() {
  const { category } = useParams();
  console.log(useParams());
  const categoryDishes = dishes[category] || [];

  return (
    <>
    <div className="menu-categories">

      {!category ? <h2>Choose a category</h2> :
      <h2>{category.toUpperCase()}</h2>}
      <ul>
        {categoryDishes.map((dish: any) => (
          <li key={dish.id}>
            <Link to={`${dish.id}`}>{dish.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    <Outlet />
    </>

  );
}

export default DishList;
