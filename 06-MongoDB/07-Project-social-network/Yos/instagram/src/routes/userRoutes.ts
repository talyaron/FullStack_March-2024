const authMiddleware = require("../middleware/authMiddleware");

import express from "express";
import { uploadProfilePicture } from "../controllers/userController";
const router = express.Router();

router.post("/upload-profile-picture", authMiddleware, uploadProfilePicture);

module.exports = router;
export default router;