import { Product } from '../models/product';

export function renderCartProduct(product: Product): string {
    return `<div class="cart-product" data-id="${product.id}">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>Quantity: ${product.quantity}</p>
        <button class="remove-from-cart">Remove from cart</button>
    </div>`;}

export function renderCart(cart: Product[], element: HTMLElement) {
    const html = cart.map(product => renderCartProduct(product)).join('');
    element.innerHTML = html;
}
export function calcPrice(cart: Product[]) {
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    if (totalPriceElement) {
        totalPriceElement.textContent = totalPrice.toString();
    }
}
