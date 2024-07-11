// # Exercise 1: Object Property Calculation

interface Product {
  name: string;
  price: number;
  quantity: number;
  calculateTotalCost: () => number | undefined;
}

const P1: Product = {
  name: "p1",
  price: 100,
  quantity: 5,
  calculateTotalCost: calculateTotalCost,
};

const P2: Product = {
  name: "p2",
  price: 100,
  quantity: 3,
  calculateTotalCost: calculateTotalCost,
};

const P3: Product = {
  name: "p3",
  price: 100,
  quantity: 2,
  calculateTotalCost: calculateTotalCost,
};

function calculateTotalCost(): number | undefined {
  try {
    return this.price * this.quantity;
  } catch (error) {}
}

console.log(P2.calculateTotalCost());

// # Exercise 2: Object String Representation

interface Book {
  title: string;
  author: string;
  yearPublished: number;
  getBookDescription: () => string;
}

const book1: Book = {
  title: "The Fellowship of the Ring",
  author: "J. R. R. Tolkien",
  yearPublished: 1954,
  getBookDescription: getBookDescription,
};
const book2: Book = {
  title: "The Two Towers",
  author: "J. R. R. Tolkien",
  yearPublished: 1954,
  getBookDescription: getBookDescription,
};
const book3: Book = {
  title: "The Return of the King",
  author: "J. R. R. Tolkien",
  yearPublished: 1955,
  getBookDescription: getBookDescription,
};
const book4: Book = {
  title: "When Among Crows",
  author: "Veronica Roth",
  yearPublished: 2024,
  getBookDescription: getBookDescription,
};
const book5: Book = {
  title: "I'm Afraid You've Got Dragons",
  author: "Peter S. Beagle",
  yearPublished: 2024,
  getBookDescription: getBookDescription,
};

function getBookDescription(): string {
  try {
    return `${this.title} by ${this.author} (${this.yearPublished})`;
  } catch (error) {}
}

console.log(book2.getBookDescription());

// # Exercise 3: Array Filtering with Objects

const booksArr = [book1, book2, book3, book4, book5];

function getBooksByAuthor(booksList: Book[], author: string): Book[] {
  try {
    const titles = booksList.filter((book) => book.author === author);
    return titles;
  } catch (error) {}
}

console.log(getBooksByAuthor(booksArr, "J. R. R. Tolkien"));

// # Exercise 4 (Enhanced): Advanced Array Filtering and Sorting with Objects

function getBooksByAuthorSorted(booksList: Book[], author: string): Book[] {
  try {
    const result = booksList
      .filter((book) => book.author === author)
      .sort((a, b) => a.yearPublished - b.yearPublished);
    return result;
  } catch (error) {}
}

console.log(getBooksByAuthorSorted(booksArr, "J. R. R. Tolkien"));
