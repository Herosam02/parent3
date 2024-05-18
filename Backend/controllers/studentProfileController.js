const Student = require('../models/studentProfileModel');

// Function to generate a unique student ID
function generateStudentId() {
    return 'S' + Math.floor(Math.random() * 10000);
}

// Create a new student
const createStudent = async (req, res) => {
    try {
        const { number, name, email, address, dateOfBirth } = req.body;
        const studentId = generateStudentId();
        const newStudent = await Student.create({ studentId, number, name, email, address, dateOfBirth });
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Read operation
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update operation
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// Delete operation
const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(204).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createStudent,
    getAllStudents,
    updateStudent,
    deleteStudent
};