
// imports 
const e = require('express');
const mongoose = require('mongoose');
const listingModel = require('../schema/listing_schema');

// exports
exports.list_listings = (req, res) => {
    console.log('GET to /api/listings');

    listingModel.find({ }, (err, listings) => {
        if (err) {
            res.send('Error fetching listings');
            console.log('Error fetching listings');
        } else {
            res.json(listings);
            console.log(listings);
        }
    });
};

exports.find_listing = (req, res) => {
    console.log('GET to /api/listings/ID');

    listingModel.findById(req.params.id, (err, listing) => {
        if (err) {
            res.send('Error finding listing by ID');
            console.log('Error finding listing by ID');
        } else {
            res.json(listing);
            console.log(listing);
        }
    });
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
            res.json(newListing);
            console.log('Added new listing')
        }
    });
}

exports.update_listing = (req, res) => {
    console.log('PUT to /api/listings/ID');

    listingModel.findByIdAndUpdate(req.params.id, { name: req.body.name, userID: req.body.userID }, (err) => {
        if (err) {
            res.send('Error finding listing by ID');
            console.log('Error finding listing by ID');
        } else {
            res.send('Successfully updated listing');
            console.log('Successfully updated listing');
        }
    });
}

exports.delete_user = (req, res) => {

    console.log('DELETE to /api/listings/ID');

    listingModel.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send("Error deleting");
            console.log("Error deleting");
        } else {
            res.send('Deleted listing');
            console.log('Deleted listing');
        }
    });
}