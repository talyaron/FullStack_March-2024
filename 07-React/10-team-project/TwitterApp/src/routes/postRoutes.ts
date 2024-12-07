import authMiddleware from "../middleware/authMiddleware" ; 
import express from "express";
import { uploadProfilePicture } from "../controllers/uploadPictureController";
import { getPosts } from "../controllers/Posts/getPosts";

const router = express.Router();
router.get('/getPosts', getPosts);

export default router;