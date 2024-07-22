import { User, Registration } from "../model/userModel";
import { renderAdminPage } from "./admin";

// import { Customer } from "../models/customerModel";
// import { Registration } from "";

export function renderCustomerName(customer: User): string {
    try {
        return customer.name;
    } catch (e) {
        console.error(e);
        return "";
    }
}

export function renderHeaderCustomerCard(customer: User): string {
    try {
        let html = '';
        if (customer.name === "Guest") {
            // html = `<div class="customerCard"><i class='bx bx-user' style='color:#ffffff' ></i>Welcome Guest<br><button id="openDialog" onclick="showModal()">Register/Login</button></div>`
            html = `<div class="customerCard"><i class='bx bx-user' style='color:#ffffff' ></i>Welcome Guest<br><button id="openDialog" onclick="renderAdminPage()">Register/Login</button></div>`
            // ${Registration()}`;
        } else {
            html = `<div class="customerCard"><i class='bx bx-user' style='color:#ffffff' ></i>Welcome ${renderCustomerName(customer)}</div>`;
        }
        return html;
    } catch (e) {
        console.error(e);
        return "";
    }
}
