import noPicture from "../assets/no-picture.png";
import fs from 'fs';
import myData from '../DB/itemsCatalog.json';

export class Item {
    id: string = 'b' + crypto.randomUUID()
    name: string
    description: string
    price: number
    quantity: number
    img?: string

    constructor(name: string, description: string, price: number, quantity: number, img?: string) {
        this.name = name

        this.description = description
        this.price = price
        this.quantity = quantity
        this.img = img || noPicture
    }
}

export const items: Item[] = [
    new Item('Laptop', 'Laptop', 3000, 2, 'https://c-it.co.il/wp-content/uploads/2021/05/apple-macbook-pro-13-m1-C-IT.jpg'),
    new Item('Phone', 'Phone', 2000, 1, 'https://www.istore.co.za/media/catalog/product/cache/4ebc814e413626645aa42e369230a31f/i/p/iphone_14_blue-5_3.jpg'),
    new Item('Tablet', 'Tablet', 1000, 3, 'https://cdata.b-cdn.net/images/thumbs/0010817_109inch-ipad-air-wi-fi-256gb_600.jpeg')
]

// let myData = fs.readFileSync('./itemsCatalog.json');
// let itemsJSON = JSON.parse(myData);
// itemsJSON.push(items);
// console.log(items);
// let data = JSON.stringify(itemsJSON);
// console.log(data);
// fs.writeFileSync('./itemsCatalog.json', data);