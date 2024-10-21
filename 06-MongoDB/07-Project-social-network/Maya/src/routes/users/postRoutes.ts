import express from "express";
import { addPost } from "../../controllers/posts/addPost";


const router = express.Router();

router.post("/add-post", addPost);

export default router;
