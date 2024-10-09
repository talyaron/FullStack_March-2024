

import express from 'express';
import { getAllProducts } from '../controllers/productsController/getAllProducts';

const router = express.Router();

router.get('/get-all-products', getAllProducts)