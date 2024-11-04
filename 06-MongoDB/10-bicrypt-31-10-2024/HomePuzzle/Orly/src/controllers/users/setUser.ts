import { Request, Response } from 'express';
import { User } from '../../model/users/userModel'
import jwt from 'jwt-simple';
import 'dotenv/config'
const bcrypt = require('bcrypt');
const saltRounds = 10;


export async function login(req: Request, res: Response) {
    try {
        const secret = process.env.DB_PASSWORD as string; 
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send({ error: 'Invalid email or password' });
        }

        const payload = {
            userId: user._id,
            email: user.email,
            name: user.name,
            role: user.isAdmin ? 'admin' : 'user'
        };

        const payloadJWT = jwt.encode(payload, secret);

        res.cookie('userId', payloadJWT, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 }); // 1-day expiration
        res.status(200).send({ ok: true, message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Login error' });
    }
}



export async function register(req: Request, res: Response) {
    try {
        const { email, password, name } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ error: 'User already exists' });
        }

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Save the user with the hashed password to the database
        const newUser = new User({
            email,
            password: hashedPassword,
            name
        });

        await newUser.save();
        
        res.status(201).send({ ok: true, message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Error registering user' });
    }
}