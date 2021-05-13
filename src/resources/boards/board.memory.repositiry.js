const db = require('../../db')

const getAll = () => db.getBoards()
const create = (board) => db.createBoard(board)

module.exports = { getAll, create };