import { Product } from '../models/product';
import { getStoredCart, getStoredProducts, updateLocalStorage } from '../models/storage';
import { renderCart, calcPrice } from '../views/cartView';

const cart: Product[] = getStoredCart();
const products: Product[] = getStoredProducts();

function removeFromCart(productId: number) {
    const productIndex = cart.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        const removedProduct = cart.splice(productIndex, 1)[0];
        const originalProduct = products.find(p => p.id === productId);
        if (originalProduct) {
            originalProduct.updateInventory(removedProduct.quantity);
        }
        updateLocalStorage(products, cart);
        const cartContainer = document.getElementById('cart-container');
        if (cartContainer) {
            renderCart(cart, cartContainer);

            cartContainer.querySelectorAll('.remove-from-cart').forEach(button => {
                button.addEventListener('click', (event) => {
                    const productId = (event.target as HTMLElement).closest('.cart-product')?.getAttribute('data-id');
                    if (productId) removeFromCart(Number(productId));
                });
            });
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        renderCart(cart, cartContainer);

        cartContainer.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = (event.target as HTMLElement).closest('.cart-product')?.getAttribute('data-id');
                if (productId) removeFromCart(Number(productId));
            });
        });
    }

    const continueShoppingButton = document.getElementById('continue-shopping');
    if (continueShoppingButton) {
        continueShoppingButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    calcPrice(cart);
});
