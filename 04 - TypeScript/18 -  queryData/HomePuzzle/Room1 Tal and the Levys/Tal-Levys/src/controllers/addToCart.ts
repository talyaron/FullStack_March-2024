import { cart } from "../models/cartModel";
import { Cart } from "../models/cartModel";
import { items } from "../models/itemsModel"

export function addToCart(itemId: string) {
    try {
        const item = items.find(i => i.id === itemId);
        if (!item || item.quantity <= 0) {
            console.log("Item not found or out of stock.");
            return;
        }
    
        const cartItem = cart.find(c => c.id === itemId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push(new Cart(item.id, item.name, item.price, 1, item.img));
        }
    
        item.quantity -= 1;
        
    } catch (error) {
        console.error("Couldn't be added to cart");
    }
}