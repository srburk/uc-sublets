
// import Model
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passport = require('passport');
const userModel = require('../schema/user_schema');

require('../config/passport')(passport); 

// Exports
exports.list_users = (req, res) => {

    console.log('GET to /api/users');

    userModel.find({ }, (err, users) => {
        if (err) {
            res.send('Error fetching users');
            console.log('Error fetching users');
        } else {
            res.json(users);
            // console.log(users);
        }
    });
};

exports.find_user = (req, res) => {
    console.log('GET to /api/users/ID');

    userModel.findById(req.params.id, (err, user) => {
        if (err) {
            res.send('Error finding user by ID');
            console.log('Error finding user by ID');
        } else {
            res.json(user);
        }
    })
};

// internal API only
exports.find_user_by_email = (email) => {
    userModel.findOne({email: email}, (err, user) => {
        if (err) {
            console.log('Email not found');
        } else {
            return user;
        }
    })
}

exports.login_user = (req, res) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/',
    });
}

exports.create_user = (req, res) => {
    console.log('POST to /api/users');

    const {firstName, lastName, email, password, schoolYear } = req.body;

    let newUser = new userModel;
    newUser._id = mongoose.Types.ObjectId();
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.email = email;
    newUser.schoolYear = schoolYear;

    // encrypt user password
    bcrypt.genSalt(10, (err,salt)=> {
        bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save((err) => {
                if (err) {
                    console.log('Error adding new user')
                } else {
                    console.log('Added new user')
                    res.send('Success!')
                }
            })
        });
    });

    
}

exports.update_user = (req, res) => {
    console.log('PUT to /api/users/ID');

    userModel.findByIdAndUpdate(req.params.id, { 
        firstName: req.body.firstName, 
        lastName: req.body.lastName, 
        email: req.body.email, 
        schoolYear: req.body.schoolYear, 
        $push:{ 'listings' : req.body.listing }
    }, (err) => {
        if (err) {
            res.send('Error updating user');
            console.log('Error updating user');
        } else {
            res.send('Updated user');
            console.log('Updated user');
        }
    });
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