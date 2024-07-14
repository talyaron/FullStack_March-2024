import express from 'express';
import { addProductToCart, getTotalPrice, getCart, emptyCart } from './controller/cartController';

const router = express.Router();

router.post('/add', addProductToCart);
router.get('/total', getTotalPrice);
router.get('/cart', getCart);
router.post('/empty', emptyCart);

export default router;