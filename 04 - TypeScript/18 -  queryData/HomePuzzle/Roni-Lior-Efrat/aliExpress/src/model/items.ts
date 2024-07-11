export class Item {

  id: string = crypto.randomUUID();
  name: string;
  price: number;
  category: string;
  quantity: number;

  constructor(name: string, price: number, category: string, quantity: number) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.quantity = quantity;
  }
}

// export const items: Item =  new Item("Titanic",100,"horror",100000);
