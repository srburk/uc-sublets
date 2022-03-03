
const mongoose = require('mongoose');

const listingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user',
        required: true
    },
    rent: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    numRooms: {
        type: Number,
        required: true
    },
    photoURL: {
        type: String
    },
    distanceToCampus: {
        type: Number
    }
});

const listing = (module.exports = mongoose.model('listing', listingSchema));