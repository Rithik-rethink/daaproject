const routes = require('express').Router();
const users = require('./users');
const register = require('./register');
const login = require('./login');

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/users', users);
routes.use('/register', register);
routes.use('/login',login);

module.exports = routes;