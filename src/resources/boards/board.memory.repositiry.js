const db = require('../../db');

/**
 * Return all board from db
 * @return {Array} - All boards
 */
const getAll = () => db.getBoards();

/**
 * Add created board in db
 * @param board {Object} - Created board
 * @return {undefined}
 */
const create = (board) => db.createBoard(board);

/**
 * Set new array boards in db
 * @param boards {Array} - New array of boards
 * @return {undefined}
 */
const set = (boards) => db.setBoards(boards);

module.exports = { getAll, create, set };