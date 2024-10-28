import express from "express";
import { login, register } from "../../controllers/users/setUser";
import { getUser } from "../../controllers/users/getUser";
import { 
    updateProfileImage, 
    updateProfile, 
    getUserPosts
} from "../../controllers/users/profileController";


const router = express.Router();

router.post("/login", login).post("/register", register).get("/getUser", getUser);
router.post("/updateProfileImage", updateProfileImage)
router.post("/updateProfile", updateProfile)
router.get("/getUserPosts", getUserPosts)
router.post("/logout", (req, res) => {
    res.clearCookie('userId');
    res.status(200).json({ ok: true });
});



export default router;