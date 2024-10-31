import { NextFunction } from "express";

export async function deleteCheck(req: any, res: any, next: NextFunction){
    try {
        const user = req.user;
        const admin = user.isAdmin;

        if (!admin) {
            return res.status(403).send({ error: 'You are not an admin' });
        }

        next();
    } catch (error) {
        console.error(error);
        res.send(error);
    }
}