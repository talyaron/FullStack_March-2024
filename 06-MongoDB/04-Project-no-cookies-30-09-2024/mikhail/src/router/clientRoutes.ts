import express from 'express';
import { addClient } from '../controller/addClient';
import { loginClient } from '../controller/loginClient';
const router = express.Router()

router.post('/add-client', addClient)
router.get('/login', loginClient)

export default router