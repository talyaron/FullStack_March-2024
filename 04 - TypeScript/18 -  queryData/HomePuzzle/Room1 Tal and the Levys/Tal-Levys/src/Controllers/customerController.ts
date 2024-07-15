//add items to my cart

import { Customer, customers } from "../models/customerModel";
import { items } from "../models/itemsModel";

export function addItemHandler(itemId:string){
    addToCart(itemId,"1c");
}

export function addToCart(itemId: string,customerId:string) {
    try {
        const item = items.find(i => i.id === itemId);
        if (!item || item.quantity <= 0) {
            console.log("Item not found or out of stock.");
            return;
        }
        const customer = customers.find(c => c.id === customerId);
        if(!customer) throw new Error("customer not found");

        customer.myCart.push(item);
        
    
        item.quantity--;
        
    } catch (error) {
        console.error("Couldn't be added to cart");
    }
}

//remove items from my cart
//empty cart
//buy items