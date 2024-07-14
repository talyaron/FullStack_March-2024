
class Product {
    id: number;
    image: string;
    name: string;
    type: string;
    price: number;
    inventory: number;
    quantity: number;

    constructor(image: string, name: string, type: string, price: number, inventory: number, quantity: number = 0) {
        this.image = image;
        this.name = name;
        this.type = type;
        this.price = price;
        this.inventory = inventory;
        this.quantity = quantity;
        this.id = makeId();
    }

    updateInventory(addedQuantity: number) {
        this.inventory += addedQuantity;
    }

    decreaseInventory(quantity: number) {
        if (this.inventory >= quantity) {
            this.inventory -= quantity;
        } else {
            throw new Error("Sorry, product out of stock");
        }
    }

    increaseQuantity(quantity: number) {
        this.quantity += quantity;
    }
}
function makeId(): number {
    return Math.floor(Math.random() * 1000000);
}
function renderCartProduct(product: Product): string {
    return `<div class="cart-product" data-id="${product.id}">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
            <button class="remove-from-cart">Remove from cart</button></div>`;}

function renderCart(cart: Product[], element: HTMLElement) {
    try {
        const html = cart.map(product => renderCartProduct(product)).join('');
        element.innerHTML = html;
        const buttons = element.querySelectorAll('.remove-from-cart');
        buttons.forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = (event.target as HTMLElement).closest('.cart-product')?.getAttribute('data-id');
                if (productId) removeFromCart(Number(productId));
            });
        });

        calcPrice(cart);
    } catch (error) {
        console.error((error as Error).message);
    }
}

function removeFromCart(productId: number) {
    const productIndex = cart.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        const removedProduct = cart.splice(productIndex, 1)[0]; 
        const originalProduct = getStoredProducts().find(p => p.id === productId);
        if (originalProduct) {
            originalProduct.updateInventory(removedProduct.quantity); 
        }

        updateLocalStorage(); 
        const cartContainer = document.getElementById('cart-container');
        if (cartContainer) {
            renderCart(cart, cartContainer); 
        }
    }
}




function calcPrice(cart: Product[]) {
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
    if (totalPriceElement) {
        totalPriceElement.textContent = totalPrice.toString();
    }
}

function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('products', JSON.stringify(products));
}

function getStoredCart(): Product[] {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart).map((product: any) => new Product(product.image, product.name, product.type, product.price, product.inventory, product.quantity)) : [];
}

function getStoredProducts(): Product[] {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts).map((product: any) => new Product(product.image, product.name, product.type, product.price, product.inventory, product.quantity)) : [];
}

const cart = getStoredCart();
const products = getStoredProducts();

document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        renderCart(cart, cartContainer);
    }

    const continueShoppingButton = document.getElementById('continue-shopping');
    if (continueShoppingButton) {
        continueShoppingButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});
