import {Product } from "./product";
export class User {
    name: string;
    products: Product[];
    cart: Product[];
    constructor(name: string, products: Product[]) {
        this.name = name;
        this.products = products.map(product =>
            new Product(product.image, product.name, product.type, product.price, product.inventory, product.quantity)
        );
        this.cart = [];
    }
}
