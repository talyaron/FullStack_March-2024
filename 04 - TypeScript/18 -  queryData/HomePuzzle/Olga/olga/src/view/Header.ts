import logo from "../assets/logo.png";
import "./header.scss";
import { renderHeaderCustomerCard } from "./Customer";
// import { Customer } from "../models/customerModel";
// import { guest } from "../models/customerModel";
// import { currentCustomer } from "../controllers/RegistrationController";
import { User } from "../model/userModel";
// import { renderCart } from "./item";
// import { Item } from "../model/itemModel";

export function renderHeader(user: User): string {
  try {
    const html = `<header>
    <div class="menu">
        <div class="topMenu">
            <img src="${logo}" alt="logo" />
            <input type="search" name="search" id="search" />
            <div class="customerCard">${renderHeaderCustomerCard(user)}</div>
            <button class="cartHeader"><i class='bx bx-cart-alt cartHeader' style='color:#ffffff' ></i><span id="inCart" class="cartHeader">${user.itemsInCartDict !== undefined ? Object.keys(user.itemsInCartDict).length : 0}</span></button>
        </div>
    </div>
    </header>
    `;
    return html;
  } catch (e) {
    console.error(e);
    return "";
  }
}
