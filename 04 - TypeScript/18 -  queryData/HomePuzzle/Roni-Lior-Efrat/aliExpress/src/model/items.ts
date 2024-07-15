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

  reduceQuantity(){
    this.quantity--;
  }
  addQuantity(){
    this.quantity++;
  }

}

// export const items: Item =  new Item("Titanic",100,"horror",100000);
export const items: Item[] = 
[ 
    new Item("Item 1",100,"horror",1),
    new Item("Item 2",30,"horror",3),
    new Item("Item 3",200,"horror",10),
    new Item("Item 1",1000,"horror",5)
];

