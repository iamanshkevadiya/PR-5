const {Router} = require('express');
const { signup, login, deleteUser, getusers } = require('../controllers/user.controller');
const { validUser, validLogin } = require('../middlewares/user.middeware');

const userRouter = Router();

userRouter.get('/signup', getusers )
userRouter.post('/signup',validUser, signup);
userRouter.post('/login' ,validLogin, login);
userRouter.delete('/delete/:id' , deleteUser)

module.exports = userRouter;
