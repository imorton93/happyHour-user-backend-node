const mongoose = require('mongoose');

//times Schema for happy hour menus
const happyTimesSchema = new mongoose.Schema({
    allDay: Boolean,
    from: String,
    to: String,
    description: String,
    days: [Number],
});


module.exports = { happyTimesSchema }