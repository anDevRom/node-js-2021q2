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

const update = (id, params) => {
  const users = usersRepo.getAll()
  const userForUpdate = users.find(user => user.id === id)

  Object.assign(userForUpdate, params)

  return userForUpdate
}

const remove = (id) => {
  const users = usersRepo.getAll()
  const userForDelete = users.find(user => user.id === id)

  if (userForDelete) {
    const newUsers = users.filter(user => user.id !== id)

    usersRepo.set(newUsers)
  }

  return userForDelete
}

module.exports = { getAll, add, get, remove, update };
