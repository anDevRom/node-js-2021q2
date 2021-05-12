const dataBase = {
  _users: [],

  getUsers() {
    return this._users
  },

  addUser(user) {
    this._users.push(user)
  }
}

module.exports = dataBase