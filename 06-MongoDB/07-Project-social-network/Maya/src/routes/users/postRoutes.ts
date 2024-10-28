import express from "express";
import { addPost } from "../../controllers/posts/addPost";
import { getAllPosts } from '../../controllers/posts/getAllPosts';



const router = express.Router();

router.post("/add-post", addPost);
router.get('/all-posts', getAllPosts);



export default router;
