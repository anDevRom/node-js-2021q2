const dataBase = {
  _users: [],

  getUsers() {
    return this._users
  },

  addUser(user) {
    this._users.push(user)
  },

  setUsers(users) {
    this._users = users
  }
}

module.exports = dataBase