import { Product} from '../models/product';
export function renderCart(cart: Product[], container: HTMLElement) {
    container.innerHTML = '';
    cart.forEach(product => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-product');
        cartItemDiv.setAttribute('data-id', product.id.toString());
        cartItemDiv.innerHTML = `<img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Type: ${product.type}</p>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
            <button class="remove-from-cart">Remove from Cart</button>`;
        container.appendChild(cartItemDiv);
    });
}
export function calcPrice(cart: Product[]) {
    const totalPriceElement = document.getElementById('total-price');
    if (!totalPriceElement) return;
    const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    totalPriceElement.textContent = totalPrice.toString();
}
