// Exercise 1:

interface product {
  name: string;
  price: number;
  quantity: number;
}

const tomatoes: product = {
  name: "tomato",
  price: 4.5,
  quantity: 7,
};
const melons: product = {
  name: "melons",
  price: 9,
  quantity: 2,
};
const lettuce: product = {
  name: "lettuce",
  price: 6,
  quantity: 4,
};
function calculateTotalCost(product: product): number {
  return product.price * product.quantity;
}

console.log(calculateTotalCost(lettuce));
console.log(calculateTotalCost(melons));
console.log(calculateTotalCost(tomatoes));

// exercise 2:

interface book {
  Title: string;
  Author: string;
  YearPublished: number;
}

const HarryPotter: book = {
  Title: "Harry Potter",
  Author: "JK Rowling",
  YearPublished: 1998,
};

const TheManWithoutAFace: book = {
  Title: "The man without a face",
  Author: "Duke Nukeem",
  YearPublished: 1977,
};

const TheGreatAlone: book = {
  Title: "The great alone",
  Author: "Kristin Hannah",
  YearPublished: 2017,
};

const TheNightingale: book = {
  Title: "The Nightingale",
  Author: "Kristin Hannah",
  YearPublished: 2015,
};

const MagicHour: book = {
  Title: "Magic Hour",
  Author: "Kristin Hannah",
  YearPublished: 2006,
};

const AnotherBook: book = {
  Title: "Another Book",
  Author: "Kristin Hannah",
  YearPublished: 2006,
};

const HarryPotter2: book = {
  Title: "Harry Potter 2",
  Author: "JK Rowling",
  YearPublished: 1998,
};

const HarryPotter3: book = {
  Title: "Harry Potter 3",
  Author: "JK Rowling",
  YearPublished: 1998,
};

const Yakitori: book = {
  Title: "Yakitori",
  Author: "Yamazaki Kintaro",
  YearPublished: 2043,
};

function getBookDescription(book: book): string | undefined | number {
  return `${book.Title} by ${book.Author} (${book.YearPublished})`;
}

console.log(getBookDescription(Yakitori));

// exercise 3:

const books: book[] = [
  Yakitori,
  HarryPotter3,
  HarryPotter2,
  HarryPotter,
  AnotherBook,
  MagicHour,
  TheNightingale,
  TheGreatAlone,
  TheManWithoutAFace,
];

function getBooksByAuthor(books: book[], Author: string): book[] {
  return books.filter((book) => book.Author === Author);
}

const JKRowlingBooks = getBooksByAuthor(books, "JK Rowling");

console.log(JKRowlingBooks);

console.log(getBooksByAuthor(books, "Kristin Hannah"));

// exercise 4: no idea 

