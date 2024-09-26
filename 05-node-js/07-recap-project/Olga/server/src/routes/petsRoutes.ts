import express from 'express'
import { getAllPets } from '../controllers/pets/getAllPetsCont';
import { addPet } from '../controllers/pets/setPetsCont';
const router = express.Router();

import { Pet, pets } from '../models/petsModel';
import { deletePet } from '../controllers/pets/deletePet';
import { updatePet } from '../controllers/pets/updatePet';

router.get('/get-all-pets', getAllPets);

router.post('/add-pet', addPet);

router.delete('/delete-pet/:id', deletePet);

router.put('/edit-pet/:id', updatePet)

router.get('/get-pet/:id', (req: any, res: any) => {
  try {
    const id = req.params.id;
    const pet = pets.find((pet) => pet.id === id);
    if (!pet) {
      res.status(404).send('Pet not found');
    } else {
      res.status(200).send(pet);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
})

// module.exports = router
export default router