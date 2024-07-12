import { Item } from "../model/items";

const itemsDiv = document.querySelector("#items");

export function renderItem(items: Item[]) {
  let itemHtml: string = items.map((item) => htmlItemTags(item)).join("");
  if (itemsDiv) {
    itemsDiv.innerHTML = `<div class="menu"><a href="#">Move to Cart</a></div>` +  itemHtml;
  }
}

function htmlItemTags(item: Item): string {
  try {
    const itemHtml: string = `
  <div id=${item.id} class="card">
        <h4>${item.name} available (${item.quantity})</h4>
        <div class="info">Price:${item.price}
        <span class="break">Category:${item.category}</span>
        </div>
      <button onclick="addToUserCart(${item.id})">Add to Cart</button>
       <button onclick="emptyFromUseCart(${item.id})">Remove</button> 
      </div>
  `;
    return itemHtml;
  } catch (error) {
    console.log(error);
  }
}
