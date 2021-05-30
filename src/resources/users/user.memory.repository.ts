import { IUser } from './user.model';
import { dataBase } from '../../db';

export const getAllUsers = (): Array<IUser> => dataBase.getUsers();

export const addUser = (user: IUser): void => dataBase.addUser(user);

export const setUsers = (users: Array<IUser>): void => dataBase.setUsers(users);
