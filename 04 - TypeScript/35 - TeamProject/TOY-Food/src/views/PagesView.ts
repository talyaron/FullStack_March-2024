import { items } from "../controllers/HomeController";
import { Cart } from "../models/Cart";
import { Page } from "../models/Pages";
import { renderFooter } from "./FooterView";
import { renderHeader } from "./HeaderView";
import { renderHomePage } from "./HomeView";
import { renderLoginPage } from "./login/login";
import { renderRegisterForm } from "./login/register";

export function renderPage(name: Page) {
    try {
        const titlePage = name.name;
        renderHeader();
        renderPageContant(titlePage);
        renderFooter();
        console.log("stopped");
    } catch (error) {
        console.error(error);
    }
    
}

export function renderPageContant(name: string) {
    const content = document.querySelector("#content") as HTMLDivElement;
    let html = `<h1 class="banner__title">${name}</h1>`;  

    switch (name) {
        case "Home":
            const cart = new Cart();
            html +=renderHomePage(cart, items);
            break;
        // case "Menu":
        //     renderMenuPage();
        //     break;
        // case "Item":
        //     renderItemPage();
        //     break;
        // case "Shopping Card":
        //     renderCartPage();
        //     break;
        // case "Order":
        //     renderOrderPage();
        //     break;
        // case "Profile":
        //     renderProfilePage();
        //     break;
        case "Login":
            html += renderLoginPage();
            break;
        case "Register":
            html += renderRegisterForm(content!);
            break;
        // default:
        //     html += renderNotFoundPage();
        //     break;
    }

    content!.innerHTML = html;
}

export function renderAdminPage() {
    
}
