import express from 'express';
import { get } from 'http';
import { getAllPets } from '../controllers/pets/getPetsCont';
const router = express.Router();

router.get('/get-all-pets', getAllPets)

export default router