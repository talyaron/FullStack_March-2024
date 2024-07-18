import { Item } from "../model/itemModel";

export function addToCart(item: Item) {
    try {

    } catch (error) {
        console.error(error);
        return;
    }
}

// controllers/cartCont.ts
//import { CartItem, UserCart } from '../model/userModel';
//import { Product } from '../model/ItemModel';

//let cart: UserCart = { items: [] };

//export const addToCart = (productId: string): void => {
//const product = getProductById(productId);
  //if (product) {
    //const existingItem = cart.items.find(item => item.id === product.id);
    //if (existingItem) {
    //existingItem.quantity++;
    //} else {
    //cart.items.push({ ...product, quantity: 1 });
    //}
//}
//};

//export const removeFromCart = (productId: string): void => {
//cart.items = cart.items.filter(item => item.id !== productId);
//};

//export const getTotalPrice = (): number => {
//return cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
//};

//export const getCartItems = (): CartItem[] => {
//return cart.items;
//};

//export const clearCart = (): void => {
//cart = { items: [] };
//};