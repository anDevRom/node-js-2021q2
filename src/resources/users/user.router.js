const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.get(req.params.id)
  res.status(user ? 200 : 404)
  res.json(user)
})

router.route('/').post(async (req, res) => {
  const usersData = {
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  }

  const newUser = await usersService.add(usersData)

  res.status(201)
  res.json(newUser)
})

router.route('/:id').delete(async (req, res) => {
  const deletedUser = usersService.remove(req.params.id)

  res.status(deletedUser ? 204 : 404)
  res.json(deletedUser)
})

module.exports = router;
