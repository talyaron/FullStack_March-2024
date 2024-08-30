import { Category } from "./Category";
import { Item } from "./FoodItem";
import { Cart }  from "./Order";
import { getAllUsers } from "../controllers/Authentication/currentUser";



export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    cart: Item[];

    constructor(firstName: string, lastName: string, email: string, password: string, id?: string) {
        this.id = id ?? crypto.randomUUID().toString();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.cart = [];
    }

    getAllOrders(): Item[] {
        return this.cart;
    }


    getAllItemsInCategory(categoryId:string): Item[] | undefined{
        if(!categoryId) throw new Error('Category id is required');
        return this.cart.filter(c => c.id === categoryId);
    }
}

export let users: User[] = getAllUsers();