const express = require('express');
const app = express();
const path = require('path');
const dbconncet = require('./config/db');
const userRouter = require('./routes/user.route');
const movieRouter = require('./routes/movie.router');


const PORT = process.env.PORT || 8090;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/user',userRouter)
app.use('/movie',movieRouter)


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  dbconncet
});
