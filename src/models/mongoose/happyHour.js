const mongoose = require('mongoose');
const { foodSchema } = require('./food.js');
const { drinkSchema } = require('./drinks.js');
const { happyTimesSchema } = require('./happyHourTimes.js');

//happy hour schema
const happyHoursSchema = new mongoose.Schema({
    hasDeals: Boolean,
    url: String,
    times: [happyTimesSchema],
    drinks: [drinkSchema],
    food: [foodSchema],
});


module.exports = { happyHoursSchema }