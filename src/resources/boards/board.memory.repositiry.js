const db = require('../../db')

const getAll = () => db.getBoards()
const create = (board) => db.createBoard(board)
const set = (boards) => db.setBoards(boards)

module.exports = { getAll, create, set };