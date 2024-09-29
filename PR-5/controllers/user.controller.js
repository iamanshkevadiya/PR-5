const User = require('../models/user.schema');

const signup = async (req, res) => {
    const { username, password, email } = req.body;
    const newUser = new User({ username, password, email });
    await newUser.save();
    res.status(201).send(newUser);
}

const getusers = async (req, res) => {
    const users = await User.find();
    res.send(users);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.send({ message: 'User deleted successfully' });
}

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (user) {
        res.send({ message: 'Logged in successfully' });
    } else {
        res.status(401).send({ error: 'Invalid username or password' });
    }

}


module.exports = { signup, login, deleteUser, getusers }