import express from "express";
import { login, register } from "../../controllers/users/setUser";
import { addPost } from "../../controllers/posts/addPost";
import { getUser } from "../../controllers/users/getUser";

const router = express.Router();


router.post("/login", login).post("/register", register).get("/getUser", getUser);
router.post("/add-post", addPost);

export default router;
