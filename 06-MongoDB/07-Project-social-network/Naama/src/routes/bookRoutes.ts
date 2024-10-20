import express from 'express';
import { addBook } from '../controlers/books/setBookCont';
const router = express.Router();

router.get('/add-new-book', addBook);

export default router;