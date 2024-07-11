import logo from "../assets/logo.png";
import "./header.scss";
import { renderHeaderCustomerCard } from "./Customer";
// import { Customer } from "../models/customerModel";
// import { guest } from "../models/customerModel";
// import { currentCustomer } from "../controllers/RegistrationController";
import { Customer } from "../models/customerModel";

export function renderHeader(customer: Customer): string {
  try {
    const html = `<header>
        <div class="topMenu">
            <img src="${logo}" alt="logo" />
            <input type="search" name="search" id="search" />
            <div class="castomerCard">${renderHeaderCustomerCard(customer)}</div>
            <div class="cart"><i class='bx bx-cart-alt' style='color:#ffffff' ></i>4</div>
        </div>
        <nav>
            <ul>
                <li>
                  <select id="categories" name="categories">
                    <option value="all">All categories</option>
                    <option value="banana">banana</option>
                    <option value="orange">orange</option>
                  </select>
                </li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;
    return html;
  } catch (e) {
    console.error(e);
    return "";
  }
}
