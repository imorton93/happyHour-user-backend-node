const mongoose = require('mongoose');
const { businessSchema } = require('./businessSchema');

const Business = new mongoose.model("Business", businessSchema);

module.exports = { Business }