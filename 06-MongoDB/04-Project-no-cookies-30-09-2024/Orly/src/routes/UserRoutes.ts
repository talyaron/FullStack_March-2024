import express from 'express';
import {AddProductToCart} from '../controller/UserCart';
import {ViewUserCart} from '../controller/UserCart';
import {RemoveProductFromCart} from '../controller/UserCart';

const router = express.Router()

router.post('/add-to-cart',AddProductToCart)
router.get('/view-cart', ViewUserCart)
router.delete('/remove-from-cart', RemoveProductFromCart)

export default router;