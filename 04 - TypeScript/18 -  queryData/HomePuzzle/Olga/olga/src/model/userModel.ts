import { Item } from "./itemModel";

export class User {
  name: string;
  email: string;
  password: string;
  itemsInCartDict: { [key: string]: number } = {};

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

export const users: User[] = [
  new User("Yos", "yos@yos", "12345"),
  new User("Orly", "orly@orly", "12345"),
  new User("Olga", "olga@olga", "12345"),
];

export function calculateTotalPrice(user: User, items: Item[]): number {
  let totalPrice = 0;
  if (user.itemsInCartDict === undefined || Object.keys(user.itemsInCartDict).length === 0) return 0;
  Object.keys(user.itemsInCartDict).forEach((key) => {
    totalPrice += user.itemsInCartDict[key] * items.find((item) => item.name === key)?.price;
  })

  return totalPrice;
}

export function addItemToCartDict(user: User, item: Item) {
  try {
    if (user.itemsInCartDict !== undefined && user.itemsInCartDict[item.name] !== undefined) {
      user
      if (item.quantity > user.itemsInCartDict[item.name]) {
        user.itemsInCartDict[item.name] = user.itemsInCartDict[item.name] + 1
      }
    } else {
      user.itemsInCartDict = { ...user.itemsInCartDict, [item.name]: 1 };
    }
    
  } catch (error) {
    console.error(error);
    return "";
  }
}