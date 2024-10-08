
import express from 'express';
import { getAllPets } from '../controllers/getPetsCont';
import {addPet} from '../controllers/setPets'
//import { getPetID } from '../controllers/getPetID';
import { updatePetID } from '../controllers/updatePetID';
import { deletePetID } from '../controllers/deletePetID';
import { PetModel } from '../model/petModel';

const router = express.Router()

router.get('/get-all-pets', getAllPets)
router.post('/add-pet',addPet)
router.get('/get-pet-by-species/:species',PetModel.bySpecies)
router.put('/update-pet-id/:petId',updatePetID)
router.delete('/delete-pet-id',deletePetID)
export default router