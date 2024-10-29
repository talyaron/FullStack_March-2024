import { NextFunction } from "express";
import { User } from "../../model/users/userModel";

export async function isAdmin(req: any, res: any, next: NextFunction) {
    try {
      
        const { userId } = req.cookies;
        console.log(userId);

        const userDB = await User.findById(userId);
        if(userDB?.isAdmin==true){
           
            next();
            
        }

        else {
            res.status(401).send({ error: 'User not found' });
            return;
        } 

     

        
       
    } catch (error) {
        console.error(error);
        res.send(error);

    }
}