import mongoose from "mongoose";
import { login } from "../../controllers/setUser";


const router = express.Router()
router.post('/login', login);

export default router