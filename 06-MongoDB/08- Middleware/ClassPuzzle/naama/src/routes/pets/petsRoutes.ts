import express from "express";
import { getPets } from "../../controllers/pets/getPets";
import { deleteCheck } from "../../controllers/middlwares/deleteMid";
import { checkUser } from "../../controllers/middlwares/loginMid";
import { deletePetId } from "../../controllers/pets/setPetsCont";


const router = express.Router();

router.get("/get-pets", getPets);
router.delete("/delete-pet-id",checkUser,deleteCheck ,deletePetId);


export default router;