import { Product } from '../models/product';
import { getStoredProducts, getStoredCart, updateLocalStorage } from '../models/storage';
import { renderProducts } from '../views/productView';

const products: Product[] = getStoredProducts();
let cart: Product[] = getStoredCart();
const root = document.querySelector('#product-container') as HTMLElement;
function addToCart(productId: number) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    try {
        product.decreaseInventory(1);
        const cartItemIndex = cart.findIndex(p => p.id === productId);
        if (cartItemIndex !== -1) {
            cart[cartItemIndex].increaseQuantity(1);
        } else {
            const newCartItem = new Product(product.image, product.name, product.type, product.price, product.inventory, 1);
            newCartItem.id = product.id;
            cart.push(newCartItem);
        }
        updateLocalStorage(products, cart);
        renderProducts(products, root);
    } catch (error: any) {
        if (error instanceof Error) {
            alert(error.message);
        } else {
            console.error(error);
        }
    }
}
function removeFromProducts(productId: number) {
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex === -1) return;
    const product = products[productIndex];
    const cartItemIndex = cart.findIndex(p => p.id === productId);
    if (cartItemIndex !== -1) {
        const cartItem = cart[cartItemIndex];
        product.updateInventory(cartItem.quantity);
        cart.splice(cartItemIndex, 1);
        cart = [...cart]; 
    }
    product.quantity = 0;
    updateLocalStorage(products, cart);
    renderProducts(products, root);
}

function goToCart() {
    updateLocalStorage(products, cart);
    window.location.href = 'cart.html';
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products, root);
    root.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('add-to-cart')) {
            const productId = target.closest('.product')?.getAttribute('data-id');
            if (productId) addToCart(Number(productId));
        } else if (target.classList.contains('remove-from-products')) {
            const productId = target.closest('.product')?.getAttribute('data-id');
            if (productId) removeFromProducts(Number(productId));
        }});
    const goToCartButton = document.querySelector('.go-to-cart');
    if (goToCartButton) {
        goToCartButton.addEventListener('click', goToCart);
    }
});
