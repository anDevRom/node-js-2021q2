import { dataBase } from '../../db';
import { ITask } from './task.interfaces';

export const getAllTasks = (): Array<ITask> => dataBase.getTasks();

export const setAllTasks = (newTasks: Array<ITask>): void => dataBase.setTasks(newTasks);