class pet {
    name: string
    type: string
    price: number

    constructor(name: string, type: string, price: number){
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

const Lotus = new pet ("Lotus", "Dog", 200);
const Miklosh = new pet ("Miklosh", "Cat", 150);
const Mitzi = new pet ("Mitzi", "Cat", 170);
const Raful = new pet ("Raful", "Dog", 300);

console.log(Lotus)
console.log(Miklosh)
console.log(Mitzi)
console.log(Raful)