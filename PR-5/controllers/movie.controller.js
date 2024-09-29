const Movie = require('../models/movie.schema');

const createMovie = async (req ,res)=>{
    if(req.file){
        req.body.img = req.file.path;
    }
    console.log(req.body.userid);
    let movie = await Movie.create(req.body);
    res.status(201).send(movie); 
};

const upadateMovie = async (req,res)=>{
    let {id} = req.params;
    let movie = await Movie.findByIdAndUpdate(id , req.body , {new: true});
    res.send(movie);
}

const ratingMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.send({ error: 'movie not found' });
    }
  
    const { rating } = req.body;
    movie.ratings.push({ value: rating });
    // await movie.create();
  
    res.send(movie);
}
module.exports = {createMovie, upadateMovie, ratingMovie};