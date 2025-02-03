const mongoose = require('mongoose');

//Times schema for daily specials
const dailyTimesSchema = new mongoose.Schema({
    allDay: Boolean,
    from: String,
    to: String,
    description: String,
});


module.exports = { dailyTimesSchema }