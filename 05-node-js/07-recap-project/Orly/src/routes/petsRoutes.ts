import express from 'express'
import {get} from 'http';
import {  getPetByID, updatePet, deletePet } from '../controller/getPetsCont';
import{getAllPets} from '../controller/getPetsCont';
import { addPet } from '../controller/setPetsCont';
const router = express.Router()

router.get('/get-all-pets', getAllPets);
router.post('/setPets', addPet);  
router.get('/pets/:id', getPetByID);    
router.put('/pets/:id', updatePet);      
router.delete('/pets/:id', deletePet);

export default router;

