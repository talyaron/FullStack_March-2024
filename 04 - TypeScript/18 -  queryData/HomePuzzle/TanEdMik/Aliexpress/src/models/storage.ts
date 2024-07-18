import {Product} from '../models/product';
const productArray = [
    new Product("https://www.ikea.com/ca/en/images/products/vattentaet-kettle-stainless-steel-black__0713344_pe729450_s5.jpg?f=s", "Kettle", "electronics", 50, 20),
    new Product("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtySMPd0pbo5jRYrSpvl0iDsaXYdBZTAtqvLD-2cVEImuMj6q4", "Cattle", "Livestock", 500, 5),
    new Product("https://www.cookwithmanali.com/wp-content/uploads/2021/04/Veg-Cutlet-500x500.jpg", "Cutlet", "Food", 5, 15),
    new Product("https://www.ikea.com/ca/en/images/products/sedlig-20-piece-cutlery-set-stainless-steel__0713291_pe729401_s5.jpg", "Cutlery", "Dining", 25, 10)];
let products: Product[] = [...productArray];
let cart: Product[] = [];
export function getProducts(): Product[] {
    return products;
}
export function getCart(): Product[] {
    return cart;
}
export function addToCart(productId: number): void {
    const product = products.find(p => p.id === productId);
    if(!product) return;
    product.decreaseInventory(1);
    const cartItemIndex = cart.findIndex(p => p.id === productId);
    if (cartItemIndex !== -1) {
        cart[cartItemIndex].increaseQuantity(1);
    } else {
        const newCartItem = new Product(product.image, product.name, product.type, product.price, product.inventory, 1);
        newCartItem.id = product.id;
        cart.push(newCartItem);
    }
}
export function removeFromCart(productId: number): void {
    const productIndex = cart.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        const removedProduct = cart.splice(productIndex, 1)[0];
        const originalProduct = products.find(p => p.id === productId);
        if (originalProduct) {
            originalProduct.updateInventory(removedProduct.quantity); 
            originalProduct.quantity = 0; 
        }
    }
}
