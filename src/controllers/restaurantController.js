const { getAllRestaurants } = require('../services/mongodb/getRestaurants');

const fetchRestaurants = async (req, res) => {
    console.log("Getting all restaurants");
    try{
        const restaurants = await getAllRestaurants();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching restaurants', error});
    }
}

module.exports = { fetchRestaurants };