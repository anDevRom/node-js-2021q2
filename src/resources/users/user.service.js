const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const taskRepo = require('../tasks/task.memory.repository');

/**
 * Returns all users from repository
 * @returns {Array} - Array of all users
 */
const getAllUsersFromRepository = () => usersRepo.getAllUsers();

/**
 * Returns user by id from repository
 * @param {string} id - Users id
 * @returns {Object} - Object representation of user
 */
const getUserFromRepository = (id) => {
  const users = usersRepo.getAllUsers();

  return users.find(user => user.id === id);
};

/**
 * Create new user and add it to repository
 * @param {Object} params - Users parameters
 * @returns {Object} - Object representation of new user
 */
const addUserToRepository = (params) => {
  const newUser = new User(params);

  usersRepo.addUser(newUser);

  return User.toResponse(newUser);
};

/**
 * Update user by id
 * @param {string} id - Users id
 * @param {Object} params - Users parameters
 * @returns {Object} - Object representation of updated user
 */
const updateUserFromRepository = (id, params) => {
  const users = usersRepo.getAllUsers();
  const userForUpdate = users.find(user => user.id === id);

  Object.assign(userForUpdate, params);

  return userForUpdate;
};

/**
 * Delete user by id
 * @param {string} id - Users id
 * @return {Object} - Object representation of deleted user
 */
const removeUserFromRepository = (id) => {
  const users = usersRepo.getAllUsers();
  const userForDelete = users.find(user => user.id === id);

  if (userForDelete) {
    const tasks = taskRepo.getAllTasks();
    tasks.forEach(task => {
      if (task.userId === id) {
        // eslint-disable-next-line no-param-reassign
        task.userId = null;
      }
    });

    const newUsers = users.filter(user => user.id !== id);

    usersRepo.setUsers(newUsers);
  }

  return userForDelete;
};

module.exports = { getAllUsersFromRepository, addUserToRepository, getUserFromRepository, removeUserFromRepository, updateUserFromRepository };
