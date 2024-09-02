export enum ItemCategory {
  Appetizer = "Appetizer",
  Main = "Main",
  Dessert = "Dessert",
  Drink = "Drink"
}

export class Item {
  public id: string;
  public category: ItemCategory;
  public pic: string;
  public name: string;
  public price: number;
  constructor(category: ItemCategory, pic: string, name: string, price: number) {
    this.id = `id${crypto.randomUUID()}`;
    this.category = category;
    this.pic = pic;
    this.name = name;
    this.price = price;
  }
  
}
