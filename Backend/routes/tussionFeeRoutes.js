const express = require('express');
const router = express.Router();
const tussionFeeController = require('../controllers/tussionFeeControllrers');

router.post('/', tussionFeeController.createTussion);
router.get('/', tussionFeeController.getAllTussions);
router.put('/:id', tussionFeeController.updateTussion);
router.delete('/:id', tussionFeeController.deleteTussion);

module.exports = router;