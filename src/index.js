const express = require("express");
require('dotenv').config();
const { mongoose } = require("./config/mongoDbConnection");
const { fetchRestaurants } = require("./controllers/restaurantController");


const cors = require("cors");

const PORT = process.env.PORT || 3001

const app = express();

// enable cors
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

app.get("/api", fetchRestaurants);