import express from "express";
import { getPets } from "../../controllers/pets/getPets";


const router = express.Router();

router.get("/pets", getPets);


export default router;