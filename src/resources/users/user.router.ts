import { Response, Router } from 'express';
import { User } from './user.model';
import {
  getAllUsersFromRepository,
  getUserFromRepository,
  addUserToRepository,
  updateUserFromRepository,
  removeUserFromRepository
} from './user.service';
import { IRequestUserParams } from './user.interfaces';

const router = Router()

router.route('/').get(async (res: Response) => {
  const users = await getAllUsersFromRepository();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await getUserFromRepository(req.params.id);
  res.status(user ? 200 : 404).json(user);
});

router.route('/').post(async (req, res) => {
  const usersData: IRequestUserParams = {
    name: req.body.name,
    login: req.body.login,
    password: req.body.password
  };

  const newUser = await addUserToRepository(usersData);

  res.status(201).json(newUser);
});

router.route(('/:id')).put(async (req, res) => {
  const updatedUser = updateUserFromRepository(req.params.id, req.body);
  res.status(updatedUser ? 200 : 404).json(updatedUser);
});

router.route('/:id').delete(async (req, res) => {
  const deletedUser = removeUserFromRepository(req.params.id);
  res.status(deletedUser ? 204 : 404).json(deletedUser);
});

module.exports = router;
