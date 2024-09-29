const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title : String,
    description : String,
    releaseDate : String,
    category :String,
    actors: [{ name: String }],
    image : [{ name: String}],
    ratings: [
        {
            value: Number,
            // min:0,
            // max: 10,
        },
    ],
    comments: [
        {
            text: String,
        },
    ],
    addedBy: String,
})

const movie = mongoose.model('Movie', movieSchema);
module.exports = movie;