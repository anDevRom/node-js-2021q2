const router = require('express').Router();
const tasksServices = require('./task.service');

router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = tasksServices.getAll(req.params.boardId);
  res.status(tasks ? 200 : 404).json(tasks);
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const task = tasksServices.getOne(req.params.taskId);
  res.status(task ? 200 : 404).json(task);
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const task = tasksServices.create(req.params.boardId, req.body);
  res.status(201).json(task);
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const task = tasksServices.update(req.params.boardId, req.params.taskId, req.body);
  res.status(task ? 200 : 404).json(task);
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  const task = tasksServices.remove(req.params.taskId);
  res.status(task ? 204 : 404).json(task);
});

module.exports = router;