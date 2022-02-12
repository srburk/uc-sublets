
// imports
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const  app = express();
const port = 3030;

// schema
let userModel = require('./schema/user_schema');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mongoose 
mongoose.connect('mongodb://localhost:27017/ucsublet');
var db = mongoose.connection;

db.on('open', () => {
    console.log('📦 Connected to mongoDB')
});

db.on('error', (error) => {
    console.log(error)
});

// routes
app.post('/api/users', (req, res) => {
    console.log('POST to /api/users');
    let newUser = new userModel;
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
    });
});

app.get('/api/users', (req, res) => {
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
});

app.delete('/api/users/:id', (req, res) => {
    userModel.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send("Error deleting");
            console.log("Error deleting");
        } else {
            res.send('Deleted user');
            console.log('Deleted user');
        }
    });
});

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    res.send('Success!');
    console.log('Get')
});

app.listen(port, () => {
    console.log('🌍 Server listening on port ', port);
});
