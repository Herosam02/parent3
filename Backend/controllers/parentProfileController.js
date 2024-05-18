const Parent = require('../models/ParentProfileModel');

// Controller functions for CRUD operations

// Create a new parent
const createParent = async (req, res) => {
    try {
        const { parentName, parentNumber, parentAddress, parentEmail, number } = req.body; 
        const parent = new Parent({ 
            parentName,
            parentNumber,
            parentAddress,
            parentEmail,
            number,
        });
        await parent.save();
        res.status(201).json(parent);
    } catch (error) {
        console.error("Error creating parent:", error)
        res.status(500).json({ message: 'Error failed to create parent' })
    }
}


// Read operation - Get all parents
const getAllParents = async (req, res) => {
    try {
        const parents = await Parent.find();
        res.json(parents);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// // Update operation
const updateParent = async (req, res) => {
    try {
        const parent = await Parent.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!parent) {
            return res.status(404).json({ message: 'Parent not found' });
        }
        res.json(parent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete operation
const deleteParent = async (req, res) => {
    try {
        const { id } = req.params;
        const parent = await Parent.findByIdAndDelete(id);
        if (!parent) {
            return res.status(404).json({ message: 'Parent not found' });
        }
        res.json({ message: 'Parent deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createParent,
    getAllParents,
    updateParent,
    deleteParent
};