const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const taskRepo = require('../tasks/task.memory.repository');

/**
 * Returns all users from repository
 * @returns {Array} - Array of all users
 */
const getAll = () => usersRepo.getAll();

/**
 * Returns user by id from repository
 * @param {string} id - Users id
 * @returns {Object} - Object representation of user
 */
const get = (id) => {
  const users = usersRepo.getAll();

  return users.find(user => user.id === id);
};

/**
 * Create new user and add it to repository
 * @param {Object} params - Users parameters
 * @returns {Object} - Object representation of new user
 */
const add = (params) => {
  const newUser = new User(params);

  usersRepo.add(newUser);

  return User.toResponse(newUser);
};

/**
 * Update user by id
 * @param {string} id - Users id
 * @param {Object} params - Users parameters
 * @returns {Object} - Object representation of updated user
 */
const update = (id, params) => {
  const users = usersRepo.getAll();
  const userForUpdate = users.find(user => user.id === id);

  Object.assign(userForUpdate, params);

  return userForUpdate;
};

/**
 * Delete user by id
 * @param {string} id - Users id
 * @return {Object} - Object representation of deleted user
 */
const remove = (id) => {
  const users = usersRepo.getAll();
  const userForDelete = users.find(user => user.id === id);

  if (userForDelete) {
    const tasks = taskRepo.getAll();
    tasks.forEach(task => {
      if (task.userId === id) {
        // eslint-disable-next-line no-param-reassign
        task.userId = null;
      }
    });

    const newUsers = users.filter(user => user.id !== id);

    usersRepo.set(newUsers);
  }

  return userForDelete;
};

module.exports = { getAll, add, get, remove, update };
