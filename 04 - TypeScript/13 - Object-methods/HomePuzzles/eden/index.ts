interface products {
  name: string;
  price: number;
  quantity: number;
}

function calculateTotalCost(products: Product[]): number[] {
  return products.map((product) => product.price * product.quantity);
}
// const product: product = {
//   name: "Phone",
//   price: 50,
//   quantity: 4
// };

const product: Product = {
  name: "Mouse",
  price: 60,
  quantity: 5,
};

const product: Product = {
  name: "Laptop",
  price: 1000,
  quantity: 3,
};

const products: Product[] = [
  { name: "Laptop", price: 1000, quantity: 3 },
  { name: "Mouse", price: 60, quantity: 5 },
];

const totalCosts = calculateTotalCost(products);
console.log(totalCosts);

//books:

interface Book {
  title: string;
  author: string;
  yearPublished: number;
}

function getBookDescription(book: Book): string {
  return `${book.title} by ${book.author} (${book.yearPublished})`;
}

const book: Book = {
  title: "love",
  author: "pini",
  yearPublished: 1995,
};

const book: Book = {
  title: "here",
  author: "eden",
  yearPublished: 2014,
};

const description = getBookDescription(book);
console.log(description);
