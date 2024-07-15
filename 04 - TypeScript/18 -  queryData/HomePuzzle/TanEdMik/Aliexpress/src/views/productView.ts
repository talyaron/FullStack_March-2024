import { Product } from '../models/product';



export function renderProduct(product: Product): string {
    return `<div class="product" data-id="${product.id}">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p>Available: ${product.inventory}</p>
        <button class="add-to-cart">Add to cart</button>
        <button class="remove-from-products">Remove</button>
    </div>`;}

export function renderProducts(products: Product[], element: HTMLElement) {
    const html = products.map(product => renderProduct(product)).join('');
    element.innerHTML = html;
}
