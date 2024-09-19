import { Pet, pets } from "../../model/petModel";

export function addpet(req:any,res:any){
    try {
        const {name,species,age,price} = req.body;
        if(!name||!species||!age||!price){
            return res.status(400).send("missing data")
        }
        const newpet = new Pet(name,species,age,price);
        pets.push(newpet);
        res.status(200).send({newpet,ok:true})
    } catch (error:any) {
        console.error(error)
        res.status(500).send(error.message)
    }
}