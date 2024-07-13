import { Item } from "../model/itemModel";

export class User {
    name: string
    email: string
    password: string
    itemsInCart?: Item[] = []
    constructor(name: string, email: string, password: string) {
        this.name = name
        this.email = email
        this.password = password
    }
}

export const users: User[] = [
    new User('Yos', 'yos@yos', '12345'),
    new User('Orly', 'orly@orly', '12345'),
    new User('Olga', 'olga@olga', '12345'),
]