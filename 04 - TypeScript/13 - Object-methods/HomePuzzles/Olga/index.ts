// # Exercise 1: Object Property Calculation
// Task:

// Create a TypeScript interface Product with properties for name (string), price (number), and quantity (number).
// Write a function calculateTotalCost(product) that takes a Product object as input and returns the total cost (price * quantity) as a number.

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
        console.error(error);
        return undefined
    }
}

const apple: Product = {
  name: "apple",
  price: 2,
  quantity: 12,
  calculateTotalCost: calculateTotalCost,
};

console.log(apple.calculateTotalCost());

// # Exercise 2: Object String Representation
// Task:

// Create a TypeScript interface Book with properties for title (string), author (string), and yearPublished (number).
// Write a function getBookDescription(book) that takes a Book object as input and returns a formatted string like: "Title by Author (Year Published)".

interface Book {
  title: string;
  author: string;
  yearPublished: number;
}

function getBookDescription(book: Book): string | undefined {
    try {
        return `${this.title} by ${this.author} (${this.yearPublished})`;

    } catch (error) {
        console.error(error);
        return undefined
    }
}

const warAndPeace: Book = {
  title: "World and Peace",
  author: "Lev Tolstoy",
  yearPublished: 1869,
};

console.log(getBookDescription(warAndPeace));

// # Exercise 3: Array Filtering with Objects
// Task:

// Create a TypeScript array of Book objects (using the interface from Exercise 2).
// Write a function getBooksByAuthor(books, author) that takes the book array and an author's name (string) as input and returns a new array containing only the books written by that author.

function getBooksByAuthor(books: Book[], author: string): Book[] | undefined {
  try {
    const filteredBooks = books.filter((book) => book.author === author);
    return filteredBooks;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

const books: Book[] = [
  { title: "1984", author: "George Orwell", yearPublished: 1949 },
  { title: "Brave New World", author: "Aldous Huxley", yearPublished: 1932 },
  { title: "Animal Farm", author: "George Orwell", yearPublished: 1945 },
  {
    title: "Down and Out in Paris and London",
    author: "George Orwell",
    yearPublished: 1933,
  },
];

console.log(getBooksByAuthor(books, "George Orwell"));

// # Exercise 4 (Enhanced): Advanced Array Filtering and Sorting with Objects
// Task:

// (It is the same as Exercise 3, but with additional sorting requirements.)

// Use the Book interface from Exercise 2.
// Create a TypeScript array of Book objects, ensuring some books have the same author.
// Write a function getBooksByAuthorSorted(books, author) that:
// Takes the book array and an author's name (string) as input.
// Returns a new array containing only the books written by that author.
// Sorts the returned array by yearPublished in ascending order (oldest to newest).

function getBooksByAuthorSorted(books: Book[], author: string): Book[] {
  try {
    return books
      .filter((book) => book.author === author)
      .sort((a, b) => a.yearPublished - b.yearPublished);
  } catch (error) {
    console.error(error);
    return [];
  }
}

console.log(getBooksByAuthorSorted(books, "George Orwell"));
