import { Cart } from "../models/cartModel";

export function EmptyCart(cart: Cart[]): Cart[] | undefined {
    try {
        cart.emptyCart();
        return [];
    } catch (error) {
        console.error('Failed to empty the cart:', error);
        return undefined;
    }
}