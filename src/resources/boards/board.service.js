const boardsRepo = require('./board.memory.repositiry');
const Board = require('./board.model');

const tasksRepo = require('../tasks/task.memory.repository');

/**
 * Return all boards from repository
 * @return {Array} - All boards
 */
const getAllBoardsFormRep = () => boardsRepo.getAllBoards();

/**
 * Return board by id
 * @param id {string} - Id of board
 * @return {Object} - Founded board
 */
const getBoardFromRep = (id) => {
  const boards = boardsRepo.getAllBoards();
  return boards.find(board => board.id === id);
};

/**
 * Create new board and push it to db
 * @param params {Object} - Parameters for creation
 * @return {Board} - Created board
 */
const createBoard = (params) => {
  const newBoardParams = {
    id: params.id,
    title: params.title,
    columns: params.columns
  };
  const newBoard = new Board(newBoardParams);

  boardsRepo.createBoard(newBoard);

  return newBoard;
};

/**
 * Update board
 * @param id {string} - Id of board
 * @param params {Object} - Parameters for updating
 * @return {Object} - Updated board
 */
const updateBoard = (id, params) => {
  const boards = boardsRepo.getAllBoards();
  const boardForUpdate = boards.find(board => board.id === id);

  return Object.assign(boardForUpdate, params);
};

/**
 * Delete board from db
 * @param id {string} - Id of board
 * @return {Object} - Deleted board
 */
const removeBoard = (id) => {
  const boards = boardsRepo.getAllBoards();
  const boardForDelete = boards.find(board => board.id === id);

  if (boardForDelete) {
    const tasks = tasksRepo.getAllTasks();

    const newTasks = tasks.filter(task => task.boardId !== id);
    tasksRepo.setAllTasks(newTasks);

    const newBoards = boards.filter(board => board.id !== id);

    boardsRepo.setAllBoards(newBoards);
  }

  return boardForDelete;
};

module.exports = { getAllBoardsFormRep, getBoardFromRep, createBoard, updateBoard, removeBoard };
