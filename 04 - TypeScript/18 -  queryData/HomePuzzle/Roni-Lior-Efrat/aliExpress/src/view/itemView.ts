import { Item } from "../model/items";

const itemsDiv = document.querySelector("#items");

export function renderItem(item: Item) {
  let itemHtml: string = `<p>${item.name}</p><button onclick="handleAddClick(${item})" id="addTo">Add to Cart</button>`;
  if (itemsDiv) {
    itemsDiv.innerHTML = itemHtml;
  }
}
