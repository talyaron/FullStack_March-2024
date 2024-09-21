import { pets } from "../../../server/src/models/petsModel";
import { renderHeader } from "./headerView";

export function entranceToAdminPage() {
    const login = document.querySelector('#loginBtn') as HTMLButtonElement;
    login.addEventListener('click', () => {
        renderPage("admin");
    });
}

export function renderPage(page: string) {
    const app = document.querySelector('#app') as HTMLElement;
    app.innerHTML = renderHeader();
    switch (page) {
        case "admin":
            app.innerHTML += renderAdminPage();
            break;
        default:
            break;
    }
}

function renderAdminPage() {
    let html = `
        <div class="admin-page">
            <h1>Admin Page</h1>
            <table>
                <tr>
                    <th class="imageInAdminTable">Picture</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Breed</th>
                    <th>Story</th>
                    <th>Short Story</th>
                    <th>Care</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
    `;
    pets.forEach((pet) => {
        html += `<tr>
                    <td><img src="${pet.image}" alt="${pet.name}"></td>
                    <td>${pet.name}</td>
                    <td>${pet.type}</td>
                    <td>${pet.breed}</td>
                    <td>${pet.story}</td>
                    <td>${pet.shortStory}</td>
                    <td>${pet.care}</td>
                    <td><button class="edit-btn">Edit</button></td>
                    <td><button class="delete-btn">Delete</button></td>
                </tr>`
    })
    html += "</table></div>";
    return html;
}