import laptop from '../assets/laptop.jpg'

export class Item {
    id: string = crypto.randomUUID()
    name: string
    img: string
    description: string
    price: number
    quantity: number

    constructor(name: string, img: string, description: string, price: number, quantity: number) {
        this.name = name
        this.img = img
        this.description = description
        this.price = price
        this.quantity = quantity
    }
}

export const items: Item[] = [
    new Item('Laptop', laptop, 'Laptop', 3000, 2),
    new Item('Phone', 'https://picsum.photos/200/300', 'Phone', 2000, 1),
    new Item('Tablet', 'https://picsum.photos/200/300', 'Tablet', 1000, 3)
]