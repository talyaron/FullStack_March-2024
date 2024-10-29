import { NextFunction } from "express";
import { User } from "../../model/users/userModel";

export async function checkAdmin(req: any, res: any, next: NextFunction) {
    if (req.user && req.user.isAdmin) {
        next();
    } else {    
    {
        res.status(401).send({ error: 'Unauthorized' });
        return;                                                     
    }
}
};