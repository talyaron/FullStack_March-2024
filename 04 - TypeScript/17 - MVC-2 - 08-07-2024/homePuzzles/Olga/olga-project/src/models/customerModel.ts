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

export const customers: Customer[] = [
    new Customer("olga@gmail.com", "Olga", "1234"),
    new Customer("tal@gmail.com", "TalS"),
];