import {Product} from './models/product';
import {User } from './models/user';
import {renderProducts} from './views/productView';
import {renderCart, calcPrice} from './views/cartView';
const productArray = [
    new Product("https://www.ikea.com/ca/en/images/products/vattentaet-kettle-stainless-steel-black__0713344_pe729450_s5.jpg?f=s", "Kettle", "electronics", 50, 20),
    new Product("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtySMPd0pbo5jRYrSpvl0iDsaXYdBZTAtqvLD-2cVEImuMj6q4", "Cattle", "Livestock", 500, 5),
    new Product("https://www.cookwithmanali.com/wp-content/uploads/2021/04/Veg-Cutlet-500x500.jpg", "Cutlet", "Food", 5, 15),
    new Product("https://www.ikea.com/ca/en/images/products/sedlig-20-piece-cutlery-set-stainless-steel__0713291_pe729401_s5.jpg", "Cutlery", "Dining", 25, 10)
];
const initialProductInventory = productArray.map(product =>
    new Product(product.image, product.name, product.type, product.price, product.inventory, product.quantity)
);
const users: User[] = [
    new User('Eden', initialProductInventory),
    new User('Michael', initialProductInventory),
    new User('Tanya', initialProductInventory)
];
let currentUser = users[0];
const userSelect = document.getElementById('user-select') as HTMLSelectElement;
const productContainer = document.getElementById('product-container') as HTMLElement;
const cartContainer = document.getElementById('cart-container') as HTMLElement;
function updateUserSelection() {
    userSelect.innerHTML = '';
    users.forEach((user, index) => {
        const option = document.createElement('option');
        option.value = index.toString();
        option.textContent = user.name;
        userSelect.appendChild(option);
    });
}
function switchUser(index: number) {
    currentUser = users[index];
    renderProducts(currentUser.products, productContainer);
    renderCart(currentUser.cart, cartContainer);
    calcPrice(currentUser.cart);
}
function addToCart(productId: number) {
    const product = currentUser.products.find(p => p.id === productId);
    if (!product) return;
    try {
        product.decreaseInventory(1);
        const cartItemIndex = currentUser.cart.findIndex(p => p.id === productId);
        if (cartItemIndex !== -1) {
            currentUser.cart[cartItemIndex].increaseQuantity(1);
        } else {
            const newCartItem = new Product(product.image, product.name, product.type, product.price, product.inventory, 1);
            newCartItem.id = product.id;
            currentUser.cart.push(newCartItem);
        }
        renderProducts(currentUser.products, productContainer);
    } catch (error: any) {
        if (error instanceof Error) {
            alert(error.message);
        } else {
            console.error(error);
        }
    }
}
function removeFromProducts(productId: number) {
    const productIndex = currentUser.products.findIndex(p => p.id === productId);
    if (productIndex === -1) return;
    const product = currentUser.products[productIndex];
    const cartItemIndex = currentUser.cart.findIndex(p => p.id === productId);
    if (cartItemIndex !== -1) {
        const cartItem = currentUser.cart[cartItemIndex];
        product.updateInventory(cartItem.quantity);
        currentUser.cart.splice(cartItemIndex, 1);
    }
    product.quantity = 0;
    renderProducts(currentUser.products, productContainer);
}
function removeFromCart(productId: number) {
    const productIndex = currentUser.cart.findIndex(p => p.id === productId);
    if (productIndex !== -1) {
        const removedProduct = currentUser.cart.splice(productIndex, 1)[0];
        const originalProduct = currentUser.products.find(p => p.id === productId);
        if (originalProduct) {
            const initialProduct = initialProductInventory.find(p => p.id === productId);
            if (initialProduct) {
                originalProduct.inventory = initialProduct.inventory;
            }
        }
        renderCart(currentUser.cart, cartContainer);
        renderProducts(currentUser.products, productContainer);
        calcPrice(currentUser.cart);
    }
}
function updateInitialInventory() {
    currentUser.cart.forEach(cartItem => {
        const initialProduct = initialProductInventory.find(p => p.id === cartItem.id);
        if (initialProduct) {
            initialProduct.inventory -= cartItem.quantity;
        }
    });
}
function showView(viewId: string) {
    const views = ['product-view', 'cart-view', 'thankyou-view'];
    views.forEach(view => {
        const element = document.getElementById(view);
        if (element) {
            element.style.display = view === viewId ? 'block' : 'none';
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    updateUserSelection();
    switchUser(0);
    userSelect.addEventListener('change', () => {
        const selectedIndex = userSelect.selectedIndex;
        switchUser(selectedIndex);
    });
    productContainer.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('add-to-cart')) {
            const productId = target.closest('.product')?.getAttribute('data-id');
            if (productId) addToCart(Number(productId));
        } else if (target.classList.contains('remove-from-products')) {
            const productId = target.closest('.product')?.getAttribute('data-id');
            if (productId) removeFromProducts(Number(productId));
        }
    });

    cartContainer.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target.classList.contains('remove-from-cart')) {
            const productId = target.closest('.cart-product')?.getAttribute('data-id');
            if (productId) removeFromCart(Number(productId));
        }
    });
    const goToCartButton = document.getElementById('go-to-cart');
    if (goToCartButton) {
        goToCartButton.addEventListener('click', () => {
            showView('cart-view');
            renderCart(currentUser.cart, cartContainer);
            calcPrice(currentUser.cart);
        });
    }
    const continueShoppingButton = document.getElementById('continue-shopping');
    if (continueShoppingButton) {
        continueShoppingButton.addEventListener('click', () => {
            showView('product-view');
        });
    }
    const confirmOrderButton = document.getElementById('confirm-order');
    if (confirmOrderButton) {
        confirmOrderButton.addEventListener('click', () => {
            updateInitialInventory();
            showView('thankyou-view');
        });
    }
    const backToProductsButton = document.getElementById('back-to-products');
    if (backToProductsButton) {
        backToProductsButton.addEventListener('click', () => {
            showView('product-view');
        });
    }
});
