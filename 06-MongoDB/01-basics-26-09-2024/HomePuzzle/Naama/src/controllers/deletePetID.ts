import { PetModel } from "../model/petModel";

export async function deletePetID(req:any,res:any){
    try {
    
        const { petId } = req.body;
        console.log(req.body)

        // Delete the pet by its ID
        await PetModel.deleteOne(petId);
    
        res.send({ ok: true})
      } catch (error:any) {
        console.error(error)
        res.send({ ok: false, error: error.message })
      }
}