import { renderItem } from "../view/item";
import { Item, items } from "../model/itemModel";
import { calculateTotalPrice, User } from "../model/userModel";
import { renderHeader } from "../view/Header";
import { renderCart } from "./userCartCont";

let currentCustomer: User = { name: "Guest", email: "", password: "", itemsInCart: []};
console.log(calculateTotalPrice(currentCustomer))


export function renderItems(items: Item[]): string {
    try {
        let html = "";
        html += "<div class='wrapper'>";
        items.forEach((item) => {
            html += renderItem(item);
        });
        html += "</div>";
        return html;
    } catch (error) {
        console.error(error);
        return "";
    }
}





document.addEventListener("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("remove")) {
        const item = items[Array.from(document.querySelectorAll(".remove")).indexOf(event.target as HTMLElement)];
        currentCustomer.itemsInCart?.splice(currentCustomer.itemsInCart.indexOf(item), 1)
        document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML = "0"
    }
})

document.addEventListener("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("addToCart")) {
        console.log(Array.from(document.querySelectorAll(".addToCart")).indexOf(event.target as HTMLElement))
        const item = items[Array.from(document.querySelectorAll(".addToCart")).indexOf(event.target as HTMLElement)];
        currentCustomer.itemsInCart?.push(item)
        document.querySelector<HTMLSpanElement>('#inCart')!.innerHTML = String(currentCustomer.itemsInCart?.length)
        console.log(item.quantity, Number(document.querySelector<HTMLSpanElement>('#' + item.id)?.innerHTML))
        if (item.quantity > Number(document.querySelector<HTMLSpanElement>('#' + item.id)?.innerHTML)) {
            console.log('true')
            document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML = String(Number(document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML) + 1)
        }
    }
})

document.addEventListener("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("cartHeader")) {
        console.log('true')
        console.log(currentCustomer.itemsInCart)

        if (currentCustomer.itemsInCart) {
            document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + renderCart(currentCustomer)
        }
    }
})

document.addEventListener("click", (event) => {
    console.log(event.target)
})

document.addEventListener("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("buy")) {
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + "<div class='wrapper'><p>Thank you for your purchase</p><button class='back'>Back to catalog</button></div>"
    }
})
  