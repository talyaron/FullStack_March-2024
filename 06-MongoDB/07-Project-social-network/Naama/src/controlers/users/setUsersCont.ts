import { User } from "../../model/users/usersModel";
import { Request, Response } from 'express';

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        console.log(email, password)

        const user = await User.findOne({ email, password });
        console.log(user)

        if (user) {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5174');
            res.setHeader('Access-Control-Allow-Credentials', 'true');
            res.cookie('userId', user._id);
            res.status(200).send({ ok: true, user });
        } else {
            res.status(401).send({ error: 'אימייל או סיסמא אינם נכונים' });
        }

    } catch (error) {
        console.error(error)
        res.status(500).send(error);

    }
}
export async function register(req: any, res: any) {
    try {
        const { userName, email, password, pronounce, birthday } = req.body
        if (!userName || !email || !password || !pronounce || !birthday) throw new Error("Missing required fields")
        const user = new User({ userName, email, password, pronounce, birthday })
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ error: 'משתמש קיים עם אימייל זה' })
        }
        await user.save()
        res.status(200).send({ ok: true });
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}