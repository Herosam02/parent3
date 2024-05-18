const mongoose = require('mongoose');

const tussionFeeSchema = new mongoose.Schema({ 
    StudentId: {type: String, ref: 'TussionFee', required: true, unique: true },
    amount: {type: String, required: true},
    name: {type: String, required: true}
});

module.exports = mongoose.model('Tussion', tussionFeeSchema);