import express from "express";
import {get} from 'http';
import { getAllPlayers } from "../controllers/getPlayersCont";
const router = express.Router();

router.get("/get-all-players",getAllPlayers)

export default router;

