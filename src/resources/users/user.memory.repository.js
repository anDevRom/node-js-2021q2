const db = require('../../db');

/**
 * Returns all users from db
 * @return {Array} - Array of all users
 */
const getAllUsers = () => db.getUsers();

/**
 * Adds new user to db
 * @param user {Object} - Object representation of new user
 * @return {undefined}
 */
const addUser = (user) => db.addUser(user);

/**
 * Transfer new array of users to db
 * @param users {Array} - Array of new users
 * @return {undefined}
 */
const setUsers = (users) => db.setUsers(users);

module.exports = { getAllUsers, addUser, setUsers };
