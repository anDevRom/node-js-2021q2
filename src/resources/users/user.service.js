const usersRepo = require('./user.memory.repository');
const User = require('./user.model')

const getAll = () => usersRepo.getAll();

const get = (id) => {
  const users = usersRepo.getAll()
  return users.find(user => user.id === id)
}

const add = (params) => {
  const newUser = new User(params)

  usersRepo.add(newUser)

  return User.toResponse(newUser)
}

module.exports = { getAll, add, get };
