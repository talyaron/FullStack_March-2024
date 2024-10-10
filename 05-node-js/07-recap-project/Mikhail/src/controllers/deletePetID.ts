import {pets }from '../../src/model/petModel'
import { PetModel } from '../../src/model/petModel';


export async function deletePetID(req:any,res:any){
    try {
    
        const {id} = req.params;
        if (!id) throw new Error("bad pet ID");
    
        const deletedPet = await PetModel.findByIdAndDelete(id);
        if (!deletedPet) throw new Error("pet not found"); 
        const pets = await PetModel.find();
    
        res.send({ ok: true, pets })
      } catch (error:any) {
        console.error(error)
        res.send({ ok: false, error: error.message })
      }
}