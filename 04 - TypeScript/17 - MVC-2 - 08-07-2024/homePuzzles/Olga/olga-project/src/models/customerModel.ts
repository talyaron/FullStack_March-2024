export class Customer {
    id: string;
    email: string;
    name: string;
    password: string;
    image?: string;
    constructor(email: string, name: string, password: string = "") {
        this.email = email;
        this.id = crypto.randomUUID();
        this.name = name;
        this.password = password;
    }
}

