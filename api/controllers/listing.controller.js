
// imports 
const mongoose = require('mongoose');
const listingModel = require('../schema/listing_schema');

// exports

// returns 1 listing
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

// returns 1 listing by ID
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

// executes search query
exports.search_listings = (req, res) => {
    /*
    Structure of request:
    user: "UserID"
    MinRent: INT
    MaxRent: INT
    MinDistance: INT
    NumRooms: INT
    availibility
    */

    // TODO: Populate user

    console.log('GET to /api/listings/query');

    // query builder

    let query = listingModel.find();

    if (req.query.user) {
        query.where('user').equals(req.query.user);
        console.log(req.query.user);
    }

    if (req.query.minRent && req.query.maxRent) {
        query.where('rent').gt(req.query.minRent).lt(req.query.maxRent);
    }

    if (req.query.distanceToCampus) {
        query.where('distanceToCampus').lt(req.query.distanceToCampus);
    }

    if (req.query.numRooms) {
        query.where('numRooms').equals(req.query.numRooms);
    }

    query.limit(10);
    
    query.exec((err, listings) => {
        if (err) {
            res.send('Error finding listings by query');
            console.log('Error finding listings by query');
        } else {
            res.json(listings);
            console.log(listings);
        }
    })
};

exports.create_listing = (req, res) => {
    console.log('POST to /api/listings');

    let newListing = new listingModel;
    
    newListing._id = mongoose.Types.ObjectId();
    newListing.name = req.body.name;
    newListing.user = req.body.user;
    newListing.rent = req.body.rent;
    newListing.startDate = req.body.startDate;
    newListing.endDate = req.body.endDate;
    newListing.address = req.body.address;
    newListing.numRooms = req.body.numRooms;
    newListing.photoURL = req.body.photoURL;
    newListing.distanceToCampus = req.body.distanceToCampus;

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

    listingModel.findByIdAndUpdate(req.params.id, { name: req.body.name, user: req.body.user }, (err) => {
        if (err) {
            res.send('Error finding listing by ID');
            console.log('Error finding listing by ID');
        } else {
            res.send('Successfully updated listing');
            console.log('Successfully updated listing');
        }
    });
}

exports.delete_listing = (req, res) => {

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