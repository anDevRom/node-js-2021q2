const db = require('../../db');

/**
 * Returns all users from db
 * @return {Array} - Array of all users
 */
const getAll = () => db.getUsers();

/**
 * Adds new user to db
 * @param user {Object} - Object representation of new user
 * @return {undefined}
 */
const add = (user) => db.addUser(user);

/**
 * Transfer new array of users to db
 * @param users {Array} - Array of new users
 * @return {undefined}
 */
const set = (users) => db.setUsers(users);

module.exports = { getAll, add, set };
