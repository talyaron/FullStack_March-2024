import {pets }from '../../src/model/petModel'
import { PetModel } from '../../src/model/petModel';


export async function getPetID(req:any,res:any){
    try {
    
        const {petID} = req.params;
        if (!petID) throw new Error("bad pet ID");
    
        const pet = await PetModel.findById(petID);
        if(!pet) throw new Error("pet not found");
        
    
        res.send(pet )
      } catch (error:any) {
        console.error(error)
        res.send({ ok: false, error: error.message })
      }
}