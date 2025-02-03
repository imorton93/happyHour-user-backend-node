const mongoose = require('mongoose');

//Drink Schema
const drinkSchema = new mongoose.Schema({
    name: String,
    price: Number, //represents price in cents
    type: String,
    description: String,
});


module.exports = { drinkSchema }