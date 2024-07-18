import { Item } from "../models/itemsModel";
import { customers } from "../models/customerModel";


export const cartDiv = document.querySelector('#cart') as HTMLDivElement;

function itemCard(item: Item): string | undefined {
    try {
        return `
            <div class="item">
                <div class="item__image" style="background-image:url(${item.img})"></div>
                <div class="item__info">
                    <h2>${item.name}</h2>
                    <button class="button button__remove-from-cart" onclick="emptyCartHandler()">Empty Cart</button>
                </div>
            </div>
        `;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

export function writeItemsToDOM(cart: Item[], element: HTMLDivElement) {
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

export function emptyCartHandler(customerId:string) {
    try {
        const customer = customers.find(c => c.id === customerId);
        if(!customer) throw new Error("customer not found");
        const handleEmptyCart=[];
        customer.myCart = 
    } catch (error) { 
        console.error('emptyCartHandler function was Failed:', error);
        return 
        }
    const cart: [] = [];  
    const emptiedCart = EmptyCart(cart);
    if (emptiedCart !== undefined) {
        writeItemsToDOM(emptiedCart, cartDiv);
    }
}


