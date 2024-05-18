const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({ 
    teacher: {type: String, required: true},
    subject: {type: String, required: true},
    grade_level: {type: String},
    room_number: {type: String},
    Schedule_day: {type: Date},
    class_start_time: {type: String},
    class_end_time: {type: String},
    teacher_name: {type: String},
    subject_name: {type: String},
    classId: { type: String, ref: 'Class', required: true, unique: true }
}, {timestamps: true});

module.exports = mongoose.model('Class', classSchema);