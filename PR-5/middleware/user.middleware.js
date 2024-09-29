const validUser = (req, res, next) => {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
        return res.status(400).send({ error: 'All fields are required' });
    }
    next();
};
const validLogin = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({ error: 'All fields are required' });
    }
    next();
};

module.exports = {validUser,validLogin,};