import { Item } from "../model/items";
import { addToUserCart, emptyFromUseCart } from '../controllers/item/itesmCont'

const itemsDiv = document.querySelector("#items");

export function renderItem(items: Item[]) {
  let itemHtml: string = items.map((item) => htmlItemTags(item)).join("");
  if (itemsDiv) {
    itemsDiv.innerHTML = `<div class="menu"><a href="#">Move to Cart</a></div>` + itemHtml;
    document.querySelectorAll('.add').forEach(btn => btn.addEventListener('click', () => addToUserCart(btn.id)));
    document.querySelectorAll('.remove').forEach(btn => btn.addEventListener('click', emptyFromUseCart));

  }
}

export function htmlItemTags(item: Item): string {
  try {
    const itemHtml: string = `
  <div class="card">
        <h4>${item.name} available (${item.quantity})</h4>
        <div class="info">Price:${item.price}
        <span class="break">Category:${item.category}</span>
        </div>
      <button class="add" id="${item.id}">Add to Cart</button>
       <button class="remove">Remove</button> 
      </div>
  `;
    return itemHtml;
  } catch (error) {
    console.log(error);
  }
}
