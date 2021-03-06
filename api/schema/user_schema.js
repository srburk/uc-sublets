
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    schoolYear: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    listings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'listing'
    }]
});

const user = (module.exports = mongoose.model('user', userSchema));