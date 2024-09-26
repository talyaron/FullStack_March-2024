import { pets} from '../model/petsModel'

export function getAllPets(req:any, res:any) {
    try {

        res.send({pets: pets});
    } catch (error) {
        console.error(error);
    }
}

export function getPetByID(req :any, res:any){
try {
    const pet = pets.find(p=> p.id === req.params.id);
    if(pet) {
        res.status(200).send(pet);
    } else {
        res.status(404).send({error: 'Pet not found'});
    }
} catch (error: any) {
    res.status(500).send({ error: 'Error retrieving pet', message: error.message});
}
}

export function updatePet(req: any, res: any) {
    try {
        const{ name, species, age, price } = req.body;
        const pet = pets.find(p => p.id === req.params.id);
        if(pet) {
            if(name) pet.name = name;
            if(species) pet.species = species;
            if(age) pet.yearOfBirth = new Date().getFullYear() - age;
            if(price) pet.price = price;
            res.status(200).send(pet);
        } else {
               res.status(404).send({error:'Pet not found'});
        }
    } catch (error: any) {
        res.status(500).send({error: 'Error updating pet', message: error.message});
    }
}

export function deletePet(req: any, res: any) {
   try {
    const petIndex = pets.findIndex(p => p.id === req.params.id);
    if(petIndex > -1){
        const deletedPet = pets.splice(petIndex, 1);
        res.status(200).send(deletedPet);
    } else {
        res.status(404).send({error: 'Pet not found'});
    }
   } catch (error: any) {
    res.status(500).send({ error: 'Error deleting pet', message: error.message });
   }
  }
