import express from 'express';
import { register, login, logout } from '../controlers/users/setUsersCont';
import { getUserIdCookie } from '../controlers/users/getUsersCont';
const router = express.Router();

router.post('/register',register).post('/login',login);
router.get('/get-user-id-cookie',getUserIdCookie);
router.put('/user-logout',logout);

export default router;