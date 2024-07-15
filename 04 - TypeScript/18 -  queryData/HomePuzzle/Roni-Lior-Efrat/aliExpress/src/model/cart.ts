import {Item} from '../model/items'

export class Cart{
    id:string = crypto.randomUUID();
    itemId:string[] = [];
    // totalPrice:number = 0;
    charge:number = 0;
    constructor(charge:number){
        this.charge = charge;
    }

     addItemToCart(item:Item[]){
        this.itemId.push(item[0].id);
        this.charge+= item[0].price;
    }
}

export const cart:Cart[] = [new Cart(0)];

