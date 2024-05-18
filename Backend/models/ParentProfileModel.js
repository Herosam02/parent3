const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
    parentName: { type: String, required: true },
    parentNumber: { type: String },
    parentAddress: { type: String, required: true },
    parentEmail: { type: String, required: true },
    number: { type: String },
});

module.exports = mongoose.model('Parent', parentSchema);