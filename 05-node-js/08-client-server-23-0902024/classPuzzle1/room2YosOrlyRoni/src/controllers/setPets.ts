import { Pet ,pets} from "../model/petModel";
export function addPet(req:any, res:any){
    try {
        
        const {name,species,age,price}=req.body;
        if(!name || !species || !age || ! price) {
            return res.status(400).send("missing data")
        }
        const newPet=new Pet(name,species,age,price);
        pets.push(newPet);
        res.send({newPet,ok:true});
    } catch (error:any) {
        console.error(error);
        
    }
}