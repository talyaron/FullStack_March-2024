import { Pet } from "../../model/pets/petModel";
import { User } from "../../model/users/userModel";

export async function getUser(req: any, res: any) {
    try {
        const { userId } = req.cookies;
        console.log(userId);
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
}

export async function getUserPets(req: any, res: any) {
    try {
      //user id
      const user = req.user;
      console.log(user);

      const pets = await Pet.find({client:user._id});
      console.log(pets)
      
      res.send({ok:true, pets});
    } catch (error) {
        console.error(error);
        res.status(500).send({error});
    }
}