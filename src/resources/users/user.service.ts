import { IUser } from './user.model';
import { getAllUsers, setUsers, addUser } from './user.memory.repository';
import { User } from './user.model';
import { getAllTasks } from '../tasks/task.memory.repository';
import { IRequestUserParams } from './user.interfaces';

export const getAllUsersFromRepository = (): Array<IUser> => getAllUsers();

export const getUserFromRepository = (id: string): IUser | undefined => {
  const users = getAllUsers();

  return users.find((user: IUser) => user.id === id);
};

export const addUserToRepository = (params: IRequestUserParams): IUser => {
  const newUser = new User(params);

  addUser(newUser);

  return User.toResponse(newUser);
};

export const updateUserFromRepository = (id: string, params: IRequestUserParams): IUser | undefined => {
  const users = getAllUsers();
  const userForUpdate = users.find(user => user.id === id);

  Object.assign(userForUpdate, params);

  return userForUpdate;
};

export const removeUserFromRepository = (id: string): IUser | undefined => {
  const users = getAllUsers();
  const userForDelete = users.find(user => user.id === id);

  if (userForDelete) {
    const tasks = getAllTasks();
    tasks.forEach(task => {
      if (task.userId === id) {
        // eslint-disable-next-line no-param-reassign
        task.userId = null;
      }
    });

    const newUsers = users.filter(user => user.id !== id);

    setUsers(newUsers);
  }

  return userForDelete;
};