import { Item } from "./itemsModel";

export class Customer{
    id:string;
    name:string;
    myCart: Item[];
    
    constructor(id:string, name:string){
            this.id = id,
            this.name = name,
            this.myCart = [];
        }
}

export const customers:Customer[] = [
    new Customer("1c","BOB"),
    new Customer("2c","DAVE")
];