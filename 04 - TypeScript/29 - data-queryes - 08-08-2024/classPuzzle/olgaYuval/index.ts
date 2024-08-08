class Product {
    name: string;
    price: number;
    id:string;
    quantity:number;
    constructor(name:string, price:number, quantity:number) {
        this.name = name;
        this.price = price;
        this.quantity= quantity;
        this.id = Math.random().toString(16).slice(2);
    }


}

const products:Product[] = []

class Customer {
    name: string;
    id:string;
    productsIdList:string[] = [];
    constructor(name:string) {
        this.name = name;
        this.id = Math.random().toString(16).slice(2);
    }   
}

const customers:Customer[] = []

// how to store all the products each customer has bought