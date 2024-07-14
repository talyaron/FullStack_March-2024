interface Book {
    title: string;
    author: string;
    yearPublished: number;
    getDescription:(arr: Book[])=> string|undefined;

}
    
const Twilight: Book = {
    title: "Twilight",
    author: "Stephenie Meyer",
    yearPublished: 2005,
    getDescription:getBookDescription
};

const NewMoon: Book = {
    title: "New Moon",
    author: "Stephenie Meyer",
    yearPublished: 2005,
    getDescription:getBookDescription
};

const Eclipse: Book = {
    title: "Eclipse",
    author: "Stephenie Meyer",
    yearPublished: 2005,
    getDescription:getBookDescription
  
};

const BreakingDawn: Book = {
    title: "Breaking Dawn",
    author: "Stephenie Meyer",
    yearPublished: 2005,
    getDescription:getBookDescription
  
};

const theGreatGatsby: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    yearPublished: 1925,
    getDescription:getBookDescription
  
};

const theLordOfTheRings: Book = {
    title: "The Lord of the Rings",
    author: "J. R. R. Tolkien",
    yearPublished: 1930,
    getDescription:getBookDescription
  
};

const books = [
    Twilight,
    NewMoon,
    Eclipse,
    BreakingDawn,
    theGreatGatsby,
    theLordOfTheRings
];


function getBookDescription(arr: Book[]): string|undefined{
    try{
        let Description = this.title + " by " + this.author + " (" + this.yearPublished + ")";
        return Description
    }
    catch (error){
        console.error(error);
        return undefined;
    }
}

function getBooksByAuthor(weertr: Book[], author: string): Book[]|undefined {
   try {
    //find by author
    const booksByAuthor = weertr.filter((book) => book.author === author).map((book) => book.title);
    return booksByAuthor;
   } catch (error) {
    console.error(error);
    return undefined;
   }
}

console.log(getBooksByAuthor(books, "Stephenie Meyer"));