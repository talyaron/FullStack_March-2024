import {getCart, getProducts, addToCart, removeFromCart} from '../models/storage';
import {renderCart, calcPrice} from '../views/cartView';
import {renderProducts} from '../views/productView';
let cart = getCart();
let products = getProducts();
function confirmOrder() {
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.id);
        if (product) {
            product.updateInventory(-cartItem.quantity); 
            cartItem.quantity = 0;
        }
    });
    cart.length = 0;
    renderProducts(products, document.getElementById('product-container') as HTMLElement); 
    renderCart(cart, document.getElementById('cart-container') as HTMLElement); 
    calcPrice(cart); 
    document.getElementById('cart-view')!.style.display = 'none';
    document.getElementById('thankyou-view')!.style.display = 'block';
}
function goToCart() {
    window.location.href = 'cart.html';
}
function continueShopping() {
    document.getElementById('cart-view')!.style.display = 'none';
    document.getElementById('product-view')!.style.display = 'block';
    renderProducts(products, document.getElementById('product-container') as HTMLElement); // Re-render products
}
function backToProducts() {
    document.getElementById('thankyou-view')!.style.display = 'none';
    document.getElementById('product-view')!.style.display = 'block';
}
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products, document.getElementById('product-container') as HTMLElement);
    renderCart(cart, document.getElementById('cart-container') as HTMLElement);
    calcPrice(cart);
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        cartContainer.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = (event.target as HTMLElement).closest('.cart-product')?.getAttribute('data-id');
                if (productId) {
                    removeFromCart(Number(productId));
                    renderProducts(products, document.getElementById('product-container') as HTMLElement); 
                    renderCart(cart, cartContainer); 
                    calcPrice(cart); 
                }
            });
        });
    }
    document.getElementById('go-to-cart')?.addEventListener('click', goToCart);
    document.getElementById('continue-shopping')?.addEventListener('click', continueShopping);
    document.getElementById('confirm-order')?.addEventListener('click', confirmOrder);
    document.getElementById('back-to-products')?.addEventListener('click', backToProducts);
});
