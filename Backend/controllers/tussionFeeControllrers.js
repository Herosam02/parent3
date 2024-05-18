const Tussion = require('../models/tussionFeeModel');

// Create operation
exports.createTussion = async (req, res) => {
    try {
        const { amount, name } = req.body;
        const Tussion = new Tussion ({ amount, name });
        const newTussion = await Tussion.create(req.body);
        res.status(201).json(newTussion);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Read operation - Get all tussions
exports.getAllTussions = async (req, res) => {
    try {
        const tussions = await Tussion.find();
        res.status(200).json(tussions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update operation
exports.updateTussion = async (req, res) => {
    try {
        const updatedTussion = await Tussion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTussion) {
            return res.status(404).json({ message: 'Tussion not found' });
        }
        res.status(200).json(updatedTussion);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete operation
exports.deleteTussion = async (req, res) => {
    try {
        const deletedTussion = await Tussion.findByIdAndDelete(req.params.id);
        if (!deletedTussion) {
            return res.status(404).json({ message: 'Tussion not found' });
        }
        res.status(200).json({ message: 'Tussion deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};