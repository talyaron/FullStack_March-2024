import { Item } from "../models/itemsModel";

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
                <img src='${player.imageUrl}' alt='${player.name}'>