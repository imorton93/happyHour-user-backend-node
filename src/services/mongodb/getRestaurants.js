const { Business } = require('../../models/mongoose/businessModel');


getAllRestaurants = async () => {
    try {
        const restaurants = await Business.find({});
        return restaurants
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = { getAllRestaurants };