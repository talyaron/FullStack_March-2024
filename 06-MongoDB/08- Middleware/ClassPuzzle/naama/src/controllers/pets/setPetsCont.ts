import { Pet } from "../../model/pets/petModel";

export async function deletePetId(req:any, res:any) {
    try {
        const petId = req.body.id;
        await Pet.findByIdAndDelete(petId);
        res.status(200).send({ok:true});
    } catch (error) {
        res.status(500).send({error,ok:false});
    }
    
}