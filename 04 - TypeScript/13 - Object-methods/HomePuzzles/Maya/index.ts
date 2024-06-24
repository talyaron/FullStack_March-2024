// Exercise 1: Object Property Calculation

interface Product {
  name: string;
  price: number;
  quantity: number;
}

const Bananas: Product = {
  name: "Bananas",
  price: 6,
  quantity: 3,
};

const Peaches: Product = {
  name: "Peaches",
  price: 12,
  quantity: 5,
};

const Watermelon: Product = {
  name: "Watermelon",
  price: 10,
  quantity: 1,
};

function calculateTotalCost(Product: Product): number | undefined {
  try {
    return Product.price * Product.quantity;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

console.log(`Total cost of Bananas: $${calculateTotalCost(Bananas)}`);
console.log(`Total cost of Peaches: $${calculateTotalCost(Peaches)}`);
console.log(`Total cost of Watermelon: $${calculateTotalCost(Watermelon)}`);

// Exercise 2: Object String Representation

interface Book {
    title: string;
    author: string;
    yearPublished: number;
  }
  
  const HarlanCoben: Book = {
      title: 'Gone For Good',
      author: 'Harlan Coben',
      yearPublished: 2002,
  }
  
  const HayaShenhav: Book = {
      title: 'Raspberry Juice',
      author: 'Haya Shenhav',
      yearPublished: 1970,
  }   

  function getBookDescription(book:Book): string | undefined{
  try {
      if (!book || typeof book.title !== 'string' || typeof book.author !== 'string' || typeof book.yearPublished !== 'number') {
          throw new Error("Invalid book object");
      }
      return"`${book.title} by ${book.author} (${book.yearPublished})`;
  }catch (error){
      console.error(error);
      return undefined;
  }
  }
  
  console.log(getBookDescription(HarlanCoben));

  // Exercise 3: Array Filtering with Objects
    const books: book[] = [HarlanCoben,HayaShenhav ]
    function getBooksByAuthor(books:Book[],  author:string):  string[]|undefined{
        try {
            if (!Array.isArray(books) || typeof author !== 'string') {
                throw new Error("Invalid input");
            }
            
            const filteredBooks = books.filter(book => book.author === author);
            return filteredBooks; 
        } catch (error) {
            console.error(error);
            return undefined;   {
            
        }
    }
    }


  
