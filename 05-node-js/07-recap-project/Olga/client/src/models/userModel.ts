export class User {
    name: string;
    mail: string;
    password: string;
    isAdmin: boolean;

    constructor(name: string, mail: string, password: string, isAdmin?: boolean) {
        this.name = name
        this.mail = mail
        this.password = password
        this.isAdmin = isAdmin || false
    }
  }