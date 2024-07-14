import { Cart } from "../models/cartModel";
import { EmptyCart } from "../Controllers/EmptyCart";


export const cartDiv = document.querySelector('#cart') as HTMLDivElement;

function itemCard(cart: Cart): string | undefined {
    try {
        return `
            <div class="item">
                <div class="item__image" style="background-image:url(${cart.img})"></div>
                <div class="item__info">
                    <h2>${cart.name}</h2>
                    <button class="button button__remove-from-cart" onclick="emptyCartHandler()">empty cart</button>
                </div>
            </div>
        `;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export function writeItemsToDOM(cart: Cart[], element: HTMLDivElement) {
    try {
        if (!element) throw new Error("Element not found");
        if (!cart) throw new Error("Cart is undefined");

        let html: string = ``;
        cart.forEach(item => {
            const htmlItem = itemCard(item);
            if (htmlItem) html += htmlItem;
        });

        element.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

export function emptyCartHandler() {
    const emptiedCart = EmptyCart(cart);
    if (emptiedCart !== undefined) {
        writeItemsToDOM(emptiedCart, cartDiv);
    }
}

