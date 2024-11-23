import { useParams } from "react-router-dom";

const dishesInfo = {
  1: { name: "Spring Rolls", description: "Crispy rolls filled with vegetables.", image: "https://saltedmint.com/wp-content/uploads/2024/01/Vegetable-Spring-Rolls-4.jpg" },
  2: { name: "Garlic Bread", description: "Toasted bread with garlic butter.", image: "https://www.budgetbytes.com/wp-content/uploads/2023/08/Garlic-Bread-close.jpg" },
  3: { name: "Steak", description: "Juicy steak grilled to perfection.", image: "https://www.foodiefit.ca/wp-content/uploads/2018/12/grilled-top-sirloin-cup-rump-beef-meat-steak-marble-board-black-background-top-view.jpg" },
  4: { name: "Grilled Salmon", description: "Salmon with a lemon butter sauce.", image: "https://www.pccmarkets.com/wp-content/uploads/2017/08/pcc-rosemary-grilled-salmon-flo.jpg" },
  5: { name: "Cheesecake", description: "Creamy cheesecake with a graham cracker crust.", image: "https://i.ytimg.com/vi/uP7cKoOly0k/maxresdefault.jpg" },
  6: { name: "Brownie", description: "Rich chocolate brownie.", image: "https://images.cookforyourlife.org/wp-content/uploads/2020/06/Dark-Chocolate-Brownies-shutterstock_112430981.jpg" },
  7: { name: "Mojito", description: "Refreshing mint and lime cocktail.", image: "https://cdn.jwplayer.com/v2/media/KAk1mmjv/thumbnails/FBBABMsB.jpg" },
  8: { name: "Lemonade", description: "Cool and tangy lemonade.", image: "https://www.seriouseats.com/thmb/3vzxJxXSrcUZVZ7zKEPxDTMXtzE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240513-SpicyLemonades-AmandaSuarez-31-2f434718e7f844f698ba68ba49e71614.jpg" },
};

function DishCard() {
  const { dishId } = useParams();
  console.log(useParams(), 'DishCard', dishId);
  const dish = dishesInfo[dishId];
  console.log(dish);

  if (!dish) {
    return <p>Select a dish to view details.</p>;
  }

  return (
    <div className="item">
      <h2>{dish.name.toUpperCase()}</h2>
      <img src={dish.image} alt={dish.name}  />
      <p>{dish.description}</p>
    </div>
  );
}

export default DishCard;
