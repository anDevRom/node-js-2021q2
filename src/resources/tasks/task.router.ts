import { Router } from 'express';
import { getAllTasksFromRep, getTaskFromRep, createTask, updateTask, removeTask } from './task.service';

const router = Router();

router.route('/:boardId/tasks').get(async (req, res) => {
  const tasks = getAllTasksFromRep(req.params.boardId);
  res.status(tasks ? 200 : 404).json(tasks);
});

router.route('/:boardId/tasks/:taskId').get(async (req, res) => {
  const task = getTaskFromRep(req.params.taskId);
  res.status(task ? 200 : 404).json(task);
});

router.route('/:boardId/tasks').post(async (req, res) => {
  const task = createTask(req.params.boardId, req.body);
  res.status(201).json(task);
});

router.route('/:boardId/tasks/:taskId').put(async (req, res) => {
  const task = updateTask(req.params.boardId, req.params.taskId, req.body);
  res.status(task ? 200 : 404).json(task);
});

router.route('/:boardId/tasks/:taskId').delete(async (req, res) => {
  const task = removeTask(req.params.taskId);
  res.status(task ? 204 : 404).json(task);
});

module.exports = router;