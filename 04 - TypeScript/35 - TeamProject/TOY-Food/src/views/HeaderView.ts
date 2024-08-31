import { Cart } from '../models/Cart';
import { Item, ItemCategory } from '../models/Item';

export function renderHeader() {
    const header = document.querySelector("#header");
    if (!header) {
        console.error('No element with id "header" found.');
        return;
    }

    header.innerHTML = `
        <div class="header">
            <div class="header__nav">
                <div class="header__logo">
                    <img src="./src/assets/images/logo-text.png" alt="logo">
                </div>
                <div class="header__menu">
                    <a href="#home">Home</a>
                    <a href="#about">Menu</a>
                    <a href="#contact">Contact</a>
                </div>
                <div class="header__icons">
                    <div class="header__search_bar">
                        <input type="text" id="search-input" placeholder="Search...">
                        <label for="search-input">
                            <i class='bx bx-search'></i>
                            <p class="last">Search</p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    `;
}
