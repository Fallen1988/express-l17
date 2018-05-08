const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    description: {
        type: String,
    },
    title: {
        type: String,
        required: [true],
        minlength: 3,
    },
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    createdById: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

module.exports = { schema };