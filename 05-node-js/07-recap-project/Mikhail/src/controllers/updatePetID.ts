import {pets }from '../../src/model/petModel'


export function updatePetID(req:any,res:any){
    try {
    
        const {petID} = req.params;
        const {updatePet} = req.body;
        console.log(petID);
            console.log(updatePet);
        
        if (!petID ) throw new Error("bad pet ID");
        if(!updatePet) throw new Error("bad update info")
            
            
        const petsIndex = pets.findIndex(pet => pet.id === petID);
        if (petsIndex === -1) throw new Error("PET not found");
    
        pets[petsIndex].setAge(updatePet.age);
        pets[petsIndex].setPrice(updatePet.price);
        pets[petsIndex].setSpecies(updatePet.species);
        pets[petsIndex].setName(updatePet.name);
        

    
        res.send({ok : 'all good'} )
      } catch (error:any) {
        console.error(error)
        res.send({ ok: false, error: error.message })
      }
}