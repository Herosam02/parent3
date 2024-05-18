const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

// Define routes
router.get('/', classController.getAllClass);

router.post('/', classController.createClass);

router.put('/:id', classController.updateClass);

router.delete('/:id', classController.deleteClass);

module.exports = router;
