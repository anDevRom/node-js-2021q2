const boardsRepo = require('./board.memory.repositiry');
const Board = require('./board.model');

const getAll = () => boardsRepo.getAll();

const create = (params) => {
  const newBoardParams = {
    id: params.id,
    title: params.title,
    columns: params.columns
  }
  const newBoard = new Board(newBoardParams)

  boardsRepo.create(newBoard)

  return newBoard
}

module.exports = { getAll, create };
