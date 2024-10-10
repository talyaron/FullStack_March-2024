import express from 'express';
import{getAllProducts} from '../controller/Product';
import{GetProductByName} from '../controller/Product';
import{FindProductByCheapest} from'../controller/Product';

const router = express.Router()

router.get('/get-all-products', getAllProducts)
router.get('/get-product-by-name', GetProductByName)
router.get('/get-cheapest-product', FindProductByCheapest)

export default router;