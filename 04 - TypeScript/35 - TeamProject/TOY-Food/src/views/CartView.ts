import { getCart } from "../controllers/HomeController";
import { Cart } from "../models/Cart";
import { renderHomePage } from "./HomeView";

export function renderCartPage() {
    const cart: Cart | undefined = getCart();
    // const wrapper = document.querySelector("#content");
    // wrapper!.innerHTML =
    renderCart(cart!);
}


export function renderCart(cart: Cart) {
    renderHomePage(cart, cart?.items);
    // return `
    //     <div class="cart">
    //         <div class="cart__header">
    //             <h3 class="cart__title">Cart</h3>
    //             <i class="bx bx-x cart__close"></i>
    //         </div>
    //         <div class="cart__body">
    //             <div class="cart__empty">
    //                 <i class="bx bx-cart"></i>
    //                 <p>Your cart is empty</p>
    //             </div>
    //         </div>
    //     </div>
    // `;
}