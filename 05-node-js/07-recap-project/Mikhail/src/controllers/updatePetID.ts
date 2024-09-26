import {pets }from '../../src/model/petModel'


export function updatePetID(req:any,res:any){
    try {
    
        const {petID} = req.params;
        const {price,species,name,age} = req.body;
        console.log(petID);
            
        
        if (!petID ) throw new Error("bad pet ID");
        
            
            
        const petsIndex = pets.findIndex(pet => pet.id === petID);
        if (petsIndex === -1) throw new Error("PET not found");
    
        if(age)pets[petsIndex].setAge(age);
        if(price)pets[petsIndex].setPrice(price);
        if(species)pets[petsIndex].setSpecies(species);
        if(name) pets[petsIndex].setName(name);
        

    
        res.send({ok : 'all good'} )
      } catch (error:any) {
        console.error(error)
        res.send({ ok: false, error: error.message })
      }
}