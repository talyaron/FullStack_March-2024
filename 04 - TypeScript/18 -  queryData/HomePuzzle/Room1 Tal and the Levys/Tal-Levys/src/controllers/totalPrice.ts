// total price of array(?) of items, for each item double item.price by item.quantity  *only items and the quantity that was moved to the cart.

class CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;

  constructor(id: string, name: string, price: number, quantity: number) {
    (this.id = id), (this.name = name), (this.price = price);
    this.quantity = quantity;
  }
}

const userCart: CartItem[] = [
  new CartItem("1", "bag", 150, 5),
  new CartItem("2", "bag2", 30, 10),
  new CartItem("3", "bag3", 65, 7),
  new CartItem("4", "bag4", 50, 2),
  new CartItem("5", "bag5", 100, 6),
];

console.log(userCart);

function getTotalPrice(userCart: CartItem[]) {
  let sum = 0;
  try {
    userCart.forEach((CartItem) => {
      sum += CartItem.quantity * CartItem.price;
    });
    return sum;
  } catch (error) {
    console.error(error);
    return 0;
  }
}
console.log(getTotalPrice(userCart));


