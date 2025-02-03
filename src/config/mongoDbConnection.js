const mongoose = require('mongoose');
require('dotenv').config();


try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log('connected to mongodb');
} catch (error) {
    handleError(error);
}


module.exports = { mongoose }