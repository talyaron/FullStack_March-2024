// Exercise 1: Object Property Calculation 

interface product {
    name: string;
    price: number;
    quantity: number;
    getCost:(product:product) => number | undefined
}

const pen: product = {
    name: "pen",
    price: 5,
    quantity: 10,
    getCost:calculateTotalCost
}

const notebook: product = {
    name: "notebook",
    price: 12,
    quantity: 7,
    getCost:calculateTotalCost
}

const ruler: product = {
    name: "ruler",
    price: 3,
    quantity: 16,
    getCost:calculateTotalCost
}

const eraser: product = {
    name: "eraser",
    price: 4,
    quantity: 23,
    getCost:calculateTotalCost
}

function calculateTotalCost(product:product): number | undefined {
    try {
        const totalPrice = this.price * this.quantity
        return totalPrice;
        
    } catch (error) {
        console.error(error)
        return undefined
    }
}

console.log(pen.getCost(pen));
console.log(notebook.getCost(notebook));
console.log(eraser.getCost(eraser));
console.log(ruler.getCost(ruler));

// Exercise 2: Object String Representation 

interface book {
    title: string,
    author: string,
    yearPublished: number
    getBookDescription:(book: book) => string | undefined
}

const thingsIWantedToSay: book = {
    title: "Things I Wanted To Say",
    author: "Monica Murphy",
    yearPublished: 2010,
    getBookDescription:getBookDescription
}

const tooLate: book = {
    title: "Too Late",
    author: "Coleen Hoover",
    yearPublished: 2017,
    getBookDescription:getBookDescription
}

const fiftyShadesDarker: book = {
    title: "Fifty Shades Darker",
    author: "E.L. James",
    yearPublished: 2021,
    getBookDescription:getBookDescription
}

const theThingsWeCantSay: book = {
    title: "The Things We Can't Say",
    author: "Kelly Rimmer",
    yearPublished: 2023,
    getBookDescription:getBookDescription
}

const neverNever: book = {
    title: "Never Never",
    author: "Coleen Hoover",
    yearPublished: 2019,
    getBookDescription:getBookDescription
}

function getBookDescription(book: book): string | undefined {
    try {
        return this.title + " by " + this.author + "(" + this.yearPublished + ")" 
    } catch (error) {
        console.error(error)
        return undefined  
    }
}

console.log(thingsIWantedToSay.getBookDescription(thingsIWantedToSay));
console.log(tooLate.getBookDescription(tooLate));
console.log(fiftyShadesDarker.getBookDescription(fiftyShadesDarker));
console.log(theThingsWeCantSay.getBookDescription(theThingsWeCantSay));

// Exercise 3: Array Filtering with Objects

const books : book[] = [thingsIWantedToSay, tooLate, fiftyShadesDarker, theThingsWeCantSay, neverNever]

function getBooksByAuthor(books: book[], author: string ): string[] | undefined {
    try { 
        const filterByAuthor = books.filter(book => book.author === author); 
        return filterByAuthor

    } catch (error) {
        catch (error) {
            console.error(error)
            return undefined
         }
    }
}

console.log(getBooksByAuthor(books, "Coleen Hoover"));

//# Exercise 4 (Enhanced): Advanced Array Filtering and Sorting with Objects

function getBooksByAuthorSorted(books: Book[], author:string): string | undefined {
    try {
        return books
        .filter((book) => book.author === author)
        .sort ((a,b) => a.yearPublished - b.yearPublished);
    } catch (error) {
        console.error (error)
        return undefined;
    }
}

console.log (getBooksByAuthorSorted(books, "Coleen Hoover"));