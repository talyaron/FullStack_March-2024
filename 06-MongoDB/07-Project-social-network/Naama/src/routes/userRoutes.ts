import express from 'express';
import { register, login } from '../controlers/users/setUsersCont';
const router = express.Router();

router.post('/register',register).post('/login',login);
router.get('/get-online-users')

export default router;