// import './style.css'
// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'
// import { renderCart, renderItems } from './view/item.ts'
import { items } from './model/itemModel'
import './view/dist/item.css'
import { User, calculateTotalPrice } from './model/userModel'
import { renderHeader } from './view/Header.ts'
import { renderItems } from './controller/itemsController.ts';
// import { setupCounter } from './counter.ts'


let currentCustomer: User = { name: "Guest", email: "", password: "", itemsInCart: []};
console.log(calculateTotalPrice(currentCustomer))

document.querySelector<HTMLDivElement>('#app')!.innerHTML = renderHeader(currentCustomer) + renderItems(items)

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
