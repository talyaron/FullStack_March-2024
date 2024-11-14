import { Request, Response } from 'express';
import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';
import {User} from '../../model/user';
import generateToken from '../../utils/generateToken';


const JWT_SECRET = process.env.JWT_SECRET as string;


// User Registration
export const registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const userExists = await User.findOne({ email });
  
    if (userExists) return res.status(400).json({ message: 'User already exists' });
  
    const user = await User.create({ username, email, password });
  
    if (user) {
      res.status(201).json({ _id: user._id, email: user.email, token: generateToken });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  };
  
// User Login
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { userId: user._id, iat: Date.now() };
            const token = jwt.encode(payload, JWT_SECRET);
            
            res.json({ message: 'Login successful', token: generateToken });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};

