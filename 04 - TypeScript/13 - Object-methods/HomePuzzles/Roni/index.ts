//# Exercise 1: Object Property Calculation

interface Product {
name: string;
price: number;
quantity: number;
getCost:()=> number|undefined;
}

const Pen: Product = {
    name: "Pen",
    price: 5.90,
    quantity: 4,
    getCost:calculateTotalCost
};

const Notebook: Product = {
    name: "Notebook",
    price: 11.90,
    quantity: 5,
    getCost:calculateTotalCost
};

const Book: Product = {
    name: "Book",
    price: 50.90,
    quantity: "unknown",
    getCost:calculateTotalCost
};

function calculateTotalCost(arr: Product[]): number|undefined{
    try{
        let Cost:number = this.price * this.quantity;
        return Cost;
    }
    catch (error){
        console.error(error);
        return undefined;
    }
}
console.log(Pen.getCost());
console.log(Notebook.getCost());
console.log(Book.getCost());

//# Exercise 2: Object String Representation

interface Book {
    title: string;
    author: string;
    yearPublished: number;
    getDescription:()=> any|undefined;
}
    
const Twilight: Book = {
        title: "Twilight",
        author: "Stephenie Meyer",
        yearPublished: 2005,
        getDescription:getBookDescription
};

const TheGreatGatsby: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    getDescription:getBookDescription
};

const TLOTR: Book = {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    getDescription:getBookDescription
};

function getBookDescription(arr: Book[]): any|undefined{
    try{
        let Description = this.title + " by " + this.author + " (" + this.yearPublished + ")";
        return Description
    }
    catch (error){
        console.error(error);
        return undefined;
    }
}
console.log(Twilight.getDescription());
console.log(TheGreatGatsby.getDescription());
console.log(TLOTR.getDescription());