import express from "express";

import StudentController from "../controllers/students.controller.js";

const router = express.Router();
const studentController = new StudentController();

// Select data from table
router.get("/", studentController.getStudents);
router.get("/search", studentController.getStudentsByName);

// Insert into table
router.post("/add", studentController.addStudent);

// DELETE
router.delete("/delete/:id", studentController.deleteStudent);

//UPDATE
router.put("/update/:id", studentController.updateStudent);

export default router;
