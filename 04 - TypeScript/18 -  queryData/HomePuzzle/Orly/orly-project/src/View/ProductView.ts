import { Product } from "../Model/Product";

export class ProductView {
  render(products: Product[]): string {
    return products.map(product => `
      <div class="product">
      <img src ="${product.imageUrl}" alt="${product.name}"/>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
        <p>Stock: ${product.stock}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `).join('');
  }
}