const mongoose = require('mongoose');
const { happyHoursSchema } = require('./happyHour.js');
const { dailySpecialsSchema } = require('./dailySpecials.js');

//day Schema to be held in daily specials
const dealsSchema = new mongoose.Schema({
    happyHour: happyHoursSchema,
    dailySpecials: dailySpecialsSchema,
});


module.exports = { dealsSchema }