import { Request, Response } from 'express';
import { User } from '../../model/users/userModel'
import jwt from 'jwt-simple';
import 'dotenv/config'
import bcrypt from 'bcrypt';



export async function login(req: Request, res: Response) {
    try {
        const secret = process.env.SECRET as string;
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user || typeof user.password !== 'string') {
            return res.status(401).send({ error: 'Invalid email or password' });
        }

        if (typeof password !== 'string') {
            return res.status(400).send({ error: 'Password must be provided' });
        }

        // Compare passwords
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).send({ error: 'Invalid email or password' });
        }

        // Create JWT payload and token
        const payload = {
            userId: user._id,
            email: user.email,
            name: user.name,
            role: user.isAdmin ? 'admin' : 'user'
        };
        const token = jwt.encode(payload, secret);

        res.cookie('userId', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });
        res.status(200).send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}


export async function register(req: Request, res: Response) {
    try {
        const { email, password, name } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ error: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user with hashed password
        const user = new User({ email, password: hashedPassword, name });
        await user.save();

        res.status(200).send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}