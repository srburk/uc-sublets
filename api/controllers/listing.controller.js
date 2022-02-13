
const mongoose = require('mongoose');
const listingModel = require('../schema/listing_schema');

exports.list_listings = (req, res) => {
    console.log('NOT IMPLEMENTED - LIST LISTINGS');
    res.send('NOT IMPLEMENTED - LIST LISTINGS');
};

exports.find_listing = (req, res) => {
    console.log('NOT IMPLEMENTED - FIND LISTINGS');
    res.send('NOT IMPLEMENTED - FIND LISTINGS');
};

exports.create_listing = (req, res) => {
    console.log('POST to /api/listings');
    let newListing = new listingModel;
    newListing._id = mongoose.Types.ObjectId();
    newListing.name = req.body.name;
    newListing.userID = req.body.userID;
    console.log(newListing);
    newListing.save((err) => {
        if (err) {
            res.send('Error adding new listing');
            console.log('Error adding new listing')
        } else {
            res.send(newListing);
            console.log('Added new listing')
        }
    });
}

exports.update_listing = (req, res) => {
    res.send('NOT IMPLEMENTED - UPDATE LISTING');
    console.log('NOT IMPLEMENTED - UPDATE LISTING');
}

exports.delete_user = (req, res) => {
    res.send('NOT IMPLEMENTED - DELETE LISTING');
    console.log('NOT IMPLEMENTED - DELETE LISTING');
}