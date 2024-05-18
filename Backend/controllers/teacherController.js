const Teacher = require('../models/teacherModel');

// Function to create a new teacher
const createTeacher = async (req, res) => {
    try {
        const { firstName, lastName, Gender, Date_of_Birth, Place_of_Birth, Local_Govt, Community, state, Qualification, year_goin } = req.body;
        const newTeacher = new Teacher({ firstName, lastName, Gender, Date_of_Birth, Place_of_Birth, Local_Govt, Community, state, Qualification, year_goin });
        const savedTeacher = await newTeacher.save();
        res.status(201).json(savedTeacher);
    } catch (error) {
        console.error("Error creating teacher:", error);
        res.status(500).json({ error: "Failed to create teacher" });
    }
};
// Function to get all teachers
const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
    } catch (error) {
        console.error("Error fetching teachers:", error);
        res.status(500).json({ error: "Failed to fetch teachers" });
    }
};

// Function to update a teacher by ID
const updateTeacher = async (req, res) => {
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTeacher) {
            return res.status(404).json({ error: "Teacher not found" });
        }
        res.status(200).json(updatedTeacher);
    } catch (error) {
        console.error("Error updating teacher by ID:", error);
        res.status(500).json({ error: "Failed to update teacher" });
    }
};

// Function to delete a teacher by ID
const deleteTeacher = async (req, res) => {
    try {
        const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
        if (!deletedTeacher) {
            return res.status(404).json({ error: "Teacher not found" });
        }
        res.status(200).json({ message: "Teacher deleted successfully" });
    } catch (error) {
        console.error("Error deleting teacher by ID:", error);
        res.status(500).json({ error: "Failed to delete teacher" });
    }
};

module.exports = {
    createTeacher,
    getAllTeachers,
    updateTeacher,
    deleteTeacher
};