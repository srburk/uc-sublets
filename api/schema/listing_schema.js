
const mongoose = require('mongoose');

const listingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
        required: true
    }
});

const listing = (module.exports = mongoose.model('listing', listingSchema));