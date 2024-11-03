import { NextFunction } from "express";
import jwt from 'jwt-simple';
import 'dotenv/config'

export async function checkCreator(req: any, res: any, next: NextFunction) {
    try {

        const secret = process.env.ADMINPASSWORD as string;
        const adminSecretName = process.env.ADMINSECRETNAME as string;
        const { userId } = req.cookies;
        if (!userId) {
            res.status(401).send({ error: 'User not found' });
            return;
        } 
        const user = jwt.decode(userId, secret);
        if (!user) {
            res.status(401).send({ error: 'User not found' });
            return;
        }
        const adminName = user.username;
        if(adminName === adminSecretName){
            next();
        }else{
            res.status(401).send({ error: 'אתה לא סודי מספיק' });
        }
    } catch (error) {
        console.error(error);
        res.send(error);

    }
}