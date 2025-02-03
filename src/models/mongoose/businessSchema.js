const mongoose = require('mongoose');
const { dealsSchema } = require('./deals.js');

//business Schema
const businessSchema = new mongoose.Schema({
    yelpid: {
        type: String,    
        require: true
    },   
    name: {
        type: String,    
        require: true
    },
    address: {
        type: String,    
        require: true
    },
    url: String,
    city: {
        type: String,    
        require: true
    },
    province: {
        type: String,   
        require: true
    },
    deals: dealsSchema,
});

module.exports = { businessSchema }