const express = require('express');
const router = express.Router();
const studentProfileController = require('../controllers/studentProfileController');

// Define routes
router.get('/', studentProfileController.getAllStudents);
router.post('/', studentProfileController.createStudent);
router.put('/:id', studentProfileController.updateStudent);
router.delete('/:id', studentProfileController.deleteStudent);

module.exports = router;