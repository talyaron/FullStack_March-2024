import {pets }from '../../src/model/petModel'
import { PetModel } from '../../src/model/petModel';


export async function deletePetID(req:any,res:any){
    try {
    
        const {petID} = req.params;
        
    
        if (!petID) throw new Error("bad pet ID");
    
        const deletedPet = await PetModel.findByIdAndDelete(petID);
        if (!deletedPet) throw new Error("pet not found");  
    
        const updatedPets = await PetModel.find();  // Fetch all pets after deletion
        res.send({ ok: true, pets: updatedPets });
      } catch (error:any) {
        console.error(error)
        res.send({ ok: false, error: error.message })
      }
}