import express from 'express';
import {get} from 'http';
import { getAllPets } from '../controllers/pets/petPetsCont';
const router = express.Router();

router.get('/get-all-pets', getAllPets);

export default router