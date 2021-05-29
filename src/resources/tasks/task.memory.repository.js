const db = require('../../db');

/**
 * Return array of all tasks from db
 * @return {Array} - Array of all task
 */
const getAllTasks = () => db.getTasks();

/**
 * Set new array of task to db
 * @param newTasks {Array} - Array of updated tasks
 * @return {undefined}
 */
const setAllTasks = (newTasks) => db.setTasks(newTasks);

module.exports = { getAllTasks, setAllTasks };