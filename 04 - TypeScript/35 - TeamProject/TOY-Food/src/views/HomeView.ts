import { Cart } from '../models/Cart';
import { Item, ItemCategory } from '../models/Item';
import { renderHeader, renderNewDivElement } from './HeaderView';

export function renderHomePage(cart: Cart, items: Item[]) {
    console.log('home', cart);
    let content = document.querySelector('#content');
    if (!content) {
        renderNewDivElement('content');
        content = document.querySelector('#content')!;
    }
    const home = document.createElement('section');
    home.classList.add('wrapper');
    const categories = Object.values(ItemCategory);
    let html = '';
    categories.forEach(category => {
        const categoryItems = items.filter(item => item.category === category);
        if (categoryItems.length > 0) {
            html += `<h2>${category}</h2>`;
            html += `<div class="item-list">`;
            categoryItems.forEach(item => {
                const count = cart.getItemCount(item.id);
                html += `<div class="item-card">
                    <img src="${item.pic}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price.toFixed(2)}</p>
                    ${count > 0 ? `<div class="item-quantity">
                        <button class="decrease" data-id="${item.id}">-</button>
                        <span>${count}</span>
                        <button class="increase" data-id="${item.id}">+</button>
                      </div>`: `<button class="add-to-order" data-id="${item.id}">Add to order</button>`
                    }
                  </div>`;
            });
            html += `</div>`;
        }
    });
    html += `<div class="total-section">Total: $${cart.totalPrice.toFixed(2)}</div>`;
    content!.innerHTML = html;
    handleEventListeners(cart, items);
}
function handleEventListeners(cart: Cart, items: Item[]) {
    document.querySelectorAll('.add-to-order').forEach((button) => {
        button.addEventListener('click', (e) => {
            const id = (e.target as HTMLButtonElement).dataset.id!;
            const item = items.find((item) => item.id === id);
            if (item) {
                cart.addItem(item);
                renderHomePage(cart, items);
                renderHeader();


            }
        });
    });
    document.querySelectorAll('.increase').forEach((button) => {
        button.addEventListener('click', (e) => {
            const id = (e.target as HTMLButtonElement).dataset.id!;
            const item = items.find((item) => item.id === id);
            if (item) {
                cart.addItem(item);
                renderHomePage(cart, items);
                renderHeader();

            }
        });
    });
    document.querySelectorAll('.decrease').forEach((button) => {
        button.addEventListener('click', (e) => {
            const id = (e.target as HTMLButtonElement).dataset.id!;
            cart.removeItem(id);
            renderHomePage(cart, items);
            renderHeader();

        });
    });
}


