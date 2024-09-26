import express from "express";
import { addPlayer, updatePlayer } from "../controllers/players/setPlayersCont";
import { getAllPlayers } from "../controllers/players/getPlayersCont";
import { getPlayersById } from "../controllers/players/getPlayersByIdCont";
const router = express.Router();

router.get("/get-all-players", getAllPlayers);
router.post("/add-player", addPlayer);
router.get("/get-playerId", getPlayersById);
router.put("/update-player", updatePlayer);
export default router;
