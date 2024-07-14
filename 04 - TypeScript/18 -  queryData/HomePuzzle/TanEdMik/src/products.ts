//window.localStorage.clear(); 
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
            throw new Error("Sorry, product ran out of stock");
        }
    }

    increaseQuantity(quantity: number) {
        this.quantity += quantity;
    }
}

function makeId(): number {
    return Math.floor(Math.random() * 1000000);
}
const productArray = [
    new Product("https://www.ikea.com/ca/en/images/products/vattentaet-kettle-stainless-steel-black__0713344_pe729450_s5.jpg?f=s", "Kettle", "electronics", 50, 20),
    new Product("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtySMPd0pbo5jRYrSpvl0iDsaXYdBZTAtqvLD-2cVEImuMj6q4", "Cattle", "Livestock", 500, 5),
    new Product("https://www.cookwithmanali.com/wp-content/uploads/2021/04/Veg-Cutlet-500x500.jpg", "Cutlet", "Food", 5, 15),
    new Product("https://www.ikea.com/ca/en/images/products/sedlig-20-piece-cutlery-set-stainless-steel__0713291_pe729401_s5.jpg", "Cutlery", "Dining", 25, 10)
];
function getStoredProducts(): Product[] {
    const storedProducts = localStorage.getItem('products');
    if (!storedProducts) {
        return productArray
    }
    return JSON.parse(storedProducts).map((product: any) => new Product(product.image, product.name, product.type, product.price, product.inventory, product.quantity));
}

function getStoredCart(): Product[] {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart).map((product: any) => new Product(product.image, product.name, product.type, product.price, product.inventory, product.quantity)) : [];
}
const products: Product[] = getStoredProducts();
const cart: Product[] = getStoredCart();
const root = document.querySelector('#product-container') as HTMLElement;
function renderProduct(product: Product): string {
    return `<div class="product" data-id="${product.id}">
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Available: ${product.inventory}</p>
            <button class="add-to-cart">Add to cart</button>
            <button class="remove-from-products">Remove</button>
        </div>`;
}

function renderProducts(products: Product[], element: HTMLElement | null) {
    if (!element) {
        throw new Error("No root element found.");
    }
    const html = products.map(product => renderProduct(product)).join('');
    element.innerHTML = html;

    element.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.closest('.product')?.getAttribute('data-id');
            if (productId) addToCart(Number(productId));
        });
    });

    element.querySelectorAll('.remove-from-products').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.closest('.product')?.getAttribute('data-id');
            if (productId) removeFromProducts(Number(productId));
        });
    });
}

function addToCart(productId: number) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    try {
        product.decreaseInventory(1);
        const cartItem = cart.find(p => p.id === productId);
        if (cartItem) {
            cartItem.increaseQuantity(1);
        } else {
            const newCartItem = new Product(product.image, product.name, product.type, product.price, product.inventory, 1);
            newCartItem.id = product.id;
            cart.push(newCartItem);
        }
        updateLocalStorage();
        renderProducts(products, root);
    } catch (error: any) {
        if (error instanceof Error) {
            alert(error.message);
        } else {
            console.error(error);
        }
    }
}


function removeFromProducts(productId: number) {
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex === -1) return;

    const product = products[productIndex];
    const cartItemIndex = cart.findIndex(p => p.id === productId);
    if (cartItemIndex !== -1) {
        const cartItem = cart[cartItemIndex];
        product.updateInventory(cartItem.quantity); // Restore inventory
        cart.splice(cartItemIndex, 1); // Remove from cart
    }
    product.quantity = 0; 

    // Find initial product from productArray
    const initialProduct = productArray.find(p => p.id === productId);
    if (initialProduct) {
        product.inventory = initialProduct.inventory; // Reset inventory to initial value
    }

    updateLocalStorage();
    renderProducts(products, root);
}


function goToCart() {
    updateLocalStorage();
    window.location.href = 'cart.html';
}

function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('products', JSON.stringify(products));
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products, root);
    const goToCartButton = document.querySelector('.go-to-cart');
    if (goToCartButton) {
        goToCartButton.addEventListener('click', goToCart);
    }
});
