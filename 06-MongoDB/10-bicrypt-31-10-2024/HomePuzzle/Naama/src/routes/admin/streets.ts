import express from "express";
import { setStreet } from "../../controllers/houses/setStreetsControl";
import { checkCreator } from "../../controllers/admin/middleware/adminLoginMid";
const router = express.Router();

router.post('create-street',checkCreator,setStreet);

export default router;