import { Author } from "../../model/authors/authorsModel";
import { Book } from "../../model/books/booksModel"

export async function getBooksByWomen(req:any, res:any) {
    try {
        const authors = await Author.find({gender:"woman"});
        const books = await Book.find({authors}).populate('author')
        console.log(books)
        res.send(books)

    } catch (error: any) {
        console.log(error)
        res.send('Error getting books', error.message)
    }
}