import express from "express";
import { get } from "http";
import { addPlayer } from "../controllers/players/setPlayersCont";
import { getAllPlayers } from "../controllers/players/getPlayersCont";
import { getPlayersById } from "../controllers/players/getPlayersByIdCont";
const router = express.Router();

router.get("/get-all-players", getAllPlayers);
router.post("/add-player", addPlayer);
router.get("/players/get-playerId", getPlayersById);

export default router;
