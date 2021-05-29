const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

/**
 * Return all tasks of board from repository
 * @param boardId {string} - Board id
 * @return {Array} - Array of all tasks of board
 */
const getAllTasksFromRep = (boardId) => {
  const allTasks = tasksRepo.getAllTasks();
  return allTasks.filter(task => task.boardId === boardId);
};

/**
 * Return task by id
 * @param taskId {string} - Task id
 * @return {Object} - Object representation of task
 */
const getTaskFromRep = (taskId) => {
  const allTasks = tasksRepo.getAllTasks();
  return allTasks.find(task => task.id === taskId);
};

/**
 * Create new task and add to db
 * @param boardId {string} - Id of board
 * @param params {Object} - Parameters of board
 * @return {Task} - New task
 */
const createTask = (boardId, params) => {
  const newTask = new Task({...params, boardId});
  const allTasks = tasksRepo.getAllTasks();
  allTasks.push(newTask);

  return newTask;
};

/**
 * Update task from db
 * @param boardId {string} - Id of board
 * @param taskId {string} - Id of task
 * @param params {Object} - Parameters for updating
 * @return {Object} - Updated task
 */
const updateTask = (boardId, taskId, params) => {
  const allTasks = tasksRepo.getAllTasks();

  const taskForUpdate = allTasks.find(task => task.id === taskId);
  return Object.assign(taskForUpdate, params, { boardId });
};

/**
 * Delete task from db
 * @param taskId {string} - Id of task
 * @return {Object} - Deleted task
 */
const removeTask = (taskId) => {
  const allTasks = tasksRepo.getAllTasks();
  let index;

  const taskForDelete = allTasks.find((task, idx) => {
    index = idx;
    return task.id === taskId;
  });

  allTasks.splice(index, 1);

  return taskForDelete;
};

module.exports = { getAllTasksFromRep, getTaskFromRep, createTask, updateTask, removeTask };