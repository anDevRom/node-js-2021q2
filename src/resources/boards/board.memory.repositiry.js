const db = require('../../db');

/**
 * Return all board from db
 * @return {Array} - All boards
 */
const getAllBoards = () => db.getBoards();

/**
 * Add created board in db
 * @param board {Object} - Created board
 * @return {undefined}
 */
const createBoard = (board) => db.createBoard(board);

/**
 * Set new array boards in db
 * @param boards {Array} - New array of boards
 * @return {undefined}
 */
const setAllBoards = (boards) => db.setBoards(boards);

module.exports = { getAllBoards, createBoard, setAllBoards };