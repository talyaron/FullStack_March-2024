//add items to my cart

import { customers } from "../models/customerModel";
import { items } from "../models/itemsModel";

export function addItemHandler(itemId:string){
    addToCart(itemId, "1c");
}
// the following function moves an item from items to the customer's cart while updating the item's quantity.
export function addToCart(itemId:string, customerId:string) {
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
export function removeFromCart(itemId:string, customerId:string) {
    try {
        const customer = customers.find(c => c.id === customerId);
        if(!customer) throw new Error("customer not found");
        const isInCart = customer.myCart.find(inCart => inCart.id === itemId)
        if (!isInCart) {console.log("Item was not found in customer's cart")}
        const item = items.find(i => i.id === itemId);
        if (!item) {
            console.log("Item not found in Items");
            return;
        }
        const customerCartItem = customer.myCart.findIndex(inCart => inCart.id === itemId)
        if (customerCartItem === -1) {
            console.log("Index of item was not found in customer cart")
            return
        }
        customer.myCart.splice(customerCartItem)
        item.quantity++;
        
    } catch (error) {
        console.error("Couldn't be added to cart");
    }
}
//empty cart
export function EmptyCart(customerId:string) {
    try {
        const customer = customers.find(c => c.id === customerId);
        if(!customer) throw new Error("customer not found");
        customer.myCart.forEach(item =>  { removeFromCart(item.id, customerId)});
    } catch (error) {
        console.error('Failed to empty the cart:', error);
        return undefined;
    }
}

//buy items