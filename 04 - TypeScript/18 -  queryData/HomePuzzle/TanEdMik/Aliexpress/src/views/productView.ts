import {Product} from '../models/product';
export function renderProducts(products: Product[], container: HTMLElement) {
    container.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.setAttribute('data-id', product.id.toString());
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Type: ${product.type}</p>
            <p>Price: $${product.price}</p>
            <p>Available: ${product.inventory}</p>
            <button class="add-to-cart">Add to Cart</button>
            <button class="remove-from-products">Remove</button>`;
        container.appendChild(productDiv);
    });
}
