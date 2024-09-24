import express from "express";
import {get} from 'http';
import { addPlayer } from "../controllers/players/setPlayersCont"
import { getAllPlayers } from "../controllers/players/getPlayersCont";
const router = express.Router();

router.get("/get-all-players",getAllPlayers)
router.post("/add-player", addPlayer)

export default router;

