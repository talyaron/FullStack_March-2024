import { User } from "../../model/user"; 
import { Recipe } from "../../model/recipe";

export async function getUser(req: any, res: any) {
    try {
        const userId= req.userId;   
        const user = await User.findById(userId);
        if(user){
            res.status(200).send({user:user});
        }
        else{
            res.status(401).send({error:'User not found'});
        }           
        
    } catch (error) {
       console.error(error);
       res.status(500).send(error); 
    }
};


export async function getUserRecipes(req: any, res: any) {  
    try {
        const userId= req.userId;   
        const recipes = await Recipe.find({user:userId});
        if(recipes){
            res.status(200).send({recipes:recipes});
        }
        else{
            res.status(401).send({error:'Recipe not found'});
        }           
        
    } catch (error) {
       console.error(error);
       res.status(500).send(error); 
    }
};