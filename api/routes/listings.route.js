
// imports
const express = require('express');
const router = express.Router();
const listingController = require('../controllers/listing.controller.js');

// routes 

// calls to /api/users/
router.route('/')

router.post('/', listingController.create_listing);

router.get('/', listingController.list_listings);

router.get('/:id', listingController.find_listing);

router.put('/:id', listingController.update_listing);

router.delete('/:id', listingController.delete_user);

// exports
module.exports = router;