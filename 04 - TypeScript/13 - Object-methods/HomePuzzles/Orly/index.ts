//Exercise 1: Object Property Calculation

//Create a TypeScript interface Product with properties for name (string), price (number), and quantity (number).
//Write a function calculateTotalCost(product) that takes a Product object as input and returns the total cost (price * quantity) as a number.
interface Product {
    Name: string;
    price: number;
    quantity: number;
   
}

function calculateTotalCost(product: Product) : number {
   return product.price * product.quantity;
}

const Dress: Product = {
    Name: 'Dress',
    price: 450,
    quantity: 3
}

console.log(calculateTotalCost(Dress));

//Exercise 2: Object String Representation

//Create a TypeScript interface Book with properties for title (string), author (string), and yearPublished (number).
//Write a function getBookDescription(book) that takes a Book object as input and returns a formatted string like: "Title by Author (Year Published)".

interface Book {
    Title: string;
    Author: string;
    yearPublished: number;
}

function getBookDescription(book: Book): string{
    return `${Book.Title} by ${Book.Author} (${Book.yearPublished})`;
}

const Book = {
    Title: 'Only Time will Tell',
    Author: 'Jeffrey Archer',
    yearPublished: 2011,
};

console.log(getBookDescription(Book));

// Exercise 3: Array Filtering with Objects

//Create a TypeScript array of Book objects (using the interface from Exercise 2).
//Write a function getBooksByAuthor(books, author) that takes the book array and an author's name (string) as input and returns a new array containing only the books written by that author.

interface Book {
    Title: string;
    Author: string;
    yearPublished: number;

}

const books: Book[]= [
    {
        Title: 'Only Time will Tell',
        Author: 'Jeffrey Archer',
       yearPublished: 2011,

    },
    {
        Title: 'Best Kept Secret',
        Author: 'Jeffrey Archer',
       yearPublished: 2013,

    },
    {
        Title: 'The Secret',
        Author: 'Rhonda Byrne',
       yearPublished: 2006,

    },
    {
        Title: "The Magic",
        Author: 'Rhonda Byrne',
       yearPublished: 2012,

    },
    {
        Title: 'Be Careful what you Wish for',
        Author: 'Jeffrey Archer',
       yearPublished: 2014,
    }
    {

       Title: "The Power",
       Author: 'Rhonda Byrne',
      yearPublished: 2010,

    }
];

function getBooksByAuthor(books: Book[], Author: string): Book[] {
    return books.filter(book => book.Author === Author);
}

const booksByJeffreyArcher = getBooksByAuthor(books, 'Jeffrey Archer',);
console.log("Books by Jeffrey Archer:", (booksByJeffreyArcher));

const booksByRhondaByrne =  getBooksByAuthor(books, 'Rhonda Byrne',);
console.log("Books by Rhonda Byrne:", (booksByRhondaByrne));

//Exercise 4 (Enhanced): Advanced Array Filtering and Sorting with Objects


//(It is the same as Exercise 3, but with additional sorting requirements.)

//Use the Book interface from Exercise 2.
//Create a TypeScript array of Book objects, ensuring some books have the same author.
//Write a function getBooksByAuthorSorted(books, author) that:
//Takes the book array and an author's name (string) as input.
//Returns a new array containing only the books written by that author.
//Sorts the returned array by yearPublished in ascending order (oldest to newest).

function getBooksByAuthorSorted(books: Book[], Author: string): Book[] {
    
    const filteredBooks = books.filter(book => book.Author === Author);

    filteredBooks.sort((a, b) => a.yearPublished - b.yearPublished);

    return filteredBooks;
}

const booksByJeffreyArcherSorted = getBooksByAuthorSorted(books, 'Jeffrey Archer');
console.log("Books by Jeffrey Archer (sorted by year):", booksByJeffreyArcherSorted);

const booksByRhondaByrneSorted = getBooksByAuthorSorted(books, 'Rhonda Byrne');
console.log("Books by Rhonda Byrne (sorted by year):", booksByRhondaByrneSorted);

