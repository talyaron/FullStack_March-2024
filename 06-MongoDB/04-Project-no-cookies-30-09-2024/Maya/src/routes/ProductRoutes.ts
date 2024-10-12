
import express from 'express';
import { getAllPets, getAllPetsUnderAge } from '../controllers/coffee/getPetsCont';
import {addPet} from '../controllers/coffee/setPets'
import { getPetID } from '../controllers/coffee/getPetID';
import { updatePetID } from '../controllers/coffee/updatePetID';
import { deleteCoffeeID } from '../controllers/coffee/deletePetID';

const router = express.Router()

router.get('/get-all-pets', getAllPets)
router.post('/add-pet',addPet)
router.get('/get-pet-id/:petID',getPetID)
router.put('/update-pet-id/:petId',updatePetID)
router.get('/get-pets-under-age/:age',getAllPetsUnderAge);
router.delete('/delete-pet-by-id',deleteCoffeeID)
export default router