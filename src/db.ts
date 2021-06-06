import { IUser } from './resources/users/user.model';
import { IBoard } from './resources/boards/board.interfaces';
import { ITask } from './resources/tasks/task.interfaces';

let usersDB: Array<IUser> = [];
let boardsDB: Array<IBoard> = [];
let tasksDB: Array<ITask> = [];

export const dataBase = {
  getUsers(): Array<IUser> {
    return usersDB;
  },

  addUser(user: IUser): void {
    usersDB.push(user);
  },

  setUsers(users: Array<IUser>): void {
    usersDB = users;
  },

  getBoards(): typeof boardsDB{
    return boardsDB;
  },

  createBoard(board: IBoard): void {
    boardsDB.push(board);
  },

  setBoards(boards: typeof boardsDB): void {
    boardsDB = boards;
  },

  getTasks(): typeof tasksDB{
    return tasksDB;
  },

  setTasks(tasks: typeof tasksDB): void {
    tasksDB = tasks;
  }
};