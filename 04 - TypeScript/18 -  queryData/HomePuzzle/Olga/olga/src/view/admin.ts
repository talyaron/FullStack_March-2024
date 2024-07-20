import { Item, items } from "../model/itemModel";
import "./admin.scss"
// import { renderHeader } from "./Header";
// import { currentCustomer } from "../main";

export function renderRowTable(item: Item): string {
    try {
        return `
        <tr id="${item.id}">
        <td><img src="${item.img}" alt="${item.name}"></td>
        <td>${item.name}</td>
        <td>${item.description}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td><button class="adminEdit" value="${item.id}"><i class='bx bx-edit-alt' ></i></button><button class="adminRemote"><i class='bx bx-trash'></i></button></td>
        </tr>
        `;
    } catch (e) {
        console.error(e);
        return "";
    }
}

document.addEventListener ("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("adminRemote")) {
        const idRemove = (event.target as HTMLElement).parentElement?.parentElement?.id;
        if (idRemove) {
            items.splice(Number(idRemove), 1);
            document.querySelector<HTMLDivElement>("#app")!.innerHTML = renderAdminPage();
        }
        }
})

export function renderTable(): string {
    try {
        let html = `<button class="add">Add Item</button><button class="logout">Logout</button>`;
        items.forEach((item) => {
            html += renderRowTable(item);
        });
        return html;
    } catch (e) {
        console.error(e);
        return "";
    }
}

export function renderAdminPage(): string {
    try {
        return `
        <div class="admin">
        <h2>Admin Panel</h2>
        <table>
        <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Quantity</th>
        <th></th>
        </tr>
        ${renderTable()}
        </table>
        </div>
        `;
    } catch (e) {
        console.error(e);
        return "";
    }
}

document.addEventListener ("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("add")) {
        document.querySelector<HTMLDivElement>("#app")!.innerHTML = renderNewItem();
    }
});

document.addEventListener ("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("adminEdit")) {
        document.querySelector<HTMLDivElement>("#app")!.innerHTML = renderEditTable(items.find(item => item.id == (event.target as HTMLElement).value)!);
    }
});

document.addEventListener ("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("edit")) {
        const idEdit = (event.target as HTMLElement).parentElement?.parentElement?.id;
        if (idEdit) {
            items.forEach((item) => {
                if (item.id == idEdit) {
                    item.img = (document.querySelector<HTMLInputElement>("#img") as HTMLInputElement).value;
                    item.name = (document.querySelector<HTMLInputElement>("#name") as HTMLInputElement).value;
                    item.description = (document.querySelector<HTMLInputElement>("#description") as HTMLInputElement).value;
                    item.price = Number((document.querySelector<HTMLInputElement>("#price") as HTMLInputElement).value);
                    item.quantity = Number((document.querySelector<HTMLInputElement>("#quantity") as HTMLInputElement).value);
                }
            });
        }
        document.querySelector<HTMLDivElement>("#app")!.innerHTML = renderAdminPage();
    }
});

export function renderEmptyRowTable(): string {
    try {
        return `
        <tr>
        <td><input type="text" id="img" placeholder="Image URL"></td>
        <td><input type="text" id="name" placeholder="Name"></td>
        <td><input type="textarea" id="description" placeholder="Description"></td>
        <td><input type="number" id="price" placeholder="Price" max="9000"></td>
        <td><input type="number" id="quantity" placeholder="Quantity" max ="100"></td>
        <td><button class="addToCatalog" id="add">Add</button></td>
        </tr>
        `;
    } catch (e) {
        console.error(e);
        return "";
    }
}

document.addEventListener ("click", (event) => {
    if (event.target && (event.target as HTMLElement).classList.contains("addToCatalog")) {
        const newItem: Item = {
            id: Date.now().toString(),
            img: (document.querySelector<HTMLInputElement>("#img") as HTMLInputElement).value,
            name: (document.querySelector<HTMLInputElement>("#name") as HTMLInputElement).value,
            description: (document.querySelector<HTMLInputElement>("#description") as HTMLInputElement).value,
            price: Number((document.querySelector<HTMLInputElement>("#price") as HTMLInputElement).value),
            quantity: Number((document.querySelector<HTMLInputElement>("#quantity") as HTMLInputElement).value),
        }
        items.push(newItem);
        document.querySelector<HTMLDivElement>("#app")!.innerHTML = renderAdminPage();
}});

export function renderNewItem(): string {
    try {
        return `
        <div class="admin">
        <h2>Add Item</h2>
        <table>
        ${renderEmptyRowTable()}
        </table>
        </div>
        `;

    } catch (e) {
        console.error(e);
        return "";
    }
}

export function renderEditRowTable(item: Item): string {
    try {
        return `
        <tr id="${item.id}">
        <td><input type="text" id="img" value="${item.img}"></td>
        <td><input type="text" id="name" value="${item.name}"></td>
        <td><input type="textarea" id="description" value="${item.description}"></td>
        <td><input type="number" id="price" value="${item.price}"></td>
        <td><input type="number" id="quantity" value="${item.quantity}"></td>
        <td><button class="edit"><i class='bx bx-check'></i></button><button class="remote"><i class='bx bx-trash'></i></button></td>
        </tr>
        `;
    } catch (e) {
        console.error(e);
        return "";
    }
}

export function renderEditTable(item: Item): string {
    try {
        return `
        <div class="admin">
        <h2>Edit Item</h2>
        <table>
        ${renderEditRowTable(item)}
        </table>
        </div>
        `;
    } catch (e) {
        console.error(e);
        return "";
    }
}
