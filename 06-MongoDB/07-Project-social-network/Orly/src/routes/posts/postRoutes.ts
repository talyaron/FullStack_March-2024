import express from "express";
import { createPost, getAllPosts, likePost, addComment} from "../../controllers/post/postController";

const router = express.Router();

router
    .post("/create", createPost)
    .get("/getAllPosts", getAllPosts)
    .post("/:postId/like", likePost)
    .post("/:postId/comment", addComment);

export default router;