const boardsRepo = require('./board.memory.repositiry');
const Board = require('./board.model');

const tasksRepo = require('../tasks/task.memory.repository')

const getAll = () => boardsRepo.getAll();

const get = (id) => {
  const boards = boardsRepo.getAll()
  return boards.find(board => board.id === id)
}

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

const update = (id, params) => {
  const boards = boardsRepo.getAll()
  const boardForUpdate = boards.find(board => board.id === id)

  return Object.assign(boardForUpdate, params)
}

const remove = (id) => {
  const boards = boardsRepo.getAll()
  const boardForDelete = boards.find(board => board.id === id)

  if (boardForDelete) {
    const tasks = tasksRepo.getAll()

    const newTasks = tasks.filter(task => task.boardId !== id)
    tasksRepo.setAll(newTasks)

    const newBoards = boards.filter(board => board.id !== id)

    boardsRepo.set(newBoards)
  }

  return boardForDelete
}

module.exports = { getAll, get, create, update, remove };
