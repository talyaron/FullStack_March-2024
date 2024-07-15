import { Item, items } from "../model/itemModel";
import { calculateTotalPrice, User } from "../model/userModel";
import { renderHeader } from "../view/Header";
import { renderItem } from "../view/item";

let currentCustomer: User = { name: "Guest", email: "", password: "", itemsInCart: []};
console.log(calculateTotalPrice(currentCustomer))


export function renderCart(user: User): string {
    try {
      let html = "";
      if (user.itemsInCart?.length === 0) {
        html += "<div class='wrapper'>";
        html += "<p>Your cart is empty</p><button class='back'>Back</button>";
        html += "</div>";
      } else {
        const items = user.itemsInCart as Item[];
        html += "<button class='back'>Back to catalog</button><div class='wrapper'>";
        items.forEach((item) => {
          html += renderItem(item);
        });
        html += `</div><h1>Total price: ${calculateTotalPrice(user)}</h1><button class='buy'>Buy</button>`;
      }
      console.log(user.itemsInCart)
      return html;
    } catch (error) {
      console.error(error);
      return "";
    }
  }

 function handleClickEvent(){
    console.log('click')
 }

document.addEventListener("click", handleClickEvent)
//    => {
//     if (event.target && (event.target as HTMLElement).classList.contains("remove")) {
//         const item = items[Array.from(document.querySelectorAll(".remove")).indexOf(event.target as HTMLElement)];
//         currentCustomer.itemsInCart?.splice(currentCustomer.itemsInCart.indexOf(item), 1)
//         document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML = "0"
//         // document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + renderItems(items)
//     }
// })

document.addEventListener("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("addToCart")) {
        console.log(Array.from(document.querySelectorAll(".addToCart")).indexOf(event.target as HTMLElement))
        const item = items[Array.from(document.querySelectorAll(".addToCart")).indexOf(event.target as HTMLElement)];
        currentCustomer.itemsInCart?.push(item)
        // currentCustomer.itemsInCartDict[item.name] = 1
        // console.log(currentCustomer.itemsInCartDict)
        // setupCounter(document.querySelector<HTMLSpanElement>('#' + item.id)!, item)
        document.querySelector<HTMLSpanElement>('#inCart')!.innerHTML = String(currentCustomer.itemsInCart?.length)
        console.log(item.quantity, Number(document.querySelector<HTMLSpanElement>('#' + item.id)?.innerHTML))
        if (item.quantity > Number(document.querySelector<HTMLSpanElement>('#' + item.id)?.innerHTML)) {
            console.log('true')
            document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML = String(Number(document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML) + 1)
        }
        // document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML = String(Number(document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML) + 1)

        // document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML = "1"
        // document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + renderItems(items)
            // if (item) {

            //     currentCustomer.itemsInCart?[item['name']] = setupCounter(event.target as HTMLButtonElement)
            //     console.dir(currentCustomer)
            //     // item.quantity = item.quantity + 1
            // }

    }
    // document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + renderItems(items)
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
  