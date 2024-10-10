import { addDepartment } from '../controllers/departmentController/addDepartment';
import { getAllDepartment } from '../controllers/departmentController/getAllDepartment';

import  express  from 'express';


const router = express.Router();

router.post('/add-department', addDepartment);
router.get('/get-departments', getAllDepartment);


export default router