import { User } from "../../model/users/usersModel";
import { Request ,Response } from 'express';

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        console.log(email, password)

        const user = await User.findOne({ email, password });
        //console.log(user)

        if (user) {
            res.cookie('userId', user._id, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 3 });
            res.status(200).send({ ok:true });
        } else {
            res.status(401).send({ error: 'אימייל או סיסמא אינם נכונים' });
        }

    } catch (error) {
        console.error(error)
        res.status(500).send(error);

    }
}
export async function register(req:any,res:any) {
    try {
        const { userName, email,password,pronounce,birthday} = req.body
        if (!userName ||!email ||!password||!pronounce||!birthday) throw new Error("Missing required fields")
        const user = new User({ userName, email,password,pronounce,birthday })
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

export async function logout(req: Request, res: Response) {
    try {
        res.clearCookie('userId', { httpOnly: true });
        res.status(200).send({ ok: true });
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}