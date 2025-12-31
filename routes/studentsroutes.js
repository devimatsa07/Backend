import express from 'express';
import {getStudentsDetails, addStudents, updateStudents} from '../controllers/studentscontrollers.js';
const router = express.Router();

router.get('/get-students', getStudentsDetails);
router.post('/add-students', addStudents);
router.put('/update-students/:stdRoll', updateStudents);
// router.post('/add-student', addstudent);
// router.get('/get-student/:userid', getstudents);
export default router;