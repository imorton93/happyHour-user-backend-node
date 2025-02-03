const mongoose = require('mongoose');

//food Schema
const foodSchema = new mongoose.Schema({
    name: String,
    price: Number, //represents price in cents
    description: String,
});


module.exports = { foodSchema }