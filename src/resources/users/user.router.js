const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAllUsersFromRepository();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getUserFromRepository(req.params.id);
  res.status(user ? 200 : 404).json(user);
});

router.route('/').post(async (req, res) => {
  const usersData = {
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  };

  const newUser = await usersService.addUserToRepository(usersData);

  res.status(201).json(newUser);
});

router.route(('/:id')).put(async (req, res) => {
  const updatedUser = usersService.updateUserFromRepository(req.params.id, req.body);
  res.status(updatedUser ? 200 : 404).json(updatedUser);
});

router.route('/:id').delete(async (req, res) => {
  const deletedUser = usersService.removeUserFromRepository(req.params.id);
  res.status(deletedUser ? 204 : 404).json(deletedUser);
});

module.exports = router;
