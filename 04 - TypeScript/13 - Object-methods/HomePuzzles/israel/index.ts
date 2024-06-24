interface Product {
    name:string;
    price:number;
    quantity:number;
}

const bread: Product ={
    name: "bread",
    price: 9,
    quantity:3
}


function calculateTotalCost(product:Product):number | undefined{
    try {
        return product.price * product.quantity;
    } catch (error) {
        console.error(error);
    }
}


console.log(calculateTotalCost(bread));
