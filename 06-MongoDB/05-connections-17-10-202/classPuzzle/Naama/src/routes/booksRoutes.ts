import express from 'express';
import { getBooksByName } from '../controllers/books/getBooksDB';
import { addBook } from '../controllers/books/setBooks';
import { getBooksByWomen } from '../controllers/books/getBooksWomen';
const router = express.Router()

router.get('/get-book-by-name', getBooksByName)
router.get('/get-book-by-women', getBooksByWomen)
router.post('/add-book', addBook)

export default router