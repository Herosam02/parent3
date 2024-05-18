const Class = require('../models/classModel');

// Create operation
exports.createClass = async (req, res) => {
    try {
        const { teacher, subject, grade_level, room_number, Schedule_day, class_start_time, class_end_time, teacher_name, subject_name} = req.body;
        const Class = new Class({ teacher, subject, grade_level, room_number, Schedule_day, class_start_time, class_end_time, teacher_name, subject_name });
        const newClass = await Class.create(req.body);
        res.status(201).json(newClass);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Read operation - Get all classes
exports.getAllClass = async (req, res) => {
    try {
        const classes = await Class.find();
        res.status(200).json(classes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update operation
exports.updateClass = async (req, res) => {
    try {
        const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClass) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.status(200).json(updatedClass);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete operation
exports.deleteClass = async (req, res) => {
    try {
        const deletedClass = await Class.findByIdAndDelete(req.params.id);
        if (!deletedClass) {
            return res.status(404).json({ message: 'Class not found' });
        }
        res.status(200).json({ message: 'Class deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// module.exports = {
//     createClass,
//     getAllClass,
//     updateClass,
//     deleteClass
// }