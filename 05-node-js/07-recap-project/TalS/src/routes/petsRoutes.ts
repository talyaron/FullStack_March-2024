import express from "express";
import { getAllPets } from "../controllers/getPetsCont";
import { addPet } from "../controllers/pets/setPetsCont";
const router = express.Router();

router.get("/get-all-pets", getAllPets);
router.post("/add-pet", addPet);

export default router;
