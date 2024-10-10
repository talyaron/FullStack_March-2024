import express from 'express';
import { addClient } from '../controller/addClient';
import { loginClient } from '../controller/loginClient';
const router = express.Router()

router.post('/add-client', addClient)
router.post('/login', loginClient)

export default router