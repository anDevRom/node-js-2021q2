const boardsRepo = require('./board.memory.repositiry');
const Board = require('./board.model');

const tasksRepo = require('../tasks/task.memory.repository');

/**
 * Return all boards from repository
 * @return {Array} - All boards
 */
const getAll = () => boardsRepo.getAll();

/**
 * Return board by id
 * @param id {string} - Id of board
 * @return {Object} - Founded board
 */
const get = (id) => {
  const boards = boardsRepo.getAll();
  return boards.find(board => board.id === id);
};

/**
 * Create new board and push it to db
 * @param params {Object} - Parameters for creation
 * @return {Board} - Created board
 */
const create = (params) => {
  const newBoardParams = {
    id: params.id,
    title: params.title,
    columns: params.columns
  };
  const newBoard = new Board(newBoardParams);

  boardsRepo.create(newBoard);

  return newBoard;
};

/**
 * Update board
 * @param id {string} - Id of board
 * @param params {Object} - Parameters for updating
 * @return {Object} - Updated board
 */
const update = (id, params) => {
  const boards = boardsRepo.getAll();
  const boardForUpdate = boards.find(board => board.id === id);

  return Object.assign(boardForUpdate, params);
};

/**
 * Delete board from db
 * @param id {string} - Id of board
 * @return {Object} - Deleted board
 */
const remove = (id) => {
  const boards = boardsRepo.getAll();
  const boardForDelete = boards.find(board => board.id === id);

  if (boardForDelete) {
    const tasks = tasksRepo.getAll();

    const newTasks = tasks.filter(task => task.boardId !== id);
    tasksRepo.setAll(newTasks);

    const newBoards = boards.filter(board => board.id !== id);

    boardsRepo.set(newBoards);
  }

  return boardForDelete;
};

module.exports = { getAll, get, create, update, remove };
