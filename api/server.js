
// imports
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3030;

// routers
const userRoutes = require('./routes/users.route');
const listingRoutes = require('./routes/listings.route');

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
app.use('/api/users', userRoutes);
app.use('/api/listings', listingRoutes);

app.listen(port, () => {
    console.log('🌍 Server listening on port:', port);
});
