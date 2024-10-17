import { Request, Response } from "express";
import { User  }  from '../../src/model/userModel';
export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        console.log(email, password);

        const user = await User.findOne({ email, password });
        console.log(user);

        if (user) {
            res.cookie('userId', user._id, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 1 });
            res.status(200).send({ ok: true });
        } else {
            res.status(401).send({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal server error' });
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

        // Save new user
        const user = new User({ email, password, name });
        await user.save();

        res.status(200).send({ ok: true });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal server error' });
    }
}