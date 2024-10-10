
import express from 'express';
import { getAllPets } from '../controllers/getPetsCont';
import {addPet} from '../controllers/setPets'
import { getPetID } from '../controllers/getPetID';
import { updatePetID } from '../controllers/updatePetID';
import { deletePetID } from '../controllers/deletePetID';
import { getAllPetsSpecies } from '../controllers/getPetsCont';
import { getAllPetsUnderAge } from '../controllers/getPetsCont';

const router = express.Router()

router.get('/get-all-pets', getAllPets)
router.post('/add-pet',addPet)
router.get('/get-pet-id/:petID',getPetID)
router.put('/update-pet-id/:petID',updatePetID)
router.get('/get-pets-by-species/:species',getAllPetsSpecies)
router.get('/get-pets-under-age/:age',getAllPetsUnderAge);
router.delete('/delete-pet-id/:id',deletePetID)
export default router