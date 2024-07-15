import { Item } from "../model/itemModel";
import { User, calculateTotalPrice } from "../model/userModel.ts";
// import { renderHeader } from "./Header";

// const guest: User = { name: "Guest", email: "", password: "" };

export function renderItem(item: Item): string {
  try {
    let html = `
        <div class="card">
        <h3 class="card-title">${item.name}</h3>
            <div class="card-image">
                <img class="card-img-top" src="${item.img}" alt="">
            </div>
            <div class="card-body">

                <p class="card-text">${item.description}</p>
                <p class="card-text">Price: ${item.price}$</p>
                <p class="card-text">In stock: ${item.quantity}</p>
                <p class="card-text">In cart: <span id="${item.id}">0</span></p>
            </div>
            <div class="card-buttons">
                <button class="remove">remove</button>
                <button class="addToCart"">add more items</button>
                </div>
        </div>
        `;
    return html;
  } catch (error) {
    console.error(error);
    return "";
  }
}

