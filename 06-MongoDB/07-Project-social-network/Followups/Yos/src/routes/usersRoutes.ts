import express from 'express';
import { addUser } from '../controllers/users/setUser';



const router = express.Router()
router.post('/add-user', addUser)


export default router