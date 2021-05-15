const dataBase = {
  _users: [],
  _boards: [],
  _tasks: [],

  getUsers() {
    return this._users
  },

  addUser(user) {
    this._users.push(user)
  },

  setUsers(users) {
    this._users = users
  },

  getBoards() {
    return this._boards
  },

  createBoard(board) {
    this._boards.push(board)
  },

  setBoards(boards) {
    this._boards = boards
  },

  getTasks() {
    return this._tasks
  },

  setTasks(tasks) {
    this._tasks = tasks
  }
}

module.exports = dataBase