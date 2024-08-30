

export function renderHeader() {
    const app = document.querySelector("#app");
    const header = document.createElement("header");
    const user = JSON.parse(localStorage.getItem('CurrentUser') as string);
    const userName = user.firstName + ' ' + user.lastName;
    debugger
    header.classList.add("header");
    header.innerHTML = `
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
                <i class='bx bx-search'></i>
                ${renderHeaderUser({ name: userName ?? 'User', itemsInCartDict: undefined })}
            </div>
        </div>
    `;
    app!.appendChild(header);
}

function renderHeaderUser(user: User) {
    const html = `

            <div class="header__user__name">
                <i class='bx bx-user'></i> Hello, ${user.name}
            </div>
            <div class="header__user__cart">
                <i class='bx bx-cart'></i>
                <span>${user.itemsInCartDict !== undefined ? Object.keys(user.itemsInCartDict).length : 0}</span>
            </div>

    `;
    return html;
}

class User {
    name: string;
    itemsInCartDict: any;

    constructor(name: string, itemsInCartDict: any) {
        this.name = name;
        this.itemsInCartDict = itemsInCartDict;
    }
}

function renderSearchBar() {
    const html = `
        <div class="header__search_bar">
            <input type="checkbox" name="checkbox" id="searchOne">
            <label for="searchOne">
                <i class='bx bx-search icon'></i>
                <i class='bx bx-x' last icon></i>
                <p>|</p>
            </label>
            <input type="text" name="search" id="search" placeholder="Search...">
        </div>
    `;
    return html;
}