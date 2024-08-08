import { addItemIntoStore } from '../../../20 - form - 18-07-2024/homePuzzle/Yos/form_example/src/controllers/addItem';
class Product {
    name: string;
    price: number;
    id:string;
    constructor(name:string, price:number) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}

const products:Product[] = []

class Customer {
    name: string;
    id:string;
    constructor(name:string) {
        this.name = name;
        this.id = Math.random().toString(16).slice(2);
    }   
}

const customers:Customer[] = []

const Cart: [] 
    private cart: UserCart = {items: []};

AddItemToCart(product: Product,): void{
    const.existingitem = this.cart.items.find(item => item.id ===products.id);
} 
    
