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

export function Registration(): string {
  const html = `
  <dialog id="dialog">
    <button id="close" style="cursor:pointer; padding: 5px 10px; border-radius: 50%;">X</button>
    <form method="dialog" id="form1">
            <h2>Registr / Login</h2>
              <p>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />
              </p>
              <p>
                <label for="password">Password</label>
                <input type="password" id="password" name="password" autocomplete="current-password" required />
              </p>
              <p>
                <button type="submit" id="closeDialog">Send</button>
              </p>
            </form>
          </dialog>
`;
  return html;
}

export function checkLogin() {
  const formElement = document.querySelector("#form1") as HTMLFormElement;
  let currentCustomer: User

  const checkForm = (): User => {
    const formData = new FormData(formElement);
    const email = formData.get("email");
    const password = formData.get("password");
    const customer = users.find((customer) => customer.email == email);
    if (customer && customer.password == password) {
      currentCustomer = customer;
      console.log(typeof currentCustomer);
    }
    console.log(typeof currentCustomer);
    return currentCustomer;
    
  }
  formElement.addEventListener("submit", () => checkForm())
  // checkForm()
}