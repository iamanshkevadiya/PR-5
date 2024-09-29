const { Router } = require("express");
const { createMovie, upadateMovie, ratingMovie } = require("../controllers/movie.controller");

const multer = require("multer");

const storage = multer.diskStorage({
    destination: "MOVIE",
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });
const movieRouter = Router();

movieRouter.post("/create", upload.single("file"), createMovie);
movieRouter.patch("/update/:id", upadateMovie);
movieRouter.patch("/rating/:id", ratingMovie)

// multer
movieRouter.post("/upload", upload.single("file"), (req, res) => {
    res.send(`File uploaded successfully: ${req.file.filename}`);
});
module.exports = movieRouter;