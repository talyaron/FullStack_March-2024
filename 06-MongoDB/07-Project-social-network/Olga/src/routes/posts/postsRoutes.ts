import express from "express";
import { addPost } from "../../controllers/posts/addPost";
import { getAllPosts } from "../../controllers/posts/getPosts";

const router = express.Router();

router.post("/add-post", addPost).get('/all-posts', getAllPosts);

export default router;