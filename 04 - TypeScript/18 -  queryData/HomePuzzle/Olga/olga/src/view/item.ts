import { Item, items } from "../model/itemModel.ts";
import { User, calculateTotalPrice } from "../model/userModel.ts";

export function renderItem(user: User, item: Item): string {
  try {
    let html = `
        <div class="card">
        
            <div class="card-image">
            <h3 class="card-title">${item.name}</h3>
                <img class="card-img-top" src="${item.img}" alt="">
            </div>
            <div class="card-body">

                <p class="card-text">${item.description}</p>
                <p class="card-text">Price: ${item.price}$</p>
                <p class="card-text">In stock: ${item.quantity}</p>
                <p class="card-text">In cart: <span id="${item.id}">${(user.itemsInCartDict !== undefined && user.itemsInCartDict[item.name] !== undefined) ? user.itemsInCartDict[item.name] : 0}</span></p>
                <div class="card-buttons">
                  <button class="remote">remove</button>
                  <button class="addToCart"">add more items</button>
                </div>
            </div>
            
        </div>
        `;
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}

export function renderItems(user: User, items: Item[]): string {
  try {
    let html = "";
    html += "<div class='wrapper'>";
    items.forEach((item) => {
      html += renderItem(user, item);
    });
    html += "</div>";
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}

export function renderCart(user: User): string {
  try {
    let html = "";
    if (user.itemsInCartDict === undefined || Object.keys(user.itemsInCartDict).length === 0) {

      html += "<p>Your cart is empty</p><button class='back'>Back</button>";

    } else {
      const keys = Object.keys(user.itemsInCartDict);
      const itemsCart: Item[] = [];
      keys.forEach((key) => {
        itemsCart.push(items.find((item) => item.name === key)!);
      })
      html += "<button class='back'>Back to catalog</button><div class='wrapper'>";
      itemsCart.forEach((item) => {
        html += renderItem(user, item);
      });
      html += `</div><h1>Total price: <span id="totalPrice">${calculateTotalPrice(user, items)}</span></h1><button class='buy'>Buy</button>`;
    }
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}
