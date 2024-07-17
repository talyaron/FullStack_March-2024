/*import { Item } from "../models/itemsModel";

export function viewItems(items: Item[]): Item[] {
    try {
        return `<div id="item">
        <div class="itemsToScreen" ${i}>
        </div>
        <div class="book__info">
        <h2>${book.title}</h2>
        <p>by ${book.author} (${book.yearPublished})</p>
        </div>
        </div>`;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}
 return `<div class='players ${directionClass}' id='${player.id}' style="left:${player.x}%;top:${player.y}%">
<img src='${player.imageUrl}' alt='${player.name}'>*/

import { Item} from "../models/itemsModel";

export const itemsDiv = document.querySelector('#items') as HTMLDivElement;
//makes the card for each item
function itemCard(item: Item): string | undefined {
    try {
        
        return `<div class="item">
        <div class="item__image" style="background-image:url(${item.img})">
        </div>
        <div class="item__info">
        <h2>${item.name}</h2>
        <button class="button button__add-to-cart" onclick="addItemHandler(${item.id})">add to cart</button>
        </div>
        </div>`;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}
//controller for the books
//function that writes the books to the DOM

export function writeItemsToDOM(items: Item[], element: HTMLDivElement) {
    try {
        if (!element) throw new Error("Element not found");
        if (!items) throw new Error("No items found");

        let html:string = ``;
        items.forEach(item => {
            const htmlItem = itemCard(item);
            if(htmlItem) html += htmlItem;
        });

        element.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}
export const cartDiv = document.querySelector('#cart') as HTMLDivElement;
export function writeCartToDOM(cart:Item[],element:HTMLDivElement){
    try {
        if (!element) throw new Error("Element not found");
        if (!cart) throw new Error("No cart found");

        let html:string = ``;
        cart.forEach(item => {
            html += item;
        });

        element.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}

// function addItemHandler ()


