import { Pet ,pets} from "../model/petModel";
export function addPet(req:any, res:any){
    try {
        
        const {name,species,age,price,imageURL}=req.body;
        console.log(req.body)
      
        if(!name || !species || !age || ! price || !imageURL) {
            console.log("im here")
            return res.status(400).send("missing data")
        }
        const newPet=new Pet(name,species,age,price,imageURL);
        pets.push(newPet);
        console.log(newPet)
        res.send({newPet,ok:true});
    } catch (error:any) {
        console.error(error);
        
    }
}