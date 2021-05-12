const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const params = {
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  }

  const newUser = await usersService.add(params)

  res.status(201)
  res.json(newUser)
})

module.exports = router;
