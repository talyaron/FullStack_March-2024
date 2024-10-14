import express from 'express';
import { getBooksByName } from '../controllers/books/getBooksDB';
import { addBook } from '../controllers/books/setBooks';
const router = express.Router()

router.get('/get-book-by-name', getBooksByName)
router.post('/add-book', addBook)

export default router