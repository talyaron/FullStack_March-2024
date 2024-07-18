import './style.scss'
import { renderCart, renderItems } from './view/item.ts'
import { items, Item } from './model/itemModel.ts'
import { User, addItemToCartDict, calculateTotalPrice } from './model/userModel.ts'
import { renderHeader } from './view/Header.ts'

let currentCustomer: User = { name: "Guest", email: "", password: ""};

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + renderItems(currentCustomer, items)

document.addEventListener("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("remote")) {
        const x = Array.from(document.querySelectorAll(".remote")).indexOf(event.target as HTMLElement);
        console.log('numner of array' + x)

        const item: Item = items.find((item) => item.id === document.querySelector<HTMLDivElement>('#app')!.offsetParent.children[0].children[1].children[x].children[1].children[3].children[0].id)

        delete currentCustomer.itemsInCartDict[item.name]
        if (document.querySelector<HTMLSpanElement>('#totalPrice')) {
            document.querySelector<HTMLSpanElement>('#totalPrice')!.innerHTML = calculateTotalPrice(currentCustomer, items).toString()
            document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + renderCart(currentCustomer)

        }
        document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML = "0"
        if (currentCustomer.itemsInCartDict !== undefined) {
            document.querySelector<HTMLSpanElement>('#inCart')!.innerHTML = String(Object.keys(currentCustomer.itemsInCartDict).length)
        } else {
            document.querySelector<HTMLSpanElement>('#inCart')!.innerHTML = "0"
        }
    }
})

document.addEventListener("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("addToCart")) {

        // const item = items[Array.from(document.querySelectorAll(".addToCart")).indexOf(event.target as HTMLElement)];
        const x = Array.from(document.querySelectorAll(".addToCart")).indexOf(event.target as HTMLElement);
        console.log('numner of array' + x)

        const item: Item = items.find((item) => item.id === document.querySelector<HTMLDivElement>('#app')!.offsetParent.children[0].children[1].children[x].children[1].children[3].children[0].id)


        addItemToCartDict(currentCustomer, item)

        console.log(currentCustomer.itemsInCartDict)
        document.querySelector<HTMLSpanElement>('#inCart')!.innerHTML = String(Object.keys(currentCustomer.itemsInCartDict).length)
        console.log(item.quantity, Number(document.querySelector<HTMLSpanElement>('#' + item.id)?.innerHTML))
        if (item.quantity > Number(document.querySelector<HTMLSpanElement>('#' + item.id)?.innerHTML)) {
            document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML = String(Number(document.querySelector<HTMLSpanElement>('#' + item.id)!.innerHTML) + 1)
            if (document.querySelector<HTMLSpanElement>('#totalPrice')) {
                document.querySelector<HTMLSpanElement>('#totalPrice')!.innerHTML = calculateTotalPrice(currentCustomer, items).toString()

            }
        }
    }
})

document.addEventListener("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("cartHeader")) {
            document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + renderCart(currentCustomer)
    }
})

document.addEventListener("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("buy")) {

        items.forEach((item) => {
            if (item.name in currentCustomer.itemsInCartDict) {
                item.quantity = item.quantity - currentCustomer.itemsInCartDict[item.name]
            }
        })

        currentCustomer.itemsInCartDict = {}

        document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + "<p>Thank you for your purchase</p><button class='back'>Back to catalog</button>"
    }
})

document.addEventListener("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("back")) {
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + renderItems(currentCustomer, items)
    }
})

document.addEventListener("click", (event) => {
    console.dir(event.target)
})

// const dialog = document.querySelector("#dialog") as HTMLDialogElement;
// if (document.querySelector<HTMLButtonElement>("#openDialog")) {
//     document.querySelector<HTMLButtonElement>("#openDialog").onclick = function () {
//         dialog.showModal();
// }


// };
// document.querySelector("#closeDialog").onclick = function () {
//   if (email.validity.valid && password.validity.valid) {
//     dialog.close();
//   }
// };

// document.querySelector<HTMLButtonElement>("#close")!.onclick = function () {
//   dialog.close();
// }