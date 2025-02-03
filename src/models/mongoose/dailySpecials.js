const mongoose = require('mongoose');
const { daysSchema } = require('./days.js');

//dailySpecials schema
const dailySpecialsSchema = new mongoose.Schema({ 
    hasDeals: { 
        type: Boolean,
        require: true,
    },
    days: [daysSchema]
});


module.exports = { dailySpecialsSchema }