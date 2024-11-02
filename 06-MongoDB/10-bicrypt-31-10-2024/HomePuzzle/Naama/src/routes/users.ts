import express from "express";
import { getUser } from "../controllers/users/getUserControl";
import { checkUser } from "../controllers/middlewares/loginMid";
import { register } from "../controllers/users/setUserControl";
const router = express.Router();

router.post('register',register);
router.get('/get-user',checkUser,getUser);

export default router;
