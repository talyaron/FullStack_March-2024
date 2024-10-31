import { Request, Response, NextFunction } from 'express';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {   
    const user = req.User;
    if (user.role !== 'admin') {    
        return res.status(401).send({ error: 'Unauthorized' });
    }
    next();
};


