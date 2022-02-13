
// import Model
const mongoose = require('mongoose');
const userModel = require('../schema/user_schema');

// Exports
exports.list_users = (req, res) => {

    console.log('GET to /api/users');

    userModel.find({ }, (err, users) => {
        if (err) {
            res.send('Error fetching users');
            console.log('Error fetching users');
        } else {
            res.json(users);
            console.log(users);
        }
    });
};

exports.find_user = (req, res) => {
    res.send('NOT IMPLEMENTED - FIND USER');
    console.log('NOT IMPLEMENTED - FIND USER');
};

exports.create_user = (req, res) => {
    console.log('POST to /api/users');
    let newUser = new userModel;
    newUser._id = mongoose.Types.ObjectId();
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    console.log(newUser);
    newUser.save((err) => {
        if (err) {
            res.send('Error adding new user');
            console.log('Error adding new user')
        } else {
            res.send(newUser);
            console.log('Added new user')
        }
    })
}

exports.update_user = (req, res) => {
    res.send('NOT IMPLEMENTED - UPDATE USER');
    console.log('NOT IMPLEMENTED - UPDATE USER');
};

exports.delete_user = (req, res) => {
    userModel.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send("Error deleting");
            console.log("Error deleting");
        } else {
            res.send('Deleted user');
            console.log('Deleted user');
        }
    });
}