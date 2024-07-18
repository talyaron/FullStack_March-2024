import {getProducts, getCart, addToCart, removeFromCart } from '../models/storage';
import {renderProducts} from '../views/productView';
const products = getProducts();
const cart = getCart();
const root = document.querySelector('#product-container') as HTMLElement;
function handleAddToCart(productId: number) {
    addToCart(productId);
    renderProducts(products, root);
}

function handleRemoveFromCart(productId: number) {
    removeFromCart(productId);
    renderProducts(products, root);
}
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products, root);
    root.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('add-to-cart')) {
            const productId = target.closest('.product')?.getAttribute('data-id');
            if (productId) handleAddToCart(Number(productId));
        } else if (target.classList.contains('remove-from-products')) {
            const productId = target.closest('.product')?.getAttribute('data-id');
            if (productId) handleRemoveFromCart(Number(productId));
        }
    });
});
