import { Book } from "../../model/books/booksModel";
import { Author } from "../../model/authors/authorsModel";

export async function getBooksWoman(req: any, res: any) {
    try {
        const gender = req.query.gender || 'Woman'; 
        
        if (!gender) {
            throw new Error("Missing required gender field");
        }
        const books: Book:[] = await Book.find({ 'author.gender': gender });

        if (!books || books.length === 0) {
            res.status(404).send({ message: "No books found for the specified gender." });
            return;
        }

        res.status(200).send({ books });
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).send({ error: "An error occurred while fetching the books." });
    }
}
