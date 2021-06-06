import { getAllTasks } from './task.memory.repository';
import { Task } from './task.model';
import { ITask, IRequestTask } from './task.interfaces';

export const getAllTasksFromRep = (boardId: string): Array<ITask> => {
  const allTasks = getAllTasks();
  return allTasks.filter(task => task.boardId === boardId);
};

export const getTaskFromRep = (taskId: string): ITask | undefined => {
  const allTasks = getAllTasks();
  return allTasks.find(task => task.id === taskId);
};

export const createTask = (boardId: string, params: IRequestTask): ITask => {
  const newTask = new Task({...params, boardId});
  const allTasks = getAllTasks();
  allTasks.push(newTask);

  return newTask;
};

export const updateTask = (boardId: string, taskId: string, params: ITask): ITask => {
  const allTasks = getAllTasks();

  const taskForUpdate = allTasks.find(task => task.id === taskId);
  return Object.assign(taskForUpdate, params, { boardId });
};

export const removeTask = (taskId: string): ITask | undefined => {
  const allTasks = getAllTasks();
  let index = 0;

  const taskForDelete = allTasks.find((task, idx) => {
    index = idx;
    return task.id === taskId;
  });

  allTasks.splice(index, 1);

  return taskForDelete;
};