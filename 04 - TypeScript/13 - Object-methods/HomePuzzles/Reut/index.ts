//# Exercise 1: Object Property Calculation
interface Product {
    name: string;
    price: number;
    quantity: number;
    calculateTotalCost: () => number;
}

function calculateTotalCost(this: Product): number | undefined {
    try {
        let totalCost = this.price * this.quantity;
        return totalCost;
    } catch (error) {
        return undefined;
    }
}

const mango: Product = {
    name: "mango",
    price: 12,
    quantity: 4,
    calculateTotalCost: calculateTotalCost,
}

console.log(mango.calculateTotalCost());


//# Exercise 2: Object String Representation
interface Book {
    title: string;
    author: string;
    yearPublished: number;
}

function getBookDescription(book: Book): string | undefined {
    try {
        return `${book.title} by ${book.author} (${book.yearPublished})`;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}

const turtlesAllTheWayDown: Book = {
    title: "Turtles All The Way Down",
    author: "John Green",
    yearPublished: 2017,
};

console.log(getBookDescription(turtlesAllTheWayDown));


//# Exercise 3: Array Filtering with Objects
const books: Book [] = [
    {title: "Paper Town" , author: "John Green", yearPublished: 2008 },
    {title: "Looking For Alaska" , author: "John Green", yearPublished: 2005 },
    {title: "The Secret Library" , author: "Kekla Magoon", yearPublished: 2024 },
    {title: "An Abundance Of Kathrines" , author: "John Green", yearPublished: 2024 },
    {title: "The Catcher In The Rye" , author: "J.D Salinger", yearPublished: 1951 }
]

function getBooksByAuthor(books: Book [], author:string): string | undefined {
    try {
        const booksByAuthor= books.filter((book) => book.author === author);
        return booksByAuthor;
    } catch (error) {
        console.error (error)
        return undefined;
    }
}

console.log (getBooksByAuthor(books, "John Green"));


//# Exercise 4 (Enhanced): Advanced Array Filtering and Sorting with Objects
function getBooksByAuthorSorted(books: Book [], author:string): string | undefined {
    try {
        return books
        .filter((book) => book.author === author)
        .sort ((a,b) => a.yearPublished - b.yearPublished);
    } catch (error) {
        console.error (error)
        return undefined;
    }
}

console.log (getBooksByAuthorSorted(books, "John Green"));