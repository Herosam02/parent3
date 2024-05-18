const express = require('express');
const router = express.Router();
const parentController = require('../controllers/parentProfileController');

// Create a new parent
router.post('/parents', parentController.createParent);

// Get all parents
router.get('/parents', parentController.getAllParents);

// // Update a parent by ID
router.put('/parents/:id', parentController.updateParent);

// // Delete a parent by ID
router.delete('/parents/:id', parentController.deleteParent);

module.exports = router;