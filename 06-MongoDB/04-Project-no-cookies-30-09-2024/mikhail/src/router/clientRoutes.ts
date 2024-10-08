import express from 'express';
import { addClient } from '../controller/addClient';
const router = express.Router()

router.post('/add-client', addClient)

export default router