import express from 'express';
import { validateUser } from '../controllers/middlewares/authMiddleware';
import { loginUser } from '../controllers/middlewares/authController';
import * as authMiddleware from '../controllers/middlewares/authMiddleware';

const router = express.Router();

// User authentication routes
router.post('/register', validateUser);
router.post('/login', loginUser);

// User profile routes
router.get('/profile', authMiddleware.validateUser);




export default router;