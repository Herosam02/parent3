const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String},
    Gender: {type: String},
    Date_of_Birth: {type: Date},
    Place_of_Birth: {type: String, required: true},
    Local_Govt: {type: Date},
    Community: {type: String},
    state: {type: String, required: true},
    Qualification: {type: String},
    year_goin: {type: Date}
});

module.exports = mongoose.model('Teacher', teacherSchema);