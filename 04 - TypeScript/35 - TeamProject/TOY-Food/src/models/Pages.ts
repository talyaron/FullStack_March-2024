export class Page {
    name: string;
    theme: string = "dark" || "light";
    constructor(name: string, theme?: string) {
        this.name = name;
        this.theme = theme || "dark";
    }
};

const homePage = new Page("Home", "light");
const menuPage = new Page("Menu");
const itemPage = new Page("Item");
const cartPage = new Page("Shopping Card");
const orderPage = new Page("Order");
const profilePage = new Page("Profile");
const consolePage = new Page("Console");
const notFoundPage = new Page("Not Found");
const loginPage = new Page("Login");
const registerPage = new Page("Register");
const adminPage = new Page("Admin Page");
const adminItemPage = new Page("Admin Item");

export { homePage, menuPage, itemPage, cartPage, orderPage, profilePage, consolePage, notFoundPage, loginPage, registerPage, adminPage, adminItemPage };