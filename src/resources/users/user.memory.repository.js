const db = require('../../db')

const getAll = async () => {
  // TODO: mock implementation. should be replaced during task development
  const result = db.getUsers()
  return result;
};

const add = async (user) => {
  db.addUser(user)
}

module.exports = { getAll, add };
