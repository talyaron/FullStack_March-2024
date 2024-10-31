import express from "express";
import { getPets } from "../../controllers/pets/getPets";
import { deletePet } from "../../controllers/pets/deletePet";
import { isAdmin } from "../../controllers/middlwares/isAdmin";

const router = express.Router();

router.get("/get-pets", getPets);
router.delete("/delete-pet/:petId",isAdmin, deletePet);

export default router;