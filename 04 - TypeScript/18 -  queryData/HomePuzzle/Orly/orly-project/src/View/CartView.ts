import { CartItem } from "../Model/CartItem";

export class CartView {
    render(cartItems: CartItem[]): string {
      return cartItems.map(item => `
        <div class="cart-item">
          <img src="${item.product.imageUrl}" alt="${item.product.name}" />
          <h2>${item.product.name}</h2>
          <p>Quantity: ${item.quantity}</p>
          <p>Total: $${item.product.price * item.quantity}</p>
          <button onclick="removeFromCart(${item.product.id})">Remove</button>
        </div>
      `).join('');
    }
  }