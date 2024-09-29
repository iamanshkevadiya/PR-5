const mongoose = require("mongoose");

const dbconncet = async (req, res) => {
        await mongoose.connect("mongodb://localhost:27017/movieDB");
        console.log("Connected to MongoDB");
}

module.exports = dbconncet;