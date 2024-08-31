export function renderCartPage() {
    const wrapper = document.querySelector(".wrapper");
    wrapper!.innerHTML = renderCart();
}

export function renderCart() {
    return `
        <div class="cart">
            <div class="cart__header">
                <h3 class="cart__title">Cart</h3>
                <i class="bx bx-x cart__close"></i>
            </div>
            <div class="cart__body">
                <div class="cart__empty">
                    <i class="bx bx-cart"></i>
                    <p>Your cart is empty</p>
                </div>
            </div>
        </div>
    `;
}