const db = require('../../db')

const getAll = () => {
  // TODO: mock implementation. should be replaced during task development
  const result = db.getUsers()
  return result;
};

const add = (user) => {
  db.addUser(user)
}

const set = (users) => {
  db.setUsers(users)
}

module.exports = { getAll, add, set };
