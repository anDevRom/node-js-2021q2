const db = require('../../db');

/**
 * Return array of all tasks from db
 * @return {Array} - Array of all task
 */
const getAll = () => db.getTasks();

/**
 * Set new array of task to db
 * @param newTasks {Array} - Array of updated tasks
 * @return {undefined}
 */
const setAll = (newTasks) => db.setTasks(newTasks);

module.exports = { getAll, setAll };