// Exercise 1: Object Property Calculation 

interface product {
    name: string;
    price: number;
    quantity: number;
    getCost:() => number
}

const pen: product = {
    name: "pen",
    price: 5,
    quantity: 10,
    getCost:calculateTotalCost;
}