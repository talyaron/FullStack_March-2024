export class Product {
    id: number;
    image: string;
    name: string;
    type: string;
    price: number;
    inventory: number;
    quantity: number;
    constructor(image: string, name: string, type: string, price: number, inventory: number, quantity: number = 0) {
        this.image = image;
        this.name = name;
        this.type = type;
        this.price = price;
        this.inventory = inventory;
        this.quantity = quantity;
        this.id = this.makeId();
    }

    private makeId(): number {
        return Math.floor(Math.random() * 1000000);
    }

    updateInventory(addedQuantity: number) {
        this.inventory += addedQuantity;
    }
    decreaseInventory(quantity: number) {
        if (this.inventory >= quantity) {
            this.inventory -= quantity;
        } else {
            throw new Error("Sorry, product ran out of stock");
        }
    }
    increaseQuantity(quantity: number) {
        this.quantity += quantity;
    }
}
