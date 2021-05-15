const tasksRepo = require('./task.memory.repository')
const Task = require('./task.model');

const getAll = (boardId) => {
  const allTasks = tasksRepo.getAll()
  return allTasks.filter(task => task.boardId === boardId)
}

const getOne = (taskId) => {
  const allTasks = tasksRepo.getAll()
  return allTasks.find(task => task.id === taskId)
}

const create = (boardId, params) => {
  const newTask = new Task({...params, boardId})
  const allTasks = tasksRepo.getAll()
  allTasks.push(newTask)

  return newTask
}

const update = (boardId, taskId, params) => {
  const allTasks = tasksRepo.getAll()

  const taskForUpdate = allTasks.find(task => task.id === taskId)
  const updatedTask = Object.assign(taskForUpdate, params, { boardId })

  return updatedTask
}

const remove = (taskId) => {
  const allTasks = tasksRepo.getAll()
  let index

  const taskForDelete = allTasks.find((task, idx) => {
    index = idx
    return task.id === taskId
  })

  allTasks.splice(index, 1)

  return taskForDelete
}

module.exports = { getAll, getOne, create, update, remove }