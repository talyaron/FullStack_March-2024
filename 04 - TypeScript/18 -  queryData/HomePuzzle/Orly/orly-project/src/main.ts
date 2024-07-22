import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

import { ProductController } from './Controller/ProductController.ts';
import { CartController } from './Controller/CartController.ts';
import { ProductView } from './View/ProductView.ts';
import { CartView } from './View/CartView.ts';

// Create instances of controllers and views
const productController = new ProductController();
const cartController = new CartController();
const productView = new ProductView();
const cartView = new CartView();

// Function to render the products and cart
function render() {
  const products = productController.getProducts();
  const cartItems = cartController.getCartItems();
  
  // Update the product view
  const productContainer = document.getElementById('product-container');
  if (productContainer) {
    productContainer.innerHTML = productView.render(products);
  }
  
  // Update the cart view
  const cartContainer = document.getElementById('cart-container');
  if (cartContainer) {
    cartContainer.innerHTML = cartView.render(cartItems);
  }
}

// Functions to handle adding and removing items from the cart
(window as any).addToCart = (productId: number) => {
  const product = productController.getProductById(productId);
  if (product) {
    cartController.addToCart(product, 1);
    render();
  }
};

(window as any).removeFromCart = (productId: number) => {
  cartController.removeFromCart(productId);
  render();
};

// Initial render
window.onload = render;


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)