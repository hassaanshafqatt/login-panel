const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const mongoURI = 'mongodb+srv://db-mongodb-nyc3-35913-09967518.mongo.ondigitalocean.com';

mongoose.connect(mongoURI)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Your other backend code goes here