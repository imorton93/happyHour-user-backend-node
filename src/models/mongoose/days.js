const mongoose = require('mongoose');
const { foodSchema } = require('./food.js');
const { drinkSchema } = require('./drinks.js');
const { dailyTimesSchema } = require('./dailyTimes.js');

//day Schema to be held in daily specials
const daysSchema = new mongoose.Schema({
    day: {
        type: Number,    //number from range of 0-6
        require: true
    },   
    hasDeals: { 
        type: Boolean,
        require: true,
    },
    times: [dailyTimesSchema],
    drinks: [drinkSchema],
    food: [foodSchema],
});


module.exports = { daysSchema }