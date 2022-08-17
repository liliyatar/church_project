const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('feedbacks', feedbackSchema);