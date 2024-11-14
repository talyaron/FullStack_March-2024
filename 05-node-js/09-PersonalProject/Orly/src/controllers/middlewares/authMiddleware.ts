import{ Request, Response, NextFunction } from 'express';   
import jwt from 'jwt-simple';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        const decoded = jwt.decode(token, process.env.JWT_SECRET as string );
       (req as any).user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized' }); 
    }
};  

export async function validateUser(req: any, res: any, next: NextFunction) {
    try {

        const secret = process.env.SECRET as string;
      
        const { userId } = req.cookies;
        console.log("checkUser", userId);
        if (!userId) {
            res.status(401).send({ error: 'User not found' });
            return;
        } 
    //    jwt decode
        const user = jwt.decode(userId, secret);
        console.log(user);

        if (!user) {
            res.status(401).send({ error: 'User not found' });
            return;
        }

        req.userId = user.userId;
        req.role = user.role;  
        next();

        
       
    } catch (error) {
        console.error(error);
        res.send(error);

    }
}

