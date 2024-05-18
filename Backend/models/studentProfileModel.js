const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId: { type: String, required: true, unique: true },
    number: { type: String},
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    dateOfBirth: { type: Date},
    // id: '662b9e02a9d91367b7e5ec49',
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;